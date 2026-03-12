import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import hero1 from '../../../assets/hero1.png';
import hero2 from '../../../assets/hero2.png';
import hero3 from '../../../assets/hero3.png';

const heroImages = [
    { src: hero1, title: "Innovation in Spices", desc: "Processing, exporting and supplying broad assortment of Indian Spices." },
    { src: hero2, title: "Sustainable Quality", desc: "Methodically inspected by our quality controllers on various parameters." },
    { src: hero3, title: "Global Reach", desc: "Our products are in great demand in national as well as international markets." },
    { src: hero1, title: "Economical Prices", desc: "Clients can avail these products from us at the most economical prices." },
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroImages.length);
        }, 7000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-[100dvh] w-full bg-black overflow-hidden flex items-center justify-center snap-start snap-always shrink-0">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${heroImages[currentSlide].src})` }}
                    >
                        <div className="absolute inset-0 bg-black/30" />
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center text-center text-white px-6">
                        <div className="max-w-5xl space-y-8">
                            <motion.h1
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="text-fluid-h1 font-bold leading-tight tracking-tight text-white"
                            >
                                {heroImages[currentSlide].title}
                            </motion.h1>

                            <motion.p
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                                className="text-fluid-p text-gray-200 max-w-4xl mx-auto font-light leading-relaxed mt-4"
                            >
                                {heroImages[currentSlide].desc}
                            </motion.p>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

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
    );
};

export default Hero;
