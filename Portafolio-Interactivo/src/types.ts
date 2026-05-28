export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  period: string;
  location?: string;
  tasks: string[];
  metrics?: { label: string; value: string }[];
  tags: string[];
  url?: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  description: string;
  role: string;
  period: string;
  url?: string;
  status: 'active' | 'completed' | 'beta';
  securityHighlights: string[];
  infrastructureDetails: string[];
  businessImpact?: string;
}

export interface SkillItem {
  name: string;
  category: 'security' | 'infra' | 'coding' | 'soft';
  level: number; // 0 to 100
  command: string;
  output: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  details: string;
  gpa?: string;
  highlights: string[];
}
