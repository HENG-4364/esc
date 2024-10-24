"use client";
import { FC } from "react";
import Image from "next/image";
import CountUp from "react-countup";
const AppiloFeatures: FC = () => {
  const processSteps = [
    { id: 1, title: "Communications", icon: "/pf1.png", mt: "mt-0" },
    { id: 2, title: "Task & Projects", icon: "/pf1.png", mt: "mt-16" },
    { id: 3, title: "CRM", icon: "/pf1.png", mt: "mt-4" },
    { id: 4, title: "Support Center", icon: "/pf1.png", mt: "mt-8" },
    { id: 5, title: "WP Themes", icon: "/pf1.png", mt: "mt-18" },
  ];
  const counters = [
    { id: 1, count: 264, label: "Active Users" },
    { id: 2, count: 223, label: "Team Members" },
    { id: 3, count: 856, label: "Line Of Code" },
    { id: 4, count: 295, label: "Cup Of Coffee" },
  ];
  return (
    <div className="bg-[#F8F8F8]">
      <section className="pb-16 bg-white">
        <div className="container mx-auto px-4 py-16">
          <section className="relative ">
            <div className="absolute inset-0">
              <Image
                src="/pp1.png"
                alt="Process Line"
                layout="fill"
                objectFit="contain"
                className="pointer-events-none"
              />
            </div>

            <div className="w-full mx-auto">
              <div className="text-center mb-12">
                <span className="text-sm font-semibold uppercase text-blue-600 bg-[#F3F7FF] py-2 px-3">
                  Process
                </span>
                <h2 className="text-4xl font-bold text-gray-800 mt-5">
                  What Is Appilo
                </h2>
              </div>

              <div className="flex flex-wrap justify-center gap-32">
                {processSteps.map((step) => (
                  <div
                    key={step.id}
                    className={`text-center space-y-4 ${step.mt}`}
                  >
                    <div className="relative inline-block bg-slate-50 p-10 rounded-full">
                      <Image
                        src={step.icon}
                        alt={step.title}
                        width={50}
                        height={50}
                        className={`mx-auto`}
                      />
                      <span className="absolute bottom-1 -right-4 transform -translate-x-1/2 text-white text-xl font-bold bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center">
                        {step.id}
                      </span>
                    </div>
                    <h3 className="text-lg font-medium text-gray-700 capitalize">
                      {step.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
      <section className="relative py-16 bg-gray-50">
        <div className="container mx-auto absolute -top-20 right-0 left-0">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {counters.map((counter) => (
              <div
                key={counter.id}
                className="text-center space-y-2 bg-white p-6 rounded-lg shadow-md"
              >
                <span className="text-4xl font-bold text-blue-600">
                  <CountUp end={counter.count} duration={2} />
                  k+
                </span>
                <p className="text-lg font-medium text-gray-700">
                  {counter.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppiloFeatures;
