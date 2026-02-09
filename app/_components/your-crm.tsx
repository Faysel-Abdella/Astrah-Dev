import { useTranslations } from "next-intl";

const YourCRM = () => {
  const t = useTranslations("landing.crm");

  return (
    <section className="section-container bg-[#070B13] py-20 w-full  font-sf-pro">
      <div className="max-w-2xl text-center mx-auto max-sm:items-center flex flex-col">
        <p className=" font-semibold md:font-medium text-3xl md:text-[40px] tracking[-0.02em] md:tracking-tight ">
          {t.rich("title", { br: (chunk) => <br className="sm:hidden"></br> })}
        </p>
        <p className="text-muted-foreground mt-6">
          {t("p1")}
          <br /> {t("p2")}
          <br></br> {t("p3")}``
        </p>
        <p className="font-semibold text-xl mt-5">{t("astrahDoes")}</p>
      </div>
    </section>
  );
};

export default YourCRM;
