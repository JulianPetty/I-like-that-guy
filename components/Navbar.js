'use client';

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="absolute top-0 left-0 lg:w-[80%] lg:mx-[10%] w-full p-4 pr-8 xl:p-4 z-50">
            <nav className="flex items-center justify-between text-orange-50 text-xl lg:text-2xl font-normal bg-transparent">
                {/* Left-aligned Logo */}
                <div className="logo">
                    <Link href="/">
                        <img
                            src="/assets/logoBlog.png"
                            alt="Logo"
                            className="h-12 sm:h-16 w-auto object-contain"
                        />
                    </Link>
                </div>

                {/* Hamburger Menu for Mobile */}
                <button
                    className="block md:hidden text-orange-50 focus:outline-none"
                    onClick={toggleMenu}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                        />
                    </svg>
                </button>

                {/* Links */}
                <div
                    className={`absolute md:static top-24 left-0 w-full bg-gray-800 md:bg-transparent md:flex md:justify-end md:space-x-10 transition-all duration-300 ${isOpen ? 'block' : 'hidden'
                        }`}
                >
                    <div className="p-4 md:p-0 transition transform ease-in-out duration-150 hover:scale-105 hover:text-orange-300">
                        <Link href="/">Home</Link>
                    </div>
                    <div className="p-4 md:p-0 transition transform ease-in-out duration-150 hover:scale-105 hover:text-orange-300">
                        <Link href="/about">About</Link>
                    </div>
                    <div className="p-4 md:p-0 transition transform ease-in-out duration-150 hover:scale-105 hover:text-orange-300">
                        <Link href="/contact">Contact</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
