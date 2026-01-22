import React from "react";

const principles = [
  {
    icon: "/icons/WhatsappLogo.svg",
    title: "WhatsApp-first by design",
    description:
      "Astrah surfaces what matters. Silence, risk, intent, next actions.",
  },
  {
    icon: "/icons/ToggleLeft.svg",
    title: "Control over automation",
    description: "No surprise actions. Nothing is sent without confirmation.",
  },
  {
    icon: "/icons/Pulse.svg",
    title: "Execution over logging",
    description: "The goal is revenue movement, not activity tracking.",
  },
  {
    icon: "/icons/Translate.svg",
    title: "GCC-first reality",
    description:
      "WhatsApp-first workflows, bilingual by default, region-aware operations.",
  },
];
const OperatingPrinciples = () => {
  return (
    <section className="section-container w-full font-sf-pro">
      <div className="  section-content ">
        <p className=" font-medium text-3xl md:text-[40px] text-center">
          Operating principles.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-14 gap-7">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="flex break-inside-avoid h-full rounded-2xl  bg-card border flex-col    p-5 "
            >
              <div className=" rounded-full  shrink-0 size-14 bg-white/10 border-t-2 border-t-white/20 flex items-center justify-center">
                <img
                  src={principle.icon}
                  alt={principle.title}
                  className="w-6 h-6 "
                />
              </div>
              <p className="text-lg font-medium mt-6 ">{principle.title}</p>
              <p className="text-muted-foreground  mt-4 lg:max-w-52 ">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OperatingPrinciples;
