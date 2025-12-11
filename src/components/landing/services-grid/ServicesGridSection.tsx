import { servicesContent } from "@/src/constants/content";
import ServicesGridClient from "./ServicesGridClient";

export default function ServicesGridSection() {
  return <ServicesGridClient content={servicesContent} />;
}
