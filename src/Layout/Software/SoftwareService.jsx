import { Avatar, Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';
import React, { useState } from 'react'

const SoftwareService = () => {
    const categories = [
        "Product management", "Web UX & Design", "Software architecture", "E-commerce",
        "Operations", "Front-end development", "Back-end development", "Cloud & big data management", "Social software integration", "Search engine optimization"
    ];
    const [activeCard, setActiveCard] = useState(0);
    const [mainContent, setMainContent] = useState({
        title: " End-to-end delivery",
        description: "We have the capability to drive product delivery through all of its phases–elaboration, product requirements definition, UX design and development, deployment and operations support in production mode. However, our teams are flexible and are happy to meet clients needs at any or all of the required development stages.",
        time: "Short-term"
    });

    const sideCards = [
        {
            title: " End-to-end delivery",
            description: "We have the capability to drive product delivery through all of its phases–elaboration, product requirements definition, UX design and development, deployment and operations support in production mode. However, our teams are flexible and are happy to meet clients needs at any or all of the required development stages.",
            time: "Short-term"
        },
        {
            title: " Outstanding team",
            description: "Our team is made up of not only highly talented and motivated individuals, but also innovators who live to solve real problems with great products."
        },
        {
            title: "  Cutting edge technologies",
            description: "We appreciate that technology changes on a daily basis and this is why we expend great effort to keep up-to-date with the most advanced, industry standard technologies out there.",
            time: "As needed"
        },
        {
            title: "   Alignment to client expectations",
            description: "We completely understand the criticality of time-to-market and delivery cost and take these needs into account throughout our development process with constant client conversations.",
            time: "As needed"
        },
        {
            title: "       Holistic delivery process",
            description: "Most of our projects leverage TekPillar Express an end-to-end delivery process that we developed in-house based on the industry best standards of agile development including Scrum, Kanban, Lean Development, Continuous Delivery and Total Quality Management.",
            time: "As needed"
        },
    ];

    const handleCardClick = (index) => {
        setActiveCard(index);
        setMainContent(sideCards[index]);
    };
    return (
        <div className="container mx-auto p-4">
            <Typography variant="h2" className="text-center mb-8">
                Software Services
            </Typography>
            <div className="flex justify-center mb-8">
                <img
                    src="https://4cbcd20a.rocketcdn.me/wp-content/uploads/2023/06/software-services-01.jpg"
                    className="w-1/2 h-auto"
                    alt="Recruitment Services"
                />
            </div>
            <Typography variant="body1" className="mb-4">
                The TekPillar team has broad experience developing great web solutions across the entire technology and business spectrum. We want to work with you to create web solutions that excel in all key areas such as web technologies, UX design, usability, scalability and interoperability.
            </Typography>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
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
                <Card>
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
                <Card>
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
            <div>
                <Typography className='h5'>
                    Our approach
                </Typography>
                <Typography variant='paragraph'>
                    Our approach to successful delivery consists of several key elements:
                </Typography>
                <div className="flex flex-col md:flex-row gap-4 my-10 p-10 bg-gray-100">
                    {/* Left column with cards */}
                    <div className="flex flex-col gap-4 md:w-1/3">
                        {sideCards.map((card, index) => (
                            <Card
                                key={index}
                                className={`cursor-pointer transition-colors duration-300 ${activeCard === index ? 'bg-blue-600 text-white' : 'bg-white hover:bg-blue-50'
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
                    <Card className="md:w-2/3">
                        <CardHeader color="blue-gray" className="relative h-56">
                            <img
                                src="https://4cbcd20a.rocketcdn.me/wp-content/uploads/2023/06/project-management-services-01.jpg"
                                alt="Project requirements illustration"
                                className="w-full h-full object-cover"
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
                {/* <div className="flex">
                    <div className="w-1/4 p-4">
                        <div className="flex flex-col space-y-4">
                            <Button color="blue" variant="filled" className="w-full text-left">
                                End-to-end delivery
                            </Button>
                            <Button color="lightBlue" variant="outlined" className="w-full text-left">
                                Outstanding team
                            </Button>
                            <Button color="lightBlue" variant="outlined" className="w-full text-left">
                                Cutting edge technologies
                            </Button>
                            <Button color="lightBlue" variant="outlined" className="w-full text-left">
                                Alignment to client expectations
                            </Button>
                            <Button color="lightBlue" variant="outlined" className="w-full text-left">
                                Holistic delivery process
                            </Button>
                            <Button color="lightBlue" variant="outlined" className="w-full text-left">
                                Holistic delivery process
                            </Button>
                        </div>
                    </div>
                    <div className="w-3/4 p-4">
                        <Card>
                            <CardBody>
                                <img src="https://4cbcd20a.rocketcdn.me/wp-content/uploads/2023/06/project-management-services-01.jpg" alt="Project Requirements" className="w-[50%] h-auto object-cover mb-4" />
                                <h2 className="text-xl font-semibold mb-2">Vast experience</h2>
                                <p className="text-gray-700">TekPillar has delivered 100+ successful projects in the web space, this equates to about 300 man-years of experience. This experience and expertise can be seen in all of our subsequent engagements and we believe strongly in knowledge sharing..</p>
                            </CardBody>
                        </Card>
                    </div>
                </div> */}
            </div>
            <div>
                <Typography>
                    Service Advantages
                </Typography>
                <Typography>
                    Our project managers are dedicated to making sure that your product idea fulfills your desired business goals. Much like a great pilot, we want to charter your idea on a smooth product lifecycle journey that culminates in arrival at your goal destination.
                </Typography>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
                    {categories.map((category, index) => (
                        <Card key={index} className="p-4 shadow-md bg-[#E0E6F3]">
                            <CardBody>
                                <div className="flex items-center space-x-2">
                                    <i aria-hidden="true" class="fas fa-dot-circle"></i>
                                    <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                                    <span>{category}</span>
                                </div>
                            </CardBody>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SoftwareService
