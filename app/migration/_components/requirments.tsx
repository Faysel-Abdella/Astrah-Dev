"use client";

import DepthCard from "@/components/depth-card";
import GlowCard from "@/components/glow-card";
import StyledIcon from "@/components/styled-icon";
import { cn } from "@/lib/utils";
import { FileUp, List, Timer, CheckSquare } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Requirments() {
  const t = useTranslations("migration.requirements");
  const items = t.raw("items") as string[];

  const icons = [FileUp, CheckSquare, List, Timer];
  return (
    <section className="section-container relative font-sf-pro">
      <div className="section-content flex gap-10 items-center max-lg:flex-col max-lg:justify-center">
        <p className=" text-3xl md:text-[40px] tracking[-0.02em] md:tracking-tight font-semibold md:font-medium lg:w-1/3 max-lg:text-center">
          {t.rich("title", { br: (chunk) => <br className="sm:hidden"></br> })}
        </p>
        <div className=" w-full lg:w-2/3">
          <div className=" md:columns-2 gap-6 ">
            {items.map((content, index) => (
              <GlowCard
                key={index}
                outerClassName="h-full  mb-6 flex-1"
                className="flex     flex-col gap-6  py-5 px-8 items-center"
                glowDirection={index == 0 || index == 3 ? "top" : "bottom"}
              >
                <StyledIcon Icon={icons[index]} />
                <p
                  className={cn(
                    "text-muted-foreground text-center ",
                    index == 0 && "md:max-w-55 md:rtl:max-w-50",
                    index == 1 && "md:rtl:max-w-45",
                  )}
                >
                  {content}
                </p>
              </GlowCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
