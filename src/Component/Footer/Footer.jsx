import { Card, Typography } from '@material-tailwind/react';
import React from 'react';
import { BiPlus } from 'react-icons/bi';
import { FaAndroid, FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-black pt-10'>
            <div className='container mx-auto px-5'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                    <div className='p-5'>
                        <Typography variant='paragraph' color='white'>
                            TekPillar Consultants is the pioneer of organized recruitment services in India. Over the years, we have acted as preferred talent acquisition partner to multinationals and leading Indian businesses to emerge as the leading recruitment brand nationally.
                        </Typography>
                    </div>
                    <div className='p-5'>
                        <Typography variant='h6' color='white'>
                            Quick Links
                        </Typography>
                        <Typography variant='paragraph' color='white'>
                            Home
                        </Typography>
                        <Typography variant='paragraph' color='white'>
                            Services
                        </Typography>
                        <Typography variant='paragraph' color='white'>
                            Jobs
                        </Typography>
                        <Typography variant='paragraph' color='white'>
                            About Us
                        </Typography>
                        <Typography variant='paragraph' color='white'>
                            Contact us
                        </Typography>
                    </div>
                    <div className='p-5'>
                        <Typography variant='h6' color='white'>
                            More Links
                        </Typography>
                        <Typography variant='paragraph' color='white'>
                            Blogs
                        </Typography>
                        <Typography variant='paragraph' color='white'>
                            {"FAQ’s"}
                        </Typography>
                        <Typography variant='paragraph' color='white'>
                            Jobs
                        </Typography>
                        <Typography variant='paragraph' color='white'>
                            Privacy Policy
                        </Typography>
                        <Typography variant='paragraph' color='white'>
                            Life at TekPillar
                        </Typography>
                    </div>
                    <div className='p-5'>
                        <Typography variant='h6' color='white'>
                            Contact
                        </Typography>
                        <Typography variant='paragraph' color='white'>
                            Tel: +91 8485913581
                        </Typography>
                        <Typography variant='paragraph' color='white'>
                            Email: info@tekpillar.com
                        </Typography>
                        <Typography variant='paragraph' color='white'>
                            Location: Surat, Gujarat, India
                        </Typography>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 border-t border-gray-700 pt-6'>
                    <div className='flex justify-center md:justify-start gap-3'>
                        <FaFacebook fontSize={"large"} className='text-white' />
                        <FaTwitter fontSize={"large"} className='text-white' />
                        <FaLinkedin fontSize={"large"} className='text-white' />
                        <FaPinterest fontSize={"large"} className='text-white' />
                        <FaInstagram fontSize={"large"} className='text-white' />
                    </div>
                    <div className='flex justify-center'>
                        <Typography variant='paragraph' color='white'>TekPillar © 2024, All Rights Reserved</Typography>
                    </div>
                    <div className='flex justify-center md:justify-end gap-3'>
                        <Typography variant='paragraph' color='white'>Download Apps</Typography>
                        <BiPlus fontSize={"large"} className='text-white' />
                        <FaAndroid fontSize={"large"} className='text-white' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
