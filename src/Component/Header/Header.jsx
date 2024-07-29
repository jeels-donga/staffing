import {
    Button,
    Card,
    IconButton,
    MobileNav,
    Navbar,
    Typography,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown } from 'react-icons/fa';

const Header = () => {
    const [openNav, setOpenNav] = useState(false);
    const [openMenu, setOpenMenu] = useState({});

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 960) {
                setOpenNav(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleMenuToggle = (menu) => {
        setOpenMenu((prevState) => {
            const newState = Object.keys(prevState).reduce((acc, key) => {
                acc[key] = false;
                return acc;
            }, {});
            return { ...newState, [menu]: !prevState[menu] };
        });
    };

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            {[
                { name: 'Home', path: '/' },
                {
                    name: 'Services',
                    path: '/service',
                    submenu: [
                        { name: 'Recruitment Service', path: 'service/recruitment-service' },
                        { name: 'Project Management', path: 'service/project-management-service' },
                        { name: 'Software Service', path: 'service/software-service' },
                    ],
                },
                {
                    name: 'Industries',
                    path: '/industries',
                    submenu: [{ name: 'IT & ITES Specialization', path: 'industries/it-ites-specialization' }],
                },
                { name: 'Jobs', path: '/job' },
                { name: 'About Us', path: '/about-us' },
                { name: 'Contact Us', path: '/contact-us' },
                {
                    name: 'Blog',
                    path: '/blogs',
                    submenu: [{ name: "FAQ'S", path: 'blogs/faq' }],
                },
                { name: 'Life at Crystal', path: '/life-at-crystal' },
            ].map((item, index) => (
                <Typography
                    key={index}
                    as="li"
                    variant="small"
                    color="gray"
                    className="p-1 font-normal relative"
                >
                    {item.submenu ? (
                        <>
                            <button className="flex items-center" onClick={() => handleMenuToggle(item.name)}>
                                {item.name} <FaAngleDown className="ml-2" />
                            </button>
                            {openMenu[item.name] && (
                                <ul className="absolute left-0 top-full mt-2 w-48 rounded-md shadow-lg bg-white z-10">
                                    {item.submenu.map((subitem, subindex) => (
                                        <li key={subindex} className="p-2">
                                            <Link to={subitem.path} className="block text-gray-700 hover:bg-gray-100 rounded-md">
                                                {subitem.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </>
                    ) : (
                        <Link to={item.path} className="flex items-center">
                            {item.name}
                        </Link>
                    )}
                </Typography>
            ))}
        </ul>
    );

    return (
        <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
            <div className="flex items-center justify-between text-blue-gray-900">
                <Typography as="a" href="#" className="mr-4 cursor-pointer py-1.5 font-medium">
                    Material Tailwind
                </Typography>
                <div className="flex items-center gap-4">
                    <div className="mr-4 hidden lg:block">{navList}</div>
                    <div className="flex items-center gap-x-1">
                        <Button variant="text" size="sm" className="hidden lg:inline-block">
                            <span>Log In</span>
                        </Button>
                        <Button variant="gradient" size="sm" className="hidden lg:inline-block">
                            <span>Sign in</span>
                        </Button>
                    </div>
                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </IconButton>
                </div>
            </div>
            <MobileNav open={openNav}>
                {navList}
                <div className="flex items-center gap-x-1">
                    <Button fullWidth variant="text" size="sm">
                        <span>Log In</span>
                    </Button>
                    <Button fullWidth variant="gradient" size="sm">
                        <span>Sign in</span>
                    </Button>
                </div>
            </MobileNav>
        </Navbar>
    );
};

export default Header;
