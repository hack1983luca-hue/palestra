document.addEventListener('DOMContentLoaded', () => {
    // --- Data Initialization ---
    // Mocking 30 templates: 10 Wow Effect, 10 Professional, 10 Generalist
            const templates = [
        { id: 'wow-1', category: 'wow', name: 'Wow Effect Template 1', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
        { id: 'wow-2', category: 'wow', name: 'Wow Effect Template 2', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
        { id: 'wow-3', category: 'wow', name: 'Wow Effect Template 3', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
        { id: 'wow-4', category: 'wow', name: 'Wow Effect Template 4', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
        { id: 'wow-5', category: 'wow', name: 'Wow Effect Template 5', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
        { id: 'wow-6', category: 'wow', name: 'Wow Effect Template 6', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
        { id: 'wow-7', category: 'wow', name: 'Wow Effect Template 7', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
        { id: 'wow-8', category: 'wow', name: 'Wow Effect Template 8', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
        { id: 'wow-9', category: 'wow', name: 'Wow Effect Template 9', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
        { id: 'wow-10', category: 'wow', name: 'Wow Effect Template 10', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
        { id: 'prof-1', category: 'professional', name: 'Professional Template 1', image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
        { id: 'prof-2', category: 'professional', name: 'Professional Template 2', image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
        { id: 'prof-3', category: 'professional', name: 'Professional Template 3', image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
        { id: 'prof-4', category: 'professional', name: 'Professional Template 4', image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
        { id: 'prof-5', category: 'professional', name: 'Professional Template 5', image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
        { id: 'prof-6', category: 'professional', name: 'Professional Template 6', image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
        { id: 'prof-7', category: 'professional', name: 'Professional Template 7', image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
        { id: 'prof-8', category: 'professional', name: 'Professional Template 8', image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
        { id: 'prof-9', category: 'professional', name: 'Professional Template 9', image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
        { id: 'prof-10', category: 'professional', name: 'Professional Template 10', image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
        { id: 'gen-1', category: 'generalist', name: 'Generalist Template 1', image: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
        { id: 'gen-2', category: 'generalist', name: 'Generalist Template 2', image: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
        { id: 'gen-3', category: 'generalist', name: 'Generalist Template 3', image: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
        { id: 'gen-4', category: 'generalist', name: 'Generalist Template 4', image: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
        { id: 'gen-5', category: 'generalist', name: 'Generalist Template 5', image: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
        { id: 'gen-6', category: 'generalist', name: 'Generalist Template 6', image: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
        { id: 'gen-7', category: 'generalist', name: 'Generalist Template 7', image: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
        { id: 'gen-8', category: 'generalist', name: 'Generalist Template 8', image: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
        { id: 'gen-9', category: 'generalist', name: 'Generalist Template 9', image: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
        { id: 'gen-10', category: 'generalist', name: 'Generalist Template 10', image: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
    ];

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