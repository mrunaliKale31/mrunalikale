import { Project, Certification, ColorSwatch } from './types';

export const DARK_PALETTE: ColorSwatch[] = [
  {
    name: 'Canvas Background',
    hex: '#0A0A0A',
    description: 'Deepest neutral dark grey for the canvas. Avoids harsh #000000 to keep contrast balanced and readable.',
    usage: 'Body, main sections background'
  },
  {
    name: 'Card Background',
    hex: '#161616',
    description: 'Subtle container level-1 grey. Simulates depth through layered borders and subtle background differences.',
    usage: 'Grid cards, sidebar wrappers, input container backgrounds'
  },
  {
    name: 'Primary Accent',
    hex: '#FFFFFF',
    description: 'High-contrast stark white. Used selectively to guide the eye directly to headers and vital controls.',
    usage: 'Main typography, primary solid buttons, key indicators'
  },
  {
    name: 'Secondary Neutral',
    hex: '#8F8F8F',
    description: 'Muted slate/grey. Perfect for secondary copy, captions, and structural borders.',
    usage: 'Paragraph descriptions, secondary labels, divider lines'
  },
  {
    name: 'Hyper-Accent (Vercel Amber)',
    hex: '#F5A623',
    description: 'Saturated energetic amber. Used minimally for micro-focus cues and progress ticks.',
    usage: 'Status tags, interactive borders on hover, key milestones'
  }
];

export const LIGHT_PALETTE: ColorSwatch[] = [
  {
    name: 'Canvas Background',
    hex: '#FAFAFA',
    description: 'Premium light grey/off-white canvas. Gentle on the eyes, mimicking a museum card or high-grade paper.',
    usage: 'Body, main sections background'
  },
  {
    name: 'Card Background',
    hex: '#FFFFFF',
    description: 'Stark white for elevated elements. Employs soft shadows to express clean elevation.',
    usage: 'Grid cards, sidebar wrappers, input fields'
  },
  {
    name: 'Primary Accent',
    hex: '#0F0F0F',
    description: 'Near-black deep charcoal. Maintains supreme readability without the clinical look of absolute black.',
    usage: 'Main typography, primary solid buttons, key indicators'
  },
  {
    name: 'Secondary Neutral',
    hex: '#606060',
    description: 'Medium slate/grey. Ideal for supportive description paragraphs and sub-navigation text.',
    usage: 'Paragraph descriptions, secondary labels, divider lines'
  },
  {
    name: 'Hyper-Accent (Linear Purple)',
    hex: '#5E6AD2',
    description: 'Polished royal indigo. Provides a sleek, high-end highlight tone for interactive elements.',
    usage: 'Status tags, interactive borders on hover, focus highlights'
  }
];

