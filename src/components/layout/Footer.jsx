import { Link } from 'react-router-dom';
import { Atom, Mail, MapPin, Phone, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary text-white pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Info */}
                    <div className="space-y-4">
                        <Link to="/" className="flex items-center gap-2">
                            <div className="p-2 bg-white/10 rounded-lg">
                                <Atom className="w-6 h-6 text-accent" />
                            </div>
                            <span className="text-xl font-bold tracking-tight">
                                CALYX
                                <span className="text-accent font-light">COMMODITIES</span>
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Pioneering research and development in sustainable commodities.
                            Bridging the gap between scientific innovation and market application.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            {[
                                { name: 'About Us', path: '/about' },
                                { name: 'Our Products', path: '/products' },
                                { name: 'Services', path: '/services' },
                                { name: 'Contact Us', path: '/contact' },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-400 hover:text-white transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400 text-sm">
                                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                <span>123 Innovation Drive,<br />Tech Park, Sector 4<br />City, State 123456</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <Phone className="w-5 h-5 text-accent shrink-0" />
                                <span>+91 123 456 7890</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <Mail className="w-5 h-5 text-accent shrink-0" />
                                <span>info@calyxcommodities.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter / Social */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Stay Connected</h3>
                        <p className="text-gray-400 text-sm mb-4">
                            Follow our journey and latest updates.
                        </p>
                        <div className="flex gap-4">
                            {[Linkedin, Twitter, Facebook].map((Icon, idx) => (
                                <a
                                    key={idx}
                                    href="#"
                                    className="p-2 bg-white/5 rounded-full hover:bg-accent hover:text-white transition-all text-gray-400"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {currentYear} Calyx Commodities. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-gray-500">
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
