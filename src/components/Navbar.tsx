import React from 'react';

const Header: React.FC = () => {
  return (
    <div className='bg-color1'>
    <div className="container mx-auto ">
      <div className="flex justify-between items-center py-4 h-full">
        <p className="text-xl font-bold font-playfair text-white">KHFDZ</p>
        <div className="flex items-center space-x-12">
          <p className="cursor-pointer hover:text-color2 font-sourceSans text-white">About Me</p>
          <p className="cursor-pointer hover:text-color2 font-sourceSans text-white">Resume</p>
          <p className="cursor-pointer hover:text-color2 font-sourceSans text-white">Work</p>
          <button className='bg-color2 text-black font-semibold px-4 py-2 rounded-3xl'>
            Get in Touch
          </button>
        </div>
      </div>

      </div>

    </div>
  );
}

export default Header;
