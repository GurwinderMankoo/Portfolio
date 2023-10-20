import Image from 'next/image'
import React from 'react'

type Props = {}

export default function DownArrow({ }: Props) {


    return (
        <a href='/#about' role='button' className='z-30 dark:text-white absolute right-[calc(50%_-_18px)] bottom-1 md:bottom-8 w-11  h-11 cursor-pointer hover:animate-none animate-bounce rounded-full hover:shadow-[0_0_4px_rgba(0,0,0,0.4)] dark:hover:shadow-[0_0_4px_rgba(255,255,255,0.4)] flex items-center justify-center'>
            <Image className='block dark:hidden' src='/icons/double-arrow-down.svg' alt='double-arrow-down' width={36} height={36} />
            <Image className='hidden dark:block' src='/icons/double-arrow-down_white.svg' alt='double-arrow-down' width={36} height={36} />
        </a>
    )
}