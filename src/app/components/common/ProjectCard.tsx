import React from 'react'
import ProjectCardContainer from './ProjectCardContainer'
import Image from 'next/image'

export type Project = {
    url: string,
    id: number,
    name: string,
    content: string,
    technologies: string[]
}

type Props = {
    project: Project
}

export default function ProjectCard({ project }: Props) {

    return (
        <ProjectCardContainer project={project}>
            <div className="max-w-sm w-full bg-white border border-gray-200 dark:border-none rounded-lg shadow dark:bg-gray-700 dark:shadow-[0_0_4px_rgba(255,255,255,0.7)] cursor-pointer">
                <img className="rounded-t-lg" src="/placeholder.svg" alt="project-image" /*style={{ width: "100%", height: '150px' }}*/ />
                <div className="p-5">
                    <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                        {
                            project.name
                        }
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {
                            project.content
                        }
                    </p>
                    {/* <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a> */}
                </div>
            </div>
        </ProjectCardContainer>

    )
}