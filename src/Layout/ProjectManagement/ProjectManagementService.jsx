import { Avatar, Button, Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';
import React, { useState } from 'react';

const ProjectManagementService = () => {
    const categories = [
        "We assemble the crew", "We map the route", "We fly your plane", "We check in regularly",
        "We manage emergencies", "We keep our eyes on the destination"
    ];
    const [activeCard, setActiveCard] = useState(0);
    const [mainContent, setMainContent] = useState({
        title: "TekPillar Express",
        description: "This in-house framework is based on both Agile (Scrum+Kanban) and classic (RUP, CMMI, PMBOK) processes that cover the entire product lifecycle.",
        time: "Short-term"
    });

    const sideCards = [
        {
            title: "Fill short-term and temporary project requirements",
            description: "This in-house framework is based on both Agile (Scrum+Kanban) and classic (RUP, CMMI, PMBOK) processes that cover the entire product lifecycle.",
            time: "Short-term"
        },
        {
            title: "Kaizen",
            description: "Constant improvement",
            time: "Short to Long-term"
        },
        {
            title: "Lean & Simple",
            description: "We iterate and learn as we go because we understand complexity always arises.",
            time: "As needed"
        },
        {
            title: "Evolving",
            description: "Our process is flexible and constantly adapting to support innovation. Continuous management throughout all project stages Our Project Management process starts early on and drives the following actions: Shaping SOW Knowledge Transfer Assembling of Engineering, QA and Design Teams",
            time: "As needed"
        }
    ];

    const handleCardClick = (index) => {
        setActiveCard(index);
        setMainContent(sideCards[index]);
    };
    return (
        <div className="container mx-auto p-4">
            <Typography variant="h2" className="text-center mb-8">
                Project Management Services
            </Typography>
            <div className="flex justify-center mb-8">
                <img
                    src="https://4cbcd20a.rocketcdn.me/wp-content/uploads/2023/06/project-management-services-01.jpg"
                    className="w-1/2 h-auto"
                    alt="Recruitment Services"
                />
            </div>
            <Typography variant="body1" className="mb-4">
                At TekPillar we know all too well that new product development can be chaotic and at times, impossible to navigate. This is why it is crucial that a clear structure and process is implemented to keep us on track and ensure that the product is brought to market as quickly as possible
            </Typography>
            <Typography variant="body1" className="mb-8">
                For clients that wish to continue to be deeply involved in daily operations, our project management services still bring tremendous value to the project by ensuring the adoption of best practices, a clear and uninterrupted information flow, and clearly defined and achievable goals.
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
                    Finding You The Leaders Of Tomorrow
                </Typography>
                <Typography variant='paragraph'>
                    Our project management team has 300+ successful projects under their belt and is always looking to increase that number. The team acts as a turnkey solution provider that takes responsibility for all project-related activities including project inception, design, implementation, QA, deployment, and all subsequent product support.
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
                                src="https://4cbcd20a.rocketcdn.me/wp-content/uploads/2023/06/project-management-services-01-600x400.jpg"
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

export default ProjectManagementService
