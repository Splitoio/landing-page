"use client";

import { useState, useEffect } from "react";

import { BrowserWindow } from "./ui/BrowserWindow";
import { BenefitItem } from "./ui/BenefitItem";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const benefits = [
  {
    number: 1,
    title: "One Central Dashboard for all your Splits",
    image: "/images/dashboard-1.png",
  },
  {
    number: 2,
    title: "Stay organized with different groups",
    image: "/images/dashboard-2.png",
  },
  {
    number: 3,
    title: "Multiple Wallet Support",
    description:
      "Connect multiple wallets and clear your splits in your preferred currency, on your preferred chain!",
    hasArrow: true,
    isLast: true,
    image: "/images/dashboard-3.png",
  },
];

export default function BenefitsSection() {
  const autoPlayInterval = 3000;

  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100));
      } else {
        setCurrentFeature((prev) => (prev + 1) % benefits.length);
        setProgress(0);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [progress, benefits.length, autoPlayInterval]);

  return (
    <section className="relative py-12 md:py-24 lg:py-32 px-4">
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0">
        {/* Left Content */}
        <div className="lg:p-20 lg:sticky lg:top-0 lg:h-[555.56px]">
          <div className="mb-6 md:mb-10">
            <h2 className="text-white text-2xl md:text-3xl lg:text-[45px] font-medium leading-[1.3] md:leading-[1.493] font-general-sans">
              Splito is the right way to clear your Splits
            </h2>
          </div>

          <div className="space-y-0">
            <div className="order-2 md:order-1 space-y-0">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0.3 }}
                  animate={{ opacity: index === currentFeature ? 1 : 0.3 }}
                  transition={{ duration: 0.5 }}
                >
                  <BenefitItem
                    key={benefit.number}
                    number={benefit.number}
                    title={benefit.title}
                    description={benefit.description}
                    hasArrow={index === currentFeature}
                    isLast={benefit.isLast}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div
          className={cn(
            "relative overflow-hidden py-8 lg:py-20 min-h-[400px] md:min-h-[500px] lg:min-h-0"
          )}
        >
          <AnimatePresence mode="wait">
            {benefits.map(
              (benefit, index) =>
                index === currentFeature && (
                  <motion.div
                    key={index}
                    className="absolute inset-0 overflow-hidden flex items-center justify-center"
                    initial={{ y: 100, opacity: 0, rotateX: -20 }}
                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                    exit={{ y: -100, opacity: 0, rotateX: 20 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <BrowserWindow
                      key={index}
                      imageSrc={benefit.image}
                      imageAlt={benefit.title}
                    />
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
