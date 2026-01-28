import { useTranslations } from "next-intl";
import StyledIcon from "@/components/styled-icon";
import {
  Activity,
  Binoculars,
  Languages,
  List,
  MessageCircleQuestion,
  ToggleLeft,
} from "lucide-react";

const SystemModules = () => {
  //   const t = useTranslations("about.operatingPrinciples");

  const principles = [
    {
      icon: "/icons/WhatsappLogo.svg",
      title: "WhatsApp Intelligence",
      description:
        "Turns WhatsApp threads into structured CRM activity (summaries, signals, follow-ups)",
    },
    {
      icon: Activity,
      title: "Deal Health",
      description:
        "Detects risk early (silence + stagnation) and recommends the next best action.",
    },
    {
      icon: "/icons/sms-tracking.svg",
      title: "AI Inbox Zero",
      description:
        "Unified view that triages conversations and produces next steps.",
    },
    {
      icon: List,
      title: "AI Priority Queue",
      description:
        "Ranks what to do now across deals and chats so nothing slips.",
    },
    {
      icon: "/icons/lamp-charge.svg",
      title: "Smart Close",
      description: "Offer + payment request + embedded e-sign to close faster.",
    },
    {
      icon: Binoculars,
      title: "AI Lead Generator",
      description:
        "Finds and ranks target companies using GCC-tuned signals and enrichment.",
    },

    {
      icon: MessageCircleQuestion,
      title: "Ask Astrah (Orb AI Assistant)",
      description:
        "Answers across CRM + WhatsApp + docs, with optional general knowledge mode.",
    },
  ];

  return (
    <section className="section-container w-full font-sf-pro">
      <div className="  section-content  flex flex-col items-center">
        <p className=" font-medium  text-3xl md:text-[40px] text-center">
          System Modules
        </p>
        <p className="text-muted-foreground mt-6 ">
          One operating layer. Each module produces signals you can act on.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full mt-14 gap-7">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="flex break-inside-avoid h-full rounded-2xl  bg-card border flex-col    p-5 "
            >
              <StyledIcon Icon={principle.icon} />
              <p className="text-lg font-medium mt-6 ">{principle.title}</p>
              <p className="text-muted-foreground  mt-4  ">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemModules;
