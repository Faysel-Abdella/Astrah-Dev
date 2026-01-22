import { Button } from "@/components/ui/button";
import { Dot } from "lucide-react";
import React from "react";

const AboutUsHero = () => {
  return (
    <section className="section-container w-full font-sf-pro">
      <div className="  pt-24 md:pt-32  max-w-2xl text-center items-center flex flex-col justify-center mx-auto ">
        <div className="flex text-muted-foreground text-base items-center">
          <Dot size={26} /> <span>ABOUT ASTRAH OS</span>
        </div>
        <p className=" font-medium text-3xl md:text-[40px] mt-5">
          A system built for the Gulf.{" "}
        </p>
        <p className="text-muted-foreground mt-5 max-w-xl ">
          Astrah OS is a WhatsApp-first, AI-native Business Operating System
          designed for GCC teams. Not a CRM. A system.
        </p>
        <div className="flex mt-10 gap-5 ">
          <Button className=" font-gilroy h-13.5 px-7">
            Talk to <span className="font-bold">ASTRAH</span>
          </Button>{" "}
          <Button
            variant="outline"
            className=" border-white px-7 font-sf-pro text-sm  text-white/75  h-13.5 hover:border-primary rounded-md"
          >
            View Product
          </Button>
        </div>
      </div>
      <div className="max-w-2xl text-center mx-auto mt-30">
        <p className=" font-medium text-3xl md:text-[40px]">
          Business in the GCC runs on conversations.
        </p>
        <p className="text-muted-foreground mt-6">
          Most CRMs were built for email-first markets and manual data entry.
          But in the Gulf, revenue happens inside WhatsApp threads, voice notes,
          fast decisions, and follow-ups that can&apos;t be missed.
        </p>
        <p className="text-muted-foreground mt-6">
          That&apos;s why traditional CRMs feel disconnected from reality: they
          store records, but they don&apos;t detect silence, they don&apos;t
          surface risk, and they don&apos;t protect pipeline momentum.
        </p>
        <p className="text-muted-foreground mt-6">
          Astrah OS exists to make revenue execution feel controlled.
        </p>
      </div>
    </section>
  );
};

export default AboutUsHero;
