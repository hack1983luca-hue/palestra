document.addEventListener('DOMContentLoaded', () => {

    // Parse URL params
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('project');
    const templateId = urlParams.get('template');

    // UI Elements
    const saveStatus = document.getElementById('save-status');
    const projectNameInput = document.getElementById('project-name-input');
    const btnSave = document.getElementById('btn-save');
    const btnExport = document.getElementById('btn-export');

    if (!projectId) {
        window.location.href = 'index.html';
        return;
    }

    // Load Project Metadata
    let currentProject = null;
    const savedProjectsData = localStorage.getItem('sitebuilder-projects');
    if (savedProjectsData) {
        const projects = JSON.parse(savedProjectsData);
        currentProject = projects.find(p => p.id === projectId);
    }

    if (currentProject) {
        projectNameInput.value = currentProject.name || 'Mio Nuovo Sito';
    } else if (!templateId) {
        window.location.href = 'index.html';
        return;
    }

    // Initialize GrapesJS
    const editor = grapesjs.init({
        container: '#gjs',
        height: '100%',
        width: 'auto',
        storageManager: {
            type: 'local',
            autosave: true,
            autoload: true,
            stepsBeforeSave: 3,
            options: {
                local: {
                    key: `gjs-Project-${projectId}`
                }
            }
        },
        plugins: [
            'gjs-preset-webpage',
            'grapesjs-plugin-export',
            'gjs-blocks-basic',
            'gjs-blocks-flexbox',
            'grapesjs-plugin-forms',
            'gjs-navbar',
            'gjs-component-countdown',
            'grapesjs-tabs'
        ],
        pluginsOpts: {
            'gjs-preset-webpage': {
                modalImportTitle: 'Importa Codice',
                modalImportLabel: '<div style="margin-bottom: 10px; font-size: 13px;">Incolla il tuo codice HTML/CSS qui</div>',
                modalImportContent: '',
            },
            'grapesjs-plugin-export': {
                addExportBtn: true,
                btnLabel: 'Esporta .ZIP',
                filenamePfx: 'sito-esportato',
                root: {
                    css: {
                        'style.css': ed => ed.getCss(),
                    },
                    'index.html': ed => `<!doctype html>
<html lang="it">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="./css/style.css">
    <!-- Include Tailwind if needed, assuming the templates might use it -->
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
  </head>
  <body>${ed.getHtml()}</body>
</html>`
                }
            }
        },
        assetManager: {
            uploadText: 'Rilascia i file qui o clicca per caricare (Max 2MB per evitare blocco Storage)',
            handleAdd: (textFromInput) => {
                editor.AssetManager.add(textFromInput);
            },
            // Handle local file uploads by reading as Base64 to avoid backend dependency
            uploadFile: function(e) {
                var files = e.dataTransfer ? e.dataTransfer.files : e.target.files;
                var formData = new FormData();

                for (var i = 0, len = files.length; i < len; i++) {
                    var file = files[i];

                    var reader = new FileReader();
                    reader.onload = (function(theFile) {
                        return function(e) {
                            var base64String = e.target.result;
                            editor.AssetManager.add({
                                src: base64String,
                                name: theFile.name
                            });
                        };
                    })(file);

                    reader.readAsDataURL(file);
                }
            }
        },
        canvas: {
            styles: [
                'https://cdn.tailwindcss.com',
                'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css'
            ],
            scripts: [
                'https://cdn.tailwindcss.com'
            ]
        }
    });

    // Custom Save Function
    const saveProjectMeta = () => {
        saveStatus.textContent = 'Salvataggio...';

        let projects = [];
        const savedData = localStorage.getItem('sitebuilder-projects');
        if (savedData) {
            projects = JSON.parse(savedData);
        }

        const projIndex = projects.findIndex(p => p.id === projectId);

        if (projIndex > -1) {
            projects[projIndex].name = projectNameInput.value;
            projects[projIndex].updatedAt = Date.now();
        }

        localStorage.setItem('sitebuilder-projects', JSON.stringify(projects));

        setTimeout(() => {
            saveStatus.textContent = 'Salvato';
        }, 1000);
    };

    projectNameInput.addEventListener('change', saveProjectMeta);

    btnSave.addEventListener('click', () => {
        editor.store();
        saveProjectMeta();
    });

    // Export ZIP Handler
    btnExport.addEventListener('click', () => {
        editor.runCommand('gjs-export-zip');
    });

    // Initial Editor Setup
    editor.on('load', () => {
        saveStatus.textContent = 'Caricato';

        // Load Template if specified and not previously saved
        const storedData = localStorage.getItem(`gjs-Project-${projectId}`);
        if (templateId && !storedData) {
            if (window.Templates && window.Templates[templateId]) {
                editor.setComponents(window.Templates[templateId].html);
                editor.setStyle(window.Templates[templateId].css);
            } else {
                // Load default empty structure
                editor.setComponents('<h1>Benvenuto nel tuo nuovo sito</h1><p>Trascina i blocchi da destra per iniziare.</p>');
            }
        }

        // If Templates are loaded, add Global Blocks
        if (window.Templates && window.Templates.setupGlobalBlocks) {
            window.Templates.setupGlobalBlocks(editor);
        }
    });

    // Header/Footer Settings Toggle Logic
    const btnEditGlobal = document.getElementById('btn-edit-global');
    btnEditGlobal.classList.remove('hidden'); // Show the button

    btnEditGlobal.addEventListener('click', () => {
        // Find header in canvas
        const headerComponent = editor.getWrapper().findType('header')[0];
        if (headerComponent) {
            editor.select(headerComponent);
            // Open Settings/Traits Panel
            editor.Panels.getButton('views', 'open-tm').set('active', true);

            // Scroll to it
            const el = headerComponent.getEl();
            if(el) { el.scrollIntoView({behavior: 'smooth'}); }
        } else {
            alert('Nessun Header Globale trovato in questo template.');
        }
    });

    // Handle autosave UI updates
    editor.on('storage:start', () => { saveStatus.textContent = 'Salvataggio...'; });
    editor.on('storage:end', () => { saveStatus.textContent = 'Salvato'; });
    editor.on('storage:error', () => { saveStatus.textContent = 'Errore di salvataggio'; });

});