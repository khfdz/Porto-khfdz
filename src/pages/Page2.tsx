import React from 'react';
import Foto from '../images/photos/foto5.png'

const Page2: React.FC = () => {
    return (
        <div className='bg-color3 pl-12 pr-12 pb-10 pt-10'>
            <div className='flex flex-col-2 '>
                
                <div>
                <img src={Foto} className='w-[1500px] -mt-20 mb-12' />
                <p className='absolute -mt-[130px] ml-[60px] text-2xl'>Dhika Hafidz <br /> Karawang, 25 Feb 2000</p>
                </div>

                <div className='mt-20 ml-12'>
                <p className='text-7xl'>Hello, <br /> I'm Dhika </p>
                <p className='text-xl mt-8 text-justify'>
                    "I'm a <span className='text-color6 font-bold'>fullstack website developer</span> and a <span className='text-color6 font-bold'>photographer</span>, residing in Indonesia. 
                    I hold a bachelor's degree in Computer Science, and I'm passionate about creating stunning digital 
                    experiences and captivating visual stories."
                </p>

                <div className='text-xl mt-8 text-color5  font-semibold '>
                <a className='hover:text-color6' href='https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=hafiedzdhika@gmail.com'>Email: hafiedzdhika@gmail.com<br/></a>
                <a className='hover:text-color6' href='https://wa.me/6282260423997'>Whatsapp: 082260423997</a>
                </div>
                </div>
                
       
            </div>
        </div>
    );
}

export default Page2;
