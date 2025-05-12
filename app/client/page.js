import ecosystems from '@/json/ecosystem.json'
import steps from '@/json/steps.json'
export default function Home() {
    return (
      <>
       {/* <!--===============================
           HERO PART START 
     =================================--> */}
     <section className="h-auto w-full sm:mb-50 pt-26 lg:pt-34 bg-[url('/images/hero-bg.png')] bg-cover bg-center bg-no-repeat pb-5">
          <div className="container">
            <div className="max-w-[934px] w-full mx-auto">
                <h1 className="text-3xl lg:text-[48px] font-bold text-center leading-tight mb-6">All-in-One <span className="gradient-text"> Multi Branch Restaurant </span>Business & Delivery Solution</h1>
                <p className="text-base lg:text-lg font-normal text-center lg:px-24 mb-8 sm:mb-6">Start your restaurant food delivery business with FoodKing, the all-in-one system for orders, deliveries, POS, inventory, and many more. Perfect for cafés to multi-chain businesses, it streamlines operations and enhances customer experience.</p>
            </div>
            <div className="flex gap-6 items-center justify-center mb-12">
                <button className="cursor-pointer py-2.5 sm:py-3.5 px-6 sm:px-8 rounded-full text-white text-base sm:text-lg leading-6 font-bold gradient-button">Buy Now</button>
                <button className="cursor-pointer py-2.5 sm:py-3.5 px-6 sm:px-8 border border-secondary rounded-full text-base sm:text-lg leading-6 font-bold text-transparent bg-clip-text gradient-button hover:bg-clip-border hover:text-white">Explore Demo</button>
            </div>
            <div className="flex sm:flex-row flex-col items-center gap-3 justify-center mb-8">
                <div className="flex -space-x-4">
                    <img className="w-13 h-13 rounded-full border-[2px] border-[#FDF5F5]" src="/images/user/user1.png" alt="user1" />
                    <img className="w-13 h-13 rounded-full border-[2px] border-[#FDF5F5]" src="/images/user/user2.png" alt="user2" />
                    <img className="w-13 h-13 rounded-full border-[2px] border-[#FDF5F5]" src="/images/user/user3.png" alt="user3" />
                    <img className="w-13 h-13 rounded-full border-[2px] border-[#FDF5F5]" src="/images/user/user4.png" alt="user4" />
                    <span><i className="icon-fill-circle-plus text-[52px] text-transparent bg-primary bg-clip-text"></i></span>
                </div>
                <div>
                    <p className="text-sm font-normal uppercase">trusted by</p>
                    <h6 className="text-base font-bold"><span className="text-primary">800+ </span>Customers</h6>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 items-center justify-center mb-12">
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
                    <img className="ms-1 h-5 w-fit" src="/images/vector/codecannyon.png"/>
                </div>
            </div>
            <div className="relative">
                <img className="w-full sm:-mb-[30%]" src="/images/hero.png"/>
                <div className="absolute p-5 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                    <span className="relative flex size-20 sm:size-[124px]">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF006B] opacity-75"></span>
                        <span className="relative flex items-center justify-center size-20 sm:size-[124px] rounded-full bg-white ">
                            <span className="relative flex items-center justify-center size-12 sm:size-[88px] rounded-full bg-[#FF006B] ">
                                <i className="icon-fill-play text-lg sm:text-[32px] text-white"></i>
                            </span>
                        </span>
                    </span>
                </div>
            </div>
        </div>
     </section>
     {/* <!--==============================
           HERO PART END 
     =================================--> */}

     {/* <!--===============================
        RESTAURANT ECOSYSTEM PART START 
     =================================--> */}
     <section className="py-16 md:py-20 lg:py-40">
        <div className="container">
            <div className="max-w-[934px] w-full mx-auto mb-12 sm:mb-16">
                <h1 className="text-3xl lg:text-[42px] font-bold text-center leading-tight mb-6">FoodKing Comes Packed with<span className="gradient-text"> Everything to Maintain </span>Your Restaurant Ecosystem</h1>
                 <p className="text-base lg:text-lg font-normal text-center lg:px-24">From admin to kitchen, dine-in to delivery, customers to delivery man, FoodKing connects every part of your restaurant for a seamless experience.</p>
            </div>
            <div className="flex flex-wrap gap-6">
                {
                    ecosystems.map((ecosystem,index)=>(
                        <div key={index} id={`feature-${ecosystem.id}`} className="bg-[#F6F9FC] rounded-2xl p-6 hover:shadow-card hover:bg-white transition-all duration-300 relative">
                            <div className="flex items-start justify-between">
                                <div className={`w-9 h-9 rounded-full mb-6 flex items-center justify-center vector-bg-${ecosystem.id}`}>
                                    <img width="20px" src={`${ecosystem.vector}`}/>
                                </div>
                                <div className={`absolute right-0 shadow-badge ${ecosystem.addon ? 'block':'hidden'}`}>
                                    <div className="relative overflow-y-clip bg-linear-270 from-secondary to-primary">
                                        <div className="w-6 h-6 rotate-45 bg-primary absolute -left-3 "></div>
                                        <div className="p-1 h-6 text-sm font-semibold text-white flex items-center relative z-10">Add-On</div>
                                    </div>
                                </div>
                            </div>
                            <h6 className="text-2xl font-bold mb-3">{ecosystem.name}</h6>
                            <p className="text-base font-normal">{ecosystem.desc}</p>
                        </div>
                    )
                )
                }
            </div>
        </div>
     </section>
     {/* <!--===============================
        RESTAURANT ECOSYSTEM PART END 
     =================================--> */}

    {/* <!--===============================
          AUTHOR PROFILE PART START 
     =================================--> */}
     <section className="container">
        <div className="mb-16 sm:mb-20 md:mb-40">
            <div className="p-8 md:p-12 rounded-2xl bg-linear-[90deg,#FFD5E2_0%,#FFEBF7_28%,#EEECFF_62.5%,#FFF7EF_100%]">
            <div className="grid sm:grid-cols-3 gap-6 mb-6">
                <div className="p-6 rounded-2xl bg-white">
                    <img className="h-9 object-cover mb-3.5" src="/images/vector/smile.png" alt="vector"/>
                    <h6 className="text-3xl font-bold text-[#22B08E] mb-3">800+</h6>
                    <p className="text-lg font-medium">Happy Clients Worldwide</p>
                </div>
                <div className="p-6 rounded-2xl bg-white">
                    <img className="h-9 object-cover mb-6" src="/images/vector/item.png" alt="vector"/>
                    <h6 className="text-3xl font-bold text-[#E4156F] mb-3">4.9+</h6>
                    <p className="text-lg font-medium">Happy Clients Worldwide</p>
                </div>
                <div className="p-6 rounded-2xl bg-white">
                    <img className="h-9 object-cover mb-6" src="/images/vector/move-world.png" alt="vector"/>
                    <h6 className="text-3xl font-bold text-[#865DFB] mb-3">Free Update</h6>
                    <p className="text-lg font-medium">Forever, For a Lifetime!</p>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-white">
                    <div className="flex sm:flex-row flex-col items-start sm:items-center gap-3.5 sm:gap-6">
                        <img className="h-9 object-cover" src="/images/vector/world.png" alt="vector"/>
                        <div>
                        <h6 className="text-2xl sm:text-3xl font-bold  text-[#22B08E] mb-3">800+</h6>
                        <p className="text-base sm:text-lg font-medium">Happy Clients Worldwide</p>
                        </div>
                    </div>
                </div>
                <div className="p-6 rounded-2xl bg-white">
                    <div className="flex sm:flex-row flex-col items-start sm:items-center gap-6">
                        <img className="h-9 object-cover" src="/images/vector/badge.png" alt="badge"/>
                        <div>
                        <h6 className="text-2xl sm:text-3xl font-bold text-[#FD7E34] mb-3">Elite Author</h6>
                        <p className="text-base sm:text-lg font-medium">Happy Clients Worldwide</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
     </section>
     {/* <!--===============================
           AUTHOR PROFILE PART END 
     =================================--> */}

    {/* <!--===============================
            SIX STEPS PART START 
     =================================--> */}
     <section>
        <div className="pt-20 pb-16 sm:pb-20 md:pb-40 md:px-20 step-curve-bg">
            <div className="container">
                <div className="max-w-[460px] md:max-w-[542px] lg:max-w-[742px] w-full mx-auto flex flex-col items-center justify-center px-6 mb-8 md:mb-16">
                    <h1 className="text-3xl lg:text-[42px] font-bold text-center leading-tight mb-6">Get Started with FoodKing<span className="text-primary"> in Just Six Simple Steps</span></h1>
                    <p className="text-base lg:text-lg font-normal text-center lg:px-24">Setting up FoodKing is quick and hassle-free. Just follow these 6 steps and start managing your restaurant like a pro.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 lg:gap-0 gap-6 md:gap-8">
                    <div className="flex flex-col gap-6 md:gap-8 lg:col-span-2">
                        {
                            steps.slice(0,3).map((step,index)=>(
                                <div key={index} className="rounded-3xl bg-white shadow-stepcard p-6">
                                    <div className="flex justify-between items-center mb-6">
                                        <div className="w-12 h-12 rounded-full bg-white drop-shadow-stepvector flex justify-center items-center">
                                            <i className={`text-2xl text-primary ${step.icon}`}></i>
                                        </div>
                                        <span className="text-[42px] font-bold text-[#DEEAF2] leading-snug">0{step.id}</span>
                                    </div>
                                    <h6 className="text-2xl font-bold mb-4 line-clamp-2">{step.title}</h6>
                                    <p className="text-lg font-normal line-clamp-2">{step.desc}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className="lg:flex hidden flex-col gap-8 col-span-3">
                        <div className="h-full relative">
                            <svg className="absolute top-18" xmlns="http://www.w3.org/2000/svg" width="150" height="302" viewBox="0 0 150 302" fill="none">
                            <path d="M150 300H107C89.3269 300 75 285.673 75 268V34C75 16.3269 60.6731 2 43 2H0" stroke="#FDE7EE" strokeWidth="3"/>
                            </svg>

                            <svg className="absolute right-0 top-18" xmlns="http://www.w3.org/2000/svg" width="150" height="302" viewBox="0 0 150 302" fill="none">
                            <path d="M0 300H43C60.6731 300 75 285.673 75 268V34C75 16.3269 89.3269 2 107 2H150" stroke="#FDE7EE" strokeWidth="3"/>
                            </svg>

                            <svg className="absolute top-3/7" xmlns="http://www.w3.org/2000/svg" width="150" height="4" viewBox="0 0 150 4" fill="none">
                            <path d="M0 2H150" stroke="#FDE7EE" strokeWidth="3"/>
                            </svg>

                            <svg className="absolute right-0 top-3/7" xmlns="http://www.w3.org/2000/svg" width="150" height="4" viewBox="0 0 150 4" fill="none">
                            <path d="M0 2H150" stroke="#FDE7EE" strokeWidth="3"/>
                            </svg>

                            <svg className="absolute bottom-47" xmlns="http://www.w3.org/2000/svg" width="150" height="302" viewBox="0 0 150 302" fill="none">
                            <path d="M150 2H107C89.3269 2 75 16.3269 75 34V268C75 285.673 60.6731 300 43 300H0" stroke="#FDE7EE" strokeWidth="3"/>
                            </svg>

                            <svg className="absolute right-0 bottom-47" xmlns="http://www.w3.org/2000/svg" width="150" height="302" viewBox="0 0 150 302" fill="none">
                            <path d="M0 2H43C60.6731 2 75 16.3269 75 34V268C75 285.673 89.3269 300 107 300H150" stroke="#FDE7EE" strokeWidth="3"/>
                            </svg>

                            <div className="w-[168px] h-[168px] absolute top-4/12 left-1/2 transform -translate-x-1/2">
                                <img className="h-full w-full object-cover rounded-4xl" src="/images/icon.png" alt="product_icon" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6 md:gap-8 lg:col-span-2">
                        {
                            steps.slice(3,).map((step,index)=>(
                                <div key={index} className="rounded-3xl bg-white shadow-stepcard p-6">
                                    <div className="flex justify-between items-center mb-6">
                                        <div className="w-12 h-12 rounded-full bg-white drop-shadow-stepvector flex justify-center items-center">
                                            <i className={`text-2xl text-primary ${step.icon}`}></i>
                                        </div>
                                        <span className="text-[42px] font-bold text-[#DEEAF2] leading-snug">0{step.id}</span>
                                    </div>
                                    <h6 className="text-2xl font-bold mb-4 line-clamp-2">{step.title}</h6>
                                    <p className="text-lg font-normal line-clamp-2">{step.desc}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
     </section>
     {/* <!--===============================
            SIX STEPS PART END 
     =================================--> */}

    {/* <!--===============================
        PAYMENT GATEWAY PART START 
     =================================--> */}
     <section className="container">
        <div className="mb-16 sm:mb-20 md:mb-40">
            <div className="max-w-[934px] w-full mx-auto flex flex-col items-center justify-center mb-8 md:mb-16">
                <h1 className="text-3xl lg:text-[42px] font-bold text-center leading-tight mb-6">Enhance Business Efficiency with Reliable<span className="text-primary"> Payment </span> &<span className="text-primary"> SMS Gateways </span></h1>
                <p className="text-base lg:text-lg font-normal text-center lg:px-24">Secure, fast, and reliable integrations to keep your operations running smoothly.</p>
            </div>
            <div className="grid md:grid-cols-12 gap-6">
                <div className="md:col-span-6 lg:col-span-8">
                    <div className="bg-[#F6F9FC] rounded-2xl pt-6 lg:pt-8 overflow-hidden">
                        <div className="px-6 lg:px-8 mb-6">
                            <h3 className="text-2xl lg:text-3xl font-bold mb-4">20+ Payment Gateways</h3>
                            <p className="text-sm lg:text-base font-normal mb-4">We’ve integrated a range of convenient payment options to ensure a seamless buying experience for your customers.</p>
                            <div className="flex lg:flex-row flex-col lg:items-center gap-4 lg:gap-12">
                                <div className="flex gap-2 items-center">
                                    <i className="icon-check-circle text-xl gradient-text"></i>
                                    <span className="text-base font-medium leading-5">Cash On Delivery</span>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <i className="icon-check-circle text-xl gradient-text"></i>
                                    <span className="text-base font-medium leading-5">Digital Payment</span>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <i className="icon-check-circle text-xl gradient-text"></i>
                                    <span className="text-base font-medium leading-5">Credit Wallet</span>
                                </div>
                            </div>
                        </div>
                        <img className="w-full h-full" src="/images/payment/payment-logos.png" alt="payment_logos"/>
                    </div>
                </div>
                <div className="md:col-span-6 lg:col-span-4">
                    <div className="bg-[#F6F9FC] rounded-2xl pt-6">
                        <div className="px-6">
                            <h3 className="text-2xl lg:text-3xl font-bold mb-4">8+ SMS Gateways</h3>
                            <p className="text-sm lg:text-base font-normal mb-4">Keep your customers informed in real time with fast, reliable SMS gateway integration. Instantly send essential updates, boost engagement, and enhance the customer experience.</p>
                        </div>
                        <img className="w-full h-full" src="/images/payment/sms-logos.png" alt="sms_gatways"/>
                    </div>
                </div>
            </div>
        </div>
     </section>
     {/* <!--===============================
        PAYMENT GATEWAY PART END 
     =================================--> */}

    {/* <!--===============================
        WORLDWIDE CLIENT PART START 
     =================================--> */}
     <section>
        <div className="pt-20 pb-16 sm:pb-20 md:pb-40 md:px-20 map-curve-bg">
            <div className="max-w-[360px] lg:max-w-[742px] w-full mx-auto flex flex-col items-center justify-center mb-8 md:mb-16 lg:mb-20">
                <h1 className="text-3xl lg:text-[42px] font-bold text-center leading-tight mb-6"><span className="gradient-text">800+ Clients </span>Spreads Worldwide</h1>
                <p className="text-base lg:text-lg font-normal text-center lg:px-24">Setting up FoodKing is quick and hassle-free. Just follow these 6 steps and start managing your restaurant like a pro.</p>
            </div>
            <div className="container overflow-auto">
                <div className="bg-white p-4 rounded-xl absolute left-[43%] drop-shadow-map-client">
                    <div className="relative">
                        <div className="bg-white w-6 h-6 absolute rotate-45 -bottom-6  overflow-clip left-2"></div>
                        <div className="flex items-start gap-4">
                            <img className="w-auto h-8" src="/images/flags/uk.png" alt="uk_flag"/>
                            <div>
                                <h6 className="text-base font-bold mb-1 leading-none">100+</h6>
                                <p className="text-base font-normal leading-none">Clients in <span className="font-bold">United Kingdom</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="max-w-none sm:max-w-full sm:w-full"  src="/images/map.png" alt="map"/>
            </div>
        </div>
     </section>
     {/* <!--===============================
        WORLDWIDE CLIENT PART END 
     =================================--> */}

    {/* <!--===============================
         PREMIUM SERVICES PART START 
     =================================--> */}
     <section className="container">
        <div className="mb-16 sm:mb-20 md:mb-40">
            <div className="max-w-[934px] w-full mx-auto flex flex-col items-center justify-center mb-8 md:mb-16">
                <h1 className="text-3xl lg:text-[42px] font-bold text-center leading-tight mb-6">Kickstart Your Business with<span className="gradient-text"> Premium Services </span>Tailored to You</h1>
                <p className="text-base lg:text-lg font-normal text-center lg:px-24">Professional-grade services to ensure your system runs smoothly from day one.</p>
            </div>
            <div className="bg-[#FCF6F8] rounded-2xl p-6 md:p-8 mb-6">
                <div className="grid grid-cols-12 gap-6 md:gap-4 ">
                    <div className="col-span-12 md:col-span-7 order-last md:order-first">
                    <h2 className="text-2xl md:text-[32px] leading-tight font-bold mb-4">Skip the Tech Headache, We’ve Got <span className="text-primary"> Installation </span>Covered</h2>
                    <p className="text-base font-normal mb-4">Our team will install FoodKing on your server quickly and correctly—so you can start running your business without delay.</p>
                    <div className="flex lg:flex-row flex-col lg:items-center gap-4 lg:gap-12 mb-8">
                        <div className="flex gap-2 items-center">
                            <i className="icon-check-circle text-xl text-[#007EDD]"></i>
                            <span className="text-base font-medium leading-5">Reliable Service</span>
                        </div>
                        <div className="flex gap-2 items-center">
                            <i className="icon-check-circle text-xl text-[#007EDD]"></i>
                            <span className="text-base font-medium leading-5">Enhanced Security</span>
                        </div>
                        <div className="flex gap-2 items-center">
                            <i className="icon-check-circle text-xl text-[#007EDD]"></i>
                            <span className="text-base font-medium leading-5">Ongoing Support</span>
                        </div>
                    </div>
                    <button className="cursor-pointer py-2.5 sm:py-3.5 px-6 sm:px-8 rounded-full text-white text-base sm:text-lg leading-6 font-bold gradient-button">Installation Packages</button>
                </div>
                <div className="col-span-12 md:col-span-5 order-first md:order-last">
                    <img className="w-full h-full" src="/images/premium/installation.png" alt="installation" />
                </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 md:col-span-6">
                    <div className="bg-[#FCF6F8] rounded-2xl p-6">
                        <img className="w-full h-full mb-6" src="/images/premium/customization.png" alt="installation" />
                        <h2 className="text-2xl md:text-[28px] leading-tight font-bold mb-4">Flexible<span className="text-primary"> Customization </span>to Fit Your Business Goal</h2>
                        <p className="text-base font-normal mb-6">Whether it’s branding, layout, or functionality, we customize it to work the way you need.</p>
                        <button className="cursor-pointer py-2.5 sm:py-3.5 px-6 sm:px-8 rounded-full text-white text-base sm:text-lg leading-6 font-bold gradient-button">Request Customization</button>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-6">
                    <div className="bg-[#FCF6F8] rounded-2xl p-6">
                        <img className="w-full h-full mb-6" src="/images/premium/maintanance.png" alt="maintanance" />
                        <h2 className="text-2xl md:text-[28px] leading-tight font-bold mb-4">Reliable<span className="text-primary"> Maintenance Service </span>for Committed  Owners</h2>
                        <p className="text-base font-normal mb-6">We’ll handle performance checks, updates, and issues—so you can focus on growing your business.</p>
                        <button className="cursor-pointer py-2.5 sm:py-3.5 px-6 sm:px-8 rounded-full text-white text-base sm:text-lg leading-6 font-bold gradient-button">Get iCare Maintenance</button>
                    </div>
                </div>
            </div>
        </div>
     </section>
     {/* <!--===============================
         PREMIUM SERVICES PART END 
     =================================--> */}

    {/* <!--===============================
        TECHNOLOGY SERVICES PART START 
     =================================--> */}
     <section className="container">
        <div className="mb-16 sm:mb-20 md:mb-40">
            <div className="p-8 md:p-12 md:pb-0 rounded-2xl bg-custom-gradient relative">
                <svg className="absolute right-0 top-0 z-0" xmlns="http://www.w3.org/2000/svg" width="455" height="455" viewBox="0 0 455 455" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M467 458V-7.54517H465.545V-9H0V458H467ZM437.903 -7.54517H465.545V20.0966H437.903V-7.54517ZM379.71 456.545H407.352V428.903H379.71V456.545ZM379.71 427.449H407.352V399.807H379.71V427.449ZM378.255 399.807V427.449H350.614V399.807H378.255ZM379.71 398.352H407.352V370.71H379.71V398.352ZM378.255 370.71V398.352H350.614V370.71H378.255ZM379.71 369.255H407.352V341.614H379.71V369.255ZM378.255 341.614V369.255H350.614V341.614H378.255ZM379.71 340.159H407.352V312.517H379.71V340.159ZM378.255 312.517V340.159H350.614V312.517H378.255ZM379.71 311.062H407.352V283.421H379.71V311.062ZM378.255 283.421V311.062H350.614V283.421H378.255ZM379.71 281.966H407.352V254.324H379.71V281.966ZM378.255 254.324V281.966H350.614V254.324H378.255ZM379.71 252.869H407.352V225.227H379.71V252.869ZM378.255 225.227V252.869H350.614V225.227H378.255ZM379.71 223.773H407.352V196.131H379.71V223.773ZM378.255 196.131V223.773H350.614V196.131H378.255ZM379.71 194.676H407.352V167.034H379.71V194.676ZM378.255 167.034V194.676H350.614V167.034H378.255ZM379.71 165.579H407.352V137.938H379.71V165.579ZM378.255 137.938V165.579H350.614V137.938H378.255ZM379.71 136.483H407.352V108.841H379.71V136.483ZM378.255 108.841V136.483H350.614V108.841H378.255ZM379.71 107.386H407.352V79.7445H379.71V107.386ZM378.255 79.7445V107.386H350.614V79.7445H378.255ZM379.71 78.2897H407.352V50.648H379.71V78.2897ZM378.255 50.648V78.2897H350.614V50.648H378.255ZM379.71 49.1931H407.352V21.5514H379.71V49.1931ZM378.255 21.5514V49.1931H350.614V21.5514H378.255ZM379.71 20.0966H407.352V-7.54517H379.71V20.0966ZM378.255 -7.54517H350.614V20.0966H378.255V-7.54517ZM378.255 428.903V456.545H350.614V428.903H378.255ZM349.159 456.545H321.517V428.903H349.159V456.545ZM349.159 427.449H321.517V399.807H349.159V427.449ZM320.062 427.449V399.807H292.421V427.449H320.062ZM349.159 398.352H321.517V370.71H349.159V398.352ZM320.062 398.352V370.71H292.421V398.352H320.062ZM349.159 369.255H321.517V341.614H349.159V369.255ZM320.062 369.255V341.614H292.421V369.255H320.062ZM349.159 340.159H321.517V312.517H349.159V340.159ZM320.062 340.159V312.517H292.421V340.159H320.062ZM349.159 311.062H321.517V283.421H349.159V311.062ZM320.062 311.062V283.421H292.421V311.062H320.062ZM349.159 281.966H321.517V254.324H349.159V281.966ZM320.062 281.966V254.324H292.421V281.966H320.062ZM349.159 252.869H321.517V225.227H349.159V252.869ZM320.062 252.869V225.227H292.421V252.869H320.062ZM349.159 223.773H321.517V196.131H349.159V223.773ZM320.062 223.773V196.131H292.421V223.773H320.062ZM349.159 194.676H321.517V167.034H349.159V194.676ZM320.062 194.676V167.034H292.421V194.676H320.062ZM349.159 165.579H321.517V137.938H349.159V165.579ZM320.062 165.579V137.938H292.421V165.579H320.062ZM349.159 136.483H321.517V108.841H349.159V136.483ZM320.062 136.483V108.841H292.421V136.483H320.062ZM349.159 107.386H321.517V79.7445H349.159V107.386ZM320.062 107.386V79.7445H292.421V107.386H320.062ZM349.159 78.2897H321.517V50.648H349.159V78.2897ZM320.062 78.2897V50.648H292.421V78.2897H320.062ZM349.159 49.1931H321.517V21.5514H349.159V49.1931ZM320.062 49.1931V21.5514H292.421V49.1931H320.062ZM349.159 20.0966H321.517V-7.54517H349.159V20.0966ZM292.421 -7.54517H320.062V20.0966H292.421V-7.54517ZM320.062 456.545V428.903H292.421V456.545H320.062ZM263.324 456.545H290.966V428.903H263.324V456.545ZM263.324 427.449H290.966V399.807H263.324V427.449ZM261.869 399.807V427.449H234.227V399.807H261.869ZM263.324 398.352H290.966V370.71H263.324V398.352ZM261.869 370.71V398.352H234.227V370.71H261.869ZM263.324 369.255H290.966V341.614H263.324V369.255ZM261.869 341.614V369.255H234.227V341.614H261.869ZM263.324 340.159H290.966V312.517H263.324V340.159ZM261.869 312.517V340.159H234.227V312.517H261.869ZM263.324 311.062H290.966V283.421H263.324V311.062ZM261.869 283.421V311.062H234.227V283.421H261.869ZM263.324 281.966H290.966V254.324H263.324V281.966ZM261.869 254.324V281.966H234.227V254.324H261.869ZM263.324 252.869H290.966V225.227H263.324V252.869ZM261.869 225.227V252.869H234.227V225.227H261.869ZM263.324 223.773H290.966V196.131H263.324V223.773ZM261.869 196.131V223.773H234.227V196.131H261.869ZM263.324 194.676H290.966V167.034H263.324V194.676ZM261.869 167.034V194.676H234.227V167.034H261.869ZM263.324 165.579H290.966V137.938H263.324V165.579ZM261.869 137.938V165.579H234.227V137.938H261.869ZM263.324 136.483H290.966V108.841H263.324V136.483ZM261.869 108.841V136.483H234.227V108.841H261.869ZM263.324 107.386H290.966V79.7445H263.324V107.386ZM261.869 79.7445V107.386H234.227V79.7445H261.869ZM263.324 78.2897H290.966V50.648H263.324V78.2897ZM261.869 50.648V78.2897H234.227V50.648H261.869ZM263.324 49.1931H290.966V21.5514H263.324V49.1931ZM261.869 21.5514V49.1931H234.227V21.5514H261.869ZM263.324 20.0966H290.966V-7.54517H263.324V20.0966ZM261.869 -7.54517H234.227V20.0966H261.869V-7.54517ZM261.869 428.903V456.545H234.227V428.903H261.869ZM232.773 456.545H205.131V428.903H232.773V456.545ZM232.773 427.449H205.131V399.807H232.773V427.449ZM203.676 427.449V399.807H176.034V427.449H203.676ZM232.773 398.352H205.131V370.71H232.773V398.352ZM203.676 398.352V370.71H176.034V398.352H203.676ZM232.773 369.255H205.131V341.614H232.773V369.255ZM203.676 369.255V341.614H176.034V369.255H203.676ZM232.773 340.159H205.131V312.517H232.773V340.159ZM203.676 340.159V312.517H176.034V340.159H203.676ZM232.773 311.062H205.131V283.421H232.773V311.062ZM203.676 311.062V283.421H176.034V311.062H203.676ZM232.773 281.966H205.131V254.324H232.773V281.966ZM203.676 281.966V254.324H176.034V281.966H203.676ZM232.773 252.869H205.131V225.227H232.773V252.869ZM203.676 252.869V225.227H176.034V252.869H203.676ZM232.773 223.773H205.131V196.131H232.773V223.773ZM203.676 223.773V196.131H176.034V223.773H203.676ZM232.773 194.676H205.131V167.034H232.773V194.676ZM203.676 194.676V167.034H176.034V194.676H203.676ZM232.773 165.579H205.131V137.938H232.773V165.579ZM203.676 165.579V137.938H176.034V165.579H203.676ZM232.773 136.483H205.131V108.841H232.773V136.483ZM203.676 136.483V108.841H176.034V136.483H203.676ZM232.773 107.386H205.131V79.7445H232.773V107.386ZM203.676 107.386V79.7445H176.034V107.386H203.676ZM232.773 78.2897H205.131V50.648H232.773V78.2897ZM203.676 78.2897V50.648H176.034V78.2897H203.676ZM232.773 49.1931H205.131V21.5514H232.773V49.1931ZM203.676 49.1931V21.5514H176.034V49.1931H203.676ZM232.773 20.0966H205.131V-7.54517H232.773V20.0966ZM176.034 -7.54517H203.676V20.0966H176.034V-7.54517ZM203.676 456.545V428.903H176.034V456.545H203.676ZM146.938 456.545H174.579V428.903H146.938V456.545ZM146.938 427.449H174.579V399.807H146.938V427.449ZM145.483 399.807V427.449H117.841V399.807H145.483ZM146.938 398.352H174.579V370.71H146.938V398.352ZM145.483 370.71V398.352H117.841V370.71H145.483ZM146.938 369.255H174.579V341.614H146.938V369.255ZM145.483 341.614V369.255H117.841V341.614H145.483ZM146.938 340.159H174.579V312.517H146.938V340.159ZM145.483 312.517V340.159H117.841V312.517H145.483ZM146.938 311.062H174.579V283.421H146.938V311.062ZM145.483 283.421V311.062H117.841V283.421H145.483ZM146.938 281.966H174.579V254.324H146.938V281.966ZM145.483 254.324V281.966H117.841V254.324H145.483ZM146.938 252.869H174.579V225.227H146.938V252.869ZM145.483 225.227V252.869H117.841V225.227H145.483ZM146.938 223.773H174.579V196.131H146.938V223.773ZM145.483 196.131V223.773H117.841V196.131H145.483ZM146.938 194.676H174.579V167.034H146.938V194.676ZM145.483 167.034V194.676H117.841V167.034H145.483ZM146.938 165.579H174.579V137.938H146.938V165.579ZM145.483 137.938V165.579H117.841V137.938H145.483ZM146.938 136.483H174.579V108.841H146.938V136.483ZM145.483 108.841V136.483H117.841V108.841H145.483ZM146.938 107.386H174.579V79.7445H146.938V107.386ZM145.483 79.7445V107.386H117.841V79.7445H145.483ZM146.938 78.2897H174.579V50.648H146.938V78.2897ZM145.483 50.648V78.2897H117.841V50.648H145.483ZM146.938 49.1931H174.579V21.5514H146.938V49.1931ZM145.483 21.5514V49.1931H117.841V21.5514H145.483ZM146.938 20.0966H174.579V-7.54517H146.938V20.0966ZM145.483 -7.54517H117.841V20.0966H145.483V-7.54517ZM145.483 428.903V456.545H117.841V428.903H145.483ZM116.386 456.545H88.7445V428.903H116.386V456.545ZM116.386 427.449H88.7445V399.807H116.386V427.449ZM87.2897 427.449V399.807H59.648V427.449H87.2897ZM116.386 398.352H88.7445V370.71H116.386V398.352ZM87.2897 398.352V370.71H59.648V398.352H87.2897ZM116.386 369.255H88.7445V341.614H116.386V369.255ZM87.2897 369.255V341.614H59.648V369.255H87.2897ZM116.386 340.159H88.7445V312.517H116.386V340.159ZM87.2897 340.159V312.517H59.648V340.159H87.2897ZM116.386 311.062H88.7445V283.421H116.386V311.062ZM87.2897 311.062V283.421H59.648V311.062H87.2897ZM116.386 281.966H88.7445V254.324H116.386V281.966ZM87.2897 281.966V254.324H59.648V281.966H87.2897ZM116.386 252.869H88.7445V225.227H116.386V252.869ZM87.2897 252.869V225.227H59.648V252.869H87.2897ZM116.386 223.773H88.7445V196.131H116.386V223.773ZM87.2897 223.773V196.131H59.648V223.773H87.2897ZM116.386 194.676H88.7445V167.034H116.386V194.676ZM87.2897 194.676V167.034H59.648V194.676H87.2897ZM116.386 165.579H88.7445V137.938H116.386V165.579ZM87.2897 165.579V137.938H59.648V165.579H87.2897ZM116.386 136.483H88.7445V108.841H116.386V136.483ZM87.2897 136.483V108.841H59.648V136.483H87.2897ZM116.386 107.386H88.7445V79.7445H116.386V107.386ZM87.2897 107.386V79.7445H59.648V107.386H87.2897ZM116.386 78.2897H88.7445V50.648H116.386V78.2897ZM87.2897 78.2897V50.648H59.648V78.2897H87.2897ZM116.386 49.1931H88.7445V21.5514H116.386V49.1931ZM87.2897 49.1931V21.5514H59.648V49.1931H87.2897ZM116.386 20.0966H88.7445V-7.54517H116.386V20.0966ZM59.648 -7.54517H87.2897V20.0966H59.648V-7.54517ZM87.2897 456.545V428.903H59.648V456.545H87.2897ZM30.5514 456.545H58.1931V428.903H30.5514V456.545ZM30.5514 427.449H58.1931V399.807H30.5514V427.449ZM29.0966 399.807V427.449H1.45483V399.807H29.0966ZM30.5514 398.352H58.1931V370.71H30.5514V398.352ZM29.0966 370.71V398.352H1.45483V370.71H29.0966ZM30.5514 369.255H58.1931V341.614H30.5514V369.255ZM29.0966 341.614V369.255H1.45483V341.614H29.0966ZM30.5514 340.159H58.1931V312.517H30.5514V340.159ZM29.0966 312.517V340.159H1.45483V312.517H29.0966ZM30.5514 311.062H58.1931V283.421H30.5514V311.062ZM29.0966 283.421V311.062H1.45483V283.421H29.0966ZM30.5514 281.966H58.1931V254.324H30.5514V281.966ZM29.0966 254.324V281.966H1.45483V254.324H29.0966ZM30.5514 252.869H58.1931V225.227H30.5514V252.869ZM29.0966 225.227V252.869H1.45483V225.227H29.0966ZM30.5514 223.773H58.1931V196.131H30.5514V223.773ZM29.0966 196.131V223.773H1.45483V196.131H29.0966ZM30.5514 194.676H58.1931V167.034H30.5514V194.676ZM29.0966 167.034V194.676H1.45483V167.034H29.0966ZM30.5514 165.579H58.1931V137.938H30.5514V165.579ZM29.0966 137.938V165.579H1.45483V137.938H29.0966ZM30.5514 136.483H58.1931V108.841H30.5514V136.483ZM29.0966 108.841V136.483H1.45483V108.841H29.0966ZM30.5514 107.386H58.1931V79.7445H30.5514V107.386ZM29.0966 79.7445V107.386H1.45483V79.7445H29.0966ZM30.5514 78.2897H58.1931V50.648H30.5514V78.2897ZM29.0966 50.648V78.2897H1.45483V50.648H29.0966ZM30.5514 49.1931H58.1931V21.5514H30.5514V49.1931ZM29.0966 21.5514V49.1931H1.45483V21.5514H29.0966ZM30.5514 20.0966H58.1931V-7.54517H30.5514V20.0966ZM29.0966 -7.54517H1.45483V20.0966H29.0966V-7.54517ZM29.0966 428.903V456.545H1.45483V428.903H29.0966ZM436.449 456.545H408.807V428.903H436.449V456.545ZM436.449 427.449H408.807V399.807H436.449V427.449ZM436.449 398.352H408.807V370.71H436.449V398.352ZM436.449 369.255H408.807V341.614H436.449V369.255ZM436.449 340.159H408.807V312.517H436.449V340.159ZM436.449 311.062H408.807V283.421H436.449V311.062ZM436.449 281.966H408.807V254.324H436.449V281.966ZM436.449 252.869H408.807V225.227H436.449V252.869ZM436.449 223.773H408.807V196.131H436.449V223.773ZM436.449 194.676H408.807V167.034H436.449V194.676ZM436.449 165.579H408.807V137.938H436.449V165.579ZM436.449 136.483H408.807V108.841H436.449V136.483ZM436.449 107.386H408.807V79.7445H436.449V107.386ZM436.449 78.2897H408.807V50.648H436.449V78.2897ZM436.449 49.1931H408.807V21.5514H436.449V49.1931ZM436.449 20.0966H408.807V-7.54517H436.449V20.0966ZM437.903 78.2897V50.648H465.545V78.2897H437.903ZM437.903 107.386V79.7445H465.545V107.386H437.903ZM437.903 136.483V108.841H465.545V136.483H437.903ZM437.903 165.579V137.938H465.545V165.579H437.903ZM437.903 194.676V167.034H465.545V194.676H437.903ZM437.903 223.773V196.131H465.545V223.773H437.903ZM437.903 252.869V225.227H465.545V252.869H437.903ZM437.903 281.966V254.324H465.545V281.966H437.903ZM437.903 311.062V283.421H465.545V311.062H437.903ZM437.903 340.159V312.517H465.545V340.159H437.903ZM437.903 369.255V341.614H465.545V369.255H437.903ZM437.903 398.352V370.71H465.545V398.352H437.903ZM437.903 427.449V399.807H465.545V427.449H437.903ZM437.903 456.545V428.903H465.545V456.545H437.903ZM437.903 49.1931V21.5514H465.545V49.1931H437.903Z" fill="url(#paint0_radial_5891_8336)"/>
                    <defs>
                    <radialGradient id="paint0_radial_5891_8336" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(446.5 3.00004) rotate(135.778) scale(520.479)">
                    <stop stopColor="white" stopOpacity="0.82"/>
                    <stop offset="0.866139" stopColor="white" stopOpacity="0"/>
                    </radialGradient>
                    </defs>
                </svg>
                <div className="grid grid-cols-12 md:gap-14 relative z-10">
                    <div className="col-span-12 md:col-span-5 flex flex-col justify-center">
                        <h2 className="text-3xl md:text-[42px] leading-tight font-bold mb-6">FoodKing Built with<span className="gradient-text"> Powerful </span>&<span className="gradient-text">  Modern </span>Technology</h2>
                        <p className="text-base font-normal mb-6">FoodKing is built using modern, secure, and scalable technologies to ensure top-tier performance and reliability.</p>
                    </div>
                    <div className="col-span-12 md:col-span-7">
                        <img className="w-full h-full mb-6" src="/images/used_technology.png" alt="technologies"/>
                    </div>
                </div>
            </div>
        </div>    
     </section>
     {/* <!--===============================
        TECHNOLOGY SERVICES PART END 
     =================================--> */}

     {/* <!--===============================
         RESOURCE GUIDE PART START 
     =================================--> */}
      <section className="container">
        <div className="mb-16 sm:mb-20 md:mb-40">
            <div className="max-w-[934px] w-full mx-auto flex flex-col items-center justify-center mb-8 md:mb-16">
                <h1 className="text-3xl lg:text-[42px] font-bold text-center leading-tight mb-6">Helpful<span className="gradient-text"> Resources to Guide </span>Your Journey</h1>
                <p className="text-base lg:text-lg font-normal text-center lg:px-24">From first setup to expert tips, our resources are here to help every step of the way.</p>
            </div>
            <div className="grid grid-cols-12 lg:grid-cols-9 gap-6 mb-6">
                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                    <div className="h-full bg-[#F6F9FC] rounded-2xl p-6 hover:shadow-card hover:bg-white transition-all duration-300 flex flex-col gap-6">
                        <div className="w-9 h-9 rounded-full flex items-center justify-center vector-bg-1">
                             <i className="icon-music-play text-xl text-white"></i>
                        </div>
                        <div className="flex-grow">
                            <h6 className="text-2xl font-bold mb-3">Contact Support</h6>
                            <p className="text-base font-normal">Reach out to our friendly support team for quick and reliable help.</p>
                        </div>
                        <button className="w-fit cursor-pointer py-2.5 sm:py-3.5 px-6 border border-secondary rounded-full text-base leading-4.5 font-bold text-transparent bg-clip-text gradient-button shadow-none hover:bg-clip-border hover:text-white">Open Support Ticket</button>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-5">
                    <div className="h-full bg-[#F6F9FC] rounded-2xl p-6 hover:shadow-card hover:bg-white transition-all duration-300 flex flex-col gap-6">
                        <div className="w-9 h-9 rounded-full flex items-center justify-center vector-bg-2">
                            <i className="icon-clipboard-text text-xl text-white"></i>
                        </div>
                        <div className="flex-grow">
                            <h6 className="text-2xl font-bold mb-3">Documentation</h6>
                            <p className="text-base font-normal">Dive into our complete documentation to discover how to install, configure, and run FoodKing with ease—no guesswork, just clear instructions.</p>
                        </div>
                        <button className="w-fit cursor-pointer py-2.5 sm:py-3.5 px-6 border border-secondary rounded-full text-base leading-4.5 font-bold gradient-text gradient-button shadow-none hover:bg-clip-border hover:text-white">Read Documentation</button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 lg:grid-cols-9 gap-6">
                <div className="col-span-12 md:col-span-6 lg:col-span-5">
                    <div className="h-full bg-[#F6F9FC] rounded-2xl p-6 hover:shadow-card hover:bg-white transition-all duration-300 flex flex-col gap-6">
                        <div className="w-9 h-9 rounded-full flex items-center justify-center vector-bg-4">
                            <i className="icon-message-question text-xl text-white"></i>
                        </div>
                        <div className="flex-grow">
                            <h6 className="text-2xl font-bold mb-3">Frequently Asked Questions (FAQs)</h6>
                            <p className="text-base font-normal">Got questions? We’ve compiled answers to the most frequently asked queries to help you get started.</p>
                        </div>
                        <button className="w-fit cursor-pointer py-2.5 sm:py-3.5 px-6 border border-secondary rounded-full text-base leading-4.5 font-bold gradient-text gradient-button shadow-none hover:bg-clip-border hover:text-white">View FAQs</button>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                    <div className="h-full bg-[#F6F9FC] rounded-2xl p-6 hover:shadow-card hover:bg-white transition-all duration-300 flex flex-col gap-6">
                        <div className="w-9 h-9 rounded-full flex items-center justify-center vector-bg-5">
                            <i className="icon-video-play text-xl text-white"></i>
                        </div>
                        <div className="flex-grow">
                            <h6 className="text-2xl font-bold mb-3">Video Tutorial</h6>
                            <p className="text-base font-normal">Watch step-by-step video guides to learn how to set up, and run FoodKing like a pro.</p>
                        </div>
                        <button className="w-fit cursor-pointer py-2.5 sm:py-3.5 px-6 border border-secondary rounded-full text-base leading-4.5 font-bold gradient-text gradient-button shadow-none hover:bg-clip-border hover:text-white">Watch Videos</button>
                    </div>
                </div>
            </div>
        </div>   
      </section>
     {/* <!--===============================
        RESOURCE GUIDE PART END 
     =================================--> */}

   {/* <!--===============================
          SUCCESS STORY PART START 
     =================================--> */}
     <section className="container">
        <div className="mb-16 sm:mb-20 md:mb-40">
            <div className="max-w-[934px] w-full mx-auto flex flex-col items-center justify-center mb-12 md:mb-16">
                <h1 className="text-3xl lg:text-[42px] font-bold text-center leading-tight mb-6"><span className="gradient-text">Success Stories </span>from Our Happy Clients</h1>
                <p className="text-base lg:text-lg font-normal text-center lg:px-24">Explore stories from restaurant owners who’ve streamlined their business with FoodKing’s powerful tools.</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-6 mb-6">
                <div className="p-6 rounded-2xl bg-[#f8f6fc] h-fit">
                    <div className="mb-6 drop-shadow-quote">
                        <img className="w-auto h-6" src="/images/review/quote.png" alt="quote"/>
                    </div>
                    <p className="mb-6 text-lg font-normal">I bought a lot of Restaurant/Delivery apps on Codecanyon and this will be my one to use. He took all the good features and put it in one product. There are still a couple things missing but I'm sure in the future updates they will be added. For the price you get the most with this product.</p>
                    <div className="flex items-start gap-4">
                        <div className="w-15 h-15 rounded-full">
                            <img className="w-full h-full object-cover rounded-full" src="/images/review/users/1.png" alt="user_review"/>
                        </div>
                        <div>
                            <h5 className="text-lg font-bold text-primary mb-1.5">SkanderH</h5>
                            <div className="flex items-center gap-1">
                                <i className="icon-fill-star text-2xl text-[#FFB951]"></i>
                                <i className="icon-fill-star text-2xl text-[#FFB951]"></i>
                                <i className="icon-fill-star text-2xl text-[#FFB951]"></i>
                                <i className="icon-fill-star text-2xl text-[#FFB951]"></i>
                                <i className="icon-fill-star text-2xl text-[#FFB951]"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-6 rounded-2xl bg-[#F6F8FC] flex flex-col">
                    <img className="w-fit h-6 mb-6" src="/images/review/quote.png" alt="quote"/>
                    <p className="mb-6 text-lg font-normal flex-grow">The code quality and customer support provided by this application are exceptional. I highly recommend anyone considering trying it to go ahead. The developer is very approachable and helpful if any issues arise. Additionally, the clean and well-structured code made it easy for me to make customizations as needed. Highly recommended!</p>
                    <div className="flex items-start gap-4">
                        <div className="w-15 h-15 rounded-full">
                            <img className="w-full h-full object-cover rounded-full" src="/images/review/users/2.png" alt="user_review"/>
                        </div>
                        <div>
                            <h5 className="text-lg font-bold text-primary mb-1.5">HamidBhatti</h5>
                            <div className="flex items-center gap-1">
                                <i className="icon-fill-star text-2xl text-[#FFB951]"></i>
                                <i className="icon-fill-star text-2xl text-[#FFB951]"></i>
                                <i className="icon-fill-star text-2xl text-[#FFB951]"></i>
                                <i className="icon-fill-star text-2xl text-[#FFB951]"></i>
                                <i className="icon-fill-star text-2xl text-[#FFB951]"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-6 rounded-2xl bg-[#FCFBF6] flex flex-col">
                    <img className="w-fit h-6 mb-6" src="/images/review/quote.png" alt="quote"/>
                    <p className="mb-6 text-lg font-normal flex-grow">Both the code quality and custom support are above and beyond within this application combo. I highly recommend anyone out there wanting to give this a shot to do it. The dev is very friendly and helpful if anything goes wrong. Additionally I was able to make customizations as needed without any issues due to the clean foundation the code was built on. Highly recommended.</p>
                    <div className="flex items-start gap-4">
                        <div className="w-15 h-15 rounded-full">
                            <img className="w-full h-full object-cover rounded-full" src="/images/review/users/3.png" alt="user_"/>
                        </div>
                        <div>
                            <h5 className="text-lg font-bold text-primary mb-1.5">ODApplications</h5>
                            <div className="flex items-center gap-1">
                                <i className="icon-fill-star text-2xl text-[#FFB951]"></i>
                                <i className="icon-fill-star text-2xl text-[#FFB951]"></i>
                                <i className="icon-fill-star text-2xl text-[#FFB951]"></i>
                                <i className="icon-fill-star text-2xl text-[#FFB951]"></i>
                                <i className="icon-fill-star text-2xl text-[#FFB951]"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid lg:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl bg-[#F6FCF7] lg:-mt-21.5 flex flex-col">
                    <img className="w-fit h-6 mb-6" src="/images/review/quote.png" alt="quote"/>
                    <p className="mb-6 text-lg font-normal flex-grow">FoodKing is a fantastic solution for anyone managing a food delivery service. The system is incredibly well-designed, combining a user-friendly admin panel with a seamless delivery man app. The POS integration is smooth and ensures everything runs efficiently, from order placement to delivery. The customization options make it versatile for different types of restaurants, and the performance is fast and reliable.</p>
                    <div className="flex items-start gap-4">
                        <div className="w-15 h-15 rounded-full">
                            <img className="w-full h-full object-cover rounded-full" src="/images/review/users/4.png" alt="user_review" />
                        </div>
                        <div>
                            <h5 className="text-lg font-bold text-primary mb-1.5">Precident</h5>
                            <div className="flex items-center gap-1">
                                <i className="icon-fill-star text-2xl text-[#FFB951]"></i>
                                <i className="icon-fill-star text-2xl text-[#FFB951]"></i>
                                <i className="icon-fill-star text-2xl text-[#FFB951]"></i>
                                <i className="icon-fill-star text-2xl text-[#FFB951]"></i>
                                <i className="icon-fill-star text-2xl text-[#FFB951]"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-6 rounded-2xl bg-[#FCF8F6] lg:col-span-2 flex flex-col">
                    <img className="w-fit h-6 mb-6" src="/images/review/quote.png" alt="quote"/>
                    <p className="mb-6 text-lg font-normal flex-grow">I bought StackFood thinking it was the best restaurant system on CodeCanyon, and even though I installed it without any issues, it was impossible to translate due to errors. Additionally, the Flutter version was not very appealing, and to top it off, the support was poor, and they charged for everything. So, I decided to buy FoodKing as an emergency solution, and what a surprise! It's spectacular! I was able to translate it without any problems, and the platform has everything a restaurant chain needs to operate online. Oh, I almost forgot, the design is beautiful!!! I couldn't be happier, and the support is excellent. Thank you very much.</p>
                    <div className="flex items-start gap-4">
                        <div className="w-15 h-15 rounded-full">
                            <img className="w-full h-full object-cover rounded-full" src="/images/review/users/5.png" alt="review_user"/>
                        </div>
                        <div>
                            <h5 className="text-lg font-bold text-primary mb-1.5">FredBoss</h5>
                            <div className="flex items-center gap-1">
                                <i className="icon-fill-star text-2xl text-[#FFB951]"></i>
                                <i className="icon-fill-star text-2xl text-[#FFB951]"></i>
                                <i className="icon-fill-star text-2xl text-[#FFB951]"></i>
                                <i className="icon-fill-star text-2xl text-[#FFB951]"></i>
                                <i className="icon-fill-star text-2xl text-[#FFB951]"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8 sm:mt-12 md:mt-16 flex justify-center">
                <button className="cursor-pointer py-3.5 px-6 sm:px-8 rounded-full text-white text-base sm:text-lg leading-6 font-bold gradient-button">See More Success Stories</button>
            </div>
        </div>   
     </section>
    {/* <!--===============================
          SUCCESS STORY PART END
     =================================--> */}

    {/* <!--===============================
               CONNECT US PART START 
     =================================--> */}
    <section className="-mb-70 lg:-mb-50 relative z-10">
        <div className="container">
            <div className="w-full p-8 sm:p-12 md:p-16 relative z-10 rounded-3xl overflow-hidden shadow-connect bg-white">
                <span className="absolute top-16 -left-14 -z-10 w-64 h-48 rounded-full -rotate-6 blur-[100px] bg-[#FFEBE3]"></span>
                <span className="absolute -bottom-8 -right-11 -z-10 w-96 h-48 rounded-full -rotate-6 blur-[150px] bg-[#FFE3EF]"></span>
                <div className="grid grid-cols-12 gap-y-12">
                    <div className="col-span-12 md:col-span-5 lg:pr-3">
                        <h2 className="text-3xl lg:text-[42px] font-bold mb-6 leading-tight md:text-start text-center">
                            <span className="gradient-text">Connect with Us </span>for the Latest Updates
                        </h2>
                        <p className="text-sm font-normal md:text-start text-center">
                            We recommended you to subscribe to our newsletter for the latest updates & offers, drop your email to get daily update about FoodKing.
                        </p>
                    </div>
                    <div className="col-span-12 md:col-span-7">
                        <form className="md:ml-12 lg:ml-27" aria-label="Subscribe to newsletter">
                            <label htmlFor="name" className="sr-only">Name</label>
                            <input id="name" name="name" type="text" placeholder="Enter your name" className="px-6 w-full rounded-full shadow-input h-[52px] outline-none mb-4 bg-white" required/>
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input id="email" name="email" type="email" placeholder="Enter your email" className="px-6 w-full rounded-full shadow-input h-[52px] outline-none mb-4 bg-white" required/>
                            <button type="submit" className="float-start md:float-end cursor-pointer py-2.5 sm:py-3.5 px-6 rounded-full text-white text-base sm:text-lg leading-6 font-bold gradient-button">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     </section>
    {/* <!--===============================
              CONNECT US  PART END 
     =================================--> */}
      </>
    );
  }