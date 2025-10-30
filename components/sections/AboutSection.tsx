"use client";

import { motion} from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
    return (
        <section className="relative md:h-screen w-full text-white overflow-hidden">
            <div className="absolute inset-0">
                <Image
                src="/images/Japanese_Theme_Karaoke_3.jpg"
                alt="Asian dining background"
                fill
                priority
                className="object-cover object-center brightness-75"
                />
                <div className="absolute inset-0 bg-maroon/75"></div>
            </div>

            <div className="relative container mx-auto px-6 md:px-14 py-30">
                <div className="flex flex-col md:flex-row justify-between items-start mb-20 ">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="mt-8 md:mt-0 max-w-sm text-gray-300"
                    >
                        <p className="font-text text-lg md:text-xl uppercase italic mb-4 md:mb-8">
                            grand canyon atmosphere
                        </p>
                        <Image
                            src="/images/goa6.jpg"
                            alt="Goasaya Ambience"
                            width={600}
                            height={500}
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mt-8 md:mt-0 max-w-4xl"
                    >
                        <h1 className="text-2xl md:text-3xl font-style mb-4 leading-normal uppercase">
                            The restaurant&apos;s kitchen and interior blending natural texture with bold, earthy flavors
                        </h1>
                        <p className="font-text text-gray-300 leading-relaxed">
                            Inspired by nature quite strength, cave surround you with stone, wood and soft lighting — creating a space 
                            that feels both grounding and inviting. Our kitchen bring that same energy to every dish, with fire grilled
                            flavors, hearty ingredients, and a touch of rustic charm. It&apos;s a place to feel at home, deep in the heart of
                            something wild.
                        </p>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.2, delay: 0.3 }}
                            className="grid grid-cols-2 mt-10 md:gap-10"
                            >
                            {[
                                "/images/goa5.jpg",
                                "/images/goa7.webp",
                            ].map((src, i) => (
                                <div key={i} className="relative h-[350px] w-full">
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
                    </motion.div>
                </div>
            </div>
        </section>
    );
}