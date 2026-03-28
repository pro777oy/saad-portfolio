export type SocialLink = {
  readonly label: string;
  readonly href: string;
};

export type SkillCategory = {
  readonly name: string;
  readonly items: readonly string[];
};

export type PortfolioProject = {
  readonly title: string;
  readonly description: string;
  readonly technologies: readonly string[];
  readonly features: readonly string[];
  readonly projectLink?: SocialLink;
};

export type WorkExperience = {
  readonly company: string;
  readonly role: string;
  readonly period: string;
  readonly responsibilities: readonly string[];
};

export type EducationSummary = {
  readonly period: string;
  readonly degree: string;
  readonly specialization: string;
  readonly institution: string;
  readonly location: string;
  readonly cgpa: string;
  readonly last60CreditsGpa: string;
  readonly achievements: readonly string[];
  readonly thesis: string;
};

export type ResearchExperience = {
  readonly title: string;
  readonly period: string;
  readonly topic: string;
  readonly tools: readonly string[];
  readonly highlights?: readonly string[];
  readonly referenceLabel?: string;
  readonly referenceUrl?: string;
};

export type Certification = {
  readonly name: string;
  readonly issuer: string;
  readonly issuedOn: string;
  readonly credentialId?: string;
  readonly credentialUrl?: string;
  readonly skills?: readonly string[];
};

export type PortfolioContent = {
  readonly name: string;
  readonly title: string;
  readonly intro: string;
  readonly bio: string;
  readonly education: EducationSummary;
  readonly researchInterests: readonly string[];
  readonly researchInterestsSummary: string;
  readonly featuredResearch: string;
  readonly researchExperience: readonly ResearchExperience[];
  readonly certifications: readonly Certification[];
  readonly skills: readonly SkillCategory[];
  readonly projects: readonly PortfolioProject[];
  readonly workExperience: readonly WorkExperience[];
  readonly futureResearchAreas: readonly string[];
  readonly links: readonly SocialLink[];
  readonly email: string;
};

