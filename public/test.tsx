import React from 'react';
import icons from '../data/icons.json';

const Page3: React.FC = () => {
    type IconName = keyof typeof iconSizes;

    const iconSizes: Record<string, string> = {
        'MongoDB': 'w-16',
        'Express JS': 'w-16 mt-4',
        'React JS': 'w-16',
        'Node JS': 'w-16',
        'Postman': 'w-16',
        'Tailwind CSS': 'w-16',
        'JavaScript': 'w-14',
        'MySQL': 'w-16',
        'Bootstrap': 'w-14',
        'CSS': 'w-16',
        'HTML': 'w-16',
        'Git': 'w-16',
        'Arduino': 'w-full mt-2',
        'Whimsical': 'w-16 mt-2',
        'Figma': 'w-12',
        'Photoshop': 'w-[72px] -mt-1',
        'InDesign': 'w-[65px]',
        'Lightroom': 'w-16',
    };

    const firstRowIcons = icons.icons.slice(0, 9);
    const secondRowIcons = icons.icons.slice(9);

    return (
        <div className='bg-color1 pb-32 pt-20 font-sourceSans'>
            <div className='bg-color3 w-[520px]'>
                <p className='text-color4 text-center text-4xl font-bold p-2 font-playfair'>Education</p>
                <div className='flex flex-col-2 p-2'>
                    <div className='pl-4 pr-4'>
                        <p className='mt-4 text-md font-bold'>2018 - 2023</p>
                    </div>
                    <div>
                        <p className='text-xl font-bold'>University Buana Perjuangan of Karawang</p>
                        <p>Computer Science</p>
                    </div>
                </div>
            </div>

            <div className='bg-color3 w-[400px] mt-6'>
                <p className='text-color4 text-center text-4xl font-bold p-2 font-playfair'>Course</p>
                <div className='flex flex-col-2 p-2'>
                    <div className='pl-4 pr-4'>
                        <p className='mt-4 text-right text-md font-bold'>2023-2024</p>
                        <p className='mt-10 text-right text-md font-bold'>2024</p>
                    </div>
                    <div>
                        <p className='text-xl font-bold'>Eduwork</p>
                        <p>Fullstack MERN Developer</p>

                        <p className='text-xl font-bold mt-2'>BuildWithAngga</p>
                        <p>Fullstack MERN Developer</p>
                    </div>
                </div>
            </div>

            <div className='bg-color3 w-[500px] right-0 absolute mt-2 ml-auto -mt-[350px]'>
                <p className='text-color4 text-center text-4xl font-bold p-2 font-playfair'>Experience</p>
                <div className='flex flex-col-2 p-2'>
                    
                    <div className='pl-4 pr-4'>
                        <p className='mt-4 text-right text-md font-bold'>2018-2023</p>
                        <p className='mt-9 text-right text-md font-bold'>2019-2023</p>
                        <p className='mt-8 text-right text-md font-bold'>2021</p>
                        <p className='mt-10 text-right text-md font-bold'>2019-2020</p>
                    </div>
                    
                    <div>
                        <p className='text-xl font-bold'>Freelance</p>
                        <p className=''>Photographer</p>

                        <p className='text-xl font-bold mt-2'>Mapro UBP</p>
                        <p>Presenter</p>

                        <p className='text-xl font-bold mt-2'>Prisma Computer</p>
                        <p>Computer Repair, CCTV Installation & Store Assistant</p>

                        <p className='text-xl font-bold mt-2'>Butik Rumah Cantik</p>
                        <p>Photographer & Editor</p>



                    </div>


                </div>
            </div>


            <div className='mt-10'>
                <a href='https://raw.githubusercontent.com/khfdz/Resume/main/CV.pdf' download="Resume-Dhika-Hafidz.pdf" className='bg-color2 p-4  mr-10 text-2xl font-extrabold rounded-r-3xl font-playfair'>Download Resume</a>
            </div>

            <p className='text-4xl font-bold font-playfair mb-4 text-center absolute ml-[300px] mt-[px] p-2 text-color5 bg-color6'>Skills of Mine</p>
            <div className='bg-color3 mt-10 p-4 ml-10 mr-10'>
                
                
                {/* Row 1 */}
                <div className='flex flex-wrap justify-center'>
                    {firstRowIcons.map((icon, index) => (
                        <div 
                            key={index} 
                            className='flex flex-col items-center ml-8 mt-4  transform transition-all duration-300 hover:scale-110 hover:cursor-pointer group border border-transparent shadow-md rounded-full'
                            style={{ animation: `slide-up 0.3s ease-out ${index * 0.1}s` }}
                        >
                            <img 
                                src={`../../public/icons/${icon.icon}`} 
                                alt={icon.name} 
                                className={`${iconSizes[icon.name as IconName] || 'w-16'} items-center justify-center`} 
                            />
                            <p className='text-center text-xl  opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                {icon.name}
                            </p>
                        </div>
                    ))}
                </div>
                
                {/* Row 2 */}
                <div className='flex flex-wrap justify-center mt-4'>
                    {secondRowIcons.map((icon, index) => (
                        <div 
                            key={index} 
                            className='flex flex-col items-center ml-8 transform transition-all duration-300 hover:scale-110 hover:cursor-pointer group border border-transparent shadow-md rounded-full'
                            style={{ animation: `slide-up 0.3s ease-out ${index * 0.1}s` }}
                        >
                            <img 
                                src={`../../public/icons/${icon.icon}`} 
                                alt={icon.name} 
                                className={`${iconSizes[icon.name as IconName] || 'w-16'} items-center justify-center`} 
                            />
                            <p className='text-center text-xl  opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
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
