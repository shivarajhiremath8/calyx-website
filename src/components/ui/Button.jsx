import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Button = ({
    children,
    to,
    variant = 'primary',
    className = '',
    icon = false,
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 transform active:scale-95";

    const variants = {
        primary: "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-primary/30",
        secondary: "bg-white text-primary hover:bg-gray-50 border border-gray-200 shadow-sm hover:shadow",
        outline: "bg-transparent border-2 border-white text-white hover:bg-white/10",
        accent: "bg-accent text-white hover:bg-accent/90 shadow-lg shadow-accent/20 hover:shadow-accent/30",
    };

    const content = (
        <>
            {children}
            {icon && <ArrowRight className="w-4 h-4" />}
        </>
    );

    if (to) {
        return (
            <Link
                to={to}
                className={`${baseStyles} ${variants[variant]} ${className}`}
                {...props}
            >
                {content}
            </Link>
        );
    }

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {content}
        </button>
    );
};

export default Button;
