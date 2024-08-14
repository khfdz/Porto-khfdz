import React from 'react';

const Header: React.FC = () => {
  return (
    <div className='bg-color1 sticky top-0 z-50'>
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-6 h-full">
          <p className="text-xl font-bold font-playfair text-white">KHFDZ</p>
          <div className="flex items-center space-x-12 text-xl font-playfair">
            <p className="cursor-pointer hover:text-color2 text-white">About Me</p>
            <p className="cursor-pointer hover:text-color2 text-white">Resume</p>
            <p className="cursor-pointer hover:text-color2 text-white">Work</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
