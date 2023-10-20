import React from 'react'
import Section from '../common/Section'
import SectionHeading from '../common/SectionHeading'
import Image from 'next/image'

type Props = {}

export default function Technologies({ }: Props) {
    return (
        <Section id='technologies'>
            <SectionHeading>
                Tech Stack
            </SectionHeading>
            <div className='mt-15 grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 place-items-center gap-8'>
                <div className='flex flex-col justify-center'>
                    <span className='bg-gray-200 dark:bg-gray-700 md:h-24 h-20 md:w-24 w-20 rounded-full p-4 flex items-center justify-center'>
                        <Image
                            src="/icons/html5.svg"
                            alt='HTML5'
                            width={80}
                            height={80}
                        />
                    </span>
                    <p className='text-center mt-2 font-semibold'>HTML 5</p>
                </div>
                <div className='flex flex-col justify-center'>
                    <span className='bg-gray-200 dark:bg-gray-700 md:h-24 h-20 md:w-24 w-20 rounded-full p-4 flex items-center justify-center'>
                        <Image
                            src="/icons/css.svg"
                            alt='HTML5'
                            width={80}
                            height={80}
                        />
                    </span>
                    <p className='text-center mt-2 font-semibold'>CSS</p>
                </div>
                <div className='flex flex-col justify-center'>
                    <span className='bg-gray-200 dark:bg-gray-700 md:h-24 h-20 md:w-24 w-20 rounded-full p-4 flex items-center justify-center'>
                        <Image
                            src="/icons/javascript.svg"
                            alt='JavaScript'
                            width={50}
                            height={50}
                        />
                    </span>
                    <p className='text-center mt-2 font-semibold'>JavaScript</p>
                </div>
                <div className='flex flex-col justify-center'>
                    <span className='bg-gray-200 dark:bg-gray-700 md:h-24 h-20 md:w-24 w-20 rounded-full p-4 flex items-center justify-center'>
                        <Image
                            src="/icons/react.svg"
                            alt='React js'
                            width={80}
                            height={80}
                        />
                    </span>
                    <p className='text-center mt-2 font-semibold'>React js</p>
                </div>
                <div className='flex flex-col justify-center'>
                    <span className='bg-gray-200 dark:bg-gray-700 md:h-24 h-20 md:w-24 w-20 rounded-full p-4 flex items-center justify-center'>
                        <Image
                            src="/icons/sass.svg"
                            alt='Sass'
                            width={80}
                            height={80}
                        />
                    </span>
                    <p className='text-center mt-2 font-semibold'>Sass</p>
                </div>
                <div className='flex flex-col justify-center'>
                    <span className='bg-gray-200 dark:bg-gray-700 md:h-24 h-20 md:w-24 w-20 rounded-full p-4 flex items-center justify-center'>
                        <Image
                            src="/icons/typescript.svg"
                            alt='TypeScript'
                            width={50}
                            height={50}
                        />
                    </span>
                    <p className='text-center mt-2 font-semibold'>TypeScript</p>
                </div>
                <div className='flex flex-col justify-center'>
                    <span className='bg-gray-200 dark:bg-gray-700 md:h-24 h-20 md:w-24 w-20 rounded-full p-4 flex items-center justify-center'>
                        <Image
                            src="/icons/redux.svg"
                            alt='Redux'
                            width={80}
                            height={80}
                        />
                    </span>
                    <p className='text-center mt-2 font-semibold'>Redux</p>
                </div>
            </div>
        </Section>
    )
}