export const portfolioContent: PortfolioContent = {
  name: 'Saad Kabir Uddin',
  title: 'Software Engineer | Computer Vision & Machine Learning Enthusiast',
  intro:
    'I design and build scalable full-stack applications, focusing on clean architecture and maintainable systems.',
  bio: 'I am a software engineer specializing in full-stack web development and building reliable, user-focused applications. I enjoy solving complex problems and continuously improving system design. Alongside my engineering work, I have a strong interest in AI and computer vision research, particularly in applying intelligent techniques to real-world challenges.',
  education: {
    period: 'March 2020 - March 2024',
    degree: 'Bachelor of Computer Science (BSc)',
    specialization: 'Software Engineering (SE)',
    institution: 'Universiti Teknologi Malaysia (UTM)',
    location: 'Johor, Malaysia',
    cgpa: '3.41/4.00',
    last60CreditsGpa: '3.54/4.00',
    achievements: ["Dean's list award in 2 semesters"],
    thesis: 'Improving the Methods of Iris Recognition in Less Cooperative Environments',
  },
  researchInterests: [
    'Computer Vision',
    'Image Segmentation',
    'Natural Language Processing',
    'Scalable AI Systems',
    'Distributed Systems',
  ],
  researchInterestsSummary:
    'My research interests lie at the intersection of Computer Vision, Natural Language Processing, and Distributed Systems. I am particularly interested in developing advanced methodologies for image segmentation and language understanding, while also investigating scalable system architectures and distributed computing frameworks that enable the efficient deployment of AI models in real-world applications. Drawing from my background in software engineering and system development, I am especially interested in designing systems that seamlessly integrate AI capabilities into large-scale, production-ready platforms.',
  featuredResearch: 'Improving the Methods of Iris Recognition in Less Cooperative Environments',
  researchExperience: [
    {
      title: 'Undergraduate Research Assistant, Universiti Teknologi Malaysia',
      period: 'September 2022 – September 2023',
      topic:
        'Improving the Methods of Iris Recognition in Less Cooperative Environments, focused on biometric reliability in non-cooperative conditions.',
      tools: ['Python', 'PyTorch', 'OpenCV', 'scikit-learn', 'Albumentations', 'Matplotlib'],
      highlights: [
        'Worked on a research project titled "Improving the Methods of Iris Recognition in Less Cooperative Environments".',
        'Assisted in research on iris recognition under non-cooperative conditions such as blur, occlusion, and illumination variation.',
        'Conducted literature review on biometric recognition and computer vision techniques.',
        'Worked with iris image datasets and implemented preprocessing and segmentation experiments.',
        'Analysed experimental results to evaluate performance of iris recognition approaches.',
      ],
    },
  ],
  certifications: [
    {
      name: 'Foundations of Coding Back-End',
      issuer: 'Microsoft (via Coursera)',
      issuedOn: 'March 9, 2026',
      credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/4Z7QNFQJ5A2T',
    },
  ],
  skills: [
    {
      name: 'Languages',
      items: ['C#', 'C++', 'Python', 'Rust', 'Go', 'HTML', 'CSS', 'JavaScript', 'TypeScript'],
    },
    {
      name: 'Frameworks',
      items: ['ASP.NET Core', 'ASP.NET Framework', 'Angular', 'PyTorch', 'Unity 2D'],
    },
    {
      name: 'Technologies',
      items: [
        'SQL Server Management Studio',
        'PostgreSQL',
        'Git',
        'Jira',
        'DBeaver',
        'Ubuntu 24.04.4 (Linux)',
      ],
    },
    {
      name: 'Soft Skills',
      items: ['Problem Solving Skills', 'Teamwork', 'Attention to detail', 'Time management'],
    },
  ],
  projects: [
    {
      title: 'Deep Learning with PyTorch Image Segmentation',
      description:
        'Developed a semantic segmentation pipeline using U-Net with an EfficientNet-B0 encoder for accurate pixel-wise classification.',
      technologies: [
        'Python',
        'PyTorch',
        'Albumentations',
        'OpenCV',
      ],
      features: [
        'Set up GPU runtime and trained for 25 epochs',
        'Custom dataset and dataloader pipeline for masks/images',
        'Combined Dice loss with BCEWithLogitsLoss',
        'Saved best checkpoint from validation loss and ran inference',
      ],
      projectLink: {
        label: 'Open Colab Notebook',
        href: 'https://colab.research.google.com/drive/1yWOlh09kseeSswBDAZEwQuDnvLYih22R?usp=drive_link',
      },
    },
    {
      title: 'Thalassemia Prediction with Machine Learning',
      description:
        'A personal research notebook exploring predictive modeling for thalassemia with a practical ML workflow.',
      technologies: ['Python', 'PyTorch', 'scikit-learn', 'Matplotlib'],
      features: [
        'Data preprocessing and feature preparation workflow',
        'Model experimentation and comparison',
        'Performance analysis with visual outputs',
      ],
      projectLink: {
        label: 'Open Colab Notebook',
        href: 'https://colab.research.google.com/drive/1YXZuQIgNnTpWguKGgcrKjSUxn4CH6LLv?usp=drive_link',
      },
    },
    {
      title: 'Task Management Tool',
      description:
        'A collaborative team workspace for planning, assigning, and monitoring software tasks. Developed as my first Angular project to explore component-based UI development.',
      technologies: ['Angular'],
      features: ['Task tracking', 'Team collaboration', 'Status monitoring'],

      projectLink: {
        label: 'Project Link',
        href: 'https://pro777oy.github.io/easytask/',
      },
    },
  ],
  workExperience: [
    {
      company: 'Dhaka Mercantile Co-operative Bank Ltd.',
      role: 'Software Engineer (Senior Technical Officer)',
      period: 'November 2024 - Present',
      responsibilities: [
        'Worked with ASP.NET MVC Framework and ASP.NET Core.',
        'Used Crystal Report to design and connect reports in the codebase.',
        'Used Microsoft SQL Server Management Studio for database management.',
        'Designed the database schema of a Case Management Application.',
        "Developed the CMA and deployed it to the organisation's server.",
        'Designed and developed modules for the Core Banking System software.',
        'Developed transactional logic for the CBS.',
        'Worked on Member Transfer feature.',
        'Worked on Cheque Book management feature.',
        'Worked on a reconciliation engine.',
      ],
    },
    {
      company: 'Itransition: Software Development Company (Remote)',
      role: 'Intern .NET Developer (Training Program)',
      period: 'September 2024 – October 2024',
      responsibilities: [
        'Worked extensively with C# on implementing security features such as SHA-256 and SHA-512 for hashing.',
        'Developed and integrated user authentication systems using email and password.',
        'Implemented password security through password hashing and salting techniques.',
        'Utilised JWT tokens for secure authentication and session management.',
        'Gained experience with Angular in building front-end components and user interfaces.',
        'Interacted with MySQL database for data storage, retrieval, and management in authentication systems.',
      ],
    },
    {
      company: 'BigLedger Sdn Bhd (Cloud App Software Solutions)',
      role: 'Software Developer Intern',
      period: 'September 2023 – February 2024',
      responsibilities: [
        'Worked extensively with PostgreSQL for database querying, manipulation, and management within an ERP system.',
        'Managed AWS server — updating or restarting server when necessary.',
        'Documented reasons for bad server performance or slowness issues.',
        'Used DBeaver for database administration tasks and Git Bash for data fixing.',
        'Collaborated with cross-functional teams to troubleshoot database-related issues, ensuring uninterrupted ERP functionality.',
        'Provided live customer support for ERP system users, offering technical assistance and troubleshooting guidance.',
        'Worked as a software tester for the ERP system.',
        'Worked with backend API endpoints and ensured data could be viewed on the frontend.',
      ],
    },
  ],
  futureResearchAreas: ['Computer Vision', 'Deep Learning', 'Distributed AI Systems'],
  links: [
    { label: 'GitHub', href: 'https://github.com/pro777oy' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/saadkabiruddin/' },
  ],
  email: 'uddin.saadkabir@gmail.com',
};

