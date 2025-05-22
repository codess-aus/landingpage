import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-white shadow-sm py-4">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <a href="/" className="text-2xl font-mono font-bold">&lt;/&gt;DevTool</a>
                <nav>
                    <ul className="flex items-center space-x-8">
                        <li><a href="#features" className="text-gray-600 hover:text-gray-900">Features</a></li>
                        <li><a href="#examples" className="text-gray-600 hover:text-gray-900">Examples</a></li>
                        <li><a href="#testimonials" className="text-gray-600 hover:text-gray-900">Testimonials</a></li>
                        <li><a href="#docs" className="text-gray-600 hover:text-gray-900">Docs</a></li>
                        <li><a href="#community" className="text-gray-600 hover:text-gray-900">Community</a></li>
                        <li><a href="/login" className="text-gray-600 hover:text-gray-900">Login</a></li>
                        <li>
                            <a href="/get-started" className="bg-[#8C7CFF] hover:bg-[#7B68FF] text-white px-6 py-2 rounded-lg transition-colors">
                                Get Started
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;