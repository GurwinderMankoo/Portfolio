import Layout from "../common/Layout";
import Section from "../common/Section";
import SectionHeading from "../common/SectionHeading";
import Tabs from "../common/Tabs";
import Education from "./Education";
import Work from "./Work";

const tabs = [
    {
        name: 'Work',
        content: (
            <Work />
        ),
        id: 'work'
    },
    {
        name: 'Education',
        content: (
            <Education />
        ),
        id: 'education'
    }
]


export default function Experience() {
    return (
        <Section id="experience">
            <div className="m-auto w-full">
                <SectionHeading>
                    Experience
                </SectionHeading>
                <Tabs
                    tabs={tabs}
                    preActive="work"
                />
            </div>
        </Section>
    )

}