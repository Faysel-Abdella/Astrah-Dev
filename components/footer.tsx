import React from "react";
import Logo from "./logo";
import { Button } from "./ui/button";
import Link from "next/link";

const footerLinks = [
  {
    title: "LINKS",
    links: [
      { name: "Product", url: "#" },
      { name: "Terms", url: "#" },
      { name: "Migration", url: "#" },
    ],
  },
  {
    title: "LEGAL",
    links: [
      { name: "Privacy", url: "#" },
      { name: "Terms", url: "#" },
      { name: "Acceptable Use", url: "#" },
      { name: "Refunds/Cancellation", url: "#" },
    ],
  },
  {
    title: "GET IN TOUCH",
    description: "Question or feedback? we'd love to listen form you.",
    button: "Contact Us",
  },
];
const Footer = () => {
  return (
    <section className="pt-30 section-container ">
      <div className="w-full max-w-7xl mx-auto flex gap-8 max-md:flex-col ">
        <div className="md:w-1/3 lg:w-2/5 flex flex-col">
          <div className="flex items-center">
            <Logo imgClassName="h-6" />
          </div>
          <div className="text-white/75 max-w-65 mt-10">
            Enterprise AI operating system for GCC teams turning conversations
            into revenue.
          </div>
        </div>
        <div className="md:w-2/3 lg:w-3/5 flex justify-between max-sm:flex-wrap max-md:gap-y-6 max-md:gap-x-6  text-sm">
          {footerLinks.map((section, index) => (
            <div key={index} className="">
              <h3 className=" font-semibold mb-5 text-white/40">
                {section.title}
              </h3>
              {section.description && (
                <p className="text-white/75 mb-8 max-w-50">
                  {section.description}
                </p>
              )}
              {section.button && (
                <Button
                  variant="outline"
                  className=" border-white px-7 font-sf-pro text-sm  text-white/75  h-10 hover:border-primary rounded-md"
                >
                  {section.button}
                </Button>
              )}
              {section.links && (
                <ul className="mt-5 flex flex-col gap-4.5">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="mb-2">
                      <Link
                        href={link.url}
                        className="text-white/75 hover:text-white"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-16 mb-10 flex items-center flex-col justify-center gap-10">
        <div className="shrink bg-linear-to-r from-transparent via-border to-transparent h-px w-full" />
        <p className="text-sm text-white/">
          © ASTRAH OS,
          <span className="text-muted-foreground">
            {" "}
            All rights reserved 2026.
          </span>
        </p>
      </div>
    </section>
  );
};

export default Footer;
