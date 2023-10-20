import Image from "next/image";
import Section from "../common/Section";
import Typwriter from "../typewriter";
import DownArrow from "../common/DownArrow";
import MyImage from "../../../../public/profile-pic.png";



export default function HomeMain1() {
    return (
        <Section id="home">
            <div className="z-10 h-[calc(100vh_-_72px)] flex justify-center items-center gap-9 md:gap-0 flex-col-reverse md:flex-row">
                <div className="intro md:w-1/2 md:h-screen flex items-center justify-center md:justify-normal md:-mt-20">
                    <div className="text-center md:text-left before:absolute before:h-[150px] md:before:h-[300px] before:-translate-y-1/3 before:z-[1]  before:w-[280px] md:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 before:lg:h-[360px]">
                        <div className='w-full font-bold text-black dark:text-white z-[10] relative'>
                            <span className="flex justify-center md:justify-start">
                                <img src='/waving-hand.gif' alt='Hi!!' className='w-10 h-10 -mt-3 mr-2' />
                                <h5 className="sm:text-xl font-bold">
                                    Hey! I'M
                                </h5>
                            </span>
                            <h2 className='text-3xl mt-3 md:mt-0 xl:text-6xl md:text-5xl text-blue-700'>
                                Gurwinder Singh
                            </h2>
                            <div className="md:mt-5 mt-3">
                                <Typwriter
                                    keywords={['A Web Developer', "A Front Engineer", "A Creative Enthusiast"]}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="image-section md:w-1/2 md:h-screen justify-center md:justify-end flex items-center relative md:-mt-20">
                    <div className="relative hidden md:block">
                        <div className="flex items-center justify-center absolute -top-36 -left-28 w-16 h-16 rounded-full bg-gray-300 dark:bg-gray-700 animate-[typescript_8s_ease-in-out_infinite]">
                            <Image src='/icons/typescript.svg' alt="Redux" width={30} height={30} />
                        </div>
                        <div className="flex items-center justify-center absolute top-7 -left-32 w-16 h-16 rounded-full bg-gray-300 dark:bg-gray-700 my-animation-2 animate-[react_8s_ease-in-out_infinite]">
                            <Image src='/icons/react.svg' alt="Redux" width={40} height={40} />
                        </div>
                        <div className="flex items-center justify-center absolute -top-60 left-12 w-16 h-16 rounded-full bg-gray-300 dark:bg-gray-700 my-animation-3 animate-[redux_8s_ease-in-out_infinite]">
                            <Image src='/icons/redux.svg' alt="Redux" width={40} height={40} />
                        </div>

                    </div>
                    <div className="relative w-64 h-64 md:-ml-10 md:mt-0 flex items-center justify-center rounded-full ring-4 ring-gray-300 dark:ring-gray-500 after:absolute after:-left-10 after:md:-mt-10 after:lg:right-14 after:-z-15 after:h-[180px] after:w-[240px] after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40">
                        <div className="w-60 h-60 relative rounded-full overflow-hidden p-12">
                            <Image
                                // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                className="z-10 -bottom-2"
                                src={MyImage}
                                alt="Next.js Logo"
                                // width={180}
                                // height={37}
                                fill
                            // objectFit="contain"
                            // placeholder='blur'
                            // loading='lazy'
                            // blurDataURL="data:image/webp;base64,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"
                            />

                        </div>
                    </div>
                </div>
            </div>
            <DownArrow />
        </Section>
    )
}