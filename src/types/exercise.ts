export interface Exercise {
  id: string;
  title: string;
  description: string;
  vulnerableCode: string;
  safeCode: string;
  explanation: string;
  hints: string[];
  payloads: Payload[];
}

export interface Payload {
  id: string;
  code: string;
  description: string;
  severity: "low" | "medium" | "high";
}
