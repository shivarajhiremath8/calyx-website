import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const location = useLocation();

    // Scroll handler for hiding/showing navbar
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Show/Hide logic
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false); // Scrolling down
            } else {
                setIsVisible(true); // Scrolling up
            }

            setLastScrollY(currentScrollY);
            setScrolled(currentScrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Products', path: '/products' },
        { name: 'Contact Us', path: '/contact' },
    ];

    return (
        <>
            <div
                className={`fixed top-0 left-0 right-0 z-50 flex justify-center md:px-4 md:pt-6 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full md:-translate-y-[200%]'
                    }`}
            >
                <nav
                    className={`w-full md:w-auto transition-all duration-300 md:rounded-full border-b md:border border-white/20 shadow-sm ${scrolled || isOpen
                        ? 'bg-white/95 backdrop-blur-md shadow-md py-3 px-6 md:px-8 md:py-4'
                        : 'bg-white/80 backdrop-blur-md py-3 px-6 md:px-8 md:py-4'
                        }`}
                >
                    <div className="flex items-center justify-between gap-6 md:gap-12 w-full max-w-7xl mx-auto">
                        {/* Logo - Increased size */}
                        <Link to="/" className="flex items-center shrink-0 z-50 relative">
                            <img src={logo} alt="Calyx Logo" className="h-12 md:h-14 w-auto object-contain" />
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`text-base font-medium transition-colors relative group ${location.pathname === link.path ? 'text-accent' : 'text-primary hover:text-accent'
                                        }`}
                                >
                                    {link.name}
                                    <span
                                        className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                                            }`}
                                    />
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-primary ml-auto z-50 relative p-2"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle Menu"
                        >
                            {isOpen ? <X size={32} /> : <Menu size={32} />}
                        </button>
                    </div>
                </nav>
            </div>

            {/* Mobile Navigation Overlay - Full Screen */}
            <div
                className={`fixed inset-0 z-40 bg-white/98 backdrop-blur-xl transition-all duration-300 md:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            >
                <div className="flex flex-col items-center justify-center h-full gap-8 p-6">
                    {navLinks.map((link, idx) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`text-2xl font-bold transition-all duration-300 ${location.pathname === link.path ? 'text-accent' : 'text-primary'
                                }`}
                            style={{
                                opacity: isOpen ? 1 : 0,
                                transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                                transitionDelay: `${idx * 100}ms`
                            }}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Navbar;
