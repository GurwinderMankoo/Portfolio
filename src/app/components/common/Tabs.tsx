'use client'
import React, { useEffect, useState } from 'react'

type Tab = {
    name: string;
    content: React.ReactNode | string,
    id: string
}

type Props = {
    tabs: Tab[],
    preActive?: string
}

export default function Tabs({ tabs, preActive = 'work' }: Props) {

    const [active, setActive] = useState<string>('work');


    const activeHandler = (id: string): void => {
        setActive(id)
    }

    useEffect(() => {
        setActive(preActive)
    }, [preActive])

    return (
        <>
            <ul className="max-w-[200px] m-auto text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow flex dark:divide-gray-700 dark:text-gray-400">
                {
                    tabs.map((tab, i, arr) => (
                        <li className="w-full" key={`content-${tab.id}`}>
                            <a
                                role='button'
                                className={`inline-block w-full p-3 text-gray-900 ${i === 0 ? 'rounded-l-lg' : i === (arr.length - 1) ? 'rounded-r-lg' : ''} focus:ring-4 focus:ring-blue-300 ${tab.id === active ? "bg-blue-700 text-white" : "bg-gray-100 dark:bg-gray-700"} focus:outline-none  dark:text-white`}
                                aria-current="page"
                                onClick={() => activeHandler(tab.id)}
                            >
                                {
                                    tab.name
                                }
                            </a>
                        </li>
                    ))
                }
            </ul>
            <div className='mt-5'>
                {
                    tabs.map((tab, i) => (
                        tab.id === active && <React.Fragment key={`${i}-contentmain-${tab.id}`}>
                            {
                                tab.content
                            }
                        </React.Fragment>
                    ))
                }
            </div>
        </>

    )
}