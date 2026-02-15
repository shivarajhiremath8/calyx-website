import { motion } from 'framer-motion';
import { ArrowRight, Microscope, Leaf, Globe, TrendingUp } from 'lucide-react';
import Button from '../components/ui/Button';

const Home = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center bg-background overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-blue-50/50 to-transparent" />
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-slate-50 to-transparent" />
                </div>

                <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={{
                            animate: { transition: { staggerChildren: 0.1 } }
                        }}
                        className="space-y-8"
                    >
                        <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm text-sm font-medium text-accent">
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                            Innovation in Commodities
                        </motion.div>

                        <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold text-primary leading-tight">
                            Bridging Science <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-600">
                                & Sustainability
                            </span>
                        </motion.h1>

                        <motion.p variants={fadeIn} className="text-lg text-secondary md:w-3/4 leading-relaxed">
                            Calyx Commodities is a premier research and development organization
                            dedicated to transforming the future of sustainable supply chains
                            through scientific innovation and rigorous market analysis.
                        </motion.p>

                        <motion.div variants={fadeIn} className="flex gap-4">
                            <Button to="/products" icon>Explore Solutions</Button>
                            <Button to="/about" variant="secondary">Our Mission</Button>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative hidden md:block"
                    >
                        {/* Abstract Scientific Graphic Placeholder */}
                        <div className="relative z-10 bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4">
                                    <div className="h-40 bg-slate-100 rounded-xl w-full animate-pulse" />
                                    <div className="h-24 bg-blue-50 rounded-xl w-full" />
                                </div>
                                <div className="space-y-4 pt-8">
                                    <div className="h-24 bg-blue-50 rounded-xl w-full" />
                                    <div className="h-40 bg-slate-100 rounded-xl w-full" />
                                </div>
                            </div>

                            {/* Float Card */}
                            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex items-center gap-4">
                                <div className="p-3 bg-green-50 rounded-lg text-green-600">
                                    <Leaf className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500">Sustainability Score</div>
                                    <div className="text-xl font-bold text-primary">98.5%</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Overview */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Calyx?</h2>
                        <p className="text-secondary max-w-2xl mx-auto">
                            We leverage cutting-edge research to optimize commodity lifecycles, ensuring efficiency, quality, and environmental stewardship.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Microscope,
                                title: "Research Driven",
                                desc: "Our methodologies are rooted in rigorous scientific research and data analysis."
                            },
                            {
                                icon: Globe,
                                title: "Global Network",
                                desc: "Connecting markets across continents with seamless and efficient logistics."
                            },
                            {
                                icon: TrendingUp,
                                title: "Market Intelligence",
                                desc: "Predictive analytics and insights to stay ahead in a volatile global market."
                            }
                        ].map((feature, idx) => (
                            <div key={idx} className="group p-8 rounded-2xl bg-slate-50 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-xl transition-all duration-300">
                                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                                    <feature.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                                <p className="text-secondary leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats/Impact Section */}
            <section className="py-24 bg-primary text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:20px_20px]" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
                        {[
                            { number: "10+", label: "Years of R&D" },
                            { number: "50+", label: "Global Partners" },
                            { number: "100%", label: "Sustainable Sourcing" },
                            { number: "24/7", label: "Support & Analysis" },
                        ].map((stat, idx) => (
                            <div key={idx} className="pt-8 md:pt-0 px-4">
                                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.number}</div>
                                <div className="text-gray-400 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="bg-white rounded-3xl p-12 md:p-20 shadow-xl border border-gray-100 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                            <h2 className="text-3xl md:text-5xl font-bold text-primary">Ready to Innovate?</h2>
                            <p className="text-lg text-secondary">
                                Join us in shaping the future of commodities. Let's collaborate to build sustainable and efficient solutions for your business.
                            </p>
                            <div className="flex justify-center gap-4 pt-4">
                                <Button to="/contact" icon>Start a Conversation</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
