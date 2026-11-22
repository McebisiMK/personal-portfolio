export interface Project {
  id: number;
  name: string;
  category: string;
  year: number;
  description: string;
  highlights: Array<string>;
  technology: Array<string>;
  links: Array<{ label: string; url: string }>;
  featured?: boolean;
  stats?: Array<{ value: string; label: string }>;
  architecture?: Array<{ name: string; role: string }>;
}
