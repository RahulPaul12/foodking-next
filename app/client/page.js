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

     {/* 
    <!--===============================
        RESTAURANT ECOSYSTEM PART START 
     =================================--> */}
     <section className="py-16 md:py-20 lg:py-40">
        <div className="container">
            <div className="max-w-[934px] w-full mx-auto mb-12 sm:mb-16">
                <h1 className="text-3xl lg:text-[42px] font-bold text-center leading-tight mb-6">FoodKing Comes Packed with<span className="gradient-text"> Everything to Maintain </span>Your Restaurant Ecosystem</h1>
                 <p className="text-base lg:text-lg font-normal text-center lg:px-24">From admin to kitchen, dine-in to delivery, customers to delivery man, FoodKing connects every part of your restaurant for a seamless experience.</p>
            </div>
            <div className="flex flex-wrap gap-6">
                <div className="bg-[#F6F9FC] rounded-2xl p-6 hover:shadow-card hover:bg-white transition-all duration-300 relative">
                    <div className="flex items-start justify-between">
                        <div className="w-9 h-9 rounded-full mb-6 flex items-center justify-center">
                            <img width="20px" />
                        </div>
                        <div v-if="feature.addon" className="absolute right-0 shadow-badge">
                            <div className="relative overflow-y-clip bg-linear-270 from-secondary to-primary">
                                <div className="w-6 h-6 rotate-45 bg-primary absolute -left-3 "></div>
                                <div className="p-1 h-6 text-sm font-semibold text-white flex items-center relative z-10">Add-On</div>
                            </div>
                        </div>
                    </div>
                    <h6 className="text-2xl font-bold mb-3">Admin Panel</h6>
                    <p className="text-base font-normal">Manage all branches, total business & monitor all activities centrally.</p>
                </div>
            </div>
        </div>
     </section>
     {/* <!--===============================
        RESTAURANT ECOSYSTEM PART END 
     =================================--> */}
      </>
    );
  }