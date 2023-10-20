import Image from 'next/image'
import React from 'react'

type Props = {}

export default function Timeline({ }: Props) {
    return (

        <div className='relative timeline w-full m-auto pt-5 before:content-[""] before:inline-block before:absolute before:h-[calc(100%_-_20px)] before:border-solid before:border-[1px] before:border-gray-300 before:left-5 before:md:left-1/2'>
            <div className='md:pr-10 pr-4 sm:w-[90%] w-[85%] md:w-1/2 mb-8 relative md:left-0 sm:left-[10%] left-[15%]'>
                <div className='absolute bg-gray-50 p-3 dark:bg-gray-700 rounded-full sm:-left-[11%] -left-[18%] md:left-[calc(100%_-_19px)] top-[calc(50%_-_20px)]'>
                    <div className='w-5 h-5'>
                        <Image
                            src='/icons/briefcase.svg'
                            alt='Brief Case'
                            width={20}
                            height={20}
                        />

                    </div>
                </div>
                <div className='p-4 rounded-md bg-white dark:bg-gray-900 flex'>
                    <div className='hidden xs:flex items-start justify-center mr-4'>
                        <Image
                            src='/icons/plusbooster.jpg'
                            width={40}
                            height={40}
                            alt='Plusbooster Pvt. LTD.'
                        />
                    </div>
                    <div className='flex-1'>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Plusbooster Pvt. Ltd
                        </h3>
                        <h4 className="text-md mb-1 font-medium text-gray-900 dark:text-white">
                            Front End Engineer
                        </h4>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                            March, 2021- june, 2023
                        </time>
                        <p className="text-xs text-gray-500 dark:text-white">
                            <span className='font-bold'>Skills:</span> REST APIs, JSON, GitHub, Jira, Unit Testing, Polaris, React Router dom, React i18next, Scss, API Integration, Shopify, JavaScript, React.js, Redux.js, Redux Thunk, Next.js
                        </p>
                    </div>

                </div>
            </div>
            <div className='md:pr-0 pr-4 sm:w-[90%] w-[85%] md:w-[calc(50%_-_2.5rem)] mb-8 relative md:left-[calc(50%_+_2.5rem)] sm:left-[10%] left-[15%]'>
                <div className='absolute bg-gray-50 p-3 dark:bg-gray-700 rounded-full sm:-left-[11%] -left-[18%] md:left-[calc(0%_-_60px)] top-[calc(50%_-_20px)]'>
                    <Image
                        src='/icons/briefcase.svg'
                        alt='Brief Case'
                        width={20}
                        height={20}
                    />
                </div>
                <div className='p-4 rounded-md  bg-white dark:bg-gray-900 flex'>
                    <div className='hidden xs:flex items-start justify-center mr-4'>
                        <Image
                            src='/icons/leap_logo.jpg'
                            width={40}
                            height={40}
                            alt='Plusbooster Pvt. LTD.'
                        />
                    </div>
                    <div className='flex-1'>
                        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                            Leap of Faith
                        </h3>
                        <h4 className="text-md mb-1 font-medium text-gray-900 dark:text-white">
                            React Developer | Intern
                        </h4>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                            November, 2019 - May, 2020
                        </time>
                        <p className="text-xs text-gray-500 dark:text-white">
                            <span className='font-bold'>Skills:</span>
                            React, React-Router-Dom,  JavaScript, NextJs, Bootstrap (Framework), Material-UI, E-Commerce, API Integration, HTML5, Cascading Style Sheets (CSS).
                        </p>
                    </div>
                </div>
            </div>
            {/* <div className='md:pr-10 pr-4 sm:w-[90%] w-[85%] md:w-1/2 mb-8 relative md:left-0 sm:left-[10%] left-[15%]'>
                <div className='absolute bg-gray-50 p-3 dark:bg-gray-700 rounded-full sm:-left-[11%] -left-[18%] md:left-[calc(100%_-_19px)] top-[calc(50%_-_20px)]'>
                    <svg className="w-4 h-4 text-blue-700 z-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                </div>
                <div className='p-4 rounded-md bg-white dark:bg-gray-900'>
                    <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Flowbite Figma v1.3.0</h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 7th, 2021</time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
                </div>
            </div> */}
        </div>
    )
}