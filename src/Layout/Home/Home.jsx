import { Button, Card, CardBody, CardFooter, CardHeader, Input, Typography } from '@material-tailwind/react';
import React from 'react';

const Home = () => {
    const cardDetails = [
        {
            id: 1,
            title: "Relationship Manager",
            location: "Jaipur, India",
            published: "Published 3 min ago"
        },
        {
            id: 2,
            title: "Senior Sales Officer",
            location: "Chennai, India ",
            published: "Published 3 min ago"
        },
        {
            id: 3,
            title: "Senior Sales Officer ",
            location: "Chennai, India ",
            published: "Published 3 min ago"
        },
    ]
    const Blog = [
        {
            id: 1,
            title: "Top 10 Questions must ask to ChatGPT as...",
            description: "As a recruitment specialist, Chat GPT can be a valuable tool to help streamline your recruiting process and improve your…",
            published: "APRIL 28, 2023Recruitment"
        },
        {
            id: 2,
            title: "How ChatGPT is useful to a Recruiter?",
            description: "Recruiting can be a challenging task for any organization. It involves finding the right candidate with the right skills, experience,…",
            published: "APRIL 28, 2023Recruitment"
        },
        {
            id: 3,
            title: "17 Questions About You and Your Goals that...",
            description: "Another crucial aspect of an interview? Getting to know a candidate. That’s why you’ll likely encounter questions about how you…",
            published: "APRIL 28, 2023Recruitment"
        },
    ]
    return (
        <>
            <div className="relative bg-black">
                <div className="bg-[url('https://91hr.in/wp-content/uploads/2022/11/recruitment_845x810.jpg')] h-[399px] opacity-40 bg-no-repeat bg-cover z-0">
                </div>

                <div className=' absolute container  top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] '>
                    <Typography variant='h6' color='white' className=''>
                        Looking for a job?
                    </Typography>
                    <Typography variant='h2' color='white' className='mt-5'>
                        We're here to get you Hired.
                    </Typography>
                    <Typography variant='h4' color='white' className='my-1'>
                        Helping You Unleash Your True Potential
                    </Typography>
                    <Typography variant='h5' color='white' className='mt-5 mb-3'>
                        Helping You Unleash Your True Potential
                    </Typography>
                    <div className='flex gap-5 justify-center max-w-screen-sm'>
                        <Input label='Job Title, Keywords, or Phrase' className='bg-white' />
                        <Input label='Location' className='bg-white' />
                        <Button>Find</Button>
                    </div>
                </div>
            </div>

            <div className='my-[5%]'>
                <Typography variant='h3' color='black' className='mt-5 text-center mb-3'>
                    Recommend Jobs
                </Typography>
                <Typography variant='paragraph' color='black' className='mt-2 text-center mb-3'>
                    We'll help you find it. We're your first step to becoming everything you want to be.
                </Typography>
                <div className='my-5'>
                    <div className=' container grid grid-col-1 sm:grid-col-2 md:grid-cols-3'>
                        {cardDetails.map((item, index) => (
                            <Card key={index} className="mt-6 w-96 relative">
                                <CardHeader color="blue-gray" className="relative h-56">
                                    <img
                                        src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                                        alt="card-image"
                                    />
                                </CardHeader>
                                <CardBody className='mb-5'>
                                    <Typography variant="h5" color="blue-gray" className="mb-2">
                                        {item.title}
                                    </Typography>
                                    <Typography>
                                        {item.published}
                                    </Typography>
                                    <Typography>
                                        {item.published}
                                    </Typography>
                                </CardBody>
                                <CardFooter className="pt-0 absolute -bottom-[12%] left-[50%] transform -translate-x-[50%]">
                                    <Button>Read More</Button>
                                </CardFooter>
                            </Card>
                        ))}

                    </div>
                </div>
            </div>
            <div className='my-[5%] py-[5%] bg-[#07899D]'>
                <div className='container'>
                    <Typography variant='h6' color='white' className='text-center my-3'>TEAM BEHIND US</Typography>
                    <Typography variant='h1' color='white' className='text-center my-5'>Our Experience & Team</Typography>
                    <Typography variant='paragraph' color='white' className='text-center my-5'>We offer customized human resources support, and placement consultancy services while working closely with you.
                        91HR is well-equipped to offer Human Resources consulting customers at both a strategy and execution level. We genuinely relish taking on new challenges and serving as your go-to resource for people management.
                        75+
                        CLIENTS SERVED
                        1500
                        CANDIDATES PLACED
                        20k
                    </Typography>
                    <div className='grid grid-cols-1 md:grid-cols-3 bg-white border rounded'>
                        <div className='grid grid-cols-2  p-[5%]'>
                            <div className='flex justify-center self-center '>
                                <Typography variant='h1' className='text-[#00495F]'>
                                    75+
                                </Typography>
                            </div>
                            <div className='flex justify-center self-center'>
                                <Typography variant='h6'  >
                                    CLIENTS SERVED
                                </Typography>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 border p-[5%]'>
                            <div className='flex justify-center self-center'>
                                <Typography variant='h1' className='text-[#00495F]'>
                                    1500
                                </Typography>
                            </div>
                            <div className='flex justify-center self-center'>
                                <Typography variant='h6' >
                                    CANDIDATES PLACED
                                </Typography>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 border p-[5%]'>
                            <div className='flex justify-center self-center'>
                                <Typography variant='h1' className='text-[#00495F]'>
                                    20k
                                </Typography>
                            </div>
                            <div className='flex justify-center self-center'>
                                <Typography variant='h6' >
                                    CANDIDATES DATA
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-[5%] py-[5%] ">
                <div className="container">
                    <Typography variant="h6" color="black" className="text-center my-3">
                        BENEFITS OF TEKPILLAR
                    </Typography>
                    <Typography variant="h1" color="black" className="text-center mt-3">
                        Reason for Choosing Us
                    </Typography>
                    <Typography variant="body1" color="black" className="text-center mt-1 mb-5">
                        Obligations of business it will frequently occur that pleasures have to be repudiated & annoyances accepted.
                    </Typography>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                        <Card className="mt-6 w-full relative">
                            <CardHeader color="blue-gray" className="relative h-auto">
                                <img
                                    src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                                    alt="card-image"
                                />
                            </CardHeader>
                            <CardBody className="mb-5">
                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                    Stronger Quality of Hire
                                </Typography>
                                <Typography>
                                    We invest our time and resources into sourcing, screening and presenting the cream of the crop in terms of available candidates to the client.
                                </Typography>
                            </CardBody>
                        </Card>
                        <Card className="mt-6 w-full relative">
                            <CardHeader color="blue-gray" className="relative h-auto">
                                <img
                                    src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                                    alt="card-image"
                                />
                            </CardHeader>
                            <CardBody className="mb-5">
                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                    Shorten Time to Hire
                                </Typography>
                                <Typography>
                                    Reduces your time-to-hire by over 40 percent and increases the organization's productivity.
                                </Typography>
                            </CardBody>
                        </Card>
                        <Card className="mt-6 w-full relative">
                            <CardHeader color="blue-gray" className="relative h-auto">
                                <img
                                    src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                                    alt="card-image"
                                />
                            </CardHeader>
                            <CardBody className="mb-5">
                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                    Cost Reduction and No Need for Direct Advertising
                                </Typography>
                                <Typography>
                                    One of our primary objectives is to make your recruitment cost-effective. We provide ultimately measured on time hire, cost of hire, and quality of hire.
                                </Typography>
                            </CardBody>
                        </Card>
                        <Card className="mt-6 w-full relative">
                            <CardHeader color="blue-gray" className="relative h-auto">
                                <img
                                    src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                                    alt="card-image"
                                />
                            </CardHeader>
                            <CardBody className="mb-5">
                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                    Branding Your Company
                                </Typography>
                                <Typography>
                                    We along with finding the potential candidate, we help you build your employer branding to attract Top notch talent.
                                </Typography>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div >
            <div className="relative bg-black">
                <div className="bg-[url('https://tekpillar.com/wp-content/uploads/2022/12/home_contact_banner.jpg')] h-[399px] opacity-40 bg-no-repeat bg-cover z-0">
                </div>
                <div className=' absolute container  top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] '>
                    <Typography variant='h2' color='white' className='mt-5'>
                        Start your Career Today by Contact us Now!
                    </Typography>
                    <Typography variant='h4' color='white' className='my-1'>
                        Click on below button to contact directly.
                    </Typography>
                    <Button>Contact Us</Button>
                </div>
            </div>
            <div className='by-[5%] py-[5%] bg-[#E0E6F3]'>
                <div className='container'>
                    <Typography variant='h6' color='black' className='text-center mt-3'>HOW WE WORK</Typography>
                    <Typography variant='h1' className='text-center mb-5 text-[#033396]'>Our Plan & Working Style</Typography>
                    <div className='grid grid-cols-1 md:grid-cols-3  gap-3 rounded'>
                        <Card className=' bg-[#033396]  p-[5%]'>
                            <Typography variant='h6' color='white'>
                                Step
                            </Typography>
                            <Typography variant='h3' className='text-[#839ACC]'>
                                1
                            </Typography>
                            <Typography variant='h6' color='white'>
                                Requirement Analysis
                            </Typography>
                        </Card>
                        <Card className=' bg-[#033396]  p-[5%]'>
                            <Typography variant='h6' color='white'>
                                Step
                            </Typography>
                            <Typography variant='h3' className='text-[#839ACC]'>
                                2
                            </Typography>
                            <Typography variant='h6' color='white'>
                                Sourcing & Job Posting
                            </Typography>
                        </Card>
                        <Card className=' bg-[#033396]  p-[5%]'>
                            <Typography variant='h6' color='white'>
                                Step
                            </Typography>
                            <Typography variant='h3' className='text-[#839ACC]'>
                                3
                            </Typography>
                            <Typography variant='h6' color='white'>
                                Application Screening & Scheduling
                            </Typography>
                        </Card>
                        <Card className=' bg-[#033396]  p-[5%]'>
                            <Typography variant='h6' color='white'>
                                Step
                            </Typography>
                            <Typography variant='h3' className='text-[#839ACC]'>
                                4
                            </Typography>
                            <Typography variant='h6' color='white'>
                                Interviewing & Follow up
                            </Typography>
                        </Card>
                        <Card className=' bg-[#033396]  p-[5%]'>
                            <Typography variant='h6' color='white'>
                                Step
                            </Typography>
                            <Typography variant='h3' className='text-[#839ACC]'>
                                5
                            </Typography>
                            <Typography variant='h6' color='white'>
                                Employee on-boarding & Checklist
                            </Typography>
                        </Card>
                        <Card className=' bg-[#033396]  p-[5%]'>
                            <Typography variant='h6' color='white'>
                                Step
                            </Typography>
                            <Typography variant='h3' className='text-[#839ACC]'>
                                6
                            </Typography>
                            <Typography variant='h6' color='white'>
                                Take Care of Employee’s Benefits
                            </Typography>
                        </Card>
                    </div>
                </div>
            </div>
            <div className='my-[5%]'>
                <Typography variant='h3' className='mt-5 text-center mb-3 text-[#2477BF]'>
                    Latest Blogs
                </Typography>
                <Typography variant='paragraph' color='black' className='mt-2 text-center mb-3'>
                    We'll help you find it. We're your first step to becoming everything you want to be.
                </Typography>
                <div className='my-5'>
                    <div className=' container grid grid-col-1 sm:grid-col-2 md:grid-cols-3'>
                        {Blog.map((item, index) => (
                            <Card key={index} className="mt-6 w-96 relative">
                                <CardHeader color="blue-gray" className="relative h-56">
                                    <img
                                        src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                                        alt="card-image"
                                    />
                                </CardHeader>
                                <CardBody className='mb-5'>
                                    <Typography variant='small'>
                                        {item.published}
                                    </Typography>
                                    <Typography variant="h5" color="blue-gray" className="mb-2">
                                        {item.title}
                                    </Typography>
                                    <Typography variant='paragraph'>
                                        {item.description}
                                    </Typography>

                                </CardBody>
                                <CardFooter className="pt-0 absolute -bottom-[12%] left-[50%] transform -translate-x-[50%]">
                                    <Button>Read More</Button>
                                </CardFooter>
                            </Card>
                        ))}

                    </div>
                </div>
            </div>

        </>
    );
};

export default Home;
