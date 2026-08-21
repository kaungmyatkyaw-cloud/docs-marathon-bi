// src/index.js
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // 1. Handle API routes for the Task Tracker
    if (url.pathname.startsWith('/api/tasks')) {
      const corsHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json'
      };

      if (request.method === 'OPTIONS') {
        return new Response(null, { headers: corsHeaders });
      }

      try {
        // GET: Fetch all tasks
        if (request.method === 'GET') {
          const data = await env.BI_HUB_TASKS.get('project_tracker', 'json');
          return new Response(JSON.stringify(data || []), { headers: corsHeaders });
        }

        // POST: Add a new task
        if (request.method === 'POST') {
          const newTask = await request.json();
          newTask.id = crypto.randomUUID();
          newTask.createdAt = new Date().toISOString();
          
          let tasks = await env.BI_HUB_TASKS.get('project_tracker', 'json') || [];
          tasks.push(newTask);
          
          await env.BI_HUB_TASKS.put('project_tracker', JSON.stringify(tasks));
          return new Response(JSON.stringify({ success: true, task: newTask }), { headers: corsHeaders });
        }

        // PUT: Update an existing task (e.g., changing status)
        if (request.method === 'PUT') {
          const updatedTask = await request.json();
          let tasks = await env.BI_HUB_TASKS.get('project_tracker', 'json') || [];
          
          tasks = tasks.map(t => t.id === updatedTask.id ? { ...t, ...updatedTask } : t);
          await env.BI_HUB_TASKS.put('project_tracker', JSON.stringify(tasks));
          
          return new Response(JSON.stringify({ success: true }), { headers: corsHeaders });
        }

        // DELETE: Remove a task
        if (request.method === 'DELETE') {
          const { id } = await request.json();
          let tasks = await env.BI_HUB_TASKS.get('project_tracker', 'json') || [];
          
          tasks = tasks.filter(t => t.id !== id);
          await env.BI_HUB_TASKS.put('project_tracker', JSON.stringify(tasks));
          
          return new Response(JSON.stringify({ success: true }), { headers: corsHeaders });
        }
      } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: corsHeaders });
      }
    }

    // 2. Fall back to serving static MkDocs assets for all other routes
    return env.ASSETS.fetch(request);
  }
}