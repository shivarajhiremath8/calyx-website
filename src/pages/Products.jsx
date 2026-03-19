import ProductsHero from '../components/sections/products/ProductsHero';
import ProductOverview from '../components/sections/products/ProductOverview';
import ProductShowcase from '../components/sections/products/ProductShowcase';

const Products = () => {
    return (
        <div className="flex flex-col w-full relative">
            <ProductsHero />
            <ProductOverview />
            <ProductShowcase />
        </div>
    );
};

export default Products;
