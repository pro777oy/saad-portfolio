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
    'Biometric Recognition',
    'Deep Learning',
    'Software Engineering',
    'AI Systems',
    'ML Systems',
  ],
  researchInterestsSummary:
    'My research interests are primarily in Computer Vision and Software Engineering, with a focus on robust image segmentation, biometric recognition, deep learning, and the design of reliable AI-enabled software systems. I am particularly interested in research that connects machine learning with scalable software architectures, model deployment, system reliability, and real-world production environments. Drawing on my background in software engineering, I aim to explore methods for building intelligent systems that are not only accurate, but also maintainable, efficient, and practical to deploy.',
  featuredResearch: 'Improving the Methods of Iris Recognition in Less Cooperative Environments',
  researchExperience: [
    {
      title: 'Undergraduate Researcher, Universiti Teknologi Malaysia',
      period: 'September 2022 – September 2023',
      topic: 'Improving the Methods of Iris Recognition in Less Cooperative Environments',
      tools: ['Python', 'PyTorch', 'OpenCV', 'scikit-learn', 'Albumentations', 'Matplotlib'],
      highlights: [
        'Conducted undergraduate research on improving iris recognition under non-cooperative conditions, including blur, occlusion, illumination variation, and other image degradations.',
        'Reviewed literature on iris recognition, biometric systems, image preprocessing, and computer vision techniques.',
        'Worked with iris image datasets and performed preprocessing, segmentation, and experimental evaluation.',
        'Investigated methods for improving iris recognition performance under challenging imaging conditions.',
        'Analyzed experimental results and compared the performance of different approaches.',
        'Research subsequently contributed to publications in UTM Computing Proceedings and an edited book published by UTM Press.',
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
      name: 'Programming',
      items: ['C#', 'Python', 'C++', 'JavaScript', 'TypeScript', 'Rust', 'Go'],
    },
    {
      name: 'Backend & Web',
      items: ['ASP.NET Core', 'ASP.NET MVC', 'ASP.NET Framework', 'Angular', 'HTML', 'CSS', 'JWT'],
    },
    {
      name: 'Machine Learning / Computer Vision',
      items: ['PyTorch', 'OpenCV', 'scikit-learn', 'Albumentations', 'NumPy', 'Pandas', 'Matplotlib'],
    },
    {
      name: 'Databases',
      items: ['SQL Server', 'PostgreSQL', 'MySQL'],
    },
    {
      name: 'Tools & Platforms',
      items: [
        'Git',
        'Linux (Ubuntu)',
        'AWS',
        'Jira',
        'DBeaver',
        'SQL Server Management Studio',
        'Crystal Reports',
        'Unity 2D',
      ],
    },
  ],
  projects: [
    {
      title: 'Deep Learning with PyTorch Image Segmentation',
      description:
        'Developed a semantic segmentation pipeline using U-Net with an EfficientNet-B0 encoder for accurate pixel-wise classification.',
      technologies: ['Python', 'PyTorch', 'Albumentations', 'OpenCV'],
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
        'Developed a machine learning model to predict thalassemia risk based on clinical and diagnostic features, following an end-to-end ML workflow.',
      technologies: ['Python', 'PyTorch', 'scikit-learn', 'Matplotlib', 'Pandas', 'NumPy'],
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
        'Developed a collaborative web application for planning, assigning, and tracking software development tasks, built to explore component-based architecture using Angular.',
      technologies: ['Angular'],
      features: [
        'Implemented task creation, assignment, and tracking functionality',
        'Enabled team collaboration through shared task visibility',
      ],

      projectLink: {
        label: 'Project Link',
        href: 'https://pro777oy.github.io/easytask/',
      },
    },
  ],
  workExperience: [
    {
      company: 'Dhaka Mercantile Co-operative Bank Ltd.',
      role: 'Senior Technical Officer (Software Engineer)',
      period: 'November 2024 - Present',
      responsibilities: [
        "Designed the database schema and developed the Case Management Application (CMA), deploying it to the organisation's server.",
        'Developed banking application functionality with ASP.NET Core and ASP.NET MVC, and managed SQL Server databases.',
        'Designed and developed Core Banking System (CBS) modules and implemented transactional business logic.',
        'Designed and implemented the Member Transfer module from the ground up.',
        'Contributed to the development of Cheque Book Management functionality and a reconciliation engine.',
        'Contributed to authentication and authorization functionality in the Auth Gateway.',
        'Designed Crystal Reports and integrated them into the application codebase.',
      ],
    },
    {
      company: 'Itransition: Software Development Company (Remote)',
      role: 'Intern .NET Developer (Training Program)',
      period: 'September 2024 – October 2024',
      responsibilities: [
        'Developed and integrated email/password authentication in C#, implementing password hashing and salting, SHA-256/SHA-512 hashing features, and JWT-based authentication and session management.',
        'Built Angular frontend components and user interfaces, and implemented MySQL data storage and retrieval for authentication systems.',
      ],
    },
    {
      company: 'BigLedger Sdn Bhd (Cloud App Software Solutions)',
      role: 'Software Developer Intern',
      period: 'September 2023 – February 2024',
      responsibilities: [
        'Investigated and corrected PostgreSQL data issues in ERP software, collaborating with cross-functional teams to troubleshoot database-related problems.',
        'Maintained AWS server operations through updates and restarts, investigated server slowness, and documented findings to support production troubleshooting.',
        'Tested ERP functionality and verified data flow from backend API endpoints to the frontend.',
        'Provided live technical support to ERP customers, investigating reported issues and guiding users through troubleshooting.',
      ],
    },
  ],
  futureResearchAreas: ['Computer Vision', 'Software Engineering', 'Distributed AI Systems'],
  links: [
    { label: 'GitHub', href: 'https://github.com/pro777oy' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/saadkabiruddin/' },
    { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=wttp814AAAAJ&hl=en&authuser=1' },
  ],
  email: 'uddin.saadkabir@gmail.com',
};
