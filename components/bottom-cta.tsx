import React from "react";
import { Button } from "./ui/button";

const BottomCTA = () => {
  return (
    <section className="w-full font-sf-pro">
      <div className="max-w-5xl w-full mx-auto pt-px bg-linear-to-r from-transparent via-border to-transparent">
        <div className="bg-background relative overflow-hidden  pt-20 text-center items-center flex flex-col justify-center  ">
          <p className=" font-medium text-[40px]">
            Built for serious operators.
          </p>
          <p className="text-white/80 mt-6 max-w-xl ">
            If you&apos;re done managing chaos and ready to run a real system,
            talk to Astrah.
          </p>
          <Button className="mt-8 font-gilroy h-11.5 px-7">
            Talk to <span className="font-bold">ASTRAH</span>
          </Button>
          <div className="  w-1/3 -top-20 blur-[100px]  rounded-full absolute h-40 bg-white/20"></div>
        </div>
      </div>
    </section>
  );
};

export default BottomCTA;
