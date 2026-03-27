window.Templates = {
    // We provide a sample implementation for a few categories.
    // In a real scenario, all 30 templates would be defined here or fetched via JSON.

    'wow-1': {
        html: `
        <header class="bg-gray-900 text-white p-6 shadow-md" data-gjs-type="header">
            <div class="container mx-auto flex justify-between items-center">
                <h1 class="text-2xl font-bold tracking-widest uppercase">Wow Studio</h1>
                <nav class="space-x-4">
                    <a href="#" class="hover:text-pink-500 transition">Home</a>
                    <a href="#" class="hover:text-pink-500 transition">Portfolio</a>
                    <a href="#" class="hover:text-pink-500 transition">Contact</a>
                </nav>
            </div>
        </header>
        <section class="relative bg-gradient-to-r from-purple-600 to-pink-500 h-screen flex items-center justify-center text-white overflow-hidden">
            <div class="absolute inset-0 bg-black opacity-30"></div>
            <div class="z-10 text-center px-4 transform hover:scale-105 transition duration-500">
                <h2 class="text-6xl font-extrabold mb-4 drop-shadow-lg">Create with Impact</h2>
                <p class="text-xl mb-8 max-w-2xl mx-auto drop-shadow-md">Unleash the power of modern design with our cutting-edge visual builder.</p>
                <a href="#" class="bg-white text-purple-600 font-bold py-3 px-8 rounded-full shadow-xl hover:bg-gray-100 transition transform hover:-translate-y-1">Get Started</a>
            </div>
            <!-- Decorative circles -->
            <div class="absolute top-20 left-20 w-32 h-32 bg-white rounded-full mix-blend-overlay filter blur-xl opacity-50 animate-pulse"></div>
            <div class="absolute bottom-20 right-20 w-48 h-48 bg-pink-300 rounded-full mix-blend-overlay filter blur-2xl opacity-40 animate-pulse"></div>
        </section>
        <footer class="bg-gray-900 text-gray-400 py-8 text-center" data-gjs-type="footer">
            <div class="container mx-auto">
                <p>&copy; 2024 Wow Studio. All rights reserved.</p>
            </div>
        </footer>
        `,
        css: `
        body { margin: 0; font-family: 'Inter', sans-serif; }
        `
    },

    'prof-1': {
        html: `
        <header class="bg-white border-b border-gray-200 py-4" data-gjs-type="header">
            <div class="container mx-auto flex justify-between items-center px-6">
                <div class="text-xl font-bold text-blue-800">CorpInc.</div>
                <nav class="space-x-6 text-sm font-medium text-gray-600">
                    <a href="#" class="hover:text-blue-600">Services</a>
                    <a href="#" class="hover:text-blue-600">About Us</a>
                    <a href="#" class="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700">Client Login</a>
                </nav>
            </div>
        </header>
        <section class="bg-gray-50 py-20 px-6">
            <div class="container mx-auto flex flex-col md:flex-row items-center">
                <div class="md:w-1/2 pr-0 md:pr-12 mb-10 md:mb-0">
                    <h1 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">Professional Solutions for Corporate Growth</h1>
                    <p class="text-lg text-gray-600 mb-8">We provide industry-leading analytics and consulting to help your business scale efficiently and securely.</p>
                    <button class="bg-blue-600 text-white font-semibold px-6 py-3 rounded shadow hover:bg-blue-700">Request a Consultation</button>
                </div>
                <div class="md:w-1/2">
                    <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Corporate Team" class="rounded-lg shadow-xl">
                </div>
            </div>
        </section>
        <footer class="bg-gray-100 border-t border-gray-200 py-8" data-gjs-type="footer">
            <div class="container mx-auto px-6 flex justify-between items-center text-sm text-gray-500">
                <div>&copy; 2024 CorpInc.</div>
                <div class="space-x-4">
                    <a href="#" class="hover:text-gray-800">Privacy Policy</a>
                    <a href="#" class="hover:text-gray-800">Terms of Service</a>
                </div>
            </div>
        </footer>
        `,
        css: `
        body { margin: 0; font-family: 'Helvetica Neue', Arial, sans-serif; }
        `
    },

    'gen-1': {
        html: `
        <header class="bg-white py-5 shadow-sm" data-gjs-type="header">
            <div class="container mx-auto px-4 text-center">
                <h1 class="text-3xl font-serif text-gray-800">My Personal Blog</h1>
                <p class="text-gray-500 mt-2 text-sm">Thoughts, stories and ideas.</p>
            </div>
        </header>
        <main class="container mx-auto px-4 py-12 max-w-4xl">
            <article class="mb-12 border-b border-gray-200 pb-12">
                <h2 class="text-3xl font-bold text-gray-900 mb-4">The Joy of Simplicity</h2>
                <div class="text-gray-500 mb-6 text-sm">Published on Oct 24, 2024 by Author</div>
                <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Desk" class="w-full rounded mb-6 object-cover h-64">
                <p class="text-gray-700 leading-relaxed text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>
                <p class="text-gray-700 leading-relaxed text-lg">Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio.</p>
            </article>
        </main>
        <footer class="bg-gray-800 text-white py-10 text-center" data-gjs-type="footer">
            <div class="container mx-auto px-4">
                <h3 class="text-xl mb-4 font-serif">Subscribe to my newsletter</h3>
                <div class="flex justify-center max-w-md mx-auto mb-6">
                    <input type="email" placeholder="Your email address" class="px-4 py-2 w-full rounded-l text-gray-900 focus:outline-none">
                    <button class="bg-gray-600 hover:bg-gray-500 px-6 py-2 rounded-r transition">Subscribe</button>
                </div>
                <p class="text-gray-400 text-sm">&copy; 2024 My Personal Blog.</p>
            </div>
        </footer>
        `,
        css: `
        body { margin: 0; font-family: Georgia, serif; }
        `
    },

    setupGlobalBlocks: function(editor) {
        const bm = editor.BlockManager;

        // Custom Header Block
        bm.add('global-header', {
            label: '<i class="fas fa-heading mb-1 text-2xl block"></i> Global Header',
            category: 'Global Sections',
            content: `
            <header class="bg-gray-800 text-white py-4" data-gjs-type="header">
                <div class="container mx-auto flex justify-between items-center px-4">
                    <div class="text-xl font-bold">Logo</div>
                    <nav class="space-x-4">
                        <a href="#" class="hover:text-gray-300">Home</a>
                        <a href="#" class="hover:text-gray-300">About</a>
                        <a href="#" class="hover:text-gray-300">Contact</a>
                    </nav>
                </div>
            </header>`,
        });

        // Custom Footer Block
        bm.add('global-footer', {
            label: '<i class="fas fa-shoe-prints mb-1 text-2xl block"></i> Global Footer',
            category: 'Global Sections',
            content: `
            <footer class="bg-gray-800 text-white py-6 mt-10" data-gjs-type="footer">
                <div class="container mx-auto text-center">
                    <p>&copy; 2024 My Website. All Rights Reserved.</p>
                </div>
            </footer>`,
        });

        // Ensure these components are marked as specific types so they can be isolated if needed
        editor.DomComponents.addType('header', {
            isComponent: el => el.tagName === 'HEADER',
            model: {
                defaults: {
                    name: 'Header',
                    traits: [
                        { type: 'text', name: 'id' },
                        { type: 'text', name: 'title' }
                    ]
                }
            }
        });

        editor.DomComponents.addType('footer', {
            isComponent: el => el.tagName === 'FOOTER',
            model: {
                defaults: {
                    name: 'Footer',
                    traits: [
                        { type: 'text', name: 'id' },
                        { type: 'text', name: 'title' }
                    ]
                }
            }
        });
    }
};