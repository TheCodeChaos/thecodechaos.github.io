import type {
  GenericPageConfig,
  HomePageConfig,
  MembersPageConfig,
  NavLink,
  Site,
  SocialLink,
} from './types';

export const SITE: Site = {
  website: 'https://thecodechaos.github.io/',
  title: 'CodeChaos',
  author: 'CodeChaos Core Team',
  description:
    'CodeChaos is an open coding club for students focused on building, collaborating, and shipping real software.',
  ogImage: 'og.png',
  lightAndDarkMode: true,
};

export const NAV_LINKS: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/members', label: 'Members' },
  { href: '/blog', label: 'Blog' },
  { href: '/join', label: 'Join' },
];

export const SOCIALS: SocialLink[] = [
  {
    name: 'Github',
    href: 'https://github.com/TheCodeChaos',
    linkTitle: 'CodeChaos on Github',
    active: true,
  },
];

export const HOME_PAGE: HomePageConfig = {
  eyebrow: 'Open Coding Club for Students',
  title: 'TURN CHAOS INTO SHIPPED SOFTWARE',
  lead: 'No sleepy meetings. We prototype, test, break, fix, and demo in public. Every week is hands-on. Every member builds.',
  primaryCta: { label: 'Join CodeChaos', href: '/join' },
  secondaryCta: { label: 'Read Club Blog', href: '/blog' },
  marquee: [
    'BUILD FAST',
    'DEBUG HARD',
    'LEARN TOGETHER',
    'SHIP PUBLICLY',
    'PAIR PROGRAM',
    'REVIEW BEFORE MERGE',
    'WRITE BETTER TESTS',
    'CONTRIBUTE OPEN SOURCE',
    'DOCUMENT DECISIONS',
    'DEPLOY EARLY',
    'ITERATE WEEKLY',
    'DEMO WITH CONFIDENCE',
  ],
  cultureTitle: 'FAST FEEDBACK. ZERO EGO.',
  culturePoints: [
    'CodeChaos runs on clear communication, clean commits, and practical mentorship. Beginners and seniors build side by side.',
    'We reward consistency and useful work, not just flashy demos.',
  ],
  tracksTitle: 'MULTI-DISCIPLINE GROWTH',
  tracks: [
    'Code Relay Missions',
    'UI Jam Labs',
    'Bug Hunt Arena',
    'Model Builder Garage',
    'Open Source Merge Squad',
    'Release Night Ops',
  ],
  joinTitle: 'READY TO SHIP YOUR FIRST PROJECT?',
  joinLead:
    'Start from the Join page and connect via our official GitHub profile for projects and updates.',
  terminalCommands: [
    'build --prototype',
    'debug --trace live',
    'ship --demo friday',
    'contribute --open-source',
  ],
};

export const HOME_LABELS = {
  cultureEyebrow: 'Culture',
  tracksEyebrow: 'Skill Tracks',
  nextStepEyebrow: 'Next Step',
  nextPrimaryLabel: 'Go To Join Page',
  nextSecondaryLabel: 'Read Club Blog',
};

export const ABOUT_PAGE: GenericPageConfig = {
  title: 'About CodeChaos',
  description: 'About the open coding club for students.',
  eyebrow: 'About',
  heading: 'OPEN CODING CLUB FOR STUDENTS',
  lead: 'CodeChaos is a student-led coding community focused on practical execution. We build projects, review each other, and ship regularly.',
};

export const ABOUT_CONTENT = {
  missionEyebrow: 'Mission',
  missionHeading: 'TURN CURIOSITY INTO CAPABILITY',
  missionLead:
    'Our mission is to make software building approachable, social, and consistent for every student, regardless of current skill level.',
  principlesEyebrow: 'Principles',
  principlesHeading: 'HOW WE WORK TOGETHER',
  exploreEyebrow: 'Explore',
  exploreHeading: 'SEE TRACKS, BLOGS, AND JOIN FLOW',
  explorePrimaryLabel: 'View Join Guide',
  exploreSecondaryLabel: 'Visit Blog',
};

export const ABOUT_PRINCIPLES = [
  'Learn by building, not by watching',
  'Review code with clarity and kindness',
  'Ship in public to improve faster',
  'Help beginners become contributors quickly',
];

export const JOIN_PAGE: GenericPageConfig = {
  title: 'Join CodeChaos',
  description: 'Join CodeChaos, the open coding club for students.',
  eyebrow: 'Join',
  heading: 'START BUILDING WITH CODECHAOS',
  lead: 'We are currently using direct onboarding links and orientation sessions. Fill-in forms will return later with additional automation.',
};

export const JOIN_CONTENT = {
  onboardingEyebrow: 'Onboarding',
  onboardingHeading: 'YOUR FIRST MONTH FLOW',
  actionsEyebrow: 'Actions',
  actionsHeading: 'USE THE OFFICIAL SOCIAL LINK',
};

export const JOIN_STEPS = [
  'Follow the official GitHub profile',
  'Attend one orientation build session',
  'Pick your first track and sprint team',
  'Ship one mini project in your first month',
];

export const MEMBERS_PAGE: MembersPageConfig = {
  title: 'CodeChaos Members',
  description:
    'Meet CodeChaos members grouped by role, generated from simple JSON and YAML data files.',
  eyebrow: 'Members',
  heading: 'BUILDERS BEHIND CODECHAOS',
  lead: 'This directory is generated from member data files, so contributors can add themselves with a small YAML or JSON entry.',
  emptyState:
    'No published members yet. Add a YAML or JSON file in src/content/members to appear here.',
};

export const MEMBER_ROLE_ORDER = [
  'Core Team',
  'Lead',
  'Maintainer',
  'Mentor',
  'Member',
  'Alumni',
];

export const BLOG_PAGE = {
  title: 'CodeChaos Blog',
  description: 'Latest updates from CodeChaos events and projects.',
  eyebrow: 'Blog',
  heading: 'LATEST FROM CODECHAOS',
};
