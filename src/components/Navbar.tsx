// components/Navbar.tsx
import React from 'react';

interface NavbarProps {
  activePage: string;
  scrollToSection: (sectionId: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, scrollToSection }) => {
  const getLinkClass = (pageId: string) => 
    `cursor-pointer hover:text-color2 ${activePage === pageId ? 'text-color2' : 'text-white'}`;

  return (
    <div className='bg-color1 sticky top-0 z-50'>
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-6 h-full">
          <p 
            className={`text-xl font-bold font-playfair ${getLinkClass('page1')}`} 
            onClick={() => scrollToSection('page1')}
          >
            KHFDZ
          </p>
          <div className="flex items-center space-x-12 text-xl font-playfair">
            <p 
              onClick={() => scrollToSection('page2')} 
              className={getLinkClass('page2')}
            >
              About Me
            </p>
            <p 
              onClick={() => scrollToSection('page3')} 
              className={getLinkClass('page3')}
            >
              Resume
            </p>
            <p 
              onClick={() => scrollToSection('page4')} 
              className={getLinkClass('page4')}
            >
              Work
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
