import { Button, Card, CardBody, CardFooter, CardHeader, Checkbox, Chip, Input, Option, Select, Typography } from '@material-tailwind/react'
import React from 'react'
import { BiSolidHeartCircle } from 'react-icons/bi'
import { IoSearch } from 'react-icons/io5'

const Jobs = () => {
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
        <div className="container mx-auto p-4">
            <div className="my-10">
                <Card className="grid grid-cols-4 p-3 gap-3">
                    <Input
                        variant="standard" label="Job Title, Keywords, or Phrase" placeholder="Job Title, Keywords, or Phrase"
                    />
                    <Input
                        variant="standard" label="City, State, or ZIP" placeholder="City, State, or ZIP"
                    />
                    <Select variant="standard" label="Select Sector">
                        <Option>Material Tailwind HTML</Option>
                        <Option>Material Tailwind React</Option>
                        <Option>Material Tailwind Vue</Option>
                        <Option>Material Tailwind Angular</Option>
                        <Option>Material Tailwind Svelte</Option>
                    </Select>
                    <Button className='flex justify-center self-center text-sm'>
                        Search
                    </Button>
                </Card>
            </div>
            <div className="my-10">
                <div className="grid grid-cols-3 gap-5">
                    <div className="lg:col-span-1">
                        <Card className=" p-4 ">
                            <Typography variant='h3' className="text-xl font-semibold my-4">Email Me New Jobs</Typography>
                            <div className='my-1'>
                                <Input variant="standard" label="Job alert name..." />
                            </div>
                            <div className='my-1'>
                                <Input variant="standard" label="example@email.com" />
                            </div>
                            <div className="my-4">
                                <label className="block mb-2">Frequency</label>
                                <Checkbox id="daily" label="Daily" defaultChecked />
                                <Checkbox id="weekly" label="Weekly" />
                                <Checkbox id="monthly" label="Monthly" />
                                <Checkbox id="annually" label="Annually" />
                                <Checkbox id="never" label="Never" />
                            </div>
                            <Button variant="gradient" fullWidth>
                                Create Alert
                            </Button>
                        </Card>
                        <Card className=" p-4  my-[5%]">
                            <Typography variant='h3' className="text-xl font-semibold my-4">Location</Typography>
                            <div className="my-2">
                                <Select variant="standard" label="Country">
                                    <Option>Material Tailwind HTML</Option>
                                    <Option>Material Tailwind React</Option>
                                    <Option>Material Tailwind Vue</Option>
                                    <Option>Material Tailwind Angular</Option>
                                    <Option>Material Tailwind Svelte</Option>
                                </Select>
                            </div>
                            <div className="my-2">
                                <Select variant="standard" label="State">
                                    <Option>Material Tailwind HTML</Option>
                                    <Option>Material Tailwind React</Option>
                                    <Option>Material Tailwind Vue</Option>
                                    <Option>Material Tailwind Angular</Option>
                                    <Option>Material Tailwind Svelte</Option>
                                </Select>
                            </div>
                            <div className="my-2">
                                <Select variant="standard" label="city">
                                    <Option>Material Tailwind HTML</Option>
                                    <Option>Material Tailwind React</Option>
                                    <Option>Material Tailwind Vue</Option>
                                    <Option>Material Tailwind Angular</Option>
                                    <Option>Material Tailwind Svelte</Option>
                                </Select>
                            </div>

                            <Button variant="gradient" fullWidth>
                                Submit

                            </Button>
                        </Card>
                        <Card className=" p-4  my-[5%]">
                            <Typography variant='h3' className="text-xl font-semibold my-4">Job Type</Typography>
                            <div className="my-2">
                                <Checkbox id="weekly" label="freelancer" />
                            </div>
                            <div className="my-2">
                                <Checkbox id="weekly" label="Full Time" />
                            </div>
                            <div className="my-2">
                                <Checkbox id="weekly" label="Part Time" />
                            </div>
                            <div className="my-2">
                                <Checkbox id="weekly" label="Tempory" />
                            </div>
                        </Card>
                    </div>
                    <div className="col-span-2">
                        <div className="grid grid-cols-3 gap-3 items-center p-4 bg-white rounded-md shadow-md">
                            <div>
                                <p className="text-lg font-semibold">2329 Jobs Found</p>
                                <p className="text-sm text-gray-500">Displayed Here: 1 - 15 Jobs</p>
                            </div>
                            <div className="flex ">
                                <Select variant="outlined" label="Sort by:">
                                    <Option>30</Option>
                                    <Option>30</Option>
                                </Select>
                            </div>
                            <div className="flex  ">
                                <Select variant="outlined" label="Records Per Page">
                                    <Option>30</Option>
                                    <Option>30</Option>
                                </Select>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-5 my-[5%] ">
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
                </div>
            </div>
        </div >
    )
}

export default Jobs
