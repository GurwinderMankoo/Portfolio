"use client"
import React, { useContext, createContext, useState } from 'react'

type Props = { children: React.ReactNode }

type Mode = string;
type ModeSwitcher = (prevState: string) => void

type ModeSwitcherStateType = {
    mode: Mode,
    setMode: ModeSwitcher
}

export const ModeSwitcherState = createContext<ModeSwitcherStateType>({ mode: 'light', setMode: () => null })

export const useModeSwitcher = () => useContext(ModeSwitcherState)

export default function ModeSwitcherProvider({ children }: Props) {
    const [mode, setMode] = useState<string>('light');

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