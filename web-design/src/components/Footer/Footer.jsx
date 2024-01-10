import React from 'react';
import FooterLogo from '../../assets/food-logo.png';
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobile } from 'react-icons/fa6';

const Footer = () => {
    return (
        <>
            <div className=' bg-gray-100 dark:bg-gray-950'>
                <div className=' max-w-[1200px] mx-au'>
                    <div className=' grid md:grid-cols-3 py-5'>
                        <div className=' py-8 px-4'>
                            <h1 className='flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left'>
                                <img src={FooterLogo} alt=''
                                    className='max-w-[50px]' />
                                FOODIE</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam hic aspernatur perspiciatis! Inventore doloremque corrupti eligendi dolorem quidem ab similique animi architecto saepe. Doloremque, deserunt? Nihil maxime numquam ex animi.</p>
                            <br />
                            <div className=' flex items-center gap-3 mt-6'>
                                <FaLocationArrow />
                                <p>Ahmedabad India</p>
                            </div>
                            <div className='flex items-center gap-3 mt-3'>
                                <FaMobile />
                                <p>+91 1234567890</p>
                            </div>
                        
                        {/* social handles */}
                        <div>
                            <div className=' flex items-center gap-3 mt-6'>
                                <a href='#'>
                                    <FaInstagram className='text-3xl' />
                                </a>
                                <a href='#'>
                                    <FaFacebook className='text-3xl' />
                                </a>
                                <a href='#'>
                                    <FaLinkedin className='text-3xl' />
                                </a>
                            </div>
                        </div>
                        </div>
                        <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                            <div>
                                <div className=' py-8 px-4'>
                                    <h1 className=' sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'>Important Link </h1>
                                    <ul className=' flex flex-col gap-3'>
                                        <li className="cursor-pointer">Home</li>
                                        <li className="cursor-pointer">About</li>
                                        <li className="cursor-pointer">Services</li>
                                        <li className="cursor-pointer">Login</li>
                                    </ul>

                                </div>
                            </div>
                            <div>
                                <div className=' py-8 px-4'>
                                    <h1 className=' sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'>Important Link </h1>
                                    <ul className=' flex flex-col gap-3'>
                                        <li className="cursor-pointer">Home</li>
                                        <li className="cursor-pointer">About</li>
                                        <li className="cursor-pointer">Services</li>
                                        <li className="cursor-pointer">Login</li>
                                    </ul>

                                </div>
                            </div>
                            <div>
                                <div className=' py-8 px-4'>
                                    <h1 className=' sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'>Important Link </h1>
                                    <ul className=' flex flex-col gap-3'>
                                        <li className="cursor-pointer">Home</li>
                                        <li className="cursor-pointer">About</li>
                                        <li className="cursor-pointer">Services</li>
                                        <li className="cursor-pointer">Login</li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center py-10 border-t-2 border-gray-300/50">
                        @copyright 2024 All rights reserved || Made with ❤️ by Dilshad                            
                        </div>
                </div>
            </div>
        </>
    )
}

export default Footer;