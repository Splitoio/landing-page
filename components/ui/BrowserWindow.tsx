import React from 'react';
import Image from 'next/image';

interface BrowserWindowProps {
  imageSrc: string;
  imageAlt: string;
  className?: string;
}

export function BrowserWindow({ imageSrc, imageAlt, className = "" }: BrowserWindowProps) {
  return (
    <div className={`w-[1300px] h-[600px] ${className}`}>
      <div className="w-full h-full bg-[#0F0F0F] border border-[#1F1F1F] rounded-[8px] shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.1),0px_4px_6px_-1px_rgba(0,0,0,0.1)]">
        {/* Browser Header */}
        <div className="flex items-center gap-2 px-4 py-[16px] border-b border-[#1F1F1F]">
          <div className="w-2 h-2 bg-[#EF4444] rounded-full"></div>
          <div className="w-2 h-2 bg-[#EAB308] rounded-full"></div>
          <div className="w-2 h-2 bg-[#22C55E] rounded-full"></div>
        </div>
        
        {/* Dashboard Content */}
        <div className="w-[1298px] h-[557px] relative overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
} 