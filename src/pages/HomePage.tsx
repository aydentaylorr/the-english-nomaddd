import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Book, User } from "lucide-react";
import { getAllBlogs } from "@/utils/blogUtils";

const HomePage = () => {
    const blogs = getAllBlogs();
    
    return (
        <div className="w-full">
          <section className="bg-nomad-cream pt-8 pb-16 md:pt-24 md:pb-24 border-b border-gray-200 relative overflow-hidden">
            <div className="hidden md:block absolute top-12 right-24 w-16 h-16 bg-nomad-light rounded-full opacity-30"></div>
            <div className="hidden md:block absolute bottom-20 left-8 w-12 h-12 bg-nomad-coral rounded-full opacity-25"></div>
            <div className="nomad-container">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 order-1 md:order-2 mt-8 md:mt-0">
                  <div className="relative">
                    <img 
                      src="/images/smiling-face-tams.jpg" 
                      alt="Tamsin teaching" 
                      className="rounded-lg shadow-lg relative z-10 w-full mb-8 md:mb-0"
                    />
                  </div>
                </div>
                <div className="md:w-1/2 order-2 md:order-1">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-rounded font-semibold text-nomad-dark mb-4">Journey Through English with Tamsin</h1>
                  <p className="text-gray-600 text-lg mb-8">
                    English lessons with a touch of adventure, delivered from the shores of Cape Town
                    to students across the globe. Perfect your language skills with a teacher who lives
                    the nomad lifestyle.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                        href="https://preply.com/en/?pref=NDA1NTk1Nw==&id=1752497948.153102&ep="
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <Button className="bg-nomad-dark hover:bg-nomad-dark/90 text-lg py-6 px-8">
                            <span>Ready to Start Your English Journey</span>
                        </Button>
                    </a>
                    <Link to="/about">
                        <Button variant="outline" className="text-lg py-6 px-8">
                            Learn More
                        </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

            <section className="py-16 bg-white relative overflow-hidden">
                <div className="hidden md:block absolute top-20 left-5 w-10 h-10 bg-nomad-cream rounded-full opacity-40"></div>
                <div className="hidden md:block absolute bottom-16 right-12 w-14 h-14 bg-nomad-light rounded-full opacity-25"></div>
                <div className="nomad-container">
                    <h2 className="text-2xl md:text-3xl font-rounded font-medium text-nomad-dark text-center mb-12">How It Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="nomad-card">
                            <div className="w-14 h-14 bg-nomad-coral/20 rounded-full flex items-center justify-center mb-4">
                                <Book className="w-8 h-8 text-nomad-coral"/>
                            </div>
                            <h3 className="text-xl font-medium mb-2">Personalised Learning</h3>
                            <p className="text-gray-600">
                                Lessons tailored to your needs, level and goals. Practical English you can use right away.
                            </p>
                        </div>
                        <div className="nomad-card">
                            <div className="w-14 h-14 bg-nomad-coral/20 rounded-full flex items-center justify-center mb-4">
                                <User className="w-8 h-8 text-nomad-coral"/>
                            </div>
                            <h3 className="text-xl font-medium mb-2">Expert Teaching</h3>
                            <p className="text-gray-600">
                                Learn from Tamsin, an experienced English teacher with a passion for helping students succeed.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-nomad-cream relative overflow-hidden">
                <div className="hidden md:block absolute top-24 right-8 w-8 h-8 bg-nomad-coral rounded-full opacity-30"></div>
                <div className="hidden md:block absolute bottom-32 left-16 w-20 h-20 bg-nomad-light rounded-full opacity-20"></div>
                <div className="nomad-container">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-2/5 mb-8 md:mb-0">
                    <div className="relative">
                        <div className="hidden md:block absolute -top-4 -right-4 w-32 h-32 bg-nomad-coral rounded-full opacity-30"></div>
                        <img 
                        src="/images/sitting-on-beach-tams.jpg" 
                        alt="Tamsin on the beach" 
                        className="rounded-lg shadow-lg relative z-10"
                        />
                    </div>
                    </div>
                    <div className="md:w-3/5 md:pl-12">
                    <h2 className="text-2xl md:text-3xl font-rounded font-medium text-nomad-dark mb-4">Meet Your Teacher</h2>
                    <p className="text-gray-600 mb-6">
                        Hi, I'm Tamsin! Based in sun-soaked Cape Town, I combine my passion for English
                        language teaching with my love for yoga, surfing, and globe-trotting adventures.
                    </p>
                    <p className="text-gray-600 mb-6">
                        With students across multiple continents, I've crafted a teaching style that's as
                        flexible as it is effective, helping you master English in a way that's engaging
                        and practical.
                    </p>
                    <Link to="/about">
                        <Button variant="outline" className="text-nomad-dark border-nomad-dark">
                        <User className="mr-2 h-4 w-4" />
                        Learn More About Me
                        </Button>
                    </Link>
                    </div>
                </div>
                </div>
            </section>

            <section className="py-16 bg-white relative overflow-hidden">
                <div className="hidden md:block absolute top-16 left-20 w-6 h-6 bg-nomad-cream rounded-full opacity-50"></div>
                <div className="hidden md:block absolute bottom-20 right-6 w-16 h-16 bg-nomad-light rounded-full opacity-20"></div>
                <div className="nomad-container">
                <h2 className="text-2xl md:text-3xl font-rounded font-medium text-nomad-dark text-center mb-12">What My Students Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="nomad-card">
                    <div className="flex items-center mb-4">
                        <div className="h-10 w-10 rounded-full bg-nomad-light text-white flex items-center justify-center font-medium">G</div>
                        <div className="ml-3">
                        <h4 className="font-medium">Gökçe</h4>
                        <p className="text-sm text-gray-500">Turkey</p>
                        </div>
                    </div>
                    <p className="text-gray-600 italic">
                        "Tamsin is the best listener I’ve ever seen. She is fully committed to our scheduled lessons and tries 
                        to give her best effort to her students. There is no judgment, shaming, or negativity in our lesson, 
                        that’s why it is a comfortable environment to express yourself freely. In addition, she is an open-minded 
                        and enthusiastic person who helps you to discover new books, websites, and movies that you might not have 
                        heard of before. Thanks for being such a great tutor and friend, Tam."
                    </p>
                    </div>

                    <div className="nomad-card">
                    <div className="flex items-center mb-4">
                        <div className="h-10 w-10 rounded-full bg-nomad-coral text-white flex items-center justify-center font-medium">M</div>
                        <div className="ml-3">
                        <h4 className="font-medium">Melissa</h4>
                        <p className="text-sm text-gray-500">Germany</p>
                        </div>
                    </div>
                    <p className="text-gray-600 italic">
                        "Fantastic Teacher! Tamsin makes me feel comfortable and supported when speaking English, and she always 
                        tailors the sessions to my individual needs. Her lessons are very well-prepared with interesting 
                        materials, interactive, and engaging, which makes learning both effective and fun. I’ve noticed a 
                        significant improvement in my English skills since starting lessons with her. It’s always a pleasure 
                        talking to Tamsin, and her encouragement and positive attitude keep me motivated to continue learning."
                    </p>
                    </div>
                </div>
                </div>
            </section>

            <section className="py-16 bg-nomad-cream text-white relative overflow-hidden">
                <div className="hidden md:block absolute top-10 left-10 w-20 h-20 bg-nomad-coral opacity-30 rounded-full"></div>
                <div className="hidden md:block absolute bottom-16 right-20 w-14 h-14 bg-nomad-coral opacity-20 rounded-full"></div>
                <div className="nomad-container text-center">
                <h2 className="text-3xl md:text-4xl font-rounded text-nomad-dark font-semibold mb-4">Ready to Start Your English Adventure?</h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                    Join students from over 20 countries who are improving their English with personalized lessons.
                </p>
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
            </section>

            <section className="py-16 bg-white relative overflow-hidden">
                <div className="hidden md:block absolute top-32 right-10 w-12 h-12 bg-nomad-cream rounded-full opacity-40"></div>
                <div className="hidden md:block absolute bottom-24 left-12 w-8 h-8 bg-nomad-coral rounded-full opacity-30"></div>
                <div className="nomad-container">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-rounded font-medium text-nomad-dark">Latest from the Blog</h2>
                    <Link to="/blog" className="text-nomad-dark font-medium hover:underline">View all posts</Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogs.slice(0, 3).map((blog) => (
                    <div key={blog.id} className="nomad-card">
                        <img 
                        src={blog.image} 
                        alt={blog.title} 
                        className="w-full h-48 object-cover rounded-t-lg -mt-6 -mx-6 mb-6"
                        />
                        <h3 className="text-lg font-medium mb-2">{blog.title}</h3>
                        <p className="text-gray-600 mb-4 line-clamp-2">
                        {blog.excerpt}
                        </p>
                        <Link to={`/blog/${blog.slug}`} className="text-nomad-dark font-medium hover:underline">Read more</Link>
                    </div>
                    ))}
                </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
