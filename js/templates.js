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

        // Add more Rich Sections
        bm.add('hero-section', {
            label: '<i class="fas fa-image mb-1 text-2xl block"></i> Hero Section',
            category: 'Rich Sections',
            content: `
            <section class="bg-indigo-700 text-white py-20 px-4">
                <div class="container mx-auto text-center">
                    <h1 class="text-5xl font-extrabold mb-6">Build Your Dream Website</h1>
                    <p class="text-xl mb-8 max-w-2xl mx-auto">No coding required. Drag, drop, and launch your ideas in minutes with our intuitive builder.</p>
                    <a href="#" class="bg-white text-indigo-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition">Get Started Now</a>
                </div>
            </section>
            `
        });

        bm.add('features-section', {
            label: '<i class="fas fa-list mb-1 text-2xl block"></i> Features',
            category: 'Rich Sections',
            content: `
            <section class="py-16 bg-gray-50">
                <div class="container mx-auto px-4">
                    <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose Us</h2>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div class="bg-white p-6 rounded-lg shadow text-center">
                            <i class="fas fa-bolt text-4xl text-yellow-500 mb-4"></i>
                            <h3 class="text-xl font-bold mb-2">Lightning Fast</h3>
                            <p class="text-gray-600">Our platform ensures your website loads incredibly fast for the best user experience.</p>
                        </div>
                        <div class="bg-white p-6 rounded-lg shadow text-center">
                            <i class="fas fa-lock text-4xl text-green-500 mb-4"></i>
                            <h3 class="text-xl font-bold mb-2">Secure</h3>
                            <p class="text-gray-600">Top-notch security features built-in to keep your data and your users safe.</p>
                        </div>
                        <div class="bg-white p-6 rounded-lg shadow text-center">
                            <i class="fas fa-mobile-alt text-4xl text-blue-500 mb-4"></i>
                            <h3 class="text-xl font-bold mb-2">Responsive</h3>
                            <p class="text-gray-600">Your site will look perfect on desktops, tablets, and smartphones automatically.</p>
                        </div>
                    </div>
                </div>
            </section>
            `
        });

        bm.add('pricing-section', {
            label: '<i class="fas fa-dollar-sign mb-1 text-2xl block"></i> Pricing Table',
            category: 'Rich Sections',
            content: `
            <section class="py-16 bg-white">
                <div class="container mx-auto px-4">
                    <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">Simple Pricing</h2>
                    <div class="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-8">
                        <div class="bg-gray-50 border border-gray-200 p-8 rounded-xl text-center w-full md:w-1/3">
                            <h3 class="text-2xl font-bold mb-4">Basic</h3>
                            <div class="text-4xl font-extrabold mb-6">$9<span class="text-lg text-gray-500 font-normal">/mo</span></div>
                            <ul class="text-gray-600 mb-8 space-y-2">
                                <li>1 Website</li>
                                <li>5GB Storage</li>
                                <li>Basic Support</li>
                            </ul>
                            <a href="#" class="block w-full bg-indigo-600 text-white font-bold py-2 rounded hover:bg-indigo-700">Choose Basic</a>
                        </div>
                        <div class="bg-indigo-600 text-white p-8 rounded-xl text-center shadow-xl w-full md:w-1/3 transform scale-105">
                            <h3 class="text-2xl font-bold mb-4">Pro</h3>
                            <div class="text-4xl font-extrabold mb-6">$29<span class="text-lg text-indigo-200 font-normal">/mo</span></div>
                            <ul class="mb-8 space-y-2 text-indigo-100">
                                <li>10 Websites</li>
                                <li>50GB Storage</li>
                                <li>Priority Support</li>
                                <li>Custom Domain</li>
                            </ul>
                            <a href="#" class="block w-full bg-white text-indigo-600 font-bold py-2 rounded hover:bg-gray-100">Choose Pro</a>
                        </div>
                    </div>
                </div>
            </section>
            `
        });

        bm.add('testimonials-section', {
            label: '<i class="fas fa-quote-left mb-1 text-2xl block"></i> Testimonials',
            category: 'Rich Sections',
            content: `
            <section class="py-16 bg-gray-100">
                <div class="container mx-auto px-4 text-center">
                    <h2 class="text-3xl font-bold mb-10 text-gray-800">What Our Clients Say</h2>
                    <div class="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">
                        <div class="text-yellow-400 text-2xl mb-4">
                            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                        </div>
                        <p class="text-xl italic text-gray-700 mb-6">"This platform revolutionized how we build landing pages. It's incredibly fast, intuitive, and the results are professional."</p>
                        <div class="font-bold text-gray-900">- Jane Doe, CEO of TechStart</div>
                    </div>
                </div>
            </section>
            `
        });

        bm.add('cta-section', {
            label: '<i class="fas fa-bullhorn mb-1 text-2xl block"></i> Call To Action',
            category: 'Rich Sections',
            content: `
            <section class="py-20 bg-blue-600 text-white text-center">
                <div class="container mx-auto px-4">
                    <h2 class="text-4xl font-bold mb-4">Ready to boost your productivity?</h2>
                    <p class="text-xl mb-8 text-blue-100">Join thousands of satisfied users today.</p>
                    <a href="#" class="bg-white text-blue-600 font-bold py-3 px-10 rounded-full shadow-lg hover:bg-gray-100 transition text-lg">Sign Up Now</a>
                </div>
            </section>
            `
        });

        // Ensure these components are marked as specific types so they can be isolated if needed
        editor.DomComponents.addType('header', {
            isComponent: el => el.tagName === 'HEADER',
            model: {
                defaults: {
                    name: 'Header Settings',
                    traits: [
                        {
                            type: 'color',
                            name: 'background-color',
                            label: 'Sfondo Header',
                            changeProp: 1
                        },
                        {
                            type: 'color',
                            name: 'color',
                            label: 'Colore Testo',
                            changeProp: 1
                        }
                    ],
                },
                init() {
                    this.on('change:background-color', this.handleStyleChange);
                    this.on('change:color', this.handleStyleChange);
                },
                handleStyleChange() {
                    const bg = this.get('background-color');
                    const color = this.get('color');
                    if (bg) this.addStyle({ 'background-color': bg });
                    if (color) this.addStyle({ 'color': color });
                }
            }
        });

        editor.DomComponents.addType('footer', {
            isComponent: el => el.tagName === 'FOOTER',
            model: {
                defaults: {
                    name: 'Footer Settings',
                    traits: [
                        {
                            type: 'color',
                            name: 'background-color',
                            label: 'Sfondo Footer',
                            changeProp: 1
                        },
                        {
                            type: 'color',
                            name: 'color',
                            label: 'Colore Testo',
                            changeProp: 1
                        }
                    ]
                },
                init() {
                    this.on('change:background-color', this.handleStyleChange);
                    this.on('change:color', this.handleStyleChange);
                },
                handleStyleChange() {
                    const bg = this.get('background-color');
                    const color = this.get('color');
                    if (bg) this.addStyle({ 'background-color': bg });
                    if (color) this.addStyle({ 'color': color });
                }
            }
        });
    }
};