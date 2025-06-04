export default function Testimonial (){

    return(
        <>
     {/* <!--===============================
           HERO PART START 
     =================================--> */}
     <section className="pt-26 lg:pt-38 mb-12 sm:mb-16">
        <span className="bg-linear-180 from-[#ffc4dc] to-white blur-[350px] w-full absolute -z-10 top-0 h-[400px]"></span>
        <div className="container">
            <div className="max-w-[934px] w-full mx-auto">
                <h1 className="text-3xl lg:text-[42px] font-bold text-center leading-tight mb-6"><span className="gradient-text">Success Stories </span>from Our Happy Clients</h1>
                <p className="text-base lg:text-lg font-normal text-center lg:px-24 mb-8">Explore stories from restaurant owners who’ve streamlined their business with FoodKing’s powerful tools.</p>            
            </div>
            <div className="flex flex-col sm:flex-row gap-2 items-center justify-center">
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
        TESTIMONIAL PART START 
     =================================--> */}
     <section className="mb-20 sm:mb-40">
        <div className="container">
            <div className="grid lg:grid-cols-3 gap-6 mb-6">
                <div className="p-6 rounded-2xl bg-[#FCF6FA] h-fit">
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
            <div className="grid lg:grid-cols-3 gap-6 mb-6">
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
            <div className="grid lg:grid-cols-2 gap-6 mb-6">
                <div className="p-6 rounded-2xl bg-[#F6FBFC] flex flex-col">
                    <img className="w-fit h-6 mb-6" src="/images/review/quote.png" alt="quote"/>
                    <p className="mb-6 text-lg font-normal flex-grow">Support Team is awsome and please make update on code and make more reliable to users so that they can install more easier and make some changes in documentation .support 5 stardesgin 5 stardocumentation 4 starcode quality 4 Best Support They deserve 5 star thanks !!</p>
                    <div className="flex items-start gap-4">
                        <div className="w-15 h-15 rounded-full">
                            <img className="w-full h-full object-cover rounded-full" src="/images/review/users/4.png" alt="user_review" />
                        </div>
                        <div>
                            <h5 className="text-lg font-bold text-primary mb-1.5">Sathyasai</h5>
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
                <div className="p-6 rounded-2xl bg-[#FAFCF6]  flex flex-col">
                    <img className="w-fit h-6 mb-6" src="/images/review/quote.png" alt="quote"/>
                    <p className="mb-6 text-lg font-normal flex-grow">Very timely and responsive Support.The code works smoothly. It is good to see that the application continues to be updated based on observations.However, I believe the installation process/steps could be improved the way other providers does because the current approach present risk should the portal for generating license not be available. Anyway, keep the good work going.</p>
                    <div className="flex items-start gap-4">
                        <div className="w-15 h-15 rounded-full">
                            <img className="w-full h-full object-cover rounded-full" src="/images/review/users/5.png" alt="review_user"/>
                        </div>
                        <div>
                            <h5 className="text-lg font-bold text-primary mb-1.5">Piano Kids</h5>
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
            <div className="grid lg:grid-cols-3 lg:grid-rows-2 gap-6 mb-6">
                <div className="p-6 rounded-2xl bg-[#FCF6FA] row-span-1 lg:col-span-2 flex flex-col">
                    <img className="w-fit h-6 mb-6" src="/images/review/quote.png" alt="quote"/>
                    <p className="mb-6 text-lg font-normal flex-grow">I was really fascinated by how well this code met what people were actually looking for... Ideal for restaurants and coffee shops...</p>
                    <div className="flex items-start gap-4">
                        <div className="w-15 h-15 rounded-full">
                            <img className="w-full h-full object-cover rounded-full" src="/images/review/users/4.png" alt="user_review" />
                        </div>
                        <div>
                            <h5 className="text-lg font-bold text-primary mb-1.5">InfTechost</h5>
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
                <div className="p-6 rounded-2xl bg-[#F6F8FC] row-span-2 flex flex-col">
                    <img className="w-fit h-6 mb-6" src="/images/review/quote.png" alt="quote"/>
                    <p className="mb-6 text-lg font-normal flex-grow">The code quality and customer support of this app are excellent. I strongly suggest anyone thinking about trying it to do so. The developer is friendly and helpful with any issues. Also, the clean and well-organized code made it easy for me to make custom changes. Highly recommended!</p>
                    <div className="flex items-start gap-4">
                        <div className="w-15 h-15 rounded-full">
                            <img className="w-full h-full object-cover rounded-full" src="/images/review/users/5.png" alt="review_user"/>
                        </div>
                        <div>
                            <h5 className="text-lg font-bold text-primary mb-1.5">Modern Tech Software</h5>
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
                <div className="p-6 rounded-2xl bg-[#FCF8F6] row-span-1 lg:col-span-2 flex flex-col">
                    <img className="w-fit h-6 mb-6" src="/images/review/quote.png" alt="quote"/>
                    <p className="mb-6 text-lg font-normal flex-grow">I was really fascinated by how well this code met what people were actually looking for... Ideal for restaurants and coffee shops...</p>
                    <div className="flex items-start gap-4">
                        <div className="w-15 h-15 rounded-full">
                            <img className="w-full h-full object-cover rounded-full" src="/images/review/users/4.png" alt="user_review" />
                        </div>
                        <div>
                            <h5 className="text-lg font-bold text-primary mb-1.5">InfTechost</h5>
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
            <div className="grid lg:grid-cols-2 gap-6 mb-6">
                <div className="p-6 rounded-2xl bg-[#FCFBF6] flex flex-col">
                    <img className="w-fit h-6 mb-6" src="/images/review/quote.png" alt="quote"/>
                    <p className="mb-6 text-lg font-normal flex-grow">Great customer support in terms of all web hosting, code as well as setup. They have a great team who replies to all your queries very much promptly.Looking forward purchasing more codes from inilabs.</p>
                    <div className="flex items-start gap-4">
                        <div className="w-15 h-15 rounded-full">
                            <img className="w-full h-full object-cover rounded-full" src="/images/review/users/4.png" alt="user_review" />
                        </div>
                        <div>
                            <h5 className="text-lg font-bold text-primary mb-1.5">Hitesh Taral</h5>
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
                <div className="p-6 rounded-2xl bg-[#F6FBFC]  flex flex-col">
                    <img className="w-fit h-6 mb-6" src="/images/review/quote.png" alt="quote"/>
                    <p className="mb-6 text-lg font-normal flex-grow">I had an excellent experience with Inilabs customer service. Their team was incredibly responsive, knowledgeable, and went the extra mile to ensure my satisfaction. I highly recommend their outstanding service.</p>
                    <div className="flex items-start gap-4">
                        <div className="w-15 h-15 rounded-full">
                            <img className="w-full h-full object-cover rounded-full" src="/images/review/users/5.png" alt="review_user"/>
                        </div>
                        <div>
                            <h5 className="text-lg font-bold text-primary mb-1.5">Elegant Media</h5>
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
                <div className="p-6 rounded-2xl bg-[#FCF6FA] flex flex-col">
                    <img className="w-fit h-6 mb-6" src="/images/review/quote.png" alt="quote"/>
                    <p className="mb-6 text-lg font-normal flex-grow">Very beautiful source code, 100% working, very quick support and fixes from the team IniLabs Thank you guys will buy more from you!</p>
                    <div className="flex items-start gap-4">
                        <div className="w-15 h-15 rounded-full">
                            <img className="w-full h-full object-cover rounded-full" src="/images/review/users/4.png" alt="user_review" />
                        </div>
                        <div>
                            <h5 className="text-lg font-bold text-primary mb-1.5">Ahmed Khan</h5>
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
                <div className="p-6 rounded-2xl bg-[#F6F8FC] lg:col-span-2 flex flex-col">
                    <img className="w-fit h-6 mb-6" src="/images/review/quote.png" alt="quote"/>
                    <p className="mb-6 text-lg font-normal flex-grow">They took care of us without getting tired.There was a communication gap on the first day, but they stand behind their software. I don't want to give 5 stars. 5 stars is too little. 10 star Script, 10 star service.</p>
                    <div className="flex items-start gap-4">
                        <div className="w-15 h-15 rounded-full">
                            <img className="w-full h-full object-cover rounded-full" src="/images/review/users/5.png" alt="review_user"/>
                        </div>
                        <div>
                            <h5 className="text-lg font-bold text-primary mb-1.5">Eticaret</h5>
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
        </div>
     </section>
    {/* <!--===============================
        TESTIMONIAL PART START 
     =================================--> */}
        </>
    )
}