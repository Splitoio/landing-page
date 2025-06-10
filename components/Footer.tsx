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
    <footer className="w-full border-t border-[#1F1F1F] px-[144px] pt-24 pb-18">
      <div className="relative flex gap-32 items-start">
        <Image src={Logo} alt={"logo"} width={28} height={28} />

        {sections.map((section, index) => (
          <div key={index}>
            <h3 className="text-white font-normal font-inter text-xs mb-4">
              {section.title}
            </h3>

            <div className="space-y-0">
              {section.links.map((link, linkIndex) => (
                <div
                  key={linkIndex}
                  className=" h-[40px] px-[1px] py-2 rounded-md"
                >
                  <span className="text-[#F8FAFC] text-sm font-medium font-inter hover:text-white transition-colors cursor-pointer">
                    {link.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Copyright */}
      </div>

      <div className="mt-3 flex justify-end">
        <span className="text-white text-[11.25px] font-normal leading-[1.422] font-inter text-right">
          © Copyright 2025, Splito
        </span>
      </div>
    </footer>
  );
}
