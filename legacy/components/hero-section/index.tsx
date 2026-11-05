export default function HeroSection() {
    return (
        <div className=" flex items-center flex-col lg:flex-row justify-center p-4 mt-20 mb-32">
            <div className="flex items-start justify-start flex-col relative pt-24 xl:w-[896px] lg:w-auto w-full">
                <h2
                    className='text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-medium'
                >
                    Hi, I'm Tamim,
                </h2>
                <div className='flex items-center text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-medium mt-1'>
                    a Product (
                    <span className='w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 rounded-full bg-[#FB2C36]'></span>
                    <span className='w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 rounded-full bg-[#2B7FFF] mx-1'></span>
                    <span className='w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 rounded-full bg-[#FDC700]'></span>
                    )
                    Designer.
                </div>
                <p className="text-[#4A5565] dark:text-gray-400 text-lg mt-4 font-normal">I simplify your web delight.</p>
            </div>
        </div>
    )
}