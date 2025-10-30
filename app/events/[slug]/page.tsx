import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { EVENTS, EventType } from "@/lib/data";
import SingleEventPage from "@/components/pages/SingleEventPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = EVENTS.find((e) => e.slug === slug);

  if (!event) {
    return {
      title: "Event Not Found | GoaSaya",
      description: "The event you’re looking for could not be found.",
    };
  }

  return {
    title: `${event.title} | GoaSaya Events`,
    description: event.desc,
    openGraph: {
      title: `${event.title} | GoaSaya`,
      description: event.desc,
      images: [
        {
          url: event.image,
          width: 1200,
          height: 630,
          alt: event.title,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  return EVENTS.map((event) => ({ slug: event.slug }));
}

export default async function SingleEvent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event: EventType | undefined = EVENTS.find((e) => e.slug === slug);

  if (!event) return notFound();

  return (
    <>
        <SingleEventPage event={event}/>
    </>
  );
}
