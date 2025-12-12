import { portfolioContent } from "@/src/constants/portfolio-content";
import PortfolioClient from "./PortfolioClient";

export default function PortfolioSection() {
  return <PortfolioClient content={portfolioContent} />;
}
