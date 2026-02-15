import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import Button from '../components/ui/Button';

const Contact = () => {
    return (
        <div className="flex flex-col">
            {/* Header */}
            <section className="bg-primary text-white py-20">
                <div className="container mx-auto px-6 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Get in Touch
                    </motion.h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Have a question or want to partner with us? We'd love to hear from you.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2">
                        {/* Contact Info */}
                        <div className="bg-slate-900 p-12 text-white flex flex-col justify-between relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                            <div className="relative z-10 space-y-12">
                                <div>
                                    <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        Fill out the form and our team will get back to you within 24 hours.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <MapPin className="w-6 h-6 text-accent shrink-0" />
                                        <div>
                                            <h4 className="font-semibold mb-1">Our Location</h4>
                                            <p className="text-gray-400 text-sm">123 Innovation Drive, Tech Park,<br />Sector 4, City, State 123456</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <Phone className="w-6 h-6 text-accent shrink-0" />
                                        <div>
                                            <h4 className="font-semibold mb-1">Phone Number</h4>
                                            <p className="text-gray-400 text-sm">+91 123 456 7890</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <Mail className="w-6 h-6 text-accent shrink-0" />
                                        <div>
                                            <h4 className="font-semibold mb-1">Email Address</h4>
                                            <p className="text-gray-400 text-sm">info@calyxcommodities.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative z-10 mt-12">
                                <div className="flex gap-4">
                                    {/* Social Icons Placeholder */}
                                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors cursor-pointer">
                                        <span className="sr-only">LinkedIn</span>
                                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="p-12">
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-secondary">First Name</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" placeholder="John" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-secondary">Last Name</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" placeholder="Doe" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-secondary">Email Address</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" placeholder="john@example.com" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-secondary">Subject</label>
                                    <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-white">
                                        <option>General Inquiry</option>
                                        <option>Partnership Proposal</option>
                                        <option>Product Information</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-secondary">Message</label>
                                    <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none" placeholder="Tell us how we can help..." />
                                </div>

                                <Button className="w-full" icon>Send Message</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
