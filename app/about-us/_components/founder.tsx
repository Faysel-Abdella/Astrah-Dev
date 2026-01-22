import { Dot } from "lucide-react";
import Image from "next/image";
import React from "react";

const Founder = () => {
  return (
    <section className="section-container relative  font-sf-pro">
      <div className="section-content   flex gap-20 items-center max-md:flex-col max-md:justify-center">
        <div className=" md:w-1/2 shrink-0 justify-center ">
          <div className="">
            <div className="flex text-muted-foreground text-sm md:text-base items-center">
              <Dot size={26} /> <span>FOUNDER</span>
            </div>
            <p className=" text-3xl md:text-[53px] font-medium   mt-5 ">
              Zoltan Hajdu
            </p>
            <p className="text-muted-foreground mt-6">Founder, Astrah OS</p>
            <p className="text-muted-foreground mt-6">
              I&apos;m building Astrah OS for one reason: in the Gulf, a “CRM”
              is not enough. Revenue teams need an operating system that
              reflects how business actually runs, conversation-first and
              high-speed.
            </p>
            <p className="text-muted-foreground mt-6">Astrah is designed to:</p>
            <ul className="text-muted-foreground list-disc ps-5 mt-4 max-md:max-w-sm text-start">
              <li>detect deal silence and risk early</li>
              <li>keep follow-ups disciplined</li>
              <li>bring clarity to the pipeline</li>
              <li>help teams close the gap from agreement to payment</li>
            </ul>
            <p className="text-muted-foreground mt-6">
              Built under Alhaya Solutions FZCO (Dubai).
            </p>
          </div>
        </div>
        <div className=" md:w-1/2  w-full flex justify-center">
          <div
            className="relative rounded-2xl overflow-hidden w-full h-100 md:h-125     max-w-114
"
          >
            <Image
              src="/images/image.png"
              alt="Founder"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-background h-full w-full mix-blend-color" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
