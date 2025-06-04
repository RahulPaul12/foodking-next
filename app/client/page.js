'use client'
import useAutoplay from '@/hooks/useAutoplay'
import ecosystems from '@/json/ecosystem.json'
import steps from '@/json/steps.json'
import { motion, scale, useScroll } from "motion/react"
export default function Home() {
    const { scrollYProgress } = useScroll();

    const tabSource = [
        { id: 1, name: 'Admin Panel' },
        { id: 2, name: 'Branch & Staffs Panel' },
        { id: 3, name: 'User Website' },
        { id: 4, name: 'QR Table Order' },
        { id: 5, name: 'User App' }, 
        { id: 6, name: 'Delivery App' },
      ];
    const {
        featureTabs,
        featureActive,
        handleFeatureShow,
      } = useAutoplay({
        tabSource, 
        getScrollElements: () => ({
          btnElement: document.querySelector('.active'), // or useRef
          navElement: document.querySelector('.nav-scroll-container'),
        }),
      });
      
    return (
      <>
      <motion.div
                id="scroll-indicator"
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    zIndex:999,
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 10,
                    originX: 0,
                    backgroundColor: "#FF006B",
                }}
            />
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
                    <img className="ms-1 h-5 w-fit" src="/images/envato/codecannyon.png"/>
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
                        <motion.div 
                        initial={{opacity:0, x:'-100%'}}
                        whileInView={{ opacity: 1 , x:0}}
                        transition={{
                            duration:0.5,
                            ease:'linear'
                        }}
                         key={index} id={`feature-${ecosystem.id}`} className="bg-[#F6F9FC] rounded-2xl p-6 hover:shadow-card hover:bg-white transition-all duration-300 relative">
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
                        </motion.div>
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
           KEY FEATURES PART START 
     =================================--> */}
     <section className="container">
       <div className="mb-16 sm:mb-20 md:mb-40">
            <div className="max-w-[934px] w-full mx-auto flex flex-col items-center justify-center mb-8 md:mb-16">
                <span className="text-base font-medium py-2.5 px-4 border border-[#E0E6F8] rounded-full mb-6">Key Features</span>
                <h1 className="text-3xl lg:text-[42px] font-bold text-center leading-tight mb-6">Powerful & Effective<span className="text-primary"> Features to Automate & Optimize </span>Your Restaurant Effortlessly</h1>
                <p className="text-base lg:text-lg font-normal text-center lg:px-24">Packed with essential features to streamline your restaurant operations, boost efficiency, and enhance customer experience.</p>
            </div>
            <div className="w-full relative p-4 mb-8 bg-white rounded-full">
                <nav className="flex overflow-x-auto scrollbar-hide nav-scroll-container">
                    {
                        featureTabs.map(featureTab=>(
                            <button 
                                type="button" 
                                onClick={()=>handleFeatureShow(featureTab.id)}
                                key={featureTab.id}
                                className={`${featureActive == featureTab.id? 'active':''} navbtn w-fit text-base lg:text-lg font-semibold leading-5 lg:leading-6 rounded-full px-4 py-3 flex items-center whitespace-nowrap flex-shrink-0 gap-2`}>
                                <img className={`${featureTab.id == featureActive? 'filter-none':''} w-5 brightness-50 flex-shrink-0`} src='/images/vector/01.png'/>
                                <span>{ featureTab.name }</span>
                            </button>
                        ))
                    }
                </nav>
                <div className="w-full h-12 bg-[#FFA087] absolute left-0 right-0 top-1/2 -translate-y-1/2 -z-10 bg-linear-270 from-[#FFB19B] from-0% via-[#DCA4FF] via-50% to-[#FF97BD] to-100% blur-[30px]"></div>
                <div className="lg:w-[580px] lg:h-[75px] bg-[#FFA087] blur-[300px] rotate-[35deg] absolute -bottom-0 left-1/4"></div>
            </div>
            {featureActive== 1 && <div className="mb-12 md:mb-16">
                    <div className="grid lg:grid-cols-12 gap-6 mb-6">
                        <div className="col-span-12 lg:col-span-8 bg-[#FCF6F8] pt-8 rounded-2xl border border-[#FFDCE8]">
                            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                                <div className="sm:py-8 ps-8 flex-shrink">
                                    <h3 className="text-2xl md:text-3xl font-bold mb-4">Admin Dashboard</h3>
                                    <p className="text-base font-normal overflow-ellipsis">The dashboard shows real-data where the admin can see business analytics, order statistics, sales summary, orders summary, most popular items and so on.</p>
                                </div>
                                <img className="w-[414px] h-[286px] flex-grow flex-shrink-0" src="/images/features/admin.png" alt="admin"/>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-4 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                            <div className="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4">
                                <div>
                                    <h3 className="text-2xl font-bold mb-4">Built-in POS</h3>
                                    <p className="text-base font-normal">Admin can create dine-in, takeaway, delivery order from POS & choose payment option also.</p>
                                </div>
                                <img className="max-w-[324px] h-[185px] w-full" src="/images/features/pos.png" alt="pos"/>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-12 lg:col-span-4 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                            <div className="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4 ">
                                <div>
                                    <h3 className="text-2xl font-bold mb-4">QR Code Menu Maker</h3>
                                    <p className="text-base font-normal">Admin can create QR code for each table and link to the restaurant’s menu where customers can order from table using this qr code.</p>
                                </div>
                                <img className="max-w-[324px] h-[166px] w-full" src="/images/features/qrcode.png" alt="qr_code"/>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-8 bg-[#FCF6F8] pt-8 rounded-2xl border border-[#FFDCE8]">
                            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                                <div className="sm:py-8 ps-8 flex-shrink">
                                    <h3 className="text-2xl md:text-3xl font-bold mb-4">Add Items with Variations & Addon</h3>
                                    <p className="text-base font-normal">In setting option in admin panel, admin can add item categories, items with variations & extras, item attributes, variation wise pricing, etc.</p>
                                </div>
                                <img className="w-[396px] h-[286px] flex-grow flex-shrink-0" src="/images/features/addon.png" alt="addon"/>
                            </div>
                        </div>
                    </div>
                </div>}
            {featureActive== 2 && <div className="mb-12 md:mb-16">
                <div className="grid lg:grid-cols-12 gap-6 mb-6">
                    <div className="col-span-12 lg:col-span-6 bg-[#FCF6F8] pt-8 rounded-2xl border border-[#FFDCE8]">
                        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div className="sm:py-8 ps-8 flex-shrink">
                                <h3 className="text-2xl md:text-3xl font-bold mb-4">Admin Dashboard</h3>
                                <p className="text-base font-normal overflow-ellipsis">The dashboard shows real-data where the admin can see business analytics, order statistics, sales summary, orders summary, most popular items and so on.</p>
                            </div>
                            <img className="w-[414px] h-[286px] flex-grow flex-shrink-0" src="/images/features/admin.png" alt="admin"/>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-6 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div className="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4">
                            <div>
                                <h3 className="text-2xl font-bold mb-4">Built-in POS</h3>
                                <p className="text-base font-normal">Admin can create dine-in, takeaway, delivery order from POS & choose payment option also.</p>
                            </div>
                            <img className="max-w-[324px] h-[185px] w-full" src="/images/features/pos.png" alt="pos"/>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 lg:col-span-6 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div className="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4 ">
                            <div>
                                <h3 className="text-2xl font-bold mb-4">QR Code Menu Maker</h3>
                                <p className="text-base font-normal">Admin can create QR code for each table and link to the restaurant’s menu where customers can order from table using this qr code.</p>
                            </div>
                            <img className="max-w-[324px] h-[166px] w-full" src="/images/features/qrcode.png" alt="qr_code"/>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-6 bg-[#FCF6F8] pt-8 rounded-2xl border border-[#FFDCE8]">
                        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div className="sm:py-8 ps-8 flex-shrink">
                                <h3 className="text-2xl md:text-3xl font-bold mb-4">Add Items with Variations & Addon</h3>
                                <p className="text-base font-normal">In setting option in admin panel, admin can add item categories, items with variations & extras, item attributes, variation wise pricing, etc.</p>
                            </div>
                            <img className="w-[396px] h-[286px] flex-grow flex-shrink-0" src="/images/features/addon.png" alt="addon"/>
                        </div>
                    </div>
                </div>
            </div>}
            {featureActive== 3 && <div className="mb-12 md:mb-16">
                <div className="grid lg:grid-cols-12 gap-6 mb-6">
                    <div className="col-span-12 lg:col-span-8 bg-[#FCF6F8] pt-8 rounded-2xl border border-[#FFDCE8]">
                        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div className="sm:py-8 ps-8 flex-shrink">
                                <h3 className="text-2xl md:text-3xl font-bold mb-4">Admin Dashboard</h3>
                                <p className="text-base font-normal overflow-ellipsis">The dashboard shows real-data where the admin can see business analytics, order statistics, sales summary, orders summary, most popular items and so on.</p>
                            </div>
                            <img className="w-[414px] h-[286px] flex-grow flex-shrink-0" src="/images/features/admin.png" alt="admin"/>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-4 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div className="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4">
                            <div>
                                <h3 className="text-2xl font-bold mb-4">Built-in POS</h3>
                                <p className="text-base font-normal">Admin can create dine-in, takeaway, delivery order from POS & choose payment option also.</p>
                            </div>
                            <img className="max-w-[324px] h-[185px] w-full" src="/images/features/pos.png" alt="pos"/>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 lg:col-span-4 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div className="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4 ">
                            <div>
                                <h3 className="text-2xl font-bold mb-4">QR Code Menu Maker</h3>
                                <p className="text-base font-normal">Admin can create QR code for each table and link to the restaurant’s menu where customers can order from table using this qr code.</p>
                            </div>
                            <img className="max-w-[324px] h-[166px] w-full" src="/images/features/qrcode.png" alt="qr_code"/>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-8 bg-[#FCF6F8] pt-8 rounded-2xl border border-[#FFDCE8]">
                        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div className="sm:py-8 ps-8 flex-shrink">
                                <h3 className="text-2xl md:text-3xl font-bold mb-4">Add Items with Variations & Addon</h3>
                                <p className="text-base font-normal">In setting option in admin panel, admin can add item categories, items with variations & extras, item attributes, variation wise pricing, etc.</p>
                            </div>
                            <img className="w-[396px] h-[286px] flex-grow flex-shrink-0" src="/images/features/addon.png" alt="addon"/>
                        </div>
                    </div>
                </div>
            </div>}
            {featureActive== 4 && <div className="mb-12 md:mb-16">
                <div className="grid lg:grid-cols-12 gap-6 mb-6">
                    <div className="col-span-12 lg:col-span-6 bg-[#FCF6F8] pt-8 rounded-2xl border border-[#FFDCE8]">
                        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div className="sm:py-8 ps-8 flex-shrink">
                                <h3 className="text-2xl md:text-3xl font-bold mb-4">Admin Dashboard</h3>
                                <p className="text-base font-normal overflow-ellipsis">The dashboard shows real-data where the admin can see business analytics, order statistics, sales summary, orders summary, most popular items and so on.</p>
                            </div>
                            <img className="w-[414px] h-[286px] flex-grow flex-shrink-0" src="/images/features/admin.png" alt="admin"/>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-6 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div className="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4">
                            <div>
                                <h3 className="text-2xl font-bold mb-4">Built-in POS</h3>
                                <p className="text-base font-normal">Admin can create dine-in, takeaway, delivery order from POS & choose payment option also.</p>
                            </div>
                            <img className="max-w-[324px] h-[185px] w-full" src="/images/features/pos.png" alt="pos"/>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 lg:col-span-6 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div className="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4 ">
                            <div>
                                <h3 className="text-2xl font-bold mb-4">QR Code Menu Maker</h3>
                                <p className="text-base font-normal">Admin can create QR code for each table and link to the restaurant’s menu where customers can order from table using this qr code.</p>
                            </div>
                            <img className="max-w-[324px] h-[166px] w-full" src="/images/features/qrcode.png" alt="qr_code"/>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-6 bg-[#FCF6F8] pt-8 rounded-2xl border border-[#FFDCE8]">
                        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div className="sm:py-8 ps-8 flex-shrink">
                                <h3 className="text-2xl md:text-3xl font-bold mb-4">Add Items with Variations & Addon</h3>
                                <p className="text-base font-normal">In setting option in admin panel, admin can add item categories, items with variations & extras, item attributes, variation wise pricing, etc.</p>
                            </div>
                            <img className="w-[396px] h-[286px] flex-grow flex-shrink-0" src="/images/features/addon.png" alt="addon"/>
                        </div>
                    </div>
                </div>
            </div>}
            {featureActive== 5 && <div className="mb-12 md:mb-16">
                <div className="grid lg:grid-cols-12 gap-6 mb-6">
                    <div className="col-span-12 lg:col-span-6 bg-[#FCF6F8] pt-8 rounded-2xl border border-[#FFDCE8]">
                        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div className="sm:py-8 ps-8 flex-shrink">
                                <h3 className="text-2xl md:text-3xl font-bold mb-4">Admin Dashboard</h3>
                                <p className="text-base font-normal overflow-ellipsis">The dashboard shows real-data where the admin can see business analytics, order statistics, sales summary, orders summary, most popular items and so on.</p>
                            </div>
                            <img className="w-[414px] h-[286px] flex-grow flex-shrink-0" src="/images/features/admin.png" alt="admin"/>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-6 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div className="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4">
                            <div>
                                <h3 className="text-2xl font-bold mb-4">Built-in POS</h3>
                                <p className="text-base font-normal">Admin can create dine-in, takeaway, delivery order from POS & choose payment option also.</p>
                            </div>
                            <img className="max-w-[324px] h-[185px] w-full" src="/images/features/pos.png" alt="pos"/>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 lg:col-span-6 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div className="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4">
                            <div>
                                <h3 className="text-2xl font-bold mb-4">QR Code Menu Maker</h3>
                                <p className="text-base font-normal">Admin can create QR code for each table and link to the restaurant’s menu where customers can order from table using this qr code.</p>
                            </div>
                            <img className="max-w-[324px] h-[166px] w-full" src="/images/features/qrcode.png" alt="qr_code"/>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-6 bg-[#FCF6F8] pt-8 rounded-2xl border border-[#FFDCE8]">
                        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div className="sm:py-8 ps-8 flex-shrink">
                                <h3 className="text-2xl md:text-3xl font-bold mb-4">Add Items with Variations & Addon</h3>
                                <p className="text-base font-normal">In setting option in admin panel, admin can add item categories, items with variations & extras, item attributes, variation wise pricing, etc.</p>
                            </div>
                            <img className="w-[396px] h-[286px] flex-grow flex-shrink-0" src="/images/features/addon.png" alt="addon"/>
                        </div>
                    </div>
                </div>
            </div>}
            {featureActive== 6 && <div className="mb-12 md:mb-16">
                <div className="grid lg:grid-cols-12 gap-6 mb-6">
                    <div className="col-span-12 lg:col-span-6 bg-[#FCF6F8] pt-8 rounded-2xl border border-[#FFDCE8]">
                        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div className="sm:py-8 ps-8 flex-shrink">
                                <h3 className="text-2xl md:text-3xl font-bold mb-4">Admin Dashboard</h3>
                                <p className="text-base font-normal overflow-ellipsis">The dashboard shows real-data where the admin can see business analytics, order statistics, sales summary, orders summary, most popular items and so on.</p>
                            </div>
                            <img className="w-[414px] h-[286px] flex-grow flex-shrink-0" src="/images/features/admin.png" alt="admin"/>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-6 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div className="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4">
                            <div>
                                <h3 className="text-2xl font-bold mb-4">Built-in POS</h3>
                                <p className="text-base font-normal">Admin can create dine-in, takeaway, delivery order from POS & choose payment option also.</p>
                            </div>
                            <img className="max-w-[324px] h-[185px] w-full" src="/images/features/pos.png" alt="pos"/>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 lg:col-span-6 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div className="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4 ">
                            <div>
                                <h3 className="text-2xl font-bold mb-4">QR Code Menu Maker</h3>
                                <p className="text-base font-normal">Admin can create QR code for each table and link to the restaurant’s menu where customers can order from table using this qr code.</p>
                            </div>
                            <img className="max-w-[324px] h-[166px] w-full" src="/images/features/qrcode.png" alt="qr_code"/>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-6 bg-[#FCF6F8] pt-8 rounded-2xl border border-[#FFDCE8]">
                        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div className="sm:py-8 ps-8 flex-shrink">
                                <h3 className="text-2xl md:text-3xl font-bold mb-4">Add Items with Variations & Addon</h3>
                                <p className="text-base font-normal">In setting option in admin panel, admin can add item categories, items with variations & extras, item attributes, variation wise pricing, etc.</p>
                            </div>
                            <img className="w-[396px] h-[286px] flex-grow flex-shrink-0" src="/images/features/addon.png" alt="addon"/>
                        </div>
                    </div>
                </div>
            </div>}
            <button className="py-3.5 px-6 rounded-full text-white gradient-button block mx-auto text-lg font-bold">Explore All Features</button>
        </div>
    </section>
     {/* <!--===============================
           KEY FEATURES PART END 
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
            <img className="absolute right-0 top-0 -z-1 max-w-[455px] w-full"  src="/images/vector/Union.png"/>
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


      </>
    );
  }