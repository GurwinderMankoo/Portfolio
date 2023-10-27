'use client'
import Image from 'next/image'
import React from 'react'

type Props = {}

export default function Mobile({ }: Props) {

    const copyNumber = () => {
        navigator.clipboard.writeText('+447435160562')
    }

    return (
        <>
            <a
                className='relative mr-3 w-10 h-10 cursor-pointer flex justify-center items-center bg-gray-200 dark:bg-gray-700 p-2 rounded-full'
                onClick={copyNumber}
                data-tooltip-target="tooltip-default"
                role='button'
                title='Copy(+447435160562)'
            >
                <Image
                    src='/icons/mobile.svg'
                    alt="Mobile"
                    width={20}
                    height={20}
                />
            </a>
        </>
    )
}