
'use client'

import Link from "next/link"
import blogs from "@/json/blogs.json"
import { useDispatch, useSelector } from "react-redux";
import { setBlog } from "@/redux/store/blogSlice";
export default function BlogDetails (){
    const socials = [
        {name:'youtube', path:"/youtube", img:"/images/social/share/Youtube.png"},
        {name:'facebook', path:"/facebook", img:"/images/social/share/Facebook.png"},
        {name:'instagram', path:"/instagram", img:"/images/social/share/Instagram.png"},
        {name:'telegram', path:"/telegram", img:"/images/social/share/Telegram.png"},
        {name:'twitter', path:"/twitter", img:"/images/social/share/Twitter.png"},
        {name:'Reddit', path:"/reddit", img:"/images/social/share/Reddit.png"},
        {name:'pinterest', path:"/pinterest", img:"/images/social/share/Pinterest.png"},
        {name:'messenger', path:"/messenger", img:"/images/social/share/Messenger.png"},
        {name:'linkedin', path:"/linkedin", img:"/images/social/share/Linkedin.png"},
    ]
    const dispatch = useDispatch()
    const blogDetails = useSelector((state) => state.blog.currentBlog);
    return (
        <>
    {/* <!--===============================
    //    BLOG DETAILS PART START 
    //  =================================--> */}
     <section className="pt-26 lg:pt-38 mb-20 sm:mb-40">
        <span className="bg-linear-180 from-[#ffc4dc] to-white blur-[350px] w-full absolute -z-10 top-0 h-[400px]"></span>
        <div className="container">
            <div className="max-w-[742px] w-full mx-auto">
                 <div className="mb-12 sm:mb-16">
                 <ul className="flex items-center justify-center gap-x-3 mb-4">
                     <li className="flex items-start gap-1.5">
                         <span className="text-lg font-medium capitalize text-paragraph">{blogDetails?.date }</span>
                     </li>
                     <li className="flex items-start gap-1.5">
                         <span className="w-2 h-2 rounded-full bg-black"></span>
                     </li>
                     <li className="flex items-start gap-1.5">
                        <span className="text-lg font-medium capitalize text-paragraph">10 min read</span>
                     </li>
                 </ul> 
                 <h1 className="text-2xl sm:text-[42px] font-semibold mb-8 sm:mb-12 text-center">
                     { blogDetails?.title }
                 </h1>
                 <img src={`${blogDetails?.coverimage}`} alt="blog-details" className="w-full rounded-2xl mb-8 sm:mb-12" />
                 <p className="mb-8">
                     The iNiLabs product FoodKing was recognized by Envato as the most popular mobile development item in 2023. This innovative restaurant food delivery system offers everything a restaurant owner needs, including an admin panel, a delivery man app, and a robust POS system. With its easy-to-use, flexible, and efficient platform, FoodKing revolutionized the food delivery industry. Official link : <Link href={''}>most-popular-web-and-code-items-on-market-2023</Link>
                 </p>
                 <div className="mb-8">
                     <h3 className="text-2xl font-bold mb-4">
                         What is FoodKing?
                     </h3>
                     <p>
                         FoodKing is a restaurant food delivery system designed to meet the needs of restaurants, food delivery services, and online food orders. The system includes:
                     </p>
                 </div>
                 <div className="mb-8">
                     <h3 className="text-lg font-bold mb-3 leading-snug">
                         Admin Panel
                     </h3>
                     <p>
                         The admin panel simplifies restaurant operations by enabling easy order management, menu creation, and payment processing. Restaurant owners can efficiently manage their business through this intuitive interface.
                     </p>
                 </div>
                 <div className="mb-8">
                     <h3 className="text-lg font-bold mb-3 leading-snug">
                         Delivery Man App
                     </h3>
                     <p>
                         An intuitive app designed for delivery personnel, making it easy to manage and deliver food orders efficiently. The app ensures that delivery operations run smoothly and on time.
                     </p>
                 </div>
                 <div className="mb-8">
                     <h3 className="text-lg font-bold mb-3 leading-snug">
                         Restaurant POS
                     </h3>
                     <p>
                         FoodKing’s powerful point-of-sale (POS) system supports both in-store and delivery operations. This feature helps restaurants streamline sales processes and track transactions effortlessly. With these rich features, restaurants can streamline operations and provide exceptional customer service.
                     </p>
                 </div>
                 <div className="mb-8">
                     <h3 className="font-bold text-2xl mb-4">
                         Why Did FoodKing Stand Out in 2023?
                     </h3>
                     <p>
                         Envato’s recognition of FoodKing as the most popular mobile development item in 2023 illustrates its significant impact and effectiveness. Here are some key reasons why FoodKing outshines its competition:
                     </p>
                 </div>
                 <div className="mb-8">
                     <h3 className="text-lg font-bold mb-3 leading-snug">
                         Admin Panel
                     </h3>
                     <p>
                         The admin panel simplifies restaurant operations by enabling easy order management, menu creation, and payment processing. Restaurant owners can efficiently manage their business through this intuitive interface.
                     </p>
                 </div>
                 <div className="mb-8">
                     <h3 className="text-lg font-bold mb-3 leading-snug">
                         Delivery Man App
                     </h3>
                     <p>
                         An intuitive app designed for delivery personnel, making it easy to manage and deliver food orders efficiently. The app ensures that delivery operations run smoothly and on time.
                     </p>
                 </div>
                 <div className="mb-8">
                     <h3 className="text-lg font-bold mb-3 leading-snug">
                         Restaurant POS
                     </h3>
                     <p>
                         FoodKing’s powerful point-of-sale (POS) system supports both in-store and delivery operations. This feature helps restaurants streamline sales processes and track transactions effortlessly. With these rich features, restaurants can streamline operations and provide exceptional customer service.
                     </p>
                 </div>
                 <div>
                     <h3 className="font-bold text-2xl mb-4">
                         Why Did FoodKing Stand Out in 2023?
                     </h3>
                     <p>
                         Envato’s recognition of FoodKing as the most popular mobile development item in 2023 illustrates its significant impact and effectiveness. Here are some key reasons why FoodKing outshines its competition:
                     </p>
                 </div>
                 </div>
                 <div className="flex flex-col justfy-start">
                     <h3 className="text-2xl font-bold mb-4">Like this article? Spread the word</h3>
                     <div className="flex flex-wrap gap-4 items-center">
                     {
                        socials.map((social,index)=>(
                            <Link key={index} href={`${social.path}`}  className="w-6 h-6 sm:w-12 sm:h-12 rounded-full flex-shrink-0">
                                 <img className="w-full" src={`${social.img}`}/>
                            </Link>
                        ))
                    }
                     </div>
                 </div>
             </div>
        </div>
     </section>
     {/* <!--===============================
    //     BLOG DETAILS PART END
    //  =================================--> */}


    {/* // <!--===============================
    //       OTHER BLOG PART START 
    // =================================--> */}
     <section className="mb-20 sm:mb-40">
        <div className="container">
            <div className="max-w-[742px] w-full mx-auto">
                <h1 className="text-3xl lg:text-[42px] font-bold leading-tight mb-12 sm:mb-16 text-center">Other Popular
                    <span className="gradient-text"> News </span>&
                    <span className="gradient-text"> Article</span>
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-9.5">
                {
                    blogs.slice(0,2).map((blog,index)=>(
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
            </div>
        </div>
    </section>
    {/* // <!--==============================
    //         OTHER BLOG PART END
    // =================================--> */}

    </>
    )
}