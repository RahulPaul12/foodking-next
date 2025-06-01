import installationplan from '@/json/installationplan.json'
import Link from 'next/link'
export default function Installation(){
    const choices = [
        {id:1, icon:"icon-light-creator", name:"Creator of FoodKing", desc:"We made FoodKing, you can count on us for a smooth, worry-free installation."},
        {id:2, icon:"icon-fill-installation", name:"Professional Installation", desc:"Our team of experts ensures the software is installed accurately and perfectly setup for publishing & running the business."},
        {id:3, icon:"icon-doc-check", name:"Compatibility Check", desc:"Before installation, we check for compatibility with your environment and make necessary adjustments."},
        {id:4, icon:"icon-fill-testing", name:"Testing & Verification", desc:"We are dedicated to delivering your project with a rigorous 100% quality assurance process by our software quality assurance team."},
        {id:5, icon:"icon-fill-safety", name:"Enhanced Security", desc:"We prioritize security throughout the installation process to safeguard your system and data."},
        {id:6, icon:"icon-fill-support", name:"Ongoing Support", desc:"With our installation plans, you gain access to dedicated support for any technical questions."}
    ]
    return (
        <>
           {/* <!--===============================
                     HERO PART START 
           =================================--> */}
           <section className="pt-26 lg:pt-38 mb-12 sm:mb-16 relative">
              <span className="bg-linear-180 from-[#ffc4dc] to-white blur-[350px] w-full absolute -z-10 top-0 h-[400px]"></span>
              <div className="container">
                  <div className="max-w-[790px] w-full mx-auto">
                      <h1 className="text-3xl lg:text-[42px] font-bold text-center leading-tight mb-6">Hassle-Free Setup with Our<span className="gradient-text"> Installation Packages </span></h1>
                      <p className="text-base lg:text-lg font-normal text-center lg:px-24">Purchased the latest FoodKing on CodeCanyon? Explore our installation plans and get started fast.</p>
                  </div>
              </div>
           </section>
           {/* <!--==============================
                 HERO PART END 
           =================================--> */}


     {/* <!--===============================
       INSTALLATION PACKAGE PART START 
     =================================--> */}
     <section className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 sm:mb-40">
            {
                installationplan.map((plan,index)=>(
                    <div key={index} className="group p-4 rounded-3xl border border-[#E7EAEF] hover:border-secondary bg-white hover:bg-linear-180 hover:from-[#FFF7FA] hover:to-[#FFF]">
                    <div className="flex justify-between mb-4">
                        <div className="w-9 h-9 rounded-full bg-[#FFE4F0] flex items-center justify-center"><i className={`${plan.icon} text-primary`}></i></div>
                        <span className={`${plan.popular ? 'block':'hidden'} text-xs font-semibold bg-[#007EDD] h-fit px-2 py-1.5 rounded-full text-white`}>Most Popular</span>
                    </div>
                    <h2 className="text-primary font-bold text-2xl mb-3">{ plan.title }</h2>
                    <p className="text-base font-semibold mb-6">{ plan.subtitle }</p>
                    <div className="flex gap-2 items-end mb-6">
                        <h6 className="text-3xl font-bold"><span>$</span>{ plan.price }</h6>
                        <small className="text-base font-bold text-[#818B9B] line-through"><span>$</span>{ plan.old_price }</small>
                    </div>
                    <button className="mb-8 w-full cursor-pointer py-2.5 sm:py-3.5 px-6 sm:px-8  text-base sm:text-lg leading-6 font-bold gradient-button gradient-text-btn">Buy Now</button>
                    <ul className="flex flex-col gap-5">
                        {
                            plan.features.map((feature,index)=>(
                                <li key={index} className="flex items-start gap-3"> 
                                <i className={`text-2xl ${feature.enable? 'icon-line-check text-[#31C970]':'icon-line-minus text-[#818B9B]'}`}></i>
                                <span className={`text-lg font-medium leading-tight ${feature.enable? '':'text-[#818B9B]'}`}>{ feature.name }</span>
                                </li>
                            ))
                        }
                    </ul>
                   </div>
                ))
            }
        </div>
     </section>
    {/* <!--===============================
       INSTALLATION PACKAGE PART START 
     =================================--> */}


    {/* <!--===============================
        RIGHT CHOICE PART START 
     =================================--> */}
     <section className="mb-20 sm:mb-40">
        <div className="container relative">
            <span className="absolute -z-10 top-32 left-1/2 -translate-x-1/2 w-[580px] h-[75px] rotate-[35deg] blur-[300px] bg-[#FFA087]"></span>
            <div className="max-w-[742px] w-full mx-auto mb-12 sm:mb-16">
                <h1 className="text-3xl lg:text-[42px] font-bold text-center leading-tight mb-6">What Makes Our Installation Plans the<span className="gradient-text"> Right Choice </span>for You?</h1>
                 <p className="text-base lg:text-lg font-normal text-center lg:px-24">We provide a clean, precise installation and configuration for smooth, uninterrupted operation.</p>
            </div>
            <div className="flex flex-wrap gap-6">
                {
                    choices.map((choice,index)=>(
                    <div key={index} id={`choice-${choice.id}`} className="bg-white rounded-2xl p-6 shadow-faq hover:shadow-card transition-all duration-300 relative">
                        <i className={`text-[36px] mb-6 bg-clip-text text-transparent shadow-none vector-bg-${choice.id} ${choice.icon}`}></i>
                        <h6 className="text-2xl font-bold mb-3">{choice.name}</h6>
                        <p className="text-base font-normal">{choice.desc}</p>
                    </div>
                    ))
                }
            </div>
        </div>
     </section>
     {/* <!--===============================
        RIGHT CHOICE PART END 
     =================================--> */}


     {/* <!--===============================
              ACTION PART START 
     =================================--> */}
     <section className="container">
        <div className="mb-16 sm:mb-20 md:mb-40">
            <div className="p-8 md:p-12 rounded-2xl bg-custom-gradient relative">
                <div className="relative">
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="text-3xl md:text-[42px] leading-tight text-center font-bold mb-3">Curious to
                            <span className="gradient-text"> Discuss More </span>
                            About FoodKing?
                            </h2>
                        <p className="text-base font-normal text-center mb-6">FoodKing is built using modern, secure, and scalable technologies to ensure top-tier performance and reliability.</p>
                        <div className="flex flex-wrap items-center max-lg:justify-center gap-4">
                            <Link href={''} className="h-[52px] !leading-[52px] px-6 rounded-full gradient-button text-base sm:text-lg font-semibold capitalize flex items-center gap-3 text-white">
                                <i className="icon-line-tidycal text-2xl"></i>
                                Book a Meeting
                            </Link>
                            <Link href={''} className="h-[52px] !leading-[52px] px-6 rounded-full whatsapp-gradient flex items-center gap-3 text-white">
                                <i className="icon-line-whatsapp text-2xl"></i>
                                <span className="text-base sm:text-lg font-semibold capitalize">WhatsApp</span>
                            </Link>
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