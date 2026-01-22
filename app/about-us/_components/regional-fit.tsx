"use client";

const features = [
  {
    id: 1,
    icon: "/icons/WhatsappLogo.svg",
    content: "WhatsApp-first workflows",
  },
  {
    id: 2,
    icon: "/icons/globe.svg",
    content: "Region-aware operations (timezone and weekend modes)",
  },
  {
    id: 3,
    icon: "/icons/Translate.svg",
    content: "English + Arabic with true RTL support",
  },

  {
    id: 4,
    icon: "/icons/UsersThree.svg",
    content: "Designed for serious teams, not hobby usage",
  },
];
export default function RegionalFit() {
  return (
    <section className="section-container relative  font-sf-pro">
      <div className="section-content   flex gap-10 items-center max-lg:flex-col max-lg:justify-center">
        <div className="lg:w-1/3  justify-center">
          <div className="max-w-80">
            <p className=" text-3xl md:text-[40px] font-medium   max-lg:text-center">
              Built for GCC operators.
            </p>
            <p className="text-muted-foreground mt-6 max-lg:text-center">
              We serve teams across the GCC and selected MENA markets.
            </p>
          </div>
        </div>
        <div className=" w-full lg:w-2/3">
          <div className="  md:columns-2 gap-8 ">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="flex break-inside-avoid h-full rounded-2xl  bg-card border flex-col  mb-4 gap-4  flex-1 py-5 px-10.5  items-center"
              >
                <div className=" rounded-full  shrink-0 size-14 bg-white/10 border-t-2 border-t-white/20 flex items-center justify-center">
                  <img
                    src={feature.icon}
                    alt={feature.content}
                    className="w-6 h-6 "
                  />
                </div>
                <p className="text-muted-foreground text-center max-w-60">
                  {feature.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
