import HeroSection from "@/components/HeroSection";

export default function About() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="relative w-full h-[50vh] bg-cover bg-center">
                <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(/assets/zarathustra.jpg)` }}
                >
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
                
                {/* Hero Content */}
                <div className="relative z-10 h-full mx-auto w-[75vw] flex items-center justify-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-normal text-orange-50">
                        About Us
                    </h1>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="prose prose-lg mx-auto">
                    <div className="text-orange-50 space-y-6">

                        <h2 className="text-2xl sm:text-4xl font-semibold mt-12 mb-6">Welcome</h2>
                        <p className="text-lg sm:text-xl leading-relaxed">
                            Welcome to our corner of the internet. We're passionate about exploring 
                            the depths of human thought and experience through thoughtful discussion 
                            and engaging content.
                        </p>

                        <h2 className="text-2xl sm:text-3xl font-semibold mt-12 mb-6">Our Mission</h2>
                        <p className="text-lg sm:text-xl leading-relaxed">
                            We believe in the power of ideas to shape our understanding of the world. 
                            Through our articles, we aim to bridge the gap between philosophy, art, 
                            and technology, creating a space for meaningful dialogue and reflection.
                        </p>

                        <h2 className="text-2xl sm:text-3xl font-semibold mt-12 mb-6">What We Cover</h2>
                        <ul className="list-none space-y-4 text-lg sm:text-xl">
                            <li className="flex items-center space-x-3">
                                <span className="text-orange-500">•</span>
                                <span>Philosophy and Critical Thinking</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span className="text-orange-500">•</span>
                                <span>Art and Creative Expression</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span className="text-orange-500">•</span>
                                <span>Technology and Innovation</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span className="text-orange-500">•</span>
                                <span>Cultural Analysis and Commentary</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
