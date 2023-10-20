"use client"
import React, { useContext, createContext, useState, useEffect } from 'react'

type Props = { children: React.ReactNode }

type Theme = string;
type ModeSwitcher = (prevState: string) => void

type ModeSwitcherStateType = {
    theme: Theme,
    setTheme: React.Dispatch<React.SetStateAction<string>>
}

export const ModeSwitcherState = createContext<ModeSwitcherStateType>({ theme: 'light', setTheme: () => null })

export const useModeSwitcher = () => useContext(ModeSwitcherState)

export default function ModeSwitcherProvider({ children }: Props) {
    const [theme, setTheme] = useState<string>('light');

    useEffect(() => {
        const html = document.documentElement;
        html.className = ""
        if (theme === "dark") {
            html.classList.add('dark');
        } else {
            html.classList.add('light');
        }
    }, [theme])

    return (
        <ModeSwitcherState.Provider value={{ theme, setTheme }}>
            <div className={theme}>
                {
                    children
                }
            </div>
        </ModeSwitcherState.Provider>
    )
}