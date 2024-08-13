import React from 'react';
import Foto from '../../public/images/foto1.png'

const Page1: React.FC = () => {
  return (
    <div className='h-full bg-color1'>


      <div className='flex flex-col h-full relative font-extrabold font-playfair text-9xl'>
        {/* PORTFOLIO text with flexbox */}
        <div className='flex flex-col items-center mr-24'>
          <p className='text-color3  z-20'>PORTFOLIO</p>
          <p className='text-text-dark text-stroke -mt-24 z-6'>PORTFOLIO</p>
          <p className='text-text-dark text-stroke -mt-8'>PORTFOLIO</p>
          <p className='text-text-dark text-stroke -mt-8'>PORTFOLIO</p>
          <p className='text-stroke-only -mt-8 z-1'>PORTFOLIO</p>

        </div>
      </div>
      
      <div className='absolute z-10 -mt-[193px] xl'>
        <label className='bg-color1 flex flex-col items-start  w-[200px] ml-[200px] p-4 text-left -space-y-2 '>
          <a href='https://github.com/khfdz' className='text-white text-2xl hover:text-color2'>GIT: /khfdz</a>
          <a href='https://www.linkedin.com/in/khfdz/' className='text-white text-2xl hover:text-color2'>LI: /khfdz</a>
          <a href='https://www.behance.net/khfdz' className='text-white text-2xl hover:text-color2'>BE: /khfdz</a>
          <a href='https://www.instagram.com/khfdz/' className='text-white text-2xl hover:text-color2'>IG: /@khfdz</a>
        </label>
      </div>

        <div className='relative -mt-[360px] z-5 ml-[680px] '>
      <img src={Foto} className='w-[350px] ' />
      </div>

      <div className='relative bg-black z-6 -mt-[134px] flex items-center justify-between pt-20 pb-10 pl-10 pr-10 mt'>
  <button className='bg-color2 text-black font-bold px-4 py-2 rounded-md'>
    Go Down !
  </button>
  <p className=' z-10 text-white max-w-[70%] text-xl text-justify'>
    I have a deep love for the arts and am committed to expressing
    that passion through my website, creating captivating and meaningful
    content that resonates with viewers and sparks creativity.
  </p>
</div>


    </div>
  );
}

export default Page1;
