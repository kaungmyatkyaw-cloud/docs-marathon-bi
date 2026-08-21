# 🎫 BI Service & Task Tracker

Manage and track BI HUB initiatives, ETL pipelines, Data Warehouse epics, and service tickets.

<style>
.bi-tracker-container { font-family: var(--md-text-font); max-width: 100%; margin: 20px 0; }
.bi-tracker-form { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr 1fr auto; gap: 10px; margin-bottom: 20px; padding: 15px; background: var(--md-code-bg-color); border-radius: 8px; border: 1px solid var(--md-default-fg-color--lightest); }
.bi-tracker-form input, .bi-tracker-form select { padding: 8px; border: 1px solid var(--md-default-fg-color--lightest); border-radius: 4px; background: var(--md-default-bg-color); color: var(--md-default-fg-color); font-size: 0.85rem; }
.bi-tracker-form button { padding: 8px 16px; background: var(--md-primary-fg-color); color: var(--md-primary-bg-color); border: none; border-radius: 4px; cursor: pointer; font-weight: bold; }
.bi-tracker-form button:hover { opacity: 0.9; }
.bi-tracker-table { width: 100%; border-collapse: collapse; font-size: 0.9rem; }
.bi-tracker-table th, .bi-tracker-table td { padding: 10px; text-align: left; border-bottom: 1px solid var(--md-default-fg-color--lightest); }
.bi-tracker-table th { background: var(--md-code-bg-color); font-weight: 600; }
.status-badge { padding: 4px 8px; border-radius: 12px; font-size: 0.75rem; font-weight: 600; text-align: center; display: inline-block; min-width: 80px;}
.status-backlog { background: #e0e0e0; color: #333; }
.status-in-progress { background: #bbdefb; color: #0d47a1; }
.status-review { background: #fff9c4; color: #f57f17; }
.status-completed { background: #c8e6c9; color: #1b5e20; }
.status-blocked { background: #ffcdd2; color: #b71c1c; }
.priority-badge { padding: 3px 8px; border-radius: 8px; font-size: 0.75rem; font-weight: 600; }
.priority-high { background: #ffcdd2; color: #b71c1c; }
.priority-medium { background: #fff9c4; color: #f57f17; }
.priority-low { background: #c8e6c9; color: #1b5e20; }
.epic-badge { padding: 3px 8px; border-radius: 8px; font-size: 0.7rem; background: #e3f2fd; color: #1565c0; }
.progress-bar { width: 100%; height: 6px; background: #e0e0e0; border-radius: 3px; overflow: hidden; }
.progress-fill { height: 100%; background: var(--md-primary-fg-color); transition: width 0.3s; }
.ticket-id { font-family: monospace; background: var(--md-code-bg-color); padding: 2px 6px; border-radius: 4px; font-size: 0.8rem; }
.duration-badge { background: #f5f5f5; padding: 3px 8px; border-radius: 8px; font-size: 0.75rem; }
.action-btn { background: none; border: none; cursor: pointer; font-size: 1.1rem; padding: 0 5px; }
.action-btn:hover { opacity: 0.7; }
.filter-bar { display: flex; gap: 10px; margin-bottom: 15px; flex-wrap: wrap; }
.filter-bar select, .filter-bar input { padding: 6px 10px; border: 1px solid var(--md-default-fg-color--lightest); border-radius: 4px; background: var(--md-default-bg-color); }
@media (max-width: 1024px) {
    .bi-tracker-form { grid-template-columns: 1fr; }
    .bi-tracker-table { font-size: 0.8rem; }
}
</style>

<div class="bi-tracker-container">
    <!-- Filter Bar -->
    <div class="filter-bar">
        <select id="filter-epic" onchange="filterTasks()">
            <option value="">All Epics</option>
            <option value="Epic 1">Epic 1: Source Analysis</option>
            <option value="Epic 2">Epic 2: Infrastructure & ETL</option>
            <option value="Epic 3">Epic 3: MDM & DW</option>
            <option value="Epic 4">Epic 4: Performance BI</option>
            <option value="Epic 5">Epic 5: Zammad</option>
            <option value="Daily Routine">Daily Routine</option>
            <option value="Ad-hoc">Ad-hoc</option>
        </select>
        <select id="filter-status" onchange="filterTasks()">
            <option value="">All Status</option>
            <option value="Backlog">Backlog</option>
            <option value="In Progress">In Progress</option>
            <option value="Review">Review</option>
            <option value="Completed">Completed</option>
            <option value="Blocked">Blocked</option>
        </select>
        <select id="filter-priority" onchange="filterTasks()">
            <option value="">All Priority</option>
            <option value="High">🔴 High</option>
            <option value="Medium">🟡 Medium</option>
            <option value="Low"> Low</option>
        </select>
        <input type="text" id="search-task" placeholder="🔍 Search tasks..." oninput="filterTasks()">
    </div>

    <!-- Input Form -->
    <form id="task-form" class="bi-tracker-form">
        <input type="text" id="task-name" placeholder="Task / Ticket Description" required>
        <select id="task-epic" required>
            <option value="">Select Epic</option>
            <option value="Epic 1">Epic 1: Source Analysis</option>
            <option value="Epic 2">Epic 2: Infrastructure & ETL</option>
            <option value="Epic 3">Epic 3: MDM & DW</option>
            <option value="Epic 4">Epic 4: Performance BI</option>
            <option value="Epic 5">Epic 5: Zammad</option>
            <option value="Daily Routine">Daily Routine</option>
            <option value="Ad-hoc">Ad-hoc</option>
        </select>
        <select id="task-priority" required>
            <option value="Medium">🟡 Medium Priority</option>
            <option value="High">🔴 High Priority</option>
            <option value="Low">🟢 Low Priority</option>
        </select>
        <input type="text" id="task-assignee" placeholder="Assignee">
        <input type="date" id="start-date" required>
        <input type="date" id="end-date" required>
        <select id="task-status" required>
            <option value="Backlog">Backlog</option>
            <option value="In Progress">In Progress</option>
            <option value="Review">Review</option>
            <option value="Completed">Completed</option>
            <option value="Blocked">Blocked</option>
        </select>
        <button type="submit">+ Create Ticket</button>
    </form>

    <!-- Tasks Table -->
    <table class="bi-tracker-table">
        <thead>
            <tr>
                <th>Ticket ID</th>
                <th>Task / Description</th>
                <th>Epic</th>
                <th>Priority</th>
                <th>Assignee</th>
                <th>Duration</th>
                <th>Progress</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody id="task-tbody">
            <tr><td colspan="9" style="text-align:center; padding:20px;">Loading tasks...</td></tr>
        </tbody>
    </table>
</div>

<script>
    const API_URL = 'https://docs-marathon-bi.kaungmyatkyaw.workers.dev/api/tasks';
    let allTasks = [];

    document.addEventListener('DOMContentLoaded', () => {
        loadTasks();
        
        document.getElementById('task-form').addEventListener('submit', async (e) => {
            e.preventDefault();
            const taskData = {
                task: document.getElementById('task-name').value,
                epic: document.getElementById('task-epic').value,
                priority: document.getElementById('task-priority').value,
                assignee: document.getElementById('task-assignee').value,
                startDate: document.getElementById('start-date').value,
                endDate: document.getElementById('end-date').value,
                status: document.getElementById('task-status').value,
                progress: 0
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
        allTasks = await res.json();
        filterTasks();
    }

    function filterTasks() {
        const epicFilter = document.getElementById('filter-epic').value;
        const statusFilter = document.getElementById('filter-status').value;
        const priorityFilter = document.getElementById('filter-priority').value;
        const searchTerm = document.getElementById('search-task').value.toLowerCase();

        let filtered = allTasks.filter(t => {
            const matchEpic = !epicFilter || t.epic === epicFilter;
            const matchStatus = !statusFilter || t.status === statusFilter;
            const matchPriority = !priorityFilter || t.priority === priorityFilter;
            const matchSearch = !searchTerm || t.task.toLowerCase().includes(searchTerm) || 
                               (t.ticketId && t.ticketId.toLowerCase().includes(searchTerm));
            return matchEpic && matchStatus && matchPriority && matchSearch;
        });

        // Sort by priority (High first) then by end date
        const priorityOrder = { 'High': 0, 'Medium': 1, 'Low': 2 };
        filtered.sort((a, b) => {
            if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
                return priorityOrder[a.priority] - priorityOrder[b.priority];
            }
            return new Date(a.endDate) - new Date(b.endDate);
        });

        renderTasks(filtered);
    }

    function renderTasks(tasks) {
        const tbody = document.getElementById('task-tbody');
        
        if (tasks.length === 0) {
            tbody.innerHTML = '<tr><td colspan="9" style="text-align:center; padding:20px; color: var(--md-default-fg-color--light);">No tasks found. Create one above!</td></tr>';
            return;
        }

        tbody.innerHTML = tasks.map(t => `
            <tr>
                <td><span class="ticket-id">${t.ticketId || 'BI-NEW'}</span></td>
                <td><strong>${t.task}</strong></td>
                <td><span class="epic-badge">${t.epic}</span></td>
                <td><span class="priority-badge priority-${t.priority.toLowerCase()}">${t.priority}</span></td>
                <td>${t.assignee || '-'}</td>
                <td><span class="duration-badge">${t.durationDays || '-'} days</span></td>
                <td>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${t.progress || 0}%"></div>
                    </div>
                    <small>${t.progress || 0}%</small>
                </td>
                <td><span class="status-badge status-${t.status.toLowerCase().replace(' ', '-')}">${t.status}</span></td>
                <td>
                    <button class="action-btn" onclick="updateProgress('${t.id}')" title="Update Progress"></button>
                    <button class="action-btn" onclick="updateStatus('${t.id}')" title="Change Status">🔄</button>
                    <button class="action-btn" onclick="deleteTask('${t.id}')" title="Delete">🗑️</button>
                </td>
            </tr>
        `).join('');
    }

    async function updateStatus(id) {
        const task = allTasks.find(t => t.id === id);
        const statuses = ['Backlog', 'In Progress', 'Review', 'Completed', 'Blocked'];
        const currentIndex = statuses.indexOf(task.status);
        const newStatus = statuses[(currentIndex + 1) % statuses.length];
        
        await fetch(API_URL, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id, status: newStatus })
        });
        loadTasks();
    }

    async function updateProgress(id) {
        const task = allTasks.find(t => t.id === id);
        const newProgress = prompt(`Update progress for "${task.task}" (0-100):`, task.progress || 0);
        
        if (newProgress !== null && !isNaN(newProgress)) {
            await fetch(API_URL, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id, progress: Math.min(100, Math.max(0, parseInt(newProgress))) })
            });
            loadTasks();
        }
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
</script>