"use client"
import { useModal } from '@/app/store/ModalProvider'
import React from 'react'
import { Project } from './ProjectCard'

type Props = {
    children: React.ReactNode,
    project: Project
}

export default function ProjectCardContainer({ children, project }: Props) {

    const { openModal } = useModal()

    return (
        <div className='max-w-sm w-full' onClick={() => openModal(project)}>
            {
                children
            }
        </div>
    )
}