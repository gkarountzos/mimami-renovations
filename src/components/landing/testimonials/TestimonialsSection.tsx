import { testimonialsContent } from "@/src/constants/testimonials-content";
import TestimonialsClient from "./TestimonialsClient";

export default function TestimonialsSection() {
  return <TestimonialsClient content={testimonialsContent} />;
}
