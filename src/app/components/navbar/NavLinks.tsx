"use client"

import React, { useEffect, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import ModeSwitch from './ModeSwitch'
import { links } from './Main'
import Link from 'next/link'
import { useScrollSection } from '@/app/store/ScrollObserver'

type Props = {}

export default function NavLinks({ }: Props) {

    const [isOpen, setIsOpen] = useState(false);
    const [currentPath, setCurrentPath] = useState('')
    const route = useRouter()
    const pathName = usePathname();
    const searchParams = useSearchParams()
    const { activeSection } = useScrollSection()

    const pathHandler = (path: string) => setCurrentPath(path)

    useEffect(() => {
        if (activeSection !== "technologies")
            setCurrentPath(`#${activeSection}`)
    }, [activeSection])

    return (
        <>
            <div className='flex mr-2 justify-center items-center'>
                <ModeSwitch className="block md:hidden" />
                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded="false"
                    onClick={() => setIsOpen(prev => !prev)}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
            </div>
            <div className={`${isOpen ? '' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default" onBlur={() => setIsOpen(false)}>
                <ul className="font-medium flex flex-col p-2 md:flex-row md:space-x-8 md:border-0 md:bg-transparent">
                    {
                        links.map(link => (
                            <li key={link.id}>
                                <a
                                    href={link.url === "/" ? '#' : link.url}
                                    onClick={() => {
                                        pathHandler(link.url)
                                    }}
                                    className={`block py-2 pl-3 pr-4  ${link.url === currentPath ? 'bg-blue-700' : 'text-gray-900'} rounded md:bg-transparent ${link.url === currentPath ? 'md:text-blue-700 md:dark:text-blue-500' : ''}   hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
                                >
                                    {
                                        link.label
                                    }
                                </a>
                            </li>
                        ))
                    }

                    {/* <li>
                        <a href="#" onClick={() => pathHandler('/')} className={`block py-2 pl-3 pr-4 ${'/' === currentPath ? 'bg-blue-700' : 'text-white'} rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500`} aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="#about" onClick={() => pathHandler('#about')} className={`block py-2 pl-3 pr-4  ${'#about' === currentPath ? 'bg-blue-700' : 'text-gray-900'} rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>About</a>
                    </li>
                    <li>
                        <a href="#contacts" onClick={() => pathHandler('#contacts')} className={`block py-2 pl-3 pr-4 ${'#contacts' === currentPath ? 'bg-blue-700' : 'text-gray-900'} rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>Contact</a>
                    </li> */}
                    <ModeSwitch className="md:block hidden" />
                </ul>
            </div>
        </>
    )
}