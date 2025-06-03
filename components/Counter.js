'use client'
import { animate } from "motion"
import {motion} from 'framer-motion'
import { useMotionValue, useTransform } from "motion/react"
import { useEffect } from "react"

export default function Counter ({start, end, duration=2}){
    const count = useMotionValue(start)
    const rounded = useTransform(() => Math.round(count.get()))
    const roundedFixed = useTransform(count, value => value.toFixed(1))
    useEffect(() => {
        const controls = animate(count, end, { duration })
        return () => controls.stop()
      }, [])

      if(Number.isInteger(end)){
        return (
            <motion.span className="text-[28px] font-extrabold">{rounded}</motion.span>
        )
      }
      else{
        return (
            <motion.span className="text-[28px] font-extrabold">{roundedFixed}</motion.span>
        )
      }
}