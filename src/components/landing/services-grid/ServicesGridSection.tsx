import { servicesContent } from "@/src/constants/services-content";
import ServicesGridClient from "./ServicesGridClient";

export default function ServicesGridSection() {
  return <ServicesGridClient content={servicesContent} />;
}
