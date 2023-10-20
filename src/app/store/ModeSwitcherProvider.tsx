"use client"
import React, { useContext, createContext, useState, useEffect } from 'react'

type Props = { children: React.ReactNode }

type Mode = string;
type ModeSwitcher = (prevState: string) => void

type ModeSwitcherStateType = {
    mode: Mode,
    setMode: React.Dispatch<React.SetStateAction<string>>
}

export const ModeSwitcherState = createContext<ModeSwitcherStateType>({ mode: 'light', setMode: () => null })

export const useModeSwitcher = () => useContext(ModeSwitcherState)

export default function ModeSwitcherProvider({ children }: Props) {
    const [mode, setMode] = useState<string>('light');

    useEffect(() => {
        const html = document.documentElement;
        html.className = ""
        if (mode === "dark") {
            html.classList.add('dark');
        } else {
            html.classList.add('light');
        }
    }, [mode])

    return (
        <ModeSwitcherState.Provider value={{ mode, setMode }}>
            <div className={mode}>
                {
                    children
                }
            </div>
        </ModeSwitcherState.Provider>
    )
}