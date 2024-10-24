import Image from "next/image";
import { ArrowRight, Snail } from "lucide-react";

const integrations = [
  { name: "Joomla Supported", icon: Snail },
  { name: "Wordpress Integrations", icon: Snail },
  { name: "Python Core Installed", icon: Snail },
  { name: "Woo-commerce Support", icon: Snail },
];

export default function CRMPromotion() {
  return (
    <div className="bg-[#F8F8F8]">
      <section className=" container py-16 ">
        <div className="mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center" data-id="3">
            {/* Left Section with Images */}
            <div className="lg:w-1/2 mb-8 lg:mb-0 relative" data-id="4">
              <div className="grid grid-cols-2 gap-4" data-id="5">
                <img
                  data-id="6"
                  alt="Woman using laptop"
                  width={300}
                  height={300}
                  className="rounded-lg"
                  src="/in1.jpg"
                  style={{ aspectRatio: "300 / 300", objectFit: "cover" }}
                />
                <img
                  data-id="7"
                  alt="Two people discussing"
                  width={300}
                  height={200}
                  className="rounded-lg mt-12"
                  src="/in2.jpg"
                  style={{ aspectRatio: "300 / 200", objectFit: "cover" }}
                />
                <img
                  data-id="8"
                  alt="Team meeting"
                  width={300}
                  height={200}
                  className="rounded-lg"
                  src="/in3.jpg"
                  style={{ aspectRatio: "300 / 200", objectFit: "cover" }}
                />
                <img
                  data-id="9"
                  alt="Two women working"
                  width={300}
                  height={300}
                  className="rounded-lg"
                  src="/in4.jpg"
                  style={{
                    aspectRatio: "300 / 300",
                    objectFit: "cover",
                    marginTop: "-2rem",
                  }}
                />
              </div>

              {/* Background Circle */}
              {/* <div
              className="absolute top-0 right-0 w-48 h-48 bg-blue-600 rounded-full -z-10 transform translate-x-1/4 -translate-y-1/4"
              data-id="10"
            /> */}
            </div>

            {/* Right Section with Content */}
            <div className="lg:w-1/2 lg:pl-12">
              <span className="text-blue-600 font-semibold bg-white py-2 px-3">
                Integrations
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">
                The world's most popular free CRM by number of users
              </h2>
              <p className="text-gray-600 mb-8">
                Free CRM system for your sales team with all the essential tools
                – sales funnel, pipeline management, sales reports, 360-degree
                customer view, support for repeat sales and sales automation.
              </p>
              <ul className="space-y-4">
                {integrations.map((integration, index) => (
                  <li
                    key={index}
                    className="flex items-center bg-white py-4 px-10"
                  >
                    <integration.icon className="mr-2" />
                    <span className="text-gray-700 font-medium">
                      {integration.name}
                    </span>
                    <ArrowRight className="ml-auto text-blue-600" size={20} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
