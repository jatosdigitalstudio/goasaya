"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface EventProps {
  event: {
    title: string;
    slug: string;
    image: string;
    date: string;
    time: string;
    desc: string;
  };
}

export default function SingleEventPage({ event }: EventProps) {
  return (
    <section className="bg-cream min-h-screen text-black px-6 md:px-16 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto"
      >
        {/* Image Banner */}
        <div className="relative w-full h-[500px] overflow-hidden shadow-lg mb-10">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
          <h1 className="absolute bottom-6 left-6 text-4xl md:text-5xl font-style text-white">
            {event.title}
          </h1>
        </div>

        {/* Event Info */}
        <div className="text-left space-y-6 font-text max-w-3xl">
          <p className="text-maroon font-semibold">
            {event.date} · {event.time}
          </p>

          <p className="leading-relaxed text-black/80">{event.desc}</p>

          {/* CTA */}
          <div className="pt-6 flex flex-col items-start gap-6">
            <Link
              href="/reservation"
              className="inline-block bg-orange text-white px-8 py-3 hover:bg-black transition"
            >
              Reserve Your Seat
            </Link>

            <Link
              href="/events"
              className="text-maroon underline hover:text-black transition-colors"
            >
              ← Back to all events
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
