import { Period } from "./period";

export interface Education {
  id: number;
  period: Period;
  name: string;
  description: string;
  institution: string;
}
