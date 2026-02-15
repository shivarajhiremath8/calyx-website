import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';

// Assets
import hero1 from '../assets/hero1.png';
import hero2 from '../assets/hero2.png';
import hero3 from '../assets/hero3.png';

// Placeholder if hero4 doesn't exist, reuse hero1
const heroImages = [
    { src: hero1, title: "Innovation in Spices", desc: "Processing, exporting and supplying broad assortment of Indian Spices." },
    { src: hero2, title: "Sustainable Quality", desc: "Methodically inspected by our quality controllers on various parameters." },
    { src: hero3, title: "Global Reach", desc: "Our products are in great demand in national as well as international markets." },
    { src: hero1, title: "Economical Prices", desc: "Clients can avail these products from us at the most economical prices." }, // fallback for 4th
];

// Placeholder for Service images if not specific
import s1 from '../assets/about2.png';
import s2 from '../assets/about1.png';
import image1 from '../assets/image1.png';

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-slide effect
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroImages.length);
        }, 7000); // 7 seconds
        return () => clearInterval(timer);
    }, []);

    const containerClasses = "container mx-auto px-6 md:px-16 lg:px-24"; // Standardized spacing

    return (
        <div className="flex flex-col">
            {/* Hero Carousel */}
            <section className="relative h-screen bg-black overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 }} // Slower transition for smoothness
                        className="absolute inset-0"
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${heroImages[currentSlide].src})` }}
                        >
                            <div className="absolute inset-0 bg-black/30" /> {/* Lighter Overlay */}
                        </div>

                        <div className="absolute inset-0 flex items-center justify-center text-center text-white px-6">
                            <div className="max-w-5xl space-y-8">
                                <motion.span
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.1, duration: 0.8 }}
                                    className="inline-block px-6 py-2 border border-white/30 rounded-full bg-black/20 backdrop-blur-sm text-sm md:text-base font-medium uppercase tracking-widest"
                                >
                                    Welcome to Calyx Commodities
                                </motion.span>

                                <motion.h1
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2, duration: 0.8 }}
                                    className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight"
                                >
                                    {heroImages[currentSlide].title}
                                </motion.h1>

                                <motion.p
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.3, duration: 0.8 }}
                                    className="text-xl md:text-3xl text-gray-100 max-w-3xl mx-auto font-light leading-relaxed"
                                >
                                    {heroImages[currentSlide].desc}
                                </motion.p>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Carousel Indicators */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-10">
                    {heroImages.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentSlide(idx)}
                            className={`h-1.5 rounded-full transition-all duration-500 ${currentSlide === idx ? 'w-12 bg-white' : 'w-4 bg-white/40 hover:bg-white/60'
                                }`}
                        />
                    ))}
                </div>
            </section>

            {/* What We Offer */}
            <section className="py-16 md:py-24 bg-white overflow-hidden">
                <div className={containerClasses}>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <span className="text-accent font-bold uppercase tracking-widest text-sm">Our Expertise</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">What We Offer?</h2>
                            <div className="w-20 h-1.5 bg-accent rounded-full" />
                            <p className="text-secondary leading-relaxed text-base md:text-lg">
                                Backed by our highly skilled and talented team of experts, we are involved in processing,
                                exporting and supplying broad assortment of Indian Spices. Our products are processed at our
                                well-equipped manufacturing unit using best quality seeds and basic ingredients as per the
                                defined quality standards.
                            </p>
                            <p className="text-secondary leading-relaxed text-base md:text-lg">
                                Furthermore, the offered range is methodically inspected by our quality controllers on various
                                parameters to ensure quality. Our products are in great demand in the national as well as
                                international markets, due to their freshness and purity. Apart from this, our clients can
                                avail these products from us at the most economical prices.
                            </p>
                            <Button to="/services" icon>Learn More</Button>
                        </div>
                        <div className="relative group">
                            <div className="absolute -top-8 -right-8 w-full h-full bg-blue-50 rounded-[2rem] -z-10 transition-transform duration-500 group-hover:rotate-2" />
                            <img
                                src={s1}
                                alt="Quality Spices"
                                className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
                            />
                            <div className="absolute bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 max-w-xs hidden md:block">
                                <div className="flex items-center gap-4">
                                    <div className="bg-green-50 p-3 rounded-full text-accent">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-bold text-lg text-primary mb-1">100% Organic</p>
                                        <p className="text-xs text-secondary">Export Quality Certified</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services / Features Grid */}
            <section className="py-16 md:py-24 bg-gray-50">
                <div className={containerClasses}>
                    <div className="text-center mb-20">
                        <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Our Scope</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Core Areas</h2>
                        <p className="text-secondary max-w-2xl mx-auto text-lg md:text-xl">
                            Delivering excellence across agriculture, manufacturing, and consultation with sustainable practices.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        {/* Card 1: Products */}
                        <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group">
                            <div className="h-64 overflow-hidden relative">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10" />
                                <img
                                    src={image1}
                                    alt="Wheat Germ Oils"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-bold text-primary">
                                    Products
                                </div>
                            </div>
                            <div className="p-10">
                                <h3 className="text-2xl font-bold text-primary mb-3">Wheat germ Oils & Removal</h3>
                                <p className="text-secondary leading-relaxed mb-8">
                                    Our products are processed at our well-equipped manufacturing unit using best quality seeds
                                    and basic ingredients as per the defined quality standards.
                                </p>
                                <Link to="/products" className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors group/link">
                                    View Products
                                    <span className="bg-gray-100 p-2 rounded-full group-hover/link:bg-accent group-hover/link:text-white transition-all">
                                        <ArrowRight size={16} />
                                    </span>
                                </Link>
                            </div>
                        </div>

                        {/* Card 2: Farming */}
                        <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group">
                            <div className="h-64 overflow-hidden relative">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10" />
                                <img
                                    src={s2}
                                    alt="Farming"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-bold text-primary">
                                    Farming
                                </div>
                            </div>
                            <div className="p-10">
                                <h3 className="text-2xl font-bold text-primary mb-3">Wheat germ & Removal</h3>
                                <p className="text-secondary leading-relaxed mb-8">
                                    Farming is growing crops or keeping animals by people for food and raw materials.
                                    We implement sustainable practices for better yield.
                                </p>
                                <Link to="/services" className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors group/link">
                                    Read More
                                    <span className="bg-gray-100 p-2 rounded-full group-hover/link:bg-accent group-hover/link:text-white transition-all">
                                        <ArrowRight size={16} />
                                    </span>
                                </Link>
                            </div>
                        </div>

                        {/* Card 3: Consultation */}
                        <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group">
                            <div className="h-64 overflow-hidden relative">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10" />
                                <img
                                    src={hero2}
                                    alt="Consultation"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-bold text-primary">
                                    Consultation
                                </div>
                            </div>
                            <div className="p-10">
                                <h3 className="text-2xl font-bold text-primary mb-3">Essential Oils & Removal</h3>
                                <p className="text-secondary leading-relaxed mb-8">
                                    Our offered services help the agriculturists in improving crop production at minimum investment.
                                    Expert guidance for maximum output.
                                </p>
                                <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors group/link">
                                    Get Consultation
                                    <span className="bg-gray-100 p-2 rounded-full group-hover/link:bg-accent group-hover/link:text-white transition-all">
                                        <ArrowRight size={16} />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
