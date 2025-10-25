import React from "react";
import Logo from "@/assets/logo.png";
import Image from "next/image";

interface FooterLink {
  text: string;
  href?: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const sections: FooterSection[] = [
  {
    title: "Links",
    links: [
      { text: "Blog" },
      { text: "Help center" },
      {
        text: "Become an affiliate",
      },
      {
        text: "Leave us a testimonial",
      },
      { text: "Join our discord" },
    ],
  },
  {
    title: "Socials",
    links: [{ text: "Discord" }, { text: "Telegram" }, { text: "X" }],
  },
  {
    title: "Legal",
    links: [
      {
        text: "Terms & Conditions",
      },
      { text: "Privacy Policy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#1F1F1F] px-4 md:px-8 lg:px-[144px] pt-12 md:pt-16 lg:pt-24 pb-8 md:pb-12 lg:pb-18">
      <div className="relative flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-32 items-start">
        <Image
          src={Logo}
          alt={"logo"}
          width={28}
          height={28}
          className="mb-4 md:mb-0"
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 lg:gap-16 w-full md:w-auto">
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-normal font-inter text-xs mb-4">
                {section.title}
              </h3>

              <div className="space-y-0">
                {section.links.map((link, linkIndex) => (
                  <div
                    key={linkIndex}
                    className="h-[40px] px-[1px] py-2 rounded-md"
                  >
                    <span className="text-[#F8FAFC] text-sm font-medium font-inter hover:text-white transition-colors cursor-pointer">
                      {link.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 md:mt-6 lg:mt-3 flex justify-center md:justify-end">
        <span className="text-white text-[11.25px] font-normal leading-[1.422] font-inter text-center md:text-right">
          © Copyright 2025, Splito
        </span>
      </div>
    </footer>
  );
}
