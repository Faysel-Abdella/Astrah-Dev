import { Button } from "@/components/ui/button";
import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const AboutUsCTA = () => {
  const tHeader = useTranslations("header");
  const t = useTranslations("about.cta");

  return (
    <section className="w-full  font-sf-pro">
      <div className="max-w-5xl  w-full mx-auto pt-px bg-linear-to-r from-transparent via-border to-transparent">
        <div className="bg-background section-container relative overflow-hidden  pt-20 text-center items-center flex flex-col justify-center  ">
          <p className=" font-semibold md:font-medium text-3xl md:text-[40px] lg:text-[48px] tracking-tighter">
            {t.rich("title", {
              br: (chunk) => <br className="sm:hidden"></br>,
            })}
          </p>
          <p className="text-muted-foreground mt-6 max-w-lg ">
            {t("description")}
          </p>
          <div className="flex mt-10 gap-5 ">
            <Button className="   h-13.5 px-7" asChild>
              <Link href="/contact?intent=talk">
                {t("contactUs")}
              </Link>
            </Button>
            <Button
              variant="outline"
              className=" border-white px-7 font-sf-pro text-sm shadow-[inset_0_0px_20px_rgba(0,179,198,0.1)]  text-white/75  h-13.5 hover:border-primary rounded-md"
              asChild
            >
              <Link href="/#product">{t("viewProduct")}</Link>
            </Button>
          </div>
          <div className="  w-1/3 -top-20 blur-[100px]  rounded-full absolute h-40 bg-white/20"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsCTA;
