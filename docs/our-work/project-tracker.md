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
        <h2>📘 User Guide</h2>
        <button onclick="toggleGuide()" class="btn-close">✕</button>
    </div>
    <div class="guide-content">
        <h3>📎 How to Attach Files</h3>
        <p>Click the <strong>"Attach File"</strong> button. Select your photo or document. The system will automatically upload it to your Google Drive "BI Hub Attachments" folder and paste the link into the form for you!</p>
    </div>
</div>

<style>
/* Dark Header Styles */
.tracker-header { 
    display: flex; justify-content: space-between; align-items: center; 
    margin-bottom: 30px; padding: 25px; 
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); /* DARK COLOR */
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
.status-completed { background: #dcfce7; color: #166534; }
.attachment-link { color: #3b82f6; text-decoration: none; font-size: 0.85rem; }
.attachment-link:hover { text-decoration: underline; }

@media (max-width: 768px) { .bi-tracker-form { grid-template-columns: 1fr; } }
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
            <textarea id="task-remarks" rows="2" placeholder="Contact person, details..."></textarea>
        </div>

        <!-- FILE UPLOAD SECTION -->
        <div class="form-group full-width">
            <label>Attachments</label>
            <div class="upload-area">
                <input type="file" id="file-input" style="display: none;" onchange="handleFileUpload(this)">
                <button type="button" class="btn-upload" onclick="document.getElementById('file-input').click()">
                     Attach File/Photo
                </button>
                <span id="file-status">No file selected</span>
            </div>
            <!-- Hidden input to store the Drive URL after upload -->
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
                <th>ID</th><th>Title</th><th>Type</th><th>Priority</th><th>Status</th><th>Attachments</th><th>Actions</th>
            </tr>
        </thead>
        <tbody id="task-tbody"><tr><td colspan="7" style="text-align:center; padding:20px;">Loading...</td></tr></tbody>
    </table>
</div>

<script>
    // PASTE YOUR NEW APPS SCRIPT URL HERE
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
                const response = await fetch(`${API_URL}?action=upload`, {
                    method: 'POST',
                    body: JSON.stringify({
                        base64: base64,
                        fileName: file.name,
                        mimeType: file.type
                    })
                });
                const result = await response.json();
                
                if (result.success) {
                    statusSpan.innerHTML = `✅ Uploaded: ${result.name}`;
                    document.getElementById('uploaded-file-url').value = result.url;
                    
                    // Auto-add to attachments text area
                    const attBox = document.getElementById('task-attachments');
                    attBox.value = attBox.value ? attBox.value + '\n' + result.url : result.url;
                } else {
                    statusSpan.innerText = '❌ Upload failed';
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

        await fetch(API_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'text/plain' },
            body: JSON.stringify(data)
        });

        alert('✅ Ticket Created!');
        e.target.reset();
        document.getElementById('file-status').innerText = 'No file selected';
        document.getElementById('uploaded-file-url').value = '';
        btn.innerText = '+ Create Ticket';
        btn.disabled = false;
        setTimeout(loadTasks, 2000);
    });

    async function loadTasks() {
        const res = await fetch(API_URL);
        allTasks = await res.json();
        const tbody = document.getElementById('task-tbody');
        tbody.innerHTML = '';
        
        allTasks.forEach(t => {
            const attHtml = t.Attachments ? t.Attachments.split('\n').map(l => `<a href="${l.trim()}" target="_blank" class="attachment-link">📎 View</a>`).join(' ') : '-';
            tbody.innerHTML += `
                <tr>
                    <td><b>${t['Ticket ID']}</b></td>
                    <td>${t.Title}</td>
                    <td>${t.Type}</td>
                    <td>${t.Priority}</td>
                    <td><span class="status-badge status-${t.Status.toLowerCase().replace(' ','-')}">${t.Status}</span></td>
                    <td>${attHtml}</td>
                    <td><button onclick="alert('Edit in Sheet')">✏️</button></td>
                </tr>
            `;
        });
    }
    loadTasks();
</script>