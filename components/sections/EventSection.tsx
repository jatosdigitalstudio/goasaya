"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { EVENTS } from "@/lib/data";

export default function EventsSection() {
  const latestEvents = EVENTS.slice(0, 3);

  return (
    <section className="bg-cream text-black py-24 px-6 md:px-16 overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 md:mb-32 md:items-center">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-maroon text-4xl md:text-6xl uppercase font-style leading-tight max-w-3xl"
            >
                Discover Experiences Beyond Dining
            </motion.h1>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="mt-8 md:mt-0 md:text-right max-w-md text-black"
            >
                <p className="font-text text-md mb-4">
                    At GoaSaya, every evening tells a story from intimate jazz nights
                    beneath golden light, to vibrant mixology showcases in our cave bar.
                    Indulge in moments crafted for those who seek more than a meal, an
                    Experience.
                </p>
            </motion.div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
            {latestEvents.map((event, idx) => (
            <motion.div
                key={idx}
                initial={{ opacity: 0, y: idx % 2 === 0 ? 60 : -60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                duration: 0.9,
                delay: idx * 0.15,
                type: "spring",
                stiffness: 80,
                }}
                viewport={{ once: true }}
                className={`flex flex-col items-center text-center transition-all ${
                idx % 2 === 0 ? "md:translate-y-8" : "md:-translate-y-8"
                }`}
            >
                <Link href={`/events/${event.slug}`} className="w-full group">
                <div className="relative w-full h-[400px] overflow-hidden">
                    <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover duration-700 brightness-90"
                    />
                </div>
                <h3 className="mt-6 text-xl font-semibold font-style">
                    {event.title}
                </h3>
                <h3 className="text-lg font-regular font-text">
                    {event.subtitle}
                </h3>
                <p className="text-black/60 text-sm mt-1 font-text">
                    {event.date} · {event.time}
                </p>
                </Link>
            </motion.div>
            ))}

            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="relative flex flex-col justify-center items-center text-white text-center h-[400px] overflow-hidden group"
                >
                <Image
                    src="/images/goa11.JPG" 
                    alt="Explore More GOASAYA Events"
                    fill
                    className="object-cover brightness-75 group-hover:brightness-100 duration-700 transition-all"
                />

                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>

                {/* Text Content */}
                <Link href="/events" className="relative z-10 flex flex-col items-center">
                    <h3 className="text-xl font-style mb-4">Explore More Events</h3>
                </Link>
            </motion.div>
        </div>
    </section>
  );
}
