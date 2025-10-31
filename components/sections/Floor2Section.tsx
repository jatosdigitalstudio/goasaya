"use client";

import { motion} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Floor2Section() {
    const images = [
        { src: "/images/goalt2-1.jpg", span: "col-span-2" },
        { src: "/images/goalt2-3.jpg", span: "col-span-1" },
        { src: "/images/goalt2-4.jpg", span: "col-span-1" },
        { src: "/images/goalt2-5.jpg", span: "col-span-1" },
    ];
    return (
        <section className="w-full bg-cream text-black overflow-hidden">
            <div className="relative container mx-auto px-6 md:px-14 py-30">
                {/* Header Content */}
                <div className="flex flex-col md:flex-row justify-between items-start mb-20 md:items-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-lg md:text-2xl font-style leading-tight max-w-4xl"
                    >
                        DISCOVER THE VIBRANT ENERGY OF CAVE BAR, WHERE HANDCRAFTED COCKTAILS, PREMIUM SPIRITS, 
                        AND EARTHY, CAVE-INSPIRED SURROUNDINGS COME TOGETHER FOR A UNIQUE NIGHTLIFE EXPERIENCE.
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="mt-8 md:mt-0 md:text-right max-w-xs md:max-w-sm text-maroon"
                    >
                        <h1 className="font-style text-6xl mb-4">
                        2ND Floor
                        </h1>
                        <Link href="/onepercentlounge" className="text-sm font-medium border-b border-gray-500 hover:border-white transition-all duration-300">
                            <Image
                                src="/images/reservemaroon.png"
                                alt="1% Reservation"
                                width={300}
                                height={300}
                            />
                        </Link>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex justify-end"
                    >
                    <div className="max-w-3xl text-right mb-16">
                        <p className="text-sm text-black font-text leading-loose">
                            Ascend deeper into the mystery of GoaSaya, where the second floor unveils an extraordinary bar 
                            experience unlike any other. Here, the cave concept transforms into a seductive, high-energy 
                            hideaway and a place where rough-hewn stone, shimmering crystals, and flickering lights set the scene 
                            for nights of indulgence and discovery.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3"
                >
                    {images.map((img, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: i * 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                        className={`${i === 0 ? "md:col-span-3" : "md:col-span-1"} col-span-2 relative w-full h-[300px] md:h-[500px] overflow-hidden`}
                    >
                        <Image
                        src={img.src}
                        alt={`Goasaya interior ${i + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover brightness-95 hover:brightness-110 transition-all duration-700"
                        />
                    </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}