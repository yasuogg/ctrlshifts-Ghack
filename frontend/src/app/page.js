import Footer from "@/components/landing-page/footer";
import Header from "@/components/landing-page/header";
import Hero from "@/components/landing-page/hero";
import Squares from "@/components/landing-page/squares";
import Looking from "@/components/landing-page/team-looking";
import Timeline from "@/components/landing-page/timline-hero";
import Workflow from "@/components/landing-page/workflow";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Header/>
    <Hero/>
    <Timeline/>
    <Squares/>
    <Workflow/>
    <Looking/>
    </>

  );
}
