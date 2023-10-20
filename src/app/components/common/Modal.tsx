"use client"
import { useModal } from '@/app/store/ModalProvider'
import Image from 'next/image'
import React from 'react'

type Props = {
    title: string,
    description: string,
    technologies: string[],
    url: string
}

export default function Modal({ title = "Title", description, technologies, url }: Props) {

    const { closeModal } = useModal();

    return (

        <div className="relative bg-white shadow dark:bg-gray-700 max-w-3xl md:min-w-[760px] w-full">
            {/* <!-- Modal header --> */}
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {
                        title
                    }
                </h3>
                <button onClick={closeModal} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="p-6 space-y-6">
                <p className="text-base leading-relaxed dark:text-white">
                    {
                        description
                    }
                </p>
                <h4 className='font-medium dark:text-white'>
                    Technologies Used:
                </h4>
                <ul className='list-decimal ml-6 dark:text-white' style={{ marginTop: '5px' }}>
                    {
                        technologies.map((tech, i) => (
                            <li key={i}>
                                {
                                    tech
                                }
                            </li>
                        ))
                    }
                </ul>
                <a href={url} target='_blank' className='font-medium text-blue-600 hover:underline flex items-center'>
                    <span className='mr-1'>
                        <Image
                            src='/icons/external-link.svg'
                            alt={url}
                            width={18}
                            height={18}
                            className='text-blue-600 dark:text-blue-500'
                        />
                    </span>
                    {
                        url
                    }
                </a>
                {/* <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                </p> */}
            </div>
            {/* <!-- Modal footer --> */}
            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                {/* <button data-modal-hide="defaultModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button> */}
                <button onClick={closeModal} data-modal-hide="defaultModal" type="button" className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-white text-sm font-medium px-5 py-2.5 focus:z-10">Close</button>
            </div>
        </div>

    )
}