export const SAMPLE_PROJECTS: Project[] = [
  {
    id: 'multi-provider-mcp',
    title: 'Multi-Provider MCP Server',
    shortDescription: 'A scalable Model Context Protocol (MCP) server that unifies multiple AI providers behind a single interface.',
    longDescription: 'A scalable Model Context Protocol (MCP) server that unifies multiple AI providers behind a single interface. The project was designed to simplify AI tool integration by allowing clients to communicate with different providers without changing their implementation.',
    problemStatement: 'Most AI providers expose different APIs and authentication methods, forcing developers to rewrite client logic whenever they switch providers.',
    solution: 'This project provides a standardized MCP interface that abstracts provider-specific implementations through an adapter-based architecture where each provider is implemented as an independent module.',
    features: [
      'Support for 30+ MCP tools',
      'Multi-provider architecture with adapter-based plugin system',
      'Standardized API interface for consistent integration',
      'Extensible provider integration without core modifications',
      'Modular request routing with centralized error handling',
      'REST API endpoints for easy client access'
    ],
    techStack: ['Python', 'Model Context Protocol (MCP)', 'REST APIs', 'JSON', 'AsyncIO', 'System Design'],
    category: 'Full-Stack',
    status: 'Completed',
    banner: 'MCP Server Architecture',
    githubUrl: 'https://github.com/mrunaliKale31/mcp-multi-provider-demo',
    liveDemoUrl: '#',
    docUrl: '#',
    challenges: 'Designing a scalable architecture, managing provider-specific API differences, keeping the system modular without increasing complexity, and standardizing tool responses across different providers.',
    lessonsLearned: 'System architecture design, API abstraction techniques, modular software engineering, scalable backend development, and design patterns for extensibility.',
    futureImprovements: 'Add authentication and user management, Docker deployment, provider health monitoring, usage analytics dashboard, plugin marketplace, and load balancing.'
  },
  {
    id: 'feedbackpro-security-lab',
    title: 'FeedbackPRO – Web Security Testing Lab',
    shortDescription: 'A deliberately vulnerable web application developed as a safe environment for learning and demonstrating web security testing techniques.',
    longDescription: 'A deliberately vulnerable web application developed as a safe environment for learning and demonstrating web security testing techniques. The platform allows developers and students to understand common vulnerabilities through hands-on experimentation.',
    problemStatement: 'Learning web security often requires intentionally vulnerable applications, but finding safe, controlled environments for practice is difficult.',
    solution: 'Built a full-stack web application with intentionally insecure modules. Each vulnerability was implemented independently, allowing users to study attack vectors, exploit behavior, and understand mitigation techniques in a safe environment.',
    features: [
      'Stored XSS vulnerability demonstration',
      'Reflected XSS attack scenarios',
      'SQL Injection modules',
      'Brute Force Authentication testing',
      'Educational attack scenarios with documentation',
      'Secure isolated environment for testing',
      'Modular vulnerability implementation'
    ],
    techStack: ['TypeScript', 'React', 'Node.js', 'Express', 'HTML', 'CSS', 'JavaScript'],
    category: 'Frontend / Tooling',
    status: 'Completed',
    banner: 'Security Testing Lab',
    githubUrl: 'https://github.com/mrunaliKale31/Vulnerabilities.app5',
    liveDemoUrl: 'https://feedbackpromock.vercel.app/',
    docUrl: '#',
    challenges: 'Simulating realistic vulnerabilities, preventing vulnerabilities from affecting unrelated modules, and maintaining educational value while keeping the application stable.',
    lessonsLearned: 'Web application security, OWASP Top 10 vulnerabilities, secure coding practices, full-stack application architecture, and ethical security testing.',
    futureImprovements: 'Add CSRF demonstrations, SSRF modules, file upload vulnerabilities, security challenge mode, integrated walkthroughs, and automated scoring system.'
  },
  {
    id: 'clickaware-phishing',
    title: 'ClickAware – URL Phishing Detection Platform',
    shortDescription: 'A machine learning-powered phishing detection platform that analyzes URLs and predicts whether they are legitimate or malicious.',
    longDescription: 'A machine learning-powered phishing detection platform that analyzes URLs and predicts whether they are legitimate or malicious. The project focuses on improving cybersecurity awareness by helping users identify phishing attacks before interacting with suspicious websites.',
    problemStatement: 'Phishing attacks continue to be one of the most common cybersecurity threats. Many users struggle to identify malicious URLs before clicking them.',
    solution: 'Collected URL datasets, performed feature extraction, trained machine learning models, and integrated the trained model into a Flask web application with an intuitive interface that provides instant risk assessment.',
    features: [
      'URL risk prediction using machine learning',
      'Real-time phishing detection',
      'Feature extraction from URL patterns',
      'Instant security assessment',
      'User-friendly web interface',
      'Threat awareness dashboard',
      'Prediction confidence scoring'
    ],
    techStack: ['Python', 'Flask', 'Machine Learning', 'Scikit-learn', 'Pandas', 'NumPy', 'HTML', 'CSS'],
    category: 'Full-Stack',
    status: 'Completed',
    banner: 'ML Phishing Detection',
    githubUrl: 'https://github.com/mrunaliKale31/ClickAware',
    liveDemoUrl: '#',
    docUrl: '#',
    challenges: 'Dataset preprocessing, selecting useful URL features, reducing false positives, and improving prediction accuracy across diverse phishing patterns.',
    lessonsLearned: 'Machine learning workflow, cybersecurity fundamentals, data preprocessing, model evaluation techniques, and Flask deployment.',
    futureImprovements: 'Develop browser extension, implement real-time URL scanning, add API integration, explore deep learning models, integrate threat intelligence feeds, and build URL reputation history.'
  },
  {
    id: 'vosk-lomiri-speech',
    title: 'VOSK Lomiri – Speech-to-Text System',
    shortDescription: 'An open-source contribution enabling offline multilingual speech-to-text functionality for Ubuntu Touch devices.',
    longDescription: 'An open-source group project contribution to the VOSK Lomiri project that enables offline multilingual speech-to-text functionality for Ubuntu Touch devices. The project improves accessibility by providing reliable voice input without requiring an internet connection. This project was presented at the FOSS FEST National Hackathon (September 2025).',
    problemStatement: 'Many speech recognition systems rely on cloud services, making them unsuitable for privacy-focused or offline environments.',
    solution: 'Integrated Python speech recognition components with the Lomiri interface, configured Linux-based workflows, and enabled local speech recognition directly on Ubuntu Touch devices while maintaining compatibility.',
    features: [
      'Offline speech recognition capabilities',
      'Multilingual support for diverse users',
      'Ubuntu Touch system integration',
      'Real-time voice input processing',
      'Terminal-based workflow support',
      'Privacy-focused local processing',
      'Open-source architecture'
    ],
    techStack: ['Python', 'QML', 'Linux', 'Shell Scripting', 'VOSK Speech Recognition'],
    category: 'Productivity',
    status: 'Completed',
    banner: 'Speech Recognition System',
    githubUrl: 'https://github.com/mrunaliKale31/VOSK-LOMIRI',
    liveDemoUrl: 'https://www.youtube.com/watch?v=vZZUaXbvtHk',
    docUrl: '#',
    challenges: 'Understanding an existing large codebase, Linux environment configuration, integrating Python with QML, and managing offline speech models efficiently.',
    lessonsLearned: 'Open-source collaboration, Linux application development, speech recognition systems, QML integration, and working with large production codebases.',
    futureImprovements: 'Add additional language models, optimize inference speed, improve UI integration, implement voice command support, enhance transcription accuracy, and optimize mobile performance.'
  },
  {
    id: 'academia-ace-platform',
    title: 'Academia Ace – Student Learning & Testing Platform',
    shortDescription: 'A modern full-stack web application developed as a learning platform for students, combining authentication, database management, and interactive features.',
    longDescription: 'Academia Ace is a modern full-stack web application developed as a learning platform for students, combining authentication, database management, and interactive features. The project served as a practical environment for experimenting with modern web development, backend integration, and testing workflows using React and Supabase.',
    problemStatement: 'Students often require a centralized platform to access learning resources, collaborate, and manage academic interactions.',
    solution: 'Academia Ace was built as a proof-of-concept to explore how modern frontend technologies and Backend-as-a-Service (BaaS) can be combined to rapidly develop scalable educational applications while serving as a platform for testing new features and automation workflows.',
    features: [
      'Secure user authentication',
      'Student login and registration',
      'Supabase database integration',
      'Responsive user interface',
      'Modular React component architecture',
      'Fast development with Vite',
      'Scalable project structure',
      'Testing-ready development environment'
    ],
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Supabase', 'Vitest'],
    category: 'Full-Stack',
    status: 'Completed',
    banner: 'Educational Platform',
    githubUrl: '#',
    liveDemoUrl: '#',
    docUrl: '#',
    challenges: 'Integrating frontend components with Supabase services, managing authentication and protected routes, structuring reusable React components, and configuring the project for scalability and testing.',
    lessonsLearned: 'Full-stack application architecture, authentication and authorization workflows, Backend-as-a-Service (Supabase), modern React development practices, TypeScript application design, component reusability and maintainability, and frontend testing workflows.',
    futureImprovements: 'Add AI-powered student doubt assistance, real-time chat and discussion forums, assignment submission and grading, teacher and administrator dashboards, notification and announcement system, analytics and student progress tracking, and automated testing with CI/CD integration.'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cert-1',
    title: 'Linux for Developers',
    issuer: 'Coursera × The Linux Foundation',
    date: 'Jun 2025',
    credentialUrl: '/certificates/Linux for Developers Certificate.pdf',
    badgeColor: 'from-blue-500/10 to-indigo-500/10 border-blue-500/20'
  },
  {
    id: 'cert-2',
    title: 'C Training',
    issuer: 'Spoken Tutorial • IIT Bombay',
    date: 'Jan 2024',
    credentialUrl: '/certificates/Completion of C Training.png',
    badgeColor: 'from-orange-500/10 to-yellow-500/10 border-orange-500/20'
  },
  {
    id: 'cert-3',
    title: 'Computational Thinking for Problem Solving',
    issuer: 'University of Pennsylvania via Coursera',
    date: 'Dec 2023',
    credentialUrl: '/certificates/Computational Thinking for Problem Solving.jpeg',
    badgeColor: 'from-red-500/10 to-pink-500/10 border-red-500/20'
  },
  {
    id: 'cert-4',
    title: 'Programming Essentials in C++',
    issuer: 'Cisco Networking Academy',
    date: 'Apr 2024',
    credentialUrl: '/certificates/MrunaliKale-C programming-certificate.pdf',
    badgeColor: 'from-cyan-500/10 to-blue-500/10 border-cyan-500/20'
  },
  {
    id: 'cert-5',
    title: 'Python 3.4.3 Training',
    issuer: 'Spoken Tutorial • IIT Bombay',
    date: 'May 2024',
    credentialUrl: '/certificates/Mrunali Kale.pdf',
    badgeColor: 'from-green-500/10 to-emerald-500/10 border-green-500/20'
  },
  {
    id: 'cert-6',
    title: 'Java Training',
    issuer: 'Spoken Tutorial • IIT Bombay',
    date: 'May 2025',
    credentialUrl: '/certificates/Certification Document.pdf',
    badgeColor: 'from-purple-500/10 to-violet-500/10 border-purple-500/20'
  },
  {
    id: 'cert-7',
    title: 'PHP & MySQL Training',
    issuer: 'EduPyramids • SINE IIT Bombay',
    date: 'Nov 2025',
    credentialUrl: '/certificates/MRUNALI-KALE-Participant-Certificate.pdf',
    badgeColor: 'from-indigo-500/10 to-blue-500/10 border-indigo-500/20'
  },
  {
    id: 'cert-8',
    title: 'Fundamentals of Machine Learning & AI',
    issuer: 'AWS Training & Certification',
    date: 'Dec 2025',
    credentialUrl: '/certificates/AWS Fundamentals of ML & AL.pdf',
    badgeColor: 'from-amber-500/10 to-orange-500/10 border-amber-500/20'
  },
  {
    id: 'cert-9',
    title: 'Machine Learning Fundamentals Quiz',
    issuer: 'AWS Training & Certification',
    date: 'Dec 2025',
    credentialUrl: '/certificates/Quiz - ML Fundamentals.pdf',
    badgeColor: 'from-yellow-500/10 to-amber-500/10 border-yellow-500/20'
  },
  {
    id: 'cert-10',
    title: 'IT Leadership Professional Certificate',
    issuer: 'ServiceNow',
    date: 'Feb 2024',
    credentialUrl: '/certificates/CertificateOfCompletion_ServiceNow IT Leadership Professional Certificate.pdf',
    badgeColor: 'from-teal-500/10 to-cyan-500/10 border-teal-500/20'
  },
  {
    id: 'cert-11',
    title: 'FOSS FEST September 2025 – National Hackathon',
    issuer: 'OpenSource Science B.V.',
    date: 'Sep 2025',
    credentialUrl: '/certificates/MRUNALI-KALE-Participant-Certificate copy.pdf',
    badgeColor: 'from-lime-500/10 to-green-500/10 border-lime-500/20'
  },
  {
    id: 'cert-12',
    title: 'Open Source Linux Internship',
    issuer: 'MIT-ADT University × OSSCi Netherlands',
    date: '2025',
    credentialUrl: '/certificates/MRUNALI-KALE-Participant-Certificate (1).pdf',
    badgeColor: 'from-sky-500/10 to-blue-500/10 border-sky-500/20'
  }
];
