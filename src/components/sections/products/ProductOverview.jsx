import { motion } from 'framer-motion';
import { Shield, Globe, Award, Sparkles } from 'lucide-react';

const stats = [
    { icon: Shield, label: "Certified Quality", value: "100%" },
    { icon: Globe, label: "Strategic Trading", value: "Global" },
    { icon: Award, label: "Years of Excellence", value: "15+" },
    { icon: Sparkles, label: "Sustainable Sourcing", value: "Premium" }
];

const ProductOverview = () => {
    return (
        <section className="min-h-[100dvh] w-full py-16 md:py-24 bg-white flex flex-col items-center justify-center snap-start snap-always shrink-0 overflow-hidden border-t border-slate-100">
            <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto mb-16 md:mb-20"
                >
                    <span className="text-accent font-bold uppercase tracking-[0.3em] text-xs mb-6 block">Our Production Overview</span>
                    <h2 className="text-fluid-h2 font-bold text-primary mb-8 leading-tight">
                        Integrated Supply Chain <br /> From Farm to Global Markets
                    </h2>
                    <p className="text-secondary text-lg md:text-xl opacity-80 leading-relaxed max-w-2xl mx-auto">
                        We maintain a rigorous end-to-end production process, ensuring that every commodity 
                        meets international quality standards while supporting local farming communities.
                    </p>
                </motion.div>

                {/* Stats/Overview Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 max-w-6xl mx-auto">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center"
                        >
                            <div className="w-16 h-16 bg-slate-50 text-accent rounded-full flex items-center justify-center mb-6 shadow-sm border border-slate-100">
                                <stat.icon className="w-8 h-8" />
                            </div>
                            <h4 className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</h4>
                            <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Subtle spacing */}
                <div className="mt-12 md:mt-16" />
            </div>
        </section>
    );
};

export default ProductOverview;
