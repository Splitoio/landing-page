import React from "react";
import Image from "next/image";

interface FeatureCardProps {
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  iconAlt,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="flex flex-col gap-3 md:gap-4">
      {/* Icon */}
      <div className="w-5 h-5 md:w-6 md:h-6">
        <Image
          src={icon}
          alt={iconAlt}
          width={24}
          height={24}
          className="w-full h-full"
        />
      </div>

      {/* Title */}
      <h3 className="text-slate-50 font-inter font-medium text-sm md:text-[15.25px] leading-[1.57]">
        {title}
      </h3>

      {/* Description */}
      <p className="text-slate-50/70 font-inter font-normal text-xs md:text-[13.23px] leading-[1.51] min-h-[50px] md:h-[60px]">
        {description}
      </p>
    </div>
  );
}
