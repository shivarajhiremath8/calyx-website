import Button from '../../ui/Button';
import s1 from '../../../assets/about2.png';

const WhatWeOffer = () => {
    return (
        <section className="min-h-[100dvh] w-full py-10 md:py-16 bg-white overflow-hidden flex items-center justify-center snap-start snap-always shrink-0">
            <div className="container mx-auto px-6 md:px-16 lg:px-24">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <span className="text-accent font-bold uppercase tracking-widest text-sm">Our Expertise</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">What We Offer?</h2>
                        <div className="w-20 h-1.5 bg-accent rounded-full" />
                        <p className="text-secondary leading-relaxed text-base md:text-lg">
                            Backed by our highly skilled and talented team of experts, we are involved in processing,
                            exporting and supplying broad assortment of Indian Spices. Our products are processed at our
                            well-equipped manufacturing unit using best quality seeds and basic ingredients as per the
                            defined quality standards.
                        </p>
                        <p className="text-secondary leading-relaxed text-base md:text-lg">
                            Furthermore, the offered range is methodically inspected by our quality controllers on various
                            parameters to ensure quality. Our products are in great demand in the national as well as
                            international markets, due to their freshness and purity. Apart from this, our clients can
                            avail these products from us at the most economical prices.
                        </p>
                        <Button to="/services" icon>Learn More</Button>
                    </div>
                    <div className="relative group">
                        <div className="absolute -top-8 -right-8 w-full h-full bg-blue-50 rounded-[2rem] -z-10 transition-transform duration-500 group-hover:rotate-2" />
                        <img
                            src={s1}
                            alt="Quality Spices"
                            className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
                        />
                        <div className="absolute bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 max-w-xs hidden md:block">
                            <div className="flex items-center gap-4">
                                <div className="bg-green-50 p-3 rounded-full text-accent">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-bold text-lg text-primary mb-1">100% Organic</p>
                                    <p className="text-xs text-secondary">Export Quality Certified</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeOffer;
