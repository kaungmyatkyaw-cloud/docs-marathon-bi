export default {
  async fetch(request, env) {
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Content-Type': 'application/json'
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    const url = new URL(request.url);
    const path = url.pathname;

    try {
      // GET: Fetch all tasks
      if (request.method === 'GET' && path === '/api/tasks') {
        const data = await env.BI_HUB_TASKS.get('project_tracker', 'json');
        return new Response(JSON.stringify(data || []), { headers: corsHeaders });
      }

      // POST: Add a new task
      if (request.method === 'POST' && path === '/api/tasks') {
        const newTask = await request.json();
        
        // Generate Ticket ID
        let tasks = await env.BI_HUB_TASKS.get('project_tracker', 'json') || [];
        const ticketNumber = String(tasks.length + 1).padStart(3, '0');
        
        newTask.id = crypto.randomUUID();
        newTask.ticketId = `BI-${ticketNumber}`;
        newTask.createdAt = new Date().toISOString();
        newTask.progress = newTask.progress || 0;
        
        // Calculate duration
        if (newTask.startDate && newTask.endDate) {
          const start = new Date(newTask.startDate);
          const end = new Date(newTask.endDate);
          newTask.durationDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;
        }
        
        tasks.push(newTask);
        await env.BI_HUB_TASKS.put('project_tracker', JSON.stringify(tasks));
        return new Response(JSON.stringify({ success: true, task: newTask }), { headers: corsHeaders });
      }

      // PUT: Update an existing task
      if (request.method === 'PUT' && path === '/api/tasks') {
        const updatedTask = await request.json();
        let tasks = await env.BI_HUB_TASKS.get('project_tracker', 'json') || [];
        
        // Recalculate duration if dates changed
        if (updatedTask.startDate && updatedTask.endDate) {
          const start = new Date(updatedTask.startDate);
          const end = new Date(updatedTask.endDate);
          updatedTask.durationDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;
        }
        
        tasks = tasks.map(t => t.id === updatedTask.id ? { ...t, ...updatedTask } : t);
        await env.BI_HUB_TASKS.put('project_tracker', JSON.stringify(tasks));
        
        return new Response(JSON.stringify({ success: true }), { headers: corsHeaders });
      }

      // DELETE: Remove a task
      if (request.method === 'DELETE' && path === '/api/tasks') {
        const { id } = await request.json();
        let tasks = await env.BI_HUB_TASKS.get('project_tracker', 'json') || [];
        
        tasks = tasks.filter(t => t.id !== id);
        await env.BI_HUB_TASKS.put('project_tracker', JSON.stringify(tasks));
        
        return new Response(JSON.stringify({ success: true }), { headers: corsHeaders });
      }

      return new Response('Not Found', { status: 404, headers: corsHeaders });
    } catch (err) {
      return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: corsHeaders });
    }
  }
};