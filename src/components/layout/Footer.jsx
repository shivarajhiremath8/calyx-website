import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import logo from '../../assets/logo.png';

const Footer = () => {

    const socialLinks = [
        { name: 'Facebook', url: "#", icon: Facebook },
        { name: 'Linkedin', url: "#", icon: Linkedin },
        { name: 'Twitter', url: "#", icon: Twitter },
        { name: 'Instagram', url: "#", icon: Instagram }
    ];

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Products', href: '/products' },
        { name: 'Services', href: '/services' },
        { name: 'About Us', href: '/about' },
        { name: 'Contact', href: '/contact' }
    ];

    return (
        <footer className="relative w-full bg-white text-primary pt-24 pb-10 overflow-hidden pointer-events-auto border-t border-gray-100">

            <div className="container mx-auto px-6 md:px-12 relative z-10">

                {/* --- TOP SECTION: Brand, Links & Contact --- */}
                <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">

                    {/* Left: Brand & Description */}
                    <div className="flex flex-col space-y-6 max-w-sm">
                        <div className="flex items-center gap-2">
                            <img src={logo} alt="Calyx Logo" className="h-12 w-auto object-contain" />
                        </div>
                        <p className="text-secondary text-base leading-relaxed">
                            Delivering excellence in every grain. Your trusted partner for premium quality spices and agricultural commodities.
                        </p>
                    </div>

                    {/* Middle: Navigation Columns */}
                    <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row md:gap-16">

                        {/* Explore Column */}
                        <div className="flex flex-col space-y-4">
                            <h4 className="text-sm font-bold text-primary uppercase tracking-widest mb-6">Explore</h4>
                            {navLinks.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-sm md:text-base text-secondary hover:text-accent transition-colors flex items-center gap-2 group"
                                >
                                    {item.name}
                                    <ArrowUpRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-accent" />
                                </a>
                            ))}
                        </div>

                        {/* Legal Column */}
                        <div className="flex flex-col space-y-4">
                            <h4 className="text-sm font-bold text-primary uppercase tracking-widest mb-6">Legal</h4>
                            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                                <a key={item} href="#" className="text-sm md:text-base text-secondary hover:text-accent transition-colors">
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right: Contact Information */}
                    <div className="max-w-md w-full md:text-right flex flex-col md:items-end">
                        <h4 className="text-sm font-bold text-primary uppercase tracking-widest mb-6">
                            Contact
                        </h4>
                        <div className="flex flex-col gap-2 text-base mb-6 text-secondary">
                            <a href="mailto:info@calyxcommodities.com" className="hover:text-accent transition-colors">info@calyxcommodities.com</a>
                            <a href="tel:+919880122758" className="hover:text-accent transition-colors">+91 98801 22758</a>
                        </div>
                        <address className="not-italic text-secondary leading-relaxed text-sm">
                            Sri Lakshmi Complex,<br />
                            Opp KSRTC Bus Stand,<br />
                            Arakalagudu, Hassan 573102<br />
                            Karnataka, India
                        </address>
                    </div>

                </div>

                {/* --- MIDDLE SECTION: MASSIVE BRAND NAME --- */}
                <div className="w-full border-t border-gray-100 pt-8 pb-12 flex justify-center items-center overflow-hidden">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-[10vw] md:text-[8vw] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-sky-700 to-emerald-700 pointer-events-none select-none pr-4 md:pr-8 scale-y-110"
                    >
                        CALYX COMMODITIES
                    </motion.h1>
                </div>

                {/* --- BOTTOM SECTION: Socials & Copyright --- */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10 border-t border-gray-100">
                    <div className="text-xs text-secondary font-mono uppercase">
                        © {new Date().getFullYear()} CALYX COMMODITIES. ALL RIGHTS RESERVED.
                    </div>

                    <div className="flex items-center gap-6">
                        {socialLinks.map((social, i) => (
                            <a
                                key={i}
                                href={social.url}
                                className="text-secondary hover:text-accent transition-colors p-2 hover:bg-green-50 rounded-full border border-gray-200"
                            >
                                <social.icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>

            </div>

            {/* Background Grid Accent */}
            <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-green-50/50 to-transparent pointer-events-none" />

        </footer>
    );
};

export default Footer;
