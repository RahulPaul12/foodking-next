'use client'
import Counter from "@/components/Counter"
import { useState } from "react";

export default function Customization (){

    const [switchValue , setSwitchValue] = useState(true)
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
            "count": 4.9,
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

    const services =[
        { id: 1, name: "Priority support", bronze: true, silver: true, gold: true, platinum: true },
        { id: 2, name: "Priority technical support", bronze: true, silver: true, gold: true, platinum: true },
        { id: 3, name: "WhatsApp group live chat", bronze: "01", silver: "02", gold: "03", platinum: "05" },
        { id: 4, name: "Upcoming release roadmap", bronze: true, silver: true, gold: true, platinum: true },
        { id: 5, name: "Dedicated support manager", bronze: true, silver: true, gold: true, platinum: true },
        { id: 6, name: "Up-to-date Postman collection", bronze: true, silver: true, gold: true, platinum: true },
        { id: 7, name: "Weekly follow-up meetings", bronze: false, silver: false, gold: true, platinum: true },
        { id: 8, name: "Update - both Admin Panel & Apps", bronze: false, silver: true, gold: true, platinum: true },
        { id: 9, name: "Branding update", bronze: false, silver: true, gold: true, platinum: true },
        { id: 10, name: "Immediate system’s bug fixing", bronze: false, silver: false, gold: true, platinum: true },
        { id: 11, name: "Needful customization", bronze: false, silver: false, gold: "6 hrs", platinum: "18 hrs" },
        { id: 12, name: "App’s new release Publish", bronze: false, silver: false, gold: false, platinum: true },
        { id: 13, name: "System up & running responsibility", bronze: false, silver: false, gold: false, platinum: true }
    ];
    return (
        <>
    {/* <!--===============================
           HERO PART START 
     =================================--> */}
     <section className="pt-26 lg:pt-38 mb-20 sm:mb-40 relative">
        <span className="bg-linear-180 from-[#ffc4dc] to-white blur-[350px] w-full absolute -z-10 top-0 h-[400px]"></span>
        <div className="container">
            <div className="grid lg:grid-cols-2 lg:place-content-between">
                <div className="max-lg:max-w-2xl max-lg:text-center max-lg:mx-auto mx-auto">
                    <h1 className="text-3xl lg:text-[42px] font-bold leading-tight mb-6">Keep Things Smooth With Our
                        <span className="gradient-text"> iCare - Maintenance </span>
                        Service
                    </h1>
                    <p className="text-base lg:text-lg font-normal lg:text-left text-center mb-12">Trust us to manage every detail with exceptional care. Let us take care of your system’s health, so you can stay focused on what matters—growing your business.</p>
                    <img className="max-w-[479px] w-full lg:hidden block mx-auto mb-12" src="/images/customization/maintenance.png"/>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
                        {
                            counters.map((glance, index)=>(
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 flex-shrink-0 rounded-full flex items-center justify-center shadow-[0px_8px_32px_rgba(55,106,139,0.12)] bg-white">
                                    <img src={`${glance.vector}`} alt={`${glance.name}`} style={{filter: `drop-shadow(${glance.shadow})`}} className="w-8 h-8"/>
                                </div>
                                <div className="flex-auto text-left">
                                    <h3 style={{color:`${glance.color}`}} className="text-3xl font-semibold flex items-center gap-0.5 mb-3">
                                        <Counter start={0} end={glance.count}/>
                                        <span className="leading-none -mt-2">+</span>
                                    </h3>
                                    <p className="text-base capitalize">{glance.title}</p>
                                </div>
                            </div>
                            ))
                        }
                    </div>
                </div>
                <div>
                    <img className="max-w-[479px] w-full lg:block hidden ml-auto" src="/images/customization/maintenance.png"/>
                </div>
            </div>
        </div>
     </section>
     {/* <!--==============================
           HERO PART END 
     =================================--> */}


    {/* <!--==============================
            PRICING PART START                  
    ==============================--> */}
    <section class="mb-20 sm:mb-40">
        <div class="container">
            <div class="mb-12 sm:mb-16 text-center">
                <div class="max-w-[742px] w-full mx-auto">
                    <h1 class="text-3xl lg:text-[42px] font-bold text-center leading-tight mb-6">
                        <span class="gradient-text">Pick a Plan</span>
                        —We’ll Handle the Rest
                    </h1>
                    <p class="text-base lg:text-lg font-normal text-center mb-8">Enjoy reliable performance while we take care of the technical side.</p>
                </div>
                <div class="flex flex-wrap items-center justify-center gap-4">
                    <div class="flex items-center gap-2">
                        <h3 class={`text-2xl font-semibold capitalize ${switchValue? 'text-primary':''}`}>monthly</h3>
                        <label for="switch" class="custom-switcher h-8">
                            <input type="checkbox" name="" id="switch" onChange={()=>setSwitchValue(!switchValue)} />
                        </label>
                        <h3 class={`text-2xl font-semibold capitalize ${!switchValue ? 'text-primary':''}`}>yearly</h3>
                    </div>    
                    <span class="text-sm font-medium whitespace-nowrap rounded-3xl px-2 py-0.5 border border-primary text-primary">20% Off</span>
                </div>
            </div>
            <div class="relative">
                <div class="overflow-x-auto overflow-y-hidden shadow-card rounded-3xl bg-white">
                    <span class="absolute -z-10 top-32 left-1/2 -translate-x-1/2 w-[580px] h-[75px] rotate-[35deg] blur-[300px] bg-[#FFA087]"></span>
                    <table class="w-full">
                        <thead class="border-b border-[#E7EAEF]">
                            <tr>
                                <th class="py-8 px-6 text-left align-bottom">
                                    <h4 class="w-full max-w-40 sm:max-w-72 text-2xl sm:text-3xl font-bold">Services in Package</h4>
                                </th>
                                <th class="py-8 px-6">
                                    <h4 class="mb-4 text-lg sm:text-2xl font-bold capitalize text-primary">Bronze</h4>
                                    <h5 class="mb-6 text-2xl sm:text-[32px] font-bold">$199 <sub class="text-sm sm:text-base line-through bottom-0 text-[#818B9B]">$299</sub></h5>
                                    <button class="px-8 flex items-center rounded-full text-lg font-bold capitalize h-12 whitespace-nowrap text-white bg-primary">buy now</button>
                                </th>
                                <th class="py-8 px-6">
                                    <h4 class="mb-4 text-lg sm:text-2xl font-bold capitalize text-[#0378FF]">Silver</h4>
                                    <h5 class="mb-6 text-2xl sm:text-[32px] font-bold">$399 <sub class="text-sm sm:text-base line-through bottom-0 text-[#818B9B]">$499</sub></h5>
                                    <button class="px-8 flex items-center rounded-full text-lg font-bold capitalize h-12 whitespace-nowrap text-white bg-[#0378FF]">buy now</button>
                                </th>
                                <th class="py-8 px-6">
                                    <h4 class="mb-4 text-lg sm:text-2xl font-bold capitalize text-[#FF9500]">Gold</h4>
                                    <h5 class="mb-6 text-2xl sm:text-[32px] font-bold">$499 <sub class="text-sm sm:text-base line-through bottom-0 text-[#818B9B]">$699</sub></h5>
                                    <button class="px-8 flex items-center rounded-full text-lg font-bold capitalize h-12 whitespace-nowrap text-white bg-[#FF9500]">buy now</button>
                                </th>
                                <th class="py-8 px-6">
                                    <h4 class="mb-4 text-lg sm:text-2xl font-bold capitalize text-[#8447FF]">Platinum</h4>
                                    <h5 class="mb-6 text-2xl sm:text-[32px] font-bold">$699 <sub class="text-sm sm:text-base line-through bottom-0 text-[#8447FF]">$1299</sub></h5>
                                    <button class="px-8 flex items-center rounded-full text-lg font-bold capitalize h-12 whitespace-nowrap text-white bg-[#1DB8AA]">buy now</button>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                services.map((service,index)=>(
                                <tr key={index} class="border-b last:border-none border-[#E7EAEF]">
                                    <td class="p-6 pt-8 flex items-center gap-3">
                                        <p class="text-base sm:text-lg font-medium whitespace-nowrap overflow-hidden text-ellipsis max-w-60">{ service.name }</p>
                                        <div class="relative w-fit group">
                                            <i class="lab-line-info mt-0.5 cursor-pointer text-[#818B9B]"></i>
                                            <span class=" inline-block absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full z-10 w-80 px-2.5 py-2 rounded-lg text-sm shadow-md text-white bg-black transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:-translate-y-[107%]
                                                after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:z-10 after:border-[10px] after:rotate-45 after:rounded after:border-black ">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis magni temporibus dignissimos cum sed corrupti rem? Nam non facilis repellendus ut, ipsam doloribus eligendi sunt corporis. Animi nemo amet voluptatem
                                            </span>
                                        </div>
                                    </td>
                                    <td class="text-center">
                                        <i class={`text-xl sm:text-2xl leading-none ${service.bronze ? 'icon-check-circle text-[#31C970]' : 'icon-close-circle text-[#F55858]'}`} ></i>
                                        {/* <p v-if="typeof service.bronze === 'string'" class="text-base sm:text-lg font-bold">{ service.bronze }</p> */}
                                    </td>
                                    <td class="text-center">
                                        <i class={`text-xl sm:text-2xl leading-none ${service.silver ? 'icon-check-circle text-[#31C970]' : 'icon-close-circle text-[#F55858]'}`}></i>
                                        {/* <p v-if="typeof service.silver === 'string'" class="text-base sm:text-lg font-bold">{ service.silver }</p> */} 
                                    </td>
                                    <td class="text-center">
                                        <i class={`text-xl sm:text-2xl leading-none ${service.gold ? 'icon-check-circle text-[#31C970]' : 'icon-close-circle text-[#F55858]'}`}></i>
                                        <p v-if="typeof service.gold === 'string'" class="text-base sm:text-lg font-bold">{ service.gold }</p>
                                    </td>
                                    <td class="text-center">
                                        <i class={`text-xl sm:text-2xl leading-none ${service.platinum ? 'icon-check-circle text-[#31C970]' : 'icon-close-circle text-[#F55858]'}`}></i>
                                        <p v-if="typeof service.platinum === 'string'" class="text-base sm:text-lg font-bold">{ service.platinum }</p>
                                    </td>
                                </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
    {/* // <!--==============================
    //         PRICING PART END                  
    // ==============================--> */}
        </>
    )
}