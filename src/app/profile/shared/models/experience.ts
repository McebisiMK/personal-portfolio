import { Period } from "./period";

export interface Experience {
  id: number;
  company: string;
  location: string;
  period: Period;
  role: string;
  responsibilities: string;
}
