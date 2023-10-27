import React from 'react'
// import Gmail from '../common/icons/Gmail'
// import LinkedIn from '../common/icons/LinkedIn'
import Image from 'next/image'
import Mobile from './Mobile'

type Props = {}

export default function FooterMain({ }: Props) {


    return (

        <footer className=" max-w-screen-lg pl-4 pt-2 pr-4 m-auto">
            <div className="border-t-2 border-gray-200 dark:border-gray-400 w-full mx-auto max-w-screen-xl py-4 flex items-center sm:justify-between flex-col sm:flex-row justify-center">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a role='button' className="hover:underline">Gurwinder</a>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-start mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">

                    <li className='py-2 flex items-center'>
                        <a
                            className='mr-3 w-10 h-10 cursor-pointer flex justify-center items-center bg-gray-200 dark:bg-gray-700 p-2 rounded-full'
                            href='mailto:gurwinderinuk@gmail.com'
                            title='gurwinderinuk@gmail.com'
                        >
                            <Image
                                src='/icons/gmail-new.svg'
                                alt="Gmail"
                                width={24}
                                height={24}
                            />
                        </a>
                    </li>
                    <li className='py-2 flex items-center'>
                        <a
                            className='mr-3 w-10 h-10 cursor-pointer flex justify-center items-center bg-gray-200 dark:bg-gray-700 p-2 rounded-full'
                            href='http://linkedin.com/in/gurwinder-singh-883956182'
                            target='_blank'
                        >
                            <Image
                                src='/icons/linked-in.svg'
                                alt="LinkedIn"
                                width={20}
                                height={20}
                            />
                        </a>
                    </li>
                    <li className='py-2 flex items-center'>
                        <Mobile />
                    </li>
                </ul>
            </div>
        </footer>

    )
}