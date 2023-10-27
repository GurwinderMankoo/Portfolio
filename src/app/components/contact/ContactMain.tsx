import React from 'react'
import Section from '../common/Section'
import SectionHeading from '../common/SectionHeading'
import Image from 'next/image'
import Gmail from '../common/icons/Gmail'
import LinkedIn from '../common/icons/LinkedIn'
import Telephone from '../common/icons/Telephone'
import CustomForm from './CustomForm'

type Props = {}

export default function ContactMain({ }: Props) {

    return (
        <Section id='contact' data-section>
            <div className='mt-10 pb-20'>
                <div>
                    <SectionHeading>
                        Contact Me
                    </SectionHeading>
                    <div className=''>
                        <div className="block w-full dark:shadow-[0_0px_3px_2px_rgba(255,255,255,0.1)] bg-white border border-gray-200 shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <div className='flex w-full h-full'>
                                <div style={{ backgroundSize: "80%" }} className="md:block hidden p-6 min-h-[50vh] image-section bg-gray-100 dark:bg-gray-500 flex-1 bg-[url('/contact-us.png')] bg-no-repeat bg-center"></div>
                                {/* <div className="relative p-6 min-h-[50vh] contact-info md:bg-gray-300 dark:bg-gray-800 flex-1 md:bg-none bg-[url('/contact-us.png')] bg-no-repeat bg-center overflow-hidden"> */}
                                <div className="relative p-6 min-h-[50vh] contact-info bg-gray-300 dark:bg-gray-800 flex-1 overflow-hidden">
                                    {/* <div className='md:hidden block absolute top-0 left-0 right-0 bottom-0 backdrop-blur-md backdrop-brightness-90 dark:backdrop-brightness-50 z-10'></div> */}
                                    {/* <h4 className='font-bold text center relative z-30'>
                                        Contact Info
                                    </h4> */}
                                    <CustomForm />
                                    {/* <ul className='flex py-6 h-full flex-col justify-between relative z-30'>
                                        <li className='flex items-center'>
                                            <span className='w-5 h-5 mr-3'>
                                                <Gmail width={20} height={20} />
                                            </span>
                                            <a className='font-bold' href='mailto:gurwinderinuk@gmail.com'>gurwinderinuk@gmail.com</a>
                                        </li>
                                        <li className='flex items-center'>
                                            <span className='w-5 h-5 mr-3'>
                                                <LinkedIn width={20} height={20} />
                                            </span>
                                            <a className='font-bold' href='http://linkedin.com/in/gurwinder-singh-883956182' target='_black'>linkedin.com/in/gurwinder-singh-883956182</a>
                                        </li>
                                        <li className='flex items-center'>
                                            <span className='w-5 h-5 mr-3'>
                                                <Telephone width={20} height={20} />
                                            </span>
                                            <p className='font-bold'>+447435160562</p>
                                        </li> 
                                    </ul> */}
                                </div>
                            </div>
                            {/* <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}