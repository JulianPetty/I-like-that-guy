import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-[#0D1B2A] text-orange-50 py-12 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center space-y-6">
                    {/* Logo and Description */}
                    <div className="flex flex-col items-center space-y-4">
                        <img
                            src="/assets/logoBlog.png"
                            alt="Logo"
                            className="h-16 w-auto object-contain"
                        />
                        <p className="text-sm sm:text-base text-gray-400 text-center max-w-md">
                            Exploring ideas through thoughtful discussion and engaging content.
                        </p>
                    </div>

                    <div className="border-t border-gray-800 w-full pt-8 text-center">
                        <p className="text-sm text-gray-400">© {new Date().getFullYear()} Archetypal Web. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 