import React from 'react'
import ProjectCardContainer from './ProjectCardContainer'
import Image, { StaticImageData } from 'next/image'

export type Project = {
    url: string,
    id: number,
    name: string,
    content: string,
    technologies: string[],
    img: StaticImageData
}

type Props = {
    project: Project
}

export default function ProjectCard({ project }: Props) {

    return (
        <ProjectCardContainer project={project}>
            <div className="max-w-sm w-full relative h-40 shadow dark:bg-gray-700 dark:shadow-[0_0_4px_rgba(255,255,255,0.7)] cursor-pointer">
                <Image
                    // className="rounded-t-lg"
                    src={project.img}
                    fill
                    alt="project-image"
                /*style={{ width: "100%", height: '150px' }}*/
                />
                {/* <div className="p-5">
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
                </div> */}
            </div>
        </ProjectCardContainer>

    )
}