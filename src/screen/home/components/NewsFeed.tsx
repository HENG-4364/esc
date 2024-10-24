import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const newsItems = [
  {
    image: "/b1.jpg",
    alt: "Office desk with computer and plants",
  },
  {
    image: "/b2.jpg",
    alt: "Office desk with computer and plants",
  },
  {
    image: "/placeholder.svg?height=300&width=400",
    alt: "Modern workspace with laptop and monitor",
    category: "CRM Software",
    date: "24th June 2021",
    title: "TeamWave is fully integrated",
    description:
      "Free CRM system for your sales team with all the essential tools sales funnel, pipeline management, sales reports.",
  },
  {
    image: "/b3.jpg",
    alt: "Bright office space with dual monitor setup",
  },
];

export default function NewsFeed() {
  return (
    <section className="container py-16 bg-white">
      <div className=" mx-auto px-4">
        <div className="mb-12">
          <span className="text-blue-600 font-semibold">Blog</span>
          <h2 className="text-4xl font-bold mt-2 text-blue-900">News Feeds</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {newsItems.map((item, index) => (
            <Image
              src={item.image}
              alt={item.alt}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
