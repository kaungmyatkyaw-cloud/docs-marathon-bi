# 🎫 BI Service & Task Tracker

<div class="tracker-header">
    <div class="header-content">
        <h1>📊 BI Service & Task Tracker</h1>
        <p class="subtitle">Manage and track BI HUB initiatives, data requests, and service tickets efficiently</p>
    </div>
    <div class="header-actions">
        <button onclick="toggleGuide()" class="btn-guide">📖 User Guide</button>
    </div>
</div>

<!-- User Guide Section (Collapsible) -->
<div id="user-guide" class="user-guide" style="display: none;">
    <div class="guide-header">
        <h2>📘 User Guide & Best Practices</h2>
        <button onclick="toggleGuide()" class="btn-close">✕</button>
    </div>
    <div class="guide-content">
        <div class="guide-section">
            <h3>🎯 Creating a New Ticket</h3>
            <ol>
                <li><strong>Project Title:</strong> Enter a clear, descriptive title.</li>
                <li><strong>Ticket Type:</strong> Select the appropriate category:
                    <ul>
                        <li>📊 <strong>Data Request</strong> - Data extraction, reports, or analytics needs.</li>
                        <li>📈 <strong>Report & Analytics</strong> - Dashboard creation or BI reports.</li>
                        <li>🔗 <strong>Integration</strong> - API, system integration, or automation.</li>
                        <li>💡 <strong>Consultation</strong> - Advisory, training, or strategic planning.</li>
                        <li>️ <strong>Operations</strong> - Maintenance, support, or operational tasks.</li>
                    </ul>
                </li>
                <li><strong>Priority:</strong> 🔴 High (24-48hr), 🟡 Medium (3-5 days), 🟢 Low (1-2 weeks).</li>
                <li><strong>Attachments:</strong> Since we use Google Sheets, upload your screenshots/files to Google Drive, set sharing to "Anyone with the link", and paste the link here.</li>
            </ol>
        </div>
        <div class="guide-section">
            <h3>🔄 Managing Tickets</h3>
            <ul>
                <li><strong>Update Progress:</strong> Click  to set completion percentage (0-100%).</li>
                <li><strong>Change Status:</strong> Click 🔄 to cycle through: Backlog → In Progress → Review → Completed.</li>
            </ul>
        </div>
    </div>
</div>

<style>
/* Header Styles */
.tracker-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px; color: white; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3); }
.header-content h1 { margin: 0 0 8px 0; font-size: 2rem; font-weight: 700; }
.subtitle { margin: 0; opacity: 0.95; font-size: 1rem; }
.btn-guide { background: rgba(255, 255, 255, 0.2); border: 2px solid white; color: white; padding: 10px 20px; border-radius: 8px; cursor: pointer; font-weight: 600; transition: all 0.3s; }
.btn-guide:hover { background: white; color: #667eea; }

/* User Guide Styles */
.user-guide { background: var(--md-default-bg-color); border: 2px solid var(--md-primary-fg-color); border-radius: 12px; margin-bottom: 30px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.1); }
.guide-header { display: flex; justify-content: space-between; align-items: center; padding: 20px; background: var(--md-code-bg-color); border-bottom: 2px solid var(--md-default-fg-color--lightest); }
.guide-header h2 { margin: 0; color: var(--md-primary-fg-color); }
.btn-close { background: none; border: none; font-size: 1.5rem; cursor: pointer; color: var(--md-default-fg-color); }
.guide-content { padding: 25px; }
.guide-section { margin-bottom: 25px; padding-bottom: 20px; border-bottom: 1px solid var(--md-default-fg-color--lightest); }
.guide-section h3 { color: var(--md-primary-fg-color); margin-top: 0; }

/* Form Styles */
.bi-tracker-container { font-family: var(--md-text-font); max-width: 100%; margin: 20px 0; }
.bi-tracker-form { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 30px; padding: 25px; background: var(--md-code-bg-color); border-radius: 12px; border: 1px solid var(--md-default-fg-color--lightest); box-shadow: 0 2px 8px rgba(0,0,0,0.05); }
.bi-tracker-form .form-group { display: flex; flex-direction: column; }
.bi-tracker-form label { font-weight: 600; margin-bottom: 6px; color: var(--md-default-fg-color); font-size: 0.9rem; }
.bi-tracker-form input, .bi-tracker-form select, .bi-tracker-form textarea { padding: 12px; border: 2px solid var(--md-default-fg-color--lightest); border-radius: 8px; background: var(--md-default-bg-color); color: var(--md-default-fg-color); font-size: 0.95rem; font-family: var(--md-text-font); transition: border-color 0.3s; }
.bi-tracker-form input:focus, .bi-tracker-form select:focus, .bi-tracker-form textarea:focus { outline: none; border-color: var(--md-primary-fg-color); }
.bi-tracker-form textarea { resize: vertical; min-height: 80px; }
.bi-tracker-form .full-width { grid-column: 1 / -1; }
.bi-tracker-form button { padding: 12px 25px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 700; font-size: 1rem; transition: transform 0.2s; box-shadow: 0 4px 10px rgba(102, 126, 234, 0.3); }
.bi-tracker-form button:hover { transform: translateY(-2px); }

