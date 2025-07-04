/* eslint-disable @next/next/no-page-custom-font */
import { ScreenWidth } from "@/context/screenwidth/screenwidth.context";
import "../globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import Sublayout from "@/components/layout";
import Structure from "@/components/layout/structure";

export const metadata: Metadata = {
  title: "Utkarsh Patrikar - Software Developer and DevOps Engineer",
  description:
    "Experienced software engineer specializing in full-stack application development. Explore my portfolio to see my projects, skills, and achievements in front-end and back-end development, UI/UX, Cloud Infrastructure, problem-solving and more.",
  keywords:
    "Software engineer portfolio, personal portfolio, web development, mobile app development, front-end development, back-end development, UI/UX design, problem-solving, game development, hackathons, DevOps engineer, cloud infrastructure, software development, programming, coding, software projects, software engineer skills, software engineer achievements",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ScreenWidth>
      <Sublayout>
        <Structure>{children}</Structure>
      </Sublayout>
    </ScreenWidth>
  );
}
