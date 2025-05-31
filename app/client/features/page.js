'use client'
import useAutoplay from "@/hooks/useAutoplay";
import Link from "next/link";

export default function Features(){
        const tabSource = [
            { id: 1, name: 'Admin Panel' },
            { id: 2, name: 'Branch & Staffs Panel' },
            { id: 3, name: 'User Website' },
            { id: 4, name: 'QR Table Order' },
            { id: 5, name: 'User App' }, 
            { id: 6, name: 'Delivery App' },
          ];
          const addonTabs = [
            { id: 1, name: 'Marchent/Manager App', icon:"icon-merchant-app" },
            { id: 2, name: 'Chef/Kitchen (KDS) App', icon:"icon-kitchen-app" },
            { id: 3, name: 'Self-Ordering Kiosk App', icon:"icon-kiosk-app" },
        ]
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
          
    return(
        <>
     {/* <!--===============================
           HERO PART START
     =================================--> */}
     <section className="h-auto w-full pt-26 lg:pt-38 relative">
        <span className="bg-linear-180 from-[#ffc4dc] to-white blur-[350px] w-full absolute -z-10 top-0 h-full"></span>
        <div className="container">
            <div className="max-w-[934px] w-full mx-auto">
                <h1 className="text-3xl lg:text-[42px] font-bold text-center leading-tight mb-6">Extraordinary<span className="gradient-text"> Features of FoodKing Multi-Branch </span>Restaurant Business Solution</h1>
                <p className="text-base lg:text-lg font-normal text-center lg:px-24 mb-8 sm:mb-6">FoodKing is packed with the tools that keep your restaurant running smooth and growing your business fast. Manage orders, deliveries, dine-in, inventory, staff, and more from one powerful system. Whether you run a small café or a multi-branch restaurant, FoodKing scales with your business.</p>
            </div>
            <div className="flex gap-6 items-center justify-center mb-8">
                <button className="cursor-pointer py-3.5 px-8 rounded-full text-white text-base sm:text-lg leading-6 font-bold gradient-button">Buy Now</button>
                <button className="cursor-pointer py-3.5 px-8 border border-secondary rounded-full text-base sm:text-lg leading-6 font-bold text-transparent bg-clip-text gradient-button hover:bg-clip-border hover:text-white">Explore Demo</button>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 items-center justify-center mb-12 sm:mb-16">
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
     {/* <!--==============================
           HERO PART END 
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
          ADDON FEATURES PART START 
     =================================--> */}
    {/* <section className="addon-curve-bg pt-20 pb-20 sm:pb-40">
        <div className="container">
            <div className="max-w-[742px] w-full mx-auto md:px-20 mb-12 lg:mb-16">
                <h1 className="text-3xl lg:text-[42px] font-bold text-center leading-tight mb-6">Boost Your System –<span className="gradient-text"> Addons Features </span>Uncovered</h1>
                <p className="text-base lg:text-lg font-normal text-center lg:px-24">Packed with extra goodies to make running your restaurant smoother, faster, and way more fun!</p>
            </div>
            <div className="w-full max-w-[850px] relative p-4 mb-12 mx-auto bg-white rounded-full">
            <nav className="flex overflow-x-auto scrollbar-hide nav-scroll-container">
                    {
                        addonTabs.map(addon=>(
                            <button 
                                type="button" 
                                onClick={()=>handleFeatureShow(addon.id)}
                                key={addon.id}
                                className={`${featureActive == addon.id? 'active':''} navbtn w-fit text-base lg:text-lg font-semibold leading-5 lg:leading-6 rounded-full px-4 py-3 flex items-center whitespace-nowrap flex-shrink-0 gap-2`}>
                                <img className={`${addon.id == featureActive? 'filter-none':''} w-5 brightness-50 flex-shrink-0`} src='/images/vector/01.png'/>
                                <span>{ addon.name }</span>
                            </button>
                        ))
                    }
                </nav>
                <nav className="flex overflow-x-auto scrollbar-hide justify-evenly">
                    <button 
                        type="button" 
                        v-for="addonTab in addonautoplay.featuretabs.value"
                        @click="addonautoplay.handleFeatureShow(addonTab.id, $event)"
                        :key="addonTab.id"
                        :ref="el=>addonRefs[addonTab.id] = el"
                        :className="addonTab.id === addonautoplay.featureActive.value ? 'active' : ''"
                        className="navbtn w-fit text-base lg:text-lg font-semibold leading-5 lg:leading-6 rounded-full px-4 py-3 flex items-center whitespace-nowrap flex-shrink-0 gap-2 ">
                        <i :className="[autoplaytab.featureActive.value===addonTab.id? 'text-white': '', addonTab.icon]" className="text-xl text-[#818B9B]"></i>
                        <span>{{ addonTab.name }}</span>
                    </button>
                </nav>
                <div className="w-full h-12 bg-[#FFA087] absolute left-0 right-0 top-1/2 -translate-y-1/2 -z-10 bg-linear-270 from-[#FFB19B] from-0% via-[#DCA4FF] via-50% to-[#FF97BD] to-100% blur-[30px]"></div>
            </div>
            <div v-if="autoplaytab.featureActive.value == 1">
                <div className="grid lg:grid-cols-12 gap-6">
                    <div className="col-span-12 lg:col-span-6 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div className="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-6">
                            <div>
                                <h3 className="text-[28px] font-bold mb-4">Dashboard</h3>
                                <p className="text-base font-normal">Quick overview of entire business with a real-time dashboard that shows sales, orders, performance, and key insights.</p>
                            </div>
                            <img className="h-full w-full" src="/images/addon/marchent/dashboard.png" alt="pos"/>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-6 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div className="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-6">
                            <div>
                                <h3 className="text-[28px] font-bold mb-4">Online Orders Manage</h3>
                                <p className="text-base font-normal">Manage online customer orders effortlessly with live updates, automatic status tracking, and easy access to order details for smooth fulfillment.</p>
                            </div>
                            <img className="h-full w-full" src="/images/addon/marchent/order-management.png" alt="pos"/>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-4 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div className="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-6">
                            <div>
                                <h3 className="text-2xl font-bold mb-4">POS Orders Manage</h3>
                                <p className="text-base font-normal">Take in-store orders quickly with built-in POS system—optimized for speed, accuracy, & an intuitive user experience.</p>
                            </div>
                            <img className="h-full w-full" src="/images/addon/marchent/pos-order.png" alt="pos"/>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-4 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div className="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-6">
                            <div>
                                <h3 className="text-2xl font-bold mb-4">Order Details</h3>
                                <p className="text-base font-normal">View and manage each order including items, customer info, payment status, and delivery progress—all in one place.</p>
                            </div>
                            <img className="h-full w-full" src="/images/addon/marchent/order-details.png" alt="pos"/>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-4 bg-[#FCF6F8] px-6 pt-6 rounded-2xl border border-[#FFDCE8]">
                        <div className="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-6">
                            <div>
                                <h3 className="text-2xl font-bold mb-4">Sales Report</h3>
                                <p className="text-base font-normal">Access detailed sales reports to monitor performance, spot trends, and make data-driven decisions that drive growth.</p>
                            </div>
                            <img className="h-full w-full" src="/images/addon/marchent/sales-report.png" alt="pos"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </section> */}
    {/* //  <!--===============================
    //        ADDON FEATURES PART END 
    //  =================================--> */}


    {/* <!--===============================
              ACTION PART START 
     =================================--> */}
     <section className="container">
        <div className="mb-20 sm:mb-40">
            <div className="p-8 md:p-12 rounded-2xl bg-custom-gradient relative z-0">
                <img className="absolute right-0 top-0 -z-1 max-w-[455px] w-full"  src="/images/vector/Union.png"/>
                <div className="relative">
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="text-3xl md:text-[42px] leading-tight text-center font-bold mb-3">Curious to
                            <span className="gradient-text"> Discuss More </span>
                            About FoodKing?
                            </h2>
                        <p className="text-base font-normal text-center mb-6">FoodKing is built using modern, secure, and scalable technologies to ensure top-tier performance and reliability.</p>
                        <div className="flex flex-wrap items-center max-lg:justify-center gap-4">
                            <Link href={'/'} className="h-[52px] !leading-[52px] px-6 rounded-full gradient-button text-base sm:text-lg font-semibold capitalize flex items-center gap-3 text-white">
                                <i className="icon-line-tidycal text-2xl"></i>
                                Book a Meeting
                            </Link>
                            <Link href={'/'} className="h-[52px] !leading-[52px] px-6 rounded-full whatsapp-gradient flex items-center gap-3 text-white">
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