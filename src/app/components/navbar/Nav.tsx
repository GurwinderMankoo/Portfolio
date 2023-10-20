import React from 'react'

type Props = {
    children: React.ReactNode
}

export default function Nav({ children }: Props) {
    return (
        // <nav className='fixed z-50 left-0 top-0 border-b w-full border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-900/70 dark:from-inherit lg:bg-gray-200 lg:dark:bg-zinc-900/70'>
        <nav className='fixed z-50 left-0 top-0 border-b w-full bg-transparent backdrop-blur-2xl dark:border-neutral-800'>
            {
                children
            }
        </nav>
    )
}