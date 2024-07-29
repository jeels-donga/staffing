import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react'
import React from 'react'

const Services = () => {
    const cardDetails = [
        {
            id: 1,
            title: "Relationship Manager",
            location: "At TekPillar Services, we specialize in a broad range of recruitment services to meet diverse hiring needs. ",
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
    return (
        <div>
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
        </div>
    )
}

export default Services
