"use client";

import { motion} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="h-screen w-full bg-black text-white overflow-hidden">
            <div className="relative container mx-auto px-6 md:px-14 py-30  ">
                <div className="flex flex-col md:flex-row justify-between items-start mb-20 md:items-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-style leading-tight max-w-2xl"
                    >
                        Asian Progressive Dining Experience
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="mt-8 md:mt-0 md:text-right max-w-sm text-gray-300"
                    >
                        <p className="font-text text-md mb-4">
                        Discovered the flavors of Adventures at Cave, where grilled Dishes, Unique Drinks, 
                        and cozy cave vibes come together in one unforgetables experience
                        </p>

                        <Link href="/experience" className="text-sm font-medium border-b border-gray-500 hover:border-white transition-all duration-300">
                            VIEW EXPERIENCE
                        </Link>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                    className={`grid gap-[1px] ${["grid-cols-3", "grid-cols-4", "grid-cols-5"][Math.min(3, 4) - 3] || "grid-cols-3"}`}
                    >
                    {[
                        "/images/goa1.jpg",
                        "/images/goa2.jpg",
                        "/images/goa3.jpg",
                    ].map((src, i) => (
                        <div key={i} className="relative h-[300px] w-full">
                        <Image
                            src={src}
                            alt={`Restaurant image ${i + 1}`}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover brightness-90 hover:brightness-100 transition-all duration-700"
                        />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}