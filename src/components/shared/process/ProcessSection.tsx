import { processContent } from "@/src/constants/process-content";
import ProcessClient from "./ProcessClient";

export default function ProcessSection() {
  return <ProcessClient content={processContent} />;
}
