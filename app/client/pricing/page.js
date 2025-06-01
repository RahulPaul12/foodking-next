'use client'
import { useState } from "react"
import plans from '@/json/pricing-plans.json'
import addonplans from "@/json/addonplans.json"
import Link from "next/link"
export default function Pricing (){
    const [plantype, setPlantype] = useState('regular')
    const licenseFeature = [
        {id:1, name:"Lifetime License Validity", regular: true, extended:true},
        {id:2, name:"Permitted for 1 Domain", regular: true, extended:true},
        {id:3, name:"6 months of general and technical support", regular: true, extended:true},
        {id:4, name:"All Premium Features", regular: true, extended:true},
        {id:4, name:"Lifetime FREE Update", regular: true, extended:true},
        {id:1, name:"For Personal Project", regular: true, extended:true},
        {id:2, name:"For Commercial Projects [if end product is paid]", regular: false, extended:true},
        {id:3, name:"Postman Collection for REST API Documentation", regular: false, extended:true},
        {id:4, name:"Admin Panel FREE Installation in cPanel [One Time]", regular: false, extended:true},
        {id:4, name:"Priority Support", regular: false, extended:true},
     ]
    return (
        <>

        {/*   
          <!--===============================
                 HERO PART START 
        =================================--> */}
        <section className="pt-26 lg:pt-38 mb-12 relative">
           <span className="bg-linear-180 from-[#ffc4dc] to-white blur-[350px] w-full absolute -z-10 top-0 h-full"></span>
           <div className="container">
               <span className="text-sm sm:text-base font-semibold text-primary px-6 py-3.5 rounded-full shadow-title w-fit block mx-auto mb-3 bg-white">FoodKing Demo</span>
               <div className="max-w-[790px] w-full mx-auto">
                   <h1 className="text-3xl lg:text-[42px] font-bold text-center leading-tight mb-6">No Monthly Bills—Just a<span className="gradient-text"> One-Time Purchase </span>and Full Access</h1>
                   <p className="text-base lg:text-lg font-normal text-center lg:px-24">Choose the perfect plan for your multi-branch restaurant business and get started instantly!</p>
               </div>
           </div>
        </section>
    {/* <!--==============================
                   HERO PART END 
       =================================--> */}


    {/* <!--==============================
         PRICING PLAN PART START
     =================================--> */}
     <section className="mb-20 sm:mb-40" id="pricing-plan">
        <div className="container">
            <div className="bg-white rounded-full shadow-navbar w-fit mx-auto mb-12 p-2 flex gap-6 items-center h-[60px]">
                 <button onClick={()=>setPlantype('regular')} type="button" className={`w-full rounded-full font-bold capitalize cursor-pointer ${plantype== 'regular'? 'text-white gradient-button py-3 px-8' : 'text-black ps-8' }`}>Regular</button>
                 <button onClick={()=>setPlantype('extended')} type="button" className={`w-full rounded-full font-bold capitalize cursor-pointer ${plantype== 'extended'? 'text-white gradient-button py-3 px-8' : 'text-black pr-8' }`}>Extended</button>
            </div> 
           <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {
                plans.map((plan, index)=>(
                    <div key={index} className="group p-6 rounded-3xl border border-[#E7EAEF] hover:border-secondary bg-white hover:bg-linear-180 hover:from-[#FFF7FA] hover:to-[#FFF]">
                    <div className="flex justify-between mb-4">
                        <div className="w-9 h-9 rounded-full bg-[#FFE4F0] flex items-center justify-center"><i className={`${plan.icon} text-primary`}></i></div>
                        <span className={`${plan.most_popular ? 'block':'hidden'} text-xs font-semibold bg-[#007EDD] h-fit px-2 py-1.5 rounded-full text-white`}>Most Popular</span>
                    </div>
                    <h2 className="text-primary font-bold text-2xl mb-3">{ plan.title }</h2>
                    <p className="text-base font-semibold mb-6">{ plan.subtitle }</p>
                    <h6 className={`text-[42px] font-bold leading-tight mb-8 ${plantype== 'regular' ? 'block':'hidden'} `}><span>$</span>{ plan.regular_price }</h6>
                    <h6 className={`text-[42px] font-bold leading-tight mb-8 ${plantype== 'extended' ? 'block':'hidden'} `}><span>$</span>{ plan.extended_price }</h6>
                    <button className="mb-8 w-full cursor-pointer py-3.5 px-8 border border-secondary rounded-full text-base sm:text-lg leading-6 font-bold text-transparent bg-clip-text gradient-button group-hover:bg-clip-border group-hover:text-white !shadow-none group-hover:!shadow-[0px_8px_32px_0px_rgba(255,22,107,0.25)]">Buy Now</button>
                    <ul className="flex flex-col gap-5">
                        {
                         plan.features.map((feature,index)=>(
                            <li
                            key={index}
                            className="flex items-start gap-3"> 
                            <i className={`text-2xl ${feature.type? 'icon-line-check text-[#31C970]':'icon-line-minus text-[#818B9B]'}`}></i>
                            <span className={`text-lg font-medium leading-tight ${feature.type? '':'text-[#818B9B]' }`}>{feature.name }</span>
                            </li>
                         ))   
                        }
                    </ul>
                </div>
                ))
            }
            </div>
        </div>
     </section>
     {/* <!--==============================
            PRICING PLAN PART END
     =================================--> */}


    {/* <!--===============================
        LICENSE COMPARISON PART START
     =================================--> */}
     <section className="mb-20 sm:mb-40">
        <div className="container">
            <span className="text-sm sm:text-base font-semibold text-primary px-6 py-3 rounded-full shadow-title w-fit block mx-auto mb-3 bg-white">Difference Between Regular & Extended</span>
            <div className="max-w-[790px] w-full mx-auto mb-12">
                <h1 className="text-3xl lg:text-[42px] font-bold text-center leading-tight mb-6">Look at the<span className="gradient-text"> License Comparison </span></h1>
                <p className="text-base lg:text-lg font-normal text-center lg:px-24">Get the right license for your goals and deliver a stronger, more valuable experience to your customers.</p>
            </div>
            <div className="relative">
                <div className="bg-white shadow-[0px_6px_12px_0px_rgba(156,174,186,0.10)] rounded-3xl overflow-x-auto overflow-y-hidden">
                    <span className="absolute -z-10 top-32 left-1/2 -translate-x-1/2 w-[580px] h-[75px] rotate-[35deg] blur-[300px] bg-[#FFA087]"></span>
                <table className="w-full">
                    <thead className="border-b last:border-none border-[#E7EAEF]">
                        <tr className="[&_th]:first:text-left align-bottom ">
                            <th className="p-6">
                                <h2 className="text-[32px] font-bold">License <br/> Features <span className="text-lg font-medium">(As per Envato policy)</span></h2>
                            </th>
                            <th className="p-6">
                                <h2 className="text-2xl font-bold mb-4 text-nowrap">Regular License</h2>
                                <Link href={'#pricingplan'} onClick={()=>setPlantype('regular')} className="block w-fit mx-auto cursor-pointer py-2 px-6 border border-secondary rounded-full text-base font-bold text-transparent bg-clip-text gradient-button shadow-none hover:bg-clip-border hover:text-white">Buy Now</Link>
                            </th>
                            <th className="p-6">
                                <h2 className="text-2xl font-bold mb-4 text-nowrap">Extended License</h2>
                                <Link href={'#pricingplan'} onClick={()=>setPlantype('extended')} className="block w-fit mx-auto cursor-pointer py-2 px-6 border border-secondary rounded-full text-base font-bold text-transparent bg-clip-text gradient-button shadow-none hover:bg-clip-border hover:text-white">Buy Now</Link>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            licenseFeature.map((feature,index)=>(
                            <tr key={index} className="border-b last:border-none border-[#E7EAEF] [&_td]:text-lg font-medium [&_tD]:first:text-left text-center">
                                <td className="p-6">{ feature.name }</td>
                                <td className="p-6"><i className={`text-2xl ${feature.regular? 'icon-check-circle text-[#31C970]': 'icon-close-circle text-[#F55858]'}`}></i></td>
                                <td className="p-6"><i className={`text-2xl ${feature.extended? 'icon-check-circle text-[#31C970]': 'icon-close-circle text-[#F55858]'}`}></i></td>
                            </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            </div>
        </div>
     </section>
    {/* //  <!--===============================
    //     LICENSE COMPARISON PART END
    //  =================================--> */}


    {/* <!--===============================
           ADDON PRICING PART START
     =================================--> */}
     <section>
        <div className="pt-20 pb-20 sm:pb-40 md:px-20 step-curve-bg">
            <div className="container">
                <span className="text-sm sm:text-base font-semibold text-primary px-6 py-3 rounded-full shadow-title w-fit block mx-auto mb-3 bg-white">Addon Pricing</span>
                <div className="max-w-[460px] md:max-w-[542px] lg:max-w-[742px] w-full mx-auto flex flex-col items-center justify-center px-6 lg:px-0 mb-12">
                    <h1 className="text-3xl lg:text-[42px] font-bold text-center leading-tight mb-6">Supercharge with Premium<span className="gradient-text"> FoodKing Addons </span>– See the Prices</h1>
                    <p className="text-base lg:text-lg font-normal text-center lg:px-10">Explore advanced features designed to boost performance and tailor your system to your needs.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {
                        addonplans.map((plan,index)=>(
                        <div key={index} className="p-6 rounded-2xl shadow-stepcard bg-linear-180 from-[#FFFAFC] to-[#FFFF]">
                            <div className="mb-4">
                                <img className="w-12 drop-shadow-[0px_8px_16px_rgba(221,49,144,0.25)] mb-6" src={`${plan.logo}`}/>
                                <h6 className="text-2xl font-bold mb-4">{ plan.name }</h6>
                                <p className="text-base font-normal">{ plan.subtitle }</p>
                            </div>
                            <div className="border-b last:border-none border-[#E5EDF3] flex justify-between items-center pt-6 pb-6">
                                <div>
                                    <p>Regular License</p>
                                    <h6 className="text-[28px] font-semibold text-primary">${ plan.regular_price }</h6>
                                </div>
                                <button className="cursor-pointer h-11 px-6 border border-secondary rounded-full text-base font-bold text-transparent bg-clip-text gradient-button hover:bg-clip-border hover:text-white !shadow-none hover:!shadow-[0px_8px_32px_0px_rgba(255,22,107,0.25)]">Buy Now</button>
                            </div>
                            <div className="border-b last:border-none border-[#E5EDF3] flex justify-between items-center pt-6 last:pb-0">
                                <div>
                                    <p>Extended License</p>
                                    <h6 className="text-[28px] font-semibold text-primary">${ plan.extended_price }</h6>
                                </div>
                                <button className="cursor-pointer h-11 px-6 border border-secondary rounded-full text-base font-bold text-transparent bg-clip-text gradient-button hover:bg-clip-border hover:text-white !shadow-none hover:!shadow-[0px_8px_32px_0px_rgba(255,22,107,0.25)]">Buy Now</button>
                            </div>
                        </div>
                        ))
                    }
                </div>
            </div>
        </div>
     </section> 
     {/* <!--===============================
           ADDON PRICING PART END
     =================================--> */}


    {/* <!--===============================
              ACTION PART START 
     =================================--> */}
     <section className="container">
        <div className="mb-20 sm:mb-40">
            <div className="p-8 md:p-12 rounded-2xl bg-custom-gradient relative z-0">
                <img className="absolute right-0 top-0 -z-1 max-w-[455px] w-full"  src="/images/vector/Union.png"/>
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-3xl md:text-[42px] leading-tight text-center font-bold mb-3">Start Your Journey with FoodKing & Build a
                        <span className="gradient-text"> Restaurant Business </span>
                        Today!
                        </h2>
                    <p className="text-base font-normal text-center mb-6">Stay ahead in the game with the best restaurant business solution.</p>
                    <div className="flex flex-wrap gap-6 items-center justify-center">
                         <button className="cursor-pointer py-3.5 px-8 rounded-full text-white text-base sm:text-lg leading-6 font-bold gradient-button">Buy Now</button>
                         <button className="cursor-pointer py-3.5 px-8 border border-secondary rounded-full text-base sm:text-lg leading-6 font-bold text-transparent bg-clip-text gradient-button hover:bg-clip-border hover:text-white !shadow-[0px_8px_32px_0px_rgba(162,110,129,0.25)]">Explore Demo</button>
                    </div>
                </div>
            </div>
        </div>    
     </section>
     {/* <!--===============================
              ACTION PART END 
     =================================--> */}

      </>
    )
}