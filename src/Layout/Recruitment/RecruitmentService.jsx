import { Avatar, Button, Card, CardBody, Typography } from '@material-tailwind/react';
import React from 'react';

const RecruitmentService = () => {
    const categories = [
        "Accounting", "Sales & Marketing", "Human Resources", "Engineering",
        "Call Center", "Technology", "Mortgage", "Healthcare", "Digital & Creative", "Project Management"
    ];
    return (
        <div className="container mx-auto p-4">
            <Typography variant="h2" className="text-center mb-8">
                Recruitment Services
            </Typography>
            <div className="flex justify-center mb-8">
                <img
                    src="https://4cbcd20a.rocketcdn.me/wp-content/uploads/2023/06/recruitment-services-01.jpg"
                    className="w-1/2 h-auto"
                    alt="Recruitment Services"
                />
            </div>
            <Typography variant="body1" className="mb-4">
                TekPillar is a pioneer in the IT Staff Augmentation industry. Since 2009, we’ve helped Fortune 500 and mid-size clients achieve their business goals by providing high-quality IT talent globally. We’re all about finding the right people, with the right skills, for the right job.
            </Typography>
            <Typography variant="body1" className="mb-8">
                We bridge the IT talent demand-supply gap through an innovative, best-in-class recruiting engine, backed by a dedicated client-centric service focus. The result? Over 90% of our clients rank us in their top 3 suppliers by performance.
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
                    Our contract staffing services enable you to fill short-term needs for qualified employees. Companies rely on a temporary staffing agency’s contract staffing services to support upcoming projects, meet seasonal requirements and reduce their workforce during slow periods.
                </Typography>
                <div className="flex">
                    <div className="w-1/4 p-4">
                        <div className="flex flex-col space-y-4">
                            <Button color="blue" variant="filled" className="w-full text-left">
                                Fill short-term and temporary project requirements
                            </Button>
                            <Button color="lightBlue" variant="outlined" className="w-full text-left">
                                Fill short-term and long-term project requirements
                            </Button>
                            <Button color="lightBlue" variant="outlined" className="w-full text-left">
                                Hire Skilled IT Consultant on a need-as-basis
                            </Button>
                        </div>
                    </div>
                    <div className="w-3/4 p-4">
                        <Card>
                            <CardBody>
                                <img src="https://4cbcd20a.rocketcdn.me/wp-content/uploads/2023/06/project-management-services-01-600x400.jpg" alt="Project Requirements" className="w-[50%] h-auto object-cover mb-4" />
                                <h2 className="text-xl font-semibold mb-2">Fill short-term and temporary project requirements</h2>
                                <p className="text-gray-700">Many variations of passage of Lorem Ipsum available but the majority have suffered alterations in some form injected humour, or randomised words slightly.</p>
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
                    With our proven 24/7 recruiting model, deep understanding of our client’s business areas, extensive resources and client-focused approach, TekPillar has developed strong focus teams to provide resources in various areas in the following Professional categories:
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
};

export default RecruitmentService;
