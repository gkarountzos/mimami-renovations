import { processContent } from "@/src/constants/content";
import ProcessClient from "./ProcessClient";

export default function ProcessSection() {
  return <ProcessClient content={processContent} />;
}
