import Image from "next/image";
import Link from "next/link";

export default function HeaderLayout(){
    return(
        <>
    {/* <!--==========================
              HEADER PART START 
     ==========================--> */}
        <header className="fixed top-0 left-0 w-full z-[30]">
            <div className="container !py-4">
                <div className="flex justify-between items-center">
                <Link href={"/"}><img className="h-8 lg:h-9" src="/images/logo.png" alt="logo"/></Link>
                <div className="flex justify-between items-center gap-7">
                    <nav className="hidden lg:flex items-center gap-7 text-base leading-5 font-medium [&_a]:hover:text-primary">
                        <Link href={"/features"}>Features</Link>
                        <Link href={"/features"}>Demo</Link>
                        <Link href={"/features"}>Pricing</Link>
                        <Link href={"/features"}>Services</Link>
                        <Link href={"/features"}>Resources</Link>
                        <Link href={"/features"}>Company</Link>
                        <Link href={"/features"}>Partner</Link>
                    </nav>
                    <div className="hidden lg:flex items-center gap-7 ">
                        <Link href={"/signin"} className="text-primary text-base leading-5 font-bold">Sign In</Link>
                        <button className="py-3.5 px-6 rounded-full text-white gradient-button text-base leading-5 font-bold">Hire Us</button>
                    </div>
                    <button className="lg:hidden block rounded-2xl">
                        <i className="icon-hamburger-menu gradient-text text-2xl "></i>
                    </button>
                </div>
            </div>
            </div>
        </header>
    {/* <!--==========================
        HEADER PART END 
    ==========================--> */}

{/* // <!--==========================
// SIDEBAR PART START 
// ==========================--> */}
    <aside className="drawer thin-scrolling">
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