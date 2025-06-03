'use client'
import Link from "next/link";
import { useState } from "react";

export default function Documentation (){
    const tabs = [
        {name: 'Getting Started', icon:'icon-fill-shutdown'},
        {name: 'Prerequisite', icon:'icon-clipboard-text', dropdownContent:['Basic Knowledge', 'Server Requirement', 'Active Purchase Key','Mobile App']},
        {name: 'Environment Setup', icon:'icon-env-setup'},
        {name: 'Website Installation', icon:'icon-fill-install', dropdownContent:['Basic Knowledge', 'Server Requirement', 'Active Purchase Key']},
        {name: 'Mobile App', icon:'icon-fill-mobile'},
        {name: 'Change Log', icon:'icon-change-log'},
        {name: 'Support', icon:'icon-music-play'},
        {name: 'Version Update', icon:'icon-fill-update'}
    ]
    const [activetab, setActivetab] = useState('Getting Started');
    const [activeContent, setActivecontent] = useState(null)
    const handleTab = (tab)=>{
       setActivetab(tab)
    }
    const handledropTab = (tab, content)=>{
      setActivetab(tab)
      setActivecontent(content)
      console.log(tab, content)
    }

    return (
        <>
        {/* <!--===============================
                 HERO PART START 
        =================================--> */}
        <section className="pt-26 lg:pt-38 mb-12 sm:mb-16">
            <span className="bg-linear-180 from-[#ffc4dc] to-white blur-[350px] w-full absolute -z-10 top-0 h-[400px]"></span>
            <div className="container">
               <div className="max-w-[790px] w-full mx-auto">
                   <h1 className="text-3xl lg:text-[42px] font-bold text-center leading-tight mb-6">FoodKing<span className="gradient-text"> Documentation</span></h1>
                   <p className="text-base lg:text-lg font-normal text-center">Everything you need to set up, manage, and master FoodKing.</p>
               </div>
            </div>
        </section>
        {/* <!--==============================
                  HERO PART END 
        =================================--> */}

    {/* <!--================================
       DOCUMENTATION CONTENT PART START 
     =================================--> */}
     <section className="mb-20 sm:mb-40">
        <div className="container">
        <div className="grid col-span-1 md:grid-cols-3 gap-y-12 gap-x-8 lg:place-content-between">
        <div className="md:col-span-1">
            <div className="sticky top-32 p-4 rounded-2xl bg-white shadow-[0px_6px_12px_0px_rgba(186,186,186,0.10)]">
                <nav className="flex flex-col gap-2 text-[#1A203C]">
                    {
                        tabs.map((tab,index)=>(
                        <div key={index}>
                            {tab.dropdownContent &&(
                            <div className={`vertical-dropdown-group ${activetab=== tab.name? 'active':''}`}>
                                <button onClick={()=>handledropTab(tab.name, tab.dropdownContent[0])}
                                    className={`${activetab=== tab.name? 'active':''} vertical-dropdown-btn p-4 w-full text-start rounded-xl text-lg font-bold hover:bg-[#FFF4F9] flex justify-between items-center tabBtn`}>
                                    <div className="flex items-center gap-3.5">
                                      <i className={`${tab.icon} icon-clipboard-text text-xl bg-linear-to-b from-primary to-secondary bg-clip-text text-transparent`}></i>
                                      <span>{ tab.name }</span>
                                    </div>
                                    <div className="w-[42px] h-[42px] rounded-full bg-[#FFE0ED] flex items-center justify-center">
                                      <span className="w-[30px] h-[30px] rounded-full bg-primary flex items-center justify-center font-bold text-base text-white">{ tab.dropdownContent?.length }</span>
                                    </div>
                                </button>
                                <div className="vertical-dropdown-content flex-col ms-4">
                                    {
                                        tab.dropdownContent.map((content,index)=>(
                                        <button key={index}
                                            onClick={()=>handledropTab(tab.name, content)}
                                            className={`content p-4 py-3 w-full rounded-xl text-lg flex gap-3 items-center ${activeContent== content ? 'active':''}`}>
                                            <i className="icon-line-document text-[#818B9B]"></i>
                                           <span>{ content }</span>
                                        </button>
                                        ))
                                    }
                                </div>
                            </div>
                            )}
                            {!tab.dropdownContent &&(
                                <button
                                    onClick={()=>handleTab(tab.name)}
                                    className={`${activetab=== tab.name? 'active':''} p-4 w-full text-start rounded-xl text-lg font-bold hover:bg-[#FFF4F9] flex justify-between items-center tabBtn`}>
                                    <div className="flex items-center gap-3.5">
                                      <i className={`${tab.icon} text-xl bg-linear-to-b from-primary to-secondary bg-clip-text text-transparent`}></i>
                                      <span>{ tab.name }</span>
                                    </div>
                                </button>
                            )}
                        </div>
                        ))
                    }
                </nav>
            </div>
        </div>
        <div className="md:col-span-2">
            {activetab=='Getting Started' &&(
                <div>
                    <h2 className="text-[28px] font-bold mb-4">Getting started</h2>
                    <div className="border-t border-primary pt-6">
                        <p className="text-2xl font-medium mb-8">FoodKing - Restaurant Food Delivery System with Admin Panel & Delivery Man App | Restaurant POS</p>
                        <ul className="grid grid-cols-2 gap-y-6 mb-8 sm:mb-12">
                            <li className="text-base font-bold">Version: <span className="font-medium">3.2</span></li>
                            <li className="text-base font-bold">Created: <span className="font-medium">1 June, 2023</span></li>
                            <li className="text-base font-bold">Author: <span className="font-medium text-[#007EDD]"><Link href={"/inilabs"}>iNiLabs</Link></span></li>
                            <li className="text-base font-bold">Last Update: <span className="font-medium">8 June, 2023</span></li>
                        </ul>
                        <img src="/images/banner/fk-banner.png" className="rounded-xl w-full mb-8 sm:mb-12"/>
                        <div className="w-full p-4 rounded-xl border border-[#FFF4BC] bg-[#FFFEF4]">
                             <p className="text-base font-medium">If you have any questions or need any help that are not in this documentation file, Please feel free to <Link className="font-bold text-primary" href={"/support"}>create a Support Ticket.</Link></p>
                        </div>
                    </div>
                </div>
            )}
            {activetab=='Prerequisite' && activeContent =='Basic Knowledge' &&(
            <div>
                <h2 className="text-[28px] font-bold mb-4">Basic Knowledge</h2>
                <div className="border-t border-primary pt-6">
                    <p className="text-2xl font-medium mb-8">To install, set up, and publish FoodKing with your branding, it's necessary to possess fundamental knowledge in both server-side and mobile app development since the system comprises multiple features for web and mobile applications.</p>
                    <ul className="mb-8 list-disc ps-5">
                        <li>IDE for Mobile and Web development, we preferred Android Studio and VSCode.</li>
                        <li>Flutter SDK and JDK with path setup in your IDE.</li>
                        <li>Real server Server related knowledge like apache or local machine server, we preferred to use a real server.</li>
                        <li>Server related knowledge and we preferred cPanel in your server for quick installation</li>
                        <li>Basic knowledge in PHP, NPM, Vue, Node, Dart, Laravel and Flutter if you want to do some customization yourself (Not compulsory).</li>
                        <li>basic knowledge about google cloud and firebase</li>
                    </ul>
                    <div className="w-full p-4 rounded-xl border border-[#FFF4BC] bg-[#FFFEF4] mb-8">
                         <p className="text-base font-medium">Note: Remember! Envato's pricing does not cover installation or app publishing support. It is your responsibility to follow the installation instructions outlined in the documentation, as well as any necessary steps for setup and branding-related changes. We are not liable for any errors you may make during the process. Additionally, any customizations you make are entirely your responsibility.</p>
                    </div>
                </div>
            </div>
            )}
            {activetab=='Prerequisite' && activeContent =='Server Requirement' &&(
                 <h2 className="text-[28px] font-bold mb-4">Server Requirement</h2>
            )}
            {activetab=='Prerequisite' && activeContent == 'Active Purchase Key' && (
                <div>
                    <h2 className="text-[28px] font-bold mb-4">Active Purchase Key</h2>
                    <div className="border-t border-primary pt-6">
                        <p className="text-lg font-normal mb-8 flex gap-3 items-center">
                            <span className="text-white text-base font-semibold bg-linear-270 from-[#73C3FF] to-[#007EDD] py-1 px-2 rounded-sm">TIPS</span>
                            Check the video tutorial!
                        </p>
                        <iframe className="aspect-video w-full rounded-2xl mb-6" src="https://www.youtube.com/embed/KPRw7sd7wK4?si=ALv3NcZwxZ_h-WTr" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        <p className="text-lg font-normal mb-8">Before install, please active your envato purchase key from our system and install project by our license key</p>
                        <ol className="list-decimal ms-5 w-full [&_li]:text-lg [&_li]:font-normal">
                            <li>Goto inilabs official site <Link href={"inilabs.net"} className="text-[#007EDD] underline">inilabs.net</Link></li>
                            <li className="mb-8">
                                <p className="mb-6">Now create an account in our site</p>
                                <img className="w-full -ms-5 rounded-2xl" src="/images/documentation/create-account.png" />
                            </li>
                            <li className="mb-8">
                                <p className="mb-6">Click the below link and verify your email</p>
                                <img className="w-full -ms-5 rounded-2xl" src="/images/documentation/verify-email.png" />
                            </li>
                            <li className="mb-8">
                                <p>Now click Active Purchase Key from home page and fill you information</p>
                                <ul className="list-disc ms-5 mb-6">
                                    <li>Select your product</li>
                                    <li>Enter your domain, Which domain you would be using this product</li>
                                    <li>Enter your envato purchase key and click submit</li>
                                </ul>
                                <img className="w-full -ms-5 rounded-2xl" src="/images/documentation/active-product.png" />
                            </li>
                            <li>
                                <p className="mb-6">Now copy your Active License and install the product by this license</p>
                                <img className="w-full -ms-5 rounded-2xl" src="/images/documentation/active-license.png" />
                            </li>
                        </ol>
                    </div>
                </div>
            )}
            {activetab=='Prerequisite' && activeContent == 'Mobile App' && (
                <h2 className="text-[28px] font-bold mb-4">Mobile App</h2>
            )}
            {activetab=='Environment Setup' &&(
                 <h2 className="text-[28px] font-bold mb-4">Environment Setup</h2>
            )}
        </div>
        </div>
        </div>
     </section>
    {/* <!--================================
       DOCUMENTATION CONTENT PART END 
     =================================--> */}


     {/* <!--===============================
              ACTION PART START 
     =================================--> */}
     <section className="container">
        <div className="mb-20 sm:mb-40">
            <div className="p-8 md:p-12 rounded-2xl bg-custom-gradient relative">
                <img src="/images/vector/Union.png" className="absolute right-0 top-0 z-0 max-w-[455px] w-full"/>
                <div className="relative">
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="text-3xl md:text-[42px] leading-tight text-center font-bold mb-3">
                            Reach Out of
                            <span className="gradient-text"> Support or Questions </span>
                            Any Time
                            </h2>
                        <p className="text-base font-normal text-center mb-6">If your have any questions or need any help, please create a support ticket.</p>
                        <div className="flex flex-wrap items-center max-lg:justify-center gap-4">
                            <Link href={'/'} className="h-[52px] !leading-[52px] px-6 rounded-full gradient-button text-base sm:text-lg font-semibold capitalize text-white">
                                Create a Support Ticket
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