import { Card, CardFooter, Typography } from '@material-tailwind/react'
import React from 'react'

const LifeAtCrystal = () => {
    return (
        <div className='container'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 '>
                <div className='my-[5%]'>
                    <img src="https://4cbcd20a.rocketcdn.me/wp-content/uploads/2023/08/welcome-img-01-1024x682.jpg" className='w-full h-auto' alt="" />
                </div>
                <div className='my-[5%]'>
                    <Typography variant='h3' >Welcome to Tekpillar</Typography>
                    <Typography variant='paragraph' className='my-5'>Where we strive to create a positive and engaging work environment for our employees. Our company culture is built on the values of teamwork, collaboration, and innovation. We believe in fostering a culture of continuous learning, where every employee has the opportunity to grow and develop their skills.</Typography>
                    <Typography variant='paragraph' className='my-5'>At Tekpillar, we understand the importance of work-life balance. We offer flexible work arrangements and encourage our employees to take time off to recharge and pursue their passions outside of work. We believe that a healthy work-life balance leads to happier and more productive employees.</Typography>
                </div>
                <div className=' col-span-2 my-[5%] py-[5%]'>
                    <Typography variant='h3' className='text-center my-5'>
                        Our office space is designed to promote creativity and collaboration
                    </Typography>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                        <Card>
                            <img src="https://4cbcd20a.rocketcdn.me/wp-content/uploads/2023/08/office-creativity-img-01.jpg" className='rounded' alt="" />
                            <CardFooter>
                                <Typography>
                                    Our open office layout allows for easy communication and collaboration between teams.
                                </Typography>
                            </CardFooter>
                        </Card>
                        <Card className='flex flex-col-reverse'>
                            <img src="https://4cbcd20a.rocketcdn.me/wp-content/uploads/2023/08/breakout-space-1024x683.jpg" className='rounded' alt="" />
                            <CardFooter>
                                <Typography>
                                    Our open office layout allows for easy communication and collaboration between teams.
                                </Typography>
                            </CardFooter>
                        </Card>
                        <Card>
                            <img src="https://4cbcd20a.rocketcdn.me/wp-content/uploads/2023/08/office-creativity-img-3.jpg" className='rounded' alt="" />
                            <CardFooter>
                                <Typography>
                                    Our open office layout allows for easy communication and collaboration between teams.
                                </Typography>
                            </CardFooter>
                        </Card>
                    </div>
                </div>

                <div className='my-[5%]'>
                    <Typography variant='h3' >Diversity and Inclusivity</Typography>
                    <Typography variant='paragraph' className='my-5'>We value diversity and inclusivity at Tekpillar. We believe that a diverse and inclusive workforce leads to a more creative and innovative workplace. We are committed to creating a safe and welcoming environment for all employees, regardless of their gender, race, ethnicity, religion, or sexual orientation.</Typography>
                    <Typography variant='paragraph' className='my-5'>At Tekpillar, we also believe in giving back to our community. We participate in various philanthropic activities and encourage our employees to volunteer their time and resources to causes they are passionate about.</Typography>
                    <Typography variant='paragraph' className='my-5'>If you’re looking for a challenging and rewarding career in a dynamic and inclusive workplace, Tekpillar is the place for you. Join our team and experience life at Tekpillar.</Typography>
                </div>
                <div className='my-[5%]'>
                    <img src="https://4cbcd20a.rocketcdn.me/wp-content/uploads/2023/08/welcome-img-02-1024x683.jpg" className='w-full h-auto' alt="" />
                </div>
            </div>
        </div>
    )
}

export default LifeAtCrystal
