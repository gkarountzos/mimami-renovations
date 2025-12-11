import { heroContent, heroHomeContent } from "@/src/constants/content";
import HeroClient from "./HeroClient";

export default function HeroSection() {
  return <HeroClient content={heroContent} />;
}
