export type NavbarItem = {
  label: string;
  href: string;
};

export type SocialMedia = {
  icon: string;
  href: string;
};

export type Activity = {
  id: number;
  logo: string;
  company_name: string;
  company_url?: string;
  title: string;
  period: string;
  tech_stacks?: string[];
  responsibilities?: string[];
};

export type Project = {
  thumbnail: string;
  id: number;
  name: string;
  summary: string;
  tech_stacks: string[];
};

export type EmailMessage = {
  name: string;
  email: string;
  message: string;
};
