import { motion } from 'framer-motion';
import { Truck, BarChart3, FlaskConical, ShieldCheck, Zap, Globe } from 'lucide-react';
import Button from '../components/ui/Button';

const Services = () => {
    const services = [
        {
            icon: FlaskConical,
            title: "R&D Analysis",
            description: "Advanced laboratory testing and quality analysis to ensure all commodities meet stringent international standards before they enter the market.",
            features: ["Chemical Composition Analysis", "Quality Grading", "Contaminant Screening"]
        },
        {
            icon: Truck,
            title: "Supply Chain Optimization",
            description: "End-to-end logistics management optimized for speed, cost-efficiency, and environmental impact.",
            features: ["Route Optimization", "Inventory Management", "Cold Chain Solutions"]
        },
        {
            icon: BarChart3,
            title: "Market Intelligence",
            description: "Data-driven insights to help clients make informed purchasing and selling decisions in volatile markets.",
            features: ["Price Forecasting", "Trend Analysis", "Risk Assessment"]
        },
        {
            icon: ShieldCheck,
            title: "Quality Assurance",
            description: "Comprehensive QA protocols implemented at every stage of the lifecycle, from sourcing to delivery.",
            features: ["ISO Certification Support", "Supplier Audits", "Compliance Tracking"]
        },
        {
            icon: Zap,
            title: "Sustainable Processing",
            description: "Innovative processing techniques that reduce waste and energy consumption while maximizing yield.",
            features: ["Green Tech Integration", "Waste-to-Energy", "Water Conservation"]
        },
        {
            icon: Globe,
            title: "Global Sourcing",
            description: "Access to a vast network of vetted producers and suppliers across key global markets.",
            features: ["Ethical Sourcing", "Direct-from-Farm", "Multi-origin Procurement"]
        }
    ];

    return (
        <div className="flex flex-col">
            {/* Header */}
            <section className="bg-slate-900 text-white py-20">
                <div className="container mx-auto px-6 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Our Services
                    </motion.h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Comprehensive solutions tailored to modernize and optimize your commodity operations.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100"
                            >
                                <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <service.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                                <p className="text-secondary mb-6 text-sm leading-relaxed">{service.description}</p>

                                <ul className="space-y-2">
                                    {service.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-center gap-2 text-sm text-gray-500">
                                            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-primary mb-6">Need a Custom Solution?</h2>
                    <p className="text-secondary max-w-2xl mx-auto mb-8">
                        Our team of experts can design a tailored strategy to meet your specific operational challenges.
                    </p>
                    <Button to="/contact">Contact Our Team</Button>
                </div>
            </section>
        </div>
    );
};

export default Services;
