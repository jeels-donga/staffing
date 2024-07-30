import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react'
import React, { useState } from 'react'

const Services = () => {
    const categories = [
        "Accounting", "Sales & Marketing", "Human Resources", "Engineering",
        "Call Center", "Technology", "Mortgage", "Healthcare", "Digital & Creative", "Project Management"
    ];

    const [activeCard, setActiveCard] = useState(0);
    const [mainContent, setMainContent] = useState({
        title: "Fill short-term and temporary project requirements",
        description: "Many variations of passage of lorem Ipsum available but the majority have suffered alterations in some form injected humour, or randomised words slightly.",
        time: "Short-term"
    });

    const sideCards = [
        {
            title: "Fill short-term and temporary project requirements",
            description: "Many variations of passage of lorem Ipsum available but the majority have suffered alterations in some form injected humour, or randomised words slightly.",
            time: "Short-term"
        },
        {
            title: "Fill short-term and long-term project requirements",
            description: "Many variations of passage of lorem Ipsum available but the majority have suffered alterations in some form injected humour, or randomised words slightly.",
            time: "Short to Long-term"
        },
        {
            title: "Hire Skilled IT Consultant on a need-as-basis",
            description: "Many variations of passage of lorem Ipsum available but the majority have suffered alterations in some form injected humour, or randomised words slightly.",
            time: "As needed"
        }
    ];

    const handleCardClick = (index) => {
        setActiveCard(index);
        setMainContent(sideCards[index]);
    };
    return (
        <div className="container ">
            <div className='grid grid-cols-3'>
                <div className='col-span-2'>
                    <div className='my-[5%]'>
                        <Typography variant="h2" className="my-3">
                            Recruitment Services
                        </Typography>
                        <div className="flex justify-center mb-8">
                            <img
                                src="https://4cbcd20a.rocketcdn.me/wp-content/uploads/2023/06/recruitment-services-01.jpg"
                                className="w-full max-w-3xl h-auto rounded-lg shadow-md"
                                alt="Recruitment Services"
                            />
                        </div>
                        <Typography variant="body1" className="my-3">
                            TekPillar is a pioneer in the IT Staff Augmentation industry. Since 2009, we’ve helped Fortune 500 and mid-size clients achieve their business goals by providing high-quality IT talent globally. We’re all about finding the right people, with the right skills, for the right job.
                        </Typography>
                        <Typography variant="body1" className="my-3">
                            We bridge the IT talent demand-supply gap through an innovative, best-in-class recruiting engine, backed by a dedicated client-centric service focus. The result? Over 90% of our clients rank us in their top 3 suppliers by performance.
                        </Typography>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 my-[5%]">
                        <Card className="transition-transform transform hover:scale-105">
                            <CardBody>
                                <Typography variant="h6" color="blue-gray" className="mb-2">
                                    01
                                </Typography>
                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                    Administration Roles
                                </Typography>
                                <div className="flex justify-end">
                                    <Avatar
                                        src="https://4cbcd20a.rocketcdn.me/wp-content/uploads/2023/06/Administration-Roles.png"
                                        className="w-[30%] h-auto"
                                        variant="rounded"
                                    />
                                </div>
                            </CardBody>
                        </Card>
                        <Card className="transition-transform transform hover:scale-105">
                            <CardBody>
                                <Typography variant="h6" color="blue-gray" className="mb-2">
                                    02
                                </Typography>
                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                    Human Resources Roles
                                </Typography>
                                <div className="flex justify-end">
                                    <Avatar
                                        src="https://4cbcd20a.rocketcdn.me/wp-content/uploads/2023/06/Resources.png"
                                        className="w-[30%] h-auto"
                                        variant="rounded"
                                    />
                                </div>
                            </CardBody>
                        </Card>
                        <Card className="transition-transform transform hover:scale-105">
                            <CardBody>
                                <Typography variant="h6" color="blue-gray" className="mb-2">
                                    03
                                </Typography>
                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                    Customer Support Roles
                                </Typography>
                                <div className="flex justify-end">
                                    <Avatar
                                        src="https://4cbcd20a.rocketcdn.me/wp-content/uploads/2023/06/customer-support.png"
                                        className="w-[30%] h-auto"
                                        variant="rounded"
                                    />
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                    <div className='my-[5%]'>
                        <Typography variant='h4'>
                            Finding You The Leaders Of Tomorrow
                        </Typography>
                        <Typography variant="body1" className="my-4">
                            Our contract staffing services enable you to fill short-term needs for qualified employees. Companies rely on a temporary staffing agency’s contract staffing services to support upcoming projects, meet seasonal requirements, and reduce their workforce during slow periods.
                        </Typography>
                        <div className="flex flex-col md:flex-row gap-5 p-10 bg-gray-100 rounded-lg shadow-lg">
                            {/* Left column with cards */}
                            <div className="flex flex-col gap-3 md:w-1/3">
                                {sideCards.map((card, index) => (
                                    <Card
                                        key={index}
                                        className={`cursor-pointer transition-transform transform hover:scale-105 duration-300 ${activeCard === index ? 'bg-blue-600 text-white' : 'bg-white hover:bg-blue-50'
                                            }`}
                                        onClick={() => handleCardClick(index)}
                                    >
                                        <CardBody>
                                            <Typography variant="h6">
                                                {card.title}
                                            </Typography>
                                        </CardBody>
                                    </Card>
                                ))}
                            </div>

                            {/* Right column with main content */}
                            <Card className="md:w-2/3 shadow-lg">
                                <CardHeader className="relative h-56">
                                    <img
                                        src="https://4cbcd20a.rocketcdn.me/wp-content/uploads/2023/06/project-management-services-01-600x400.jpg"
                                        alt="Project requirements illustration"
                                        className="w-full h-full object-cover rounded-t-lg"
                                    />
                                </CardHeader>
                                <CardBody>
                                    <Typography variant="h5" color="blue-gray" className="mb-2">
                                        {mainContent.title}
                                    </Typography>
                                    <Typography className="mb-4">
                                        {mainContent.description}
                                    </Typography>
                                    <Typography variant="small" color="blue-gray" className="font-semibold">
                                        Time frame: {mainContent.time}
                                    </Typography>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                    <div className="my-[5%]">
                        <Typography variant='h4' className=" font-bold mb-4">
                            Service Advantages
                        </Typography>
                        <Typography variant="body1" className="mb-8">
                            With our proven 24/7 recruiting model, deep understanding of our client’s business areas, extensive resources, and client-focused approach, TekPillar has developed strong focus teams to provide resources in various areas in the following Professional categories:
                        </Typography>
                        <div className="grid grid-cols-2  gap-4 p-4">
                            {categories.map((category, index) => (
                                <Card key={index} className="p-4 shadow-md bg-[#E0E6F3] hover:bg-[#D0D8E8] transition-colors duration-300">
                                    <CardBody className="flex items-center">
                                        <i className="fas fa-dot-circle text-blue-500 mr-2" aria-hidden="true"></i>
                                        <Typography variant="body1">{category}</Typography>
                                    </CardBody>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
                <div className=''></div>
            </div>

        </div>
    )
}

export default Services
