import React from "react";
import Pattern from "@/assets/pattern-2.png";
import { Button } from "./Button";
import Image from "next/image";
import Link from "next/link";
import { getDashboardUrl } from "@/utils";

const features = [
  "Direct access to fast support, every step of the way",
  "Personalized 1-1 onboarding by our founder",
  "No hidden fees, no upsells, no BS",
  "Dedicated support when you need it",
];

export default function CTASection() {
  return (
    <section className="relative mx-20 bg-[#09090B] rounded-[20px] overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0">
        <Image
          src={Pattern}
          alt="Pattern"
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="py-16 flex flex-col items-center justify-centers gap-8 relative z-10">
        <h2 className="text-white text-4xl font-medium text-center font-general-sans">
          Best way to clear splits on-chain
        </h2>

        <div className="flex flex-col items-center gap-[26px] ">
          <div className="flex flex-col items-center gap-4">
            {/* Feature 1 */}
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4">
                <span className="text-white text-md font-normal leading-[1.6] text-center font-inter">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        <Link href={getDashboardUrl()}>
          <Button variant="outline">Get started now</Button>
        </Link>
      </div>
    </section>
  );
}
