import Hero from '../components/sections/home/Hero';
import WhatWeOffer from '../components/sections/home/WhatWeOffer';
import CoreAreas from '../components/sections/home/CoreAreas';

const Home = () => {
    return (
        <div className="flex flex-col w-full">
            <Hero />
            <WhatWeOffer />
            <CoreAreas />
        </div>
    );
};

export default Home;
