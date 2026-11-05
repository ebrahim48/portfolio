import React from 'react'

export default function Title({ title, description, className = 'text-[#212529] dark:text-white', descriptionClass = 'text-[#646f79] dark:text-gray-400' ,visible = true}: { title: string, description: string, className?: string, descriptionClass?: string, visible?: boolean }) {
    return (
        <div className='space-y-3'>
           <h1 className={`${className} text-xl md:text-2xl lg:text-5xl font-bold  capitalize !leading-[1.2]`}>{title}</h1>

            {
                visible &&
                <div className='flex items-center justify-center gap-1'>
                    <span className='w-1 bg-black dark:bg-white h-[3px]'></span>
                    <span className='w-[25px] bg-[#2571ff] h-[3px]'></span>
                    <span className='w-1 bg-black dark:bg-white h-[3px]'></span>
                </div>
            }
            <p className={`${descriptionClass} text-[#646f79]`}>
                {description}
            </p>
        </div>
    )
}