import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const navItems = [
        { name: "About", href: "/about" },
        { name: "Experience", href: "/experience" },
        { name: "Menu", href: "/menu" },
        { name: "Events", href: "/events" },
    ];
    
    return (
      <footer className="bg-maroon text-white py-8 px-6 md:py-12" id="contact">
        <div className="container mx-auto px-2 md:px-4">
            <div className="flex flex-col justify-center items-center mb-12 font-text">
                <Link href="/">
                    <Image src="/logo/LogotypeIcon-01.png" alt='Logo Goasaya' width={200} height={200} />
                </Link>
            
                <div className="grid grid-rows gap-8 mt-12">
                    <div className="flex space-x-8">
                        {navItems.map((item) => (
                        <div key={item.href}>
                            <Link href={item.href} className="font-reguler transition-colors hover-underline-animation">
                            {item.name}
                            </Link>
                        </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                    <div className="flex flex-col">
                       <span>Tuesday - Sunday</span>
                       <span>Entertainment District, PIK 2</span>
                       <span>11:00 AM - 00:00 AM</span>
                    </div>
                     <div className="flex flex-col">
                       <span>Contact</span>
                       <span>marketing@sayagroup.id</span>
                       <span>+62 813 3838 2845</span>
                    </div>
                </div>
            </div>
  
            <div className="border-t border-white mt-6 md:mt-2 pt-8 text-center text-sm md:text-md">
                <p>© 2025 GOASAYA by Saya Group</p>
            </div>
        </div>
      </footer>
    );
  }