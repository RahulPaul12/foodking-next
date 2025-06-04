'use client'
import useSticky from "@/hooks/useSticky";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function HeaderLayout(){
    const sticky = useSticky()
    const [sidebarOpen, setSidebaropen] = useState(false)
    const handlesidebar=()=>{
        setSidebaropen(!sidebarOpen)
    }
    return(
        <>
    {/* <!--==========================
              HEADER PART START 
     ==========================--> */}
        <header className={`fixed top-0 left-0 w-full z-[30] ${sticky ? 'sticky-header':''}`}>
            <div className="container !py-4">
                <div className="flex justify-between items-center">
                <Link href={"/"}><img className="h-8 lg:h-9" src="/images/logo.png" alt="logo"/></Link>
                <div className="flex justify-between items-center gap-7">
                    <nav className="hidden lg:flex items-center gap-7 text-base leading-5 font-medium [&_a]:hover:text-primary">
                        <Link href={"/client/features"}>Features</Link>
                        <Link href={"/client/demo"}>Demo</Link>
                        <Link href={"/client/pricing"}>Pricing</Link>

                        {/* <!--========================
                               SERVICE PART START 
                        ==========================--> */}
                        <div className="relative group">
                            <button className="capitalize font-medium group-hover:text-primary">services</button>
                            <div className="absolute top-12 left-0 z-10 w-[260px] p-4 rounded-3xl shadow-paper bg-white transition-all duration-300 origin-top scale-y-0 group-hover:scale-y-100">
                                <Link href={"/client/installation"} className="peer w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:text-primary hover:bg-[#F3FBFF]">
                                    <span className="w-[30px] h-[30px] flex-shrink-0 flex items-center justify-center rounded-full drop-shadow-blue bg-gradient-to-l from-[#73C3FF] to-[#007EDD]">
                                        <i className="icon-fill-install text-lg text-transparent bg-clip-text drop-shadow-icon bg-gradient-to-b from-white/90 to-white/60"></i>
                                    </span>
                                    <span className="text-base font-semibold capitalize whitespace-nowrap">
                                        Installation
                                    </span>
                                </Link>
                                <Link href={"/client/customization"} className="peer w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:text-primary hover:bg-[#F3FBFF]">
                                    <span className="w-[30px] h-[30px] flex-shrink-0 flex items-center justify-center rounded-full drop-shadow-orange bg-gradient-to-l from-[#FFC773] to-[#DD3500]">
                                        <i className="icon-fill-install text-lg text-transparent bg-clip-text drop-shadow-icon bg-gradient-to-b from-white/90 to-white/60"></i>
                                    </span>
                                    <span className="text-base font-semibold whitespace-nowrap">
                                        Customization
                                    </span>
                                </Link>
                                <Link href={"/client/maintanence"} className="peer w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:text-primary hover:bg-[#F3FBFF]">
                                    <span className="w-[30px] h-[30px] flex-shrink-0 flex items-center justify-center rounded-full drop-shadow-green bg-gradient-to-l from-[#52EA7C] to-[#1CB803]">
                                        <i className="icon-music-play text-lg text-transparent bg-clip-text drop-shadow-icon bg-gradient-to-b from-white/90 to-white/60"></i>
                                    </span>
                                    <span className="text-base font-semibold whitespace-nowrap">
                                        iCare Maintenance
                                    </span>
                                </Link>
                            </div>
                        </div>
                        {/* <!--========================
                                SERVICE PART END 
                         ==========================--> */}

                        {/* <!--========================
                              RESOURCES PART START 
                        ==========================--> */}
                        <div className="relative group">
                        <button className="capitalize font-medium group-hover:text-primary">Resources</button>
                        <div className="absolute top-12 left-0 z-10 w-[260px] p-4 rounded-3xl shadow-paper bg-white transition-all duration-300 origin-top scale-y-0 group-hover:scale-y-100">
                            <Link href={"/client/documentation"} className="peer w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:text-primary hover:bg-[#F3FBFF]">
                                <span className="w-[30px] h-[30px] flex-shrink-0 flex items-center justify-center rounded-full drop-shadow-blue bg-gradient-to-l from-[#FF62A6] to-[#ED0067]">
                                    <i className="icon-clipboard-text text-lg text-transparent bg-clip-text drop-shadow-icon bg-gradient-to-b from-white/90 to-white/60"></i>
                                </span>
                                <span className="text-base font-semibold capitalize whitespace-nowrap">
                                    Documentation
                                </span>
                            </Link>
                            <Link href={"/client/blogs"} className="peer w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:text-primary hover:bg-[#F3FBFF]">
                                <span className="w-[30px] h-[30px] flex-shrink-0 flex items-center justify-center rounded-full drop-shadow-orange bg-gradient-to-l from-[#B077FF] to-[#7918FF]">
                                    <i className="icon-document-text text-lg text-transparent bg-clip-text drop-shadow-icon bg-gradient-to-b from-white/90 to-white/60"></i>
                                </span>
                                <span className="text-base font-semibold whitespace-nowrap">
                                    Blogs
                                </span>
                            </Link>
                            <Link href={"#"} className="peer w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:text-primary hover:bg-[#F3FBFF]">
                                <span className="w-[30px] h-[30px] flex-shrink-0 flex items-center justify-center rounded-full drop-shadow-green bg-gradient-to-l from-[#FFB973] to-[#DD5C00]">
                                    <i className="icon-video-play text-lg text-transparent bg-clip-text drop-shadow-icon bg-gradient-to-b from-white/90 to-white/60"></i>
                                </span>
                                <span className="text-base font-semibold whitespace-nowrap">
                                    Videos
                                </span>
                            </Link>
                            <Link href={"#"} className="peer w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:text-primary hover:bg-[#F3FBFF]">
                                <span className="w-[30px] h-[30px] flex-shrink-0 flex items-center justify-center rounded-full drop-shadow-green bg-gradient-to-l from-[#52EA7C] to-[#1CB803]">
                                    <i className="icon-people text-lg text-transparent bg-clip-text drop-shadow-icon bg-gradient-to-b from-white/90 to-white/60"></i>
                                </span>
                                <span className="text-base font-semibold whitespace-nowrap">
                                    Community
                                </span>
                            </Link>
                            <Link href={"/client/faq"} className="peer w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:text-primary hover:bg-[#F3FBFF]">
                                <span className="w-[30px] h-[30px] flex-shrink-0 flex items-center justify-center rounded-full drop-shadow-green bg-gradient-to-l from-[#73C3FF] to-[#007EDD]">
                                    <i className="icon-message-question text-lg text-transparent bg-clip-text drop-shadow-icon bg-gradient-to-b from-white/90 to-white/60"></i>
                                </span>
                                <span className="text-base font-semibold whitespace-nowrap">
                                    FAQs
                                </span>
                            </Link>
                            <Link href={"#"} className="peer w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:text-primary hover:bg-[#F3FBFF]">
                                <span className="w-[30px] h-[30px] flex-shrink-0 flex items-center justify-center rounded-full drop-shadow-green bg-gradient-to-l from-[#7AA0FF] to-[#034BFF]">
                                    <i className="icon-music-play text-lg text-transparent bg-clip-text drop-shadow-icon bg-gradient-to-b from-white/90 to-white/60"></i>
                                </span>
                                <span className="text-base font-semibold whitespace-nowrap">
                                    Support
                                </span>
                            </Link>
                        </div>
                        </div>
                        {/* <!--========================
                              RESOURCES PART START 
                         ==========================--> */}

                        {/* <!--========================
                               COMPANY PART START 
                        ==========================--> */}
                       <div className="relative group">
                        <button className="capitalize font-medium group-hover:text-primary">Company</button>
                        <div className="absolute top-12 left-0 z-10 w-[260px] p-4 rounded-3xl shadow-paper bg-white transition-all duration-300 origin-top scale-y-0 group-hover:scale-y-100">
                            <Link href={"#"} className="peer w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:text-primary hover:bg-[#F3FBFF]">
                                <span className="w-[30px] h-[30px] flex-shrink-0 flex items-center justify-center rounded-full drop-shadow-blue bg-gradient-to-l from-[#FF62A6] to-[#ED0067]">
                                    <i className="icon-clipboard-text text-lg text-transparent bg-clip-text drop-shadow-icon bg-gradient-to-b from-white/90 to-white/60"></i>
                                </span>
                                <span className="text-base font-semibold capitalize whitespace-nowrap">
                                    About Us
                                </span>
                            </Link>
                            <Link href={"#"} className="peer w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:text-primary hover:bg-[#F3FBFF]">
                                <span className="w-[30px] h-[30px] flex-shrink-0 flex items-center justify-center rounded-full drop-shadow-orange bg-gradient-to-l from-[#B077FF] to-[#7918FF]">
                                    <i className="icon-document-text text-lg text-transparent bg-clip-text drop-shadow-icon bg-gradient-to-b from-white/90 to-white/60"></i>
                                </span>
                                <span className="text-base font-semibold whitespace-nowrap">
                                    Contact Us
                                </span>
                            </Link>
                            <Link href={"/client/testimonial"} className="peer w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:text-primary hover:bg-[#F3FBFF]">
                                <span className="w-[30px] h-[30px] flex-shrink-0 flex items-center justify-center rounded-full drop-shadow-green bg-gradient-to-l from-[#FFB973] to-[#DD5C00]">
                                    <i className="icon-video-play text-lg text-transparent bg-clip-text drop-shadow-icon bg-gradient-to-b from-white/90 to-white/60"></i>
                                </span>
                                <span className="text-base font-semibold whitespace-nowrap">
                                    Testimonial
                                </span>
                            </Link>
                        </div>
                       </div>
                       {/* <!--========================
                             COMPANY PART START 
                        ==========================--> */}
                        <Link href={"/features"}>Partner</Link>
                    </nav>
                    <div className="hidden lg:flex items-center gap-7 ">
                        <Link href={"/signin"} className="text-primary text-base leading-5 font-bold">Sign In</Link>
                        <button className="py-3.5 px-6 rounded-full text-white gradient-button text-base leading-5 font-bold">Hire Us</button>
                    </div>
                    <button className="lg:hidden block rounded-2xl" onClick={handlesidebar}>
                        <i className="icon-hamburger-menu gradient-text text-2xl "></i>
                    </button>
                </div>
                </div>
            </div>
        </header>
    {/* <!--==========================
        HEADER PART END 
      ==========================--> */}

   {/* <!--==========================
          SIDEBAR PART START 
    ==========================--> */}
    <aside className={`drawer thin-scrolling ${sidebarOpen? 'active':''}`}>
        <nav className="flex flex-col text-[#1A203C] [&_a]:last:border-none">
                <Link className="py-4 px-2 border-b border-[#E7EAEF]" href={"/"}><span className="text-base font-medium">Features</span></Link>
                <Link className="py-4 px-2 border-b border-[#E7EAEF]" href={"/"}><span className="text-base font-medium">Demo</span></Link>
                <Link className="py-4 px-2 border-b border-[#E7EAEF]" href={"/"}><span className="text-base font-medium">Pricing</span></Link>
                <div className="dropdown-group">
                    <button className="dropdown-btn py-4 px-2 border-b border-[#E7EAEF] flex justify-between w-full" href={"/"}><span className="text-base font-medium">Services</span> <i className="icon-chevron-down text-base"></i></button>
                    <div className="pl-3 flex-col dropdown-content">
                        <Link className="py-4 px-2 border-b border-[#E7EAEF]" href={"/"}><span className="text-base font-medium">Features</span></Link>
                        <Link className="py-4 px-2 border-b border-[#E7EAEF]" href={"/"}><span className="text-base font-medium">Demo</span></Link>
                        <Link className="py-4 px-2 border-b border-[#E7EAEF]" href={"/"}><span className="text-base font-medium">Pricing</span></Link>
                    </div>
                </div>
                <div className="dropdown-group">
                    <button className="dropdown-btn py-4 px-2 border-b border-[#E7EAEF] flex justify-between w-full" href={"/"}><span className="text-base font-medium">Resources</span> <i className="icon-chevron-down text-base"></i></button>                        
                    <div className="pl-3 flex-col dropdown-content">
                        <Link className="py-4 px-2 border-b border-[#E7EAEF] flex gap-3 items-center" href={"/"}>
                            <span className="w-7.5 h-7.5 rounded-full bg-linear-270 from-[#FF62A6] to-[#ED0067] flex justify-center items-center">
                                <i className="icon-clipboard-text text-base text-transparent bg-clip-text drop-shadow-icon bg-gradient-to-b from-white/90 to-white/60"></i>
                            </span>
                            <span className="text-base font-medium">Documentation</span></Link>
                        <Link className="py-4 px-2 border-b border-[#E7EAEF] flex gap-3 items-center" href={"/"}>
                            <span className="w-7.5 h-7.5 rounded-full bg-linear-270 from-[#B077FF] to-[#7918FF] flex justify-center items-center">
                                <i className="icon-document-text text-base text-transparent bg-clip-text drop-shadow-icon bg-gradient-to-b from-white/90 to-white/60"></i>
                            </span>
                            <span className="text-base font-medium">Blogs</span>
                        </Link>
                        <Link className="py-4 px-2 border-b border-[#E7EAEF] flex gap-3 items-center" href={"/"}>
                            <span className="w-7.5 h-7.5 rounded-full bg-linear-270 from-[#FFB973] to-[#DD5C00] flex justify-center items-center">
                                <i className="icon-video-play text-base text-transparent bg-clip-text drop-shadow-icon bg-gradient-to-b from-white/90 to-white/60"></i>
                            </span>
                            <span className="text-base font-medium">Videos</span>
                        </Link>
                        <Link className="py-4 px-2 border-b border-[#E7EAEF] flex gap-3 items-center" href={"/"}>
                            <span className="w-7.5 h-7.5 rounded-full bg-linear-270 from-[#56E792] to-[#02B753] flex justify-center items-center">
                                <i className="icon-people text-base text-transparent bg-clip-text drop-shadow-icon bg-gradient-to-b from-white/90 to-white/60"></i>
                            </span>
                            <span className="text-base font-medium">Community</span>
                        </Link>
                        <Link className="py-4 px-2 border-b border-[#E7EAEF] flex gap-3 items-center" href={"/"}>
                            <span className="w-7.5 h-7.5 rounded-full bg-linear-270 from-[#73C3FF] to-[#007EDD] flex justify-center items-center">
                                <i className="icon-message-question text-base text-transparent bg-clip-text drop-shadow-icon bg-gradient-to-b from-white/90 to-white/60"></i>
                            </span>
                            <span className="text-base font-medium">FAQs</span>
                        </Link>
                        <Link className="py-4 px-2 border-b border-[#E7EAEF] flex gap-3 items-center" href={"/"}>
                            <span className="w-7.5 h-7.5 rounded-full bg-linear-270 from-[#7AA0FF] to-[#034BFF] flex justify-center items-center">
                                <i className="icon-music-play text-base text-transparent bg-clip-text drop-shadow-icon bg-gradient-to-b from-white/90 to-white/60"></i>
                            </span>
                            <span className="text-base font-medium">Support</span>
                        </Link>
                    </div>
                </div>
                <div className="dropdown-group">
                    <button className="dropdown-btn py-4 px-2 border-b border-[#E7EAEF] flex justify-between w-full" href={"/"}><span className="text-base font-medium">Company</span> <i className="icon-chevron-down text-base"></i></button>
                    <div className="pl-3 flex-col dropdown-content">
                        <Link className="py-4 px-2 border-b border-[#E7EAEF]" href={"/"}><span className="text-base font-medium">Features</span></Link>
                        <Link className="py-4 px-2 border-b border-[#E7EAEF]" href={"/"}><span className="text-base font-medium">Demo</span></Link>
                        <Link className="py-4 px-2 border-b border-[#E7EAEF]" href={"/"}><span className="text-base font-medium">Pricing</span></Link>
                    </div>
                </div>
                <Link className="py-4 px-2 border-b border-[#E7EAEF]" href={"/"}><span className="text-base font-medium">Partner</span></Link>
                <Link className="py-4 px-2 border-b border-[#E7EAEF]" href={"/"}><span className="text-primary text-base font-bold">Sign In</span></Link>
        </nav>
        <button className="cursor-pointer mt-4 py-2.5 w-full sm:py-3.5 px-6 sm:px-8 rounded-full text-white text-base sm:text-lg leading-6 font-bold gradient-button">Hire Us</button>
    </aside>
   {/* <!--==========================
          SIDEBAR PART START 
    ==========================--> */}

</>
    )
}