import React from "react";
import Image from "next/image";
import DashboardImage from "@/assets/dashboard-image.png";
import { Button } from "./Button";

import FeatureCard from "./FeatureCard";
import { getDashboardUrl } from "@/utils";
import Link from "next/link";

const features = [
  {
    icon: "/images/flash.svg",
    iconAlt: "Flash icon",
    title: "Instant Setup",
    description: "Get your group up and running in moments",
  },
  {
    icon: "/images/user-switch.svg",
    iconAlt: "User switch icon",
    title: "Seamless Friend Sync",
    description: "Add friends easily via seamless invites",
  },
  {
    icon: "/images/dollar-circle.svg",
    iconAlt: "Dollar circle icon",
    title: "One-Click Settlements",
    description: "Settle balances on-chain with one tap in multiple tokens",
  },
];

export default function DashboardSection() {
  return (
    <section className="relative container mx-auto flex flex-col items-center py-24">
      {/* Horizontal Divider */}
      {/* <div 
        className="absolute w-[700px] h-[1px] top-[-0.5px] left-[370px]"
        style={{
          background: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(248, 250, 252, 0.2) 50%, rgba(0, 0, 0, 0) 100%)'
        }}
      /> */}

      {/* Top Radial Gradient */}
      {/* <div 
        className="absolute w-[900px] h-[200px] rounded-full top-[-100px] left-[270px]"
        style={{
          background: 'radial-gradient(50% 50% at 50% 50%, rgba(248, 250, 252, 0.02) 0%, rgba(0, 0, 0, 0) 80%)'
        }}
      /> */}

      {/* Main Container */}
      <div className="relative ">
        <div className="grid grid-cols-2 h-[350px] ">
          <div className="flex flex-col gap-4 justify-start items-start">
            <h2
              className="text-white font-medium"
              style={{
                // fontFamily: "General Sans",
                fontSize: "44.4375px",
                lineHeight: "1.1881856368396184em",
                letterSpacing: "-2.700422048233397%",
              }}
            >
              Bring your whole Group Onchain
            </h2>

            <p
              className="text-[rgba(248,250,252,0.8)] font-inter font-normal"
              style={{
                fontSize: "16.875px",
                lineHeight: "1.6em",
                width: "625px",
                height: "81px",
              }}
            >
              Have a clean overview of all your groups at a glance, whether it's
              all the splits added, your specific activity, or an overview of
              all members. Get all of this with a clean and digestible UX.
            </p>


            <Link href={getDashboardUrl()}>
              <Button className="mt-4">Try Splito now!</Button>
            </Link>
          </div>

          <div className="flex gap-4 items-end">
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
        </div>

        <div className="relative mt-12">
          <Image
            src={DashboardImage}
            alt="Dashboard"
            width={1280}
            height={1024}
          />

          <div
            className="absolute bg-[#1A1A1A] border border-[#333333] rounded-[16px] p-[5px] flex gap-[8px]"
            style={{
              left: "50%",
              top: "0",
              transform: "translateX(-50%)",
            }}
          >
            {/* Active Tab - Splits */}
            <button className="h-[40px] bg-[#0F0F0F] border border-[rgba(46,46,46,0.8)] rounded-[12px] flex items-center justify-center px-[46.58px] py-[9.5px]">
              <span
                className="text-[rgba(248,250,252,0.95)] font-inter font-medium"
                style={{
                  fontSize: "13.453125px",
                  lineHeight: "1.48664343786295em",
                }}
              >
                Splits
              </span>
            </button>

            {/* Inactive Tab - Your Activity */}
            <button className="h-[40px] rounded-[12px] flex items-center justify-center px-[17px] py-[9.5px]">
              <span
                className="text-[rgba(248,250,252,0.8)] font-inter font-medium"
                style={{
                  fontSize: "13.5625px",
                  lineHeight: "1.4746543778801844em",
                }}
              >
                Your Activity
              </span>
            </button>

            {/* Inactive Tab - Members Overview */}
            <button className="h-[40px] rounded-[12px] flex items-center justify-center px-[28.45px] py-[9.5px]">
              <span
                className="text-[rgba(248,250,252,0.8)] font-inter font-medium"
                style={{
                  fontSize: "14px",
                  lineHeight: "1.4285714285714286em",
                }}
              >
                Members Overview
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Gradients */}
      {/* <div 
        className="absolute w-[1440px] h-[240px] left-0"
        style={{
          top: '976.59px',
          background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #141414 100%)'
        }}
      />
      
      <div 
        className="absolute w-[1440px] h-[320px] left-0"
        style={{
          top: '896.59px',
          background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #141414 100%)'
        }}
      /> */}
    </section>
  );
}
