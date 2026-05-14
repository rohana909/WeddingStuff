const STORAGE_KEY = 'wedding_tasks_v1';

function loadState() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        const states = JSON.parse(saved);
        states.forEach(s => {
            const task = TASKS.find(t => t.id === s.id);
            if (task) {
                task.status = s.status;
                task.spent = s.spent || 0;
                if (s.vendor) task.vendor = s.vendor;
                if (s.phone) task.phone = s.phone;
                if (s.email) task.email = s.email;
            }
        });
    }
}

function saveState() {
    const states = TASKS.map(t => ({
        id: t.id, status: t.status, spent: t.spent,
        vendor: t.vendor, phone: t.phone, email: t.email
    }));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(states));
}

function cycleStatus(task) {
    if (task.status === "Not Started") task.status = "In Progress";
    else if (task.status === "In Progress") task.status = "Completed";
    else task.status = "Not Started";
    saveState();
    render();
}

function updateCountdown() {
    const wedding = new Date('2026-09-04T00:00:00');
    const now = new Date();
    const diff = wedding - now;
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    document.getElementById('countdown').textContent = days > 0 ? `${days} days to go!` : "It's wedding day!";
}

function getFilteredTasks() {
    const search = document.getElementById('search-input').value.toLowerCase();
    const phase = document.getElementById('filter-phase').value;
    const category = document.getElementById('filter-category').value;
    const owner = document.getElementById('filter-owner').value;
    const status = document.getElementById('filter-status').value;

    return TASKS.filter(t => {
        if (search && !t.title.toLowerCase().includes(search) && !t.notes.toLowerCase().includes(search)) return false;
        if (phase !== 'all' && t.phase !== parseInt(phase)) return false;
        if (category !== 'all' && t.category !== category) return false;
        if (owner !== 'all' && t.owner !== owner) return false;
        if (status !== 'all' && t.status !== status) return false;
        return true;
    });
}

function renderBudget() {
    const categories = {};
    TASKS.forEach(t => {
        if (!categories[t.category]) categories[t.category] = { budget: 0, spent: 0 };
        categories[t.category].budget += t.budget;
        categories[t.category].spent += t.spent;
    });

    let totalBudget = 0, totalSpent = 0;
    let rows = '';
    Object.entries(categories).forEach(([key, val]) => {
        if (val.budget > 0 || val.spent > 0) {
            const cat = CATEGORIES[key];
            rows += `<tr><td>${cat.emoji} ${cat.label}</td><td>$${val.budget.toLocaleString()}</td><td>$${val.spent.toLocaleString()}</td><td>${val.budget > 0 ? Math.round((val.spent / val.budget) * 100) : 0}%</td></tr>`;
            totalBudget += val.budget;
            totalSpent += val.spent;
        }
    });
    rows += `<tr><td><strong>TOTAL</strong></td><td><strong>$${totalBudget.toLocaleString()}</strong></td><td><strong>$${totalSpent.toLocaleString()}</strong></td><td><strong>${totalBudget > 0 ? Math.round((totalSpent / totalBudget) * 100) : 0}%</strong></td></tr>`;

    document.getElementById('budget-table').innerHTML = `<table><thead><tr><th>Category</th><th>Budget</th><th>Spent</th><th>Used</th></tr></thead><tbody>${rows}</tbody></table>`;
    document.getElementById('budget-display').textContent = `$${totalSpent.toLocaleString()} / $${totalBudget.toLocaleString()}`;
}

function renderOverview() {
    const completed = TASKS.filter(t => t.status === 'Completed').length;
    const inProgress = TASKS.filter(t => t.status === 'In Progress').length;
    document.getElementById('total-tasks').textContent = TASKS.length;
    document.getElementById('completed-tasks').textContent = completed;
    document.getElementById('inprogress-tasks').textContent = inProgress;
    document.getElementById('overall-progress-fill').style.width = `${Math.round((completed / TASKS.length) * 100)}%`;
}

