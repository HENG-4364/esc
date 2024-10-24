"use client";

import { FC } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    id: 1,
    text: "Free CRM system for your sales team with all the essential tools: sales funnel, pipeline management, sales reports.",
    author: "Hilix B. Browni",
    image: "/assets/img/hrm/tst1.png",
  },
  {
    id: 2,
    text: "Free CRM system for your sales team with all the essential tools: sales funnel, pipeline management, sales reports.",
    author: "Hilix B. Browni",
    image: "/assets/img/hrm/tst1.png",
  },
  {
    id: 3,
    text: "Free CRM system for your sales team with all the essential tools: sales funnel, pipeline management, sales reports.",
    author: "Hilix B. Browni",
    image: "/assets/img/hrm/tst1.png",
  },
];

const TestimonialsSection: FC = () => {
  return (
    <section className="relative py-16 bg-[#F7F7F7]">
      <div className="absolute inset-0 -z-10  flex justify-center">
        <Image
          src="/tbg.png"
          alt="testimonial background"
          width={1000}
          height={1000}
          className="opacity-20"
        />
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column: Testimonial Cards */}
          <div className="space-y-8">
            {testimonials.slice(0, 2).map((testimonial) => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </div>

          {/* Center Column: Title */}
          <div className="flex items-center justify-center text-center">
            <div className="space-y-4">
              <span className="text-sm uppercase text-blue-600">
                Testimonials
              </span>
              <h2 className="text-2xl font-bold">
                See What’s Going <br /> With Our Clients
              </h2>
            </div>
          </div>

          {/* Right Column: Testimonial Cards */}
          <div className="space-y-8">
            {testimonials.slice(0, 2).map((testimonial) => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard: FC<{
  text: string;
  author: string;
  image: string;
}> = ({ text, author, image }) => (
  <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
    <p className="text-gray-700">{text}</p>
    <div className="flex items-center space-x-4">
      <Avatar className="h-10 w-10 mr-4">
        <AvatarImage src={"/"} />
        <AvatarFallback>LH</AvatarFallback>
      </Avatar>
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4 text-yellow-400 fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    </div>
  </div>
);

export default TestimonialsSection;
