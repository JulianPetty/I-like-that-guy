'use client';
import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="relative w-full h-[50vh] bg-cover bg-center">
                <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(/assets/redbook.jpg)` }}
                >
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
                
                {/* Hero Content */}
                <div className="relative z-10 h-full mx-auto w-[75vw] flex items-center justify-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-normal text-orange-50">
                        Contact Us
                    </h1>
                </div>
            </div>

            {/* Contact Form Section */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="prose prose-lg mx-auto">
                    <p className="text-lg sm:text-xl text-orange-50 text-center mb-12">
                        Have a question or want to get in touch? Send us a message below.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-orange-50 text-sm font-medium mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-4 py-2 bg-gray-800 text-orange-50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-orange-50 text-sm font-medium mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-2 bg-gray-800 text-orange-50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-orange-50 text-sm font-medium mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={6}
                                className="w-full px-4 py-2 bg-gray-800 text-orange-50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                value={formData.message}
                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                                required
                            ></textarea>
                        </div>

                        <div className="text-center">
                            <button
                                type="submit"
                                className="px-8 py-3 bg-orange-500 text-orange-50 rounded-md hover:bg-orange-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
