import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const projects = [
  {
    slug: 'ecommerce-fashion-store',
    title: 'Fashion E-commerce Platform',
    description: 'Full-featured online fashion store with cart, checkout, and payment integration',
    content: `A modern e-commerce platform built for a fashion brand with advanced features including product filtering, wishlist, size guides, and secure checkout. Integrated with Stripe for payments and includes an admin dashboard for inventory management.

Key Features:
- Advanced product filtering and search
- Real-time inventory tracking
- Secure payment processing with Stripe
- Order tracking and email notifications
- Admin dashboard for product management
- Mobile-responsive design
- SEO optimized product pages`,
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
    primaryCategory: 'Web Applications',
    subCategory: 'E-commerce Platform',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: true,
  },
  {
    slug: 'saas-project-management',
    title: 'Project Management SaaS',
    description: 'Collaborative project management tool with real-time updates and team workflows',
    content: `A comprehensive SaaS solution for project management featuring team collaboration, task tracking, time management, and reporting. Built with real-time synchronization using WebSockets.

Key Features:
- Real-time collaboration with WebSockets
- Kanban boards and Gantt charts
- Time tracking and reporting
- Team roles and permissions
- File attachments and comments
- Integration with Slack and GitHub
- Custom workflows and automations`,
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Redis', 'Docker'],
    primaryCategory: 'Web Applications',
    subCategory: 'SaaS Product',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: true,
  },
  {
    slug: 'fitness-tracking-mobile',
    title: 'Fitness Tracker Mobile App',
    description: 'Cross-platform fitness tracking app with workout plans and nutrition logging',
    content: `A comprehensive fitness tracking application built with React Native for both iOS and Android platforms. Features include workout tracking, meal logging, progress visualization, and social features.

Key Features:
- Workout plans and exercise library
- Nutrition tracking with barcode scanning
- Progress photos and measurements
- Social feed and challenges
- Integration with Apple Health/Google Fit
- Offline mode support
- Push notifications for reminders`,
    imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800',
    technologies: ['React Native', 'TypeScript', 'Firebase', 'Redux', 'Expo'],
    primaryCategory: 'Mobile Applications',
    subCategory: 'React Native',
    featured: true,
  },
  {
    slug: 'microservices-api-gateway',
    title: 'Microservices API Gateway',
    description: 'Scalable API gateway with rate limiting, authentication, and service discovery',
    content: `A robust API gateway built to handle microservices architecture with advanced features including rate limiting, authentication, load balancing, and service discovery.

Key Features:
- JWT-based authentication and authorization
- Rate limiting and throttling
- Request/response transformation
- Service discovery with Consul
- Circuit breaker pattern
- API versioning
- Comprehensive logging and monitoring
- Docker and Kubernetes deployment`,
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
    technologies: ['Node.js', 'Express', 'Redis', 'Consul', 'Docker', 'Kubernetes'],
    primaryCategory: 'Backend & APIs',
    subCategory: 'Microservices',
    githubUrl: 'https://github.com',
  },
  {
    slug: 'graphql-social-api',
    title: 'Social Media GraphQL API',
    description: 'High-performance GraphQL API for social media platform with real-time subscriptions',
    content: `A complete GraphQL API powering a social media platform with features like posts, comments, likes, follows, and real-time notifications using GraphQL subscriptions.

Key Features:
- GraphQL with Apollo Server
- Real-time subscriptions
- DataLoader for efficient batching
- Image upload with S3
- JWT authentication
- Redis caching layer
- Rate limiting per user
- Comprehensive test coverage`,
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    technologies: ['Node.js', 'GraphQL', 'Apollo Server', 'PostgreSQL', 'Redis', 'AWS S3'],
    primaryCategory: 'Backend & APIs',
    subCategory: 'GraphQL API',
    featured: true,
  },
  {
    slug: 'discord-moderation-bot',
    title: 'Discord Moderation Bot',
    description: 'Advanced Discord bot with auto-moderation, logging, and custom commands',
    content: `A powerful Discord moderation bot with auto-moderation features, comprehensive logging, custom commands, and role management. Used by 500+ servers with 100k+ users.

Key Features:
- Auto-moderation (spam, links, profanity)
- Warning and ban system
- Audit logging
- Custom command creator
- Role reaction menus
- Welcome/goodbye messages
- Ticket system
- Dashboard for configuration`,
    imageUrl: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=800',
    technologies: ['TypeScript', 'Discord.js', 'PostgreSQL', 'Redis', 'Docker'],
    primaryCategory: 'Bots',
    subCategory: 'Moderation Bot',
    githubUrl: 'https://github.com',
  },
  {
    slug: 'ai-image-classifier',
    title: 'AI Image Classification System',
    description: 'Deep learning model for real-time image classification with 95% accuracy',
    content: `A computer vision system using deep learning for real-time image classification. Trained on custom dataset with transfer learning using ResNet architecture.

Key Features:
- Real-time image classification
- 95% accuracy on validation set
- REST API for inference
- Batch processing support
- Model versioning
- A/B testing framework
- Performance monitoring
- Docker deployment`,
    imageUrl: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800',
    technologies: ['Python', 'TensorFlow', 'Keras', 'FastAPI', 'Docker', 'AWS'],
    primaryCategory: 'AI & Machine Learning',
    subCategory: 'Computer Vision',
    featured: true,
  },
  {
    slug: 'chatgpt-integration-platform',
    title: 'ChatGPT Integration Platform',
    description: 'SaaS platform for integrating ChatGPT into business workflows with custom training',
    content: `A platform that allows businesses to integrate ChatGPT into their workflows with custom training on company data, prompt templates, and usage analytics.

Key Features:
- Custom GPT fine-tuning on company data
- Prompt template library
- Multi-channel deployment (web, Slack, API)
- Usage analytics and cost tracking
- Conversation history and feedback
- A/B testing of prompts
- Team collaboration features
- SOC 2 compliant`,
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    technologies: ['Next.js', 'OpenAI API', 'LangChain', 'Pinecone', 'PostgreSQL'],
    primaryCategory: 'AI & Machine Learning',
    subCategory: 'LLM Integration',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    slug: 'kubernetes-deployment-pipeline',
    title: 'Kubernetes CI/CD Pipeline',
    description: 'Automated deployment pipeline with GitOps, monitoring, and auto-scaling',
    content: `A complete CI/CD pipeline implementation using GitOps principles for Kubernetes deployments with automated testing, security scanning, and progressive delivery.

Key Features:
- GitOps with ArgoCD
- Automated testing and security scanning
- Blue-green deployments
- Canary releases with Flagger
- Auto-scaling with HPA
- Monitoring with Prometheus/Grafana
- Centralized logging with ELK
- Secret management with Vault`,
    imageUrl: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800',
    technologies: ['Kubernetes', 'ArgoCD', 'Terraform', 'Jenkins', 'Prometheus', 'Grafana'],
    primaryCategory: 'DevOps & Infrastructure',
    subCategory: 'CI/CD Pipelines',
    githubUrl: 'https://github.com',
  },
  {
    slug: 'aws-serverless-infrastructure',
    title: 'AWS Serverless Infrastructure',
    description: 'Fully serverless architecture on AWS with IaC using Terraform',
    content: `A production-ready serverless infrastructure on AWS built with Infrastructure as Code principles using Terraform. Includes API Gateway, Lambda, DynamoDB, and S3.

Key Features:
- 100% serverless architecture
- Infrastructure as Code with Terraform
- Multi-environment setup
- Auto-scaling and cost optimization
- CloudWatch monitoring and alarms
- CI/CD with GitHub Actions
- Security best practices
- API Gateway with custom domain`,
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
    technologies: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'S3', 'Terraform', 'CloudWatch'],
    primaryCategory: 'DevOps & Infrastructure',
    subCategory: 'Cloud Infrastructure',
    featured: true,
  },
  {
    slug: 'realtime-multiplayer-game',
    title: 'Real-time Multiplayer Game',
    description: 'Browser-based multiplayer game with WebSocket for real-time synchronization',
    content: `A fun multiplayer game built as a side project to experiment with WebSocket technology and real-time synchronization. Features include matchmaking, leaderboards, and spectator mode.

Key Features:
- Real-time gameplay with WebSocket
- Matchmaking system
- Leaderboards and rankings
- Spectator mode
- Custom avatars and skins
- Chat system
- Mobile-responsive controls
- Built in 48 hours for a hackathon`,
    imageUrl: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800',
    technologies: ['React', 'Socket.io', 'Node.js', 'Canvas API', 'Redis'],
    primaryCategory: 'Personal/Experimental',
    subCategory: 'Fun Tool',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    slug: 'developer-productivity-cli',
    title: 'Developer Productivity CLI',
    description: 'Command-line tool to automate common development tasks and workflows',
    content: `A CLI tool built to automate repetitive development tasks like project scaffolding, database migrations, API testing, and deployment. Personal tool that evolved into an open-source project.

Key Features:
- Project scaffolding with templates
- Database migration helpers
- API endpoint testing
- Git workflow automation
- Code snippet management
- Deployment shortcuts
- Plugin system for extensibility
- Cross-platform support`,
    imageUrl: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800',
    technologies: ['Node.js', 'TypeScript', 'Commander.js', 'Inquirer.js'],
    primaryCategory: 'Personal/Experimental',
    subCategory: 'Side Project',
    githubUrl: 'https://github.com',
  },
];

async function main() {
  console.log('🌱 Seeding database...');

  // Clear existing projects
  await prisma.project.deleteMany({});
  console.log('Cleared existing projects');

  // Create projects
  for (const project of projects) {
    await prisma.project.create({
      data: project,
    });
    console.log(`✅ Created project: ${project.title}`);
  }

  console.log('✨ Seeding complete!');
  console.log(`📊 Total projects created: ${projects.length}`);
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
