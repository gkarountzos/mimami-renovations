import { pricingContent } from "@/src/constants/pricing-content";
import PricingClient from "./PricingClient";

export default function PricingSection() {
  return <PricingClient content={pricingContent} />;
}
