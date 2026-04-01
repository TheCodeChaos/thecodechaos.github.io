export type Site = {
  website: string;
  title: string;
  author: string;
  description: string;
  ogImage: string;
  lightAndDarkMode: boolean;
};

export type NavLink = {
  href: string;
  label: string;
};

export type SocialLink = {
  name: 'Github';
  href: string;
  linkTitle: string;
  active: boolean;
};

export type HomePageConfig = {
  eyebrow: string;
  title: string;
  lead: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  marquee: string[];
  cultureTitle: string;
  culturePoints: string[];
  tracksTitle: string;
  tracks: string[];
  joinTitle: string;
  joinLead: string;
  terminalCommands: string[];
};

export type GenericPageConfig = {
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  lead: string;
};
