'use client'
import { useTheme } from 'next-themes'
import React from 'react'

type Props = {
    children: React.ReactNode
}

export default function Main({ children }: Props) {

    const { theme } = useTheme();

    return (
        <main className={`${theme === "dark" ? 'dark:bg-gray-900/90 dark:text-white' : 'ight:bg-gradient-to-b light:from-[#D6DBDC] light:to-white text-black'}`}>
            {
                children
            }
        </main>
    )
}