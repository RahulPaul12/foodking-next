'use client'
import { motion, scale } from "motion/react"
export default function CommingSoon(){
    return (
            <div
             className="mb-16 sm:mb-20 md:mb-40">
                 <div className="max-w-[934px] w-full mx-auto flex flex-col items-center justify-center h-dvh">
                     <motion.h1 
                     initial={{opacity:0, y:'-100%'}}
                     animate={{opacity:1, y:0}}
                     transition={{
                         duration: 1,
                     }}
                     className="text-3xl lg:text-[42px] font-bold text-center leading-tight mb-6">Coming Soon</motion.h1>
                 </div>
             </div>
    )
}