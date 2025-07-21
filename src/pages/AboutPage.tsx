import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPage = () => {
    return (
        <div className="w-full">
            <section className="bg-nomad-cream pt-8 pb-16 md:pt-24 md:pb-24 border-b border-gray-200 relative overflow-hidden">
                <div className="hidden md:block absolute top-10 right-20 w-16 h-16 bg-nomad-light rounded-full opacity-30"></div>
                <div className="hidden md:block absolute bottom-20 left-10 w-12 h-12 bg-nomad-coral rounded-full opacity-30"></div>
                <div className="nomad-container">
                    <div className="flex flex-col-reverse md:flex-row items-center">
                        <div className="md:w-1/2 md:pr-12">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-rounded font-semibold text-nomad-dark mb-4">About Tamsin</h1>
                            <p className="text-gray-600 text-lg mb-6">
                                English teacher, yoga enthusiast, and ocean lover based in sunny Cape Town, South Africa. 
                                I’m most alive when I’m close to the water, whether I’m catching waves at sunrise, flowing 
                                through yoga under open skies, or simply soaking up the salty breeze with a good book in hand. 
                                I’ve always loved exploring language, and teaching English lets me connect with people from all 
                                over the world while helping them grow in confidence and fluency.
                            </p>
                            <p className="text-gray-600 text-lg mb-6">
                                When I’m not teaching, you’ll find me chasing new adventures — whether it’s hiking up Table 
                                Mountain, wandering through a new city, or sharing stories over coffee with someone I’ve just 
                                met. I live for soulful sunsets, meaningful conversations, and anything that brings me closer to 
                                nature and new perspectives. Life’s a journey, and I’m all about riding the waves — literally and 
                                figuratively.
                            </p>
                        </div>
                        <div className="md:w-1/2 mb-10 md:mb-0">
                            <div className="relative">
                                <div className="hidden md:block absolute -top-6 -right-6 w-32 h-32 bg-nomad-coral rounded-full opacity-30"></div>
                                <img
                                    src="/images/sitting-by-desk-tams.jpg"
                                    alt="Tamsin at desk"
                                    className="rounded-lg shadow-lg relative z-10"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white relative overflow-hidden">
                <div className="nomad-container">
                <h2 className="text-2xl md:text-3xl font-rounded font-medium text-nomad-dark mb-8">My Story</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-6">
                    <p className="text-gray-700">
                        Hi, I’m Tamsin! My journey with language teaching began over a decade ago when I discovered my passion for 
                        connecting with people from different cultures and helping them express themselves confidently in English.
                    </p>
                    <p className="text-gray-700">
                        After earning my TEFL certification, I started teaching online and quickly realized the digital world 
                        offered an amazing opportunity to connect with students from all over the globe — all while fueling my 
                        love for travel. Now based in the vibrant coastal city of Cape Town, I split my time between teaching, 
                        catching waves at sunrise, practicing yoga, and exploring new places whenever I can. This lifestyle keeps 
                        me grounded, inspired, and always ready to bring fresh energy into each lesson.
                    </p>
                    <p className="text-gray-700">
                        What sets my teaching apart is my focus on practical, conversational English you can use right away. 
                        My students often say our lessons feel more like relaxed, engaging conversations with a friend than 
                        formal instruction. This approach has helped hundreds of learners reach their language goals — whether 
                        it’s for work, travel, or personal growth — and enjoy the process along the way.
                    </p>
                    </div>
                    <div>
                    <div className="nomad-card">
                        <h3 className="text-xl font-medium mb-4">Credentials</h3>
                        <ul className="space-y-3">
                        <li className="flex items-start">
                            <div className="h-6 w-6 rounded-full bg-nomad-light/20 text-nomad-dark flex items-center justify-center mr-2 mt-1">✓</div>
                            <span className="text-gray-700">TEFL Certification (120 hours)</span>
                        </li>
                        <li className="flex items-start">
                            <div className="h-6 w-6 rounded-full bg-nomad-light/20 text-nomad-dark flex items-center justify-center mr-2 mt-1">✓</div>
                            <span className="text-gray-700">Specialized Business English Training</span>
                        </li>
                        <li className="flex items-start">
                            <div className="h-6 w-6 rounded-full bg-nomad-light/20 text-nomad-dark flex items-center justify-center mr-2 mt-1">✓</div>
                            <span className="text-gray-700">6+ years teaching experience</span>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            <section className="py-16 bg-nomad-cream relative overflow-hidden">
                <div className="hidden md:block absolute top-16 left-10 w-14 h-14 bg-nomad-coral rounded-full opacity-30"></div>
                <div className="hidden md:block absolute bottom-10 right-20 w-10 h-10 bg-nomad-coral rounded-full opacity-25"></div>
                <div className="hidden md:block absolute top-1/2 right-1 w-32 h-32 bg-nomad-dark opacity-15 rounded-full"></div>
                <div className="hidden md:block absolute bottom-32 left-1/4 w-24 h-6 bg-nomad-coral opacity-20 rounded-full"></div>
                <div className="nomad-container">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-2/5 mb-8 md:mb-0">
                    <div className="relative">
                        <div className="hidden md:block absolute -bottom-6 -left-6 w-32 h-32 bg-nomad-light rounded-full opacity-30"></div>
                        <img 
                        src="/images/overlooking-ocean-tams.jpg" 
                        alt="Tamsin watching sunset" 
                        className="rounded-lg shadow-lg relative z-10"
                        />
                    </div>
                    </div>
                    <div className="md:w-3/5 md:pl-12">
                    <h2 className="text-2xl md:text-3xl font-rounded font-medium text-nomad-dark mb-6">My Teaching Philosophy</h2>
                    <div className="space-y-6">
                        <p className="text-gray-700">
                        I believe that language learning should be as natural and enjoyable as possible. My teaching style combines:
                        </p>
                        <ul className="space-y-4">
                        <li className="flex items-start">
                            <div className="h-6 w-6 rounded-full bg-nomad-coral/20 text-nomad-coral flex items-center justify-center mr-3 mt-1">1</div>
                            <div>
                            <h3 className="font-medium">Practical Communication</h3>
                            <p className="text-gray-600">Focus on real-world situations and conversations you'll actually use.</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <div className="h-6 w-6 rounded-full bg-nomad-coral/20 text-nomad-coral flex items-center justify-center mr-3 mt-1">2</div>
                            <div>
                            <h3 className="font-medium">Personalization</h3>
                            <p className="text-gray-600">Lessons tailored to your interests, goals, and learning style.</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <div className="h-6 w-6 rounded-full bg-nomad-coral/20 text-nomad-coral flex items-center justify-center mr-3 mt-1">3</div>
                            <div>
                            <h3 className="font-medium">Cultural Context</h3>
                            <p className="text-gray-600">Understanding the cultural nuances that shape how English is used.</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <div className="h-6 w-6 rounded-full bg-nomad-coral/20 text-nomad-coral flex items-center justify-center mr-3 mt-1">4</div>
                            <div>
                            <h3 className="font-medium">Mindful Learning</h3>
                            <p className="text-gray-600">Techniques borrowed from yoga that improve focus and retention.</p>
                            </div>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            <section className="py-16 bg-white relative overflow-hidden">
                <div className="hidden md:block absolute top-20 right-16 w-6 h-6 bg-nomad-cream rounded-full opacity-50"></div>
                <div className="hidden md:block absolute bottom-32 left-8 w-18 h-18 bg-nomad-light rounded-full opacity-25"></div>
                <div className="hidden md:block absolute bottom-10 right-1/4 w-20 h-8 bg-nomad-cream opacity-30 rounded-full"></div>
                <div className="nomad-container">
                <h2 className="text-2xl md:text-3xl font-rounded font-medium text-nomad-dark text-center mb-10">When I'm Not Teaching</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="nomad-card">
                    <div className="w-12 h-12 bg-nomad-coral/20 rounded-full flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-nomad-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                        </svg>
                    </div>
                    <h3 className="font-medium mb-2">Surfing</h3>
                    <p className="text-gray-600 text-sm">
                        You'll often find me catching waves at Muizenberg Beach or exploring new surf spots along the Cape Peninsula.
                    </p>
                    </div>

                    <div className="nomad-card">
                    <div className="w-12 h-12 bg-nomad-coral/20 rounded-full flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-nomad-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </div>
                    <h3 className="font-medium mb-2">Yoga</h3>
                    <p className="text-gray-600 text-sm">
                        I practice daily yoga sessions during Cape Town's beautiful sunset hours.
                    </p>
                    </div>

                    <div className="nomad-card">
                    <div className="w-12 h-12 bg-nomad-coral/20 rounded-full flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-nomad-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                    </div>
                    <h3 className="font-medium mb-2">Reading</h3>
                    <p className="text-gray-600 text-sm">
                        An avid reader with a particular love for contemporary fiction and travel memoirs that inspire my adventures.
                    </p>
                    </div>

                    <div className="nomad-card">
                    <div className="w-12 h-12 bg-nomad-coral/20 rounded-full flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-nomad-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 className="font-medium mb-2">Traveling</h3>
                    <p className="text-gray-600 text-sm">
                        I explore new destinations whenever possible, bringing fresh cultural insights back to my English lessons.
                    </p>
                    </div>
                </div>
                </div>
            </section>

            <section className="py-16 bg-nomad-cream relative overflow-hidden">
                <div className="hidden md:block absolute top-8 left-16 w-24 h-24 bg-nomad-coral/20 rounded-full"></div>
                <div className="hidden md:block absolute bottom-12 right-10 w-20 h-20 bg-nomad-dark/15 rounded-full"></div>
                <div className="nomad-container text-center">
                <h2 className="text-3xl font-rounded font-semibold mb-4 text-nomad-dark">Ready to Learn with Me?</h2>
                <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-600">
                    Let's start your personalized English learning journey together. Book your first lesson today!
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                    href="https://preply.com/en/?pref=NDA1NTk1Nw==&id=1752497948.153102&ep="
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button
                        variant="outline"
                        className="text-nomad-dark border-nomad-dark hover:bg-nomad-coral text-lg py-6 px-8"
                    >
                        Sign Up Today
                    </Button>
                </a>
                </div>
                </div>
            </section>

            <section className="py-16 bg-white relative overflow-hidden">
                <div className="nomad-container">
                <h2 className="text-2xl md:text-3xl font-rounded font-medium text-nomad-dark text-center mb-12">What My Students Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="nomad-card">
                    <div className="flex items-center mb-4">
                        <div className="h-10 w-10 rounded-full bg-nomad-light text-white flex items-center justify-center font-medium">D</div>
                        <div className="ml-3">
                        <h4 className="font-medium">David</h4>
                        <p className="text-sm text-gray-500">Brazil</p>
                        </div>
                    </div>
                    <p className="text-gray-600 italic">
                        "Tamsin is a teacher with knowledge and what is important, very empathetic with the student, she always
                         wants to help, and she also makes you feel comfortable in class."
                    </p>
                    </div>

                    <div className="nomad-card">
                    <div className="flex items-center mb-4">
                        <div className="h-10 w-10 rounded-full bg-nomad-coral text-white flex items-center justify-center font-medium">N</div>
                        <div className="ml-3">
                        <h4 className="font-medium">Nasrin</h4>
                        <p className="text-sm text-gray-500">Germany</p>
                        </div>
                    </div>
                    <p className="text-gray-600 italic">
                        "Tam is a warmhearted person who teaches with a lot of patience. She is very flexible and open, and it's 
                        always a lot of fun with her. Thank you very much, dear Tami for the wonderful time :*"
                    </p>
                    </div>
                </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
