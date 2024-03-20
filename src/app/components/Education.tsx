import React from 'react';
//import AnimationLottie from "./helper/animation-lottie";
//import lottieFile from "../../../public/lottie/education.json";
import GlowCard from "./helper/glow-card";
import { BsPersonWorkspace } from "react-icons/bs";
import Image from "next/image";

const Education = () => {
    // Define the education data
    const education = [
        {
            id: 1,
            duration: "2018-2022",
            title: "Bachelor's Degree in Computer Science",
            institution: "Example University"
        },
        {
            id: 2,
            duration: "2015-2018",
            title: "High School Diploma",
            institution: "Example High School"
        },
        {
            id: 3,
            duration: "2015-2018",
            title: "High School Diploma",
            institution: "Example High School"
        },
        {
            id: 4,
            duration: "2015-2018",
            title: "High School Diploma",
            institution: "Example High School"
        },
    ];

    return (
        <div>
            <section className='text-white'>
                <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                    <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
                        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
                            ABOUT ME
                        </span>
                        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                        <div className="order-2 lg:order-1">
                            <p className="font-medium mb-5 text-[#16f2b3] text-xl lg:text-2xl uppercase">
                                Education
                            </p>
                            <div className="relative z-50 border-t my-12 lg:my-20 border-[#25213b]">
                                <div className="py-8">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                                        <div className="flex justify-center items-start">
                                            {/*<AnimationLottie animationPath={lottieFile} width={100} />*/}
                                            <Image src={"/images/education.png"} alt="Education" width={100} height={100} />
                                        </div>
                                        <div>
                                            <div className="flex flex-col gap-6  ">
                                                {education.map((educationItem) => (
                                                    <GlowCard key={educationItem.id} identifier={`education-${educationItem.id}`}>
                                                        <div className="p-3 relative text-white animate-pulse">
                                                            <div className="flex justify-center transition-all duration-300 hover:scale-125">
                                                                <p className="text-xs sm:text-sm text-[#16f2b3]">
                                                                    {educationItem.duration}
                                                                </p>
                                                            </div>
                                                            <div className="flex items-center gap-x-8 px-3 py-5 transition-all duration-300 hover:scale-125">
                                                                <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                                                                    <BsPersonWorkspace size={36} />
                                                                </div>
                                                                <div>
                                                                    <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                                                                        {educationItem.title}
                                                                    </p>
                                                                    <p className="text-sm sm:text-base">{educationItem.institution}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </GlowCard>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Education;
