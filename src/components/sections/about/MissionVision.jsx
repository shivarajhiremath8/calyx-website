import { motion } from 'framer-motion';
import { Target, Lightbulb, Zap } from 'lucide-react';

const MissionVision = () => {
    return (
        <section className="min-h-[100dvh] w-full py-16 md:py-20 bg-white flex items-center justify-center snap-start snap-always shrink-0 overflow-hidden border-t border-slate-100">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <div className="grid md:grid-cols-3 gap-8 lg:gap-10 items-stretch">
                    {/* Mission Card */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="p-10 rounded-[2.5rem] bg-primary text-white shadow-xl flex flex-col h-full relative overflow-hidden transition-all duration-500 hover:shadow-2xl group"
                    >
                        <div className="absolute top-0 right-0 w-48 h-48 bg-accent/10 rounded-full -mr-24 -mt-24 transition-transform duration-700 group-hover:scale-110" />
                        
                        <div className="w-14 h-14 bg-accent text-white rounded-2xl flex items-center justify-center mb-8 shadow-sm relative z-10">
                            <Target className="w-7 h-7" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-5 relative z-10">Our Mission</h2>
                        <div className="w-12 h-1 bg-accent rounded-full mb-6 relative z-10" />
                        <p className="text-slate-200 leading-relaxed text-base relative z-10">
                            To revolutionize the commodities market by integrating advanced research,
                            sustainable practices, and transparent supply chains, ensuring value
                            creation for all stakeholders from producers to end-consumers.
                        </p>
                    </motion.div>

                    {/* Vision Card */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="p-10 rounded-[2.5rem] bg-primary text-white shadow-xl flex flex-col h-full relative overflow-hidden transition-all duration-500 hover:shadow-2xl group"
                    >
                        <div className="absolute top-0 right-0 w-48 h-48 bg-accent/20 rounded-full -mr-24 -mt-24 transition-transform duration-700 group-hover:scale-110" />
                        
                        <div className="w-14 h-14 bg-accent text-white rounded-2xl flex items-center justify-center mb-8 shadow-sm relative z-10">
                            <Lightbulb className="w-7 h-7" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-5 relative z-10">Our Vision</h2>
                        <div className="w-12 h-1 bg-accent rounded-full mb-6 relative z-10" />
                        <p className="text-slate-200 leading-relaxed text-base relative z-10">
                            To be the global benchmark for innovation in commodities, where
                            technology and nature coexist to create a resilient and efficient
                            global ecosystem.
                        </p>
                    </motion.div>

                    {/* Approach Card */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="p-10 rounded-[2.5rem] bg-primary text-white shadow-xl flex flex-col h-full relative overflow-hidden transition-all duration-500 hover:shadow-2xl group"
                    >
                        <div className="absolute top-0 right-0 w-48 h-48 bg-accent/10 rounded-full -mr-24 -mt-24 transition-transform duration-700 group-hover:scale-110" />
                        
                        <div className="w-14 h-14 bg-accent text-white rounded-2xl flex items-center justify-center mb-8 shadow-sm relative z-10">
                            <Zap className="w-7 h-7" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-5 relative z-10">Our Approach</h2>
                        <div className="w-12 h-1 bg-accent rounded-full mb-6 relative z-10" />
                        <p className="text-slate-200 leading-relaxed text-base relative z-10">
                            We bridge the gap between rural production and global demand through 
                            integrated logistics, quality assurance, and community-centric 
                            engagement at every touchpoint.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default MissionVision;
