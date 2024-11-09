export type WorkExperience = {
  id: string;
  jobTitle: string;
  company: string;
  year: string;
  type: string;
  description: string;
};

export type ProjectType = {
  id: string;
  type: string;
  title: string;
  content: string;
  image: string;
  techstack: string[];
  liveUrl: string;
  codeUrl: string;
};
