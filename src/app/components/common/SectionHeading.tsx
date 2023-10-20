
type Props = {
    children: React.ReactNode,
}


export default function SectionHeading({ children }: Props) {
    return (
        <>
            <h2 className="relative text-center text-2xl md:text-4xl font-bold underline decoration-blue-700 underline-offset-3 tracking-wider dark:text-white mb-5 md:mb-10">
                {
                    children
                }
            </h2>
        </>
    )
}
