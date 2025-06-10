import React from 'react';
import Image from 'next/image';

interface FeatureCardProps {
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, iconAlt, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col gap-4">
      {/* Icon */}
      <div className="w-6 h-6">
        <Image
          src={icon}
          alt={iconAlt}
          width={24}
          height={24}
          className="w-full h-full"
        />
      </div>
      
      {/* Title */}
      <h3 className="text-slate-50 font-inter font-medium text-[15.25px] leading-[1.57]">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-slate-50/70 font-inter font-normal text-[13.23px] leading-[1.51] h-[60px]">
        {description}
      </p>
    </div>
  );
} 