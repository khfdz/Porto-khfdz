import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<string>('page1');

  const scrollToSection = (sectionId: string) => {
    setActivePage(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['page1', 'page2', 'page3', 'page4'];
      let currentSection = '';

      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 0 && rect.bottom > 0) {
            currentSection = sectionId;
          }
        }
      });

      setActivePage(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='font-playfair'>
      <Navbar activePage={activePage} scrollToSection={scrollToSection} />
      <div id="page1">
        <Page1 scrollToSection={scrollToSection} />
      </div>
      <div id="page2">
        <Page2 />
      </div>
      <div id="page3">
        <Page3 />
      </div>
      <div id="page4">
        <Page4 />
      </div>
    </div>
  );
}

export default App;
