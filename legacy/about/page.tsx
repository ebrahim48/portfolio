import { FiExternalLink } from "react-icons/fi";
import banner_image from "../../assets/about-banner.png"

export default function AboutPage() {
    const experiences = [
        {
            company: "Spark Tech Agency",
            position: "Jr. UX UI Designer",
            duration: "May 25-present",
            description: "Designing complete product experiences for mobile and web, collaborating with managers, marketers, and developers to deliver user-focused solutions across industries."
        },
        {
            company: "Spark Tech Agency",
            position: "UX UI Designer Intern",
            duration: "May 25-present",
            description: "Designing complete product experiences for mobile and web, collaborating with managers, marketers, and developers to deliver user-focused solutions across industries."
        }
    ];

    return (
        <div className="w-full mt-[88px]">
            <div className="relative w-full min-h-[600px] md:min-h-[700px] flex items-center justify-start px-4 md:px-8 lg:px-16 py-24 md:py-32 overflow-hidden">

                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url(${banner_image?.src})`
                    }}
                >
                    <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-[554px] bg-black/10 backdrop-blur-md text-white rounded-lg px-10 py-12">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 md:mb-8">
                        Hi, I am Tamim
                    </h1>
                    <p className="text-base font-normal mb-4 leading-relaxed">
                        I'm a passionate Product Designer with expertise in creating delightful user experiences. My work focuses on simplifying complex problems and crafting intuitive interfaces that users love.
                    </p>
                    <p className="text-base font-normal leading-relaxed">
                        With experience working with companies like Microsoft, Americor, and various startups, I've helped teams create products that make a real difference in people's lives.
                    </p>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="bg-white dark:bg-[#0a0a0a] py-16 md:py-24 px-4 md:px-8 lg:px-16">
                <div className="container mx-auto max-w-7xl space-y-12">
                    {/* Experience Section */}
                    <div>
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                            {/* Left Side - Title and Button */}
                            <div className="lg:w-1/3 lg:border-e border-e-gray-200 dark:border-e-gray-800">
                                <h2 className="text-2xl md:text-3xl lg:text-4xl text-black dark:text-white mb-6">
                                    Experience
                                </h2>
                                <button className="flex items-center gap-2 px-6 py-2 border border-[#60A5FA] text-[#60A5FA] rounded-full bg-white dark:bg-transparent hover:bg-[#60A5FA] dark:hover:bg-[#60A5FA] hover:text-white transition-colors cursor-pointer">
                                    <span className="text-base font-normal">Resume</span>
                                    <span className="text-base font-normal">+</span>
                                </button>
                            </div>

                            {/* Right Side - Experience Entries */}
                            <div className="lg:w-2/3">
                                {experiences.map((exp, index) => (
                                    <div key={index} className={`flex flex-col md:flex-row gap-6 md:gap-8 py-7 ${index === 0 && "border-b border-b-gray-200 dark:border-b-gray-800"} `}>
                                        <div className="md:w-2/5">
                                            <h3 className="text-lg md:text-xl font-bold text-black dark:text-white mb-2">
                                                {exp.company}
                                            </h3>
                                            <p className="text-base text-black dark:text-gray-200 mb-1 font-normal">
                                                {exp.position}
                                            </p>
                                            <p className="text-sm md:text-base text-black dark:text-gray-300 font-normal">
                                                {exp.duration}
                                            </p>
                                        </div>
                                        <div className="md:w-3/5">
                                            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed font-normal">
                                                {exp.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="!border-b !border-b-gray-200 dark:!border-b-gray-800" />
                    {/* Education Section */}
                    <div className="mb-20 md:mb-32">
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                            {/* Left Side - Title */}
                            <div className="lg:w-1/3 lg:border-e border-e-gray-200 dark:border-e-gray-800">
                                <h2 className="text-2xl md:text-3xl lg:text-4xl text-black dark:text-white mb-6">
                                    Education
                                </h2>
                            </div>

                            {/* Right Side - Education Entry */}
                            <div className="lg:w-2/3">
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-lg md:text-xl font-bold text-black dark:text-white">
                                        Dhaka College
                                    </h3>
                                    <p className="text-base text-black dark:text-gray-300">
                                        2021-2026
                                    </p>
                                    <p className="text-base text-black dark:text-gray-300">
                                        Honor's in Statistics - Major User Research
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Gallery Section */}
                <div className="container mx-auto p-4">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl text-black dark:text-white text-center mb-12">
                        Gallery
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[1, 2, 3].map((item) => (
                            <div
                                key={item}
                                className="bg-gray-200 dark:bg-[#1a1a1a] rounded-lg aspect-[4/3] flex items-center justify-center group cursor-pointer hover:bg-gray-300 dark:hover:bg-[#2a2a2a] transition-colors"
                            >
                                <FiExternalLink className="w-8 h-8 text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}