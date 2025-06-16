'use client'
import blogs from "@/json/blogs.json"
import { setBlog } from "@/redux/store/blogSlice"
import Link from "next/link"
import { useState } from "react"
import { useDispatch } from "react-redux"
export default function Blogs(){

    const categories = ['All', 'Recent', 'News', 'Article', 'Comparison']
    const [activeCategory, setActiveCategory] = useState("All")
    const [isOpen, setIsOpen] = useState(false)

    const dispatch = useDispatch();

    return(
        <>
     {/* <!--===============================
                 HERO PART START 
     =================================--> */}
        <section className="pt-26 lg:pt-38 mb-8 sm:mb-12">
           <span className="bg-linear-180 from-[#ffc4dc] to-white blur-[350px] w-full absolute -z-10 top-0 h-[400px]"></span>
           <div className="container">
               <div className="py-8 px-12 rounded-2xl bg-custom-gradient relative overflow-hidden z-0">
                   <img src="/images/vector/Union.png" className="absolute right-0 top-0 -z-1 max-w-[455px] w-full"/>
                   <div className="grid grid-cols-1 lg:grid-cols-2">
                       <div className="flex flex-col items-center lg:items-start justify-center">
                           <h2 className="text-3xl md:text-[42px] leading-tight font-bold mb-4">
                               Recent
                               <span className="gradient-text"> News </span>
                               &
                               <span className="gradient-text"> Article</span>
                               </h2>
                           <p className="text-base font-normal lg:text-start text-center">We recommended you to subscribe to our newsletter, drop your email below in footer to get daily update about us.</p>
                       </div>
                       <img className="max-w-[407px] w-full ml-auto lg:block hidden" src="/images/blog/banner.png"/>
                   </div>
               </div>
           </div>
        </section>
     {/* <!--==============================
                 HERO PART END 
     =================================--> */}


     {/* <!--===============================
               BLOGS PART START 
     =================================--> */}
     <section className="mb-20 sm:mb-40">
        <div className="container">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8 sm:mb-12 gap-x-6">
                <div id="filter-menu" className="relative max-lg:w-full max-lg:max-w-[350px] mb-6 sm:mb-0 ">
                    <button onClick={()=>setIsOpen(!isOpen)} className="flex lg:hidden items-center justify-between gap-2 w-full h-12 px-6 rounded-full shadow-input bg-white">
                        <span className="text-base font-medium capitalize text-heading">{ activeCategory }</span>
                        <i className={`${isOpen? 'rotate-180':'rotate-0'} icon-chevron-down text-xl text-heading transition-all duration-300`}></i>
                    </button>
                    <nav className={`${isOpen ? 'max-lg:scale-y-100' : 'max-lg:scale-y-0'} flex flex-col lg:flex-row items-start lg:items-center origin-top transition-all duration-300 max-lg:absolute max-lg:top-12 max-lg:left-0 max-lg:z-10 max-lg:p-2 max-lg:w-full max-lg:shadow-paper max-lg:rounded-xl max-lg:bg-white`}>
                        {
                            categories.map((category, index)=>(
                            <button
                                key={index}
                                type="button" 
                                onClick={()=>setActiveCategory(category)}
                                className={`${activeCategory == category ? 'bg-primary text-white shadow-gradientBtn':'' } h-10 w-full lg:w-fit px-4 lg:px-6 rounded-3xl text-base text-left lg:text-center font-medium capitalize cursor-pointer transition-all duration-300`}>
                                { category }
                            </button>
                            ))
                        }
                    </nav>
                </div>
                <form action="" className="max-w-[350px] w-full bg-white p-1 shadow-input rounded-full flex">
                    <input type="text" name="search" id="search" placeholder="Search blogs name" className="flex-1 outline-none px-6"/>
                    <button type="submit" className="w-10 h-10 rounded-full gradient-button"><i className="icon-magnify-search text-white"></i> </button>
                </form>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-y-8 lg:gap-x-9.5 mb-12">
                {
                    blogs.map((blog,index)=>(
                    <div key={index} className="bg-white shadow-blog rounded-2xl flex flex-col hover:shadow-card">
                        <div className="w-full h-47">
                            <img src={`${blog.coverimage}`} className="w-full h-full object-cover rounded-t-2xl" alt="blogcover" />
                        </div>
                        <h6 className="mb-6 flex-grow line-clamp-2 px-6 pt-6 text-lg font-bold leading-7">{ blog.title }</h6>
                        <div className="flex justify-between gap-x-6 gap-y-3 px-6 pb-6 flex-wrap lg:flex-nowrap">
                            <span className="text-lg font-medium leading-tight">{ blog.date }</span>
                            <Link href={`/client/blogs/${blog.id}`} onClick={()=>dispatch(setBlog(blog))} className="text-primary font-medium text-lg leading-tight">Read more</Link>
                        </div>
                    </div>
                    ))
                }
            </div>
            <div className="flex gap-8 justify-end">
                <div className="w-12 h-12 rounded-full bg-[#FFEFF5] hover:text-white hover:bg-linear-270 from-primary to-secondary flex items-center justify-center">
                    <i className="icon-left"></i>
                </div>
                <div className="w-12 h-12 rounded-full bg-[#FFEFF5] hover:text-white hover:bg-linear-270 from-primary to-secondary flex items-center justify-center">
                    <i className="icon-right"></i>
                </div>
            </div>
        </div>
     </section>
    {/* <!--===============================
               BLOGS PART START 
     =================================--> */}
        </>
    )
}