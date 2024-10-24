import Image from "next/image";
import { Eye, Monitor, Code } from "lucide-react";

export default function CRMSalesTeam() {
  return (
    <div className=" bg-[#F8F8F8]">
      <section className="container py-16 bg-[#F8F8F8]">
        <div className=" mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row bg-white p-8">
            <div className="lg:w-1/3 pr-8">
              <span className="text-blue-600 font-semibold bg-[#F3F7FF] py-2 px-3">
                Features #01
              </span>
              <h1 className="text-4xl font-bold mt-2 mb-4 text-gray-900">
                CRM for sales teams
              </h1>
              <p className="text-gray-600 mb-8">
                Free CRM system for your sales team with all the essential tools
                - sales funnel, pipeline management, sales reports, 360-degree
                customer view, support for repeat sales
              </p>
              <div className="space-y-4">
                {[
                  { icon: Eye, text: "Free CRM system for your sales team" },
                  {
                    icon: Monitor,
                    text: "Customer view, support for repeat sales",
                  },
                  { icon: Code, text: "The world's most popular free CRM" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="bg-blue-600 p-2 rounded-full mr-4">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-2/3 mt-8 lg:mt-0">
              <Image
                src="/fp1.jpg"
                alt="Woman using laptop"
                width={5000}
                height={5000}
                className="rounded-lg w-[100%]"
              />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row bg-white p-8">
            <div className="lg:w-2/3 mt-8 lg:mt-0 pr-8">
              <Image
                src="/fp2.jpg"
                alt="Woman using laptop"
                width={5000}
                height={5000}
                className="rounded-lg w-[100%]"
              />
            </div>
            <div className="lg:w-1/3 ">
              <span className="text-blue-600 font-semibold bg-[#F3F7FF] py-2 px-3">
                Features #02
              </span>
              <h1 className="text-4xl font-bold mt-2 mb-4 text-gray-900">
                CRM for sales teams
              </h1>
              <p className="text-gray-600 mb-8">
                Free CRM system for your sales team with all the essential tools
                - sales funnel, pipeline management, sales reports, 360-degree
                customer view, support for repeat sales
              </p>
              <div className="space-y-4">
                {[
                  { icon: Eye, text: "Free CRM system for your sales team" },
                  {
                    icon: Monitor,
                    text: "Customer view, support for repeat sales",
                  },
                  { icon: Code, text: "The world's most popular free CRM" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="bg-blue-600 p-2 rounded-full mr-4">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
