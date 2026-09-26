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
  readonly secondaryLink?: SocialLink;
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
  title: 'Software Engineer | Reliable Software & ML Systems',
  intro:
    'I build web applications and work mainly on backend and database problems.',
  bio: 'I use C#, ASP.NET, Angular, and SQL Server in my current software engineering role. Before that, I researched iris recognition during my degree and worked on two machine learning projects. I am interested in how to test and maintain ML-based software, as well as how AI tools can help developers.',
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
    'Software Engineering for AI (SE4AI)',
    'Reliable ML Systems',
    'ML Testing, Deployment & Monitoring',
    'Software Architecture & MLOps',
    'Computer Vision',
    'Image Segmentation & Biometric Recognition',
    'AI for Software Engineering (AI4SE)',
  ],
  researchInterestsSummary:
    'I want to study how ML-based applications are tested, deployed, monitored, and maintained. My software engineering work has made me interested in these questions, while my iris-recognition research and ML projects have given me experience with the models themselves. I am also interested in computer vision and in AI tools for software testing and debugging.',
  featuredResearch: 'Improving the Methods of Iris Recognition in Less Cooperative Environments',
  researchExperience: [
    {
      title: 'Undergraduate Researcher, Universiti Teknologi Malaysia',
      period: 'September 2022 – September 2023',
      topic: 'Improving the Methods of Iris Recognition in Less Cooperative Environments',
      tools: ['Python', 'PyTorch', 'OpenCV', 'scikit-learn', 'Albumentations', 'Matplotlib'],
      highlights: [
        'Studied iris recognition with blurred, occluded, and unevenly lit images.',
        'Reviewed work on iris recognition, biometrics, image preprocessing, and computer vision.',
        'Preprocessed iris images, ran segmentation experiments, and compared results under degraded imaging conditions.',
        'This work contributed to a UTM Computing Proceedings paper and a UTM Press book chapter.',
      ],
    },
  ],
  certifications: [
    {
      name: 'Supervised Machine Learning: Regression and Classification',
      issuer: 'DeepLearning.AI and Stanford Online (via Coursera)',
      issuedOn: 'September 13, 2026',
      credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/V6G2JTT5YZ3D',
    },
    {
      name: 'Foundations of Coding Back-End',
      issuer: 'Microsoft (via Coursera)',
      issuedOn: 'March 9, 2026',
      credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/4Z7QNFQJ5A2T',
    },
  ],
  skills: [
    {
      name: 'English — IELTS',
      items: ['Overall: 7.5', 'Listening: 8.5', 'Reading: 8.5', 'Writing: 7', 'Speaking: 6.5'],
    },
    {
      name: 'Programming',
      items: ['C#', 'Python', 'C++', 'JavaScript', 'TypeScript', 'Rust', 'Go'],
    },
    {
      name: 'Backend & Web',
      items: ['ASP.NET Core', 'ASP.NET MVC', 'ASP.NET Framework', 'Angular', 'HTML', 'CSS', 'JWT'],
    },
    {
      name: 'Machine Learning',
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
        'Built a semantic segmentation pipeline with U-Net and an EfficientNet-B0 encoder.',
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
        'Explored thalassemia risk prediction using clinical and diagnostic features.',
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
        'Built an Angular app for creating, assigning, and tracking tasks with a team.',
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
    {
      title: 'DeliveryDash',
      description:
        'Built a browser-based 2D delivery game in Unity and C#.',
      technologies: ['Unity 2D', 'C#', 'WebGL'],
      features: [
        'Implemented player controls, collision-based interactions, delivery mechanics, and game-state logic',
        'Built and deployed the WebGL application through GitHub Pages',
      ],
      projectLink: {
        label: 'GitHub',
        href: 'https://github.com/pro777oy/DeliveryDash',
      },
      secondaryLink: {
        label: 'Live Demo',
        href: 'https://pro777oy.github.io/DeliveryDash/',
      },
    },
  ],
  workExperience: [
    {
      company: 'Dhaka Mercantile Co-operative Bank Ltd.',
      role: 'Senior Technical Officer (Software Engineer)',
      period: 'November 2024 - Present',
      responsibilities: [
        'Designed the database schema for the Case Management Application (CMA), then built and deployed it.',
        'Built application features with ASP.NET Core and ASP.NET MVC and worked with SQL Server databases.',
        'Built Core Banking System (CBS) modules and implemented transaction logic.',
        'Built the Member Transfer module from scratch.',
        'Contributed to Cheque Book Management and a reconciliation engine.',
        'Worked on authentication and authorization in the Auth Gateway.',
        'Created Crystal Reports and integrated them into the application.',
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
  futureResearchAreas: ['Testing and Reliability of ML Systems', 'Model Deployment, Monitoring & Version Management', 'Architecture for ML-enabled Applications', 'Robust Computer Vision Applications', 'AI-assisted Software Testing & Program Repair'],
  links: [
    { label: 'ORCID', href: 'https://orcid.org/0009-0005-3966-5020' },
    { label: 'GitHub', href: 'https://github.com/pro777oy' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/saadkabiruddin/' },
    { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=wttp814AAAAJ&hl=en&authuser=1' },
  ],
  email: 'uddin.saadkabir@gmail.com',
};
