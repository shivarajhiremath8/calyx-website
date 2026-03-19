import { motion } from 'framer-motion';
import { Users2, Award, Lightbulb, ShieldCheck } from 'lucide-react';

const coreValues = [
    { 
        icon: Users2, 
        title: "Collaboration", 
        desc: "Building strong partnerships across the global supply chain to ensure mutual growth and success."
    },
    { 
        icon: Award, 
        title: "Excellence", 
        desc: "Pursuing the highest standards in quality and service, delivering exceptional value in every grain."
    },
    { 
        icon: Lightbulb, 
        title: "Innovation", 
        desc: "Seeking smarter ways to work, integrating cutting-edge technology with traditional expertise."
    },
    { 
        icon: ShieldCheck, 
        title: "Integrity", 
        desc: "An unwavering commitment to honesty and transparency in all our dealings across world markets."
    },
];

const CoreValues = () => {
    return (
        <section className="min-h-[100dvh] w-full py-16 md:py-20 bg-slate-50 flex flex-col items-center justify-center snap-start snap-always shrink-0 border-t border-slate-100">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <div className="text-center mb-12 md:mb-16">
                    <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Our Principles</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">The Values that <br />Define Our Excellence</h2>
                    <p className="text-secondary max-w-2xl mx-auto text-lg opacity-80">
                        The fundamental principles that guide every decision we make and every partnership we build.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {coreValues.map((value, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-2xl hover:bg-primary group transition-all duration-300 flex flex-col items-start border border-slate-200/60 shadow-sm hover:shadow-xl"
                        >
                            <div className="w-12 h-12 bg-slate-50 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                                <value.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-white transition-colors">{value.title}</h3>
                            <p className="text-secondary group-hover:text-blue-100 transition-colors leading-relaxed text-sm md:text-base">
                                {value.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoreValues;
