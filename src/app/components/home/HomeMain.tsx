import Image from 'next/image'
import React from 'react'
import Layout from '../common/Layout'
import Typwriter from '../typewriter'

type Props = {}

export default function HomeMain({ }: Props) {
    return (
        <section className="z-10 w-full h-screen relative flex justify-center items-center">
            <Layout>
                <div className='flex items-center w-full h-screen justify-center flex-col-reverse md:flex-row'>
                    <div className='max-w-screen-lg mb-2'>
                        <div className="text-center md:text-left before:absolute before:h-[150px] md:before:h-[300px] before:-translate-y-1/3 before:z-[-1]  before:w-[280px] md:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 before:lg:h-[360px]">
                            <h5 className='xl:text-6xl lg:text-5xl sm:text-4xl w-full mt-6 md:mt-0 font-extrabold text-black dark:text-white'>
                                <img src='/waving-hand.gif' alt='Hi!!' className='w-10 h-10' />
                                Hey! I'M
                                <h2 className='text-blue-700'>
                                    Gurwinder Singh
                                </h2>
                            </h5>
                            {/* <h4>Web Developer / Designer / Creative Enthusiast</h4> */}
                            {/* <h4>Web Developer</h4> */}
                            <Typwriter
                                keywords={['A Web Developer', "A Front Engineer", "A Creative Enthusiast"]}
                            />
                        </div>
                    </div>
                    <div className='md:w-1/4  mb-2'>
                        <div className="w-64 h-64 mt-12 md:mt-0 flex items-center justify-center overflow-hidden p-7 rounded-full ring-4 ring-gray-300 dark:ring-gray-500 after:absolute after:-z-20 after:h-[180px] after:w-[240px] md:after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40">
                            <Image
                                // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                className="relative -mb-8"
                                src="/profile-pic.png"
                                alt="Next.js Logo"
                                width={180}
                                height={37}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </Layout>
        </section>
    )
}