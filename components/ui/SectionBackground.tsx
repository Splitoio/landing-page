import React from 'react';

export function SectionBackground() {
  return (
    <div className="absolute inset-0">
      {/* Right gradient */}
      <div className="absolute w-[432px] h-[2700px] right-0 top-0 bg-gradient-to-l from-[#0F0F0F] to-transparent"></div>
      {/* Top gradient */}
      <div className="absolute w-full h-[180px] top-0 bg-gradient-to-b from-[#0F0F0F] to-transparent"></div>
      {/* Bottom gradient */}
      <div className="absolute w-full h-[180px] bottom-0 bg-gradient-to-t from-[#0F0F0F] to-transparent"></div>
      {/* Top divider */}
      <div className="absolute w-full h-[1px] top-0 bg-gradient-to-r from-transparent via-[rgba(248,250,252,0.15)] to-transparent"></div>
      {/* Radial gradient */}
      <div className="absolute w-[900px] h-[200px] left-[270px] -top-[100px] bg-gradient-radial from-[rgba(248,250,252,0.05)] to-transparent rounded-full"></div>
    </div>
  );
} 