function renderPhases() {
    const filtered = getFilteredTasks();
    const container = document.getElementById('phases-container');
    container.innerHTML = '';

    PHASES.forEach(phase => {
        const phaseTasks = filtered.filter(t => t.phase === phase.id);
        if (phaseTasks.length === 0) return;

        const allPhaseTasks = TASKS.filter(t => t.phase === phase.id);
        const phaseCompleted = allPhaseTasks.filter(t => t.status === 'Completed').length;
        const phasePercent = Math.round((phaseCompleted / allPhaseTasks.length) * 100);

        const section = document.createElement('div');
        section.className = 'phase-section';
        section.innerHTML = `
            <div class="phase-header">
                <h2>${phase.emoji} Phase ${phase.id}: ${phase.name}</h2>
                <span class="phase-dates">${phase.dates} &bull; ${phasePercent}% complete</span>
            </div>
            <div class="phase-progress">
                <div class="progress-bar"><div class="progress-fill" style="width:${phasePercent}%"></div></div>
            </div>
        `;

        const categoriesInPhase = [...new Set(phaseTasks.map(t => t.category))];
        categoriesInPhase.forEach(catKey => {
            const cat = CATEGORIES[catKey];
            const catTasks = phaseTasks.filter(t => t.category === catKey);

            const group = document.createElement('div');
            group.className = 'category-group';
            group.innerHTML = `<div class="category-title">${cat.emoji} ${cat.label}</div><div class="task-grid"></div>`;
            const grid = group.querySelector('.task-grid');

            catTasks.forEach(task => {
                const card = document.createElement('div');
                const ownerClass = task.owner === 'You' ? 'owner-you' : task.owner === 'Fiancé' ? 'owner-fiance' : task.owner === 'Both' ? 'owner-both' : 'owner-family';
                const statusClass = task.status === 'Completed' ? 'status-completed' : '';
                card.className = `task-card ${ownerClass} ${statusClass}`;

                const checkClass = task.status === 'Completed' ? 'completed' : task.status === 'In Progress' ? 'in-progress' : '';
                const budgetTag = task.budget > 0 ? `<span class="task-tag budget">$${task.budget.toLocaleString()}</span>` : '';
                const dueDate = new Date(task.due + 'T00:00:00');
                const dueFmt = dueDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

                card.innerHTML = `
                    <div class="task-card-header">
                        <div class="task-checkbox ${checkClass}" data-id="${task.id}"></div>
                        <span class="task-title">${task.title}</span>
                    </div>
                    <div class="task-meta">
                        <span class="task-tag owner">${task.owner}</span>
                        <span class="task-tag due">${dueFmt}</span>
                        ${budgetTag}
                        <span class="task-tag">${task.status}</span>
                    </div>
                    <div class="task-details" id="details-${task.id}">
                        <p><strong>Notes:</strong> ${task.notes}</p>
                        ${task.vendor ? `<p><strong>Vendor:</strong> ${task.vendor}</p>` : ''}
                        ${task.phone ? `<p><strong>Phone:</strong> ${task.phone}</p>` : ''}
                        ${task.email ? `<p><strong>Email:</strong> ${task.email}</p>` : ''}
                    </div>
                `;

                card.querySelector('.task-checkbox').addEventListener('click', (e) => {
                    e.stopPropagation();
                    cycleStatus(task);
                });

                card.addEventListener('click', () => {
                    const details = card.querySelector('.task-details');
                    details.classList.toggle('open');
                });

                grid.appendChild(card);
            });

            section.appendChild(group);
        });

        container.appendChild(section);
    });
}

function render() {
    renderOverview();
    renderBudget();
    renderPhases();
}

document.getElementById('search-input').addEventListener('input', render);
document.getElementById('filter-phase').addEventListener('change', render);
document.getElementById('filter-category').addEventListener('change', render);
document.getElementById('filter-owner').addEventListener('change', render);
document.getElementById('filter-status').addEventListener('change', render);

loadState();
updateCountdown();
render();
setInterval(updateCountdown, 60000);
