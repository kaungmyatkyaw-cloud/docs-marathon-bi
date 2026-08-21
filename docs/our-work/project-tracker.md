# 🎫 BI Service & Task Tracker

<div class="tracker-header">
    <div class="header-content">
        <p class="subtitle">Manage and track BI HUB initiatives, data requests, and service tickets efficiently</p>
    </div>
    <div class="header-actions">
        <button onclick="toggleGuide()" class="btn-guide">📖 User Guide</button>
    </div>
</div>

<!-- User Guide (Hidden by default) -->
<div id="user-guide" class="user-guide" style="display: none;">
    <div class="guide-header">
        <h2>📘 User Guide & Best Practices</h2>
        <button onclick="toggleGuide()" class="btn-close">✕</button>
    </div>
    <div class="guide-content">
        <div class="guide-section">
            <h3>📎 How to Attach Files</h3>
            <p>Click the <strong>"Attach File"</strong> button. Select your photo or document. The system will automatically upload it to your Google Drive "BI Hub Attachments" folder and paste the link into the form for you!</p>
        </div>
        <div class="guide-section">
            <h3>🎯 Creating a New Ticket</h3>
            <ol>
                <li><strong>Project Title:</strong> Enter a clear, descriptive title.</li>
                <li><strong>Ticket Type:</strong> Select the appropriate category (Data Request, Report & Analytics, Integration, Consultation, Operations).</li>
                <li><strong>Priority:</strong> 🔴 High (24-48hr), 🟡 Medium (3-5 days), 🟢 Low (1-2 weeks).</li>
                <li><strong>Remarks:</strong> Include contact person, business unit, and specific requirements.</li>
            </ol>
        </div>
        <div class="guide-section">
            <h3>🔄 Managing Tickets</h3>
            <ul>
                <li><strong>Update Progress/Status:</strong> Click the 📊 or 🔄 buttons. (For complex edits, you can also edit directly in the Google Sheet).</li>
                <li><strong>Filters:</strong> Use the filter bar to find tickets by Type, Status, or Priority.</li>
            </ul>
        </div>
    </div>
</div>

<style>
/* Dark Header Styles */
.tracker-header { 
    display: flex; justify-content: space-between; align-items: center; 
    margin-bottom: 30px; padding: 25px; 
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); 
    border-radius: 12px; color: white; 
    box-shadow: 0 4px 15px rgba(0,0,0,0.2); 
}
.header-content h1 { margin: 0 0 8px 0; font-size: 2rem; font-weight: 700; }
.subtitle { margin: 0; opacity: 0.9; font-size: 1rem; }
.btn-guide { background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.3); color: white; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-weight: 600; }
.btn-guide:hover { background: rgba(255,255,255,0.2); }

/* User Guide */
.user-guide { background: var(--md-default-bg-color); border: 1px solid var(--md-default-fg-color--lightest); border-radius: 8px; margin-bottom: 20px; padding: 20px; }
.guide-header { display: flex; justify-content: space-between; margin-bottom: 15px; }
.btn-close { background: none; border: none; font-size: 1.2rem; cursor: pointer; }
.guide-content { padding: 10px; }
.guide-section { margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid var(--md-default-fg-color--lightest); }
.guide-section h3 { color: var(--md-primary-fg-color); margin-top: 0; }

