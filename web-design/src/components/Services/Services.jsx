import React from 'react';
import Img2 from '../../assets/biryani2.png';


const ServicesData = [
    {
        id: 1,
        img: Img2,
        name: "Biryani",
        description:
            "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.",
    },
    {
        id: 2,
        img: Img2,
        name: "Chiken kari",
        description:
            "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    },
    {
        id: 3,
        img: Img2,
        name: "Cold Cofee",
        description:
            "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    },
];

const Services = () => {
    return (
        <>
            <div className='py-10'>
                <div className='container'>
                    {/* Header section */}
                    <div className='text-center mb-20 mx-w-[400px] mx-auto'>
                        <p className='text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>Our Service</p>
                        <h1 className='text-3xl font-bold'>Service</h1>
                        <p className='text-2xl text-gray-400 pb-16'>
                            {""}
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. In quia enim aliquid<br></br>
                            labore distinctio rem inventore sint cum adipisci, sequi maiores quas .
                        </p>
                    </div>
                    {/* card section */}
                    <div>
                        <div className=' grid grid-cols-1 gap-28 sm:gap-0 sm:grid-cols-3  md:gap-5 place-items-center '>
                            {ServicesData.map(({ id, img, name, description }) => {
                                return (<div
                                    data-aos="zoom-out"
                                    data-aos-duration="400"
                                    data-aos-once="true" 
                                    key={id} className=' max-w-[300px] group rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary hover:text-white duration-300 p-4 shadow-2xl'>
                                    <div className=''>
                                        <img src={img} className=' mt-[-150px] ms-7 max-w-[200px] mx-auto block transform - translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300' />
                                    </div>
                                    <div className=' w-full mt-16 text-center'>
                                        <h1 className=' text-xl font-bold pt-7 '>{name}</h1>
                                        <p className=' text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{description}</p>
                                    </div>
                                </div>
                                );
                            }
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services;