export type Experience = {
  role: string;
  company: string;
  location?: string | null;
  start?: string | null;
  end?: string | null;
  emphasis?: "before" | "now";
  bullets: string[];
};

export type Education = {
  school: string;
  degree: string;
  field: string;
  start?: string | null;
  end: string;
};

export type ResumeData = {
  name: string;
  headline: string;
  summary: string;
  experience: Experience[];
  skills: string[];
  education: Education[];
  links: {
    linkedin?: string | null;
    github?: string | null;
    portfolio?: string | null;
    email?: string;
  };
};

export type Project = {
  id: string;
  title: string;
  url: string;
  description: string;
  toolsUsed: string[];
  date: string;
};
