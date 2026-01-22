import { Button } from "@/components/ui/button";
import React from "react";

const AboutUsCTA = () => {
  return (
    <section className="w-full  font-sf-pro">
      <div className="max-w-5xl  w-full mx-auto pt-px bg-linear-to-r from-transparent via-border to-transparent">
        <div className="bg-background section-container relative overflow-hidden  pt-20 text-center items-center flex flex-col justify-center  ">
          <p className=" font-medium text-3xl md:text-[40px]">
            A system built for the Gulf.
          </p>
          <p className="text-muted-foreground mt-6 max-w-lg ">
            If you want to see how Astrah OS fits your pipeline and workflows,
            talk to us.
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
          <div className="  w-1/3 -top-20 blur-[100px]  rounded-full absolute h-40 bg-white/20"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsCTA;
