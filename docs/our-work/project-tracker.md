# 📊 Project Tracker

Manage and track the status of BI HUB initiatives, ETL pipelines, and Data Warehouse epics.

<style>
.bi-tracker-container { font-family: var(--md-text-font); max-width: 100%; margin: 20px 0; }
.bi-tracker-form { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr auto; gap: 10px; margin-bottom: 20px; padding: 15px; background: var(--md-code-bg-color); border-radius: 8px; border: 1px solid var(--md-default-fg-color--lightest); }
.bi-tracker-form input, .bi-tracker-form select { padding: 8px; border: 1px solid var(--md-default-fg-color--lightest); border-radius: 4px; background: var(--md-default-bg-color); color: var(--md-default-fg-color); font-size: 0.9rem; }
.bi-tracker-form button { padding: 8px 16px; background: var(--md-primary-fg-color); color: var(--md-primary-bg-color); border: none; border-radius: 4px; cursor: pointer; font-weight: bold; }
.bi-tracker-form button:hover { opacity: 0.9; }
.bi-tracker-table { width: 100%; border-collapse: collapse; }
.bi-tracker-table th, .bi-tracker-table td { padding: 12px; text-align: left; border-bottom: 1px solid var(--md-default-fg-color--lightest); }
.bi-tracker-table th { background: var(--md-code-bg-color); font-weight: 600; }
.status-badge { padding: 4px 8px; border-radius: 12px; font-size: 0.8rem; font-weight: 600; text-align: center; display: inline-block; min-width: 80px;}
.status-not-started { background: #e0e0e0; color: #333; }
.status-in-progress { background: #bbdefb; color: #0d47a1; }
.status-completed { background: #c8e6c9; color: #1b5e20; }
.status-blocked { background: #ffcdd2; color: #b71c1c; }
.action-btn { background: none; border: none; cursor: pointer; font-size: 1.2rem; padding: 0 5px; }
.action-btn:hover { opacity: 0.7; }
@media (max-width: 768px) {
    .bi-tracker-form { grid-template-columns: 1fr; }
}
</style>

<div class="bi-tracker-container">
    <!-- Input Form -->
    <form id="task-form" class="bi-tracker-form">
        <input type="text" id="task-name" placeholder="Task / Epic Name" required>
        <input type="date" id="start-date" required>
        <input type="date" id="end-date" required>
        <select id="task-status" required>
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
            <option value="Blocked">Blocked</option>
        </select>
        <button type="submit">+ Add Task</button>
    </form>

    <!-- Tasks Table -->
    <table class="bi-tracker-table">
        <thead>
            <tr>
                <th>Task / Initiative</th>
                <th>Start Date</th>
                <th>Target End Date</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody id="task-tbody">
            <tr><td colspan="5" style="text-align:center; padding:20px;">Loading tasks...</td></tr>
        </tbody>
    </table>
</div>

<script>
    const API_URL = 'https://docs-marathon-bi.kaungmyatkyaw.workers.dev/api/tasks'; 

    document.addEventListener('DOMContentLoaded', () => {
        loadTasks();
        
        document.getElementById('task-form').addEventListener('submit', async (e) => {
            e.preventDefault();
            const taskData = {
                task: document.getElementById('task-name').value,
                startDate: document.getElementById('start-date').value,
                endDate: document.getElementById('end-date').value,
                status: document.getElementById('task-status').value
            };

            await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(taskData)
            });
            
            e.target.reset();
            loadTasks();
        });
    });

    async function loadTasks() {
        const res = await fetch(API_URL);
        const tasks = await res.json();
        const tbody = document.getElementById('task-tbody');
        tbody.innerHTML = '';

        if (tasks.length === 0) {
            tbody.innerHTML = '<tr><td colspan="5" style="text-align:center; padding:20px; color: var(--md-default-fg-color--light);">No tasks yet. Add one above!</td></tr>';
            return;
        }

        // Sort by End Date (closest first)
        tasks.sort((a, b) => new Date(a.endDate) - new Date(b.endDate));

        tasks.forEach(t => {
            const statusClass = `status-${t.status.toLowerCase().replace(' ', '-')}`;
            tbody.innerHTML += `
                <tr>
                    <td><strong>${t.task}</strong></td>
                    <td>${formatDate(t.startDate)}</td>
                    <td>${formatDate(t.endDate)}</td>
                    <td><span class="status-badge ${statusClass}">${t.status}</span></td>
                    <td>
                        <button class="action-btn" onclick="updateStatus('${t.id}', '${getNextStatus(t.status)}')" title="Cycle Status">🔄</button>
                        <button class="action-btn" onclick="deleteTask('${t.id}')" title="Delete">🗑️</button>
                    </td>
                </tr>
            `;
        });
    }

    async function updateStatus(id, newStatus) {
        await fetch(API_URL, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id, status: newStatus })
        });
        loadTasks();
    }

    async function deleteTask(id) {
        if(!confirm('Delete this task?')) return;
        await fetch(API_URL, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id })
        });
        loadTasks();
    }

    function getNextStatus(current) {
        const cycle = ['Not Started', 'In Progress', 'Completed', 'Blocked'];
        return cycle[(cycle.indexOf(current) + 1) % cycle.length];
    }

    function formatDate(dateStr) {
        if (!dateStr) return '-';
        return new Date(dateStr).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
    }
</script>