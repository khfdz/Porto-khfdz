import React from 'react';
import icons from '../data/icons.json';

const Page3: React.FC = () => {
    type IconName = keyof typeof iconSizes;

    const iconSizes: Record<string, string> = {
        'MongoDB': 'w-20',
        'Express JS': 'w-20 mt-4',
        'React JS': 'w-20',
        'Node JS': 'w-20',
        'Postman': 'w-20',
        'Tailwind CSS': 'w-20',
        'JavaScript': 'w-17',
        'MySQL': 'w-20',
        'Bootstrap': 'w-20',
        'CSS': 'w-20',
        'HTML': 'w-20',
        'Git': 'w-20',
        'Arduino': 'w-full mt-2',
        'Whimsical': 'w-20',
        'Figma': 'w-200',
        'Photoshop': 'w-[90px] -mt-1 ',
        'InDesign': 'w-[80px] ',
        'Lightroom': 'w-20 ',
    };

    return (
        <div className='bg-color1 pb-32 pt-20 font-sourceSans'>
            <div className='bg-color3 w-[520px]'>
                <p className='text-color4 text-center text-3xl font-bold p-2 font-playfair'>Education</p>
                <div className='flex flex-col-2 p-2'>
                    <div className='pl-4 pr-4'>
                        <p className='mt-4 text-md font-bold'>2018 - 2023</p>
                    </div>
                    <div>
                        <p className='text-xl font-bold'>University Buana Perjuangan of Karawang</p>
                        <p className='text-xl'>Computer Science</p>
                    </div>
                </div>
            </div>

            <div className='bg-color3 w-[400px] mt-6'>
                <p className='text-color4 text-center text-3xl font-bold p-2 font-playfair'>Course</p>
                <div className='flex flex-col-2 p-2'>
                    <div className='pl-4 pr-4'>
                        <p className='mt-4 text-right text-md font-bold'>2023-2024</p>
                        <p className='mt-10 text-right text-md font-bold'>2024</p>
                    </div>
                    <div>
                        <p className='text-xl font-bold'>Eduwork</p>
                        <p className='text-xl'>Fullstack MERN Developer</p>

                        <p className='text-xl font-bold mt-2'>BuildWithAngga</p>
                        <p className='text-xl'>Fullstack MERN Developer</p>
                    </div>
                </div>
            </div>

            <div className='mt-8'>
            <a href='https://raw.githubusercontent.com/khfdz/Resume/main/CV.pdf' download="Resume-Dhika-Hafidz.pdf" className='bg-color3   p-4 ml-10 mr-10'>Download Resume</a>
            </div>


            <div className='bg-color3 mt-8 p-4 ml-10 mr-10'>
                <p className='text-4xl font-bold font-playfair mb-4 text-center'>Skills of Mine</p>
                <div className='flex flex-wrap justify-center'>
                    {icons.icons.map((icon: { name: string; icon: string }, index: number) => (
                        <div 
                            key={index} 
                            className='flex flex-col items-center m-2 transform transition-all duration-300 hover:scale-110 hover:cursor-pointer group'
                            style={{ animation: `slide-up 0.3s ease-out ${index * 0.1}s` }}
                        >
                            <img 
                                src={`../../public/icons/${icon.icon}`} 
                                alt={icon.name} 
                                className={`${iconSizes[icon.name as IconName] || 'w-16'} items-center justify-center`} 
                            />
                            <p className='text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                {icon.name}
                            </p>
                        </div>
                    ))}
                </div>
                <p className='text-md'>*Note : This will always grow over time</p>
            </div>
        </div>
    );
}

export default Page3;
