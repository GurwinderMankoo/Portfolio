import React from 'react'

type Props = {
    children: React.ReactNode
}

export default function Layout({ children }: Props) {
    return (
        <div className='max-w-screen-lg pl-4 pr-4 m-auto'>
            {
                children
            }
        </div>
    )
}