import React from 'react'
import Section from '../common/Section'
import SectionHeading from '../common/SectionHeading'
import ProjectCard from '../common/ProjectCard'

import FodaneWebsite from "../../../../public/projects/fodane-website.png";
import ReelUpWebsite from "../../../../public/projects/reelup-website.png";
import ReactRedux from "../../../../public/projects/react-redux.png";
import Placeholder from "../../../../public/projects/placeholder.svg"

type Props = {}

export const projects = [
    {
        name: 'React Redux Demo',
        content: 'This is demo app. You can checkout coding implementations. Redux and Typescript is used in this app.',
        id: 1,
        url: 'https://codesandbox.io/s/react-redux-demo-forked-4g4k5v?file=/src/App.tsx',
        technologies: [
            'React Js', 'React-Router-Dom', 'Redux', 'TypeScript', 'Css Modules',
        ],
        img: ReactRedux
    }, {
        name: 'ReelUp',
        content: 'Shopify embaded app created using many library',
        id: 1,
        url: 'https://apps.shopify.com/reelup',
        technologies: [
            'React Js', 'React-Router-Dom', 'Shopify-Polaris', 'Shopify-App-Bridge', 'Context API', 'TypeScript', 'Scss'
        ],
        img: Placeholder
    },
    {
        name: 'GOAT COD Form',
        content: 'Shopify embaded app created using many library',
        id: 2,
        url: 'https://apps.shopify.com/goat-cod-order-form',
        technologies: [
            'React Js', 'React-Router-Dom', 'Shopify-Polaris', 'Shopify-App-Bridge', 'Context API', 'TypeScript', 'Scss'
        ],
        img: Placeholder
    },
    {
        name: 'Fodane',
        content: 'Shopify embaded app created contain 50 apps in a single app',
        id: 3,
        url: 'https://apps.shopify.com/fodane',
        technologies: [
            'React Js', 'React-Router-Dom', 'Shopify-Polaris', 'Shopify-App-Bridge', 'Context API', 'TypeScript', 'Scss'
        ],
        img: Placeholder
    },
    {
        name: 'Fodane Website',
        content: 'Static site created using nextjs',
        id: 4,
        url: 'https://fodane.app/',
        technologies: [
            'Next Js',
            'Increment Site Genration',
        ],
        img: FodaneWebsite
    },
    {
        name: 'ReelUp',
        content: 'Shopify embaded app created using many library',
        id: 5,
        url: 'https://dev.reelup.io/',
        technologies: [
            'NextJs',
            'Increment Site Genration',
            "MDX"
        ],
        img: ReelUpWebsite
    },
]

export default function ProjectsMain({ }: Props) {
    return (
        <Section id='projects'>
            <SectionHeading>
                Projects
            </SectionHeading>
            <div className='md:mt-5 relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-8'>
                {
                    projects.map((project, i) => (
                        <ProjectCard project={project} key={project.id} />
                    ))
                }
            </div>
        </Section>
    )
}