import { motion } from 'framer-motion';

const products = [
    { name: "Premium Wheat", image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=500&auto=format&fit=crop" },
    { name: "Soya Bean", image: "https://images.unsplash.com/photo-1599599810694-b5b37304c041?q=80&w=500&auto=format&fit=crop" },
    { name: "Yellow Corn", image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?q=80&w=500&auto=format&fit=crop" },
    { name: "Sorghum", image: "https://images.unsplash.com/photo-1615485247092-205166946006?q=80&w=500&auto=format&fit=crop" },
    { name: "Black Pepper", image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=80&w=500&auto=format&fit=crop" },
    { name: "Dry Ginger", image: "https://images.unsplash.com/photo-1588636592850-2475e54911d3?q=80&w=500&auto=format&fit=crop" },
    { name: "Turmeric", image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?q=80&w=500&auto=format&fit=crop" },
    { name: "Cardamom", image: "https://images.unsplash.com/photo-1606755962773-d3216ca4468f?q=80&w=500&auto=format&fit=crop" },
    { name: "Barley", image: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?q=80&w=500&auto=format&fit=crop" },
    { name: "Millet", image: "https://images.unsplash.com/photo-1593843513681-4202a9eb736b?q=80&w=500&auto=format&fit=crop" },
    { name: "Sesame", image: "https://images.unsplash.com/photo-1593531338006-03706059e5ee?q=80&w=500&auto=format&fit=crop" },
    { name: "Chickpeas", image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e2?q=80&w=500&auto=format&fit=crop" }
];

const ProductShowcase = () => {
    return (
        <section className="min-h-[100dvh] w-full py-20 bg-slate-50 flex flex-col items-center justify-center snap-start snap-always shrink-0 overflow-hidden border-t border-slate-200">
            <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
                <div className="text-center mb-16">
                    <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Product Showcase</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Diverse Portfolio</h2>
                    <p className="text-secondary max-w-2xl mx-auto text-lg opacity-80">
                        Explore our extensive range of high-quality agricultural commodities <br className="hidden md:block" /> sourced with precision for global excellence.
                    </p>
                </div>

                {/* High Density Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
                    {products.map((product, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 group hover:shadow-lg transition-all duration-300"
                        >
                            <div className="aspect-square w-full overflow-hidden bg-slate-100">
                                <img 
                                    src={product.image} 
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-3 md:p-4 text-center">
                                <h4 className="text-xs md:text-sm font-bold text-primary group-hover:text-accent transition-colors truncate">
                                    {product.name}
                                </h4>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;
