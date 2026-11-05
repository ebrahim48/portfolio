export default function Logo({ isScroll = false }: { isScroll: boolean }) {
    return (
        <div className={`transition-all duration-300 ${isScroll ? "lg:w-[160px]" : "lg:w-[220px]"
            } w-32`}>
            <div className={`transition-all duration-300 ${isScroll ? "lg:w-[100px] h-11" : " h-10 lg:w-[80px]"
                } w-32`}
            >
                <span className="text-black dark:text-white text-2xl font-bold">Tamim</span>
            </div>
        </div>
    )
}