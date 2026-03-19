import AboutHero from '../components/sections/about/AboutHero';
import MissionVision from '../components/sections/about/MissionVision';
import CoreValues from '../components/sections/about/CoreValues';

const About = () => {
    return (
        <div className="flex flex-col w-full relative">
            <AboutHero />
            <MissionVision />
            <CoreValues />
        </div>
    );
};

export default About;
