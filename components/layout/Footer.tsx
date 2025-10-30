import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
      <footer className="relative bg-maroon text-white py-8 px-6 md:py-12" id="contact">
        <div className="absolute inset-0">
            <Image
                src="/images/footer-goa.png"
                alt="Asian dining background"
                fill
                priority
                className="object-cover object-center brightness-75"
            />
            <div className="absolute inset-0 bg-maroon/85"></div>
        </div>
        <div className="relative container mx-auto px-2 md:px-4">
            <div className="flex flex-col justify-center items-center my-8 font-text">
                <Link href="/">
                    <Image src="/logo/LogotypeIcon-01.png" alt='Logo Goasaya' width={200} height={200} />
                </Link>
            
                {/* <div className="grid grid-rows gap-8 mt-12">
                    <div className="flex space-x-8">
                        {navItems.map((item) => (
                        <div key={item.href}>
                            <Link href={item.href} scroll className="font-reguler transition-colors hover-underline-animation">
                            {item.name}
                            </Link>
                        </div>
                        ))}
                    </div>
                </div> */}

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-16 mt-12">
                    <div className="flex flex-col justify-start items-center">
                        <h1 className="font-style text-lg mb-6">Get In Touch</h1>
                        <div className="flex flex-col text-left text-sm">
                            <span>T. +62 813 3838 2845</span>
                            <span>M. marketing@sayagroup.id</span>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-center">
                        <h1 className="font-style text-lg mb-6">Address</h1>
                        <div className="flex flex-col text-left text-sm">
                            <span>Entertainment District, PIK 2</span>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-center">
                        <h1 className="font-style text-lg mb-6">Opening Hours</h1>
                        <div className="flex flex-col text-left text-sm">
                            <span>Tuesday - Sunday</span>
                            <span>11:00 AM - 00:00 AM</span>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-center">
                        <h1 className="font-style text-lg mb-6">Social Media</h1>
                       
                         <div className="flex flex-row items-start mb-6 gap-4">
                            <Link aria-label="instagram" href="https://www.instagram.com/goasaya.jkt">
                                <Image
                                    src="/images/icon-ig.webp"
                                    alt="Instagram Goasaya"
                                    width={30}
                                    height={30}
                                />
                            </Link>
                            <Link aria-label="tiktok" href="www.tiktok.com/goasaya.jkt">
                                <Image
                                    src="/images/icon-tt.webp"
                                    alt="Tiktok Goasaya"
                                    width={30}
                                    height={30}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
  
            <div className="border-t border-cream/75 mt-6 md:mt-2 pt-8 text-center text-sm md:text-md">
                <p>
                    © 2025 GOASAYA by {" "}
                    <Link href="https://www.sayagroup.id" target="_blank" rel="noreferrer" className="hover:underline">
                       Saya Group
                    </Link>
                </p>
            </div>
        </div>
      </footer>
    );
  }