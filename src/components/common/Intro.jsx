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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0f172a]"
            initial={{ y: 0 }}
            exit={{ y: '-100%', transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] } }}
        >
            <div className="relative z-10 text-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }} // Expop scale in
                    className="space-y-4 md:space-y-6 flex flex-col items-center justify-center"
                >
                    <h1 className="text-fluid-h1 font-bold text-white tracking-tight pb-2">
                        Welcome to Calyx
                    </h1>
                    <p className="text-fluid-p text-gray-300 font-light tracking-[0.15em] uppercase">
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
