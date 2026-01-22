import { Check } from "lucide-react";
import React from "react";

const principles = [
  "Astrah supports decisions.",
  "It does not auto-send messages.",
  "It does not act without confirmation.",
  "You stay in control.",
];
const Principles = () => {
  return (
    <section className=" section-container ">
      <div className="section-content flex max-md:gap-10 max-md:flex-col max-md:items-center ">
        <div className="md:w-1/2 flex flex-col  w-full  justify-center ">
          <p className="font-medium text-3xl  md:text-[40px] text-start">
            Not a tool. An operating layer.
          </p>
          <p className="text-muted-foreground mt-6 ">Astrah OS combines:</p>
          <ul className="text-muted-foreground list-disc ps-5 mt-4 max-md:max-w-sm text-start">
            <li>CRM foundations (contacts, deals, tasks)</li>
            <li>A unified communication layer (WhatsApp + email)</li>
            <li>
              An intelligence layer that monitors deal signals, risk, and
              stagnation
            </li>
            <li>
              Transaction support that closes the gap from agreement to payment
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 bg-card h-full rounded-3xl border p-8">
          <p className="font-medium text-2xl md:text-[32px] ">
            Operating principles
          </p>
          <div className="flex flex-col mt-10 gap-4.5">
            {principles.map((principle, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="bg-primary/25 size-5 rounded-full shrink-0 flex items-center justify-center">
                  <Check className="size-3 text-primary" />
                </div>
                <span className="text-muted-foreground ">{principle}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Principles;
