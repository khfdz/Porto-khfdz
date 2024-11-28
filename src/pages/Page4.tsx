import React, { useState } from 'react';
import Image from '../data/images.json';

const Page4: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<'webdev' | 'photography'>('webdev');
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 4;

    // Data untuk kategori yang aktif
    const displayedImages = Image[activeCategory];
    const totalPages = Math.ceil(displayedImages.length / itemsPerPage);

    // Mendapatkan gambar untuk halaman saat ini
    const paginatedImages = displayedImages.slice(
        currentPage * itemsPerPage,
        currentPage * itemsPerPage + itemsPerPage
    );

    // Fungsi untuk mengubah halaman
    const nextPage = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className='bg-color3 pl-12 pr-12 pb-14 pt-10'>
            <div className='flex flex-col items-center'>
                <p className='text-5xl font-bold mb-10'>My Latest Project</p>
                <div className='space-x-4 mb-6 text-xl font-bold'>
                    <button 
                        className={`rounded-md h-10 p-2 ${activeCategory === 'webdev' ? 'text-black bg-color2' : ''}`}
                        onClick={() => {
                            setActiveCategory('webdev');
                            setCurrentPage(0); // Reset halaman saat mengubah kategori
                        }}
                    >
                        WebDev
                    </button>
                    <button 
                        className={`rounded-md h-10 p-2 ${activeCategory === 'photography' ? 'text-black bg-color2' : ''}`}
                        onClick={() => {
                            setActiveCategory('photography');
                            setCurrentPage(0); // Reset halaman saat mengubah kategori
                        }}
                    >
                        Photography
                    </button>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-12'>
                {paginatedImages.map((item, index) => (
                    <div key={index} className='relative w-[250px] h-[400px] overflow-hidden rounded-md shadow-md group'>
                        <img 
                            src={`/images/${item.photo}`} 
                            alt={item.title} 
                            className='w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110' 
                        />
                 
                        <div className='absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                            <p className='text-white text-2xl font-bold mb-2 text-center'>{item.title}</p>
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

            {/* Tombol navigasi halaman */}
            <div className='flex justify-center mt-8 space-x-4'>
                <button 
                    onClick={prevPage} 
                    disabled={currentPage === 0} 
                    className={`py-2 px-4 font-bold rounded-md ${currentPage === 0 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-color2 text-black'}`}
                >
                    Back
                </button>
                <button 
                    onClick={nextPage} 
                    disabled={currentPage >= totalPages - 1} 
                    className={`py-2 px-4 font-bold rounded-md ${currentPage >= totalPages - 1 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-color2 text-black'}`}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default Page4;