/* Form */
.bi-tracker-form { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 30px; padding: 20px; background: var(--md-code-bg-color); border-radius: 8px; border: 1px solid var(--md-default-fg-color--lightest); }
.bi-tracker-form input, .bi-tracker-form select, .bi-tracker-form textarea { padding: 10px; border: 1px solid var(--md-default-fg-color--lightest); border-radius: 6px; background: var(--md-default-bg-color); color: var(--md-default-fg-color); font-family: var(--md-text-font); }
.bi-tracker-form .full-width { grid-column: 1 / -1; }
.bi-tracker-form button[type="submit"] { grid-column: 1 / -1; padding: 12px; background: #0f172a; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; }

/* Upload Button Area */
.upload-area { display: flex; gap: 10px; align-items: center; margin-top: 5px; }
.btn-upload { background: #3b82f6; color: white; border: none; padding: 8px 15px; border-radius: 6px; cursor: pointer; font-size: 0.9rem; display: flex; align-items: center; gap: 5px; }
.btn-upload:hover { background: #2563eb; }
.btn-upload:disabled { background: #94a3b8; cursor: not-allowed; }
#file-status { font-size: 0.85rem; color: var(--md-default-fg-color--light); margin-left: 10px; }
.uploading-spinner { display: inline-block; width: 12px; height: 12px; border: 2px solid #fff; border-radius: 50%; border-top-color: transparent; animation: spin 1s linear infinite; margin-right: 5px; }
@keyframes spin { to { transform: rotate(360deg); } }

/* Table */
.bi-tracker-table { width: 100%; border-collapse: collapse; background: var(--md-default-bg-color); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 5px rgba(0,0,0,0.05); }
.bi-tracker-table th { background: #1e293b; color: white; padding: 12px; text-align: left; font-size: 0.85rem; }
.bi-tracker-table td { padding: 12px; border-bottom: 1px solid var(--md-default-fg-color--lightest); font-size: 0.9rem; }
.status-badge { padding: 4px 8px; border-radius: 12px; font-size: 0.75rem; font-weight: bold; }
.status-backlog { background: #e2e8f0; color: #475569; }
.status-in-progress { background: #dbeafe; color: #1e40af; }
.status-review { background: #fef3c7; color: #92400e; }
.status-completed { background: #dcfce7; color: #166534; }
.status-blocked { background: #fee2e2; color: #991b1b; }
.priority-badge { padding: 4px 8px; border-radius: 12px; font-size: 0.75rem; font-weight: bold; }
.priority-high { background: #fee2e2; color: #991b1b; }
.priority-medium { background: #fef3c7; color: #92400e; }
.priority-low { background: #dcfce7; color: #166534; }
.type-badge { padding: 4px 8px; border-radius: 12px; font-size: 0.75rem; font-weight: bold; }
.type-data-request { background: #e0f2fe; color: #0369a1; }
.type-report-analytics { background: #f3e8ff; color: #7e22ce; }
.type-integration { background: #dcfce7; color: #15803d; }
.type-consultation { background: #ffedd5; color: #c2410c; }
.type-operations { background: #f1f5f9; color: #475569; }
.ticket-id { font-family: monospace; background: #0f172a; color: white; padding: 3px 8px; border-radius: 4px; font-size: 0.8rem; }
.duration-badge { background: #f1f5f9; padding: 3px 8px; border-radius: 4px; font-size: 0.8rem; }
.attachment-link { color: #3b82f6; text-decoration: none; font-size: 0.85rem; margin-right: 5px; }
.attachment-link:hover { text-decoration: underline; }
.progress-bar { width: 100%; height: 6px; background: #e2e8f0; border-radius: 3px; overflow: hidden; margin-bottom: 4px; }
.progress-fill { height: 100%; background: #3b82f6; transition: width 0.3s; }
.action-btn { background: none; border: none; cursor: pointer; font-size: 1.1rem; padding: 4px; border-radius: 4px; }
.action-btn:hover { background: var(--md-code-bg-color); }

@media (max-width: 768px) { 
    .bi-tracker-form { grid-template-columns: 1fr; } 
    .tracker-header { flex-direction: column; text-align: center; gap: 10px; }
}
</style>

<div class="bi-tracker-container">
    <form id="task-form" class="bi-tracker-form">
        <div class="form-group full-width">
            <label>Project / Ticket Title *</label>
            <input type="text" id="task-name" required placeholder="e.g. Fix ETL Pipeline Error">
        </div>
        
        <div class="form-group">
            <label>Ticket Type *</label>
            <select id="task-type" required>
                <option value="Data Request">📊 Data Request</option>
                <option value="Report & Analytics">📈 Report & Analytics</option>
                <option value="Integration">🔗 Integration</option>
                <option value="Consultation">💡 Consultation</option>
                <option value="Operations">⚙️ Operations</option>
            </select>
        </div>

        <div class="form-group">
            <label>Priority *</label>
            <select id="task-priority" required>
                <option value="Medium">🟡 Medium</option>
                <option value="High">🔴 High</option>
                <option value="Low">🟢 Low</option>
            </select>
        </div>

        <div class="form-group">
            <label>Start Date *</label>
            <input type="date" id="start-date" required>
        </div>
        <div class="form-group">
            <label>End Date *</label>
            <input type="date" id="end-date" required>
        </div>

        <div class="form-group full-width">
            <label>Remarks / Notes</label>
            <textarea id="task-remarks" rows="2" placeholder="Contact person, business unit, details..."></textarea>
        </div>

        <!-- FILE UPLOAD SECTION -->
        <div class="form-group full-width">
            <label>Attachments</label>
            <div class="upload-area">
                <input type="file" id="file-input" style="display: none;" onchange="handleFileUpload(this)">
                <button type="button" class="btn-upload" onclick="document.getElementById('file-input').click()">
                     📎 Attach File/Photo
                </button>
                <span id="file-status">No file selected</span>
            </div>
            <input type="hidden" id="uploaded-file-url">
        </div>

        <div class="form-group full-width">
            <label>Google Drive Links (Manual)</label>
            <textarea id="task-attachments" rows="2" placeholder="Or paste Drive links here..."></textarea>
        </div>

        <button type="submit">+ Create Ticket</button>
    </form>

    <table class="bi-tracker-table">
        <thead>
            <tr>
                <th>ID</th><th>Title</th><th>Type</th><th>Priority</th><th>Duration</th><th>Progress</th><th>Status</th><th>Attachments</th><th>Actions</th>
            </tr>
        </thead>
        <tbody id="task-tbody"><tr><td colspan="9" style="text-align:center; padding:20px;">Loading...</td></tr></tbody>
    </table>
</div>

<script>
    const API_URL = 'https://script.google.com/macros/s/AKfycbw5Vm16VW6WW2LwJWKWef8ZCtmXt8tULQ6opKVVPJ5w6kOJYCz95ek0RJA_t4QaDPnuRw/exec';
    let allTasks = [];

    function toggleGuide() {
        const g = document.getElementById('user-guide');
        g.style.display = g.style.display === 'none' ? 'block' : 'none';
    }

    // File Upload Logic
    async function handleFileUpload(input) {
        const file = input.files[0];
        if (!file) return;

        const statusSpan = document.getElementById('file-status');
        const uploadBtn = document.querySelector('.btn-upload');
        
        statusSpan.innerHTML = '<span class="uploading-spinner"></span> Uploading to Drive...';
        uploadBtn.disabled = true;

        const reader = new FileReader();
        reader.onload = async function(e) {
            const base64 = e.target.result.split(',')[1];
            
            try {
                const response = await fetch(API_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'text/plain' },
                    body: JSON.stringify({
                        action: 'upload',
                        base64: base64,
                        fileName: file.name,
                        mimeType: file.type
                    })
                });
                const result = await response.json();
                
                if (result.success) {
                    statusSpan.innerHTML = `✅ Uploaded: ${result.name}`;
                    document.getElementById('uploaded-file-url').value = result.url;
                    
                    const attBox = document.getElementById('task-attachments');
                    attBox.value = attBox.value ? attBox.value + '\n' + result.url : result.url;
                } else {
                    statusSpan.innerText = '❌ Upload failed: ' + (result.error || 'Unknown');
                }
            } catch (err) {
                statusSpan.innerText = '❌ Error: ' + err.message;
            } finally {
                uploadBtn.disabled = false;
            }
        };
        reader.readAsDataURL(file);
    }

    // Form Submit
    document.getElementById('task-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const btn = e.target.querySelector('button[type="submit"]');
        btn.innerText = 'Saving...';
        btn.disabled = true;

        const data = {
            task: document.getElementById('task-name').value,
            type: document.getElementById('task-type').value,
            priority: document.getElementById('task-priority').value,
            startDate: document.getElementById('start-date').value,
            endDate: document.getElementById('end-date').value,
            remarks: document.getElementById('task-remarks').value,
            attachments: document.getElementById('task-attachments').value
        };

        try {
            await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'text/plain' },
                body: JSON.stringify(data)
            });
            
            alert('✅ Ticket Created Successfully!');
            e.target.reset();
            document.getElementById('file-status').innerText = 'No file selected';
            document.getElementById('uploaded-file-url').value = '';
            setTimeout(loadTasks, 2000);
        } catch (error) {
            alert('❌ Error: ' + error.message);
        } finally {
            btn.innerText = '+ Create Ticket';
            btn.disabled = false;
        }
    });

    async function loadTasks() {
        try {
            const timestamp = new Date().getTime();
            const res = await fetch(`${API_URL}?t=${timestamp}`);
            allTasks = await res.json();
            
            const tbody = document.getElementById('task-tbody');
            if (allTasks.length === 0) {
                tbody.innerHTML = '<tr><td colspan="9" style="text-align:center; padding:40px; color: var(--md-default-fg-color--light);">📭 No tickets found. Create one above!</td></tr>';
                return;
            }

            tbody.innerHTML = allTasks.map(t => {
                const typeClass = `type-${(t['Type'] || '').toLowerCase().replace(/[^a-z0-9]/g, '-')}`;
                const attachmentHtml = t['Attachments'] ? 
                    t['Attachments'].split(/[\n,]+/).map(link => `<a href="${link.trim()}" target="_blank" class="attachment-link">📎 View</a>`).join(' ') : 
                    '<span style="color: var(--md-default-fg-color--light);">-</span>';
                
                return `
                    <tr>
                        <td><span class="ticket-id">${t['Ticket ID'] || 'BI-NEW'}</span></td>
                        <td><strong>${t['Title']}</strong></td>
                        <td><span class="type-badge ${typeClass}">${t['Type']}</span></td>
                        <td><span class="priority-badge priority-${(t['Priority'] || '').toLowerCase()}">${t['Priority']}</span></td>
                        <td><span class="duration-badge">${t['Duration'] || '-'} days</span></td>
                        <td style="min-width: 100px;">
                            <div class="progress-bar"><div class="progress-fill" style="width: ${t['Progress'] || 0}%"></div></div>
                            <small>${t['Progress'] || 0}%</small>
                        </td>
                        <td><span class="status-badge status-${(t['Status'] || '').toLowerCase().replace(' ', '-')}">${t['Status']}</span></td>
                        <td>${attachmentHtml}</td>
                        <td>
                            <button class="action-btn" onclick="alert('Please update Progress directly in the Google Sheet for: ' + '${t['Ticket ID']}')" title="Update Progress">📊</button>
                            <button class="action-btn" onclick="alert('Please update Status directly in the Google Sheet for: ' + '${t['Ticket ID']}')" title="Change Status">🔄</button>
                        </td>
                    </tr>
                `;
            }).join('');
        } catch (error) {
            console.error("Failed to load tasks:", error);
            document.getElementById('task-tbody').innerHTML = 
                '<tr><td colspan="9" style="text-align:center; padding:20px; color: red;">⚠️ Error loading data. Check browser console.</td></tr>';
        }
    }
    
    // Initial load
    loadTasks();
</script>