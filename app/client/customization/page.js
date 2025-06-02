'use client'
import Link from "next/link";
import {animate, motion, useMotionValue, useTransform} from "framer-motion"
import { useEffect } from "react";
export default function Customization (){
    const counters = [
        {
            "id": 1,
            "count": 40,
            "color": "#0F88F9",
            "title": "Countries Served",
            "vector": "/images/customization/earth.png",
            "shadow": "0px 6px 10px rgba(15, 136, 249, 0.30)"
        },
        {
            "id": 2,
            "count": 900,
            "color": "#22B08E",
            "title": "Happy Clients",
            "vector": "/images/customization/emoji.png",
            "shadow":"0px 6px 10px rgba(74, 204, 107, 0.30)"
        },
        {
            "id": 3,
            "count": 5,
            "color": "#761DFA",
            "title": "Rating & Reviews",
            "vector": "/images/customization/review.png",
            "shadow": "0px 6px 10px 0px rgba(118, 29, 250, 0.30)"
        },
        {
            "id": 4,
            "count": 98,
            "color": "#E4156F",
            "title": "Client Satisfaction",
            "vector": "/images/customization/heart.png",
            "shadow": "0px 6px 10px 0px rgba(230, 26, 114, 0.30)"
        }
    ]
    
    const processes = [
        {
            "id": 1,
            "title": "Purchase the script from Codecanyon.",
            "image": "/images/customization/process1.png"
        },
        {
            "id": 2,
            "title": "Book a meeting to discuss.",
            "image": "/images/customization/process2.png"
        },
        {
            "id": 3,
            "title": "Discuss requirements and receive a quote.",
            "image": "/images/customization/process3.png"
        },
        {
            "id": 4,
            "title": "Request customization based on the quote.",
            "image": "/images/customization/process4.png"
        },
        {
            "id": 5,
            "title": "We’ll work on the project and deliver it to you.",
            "image": "/images/customization/process5.png"
        }
    ]
    
    const chooses = [
        {
            id: 1,
            image: "/images/customization/choose1.png",
            title: "Expert Customization",
        },
        {
            id: 2,
            image: "/images/customization/choose2.png",
            title: "Proven Experience",
        },
        {
            id: 3,
            image: "/images/customization/choose3.png",
            title: "Dedicated Support",
        },
        {
            id: 4,
            image: "/images/customization/choose4.png",
            title: "Deep Industry Knowledge",
        },
        {
            id: 5,
            image: "/images/customization/choose5.png",
            title: "Advanced Technology",
        },
        {
            id: 6,
            image: "/images/customization/choose6.png",
            title: "Pixel Perfect Design",
        },
        {
            id: 7,
            image: "/images/customization/choose7.png",
            title: "Client Satisfaction",
        },
        {
            id: 8,
            image: "/images/customization/choose8.png",
            title: "Affordable Price",
        },
    ]
    const count = useMotionValue(0)
    const rounded = useTransform(() => Math.round(count.get()))
    useEffect(() => {
        const controls = animate(count, 100, { duration: 1 })
        return () => controls.stop()
      }, [])
    return (
        <>
    {/* <!--===============================
           HERO PART START 
     =================================--> */}
     <section className="pt-26 lg:pt-38 mb-20 relative">
        <span className="bg-linear-180 from-[#ffc4dc] to-white blur-[350px] w-full absolute -z-10 top-0 h-[400px]"></span>
        <div className="container">
            <div className="grid lg:grid-cols-2 gap-y-12 lg:place-content-between">
                <div className="max-lg:max-w-2xl max-lg:text-center max-lg:mx-auto mx-auto">
                    <h1 className="text-3xl lg:text-[42px] font-bold leading-tight mb-6"><span className="gradient-text">Customize FoodKing </span>to Fit Your Business Perfectly</h1>
                    <p className="text-base lg:text-lg font-normal mb-6 lg:text-left text-center">As the creator of FoodKing, no one knows the system better than we do—and that means we can customize it exactly the way you need. From design changes and new features to third-party integrations and workflow tweaks, we’ll tailor FoodKing to fit your business perfectly.</p>
                    <div className="flex flex-wrap items-center max-lg:justify-center gap-6">
                        <Link href={"#"} className="h-[52px] !leading-[52px] px-6 rounded-full gradient-button text-base sm:text-lg font-semibold capitalize flex items-center gap-3 text-white">
                            <i className="icon-line-tidycal text-2xl"></i>
                            Book a Meeting
                        </Link>
                        <Link href={"#"} className="h-[52px] !leading-[52px] px-6 rounded-full whatsapp-gradient flex items-center gap-3 text-white">
                            <i className="icon-line-whatsapp text-2xl"></i>
                            <span className="text-base sm:text-lg font-semibold capitalize">WhatsApp</span>
                        </Link>
                    </div>
                </div>
                <div>
                    <img className="max-w-[465px] w-full lg:ml-auto mx-auto lg:mx-0" src="/images/customization/banner.png"/>
                </div>
            </div>
        </div>
     </section>
     {/* <!--==============================
           HERO PART END 
     =================================--> */}


    {/* <!--==============================
            COUNTER PART START                  
    ==============================--> */}
    <section className="mb-20 sm:mb-40">
        <div className="container">
            <div className="p-12 rounded-3xl shadow-blog bg-white">
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 lg:gap-[94px]">
                    {
                        counters.map((counter,index)=>(
                        <li key={index} className="w-full flex items-center gap-4">
                            <img style={{filter: `drop-shadow(${counter.shadow})`}} className="w-8 h-8" src={`${counter.vector}`}/>
                            <div>
                                <h3 style={{color: `${counter.color}`}} className="text-[28px] font-semibold flex items-center gap-0.5 mb-2">
                                    <motion.span className="text-[28px] font-extrabold">{rounded}</motion.span>
                                    <span className="leading-none -mt-2">+</span>
                                </h3>
                                <p className="text-base">
                                    { counter.title }
                                </p>
                            </div>
                        </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </section>
    {/* // <!--==============================
    //         COUNTER PART END                  
    // ==============================--> */}
        </>
    )
}