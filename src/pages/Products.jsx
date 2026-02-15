import { motion } from 'framer-motion';
import { Package, Droplets, Factory, FlaskRound } from 'lucide-react';
import Button from '../components/ui/Button';

const Products = () => {
    const categories = [
        {
            id: 1,
            name: "Sustainable Grains",
            icon: Package,
            desc: "High-yield, drought-resistant varieties engineered for changing climates.",
            color: "bg-amber-100 text-amber-600",
            items: ["Drought-Resistant Wheat", "High-Protein Soy", "Ancient Grains"]
        },
        {
            id: 2,
            name: "Bio-Fuels",
            icon: Droplets,
            desc: "Next-generation energy solutions derived from renewable organic matter.",
            color: "bg-green-100 text-green-600",
            items: ["Ethanol Blends", "Biodiesel", "Algal Fuel"]
        },
        {
            id: 3,
            name: "Industrial Raw Materials",
            icon: Factory,
            desc: "Essential inputs for manufacturing, sourced responsibly and processed efficiently.",
            color: "bg-slate-100 text-slate-600",
            items: ["Natural Fibers", "Bio-Polymers", "Industrial Oils"]
        },
        {
            id: 4,
            name: "Specialty Chemicals",
            icon: FlaskRound,
            desc: "High-purity compounds for pharmaceutical and specialized industrial applications.",
            color: "bg-blue-100 text-blue-600",
            items: ["Pharmaceutical Intermediates", "Agro-Chemicals", "Food Additives"]
        }
    ];

    return (
        <div className="flex flex-col">
            {/* Header */}
            <section className="bg-slate-50 py-20">
                <div className="container mx-auto px-6 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-primary mb-6"
                    >
                        Our Products
                    </motion.h1>
                    <p className="text-xl text-secondary max-w-2xl mx-auto">
                        A diverse portfolio of high-quality commodities backed by science and sustainability.
                    </p>
                </div>
            </section>

            {/* Product Categories */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12">
                        {categories.map((category) => (
                            <motion.div
                                key={category.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="group relative overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <div className={`absolute top-0 right-0 w-64 h-64 ${category.color} rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2 group-hover:opacity-30 transition-opacity`} />

                                <div className="relative p-10">
                                    <div className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center mb-8`}>
                                        <category.icon className="w-8 h-8" />
                                    </div>

                                    <h2 className="text-2xl font-bold text-primary mb-4">{category.name}</h2>
                                    <p className="text-secondary mb-8 leading-relaxed">
                                        {category.desc}
                                    </p>

                                    <div className="space-y-3">
                                        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Key Offerings</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {category.items.map((item, idx) => (
                                                <span key={idx} className="px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-sm font-medium border border-gray-100">
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-8 pt-8 border-t border-gray-100 flex items-center justify-between">
                                        <span className="text-sm text-gray-400">View detailed specs</span>
                                        <Button to="/contact" variant="secondary" className="!py-2 !px-4 text-sm">Inquire Now</Button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Products;
