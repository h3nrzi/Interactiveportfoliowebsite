export const primaryCategories = [
  'All',
  'Web Applications',
  'Mobile Applications',
  'Backend & APIs',
  'Bots',
  'AI & Machine Learning',
  'DevOps & Infrastructure',
  'Personal/Experimental',
] as const;

export type PrimaryCategory = typeof primaryCategories[number];

export const subCategories: Record<Exclude<PrimaryCategory, 'All'>, string[]> = {
  'Web Applications': [
    'All',
    'Corporate Website',
    'E-commerce Platform',
    'SaaS Product',
    'Dashboard',
    'Landing Page',
    'PWA',
  ],
  'Mobile Applications': [
    'All',
    'iOS Native',
    'Android Native',
    'React Native',
    'Flutter',
  ],
  'Backend & APIs': [
    'All',
    'REST API',
    'GraphQL API',
    'Microservices',
    'Authentication Systems',
    'Real-time Services',
    'Serverless',
  ],
  'Bots': [
    'All',
    'Utility Bot',
    'Moderation Bot',
    'Entertainment Bot',
    'Notification Bot',
  ],
  'AI & Machine Learning': [
    'All',
    'Computer Vision',
    'NLP',
    'Recommendation Systems',
    'Predictive Analytics',
    'Generative AI',
    'LLM Integration',
  ],
  'DevOps & Infrastructure': [
    'All',
    'CI/CD Pipelines',
    'Cloud Infrastructure',
    'Docker & Kubernetes',
    'Monitoring & Logging',
    'Terraform',
  ],
  'Personal/Experimental': [
    'All',
    'Side Project',
    'Hackathon',
    'Proof of Concept',
    'Fun Tool',
    'Experiment',
  ],
};

export const categoryColors: Record<PrimaryCategory, string> = {
  'All': 'bg-gray-500/10 text-gray-700 dark:text-gray-300',
  'Web Applications': 'bg-blue-500/10 text-blue-700 dark:text-blue-300',
  'Mobile Applications': 'bg-purple-500/10 text-purple-700 dark:text-purple-300',
  'Backend & APIs': 'bg-green-500/10 text-green-700 dark:text-green-300',
  'Bots': 'bg-yellow-500/10 text-yellow-700 dark:text-yellow-300',
  'AI & Machine Learning': 'bg-red-500/10 text-red-700 dark:text-red-300',
  'DevOps & Infrastructure': 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-300',
  'Personal/Experimental': 'bg-pink-500/10 text-pink-700 dark:text-pink-300',
};
