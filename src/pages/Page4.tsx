import React, { useState } from 'react';
import Image from '../data/images.json';

const Page4: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<'webdev' | 'photography'>('webdev');

    // Data untuk kategori yang aktif
    const displayedImages = Image[activeCategory];

    return (
        <div className='bg-color3 pl-12 pr-12 pb-10 pt-10'>
            <div className='flex flex-col items-center'>
                <p className='text-5xl font-bold mb-10'>My Latest Project</p>
                <div className='space-x-4 mb-6 text-xl font-bold'>
                    <button 
                        className={` rounded-md h-10 p-2 ${activeCategory === 'webdev' ? 'text-black bg-color2' : ''}`}
                        onClick={() => setActiveCategory('webdev')}
                    >
                        WebDev
                    </button>
                    <button 
                        className={` rounded-md h-10 p-2 ${activeCategory === 'photography' ? 'text-black bg-color2' : ''}`}
                        onClick={() => setActiveCategory('photography')}
                    >
                        Photography
                    </button>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-12'>
                {displayedImages.slice(0, 4).map((item, index) => (
                    <div key={index} className='relative w-[250px] h-[400px] overflow-hidden rounded-md shadow-md group'>
                        <img 
                            src={`../../src/images/photos/${item.photo}`} 
                            alt={item.title} 
                            className='w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110' 
                        />
                 
                        <div className='absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                            <p className='text-white text-2xl font-bold mb-2'>{item.title}</p>
                            <a 
                                href={item.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className='bg-color2 text-black font-bold py-2 px-4 rounded-md'
                            >
                                View Details
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Page4;
