import type {
  GenericPageConfig,
  HomePageConfig,
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
  { href: '/events', label: 'Events' },
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
  secondaryCta: { label: 'Explore Events', href: '/events' },
  marquee: ['BUILD FAST', 'DEBUG HARD', 'LEARN TOGETHER', 'SHIP PUBLICLY'],
  cultureTitle: 'FAST FEEDBACK. ZERO EGO.',
  culturePoints: [
    'CodeChaos runs on clear communication, clean commits, and practical mentorship. Beginners and seniors build side by side.',
    'We reward consistency and useful work, not just flashy demos.',
  ],
  eventsTitle: 'EVENTS THAT ACTUALLY LEVEL YOU UP',
  events: [
    'Chaos Sprint: 90-minute product build with random constraints',
    'Debug Derby: teams race to fix production-style bug sets',
    'Open Source Night: live contributions with review support',
    'Demo Riot: unfiltered project demos and peer critique',
  ],
  tracksTitle: 'MULTI-DISCIPLINE GROWTH',
  tracks: [
    'Web Engineering',
    'App Development',
    'Competitive Programming',
    'AI Workflows',
    'Open Source Collaboration',
    'System Design Basics',
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
  eventsEyebrow: 'Weekly Formats',
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
  exploreHeading: 'SEE EVENTS, TRACKS, AND CLUB WRITING',
  explorePrimaryLabel: 'View Events',
  exploreSecondaryLabel: 'Visit Blog',
};

export const ABOUT_PRINCIPLES = [
  'Learn by building, not by watching',
  'Review code with clarity and kindness',
  'Ship in public to improve faster',
  'Help beginners become contributors quickly',
];

export const EVENTS_PAGE: GenericPageConfig = {
  title: 'CodeChaos Events',
  description: 'Weekly coding club events and practical sessions.',
  eyebrow: 'Events',
  heading: 'WEEKLY FORMATS BUILT FOR PRACTICAL SKILL',
  lead: 'Every event is designed to produce code output, stronger teamwork, and better engineering habits.',
};

export const EVENTS_CONTENT = {
  formatsEyebrow: 'Formats',
  formatsHeading: 'WHAT RUNS EACH MONTH',
  cadenceEyebrow: 'Cadence',
  cadenceHeading: 'CONSISTENT PRACTICE CYCLE',
  joinEyebrow: 'Join In',
  joinHeading: 'START ATTENDING THIS WEEK',
  joinPrimaryLabel: 'Join Page',
  joinSecondaryLabel: 'Read Event Recaps',
};

export const EVENT_FORMATS = [
  'Chaos Sprint: Build a product prototype in 90 minutes',
  'Debug Derby: Pair-based debugging with timed checkpoints',
  'Code Review Pitstop: Pull request quality workshops',
  'Open Source Night: First contributions to real repositories',
  'Demo Riot: Project showcase with rapid-fire feedback',
];

export const EVENT_CADENCE = {
  left: [
    'Monday: Challenge briefing',
    'Wednesday: Team build lab',
    'Friday: Demo and review',
  ],
  right: [
    'Monthly: Open showcase',
    'Quarterly: Internal hackday',
    'Semester: Project expo',
  ],
};

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

export const BLOG_PAGE = {
  title: 'CodeChaos Blog',
  description: 'Latest updates from CodeChaos events and projects.',
  eyebrow: 'Blog',
  heading: 'LATEST FROM CODECHAOS',
};
