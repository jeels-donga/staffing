import React from 'react'

const SoftwareService = () => {
    const categories = [
        "Product management", "Web UX & Design", "Software architecture", "E-commerce",
        "Operations", "Front-end development", "Back-end development", "Cloud & big data management", "Social software integration", "Search engine optimization"
    ];
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
                <div className="flex">
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

export default SoftwareService
