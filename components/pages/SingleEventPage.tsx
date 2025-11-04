"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { EventType } from "@/lib/data";


interface EventProps {
  event: EventType;
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
{/* 
          <p className="leading-relaxed text-black/80">
            {event.desc}
          </p> */}

          {
            event.content && (
            <Image
              src={event.content}
              alt={event.title}
              width={400}
              height={400}
            />
            )
          }

          <div
            className="prose prose-invert max-w-none text-lg leading-relaxed"
            dangerouslySetInnerHTML={{ __html: event.desc }}
          />

          {/* CTA */}
          <div className="pt-6 flex flex-col items-start gap-6">
            <Link
              href={{
                pathname: "/reservation",
                query: {
                  event: event.title,
                  date: event.date,
                  slug: event.slug,
                },
              }}
              className="inline-block bg-orange rounded-md text-white px-8 py-3 hover:bg-black transition"
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
