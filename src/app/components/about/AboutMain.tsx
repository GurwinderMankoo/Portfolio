import React from 'react'
import Section from '../common/Section'
import SectionHeading from '../common/SectionHeading'
import Image from 'next/image'
import DownloadIcon from '../common/DownloadIcon'

type Props = {}

export default function AboutMain({ }: Props) {
    return (
        <Section id='about'>
            <SectionHeading>
                About Me
            </SectionHeading>
            <div className='flex md:justify-between justify-center flex-col md:flex-row'>
                <div className='md:w-1/4 w-full'>
                    <Image
                        src="/profile.jpg"
                        alt='My Pic'
                        width={300}
                        height={400}
                        className='rounded-md shadow-md m-auto md:mb-0 md-5'
                    />
                </div>
                <div className='md:w-4/6 w-full text-center md:text-left mt-5 md:mt-0'>
                    <h2 className='text-xl md:text-4xl font-bold'>Gurwinder Singh</h2>
                    <p className='mt-2 p-2 inline-block font-semibold text-blue-700 bg-blue-200 rounded-md dark:bg-gray-700 '>Front-End Engineer</p>
                    <p className='mt-5 text-justify'>
                        Greetings, I'm Gurwinder Singh, a seasoned frontend developer with over two years of hands-on experience. My professional journey has been marked by the successful creation and enhancement of various web applications and websites. Proficient in an array of libraries—including ReactJs, NextJs, React-Router-Dom, React-Redux with Thunk middleware, Bootstrap, Material UI, Axios, Shopify-Appbridge, Polaris—I bring a wealth of technical expertise to the table.
                    </p>
                    <p className='mt-5 text-justify'>
                        My work reflects a profound understanding of the React ecosystem, showcasing not only my proficiency in utilizing these tools but also a commitment to delivering polished and efficient solutions. Through my dedication to staying abreast of industry trends and my passion for creating seamless user experiences, I continue to contribute meaningfully to the dynamic world of frontend development
                    </p>
                    <a className='w-fit py-2 px-4 hover:translate-y-[2px] transition-all rounded-md mt-3 bg-blue-700 text-white flex items-center m-auto md:ml-0' href="/resume.docx" download>
                        <span>
                            Resume
                        </span>
                        <span className='ml-2'>
                            <DownloadIcon
                                fill='#fff'
                                width='15px'
                                height='15px'
                            />
                        </span>
                    </a>
                </div>
            </div>
        </Section>
    )
}