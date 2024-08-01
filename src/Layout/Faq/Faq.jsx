import { Card, CardBody, CardFooter, CardHeader, Chip, Typography } from '@material-tailwind/react'
import { BiSolidHeartCircle } from 'react-icons/bi'
const Faq = () => {
    const cardDetails = [
        {
            id: 1,
            title: "Digital Marketing",
            location: "Surat, Gujarat, India",
            published: "July 30, 2024"
        },
        {
            id: 2,
            title: "Digital Marketing",
            location: "Surat, Gujarat, India",
            published: "July 30, 2024"
        },
        {
            id: 3,
            title: "Digital Marketing",
            location: "Surat, Gujarat, India",
            published: "July 30, 2024"
        },
    ]
    return (
        <div className='container'>
            <div className="grid grid-cols-3 gap-5 my-[5%] ">
                {cardDetails.map((item, index) => (
                    <Card key={index} className="mb-10 mt-5 w-70 relative">
                        <CardHeader color="blue-gray" className="relative h-56">
                            <img
                                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                                alt="card-image"
                            />
                        </CardHeader>
                        <CardBody >
                            <Typography variant="h5" color="blue-gray">
                                {item.title}
                            </Typography>
                        </CardBody>
                        <CardFooter className="pt-0 grid grid-cols-2">
                            <div className='flex flex-col justify-center self-center gap-2'>
                                <Typography>
                                    {item.location}
                                </Typography>
                                <Typography>
                                    {item.published}
                                </Typography>
                            </div>
                            <div className='flex flex-col justify-center self-center gap-2'>
                                <div className='flex justify-end'>
                                    <BiSolidHeartCircle size={32} />
                                </div>
                                <div className='flex justify-end'>
                                    <Chip value="full time" className='w-[55%] text-center' />
                                </div>
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default Faq
