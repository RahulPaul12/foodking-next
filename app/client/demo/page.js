import features from '@/json/ecosystem.json'
import globalbusiness from '@/json/globalBusiness.json'
export default function Demo (){

    return (
        <>
        {/* // <!--===============================
        //            HERO PART START 
        // =================================--> */}
        <section className="h-auto w-full pt-26 lg:pt-38 relative">
           <span className="bg-linear-180 from-[#ffc4dc] to-white blur-[350px] w-full absolute -z-10 top-0 h-full"></span>
           <div className="container">
               <span className="text-sm sm:text-base font-semibold text-primary px-6 py-3.5 rounded-full shadow-title w-fit block mx-auto mb-3 bg-white">FoodKing Demo</span>
               <div className="max-w-[742px] w-full mx-auto">
                   <h1 className="text-3xl lg:text-[42px] font-bold text-center leading-tight mb-6">Turn Your<span className="gradient-text"> Restaurant Vision Into Reality </span>with FoodKing</h1>
                   <p className="text-base lg:text-lg font-normal text-center lg:px-24 mb-8 sm:mb-6">Take a tour! Try our FoodKing demo and see how it can boost your multi-branch restaurant business.</p>
               </div>
               <div className="flex flex-col sm:flex-row gap-2 items-center justify-center mb-8 sm:mb-12">
                   <div className="flex gap-2">
                       <h6 className="text-base font-bold">Excellent</h6>
                       <div className="flex gap-0.5 items-center [&_i]:text-xl [&_i]:text-[#FFB900]">
                           <i className="icon-fill-star"></i>
                           <i className="icon-fill-star"></i>
                           <i className="icon-fill-star"></i>
                           <i className="icon-fill-star"></i>
                           <i className="icon-fill-star"></i>
                       </div>
                   </div>
                   <div className="flex sm:flex-row flex-col gap-2 items-center justify-center">
                       <p className="text-base"><span className="font-bold">4.9 </span>out of 5 based on<span className="font-bold"> 50+ reviews</span></p>
                       <img className="ms-1 h-5 w-fit" src="/images/envato/codecannyon.png"/>
                   </div>
               </div>
           </div>
        </section>
    {/* //    <!--==============================
    //              HERO PART END 
    //    =================================--> */}


{/* //     <!--===============================
//     RESTAURANT ECOSYSTEM PART START 
//  =================================--> */}
 <section className="mb-20 sm:mb-40">
    <div className="container">
        <div className="w-full px-6 py-4 rounded-2xl border border-[#FFF4BC] bg-[#FFFEF4] mb-8">
            <h6 className="text-[15px] font-semibold mb-3.5 flex items-center gap-2">
                <i className="icon-fill-danger text-[#FFCC40] text-2xl"></i>
                Important Note for Demo:
            </h6>
             <p className="text-[15px] font-normal">The system refreshes every 1 hour and your all demo data will be removed. So, you may need to clear your cookies and login again using demo credentials.</p>
        </div>
        <div className="flex flex-wrap gap-6">
            {
                features.slice(0,6).map((feature, index)=>(
                    <div key={index} id={`card-${feature.id}`} className="group bg-[#F6F9FC] rounded-2xl p-6 hover:shadow-card hover:bg-white transition-all duration-300 relative">
                        <div className="flex items-start justify-between">
                            <div className={`w-9 h-9 rounded-full mb-6 flex items-center justify-center vector-bg-${feature.id}`}>
                                <i className={`text-xl text-white ${feature.vector}`}></i>
                            </div>
                            <div  className={`absolute right-0 shadow-badge ${feature.addon ? 'block': 'hidden'}`}>
                                <div className="relative overflow-y-clip bg-linear-270 from-secondary to-primary">
                                    <div className="w-6 h-6 rotate-45 bg-primary absolute -left-3 "></div>
                                    <div className="p-1 h-6 text-sm font-semibold text-white flex items-center relative z-10">Add-On</div>
                                </div>
                            </div>
                        </div>
                        <h6 className="text-2xl font-bold mb-3">{feature.name}</h6>
                        <p className="text-base font-normal mb-6">{feature.desc}</p>
                        <button className="w-fit cursor-pointer py-3.5 px-6 border border-secondary rounded-full text-base leading-4.5 font-bold gradient-text gradient-button shadow-none group-hover:bg-clip-border group-hover:text-white">Explore Demo</button>
                    </div>
                ))
            }
        </div>
    </div>
 </section>
{/* //  <!--===============================
//     RESTAURANT ECOSYSTEM PART END 
//  =================================--> */}


{/* <!--===============================
            ADDON DEMO PART START 
     =================================--> */}
     <section className="mb-20 sm:mb-40">
        <div className="container">
            <span className="text-sm sm:text-base font-semibold text-primary px-6 py-3.5 rounded-full shadow-title w-fit block mx-auto mb-3">Addons Demo</span>
            <div className="max-w-[934px] w-full mx-auto mb-12 sm:mb-16">
                <h1 className="text-3xl lg:text-[42px] font-bold text-center leading-tight mb-6">Turn Up the Flavor<span className="gradient-text"> with Addons!</span></h1>
                 <p className="text-base lg:text-lg font-normal text-center lg:px-24">Discover addons that bring flexibility, automation, and convenience — all in one seamless experience.</p>
            </div>
            <div className="flex flex-wrap gap-6">
                {
                    features.slice(6).map((feature,index)=>(
                        <div key={index} id={`card-${feature.id}`} className="group bg-[#F6F9FC] rounded-2xl p-6 hover:shadow-card hover:bg-white transition-all duration-300 relative">
                            <div className="flex items-start justify-between">
                                <div className={`w-9 h-9 rounded-full mb-6 flex items-center justify-center vector-bg-${feature.id}`}>
                                    <i className={`text-xl text-white ${feature.vector}`}></i>
                                </div>
                                <div v-if="feature.addon" className="absolute right-0 shadow-badge">
                                    <div className="relative overflow-y-clip bg-linear-270 from-secondary to-primary">
                                        <div className="w-6 h-6 rotate-45 bg-primary absolute -left-3 "></div>
                                        <div className="p-1 h-6 text-sm font-semibold text-white flex items-center relative z-10">Add-On</div>
                                    </div>
                                </div>
                            </div>
                            <h6 className="text-2xl font-bold mb-3">{feature.name}</h6>
                            <p className="text-base font-normal mb-6">{feature.desc}</p>
                            <button className="w-fit cursor-pointer py-3.5 px-6 border border-secondary rounded-full text-base leading-4.5 font-bold gradient-text gradient-button shadow-none group-hover:bg-clip-border group-hover:text-white">Explore Demo</button>
                        </div>
                    ))
                }
            </div>
        </div>
     </section>
     {/* <!--===============================
             ADDON DEMO PART END 
     =================================--> */}


    {/* <!--===============================
        GLOBAL CUSTOMER PART START 
     =================================--> */}
     <section>
        <div className="pt-20 pb-20 sm:pb-40 md:px-20 step-curve-bg">
            <div className="container">
                <div className="max-w-[460px] md:max-w-[542px] lg:max-w-[742px] w-full mx-auto flex flex-col items-center justify-center px-6 mb-12">
                    <h1 className="text-3xl lg:text-[42px] font-bold text-center leading-tight mb-6">FoodKing Powered<span className="gradient-text"> 800+ Businesses </span>Across the Globe</h1>
                    <p className="text-base lg:text-lg font-normal text-center lg:px-10">See what’s possible with FoodKing — these live businesses using FoodKing. Start your journey with FoodKing and create a business just like these today!</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    {
                        globalbusiness.map((customer,index)=>(
                            <div key={index} className="p-6 sm:p-8 rounded-2xl bg-linear-0 from-[#fff] to-[#FFFAFC] shadow-stepcard">
                                <div>
                                    <img className="w-full h-full mb-8" src={`${customer.img}`}/>
                                </div>
                                <div className="flex justify-between mb-4">
                                    <h3 className="text-[28px] sm:text-[32px] font-bold leading-tight">{ customer.name }</h3>
                                    <div className="flex items-center gap-2 px-4 py-2 rounded-full shadow-country">
                                        <img className="w-5 sm:w-6" src={`${customer.flag}`}/>
                                        <span className="text-sm sm:text-base font-medium">{ customer.country }</span>
                                    </div>
                                </div>
                                <p className="text-sm sm:text-base font-normal text-[#323D4E]">{ customer.desc }</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
     </section>            
    {/* <!--===============================
        GLOBAL CUSTOMER PART START 
     =================================--> */}


     {/* <!--===============================
              ACTION PART START 
     =================================--> */}
     <section className="container">
        <div className="mb-16 sm:mb-20 md:mb-40">
            <div className="p-8 md:p-12 rounded-2xl bg-custom-gradient relative">
                <div className="relative">
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="text-3xl md:text-[42px] leading-tight text-center font-bold mb-6">Start Your Journey with FoodKing & Build a
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
        </div>    
     </section>
     {/* <!--===============================
              ACTION PART END 
     =================================--> */}

</>
    )
}