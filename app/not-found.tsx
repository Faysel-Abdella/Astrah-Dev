import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function NotFound() {
  const t = useTranslations("notFound");
  return (
    <main className="min-h-screen bg-background overflow-x-hidden  pt-34 md:pt-45 ">
      <div className="w-full flex flex-col items-center px-4">
        <div className="w-fit">
          <img src={"/icons/404.svg"} className="h-40 md:h-59 w-fit" />
        </div>
        <div className="max-w-125  flex flex-col items-center text-center mt-3">
          <p className="text-3xl md:text-[40px] font-semibold">{t("title")}</p>
          <p className="mt-3 text-muted-foreground text-sm sm:text-base">
            {t("description")}
          </p>
          <Button
            variant="outline"
            className=" px-7 mt-8 font-sf-pro  shadow-[inset_0_0px_20px_rgba(0,179,198,0.1)]  text-white/75  h-10  text-base border-primary rounded-md"
            asChild
          >
            <Link href={"/"}>{t("button")}</Link>
          </Button>
        </div>
      </div>
      <div className="w-full ">
        <img
          src={"/glow-globe.png"}
          className="md:h-80 lg:h-100 object-cover object-top w-full"
        />
      </div>
    </main>
  );
}
