import Link from "next/link";

export default function FooterLayout () {
  return (
    <>
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

{/* <!--===============================
FOOTER PART START 
// =================================--> */}
    <footer className="pt-[330px] lg:pt-75 footer-curve-bg">
        <div className="container">
            <div className="grid grid-cols-12 gap-y-12 sm:gap-x-10 pb-12">
                <div className="col-span-12 lg:col-span-4">
                    <Link href={"/"} className="w-fit block mb-6">
                        <img className="w-30 h-auto" src="/images/logo.png" alt="FoodKing Logo" loading="lazy" />
                    </Link>
                    <p className="text-lg font-normal mb-8">FoodKing is a restaurant management and delivery platform that helps streamline restaurant operations.</p>
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold mb-4">Follow Our Socials</h3>
                        <div className="flex gap-4">
                            <Link href={"/"} aria-label="Facebook">
                              <img className="w-8 h-8 rounded-full shadow-social-link" src="/images/social/Facebook.png" alt="Facebook" loading="lazy" />
                            </Link>
                            <Link href={"/"} aria-label="Twitter">
                              <img className="w-8 h-8 rounded-full shadow-social-link" src="/images/social/twitter.png" alt="Twitter" loading="lazy" />
                            </Link>
                            <Link href={"/"} aria-label="LinkedIn">
                              <img className="w-8 h-8 rounded-full shadow-social-link" src="/images/social/Linkedin.png" alt="LinkedIn" loading="lazy" />
                            </Link>
                            <Link href={"/"} aria-label="YouTube">
                              <img className="w-8 h-8 rounded-full shadow-social-link" src="/images/social/YouTube.png" alt="YouTube" loading="lazy" />
                            </Link>
                        </div>
                    </div>
                    <button className="cursor-pointer py-2.5 sm:py-3.5 px-6 sm:px-9 rounded-full text-white text-base sm:text-lg leading-6 font-bold gradient-button">Get Support</button>
                </div>
                <div className="col-span-12 lg:col-span-8">
                    <div className="grid grid-cols-12 gap-y-12 sm:gap-x-10">
                        <div className="col-span-12 sm:col-span-6 md:col-span-4">
                            <h3 className="text-2xl font-semibold mb-8">Company</h3>
                            <nav className="flex flex-col gap-6 [&_a]:hover:text-primary [&_a]:w-fit">
                                <Link className="text-lg font-normal" href={"/"}>About Us</Link>
                                <Link className="text-lg font-normal" href={"/"}>Contact Us</Link>
                                <Link className="text-lg font-normal" href={"/"}>Privacy Policy</Link>
                                <Link className="text-lg font-normal" href={"/"}>Refund Policy</Link>
                                <Link className="text-lg font-normal" href={"/"}>Support Policy</Link>
                                <Link className="text-lg font-normal" href={"/"}>Cookie Policy</Link>
                            </nav>
                        </div>
                        <div className="col-span-12 sm:col-span-6 md:col-span-4">
                            <h3 className="text-2xl font-semibold mb-8">Quick Links</h3>
                            <nav className="flex flex-col gap-6 [&_a]:hover:text-primary [&_a]:w-fit">
                                <Link className="text-lg font-normal" href={"/"}>Explore Demo</Link>
                                <Link className="text-lg font-normal" href={"/"}>Documentations</Link>
                                <Link className="text-lg font-normal" href={"/"}>Testimonials</Link>
                                <Link className="text-lg font-normal" href={"/"}>FAQs</Link>
                                <Link className="text-lg font-normal" href={"/"}>Blogs</Link>
                            </nav>
                        </div>
                        <div className="col-span-12 md:col-span-4">
                            <h3 className="text-2xl font-semibold mb-8">Related Products</h3>
                            <nav className="flex flex-col gap-6 [&_a]:hover:text-primary [&_a]:w-fit">
                                <Link href={"/"}>
                                    <div className="flex gap-4 text-lg font-medium"><img className="w-7.5 h-7.5 rounded-full drop-shadow-foodbank" src="/images/product/foodbank.png" alt="foodbank"/><span>FoodBank</span></div>
                                </Link>
                                <Link href={"/"}>
                                    <div className="flex gap-4 text-lg font-medium"><img className="w-7.5 h-7.5 rounded-full drop-shadow-foodscan" src="/images/product/foodscan.png" alt="foodscan"/><span>FoodScan</span></div>
                                </Link>
                                <Link href={"/"}>
                                    <div className="flex gap-4 text-lg font-medium"><img className="w-7.5 h-7.5 rounded-full drop-shadow-foodappi" src="/images/product/foodappi.png" alt="foodbaappi"/><span>FoodAppi</span></div>
                                </Link>
                                <Link href={"/"}>
                                    <div className="flex gap-4 text-lg font-medium"><img className="w-7.5 h-7.5 rounded-full drop-shadow-shopking" src="/images/product/shopking.png" alt="shopking"/><span>ShopKing</span></div>
                                </Link>
                                <Link href={"/"}>
                                    <div className="flex gap-4 text-lg font-medium"><img className="w-7.5 h-7.5 rounded-full drop-shadow-shopperzz" src="/images/product/shopperzz.png" alt="shopperzz"/><span>Shopperzz</span></div>
                                </Link>
                                <Link href={"/"}>
                                    <div className="flex gap-4 text-lg font-medium"><img className="w-7.5 h-7.5 rounded-full drop-shadow-storeking" src="/images/product/storeking.png" alt="storeking"/><span>StoreKing</span></div>
                                </Link>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="my-6.5 border-t border-[#FFEAF2] relative">
            <Link href="#" className="w-13 h-13 rounded-full gradient-button flex items-center justify-center absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2" aria-label="Back to Top">
                <i className="icon-chevron-up text-3xl text-white"></i>
            </Link>
        </div>
        <div className="container">
            <div className="flex items-center md:flex-row flex-col gap-y-6 md:justify-between py-8">
                <div className="flex md:flex-col lg:flex-row items-center gap-3">
                    <h4 className="text-base font-medium">A Product Of</h4>
                    <img className="w-27 h-auto" src="/images/company-logo.png" alt="Company Logo" loading="lazy" />
                </div>
                <div className="flex md:flex-col lg:flex-row items-center gap-3">
                    <p className="text-base font-normal">©2025, FoodKing. All Rights Reserved.</p>
                </div>
                <div className="flex items-center gap-3">
                    <img className="w-8 h-auto" src="/images/payment/Secure.png" alt="Secure Payment" loading="lazy" />
                    <span className="text-sm font-medium text-[#818B9B]">Secure Payment</span>
                    <hr className="h-5 w-0.5 bg-[#CCE7F9] border-none" />
                    <img className="w-12 h-auto" src="/images/payment/stripe.png" alt="Stripe" loading="lazy" />
                </div>
            </div>
        </div>
    </footer>
{/* <!--===============================
FOOTER PART END 
 =================================--> */}
</>
  );
};

