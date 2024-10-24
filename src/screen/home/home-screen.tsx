import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import SupportSection from "./components/support-section";
import SpeakerSection from "./components/speaker-section";
import SchedulingSection from "./components/scheduling-section";
import OpenCeremonySection from "./components/open-ceremony-section";
import ContactSection from "./components/contact-section";
import BusinessFeatures from "./components/features";
import CRMPromotion from "./components/CRMPromotion";
import CRMSalesTeam from "./components/CRMSalesTeam";
import AppiloFeatures from "./components/AppiloFeatures";

const HomeScreen = () => {
  const words = `Integrated CRM, Project Management`;
  return (
    <>
      <section
        className="relative overflow-hidden md:py-28 py-32 bg-sky-100 dark:bg-sky-100/20"
        id="home"
      >
        <div className="container relative mt-8 h-[75vh]">
          <div className="h-full grid md:grid-cols-2 grid-cols-1 gap-6 items-center">
            <div>
              <TextGenerateEffect words={words} />
              {/* <ForumTitle /> */}
              <p className="text-slate-400 text-lg max-w-xl">
                Better Way To Manage Business Integrated CRM, Project Management
                A better way to manage your sales, team, clients & marketing -
                on a single platform. Powerful, affordable & easy to use
                software
              </p>

              <div className="mt-6">
                <Link
                  href="/register"
                  className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-[#2980B9] text-white"
                >
                  Get Start Now <i className="mdi mdi-chevron-right ms-1"></i>
                </Link>
              </div>
            </div>

            <div className="lg:ms-8">
              <div className="relative">
                <Image
                  src="/bs1.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  className="relative"
                  alt=""
                />
                {/* <div className="overflow-hidden absolute md:size-[500px] size-[400px] bg-gradient-to-tl to-sky-100/20 via-sky-100/70 from-sky-100 bottom-1/2 translate-y-1/2 md:start-0 start-1/2 ltr:md:translate-x-0 ltr:-translate-x-1/2 rtl:md:translate-x-0 rtl:translate-x-1/2 -z-1 shadow-md shadow-sky-100/10 rounded-full"></div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <BusinessFeatures />

      <CRMPromotion />

      <CRMSalesTeam />

      <AppiloFeatures />

      {/* <OpenCeremonySection />

      <SchedulingSection />

      <SpeakerSection />

      <SupportSection />

      <ContactSection /> */}
    </>
  );
};

export default HomeScreen;
