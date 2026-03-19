import { motion } from 'framer-motion';

const ProductsHero = () => {
    return (
        <section className="min-h-[100dvh] w-full relative flex items-center justify-center overflow-hidden snap-start snap-always shrink-0 bg-primary">
            {/* Clean subtle background */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=2072&auto=format&fit=crop" 
                    alt="Our Products" 
                    className="w-full h-full object-cover opacity-10"
                />
            </div>

            <div className="container mx-auto px-6 md:px-16 lg:px-24 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-3xl"
                >
                    <span className="text-accent font-bold uppercase tracking-[0.3em] text-xs mb-6 block">Our Products</span>
                    <h1 className="text-fluid-h1 font-bold text-white leading-none mb-8">
                        The Core of Global Trade
                    </h1>
                    <p className="text-gray-400 max-w-xl text-lg md:text-xl leading-relaxed">
                        Delivering the highest quality agricultural commodities through scientific precision and sustainable practices.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default ProductsHero;
