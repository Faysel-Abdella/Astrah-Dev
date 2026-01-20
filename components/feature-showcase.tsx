import React from "react";

const FeatureShowcase = () => {
  return (
    <section className="relative  font-sf-pro">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-30 items-center ">
        <div className="flex">
          <div className="w-1/2 flex flex-col  justify-center">
            <p className="font-medium text-[40px]">Demand, built in.</p>
            <p className="text-white/80 mt-6">
              Astrah doesn&apos;t just manage leads. It helps generate pipeline
              inside your OS.
            </p>
            <ul className="text-white/80 list-disc ps-5 mt-4">
              <li>Discover and rank opportunities</li>
              <li>
                Discover and rank opportunities Region-tuned signals (GCC
                context) Draft outreach (never auto-sends)
              </li>
              <li>Draft outreach (never auto-sends)</li>
            </ul>
          </div>
          <div className="w-1/2">
            <div className="relative w-full ">
              <img src={"/feature/feature-1.png"} />
            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse">
          <div className="w-1/2 flex flex-col  justify-center">
            <p className="font-medium text-[40px]">Stop revenue leaks.</p>
            <p className="text-white/80 mt-6">
              Astrah detects risk before it becomes loss.
            </p>
            <ul className="text-white/80 list-disc ps-5 mt-4">
              <li>Silence detection</li>
              <li>Stagnation alerts</li>
              <li>Priority queue for follow-ups</li>
            </ul>
            <p className="text-white/80 mt-6">
              No auto-sending. No surprise actions. You stay in control.
            </p>
          </div>
          <div className="w-1/2">
            <div className="relative w-full ">
              <img src={"/feature/feature-2.png"} />
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-1/2 flex flex-col  justify-center">
            <p className="font-medium text-[40px]">Inbox intelligence.</p>
            <p className="text-white/80 mt-6">
              One unified view. Thread summaries. Priority signals. Clear next
              steps.
            </p>
            <p className="font-medium text-[40px]">From agreement to cash.</p>
            <p className="text-white/80 mt-6">
              Close the admin gap. Go from “yalla” to paid.
            </p>
            <ul className="text-white/80 list-disc ps-5 mt-4">
              <li>Mobile-first offer link</li>
              <li>WhatsApp OTP acceptance</li>
              <li>Card/Apple Pay/Mada support (where available)</li>
            </ul>
          </div>
          <div className="w-1/2">
            <div className="relative w-full ">
              <img src={"/feature/feature-3.png"} />
            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse">
          <div className="w-1/2 flex flex-col  justify-center">
            <p className="font-medium text-[40px]">The system is alive.</p>
            <p className="text-white/80 mt-6">
              Persistent intelligence layer that surfaces signals, risks, and
              next actions.
            </p>
            <p className="text-white/80 mt-6">
              Not a chatbot toy. Not random guesses. Supports decisions. You
              decide.{" "}
            </p>
          </div>
          <div className="w-1/2">
            <div className="relative w-full ">
              <img src={"/feature/feature-4.png"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
