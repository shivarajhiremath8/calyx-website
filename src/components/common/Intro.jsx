import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const introSlides = [
    {
        title: "Welcome to Calyx",
        desc: "Premium Quality Agricultural Commodities"
    },
    {
        title: "Global Standards",
        desc: "Exporting Excellence Worldwide"
    },
    {
        title: "Sustainable Future",
        desc: "Commitment to Ethical Farming"
    }
];

const Intro = ({ onComplete }) => {
    useEffect(() => {
        // Show for exactly 3 seconds then complete
        const timer = setTimeout(() => {
            onComplete();
        }, 3000); // 3 seconds
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black" // Solid background to prevent "dark filter" look on site
            initial={{ y: 0 }}
            exit={{ y: '-100%', transition: { duration: 2.5, ease: [0.22, 1, 0.36, 1] } }} // Ultra-smooth custom bezier (easeOutQuint-ish)
        >
            <div className="relative z-10 text-center px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="space-y-6"
                >
                    <h1 className="text-4xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-blue-200 tracking-tight animate-gradient-x pb-4"> {/* Added pb-4 for descenders */}
                        Welcome to Calyx
                    </h1>
                    <p className="text-lg md:text-2xl text-blue-100/90 font-light tracking-[0.2em] uppercase">
                        Premium Quality Agricultural Commodities
                    </p>
                </motion.div>
            </div>

            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/30 rounded-full blur-[100px] animate-pulse-slow" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/20 rounded-full blur-[100px] animate-pulse-slow" />
            </div>
        </motion.div>
    );
};

export default Intro;
