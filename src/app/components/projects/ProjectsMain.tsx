import React from 'react'
import Section from '../common/Section'
import SectionHeading from '../common/SectionHeading'
import ProjectCard from '../common/ProjectCard'
import Modal from '../common/Modal'

type Props = {}

export const projects = [
    {
        name: 'ReelUp',
        content: 'Shopify embaded app created using many library',
        id: 1,
        url: 'https://apps.shopify.com/reelup',
        technologies: [
            'React Js', 'React-Router-Dom', 'Shopify-Polaris', 'Shopify-App-Bridge', 'Context API', 'TypeScript', 'Scss'
        ]
    },
    {
        name: 'GOAT COD Form',
        content: 'Shopify embaded app created using many library',
        id: 2,
        url: 'https://apps.shopify.com/goat-cod-order-form',
        technologies: [
            'React Js', 'React-Router-Dom', 'Shopify-Polaris', 'Shopify-App-Bridge', 'Context API', 'TypeScript', 'Scss'
        ]
    },
    {
        name: 'Fodane',
        content: 'Shopify embaded app created contain 50 apps in a single app',
        id: 3,
        url: 'https://apps.shopify.com/fodane',
        technologies: [
            'React Js', 'React-Router-Dom', 'Shopify-Polaris', 'Shopify-App-Bridge', 'Context API', 'TypeScript', 'Scss'
        ]
    },
    {
        name: 'Fodane',
        content: 'Static site created using nextjs',
        id: 4,
        url: 'https://fodane.app/',
        technologies: [
            'Next Js'
        ],
    },
    {
        name: 'ReelUp',
        content: 'Shopify embaded app created using many library',
        id: 5,
        url: 'https://fodane.app/',
        technologies: [
            'React Js', 'React-Router-Dom', 'Shopify-Polaris', 'Shopify-App-Bridge', 'Context API', 'TypeScript', 'Scss'
        ]
    },
    {
        name: 'ReelUp',
        content: 'Shopify embaded app created using many library.s',
        id: 6,
        url: 'https://fodane.app/',
        technologies: [
            'React Js', 'React-Router-Dom', 'Shopify-Polaris', 'Shopify-App-Bridge', 'Context API', 'TypeScript', 'Scss'
        ]
    },
]

export default function ProjectsMain({ }: Props) {
    return (
        <Section id='projects'>
            <SectionHeading>
                Projects
            </SectionHeading>
            <div className='md:mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-8'>
                {
                    projects.map((project, i) => (
                        <ProjectCard project={project} key={project.id} />
                    ))
                }
            </div>
        </Section>
    )
}