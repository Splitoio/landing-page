import React from "react";

interface BenefitItemProps {
  number: number;
  title: string;
  description?: string;
  hasArrow?: boolean;
  isLast?: boolean;
}

export function BenefitItem({
  number,
  title,
  description,
  hasArrow = false,
  isLast = false,
}: BenefitItemProps) {
  const containerClasses = isLast ? "" : "border-b border-[#333333]";

  return (
    <div className={containerClasses}>
      <div className={"flex items-center gap-3 py-6"}>
        <div className="flex-1">
          <div className="flex items-center justify-start gap-3">
            <div className="flex items-center w-9 h-9 p-2 gap-2.5 rounded-[13px] bg-gradient-to-b from-white/[0.06] to-[#979797]/[0.06]">
              <div className="box-border flex flex-row justify-center items-center p-[1.5px_1px_2.5px] w-5 h-5 border-[1.5px] border-[#09D1FD] rounded-md flex-none order-0 flex-grow-0">
                <span className="font-inter font-semibold text-xs leading-4 text-[#09D1FD]">
                  {number}
                </span>
              </div>
            </div>

            <h3 className="text-white text-[15.375px] font-medium leading-[1.561] font-inter">
              {title}
            </h3>

            {hasArrow && (
              <svg
                className="ml-16"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M3.33 8H12.67"
                  stroke="#09D1FD"
                  strokeWidth="1.33"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 3.33L12.67 8L8 12.67"
                  stroke="#09D1FD"
                  strokeWidth="1.33"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
          {description && (
            <p className="text-[rgba(248,250,252,0.7)] text-[15.25px] font-normal leading-[1.574] font-inter w-[80%] mt-4">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
