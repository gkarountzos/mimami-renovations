import { heroContent } from "@/src/constants/hero-content";
import HeroClient from "./HeroClient";

export default function HeroSection() {
  return <HeroClient content={heroContent} />;
}
