export interface Project {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  tags: string[];
  link: string;
  github: string;
  features: string[];
  technologies: string[];
  challenges: string;
  results: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'InsightScribe',
    shortDescription: 'AI powered web-based platform that processes research PDFs into summarized text, podcasts and presentation slides.',
    fullDescription: 'AI-powered research processor that converts academic PDFs into summaries, audio podcasts, and PowerPoint slides. Streamlined file-to-output processing with a Flask backend and Axios-based React.js frontend.',
    image: '/InsightScribe.png',
    tags: ['React', 'Flask' , 'AI'],
    link: '',
    github: 'https://github.com/Prince5598/InsightScribe',
    features: [
      'Summarization',
      'Podcast Generation',
      'PPT Generation'
    ],
    technologies: ['React', 'Flask','GeminiAPI' ,'Tailwind CSS'],
    challenges: 'The main challenge was implementing real-time inventory synchronization across multiple warehouses while maintaining data consistency. This was solved using Redis for caching and implementing websockets for live updates.',
    results: ' Successfully tested on 20+ research papers for accuracy and performance and reduced manual research review time by 70%.',
  },
  {
    id: 2,
    title: 'FraudGuard',
    shortDescription: 'End-to-end system to predict fraudulent transactions using ML, with dashboards for users and admins.',
    fullDescription: 'Created an intelligent real-time transaction fraud detection system using Random Forest and XGBoost models to classify financial transactions.',
    image: '/Fraud.png',
    tags: ['React', 'Machine Learning', 'Node.js', 'MongoDB'],
    link: '',
    github: 'https://github.com/Prince5598/FraudGuard',
    features: [
      'Fraud-Report',
      'Admin dashboard for monitoring all transactions and user activity',
      'User dashboard for submitting transactions with instant fraud analysis',
      'Advanced search and filtering for users and transactions',
      'Analytics dashboard with charts for fraud statistics and trends',
      'Project organization and categorization',
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Machine Learning'],
    challenges: 'Implementing real-time updates across multiple clients required careful state management and conflict resolution. Used operational transformation to handle concurrent edits.',
    results: 'Trained and validated fraud detection models on 104K+ labeled transactions, achieving 99% accuracy.',
  },
  {
    id: 3,
    title: 'File Storage & Management Platform',
    shortDescription: 'Full-stack file storage app with folder organization, trash restore, previews and download support.',
    fullDescription: 'System enables users to upload, organize, preview, and download files with ease. It supports nested folder structures, document and image previews, starred items, and a robust trash-and-restore mechanism for safe data handling.',
    image: '/analytics-dashboard.png',
    tags: ['Next', 'PostgreSql'],
    link: 'https://analytics-demo.com',
    github: 'https://github.com/yourusername/analytics-dashboard',
    features: [
      'Secured with Clerk Authentication',
      'Image preview',
      'Starred items for quick access to important files',
      'Soft-delete trash system with restore and permanent delete options' ],
    technologies: ['Next.js', 'PostgreSql', 'Drizzle ORM', 'Clerk', 'ImageKit'],
    challenges: 'Rendering large datasets efficiently required implementing data virtualization and pagination. Performance optimization was crucial for smooth interactions.',
    results: 'Successfully designed a system with 7+ file type support and upload files up to 5MB.',
  },
];
