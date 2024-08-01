import { Card, CardBody, CardFooter, Typography } from '@material-tailwind/react'

const AboutUs = () => {
    return (
        <div >
            <div className='container'>
                <div className='grid grid-cols-2 my-[5%]'>
                    <div>
                        <img src="https://4cbcd20a.rocketcdn.me/wp-content/uploads/2023/06/recruitment.jpg" alt="" />
                    </div>
                    <div>
                        <Typography variant='h2' className='my-5'>TekPillar is an International Recruitment Firm</Typography>
                        <Typography variant='paragraph' className='my-5'>We provide professionally managed virtual recruiters over the globe. We help our customers to boost their recruiting productivity at low cost and letting them focus on core competencies.</Typography>
                        <Typography variant='paragraph' className='my-5'>We help our customers to skip the enormous hassle, time and cost involved in set-up, infrastructure and monitoring for sourcing and recruiting.</Typography>
                    </div>
                </div>
            </div>
            <div className='my-[5%] p-[5%] bg-[#F9F9F9]'>
                <div className='container'>
                    <Typography variant='h2' className='text-center my-5'>About Us</Typography>
                    <Typography variant='paragraph' className='text-center my-5'>TekPillar is organized recruitment services in India. TekPillar’s roots in management consulting enable us to bring a unique approach to recruitment at the middle and senior management levels</Typography>
                    <Typography variant='paragraph' className='text-center my-5'>We recruit across various industry segments for multinational corporations as well as leading Indian business.</Typography>
                    <div className='grid grid-cols-5 gap-3'>
                        <Card>
                            <CardBody>
                                <img src="https://4cbcd20a.rocketcdn.me/wp-content/uploads/2023/06/need-of-assessment-600x400.jpg" alt="" />
                                <Typography variant='h6' className='text-center mt-5'>
                                    Need of Assessment
                                </Typography>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                                <img src="https://4cbcd20a.rocketcdn.me/wp-content/uploads/2023/06/candidate-sourcing-strategy-600x400.jpg" alt="" />
                                <Typography variant='h6' className='text-center mt-5'>
                                    Candidate Sourcing Strategy
                                </Typography>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                                <img src="https://4cbcd20a.rocketcdn.me/wp-content/uploads/2023/06/interview-600x400.jpg" alt="" />
                                <Typography variant='h6' className='text-center mt-5'>
                                    Interview & Testing
                                </Typography>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                                <img src="https://4cbcd20a.rocketcdn.me/wp-content/uploads/2023/06/onboarding-600x400.jpg" alt="" />
                                <Typography variant='h6' className='text-center mt-5'>
                                    Onboarding
                                </Typography>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                                <img src="https://4cbcd20a.rocketcdn.me/wp-content/uploads/2023/06/branding-600x400.jpg" alt="" />
                                <Typography variant='h6' className='text-center mt-5'>
                                    Company Branding
                                </Typography>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
            <div className=' container'>
                <div className='grid grid-cols-2 gap-5 my-[5%]'>
                    <div>
                        <Typography variant='h5' className='my-5'>Who are we?</Typography>
                        <Typography variant='paragraph' className='my-5'>We at TekPillar are a group of aspiring individuals working hard to make our mark in the recruitment industry.</Typography>
                        <Typography variant='paragraph' className='my-5'>We are a mixed group of relatively new and experienced recruiters that helps us to balance and retain a fresh outlook towards our client`s need.</Typography>
                        <Typography variant='paragraph' className='my-5'>Our Management and senior executives collectively have decades of e-recruiting experience.</Typography>
                        <Typography variant='paragraph' className='my-5'>We have structured ourselves by harvesting their expertise and knowledge base of e-recruitment and have set ourselves high standards of success</Typography>
                        <Typography variant='paragraph' className='my-5'>The headquarters is located in Surat, India. Our team of recruiters has strict notion of etiquette to work in all time zone to provide our client best services.</Typography>
                    </div>
                    <div>
                        <img src="https://4cbcd20a.rocketcdn.me/wp-content/uploads/2023/06/who-we-are.png" alt="" />
                    </div>
                </div>
            </div>
            <div className='my-[5%] py-[5%] bg-[#F9F9F9]'>
                <div className='container'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                        <Card>
                            <img src="https://4cbcd20a.rocketcdn.me/wp-content/uploads/2023/06/vision-600x400.jpg" className='rounded' alt="" />
                            <CardFooter className='my-5'>
                                <Typography>
                                    To ease recruitment process for our valuable clients by providing potential candidates.
                                </Typography>
                            </CardFooter>
                        </Card>
                        <Card className='flex flex-col-reverse'>
                            <img src="https://4cbcd20a.rocketcdn.me/wp-content/uploads/2023/06/mission-600x400.jpg" className='rounded' alt="" />
                            <CardFooter className='my-5'>
                                <Typography>
                                    To be highly trusted brand, which provides quality candidates rapidly and boost client’s productivity.
                                </Typography>
                            </CardFooter>
                        </Card>
                        <Card>
                            <img src="https://4cbcd20a.rocketcdn.me/wp-content/uploads/2023/06/value-600x400.jpg" className='rounded' alt="" />
                            <CardFooter className='my-5'>
                                <Typography>
                                    Integrity
                                </Typography>
                                <Typography>
                                    Discipline
                                </Typography>
                                <Typography>
                                    Ethics
                                </Typography>
                                <Typography>
                                    Trust
                                </Typography>
                                <Typography>
                                    Commitment
                                </Typography>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
            <div className='my-[5%] container'>
                <Typography variant='h2' className='text-center'>
                    Why us?
                </Typography>
                <div className='grid grid-cols-2 gap-5'>
                    <Card>
                        <CardBody>
                            <img src="" alt="" />
                            <Typography variant='h6' className='my-5'>Stronger Quality of Hire</Typography>
                            <Typography variant='paragraph' className='my-5'>We invest our time and resources into sourcing, screening and present the cream of crop in terms of available candidates to the client.</Typography>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                            <img src="" alt="" />
                            <Typography variant='h6' className='my-5'>Shorten Time to Hire</Typography>
                            <Typography variant='paragraph' className='my-5'>Reduces your time-to-hire by over 40 percent and increase organization’s productivity.</Typography>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                            <img src="" alt="" />
                            <Typography variant='h6' className='my-5'>Cost Reduction and No Need of Direct Advertising</Typography>
                            <Typography variant='paragraph' className='my-5'>One of our primary objective is to make your recruitment cost effective. We provide ultimately measured on time hire, cost of hire and quality of hire. We help you to cut down your direct advertising cost. We have all the necessary resources for tracking the strongest available candidate</Typography>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                            <img src="" alt="" />
                            <Typography variant='h6' className='my-5'>Branding Your Company</Typography>
                            <Typography variant="paragraph" className='my-5'>We along with finding the potential candidate, we help you build your employer branding to attract Top notch talent.</Typography>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className='my-[5%] py-[5%] bg-[#F9F9F9]'>
                <div className='container'>
                    <Typography variant='h2' className='text-center my-5'>Our Selection Tools</Typography>
                    <div className='grid grid-cols-5 gap-5'>
                        <div>
                            <div>
                                <img src="https://4cbcd20a.rocketcdn.me/wp-content/uploads/2023/06/internal-data.png" alt="" />
                            </div>
                            <div>
                                <Typography variant='h6' className='my-5 text-center'>Internal Data</Typography>
                                <Typography variant='paragraph' className='my-5 text-center'>Internal DataWe have excellent network, abundant data of job seekers of various categories with experiences in different industries.</Typography>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src="https://4cbcd20a.rocketcdn.me/wp-content/uploads/2023/06/advertising.png" alt="" />
                            </div>
                            <div>
                                <Typography variant='h6' className='my-5 text-center'>Head Hunting</Typography>
                                <Typography variant='paragraph' className='my-5 text-center'>Strictly followed outside the network of our clients.</Typography>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src="https://4cbcd20a.rocketcdn.me/wp-content/uploads/2023/06/head-hunting.png" alt="" />
                            </div>
                            <div>
                                <Typography variant='h6' className='my-5 text-center'>Advertising</Typography>
                                <Typography variant='paragraph' className='my-5 text-center'>We advertise on behalf of our Client to reach out to the mass.</Typography>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src="https://4cbcd20a.rocketcdn.me/wp-content/uploads/2023/06/training.png" alt="" />
                            </div>
                            <div>
                                <Typography variant='h6' className='my-5 text-center'>Training</Typography>
                                <Typography variant='paragraph' className='my-5 text-center'>We have a team of trainers with expertise in various fields</Typography>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src="https://4cbcd20a.rocketcdn.me/wp-content/uploads/2023/06/campus-recruitnents.png" alt="" />
                            </div>
                            <div>
                                <Typography variant='h6' className='my-5 text-center'>Campus Recruitnents</Typography>
                                <Typography variant='paragraph' className='my-5 text-center'>We also undertake the campus recruitments to source the finest talent.</Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <div className='container my-[5%]'>
                <Typography variant='h2' className='text-center my-5'>Industries we are working with</Typography>
                <div>
                    <Typography variant='h6' className='text-center my-5'>Industries</Typography>
                </div>
                <div className='grid grid-cols-5'>
                    <div>
                        <div></div>
                        <Typography variant='h6' className='text-center my-5'>Information Technology</Typography>
                    </div>
                    <div>
                        <div></div>
                        <Typography variant='h6' className='text-center my-5'>Banking</Typography>
                    </div>
                    <div>
                        <div></div>
                        <Typography variant='h6' className='text-center my-5'>Insurance</Typography>
                    </div>
                    <div>
                        <div></div>
                        <Typography variant='h6' className='text-center my-5'>Securities</Typography>
                    </div>
                    <div>
                        <div></div>
                        <Typography variant='h6' className='text-center my-5'>Finance</Typography>
                    </div>
                </div>
            </div>
            <div className='my-[5%] py-[5%]'>
                <div className=' container grid grid-cols-2 gap-5'>
                    <div>
                        <Typography variant='h2' className='my-5'>Our Work</Typography>
                        <Card className='mb-5'>
                            <CardBody>
                                <Typography variant='h6' className='my-5'>100+</Typography>
                                <Typography variant='paragraph' className='my-5'>Number of Clients</Typography>
                            </CardBody>
                        </Card>
                        <Card className='my-5'>
                            <CardBody>
                                <Typography variant='h6' className='my-5'>3,000
                                    +</Typography>
                                <Typography variant='paragraph' className='my-5'>Candidate Placed Worldwide and still counting</Typography>
                            </CardBody>
                        </Card>
                        <Card className='my-5'>
                            <CardBody>
                                <Typography variant='h6' className='my-5'>5
                                    +</Typography>
                                <Typography variant='paragraph' className='my-5'>Providing Services across the globe (USA, UK, India & European countries)</Typography>
                            </CardBody>
                        </Card>
                    </div>
                    <div>
                        <img src="https://4cbcd20a.rocketcdn.me/wp-content/uploads/2023/06/work-img.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AboutUs
