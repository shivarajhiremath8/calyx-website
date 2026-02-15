import Button from '../components/ui/Button';

const Contact = () => {
    return (
        <div className="min-h-screen pt-28 md:pt-44 pb-16 bg-white">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* Left Side: Text & Info */}
                    <div className="pt-2 animate-fade-in-up">
                        <span className="text-accent font-bold uppercase tracking-widest text-xs mb-3 block">Get In Touch</span>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-6 leading-tight tracking-tight">
                            Let's Start a<br />Conversation
                        </h1>
                        <p className="text-secondary text-base md:text-lg mb-10 leading-relaxed max-w-lg">
                            Have a question or interested in our commodities? We're here to help. Reach out to us and we'll respond as soon as possible.
                        </p>

                        <div className="space-y-8">
                            {/* Info Items - Enhanced UI */}
                            {[
                                {
                                    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                                    label: "Email Us",
                                    text: "info@calyxcommodities.com",
                                    href: "mailto:info@calyxcommodities.com"
                                },
                                {
                                    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
                                    label: "Call Us",
                                    text: "+91 98801 22758",
                                    href: "tel:+919880122758"
                                },
                                {
                                    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
                                    label: "Visit Us",
                                    text: "Sri Lakshmi Complex, Opp KSRTC Bus Stand, Arakalagudu, Hassan 573102",
                                    isAddress: true
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-5 group">
                                    <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:shadow-md transition-all duration-300 shrink-0">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary text-lg mb-0.5">{item.label}</h4>
                                        {item.isAddress ? (
                                            <p className="text-secondary text-sm leading-relaxed max-w-xs">{item.text}</p>
                                        ) : (
                                            <a href={item.href} className="text-secondary text-base hover:text-accent transition-colors font-medium relative inline-block after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-0 after:h-px after:bg-accent after:transition-all after:duration-300 hover:after:w-full">
                                                {item.text}
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Form - Enhanced UI */}
                    <div className="bg-white p-6 md:p-8 lg:p-10 rounded-[1.5rem] shadow-[0_8px_30px_-8px_rgba(0,0,0,0.05)] border border-gray-100 relative">
                        {/* Decorative Background Element */}
                        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50/50 rounded-bl-[3rem] rounded-tr-[1.5rem] -z-10" />

                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2 group">
                                    <label htmlFor="name" className="text-[10px] font-bold text-secondary uppercase tracking-widest ml-1 transition-colors group-focus-within:text-accent">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-100 focus:bg-white focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none transition-all placeholder:text-gray-400 text-sm font-medium"
                                        placeholder="Enter your full name"
                                    />
                                </div>
                                <div className="space-y-2 group">
                                    <label htmlFor="email" className="text-[10px] font-bold text-secondary uppercase tracking-widest ml-1 transition-colors group-focus-within:text-accent">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-100 focus:bg-white focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none transition-all placeholder:text-gray-400 text-sm font-medium"
                                        placeholder="hello@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2 group">
                                <label htmlFor="subject" className="text-[10px] font-bold text-secondary uppercase tracking-widest ml-1 transition-colors group-focus-within:text-accent">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-100 focus:bg-white focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none transition-all placeholder:text-gray-400 text-sm font-medium"
                                    placeholder="What is this regarding?"
                                />
                            </div>

                            <div className="space-y-2 group">
                                <label htmlFor="message" className="text-[10px] font-bold text-secondary uppercase tracking-widest ml-1 transition-colors group-focus-within:text-accent">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-100 focus:bg-white focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none transition-all resize-none placeholder:text-gray-400 text-sm font-medium"
                                    placeholder="Write your message here..."
                                ></textarea>
                            </div>

                            <Button className="w-full py-4 text-base font-bold shadow-lg hover:shadow-accent/40 hover:-translate-y-0.5">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Contact;
