import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, Award } from 'lucide-react';

const About = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    };

    return (
        <div className="flex flex-col">
            {/* Header */}
            <section className="bg-primary text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        Pioneering the Future
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-300 max-w-2xl mx-auto"
                    >
                        At Calyx Commodities, we combine scientific rigor with market expertise to deliver sustainable solutions for a complex world.
                    </motion.p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12">
                        <motion.div
                            variants={fadeInUp}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-slate-50 border border-slate-100"
                        >
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                                <Target className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
                            <p className="text-secondary leading-relaxed">
                                To revolutionize the commodities market by integrating advanced research,
                                sustainable practices, and transparent supply chains, ensuring value
                                creation for all stakeholders from producers to end-consumers.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-slate-50 border border-slate-100"
                        >
                            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6">
                                <Lightbulb className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-bold text-primary mb-4">Our Vision</h2>
                            <p className="text-secondary leading-relaxed">
                                To be the global benchmark for innovation in commodities, where
                                technology and nature coexist to create a resilient and efficient
                                global ecosystem.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-primary mb-4">Core Values</h2>
                        <p className="text-secondary">The principles that guide every decision we make.</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { icon: Users, title: "Collaboration", desc: "Building strong partnerships across the supply chain." },
                            { icon: Award, title: "Excellence", desc: "Pursuing the highest standards in quality and service." },
                            { icon: Lightbulb, title: "Innovation", desc: "Constantly seeking better, smarter ways to work." },
                            { icon: Target, title: "Integrity", desc: "Honesty and transparency in all our dealings." },
                        ].map((value, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
                            >
                                <div className="w-12 h-12 mx-auto bg-primary/5 rounded-full flex items-center justify-center text-primary mb-4">
                                    <value.icon className="w-5 h-5" />
                                </div>
                                <h3 className="text-lg font-bold text-primary mb-2">{value.title}</h3>
                                <p className="text-sm text-secondary">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
