document.addEventListener('DOMContentLoaded', () => {
    // --- Data Initialization ---
    // Mocking 30 templates: 10 Wow Effect, 10 Professional, 10 Generalist
    const templates = [];

    for (let i = 1; i <= 10; i++) {
        templates.push({ id: `wow-${i}`, category: 'wow', name: `Wow Effect Template ${i}`, image: `https://via.placeholder.com/300x200?text=Wow+Effect+${i}` });
    }
    for (let i = 1; i <= 10; i++) {
        templates.push({ id: `prof-${i}`, category: 'professional', name: `Professional Template ${i}`, image: `https://via.placeholder.com/300x200?text=Professional+${i}` });
    }
    for (let i = 1; i <= 10; i++) {
        templates.push({ id: `gen-${i}`, category: 'generalist', name: `Generalist Template ${i}`, image: `https://via.placeholder.com/300x200?text=Generalist+${i}` });
    }

    const projectsContainer = document.getElementById('projects-container');
    const templatesContainer = document.getElementById('templates-container');
    const noProjectsMessage = document.getElementById('no-projects-message');

    // --- Navigation Logic ---
    const navProjects = document.getElementById('nav-projects');
    const navTemplates = document.getElementById('nav-templates');
    const viewProjects = document.getElementById('view-projects');
    const viewTemplates = document.getElementById('view-templates');

    navProjects.addEventListener('click', (e) => {
        e.preventDefault();
        viewProjects.classList.remove('hidden');
        viewTemplates.classList.add('hidden');
        navProjects.classList.add('bg-gray-100', 'text-gray-700', 'font-medium');
        navProjects.classList.remove('text-gray-600', 'hover:bg-gray-50');
        navTemplates.classList.remove('bg-gray-100', 'text-gray-700', 'font-medium');
        navTemplates.classList.add('text-gray-600', 'hover:bg-gray-50');
        loadProjects();
    });

    navTemplates.addEventListener('click', (e) => {
        e.preventDefault();
        viewProjects.classList.add('hidden');
        viewTemplates.classList.remove('hidden');
        navTemplates.classList.add('bg-gray-100', 'text-gray-700', 'font-medium');
        navTemplates.classList.remove('text-gray-600', 'hover:bg-gray-50');
        navProjects.classList.remove('bg-gray-100', 'text-gray-700', 'font-medium');
        navProjects.classList.add('text-gray-600', 'hover:bg-gray-50');
        renderTemplates('all');
    });

    // --- Projects Logic ---
    function loadProjects() {
        projectsContainer.innerHTML = '';
        const savedProjectsData = localStorage.getItem('sitebuilder-projects');
        let projects = [];

        if (savedProjectsData) {
            try {
                projects = JSON.parse(savedProjectsData);
            } catch (e) {
                console.error("Error parsing projects from localStorage", e);
            }
        }

        if (projects.length === 0) {
            noProjectsMessage.classList.remove('hidden');
            noProjectsMessage.classList.add('block');
        } else {
            noProjectsMessage.classList.add('hidden');
            noProjectsMessage.classList.remove('block');

            projects.forEach((proj, index) => {
                const card = document.createElement('div');
                card.className = "bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition group template-card relative";

                const date = new Date(proj.updatedAt || Date.now()).toLocaleDateString('it-IT');

                card.innerHTML = `
                    <div class="h-40 bg-gray-100 relative">
                        <img src="${proj.thumbnail || 'https://via.placeholder.com/300x200?text=Progetto'}" alt="Project Thumbnail" class="w-full h-full object-cover">
                        <div class="overlay absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity flex items-center justify-center space-x-3">
                            <button class="bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition" onclick="editProject('${proj.id}')" title="Modifica">
                                <i class="fas fa-edit w-5 h-5 flex items-center justify-center"></i>
                            </button>
                            <button class="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition" onclick="deleteProject('${proj.id}')" title="Elimina">
                                <i class="fas fa-trash w-5 h-5 flex items-center justify-center"></i>
                            </button>
                        </div>
                    </div>
                    <div class="p-4">
                        <h3 class="font-bold text-gray-800 text-lg truncate">${proj.name || 'Senza Nome'}</h3>
                        <p class="text-sm text-gray-500 mt-1">Ultima modifica: ${date}</p>
                    </div>
                `;
                projectsContainer.appendChild(card);
            });
        }
    }

    // Assigning to window so inline onclick handlers can find them
    window.editProject = function(projectId) {
        window.location.href = `editor.html?project=${projectId}`;
    };

    window.deleteProject = function(projectId) {
        if(confirm('Sei sicuro di voler eliminare questo progetto?')) {
            const savedProjectsData = localStorage.getItem('sitebuilder-projects');
            if (savedProjectsData) {
                let projects = JSON.parse(savedProjectsData);
                projects = projects.filter(p => p.id !== projectId);
                localStorage.setItem('sitebuilder-projects', JSON.stringify(projects));

                // Also clean up actual project data if stored separately
                localStorage.removeItem(`gjs-Project-${projectId}`);

                loadProjects();
            }
        }
    };

    // --- Templates Logic ---
    function renderTemplates(filter) {
        templatesContainer.innerHTML = '';

        const filteredTemplates = filter === 'all'
            ? templates
            : templates.filter(t => t.category === filter);

        filteredTemplates.forEach(t => {
            const card = document.createElement('div');
            card.className = "bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition group template-card relative";

            card.innerHTML = `
                <div class="h-40 bg-gray-200 relative">
                    <img src="${t.image}" alt="${t.name}" class="w-full h-full object-cover">
                    <div class="overlay absolute inset-0 bg-black bg-opacity-60 opacity-0 transition-opacity flex flex-col items-center justify-center p-4">
                        <button class="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition shadow w-full mb-2 font-medium" onclick="useTemplate('${t.id}')">
                            <i class="fas fa-magic mr-2"></i>Usa Template
                        </button>
                    </div>
                </div>
                <div class="p-4">
                    <span class="text-xs font-semibold uppercase tracking-wider text-indigo-500 block mb-1">${t.category.replace('professional', 'Professional').replace('wow', 'Wow Effect').replace('generalist', 'Generalist')}</span>
                    <h3 class="font-bold text-gray-800 text-lg truncate">${t.name}</h3>
                </div>
            `;
            templatesContainer.appendChild(card);
        });
    }

    window.useTemplate = function(templateId) {
        // Create a new project based on this template
        const projectId = 'proj_' + Math.random().toString(36).substr(2, 9);
        const projectName = "Mio Nuovo Sito";

        const newProject = {
            id: projectId,
            name: projectName,
            templateId: templateId,
            createdAt: Date.now(),
            updatedAt: Date.now()
        };

        const savedProjectsData = localStorage.getItem('sitebuilder-projects');
        let projects = [];
        if (savedProjectsData) {
            try { projects = JSON.parse(savedProjectsData); } catch (e) {}
        }

        projects.unshift(newProject);
        localStorage.setItem('sitebuilder-projects', JSON.stringify(projects));

        window.location.href = `editor.html?project=${projectId}&template=${templateId}`;
    };

    // Template Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Reset styles
            filterBtns.forEach(b => {
                b.classList.remove('active', 'bg-indigo-100', 'text-indigo-700');
                b.classList.add('bg-white', 'text-gray-600', 'border-gray-200');
            });
            // Set active style
            const target = e.target;
            target.classList.add('active', 'bg-indigo-100', 'text-indigo-700');
            target.classList.remove('bg-white', 'text-gray-600', 'border-gray-200');

            renderTemplates(target.dataset.filter);
        });
    });

    // Initial Load
    loadProjects();
});