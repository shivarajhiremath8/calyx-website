import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import image1 from '../../../assets/image1.png';
import s2 from '../../../assets/about1.png';
import hero2 from '../../../assets/hero2.png';

const CoreAreas = () => {
    return (
        <section className="min-h-[100dvh] w-full py-10 md:py-16 bg-gray-50 flex items-center justify-center snap-start snap-always shrink-0">
            <div className="container mx-auto px-6 md:px-16 lg:px-24">
                <div className="text-center mb-10 md:mb-14">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 block">Our Core Areas</h2>
                    <p className="text-secondary max-w-2xl mx-auto text-base md:text-lg">
                        Delivering excellence across agriculture, manufacturing, and consultation with sustainable practices.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                    <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group">
                        <div className="h-48 md:h-56 overflow-hidden relative">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10" />
                            <img
                                src={image1}
                                alt="Wheat Germ Oils"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-bold text-primary">
                                Products
                            </div>
                        </div>
                        <div className="p-6 md:p-8">
                            <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">Wheat germ Oils & Removal</h3>
                            <p className="text-secondary leading-relaxed mb-6 text-sm md:text-base">
                                Our products are processed at our well-equipped manufacturing unit using best quality seeds
                                and basic ingredients as per the defined quality standards.
                            </p>
                            <Link to="/products" className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors group/link">
                                View Products
                                <span className="bg-gray-100 p-2 rounded-full group-hover/link:bg-accent group-hover/link:text-white transition-all">
                                    <ArrowRight size={16} />
                                </span>
                            </Link>
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group">
                        <div className="h-48 md:h-56 overflow-hidden relative">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10" />
                            <img
                                src={s2}
                                alt="Farming"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-bold text-primary">
                                Farming
                            </div>
                        </div>
                        <div className="p-6 md:p-8">
                            <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">Wheat germ & Removal</h3>
                            <p className="text-secondary leading-relaxed mb-6 text-sm md:text-base">
                                Farming is growing crops or keeping animals by people for food and raw materials.
                                We implement sustainable practices for better yield.
                            </p>
                            <Link to="/services" className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors group/link">
                                Read More
                                <span className="bg-gray-100 p-2 rounded-full group-hover/link:bg-accent group-hover/link:text-white transition-all">
                                    <ArrowRight size={16} />
                                </span>
                            </Link>
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group">
                        <div className="h-48 md:h-56 overflow-hidden relative">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10" />
                            <img
                                src={hero2}
                                alt="Consultation"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-bold text-primary">
                                Consultation
                            </div>
                        </div>
                        <div className="p-6 md:p-8">
                            <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">Essential Oils & Removal</h3>
                            <p className="text-secondary leading-relaxed mb-6 text-sm md:text-base">
                                Our offered services help the agriculturists in improving crop production at minimum investment.
                                Expert guidance for maximum output.
                            </p>
                            <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors group/link">
                                Get Consultation
                                <span className="bg-gray-100 p-2 rounded-full group-hover/link:bg-accent group-hover/link:text-white transition-all">
                                    <ArrowRight size={16} />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoreAreas;
