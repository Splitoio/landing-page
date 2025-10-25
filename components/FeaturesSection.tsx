import React from "react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: "/icons/flash-icon.svg",
    iconAlt: "Flash icon",
    title: "1. Quick setup",
    description:
      "Get up and running in just a few minutes by connecting your preferred crypto wallet.",
  },
  {
    icon: "/icons/user-add-icon.svg",
    iconAlt: "User add icon",
    title: "2. Add Friends",
    description:
      "Bring your friends on board by inviting them directly to start managing expenses as a group",
  },
  {
    icon: "/icons/dashboard-edit-icon.svg",
    iconAlt: "Dashboard edit icon",
    title: "3. Create Splits",
    description:
      "Divide up costs effortlessly for shared transactions, assigning specific amounts to each person.",
  },
  {
    icon: "/icons/cash-icon.svg",
    iconAlt: "Cash icon",
    title: "4. Settle Balances",
    description:
      "Wrap things up by settling all outstanding balances on-chain with their preferred tokens.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="container mx-auto py-16 md:py-32 lg:py-44 px-4">
      {/* Section Header */}
      <div className="mb-8">
        <h2 className="text-white font-medium font-general-sans text-2xl md:text-3xl lg:text-[44.81px] leading-[1.3] md:leading-[1.74] mb-4 md:mb-6">
          Say Goodbye to Unorganised Splits
        </h2>

        <p className="text-slate-50/60 font-inter font-normal text-sm md:text-[15.13px] leading-[1.59] max-w-[500px]">
          Instead of keeping track of multiple expenses, organise them in one
          place with Splito in a few simple steps.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12 md:mt-24">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            iconAlt={feature.iconAlt}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}
