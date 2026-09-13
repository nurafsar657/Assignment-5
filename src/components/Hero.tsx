
import HeroImage from '../assets/banner-stack.png';

const Hero = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className='flex-1 space-y-6'>
                <h1 className='text-6xl font-bold'>
                    Build Your Ideal<br /><span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent"> Development Stack</span>
                </h1>
                <p className='text-gray-600 max-w-lg'>
                    Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits your
                    next project.
                </p>
                <div className='py-4 flex gap-4'>
                    <button className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 text-white px-6 py-2 rounded-md hover:bg-gray-100 hover:text-black">
                        Explore Technologies
                    </button>
                    <button className="bg-gray-50 text-black px-6 py-2 border-2 border-gray-300 rounded-md hover:bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 hover:text-white">
                        Learn More
                    </button>
                </div>
            </div>

            <div className='flex-1 flex justify-center md:justify-end'>
                <img src={HeroImage} alt="Hero Banner" className="w-full max-w-md h-auto" />
            </div>
        </div>
    );
};

export default Hero;