/* Filter Bar */
.filter-bar { display: flex; gap: 12px; margin-bottom: 25px; flex-wrap: wrap; align-items: center; padding: 15px; background: var(--md-code-bg-color); border-radius: 8px; }
.filter-bar select, .filter-bar input { padding: 10px 15px; border: 2px solid var(--md-default-fg-color--lightest); border-radius: 8px; background: var(--md-default-bg-color); font-size: 0.9rem; }
.filter-bar input[type="text"] { flex: 1; min-width: 250px; }

/* Table Styles - FIXED HEADER COLOR */
.bi-tracker-table { width: 100%; border-collapse: separate; border-spacing: 0; font-size: 0.9rem; margin-top: 10px; background: var(--md-default-bg-color); border-radius: 12px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.08); }
.bi-tracker-table th { background: linear-gradient(135deg, #4a5568 0%, #2d3748 100%); color: #ffffff; padding: 15px 12px; text-align: left; font-weight: 700; border-bottom: 3px solid #2d3748; text-transform: uppercase; font-size: 0.85rem; letter-spacing: 0.5px; }
.bi-tracker-table td { padding: 14px 12px; text-align: left; border-bottom: 1px solid var(--md-default-fg-color--lightest); vertical-align: middle; }
.bi-tracker-table tr:hover { background: var(--md-code-bg-color); }

/* Badges */
.ticket-id { font-family: 'Courier New', monospace; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 5px 10px; border-radius: 6px; font-size: 0.85rem; font-weight: 700; display: inline-block; }
.type-badge { padding: 5px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 600; display: inline-block; white-space: nowrap; }
.type-data-request { background: #e3f2fd; color: #1565c0; }
.type-report-analytics { background: #f3e5f5; color: #7b1fa2; }
.type-integration { background: #e8f5e9; color: #2e7d32; }
.type-consultation { background: #fff3e0; color: #e65100; }
.type-operations { background: #f5f5f5; color: #424242; }
.status-badge { padding: 5px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 600; text-align: center; display: inline-block; min-width: 100px; }
.status-backlog { background: #e0e0e0; color: #424242; }
.status-in-progress { background: #bbdefb; color: #0d47a1; }
.status-review { background: #fff9c4; color: #f57f17; }
.status-completed { background: #c8e6c9; color: #1b5e20; }
.status-blocked { background: #ffcdd2; color: #b71c1c; }
.priority-badge { padding: 4px 10px; border-radius: 12px; font-size: 0.8rem; font-weight: 600; display: inline-block; }
.priority-high { background: #ffcdd2; color: #b71c1c; }
.priority-medium { background: #fff9c4; color: #f57f17; }
.priority-low { background: #c8e6c9; color: #1b5e20; }
.duration-badge { background: #f5f5f5; padding: 5px 10px; border-radius: 8px; font-size: 0.8rem; font-weight: 600; display: inline-block; }
.attachment-link { color: var(--md-primary-fg-color); text-decoration: none; font-size: 0.85rem; display: inline-flex; align-items: center; gap: 5px; padding: 4px 8px; border-radius: 4px; background: rgba(102, 126, 234, 0.1); transition: background 0.2s; }
.attachment-link:hover { background: rgba(102, 126, 234, 0.2); text-decoration: underline; }
.remarks-text { font-size: 0.85rem; color: var(--md-default-fg-color--light); max-width: 250px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.remarks-text:hover { white-space: normal; overflow: visible; }
.progress-bar { width: 100%; height: 8px; background: #e0e0e0; border-radius: 4px; overflow: hidden; margin-bottom: 5px; }
.progress-fill { height: 100%; background: linear-gradient(90deg, #667eea 0%, #764ba2 100%); transition: width 0.3s; }
.action-btn { background: none; border: none; cursor: pointer; font-size: 1.2rem; padding: 6px 8px; border-radius: 6px; transition: background 0.2s, transform 0.2s; }
.action-btn:hover { background: var(--md-code-bg-color); transform: scale(1.1); }

@media (max-width: 768px) {
    .tracker-header { flex-direction: column; text-align: center; gap: 15px; }
    .bi-tracker-form { grid-template-columns: 1fr; }
    .filter-bar { flex-direction: column; align-items: stretch; }
    .filter-bar input[type="text"] { min-width: 100%; }
}
</style>

<div class="bi-tracker-container">
    <!-- Filter Bar -->
    <div class="filter-bar">
        <select id="filter-type" onchange="filterTasks()">
            <option value="">All Types</option>
            <option value="Data Request">📊 Data Request</option>
            <option value="Report & Analytics">📈 Report & Analytics</option>
            <option value="Integration">🔗 Integration</option>
            <option value="Consultation"> Consultation</option>
            <option value="Operations">⚙️ Operations</option>
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
            <option value="High"> High</option>
            <option value="Medium">🟡 Medium</option>
            <option value="Low">🟢 Low</option>
        </select>
        <input type="text" id="search-task" placeholder="🔍 Search by title, ticket ID, or remarks..." oninput="filterTasks()">
    </div>

    <!-- Input Form -->
    <form id="task-form" class="bi-tracker-form">
        <div class="form-group full-width">
            <label for="task-name">Project / Ticket Title *</label>
            <input type="text" id="task-name" placeholder="e.g., Migrate DAS Database to Cloud" required>
        </div>
        <div class="form-group">
            <label for="task-type">Ticket Type *</label>
            <select id="task-type" required>
                <option value="">Select Type</option>
                <option value="Data Request">📊 Data Request</option>
                <option value="Report & Analytics">📈 Report & Analytics</option>
                <option value="Integration"> Integration</option>
                <option value="Consultation">💡 Consultation</option>
                <option value="Operations">⚙️ Operations</option>
            </select>
        </div>
        <div class="form-group">
            <label for="task-priority">Priority *</label>
            <select id="task-priority" required>
                <option value="Medium">🟡 Medium Priority</option>
                <option value="High"> High Priority</option>
                <option value="Low">🟢 Low Priority</option>
            </select>
        </div>
        <div class="form-group">
            <label for="start-date">Start Date *</label>
            <input type="date" id="start-date" required>
        </div>
        <div class="form-group">
            <label for="end-date">Target End Date *</label>
            <input type="date" id="end-date" required>
        </div>
        <div class="form-group full-width">
            <label for="task-remarks">Remarks / Notes (Contact person, details, etc.)</label>
            <textarea id="task-remarks" placeholder="Contact person, business unit, specific requirements..."></textarea>
        </div>
        <div class="form-group full-width">
            <label for="task-attachments">📎 Attachments (Google Drive Links)</label>
            <textarea id="task-attachments" placeholder="Paste Google Drive shareable links here (one per line)&#10;Example: https://drive.google.com/file/d/xxxxx/view"></textarea>
            <small style="color: var(--md-default-fg-color--light); margin-top: 5px; display: block;">
                 Tip: Right-click file in Google Drive → Share → "Anyone with the link can view" → Copy link
            </small>
        </div>
        <button type="submit" class="full-width">+ Create New Ticket</button>
    </form>

    <!-- Tasks Table -->
    <table class="bi-tracker-table">
        <thead>
            <tr>
                <th>Ticket ID</th>
                <th>Title</th>
                <th>Type</th>
                <th>Priority</th>
                <th>Duration</th>
                <th>Progress</th>
                <th>Status</th>
                <th>Attachments</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody id="task-tbody">
            <tr><td colspan="9" style="text-align:center; padding:30px; color: var(--md-default-fg-color--light);">Loading tickets...</td></tr>
        </tbody>
    </table>
</div>

<script>
    // PASTE YOUR GOOGLE APPS SCRIPT WEB APP URL HERE
    const API_URL = 'https://script.google.com/macros/s/AKfycbyLdCXVFa3zZHjpvVpKIVEJpPRpK9RzExi_96tv_xlF9KLpij50UadXEKGrp2nm0LDk8Q/exec'; 
    let allTasks = [];

    function toggleGuide() {
        const guide = document.getElementById('user-guide');
        guide.style.display = guide.style.display === 'none' ? 'block' : 'none';
    }

    document.addEventListener('DOMContentLoaded', () => {
        loadTasks();
        
        document.getElementById('task-form').addEventListener('submit', async (e) => {
            e.preventDefault();
            const submitBtn = e.target.querySelector('button[type="submit"]');
            submitBtn.textContent = 'Saving...';
            submitBtn.disabled = true;

            const attachmentsText = document.getElementById('task-attachments').value.trim();
            const attachments = attachmentsText ? attachmentsText.split(/[\n,]+/).map(link => link.trim()).filter(link => link) : [];
            
            const taskData = {
                task: document.getElementById('task-name').value,
                type: document.getElementById('task-type').value,
                priority: document.getElementById('task-priority').value,
                startDate: document.getElementById('start-date').value,
                endDate: document.getElementById('end-date').value,
                remarks: document.getElementById('task-remarks').value,
                attachments: attachments.join(', ') // Save as comma-separated string in Sheet
            };

            try {
                // Google Apps Script requires text/plain to avoid CORS preflight issues
                await fetch(API_URL, {
                    method: 'POST',
                    mode: 'no-cors', 
                    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                    body: JSON.stringify(taskData)
                });
                
                alert('✅ Ticket created successfully! It will appear in the table shortly.');
                e.target.reset();
                setTimeout(loadTasks, 2000); // Reload after 2 seconds to let sheet update
            } catch (error) {
                alert('❌ Error: ' + error.message);
            } finally {
                submitBtn.textContent = '+ Create New Ticket';
                submitBtn.disabled = false;
            }
        });
    });

    async function loadTasks() {
        try {
            const res = await fetch(API_URL);
            allTasks = await res.json();
            filterTasks();
        } catch (error) {
            console.error("Failed to load tasks:", error);
        }
    }

    function filterTasks() {
        const typeFilter = document.getElementById('filter-type').value;
        const statusFilter = document.getElementById('filter-status').value;
        const priorityFilter = document.getElementById('filter-priority').value;
        const searchTerm = document.getElementById('search-task').value.toLowerCase();

        let filtered = allTasks.filter(t => {
            const matchType = !typeFilter || t.Type === typeFilter;
            const matchStatus = !statusFilter || t.Status === statusFilter;
            const matchPriority = !priorityFilter || t.Priority === priorityFilter;
            const matchSearch = !searchTerm || 
                (t.Title && t.Title.toLowerCase().includes(searchTerm)) || 
                (t['Ticket ID'] && t['Ticket ID'].toLowerCase().includes(searchTerm)) ||
                (t.Remarks && t.Remarks.toLowerCase().includes(searchTerm));
            return matchType && matchStatus && matchPriority && matchSearch;
        });

        const priorityOrder = { 'High': 0, 'Medium': 1, 'Low': 2 };
        filtered.sort((a, b) => {
            if (priorityOrder[a.Priority] !== priorityOrder[b.Priority]) {
                return priorityOrder[a.Priority] - priorityOrder[b.Priority];
            }
            return new Date(a['End Date']) - new Date(b['End Date']);
        });

        renderTasks(filtered);
    }

    function renderTasks(tasks) {
        const tbody = document.getElementById('task-tbody');
        if (tasks.length === 0) {
            tbody.innerHTML = '<tr><td colspan="9" style="text-align:center; padding:40px; color: var(--md-default-fg-color--light);">📭 No tickets found. Create one above!</td></tr>';
            return;
        }

        tbody.innerHTML = tasks.map(t => {
            const typeClass = `type-${(t.Type || '').toLowerCase().replace(/[^a-z0-9]/g, '-')}`;
            const attachmentHtml = t.Attachments ? 
                t.Attachments.split(',').map(link => `<a href="${link.trim()}" target="_blank" class="attachment-link">📎 View</a>`).join(' ') : 
                '<span style="color: var(--md-default-fg-color--light);">-</span>';
            
            return `
                <tr>
                    <td><span class="ticket-id">${t['Ticket ID'] || 'BI-NEW'}</span></td>
                    <td><strong>${t.Title}</strong></td>
                    <td><span class="type-badge ${typeClass}">${t.Type}</span></td>
                    <td><span class="priority-badge priority-${(t.Priority || '').toLowerCase()}">${t.Priority}</span></td>
                    <td><span class="duration-badge">${t.Duration || '-'} days</span></td>
                    <td style="min-width: 120px;">
                        <div class="progress-bar"><div class="progress-fill" style="width: ${t.Progress || 0}%"></div></div>
                        <small>${t.Progress || 0}%</small>
                    </td>
                    <td><span class="status-badge status-${(t.Status || '').toLowerCase().replace(' ', '-')}">${t.Status}</span></td>
                    <td>${attachmentHtml}</td>
                    <td>
                        <button class="action-btn" onclick="updateProgress('${t['Ticket ID']}')" title="Update Progress">📊</button>
                        <button class="action-btn" onclick="updateStatus('${t['Ticket ID']}')" title="Change Status">🔄</button>
                    </td>
                </tr>
            `;
        }).join('');
    }

    // Note: Updating status/progress directly from the UI requires a PUT endpoint in Apps Script.
    // For now, you can update Status and Progress directly inside the Google Sheet!
    function updateStatus(id) { alert("Please update the Status directly in the Google Sheet for Ticket: " + id); }
    function updateProgress(id) { alert("Please update the Progress % directly in the Google Sheet for Ticket: " + id); }
</script>