import React from 'react';
import Navbar from './components/Navbar';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';

const App: React.FC = () => {
  return (
    <div className='font-playfair'>
      <Navbar />
      <Page1 />
      <Page2 />
      {/* Anda dapat menambahkan komponen lain di sini, misalnya <About />, <Resume />, dll. */}
    </div>
  );
}

export default App;
