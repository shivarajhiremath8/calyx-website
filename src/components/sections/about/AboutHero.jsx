import { motion } from 'framer-motion';

const AboutHero = () => {
    return (
        <section className="min-h-[100dvh] w-full relative flex items-center justify-center overflow-hidden snap-start snap-always shrink-0 bg-[#0f172a]">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
                    alt="Pioneering the Future" 
                    className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f172a]/50 to-[#0f172a]" />
            </div>

            <div className="container mx-auto px-6 md:px-16 lg:px-24 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-6"
                >
                    <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">About Us</span>
                    <h1 className="text-fluid-h1 font-bold text-white leading-tight mb-6">
                        Pioneering the Future
                    </h1>
                    <div className="w-24 h-1.5 bg-accent mx-auto rounded-full mb-8" />
                    <p className="text-gray-300 max-w-2xl mx-auto text-fluid-p leading-relaxed">
                        At Calyx Commodities, we combine scientific rigor with market expertise to deliver sustainable solutions for a complex world.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutHero;
