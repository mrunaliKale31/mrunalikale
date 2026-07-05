export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  problemStatement: string;
  solution: string;
  features: string[];
  techStack: string[];
  category: string;
  status: 'Completed' | 'In Progress' | 'Beta';
  banner: string;
  githubUrl: string;
  liveDemoUrl: string;
  docUrl: string;
  challenges: string;
  lessonsLearned: string;
  futureImprovements: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  badgeColor: string;
}

export interface ColorSwatch {
  name: string;
  hex: string;
  description: string;
  usage: string;
}
