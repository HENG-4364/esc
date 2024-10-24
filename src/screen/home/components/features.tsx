import { Check, Users, Settings, Globe } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Manage Sales",
    description: "Our visual sales pipeline",
    points: [
      "Easily customize your sales",
      "Keep track of hours worked in",
      "Our mobile apps let you access",
      "Best CRM software of 2019",
      "Top 7 web productivity tools",
    ],
  },
  {
    icon: Settings,
    title: "Customize Your CRM",
    description: "Our visual sales pipeline",
    points: [
      "Easily customize your sales",
      "Keep track of hours worked in",
      "Our mobile apps let you access",
      "Best CRM software of 2019",
      "Top 7 web productivity tools",
    ],
  },
  {
    icon: Globe,
    title: "Work Anywhere",
    description: "Our visual sales pipeline",
    points: [
      "Easily customize your sales",
      "Keep track of hours worked in",
      "Our mobile apps let you access",
      "Best CRM software of 2019",
      "Top 7 web productivity tools",
    ],
  },
];

export default function BusinessFeatures() {
  return (
    <section className="container py-16 bg-[#FFFFFF]">
      <div className="mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold bg-[#F3F7FF] py-2 px-3 ">Core Features</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
            Discover How Your Business
            <br />
            Can Work Smarter!
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <feature.icon className="w-10 h-10 text-blue-500 mr-3" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {feature.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
