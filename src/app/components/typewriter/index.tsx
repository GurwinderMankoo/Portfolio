"use client"

import React, { useEffect, useRef, useState } from 'react'

type Props = {
    keywords: string[]
}

export default function Typwriter({ keywords = [] }: Props) {

    const [keys, setKeys] = useState('');
    const currentWord = useRef<string>('');
    const currentkeywordsIndex = useRef<number>(0)
    const speed = useRef<number>(200)

    const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

    const wordTyper = async () => {
        while (true) {
            for (let i = 0; i < currentWord.current.length; i++) {
                setKeys(prev => {
                    return currentWord.current.substring(0, i + 1)
                })
                await sleep(speed.current)
            }

            await sleep(speed.current * 6)

            for (let i = currentWord.current.length; i >= 0; i--) {
                await sleep(speed.current / 4)

                setKeys(prev => {
                    if (i === 0) {
                        return ''
                    } else {
                        return currentWord.current?.substring(0, i - 1)
                    }
                })
            }

            if (currentkeywordsIndex.current === keywords.length - 1) {
                currentkeywordsIndex.current = 0
            } else {
                currentkeywordsIndex.current += 1
            }

            currentWord.current = keywords[currentkeywordsIndex.current]
        }
    }



    useEffect(() => {
        currentWord.current = keywords[0]
        wordTyper()
    }, keywords)

    return (
        <h3 className={`typewriter text-lg sm:text-lg md:text-xl after:dark:border-white`}>
            {
                keys
            }
        </h3>
    )
} 