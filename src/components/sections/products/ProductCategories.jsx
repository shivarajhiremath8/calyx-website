import { motion } from 'framer-motion';
import { Package, Droplets, Leaf, FlaskRound, ArrowRight } from 'lucide-react';

const categories = [
    {
        icon: Package,
        title: "Sustainable Grains",
        desc: "High-yield, drought-resistant varieties developed for global food security and superior nutritional value.",
        items: ["Premium Wheat", "High-Protein Soy", "Ancient Grains"],
    },
    {
        icon: Leaf,
        title: "Premium Spices",
        desc: "Pure, high-grade spices sourced directly from sustainable plantations for authentic flavor profiles.",
        items: ["Black Pepper", "Dry Ginger", "Turmeric"],
    },
    {
        icon: Droplets,
        title: "Bio-Energy Solutions",
        desc: "Modern energy sources derived from renewable organic matter, powering industrial sustainability.",
        items: ["Ethanol Blends", "Bio-oils", "Organic Biomass"],
    },
    {
        icon: FlaskRound,
        title: "Agricultural Inputs",
        desc: "Scientific fertilizers and soil conditioners designed to maximize crop yield and preserve land health.",
        items: ["Micro-nutrients", "Soil Conditioners", "Bio-stimulants"],
    }
];

const ProductCategories = () => {
    return (
        <section className="min-h-[100dvh] w-full py-16 md:py-24 bg-slate-50 flex items-center justify-center snap-start snap-always shrink-0 border-t border-slate-100">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Left: Text Content */}
                    <div className="max-w-xl">
                        <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Our Portfolio</span>
                        <h2 className="text-fluid-h2 font-bold text-primary mb-8 leading-tight">
                            Providing the World <br /> with Essential Commodities
                        </h2>
                        <p className="text-secondary text-lg opacity-80 leading-relaxed mb-10">
                            We bridge the gap between production and the global market, ensuring a 
                            seamless supply of high-quality agricultural products to meet the demands 
                            of a growing population.
                        </p>
                        <div className="flex flex-col gap-6">
                            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4 group hover:border-accent transition-colors">
                                <div className="w-12 h-12 bg-slate-50 text-accent rounded-xl flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all">
                                    <ArrowRight className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary">Need a Custom Quote?</h4>
                                    <p className="text-sm text-secondary">Contact our sales team for bulk inquiries.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Clean Grid */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {categories.map((cat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="bg-white p-8 rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center mb-6">
                                    <cat.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-3">{cat.title}</h3>
                                <p className="text-secondary text-sm leading-relaxed mb-6 opacity-80">
                                    {cat.desc}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {cat.items.map((item, i) => (
                                        <span key={i} className="text-[10px] uppercase tracking-wider font-bold text-accent bg-accent/5 px-2 py-1 rounded">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductCategories;
