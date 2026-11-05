import { FaArrowRight } from "react-icons/fa";


export default function AboutSection() {
    return (
        <div className="p-4 my-10">
            <div className="mb-12">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium">About</h1>
                <p className="text-[#4A5565] dark:text-gray-400 text-base mt-4 font-normal lg:w-[845px]">
                    I'm a passionate Product Designer with expertise in creating delightful user experiences. My work focuses on simplifying complex problems and crafting intuitive interfaces that users love.
                </p>
                <p className="text-[#4A5565] dark:text-gray-400 text-base mt-4 font-normal lg:w-[845px]">
                    With experience working with companies like Microsoft, Americor, and various startups, I've helped teams create products that make a real difference in people's lives.
                </p>
            </div>
        </div>
    )
}