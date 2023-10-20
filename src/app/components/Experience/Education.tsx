import Image from 'next/image'
import React from 'react'

type Props = {}

export default function Education({ }: Props) {
    return (
        <div className='relative timeline w-full m-auto pt-5 before:content-[""] before:inline-block before:absolute before:h-[calc(100%_-_20px)] before:border-solid before:border-[1px] before:border-gray-300 before:left-5 before:md:left-1/2'>
            <div className='md:pr-10 pr-4 sm:w-[90%] w-[85%] md:w-1/2 mb-8 relative md:left-0 sm:left-[10%] left-[15%]'>
                <div className='absolute bg-gray-50 p-3 dark:bg-gray-700 rounded-full sm:-left-[11%] -left-[18%] md:left-[calc(100%_-_19px)] top-[calc(50%_-_20px)]'>

                    <div className='w-6 h-6'>
                        <Image
                            src='/icons/degree.svg'
                            alt='Brief Case'
                            width={24}
                            height={24}
                        />

                    </div>
                </div>
                <div className='p-4 rounded-md bg-white dark:bg-gray-900 flex'>
                    <div className='hidden xs:flex items-start justify-center mr-4'>
                        <Image
                            src='/icons/mrsptu.jpg'
                            width={40}
                            height={40}
                            alt='Maharaja Ranjit Singh Punjab Technical University'
                        />
                    </div>
                    <div className='flex-1'>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Maharaja Ranjit Singh Punjab Technical University
                        </h3>
                        <h4 className="text-md mb-1 font-medium text-gray-900 dark:text-white">
                            Msc. Information Technology
                        </h4>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 ark:text-gray-500">
                            May, 2017- june, 2019
                        </time>
                    </div>

                </div>
            </div>
            <div className='md:pr-0 pr-4 sm:w-[90%] w-[85%] md:w-[calc(50%_-_2.5rem)] mb-8 relative md:left-[calc(50%_+_2.5rem)] sm:left-[10%] left-[15%]'>
                <div className='absolute bg-gray-50 p-3 dark:bg-gray-700 rounded-full sm:-left-[11%] -left-[18%] md:left-[calc(0%_-_60px)] top-[calc(50%_-_20px)]'>
                    <div className='w-6 h-6'>
                        <Image
                            src='/icons/degree.svg'
                            alt='Brief Case'
                            width={24}
                            height={24}
                        />

                    </div>
                </div>
                <div className='p-4 rounded-md  bg-white dark:bg-gray-900 flex'>
                    <div className='hidden xs:flex items-start justify-center mr-4'>
                        <Image
                            src='/icons/mata_gujri_college_fatehgarh_sahib_logo.jpg'
                            width={40}
                            height={40}
                            alt='Mata Gujri College, Fatehgarh Sahib'
                        />
                    </div>
                    <div className='flex-1'>
                        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                            Mata Gujri College, Fatehgarh Sahib
                        </h3>
                        <h4 className="text-md mb-1 font-medium text-gray-900 dark:text-white">
                            B.sc Computer Science
                        </h4>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                            May, 2009 - June, 2014
                        </time>
                    </div>
                </div>
            </div>
        </div>
    )
}