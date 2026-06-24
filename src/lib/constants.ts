import type {
  Service,
  TeamMember,
  Testimonial,
  PortfolioItem,
  Stat,
  ProcessStep,
  NavLink,
  TechCategory,
  MegaMenuService,
} from "@/lib/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const MEGA_SERVICES: MegaMenuService[] = [
  {
    id: "mobile",
    title: "Mobile App Development",
    description: "Native & cross-platform iOS and Android apps",
    icon: "Smartphone",
    href: "/services#mobile",
  },
  {
    id: "web",
    title: "Web Development",
    description: "Full-stack web apps with modern frameworks",
    icon: "Monitor",
    href: "/services#web",
  },
  {
    id: "desktop",
    title: "Desktop Apps",
    description: "Cross-platform desktop applications",
    icon: "AppWindow",
    href: "/services#desktop",
  },
  {
    id: "design",
    title: "UI/UX Design",
    description: "User-centred design and prototyping",
    icon: "Palette",
    href: "/services#design",
  },
  {
    id: "api",
    title: "API & Backend",
    description: "Scalable REST, GraphQL, and microservices",
    icon: "Server",
    href: "/services#api",
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    description: "AWS, GCP, Docker, Kubernetes, CI/CD",
    icon: "Cloud",
    href: "/services#cloud",
  },
  {
    id: "ai",
    title: "AI Integration",
    description: "LLMs, computer vision, and ML pipelines",
    icon: "Brain",
    href: "/services#ai",
  },
];

export const TECH_CATEGORIES: TechCategory[] = [
  {
    label: "Mobile",
    items: [
      { name: "React Native", href: "/services#mobile" },
      { name: "Flutter", href: "/services#mobile" },
      { name: "Swift (iOS)", href: "/services#mobile" },
      { name: "Kotlin (Android)", href: "/services#mobile" },
      { name: "Expo", href: "/services#mobile" },
    ],
  },
  {
    label: "Web",
    items: [
      { name: "React / Next.js", href: "/services#web" },
      { name: "Vue / Nuxt", href: "/services#web" },
      { name: "Angular", href: "/services#web" },
      { name: "TypeScript", href: "/services#web" },
      { name: "tRPC / Remix", href: "/services#web" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", href: "/services#api" },
      { name: "Python / Django", href: "/services#api" },
      { name: "Go", href: "/services#api" },
      { name: "GraphQL", href: "/services#api" },
      { name: "REST APIs", href: "/services#api" },
    ],
  },
  {
    label: "Database",
    items: [
      { name: "PostgreSQL", href: "/services#api" },
      { name: "MongoDB", href: "/services#api" },
      { name: "Redis", href: "/services#api" },
      { name: "Firebase", href: "/services#api" },
      { name: "Supabase", href: "/services#api" },
    ],
  },
  {
    label: "Cloud & DevOps",
    items: [
      { name: "AWS", href: "/services#cloud" },
      { name: "Google Cloud", href: "/services#cloud" },
      { name: "Docker", href: "/services#cloud" },
      { name: "Kubernetes", href: "/services#cloud" },
      { name: "Terraform", href: "/services#cloud" },
    ],
  },
  {
    label: "AI & ML",
    items: [
      { name: "OpenAI API", href: "/services#ai" },
      { name: "LangChain", href: "/services#ai" },
      { name: "Computer Vision", href: "/services#ai" },
      { name: "ML Pipelines", href: "/services#ai" },
      { name: "Vector Databases", href: "/services#ai" },
    ],
  },
];

export const SERVICES: Service[] = [
  {
    id: "mobile",
    slug: "mobile",
    title: "Mobile App Development",
    shortDesc: "Native & cross-platform iOS and Android apps",
    description:
      "We craft high-performance mobile experiences for iOS and Android using React Native, Flutter, Swift, and Kotlin. From MVP to enterprise scale, we build apps users love.",
    icon: "Smartphone",
    techStack: ["React Native", "Flutter", "Swift", "Kotlin", "Expo"],
    features: [
      "Native iOS & Android development",
      "Cross-platform with React Native & Flutter",
      "Offline-first architecture",
      "Push notifications & real-time features",
      "App Store & Play Store deployment",
      "Ongoing maintenance & updates",
    ],
    color: "#3b82f6",
  },
  {
    id: "web",
    slug: "web",
    title: "Web Development",
    shortDesc: "Full-stack web platforms built for scale",
    description:
      "From landing pages to complex SaaS products, we build fast, accessible, and SEO-optimised web applications using Next.js, React, and modern back-end technologies.",
    icon: "Monitor",
    techStack: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL"],
    features: [
      "Server-side rendering & static generation",
      "Progressive Web Apps (PWA)",
      "E-commerce & payment integration",
      "SEO optimisation & Core Web Vitals",
      "Accessible WCAG 2.1 compliant UI",
      "CMS integration (Sanity, Contentful)",
    ],
    color: "#a855f7",
  },
  {
    id: "desktop",
    slug: "desktop",
    title: "Desktop App Development",
    shortDesc: "Cross-platform desktop software",
    description:
      "Build powerful desktop applications that run natively on Windows, macOS, and Linux using Electron, Tauri, and platform-native frameworks — with web-tech efficiency.",
    icon: "AppWindow",
    techStack: ["Electron", "Tauri", "React", "TypeScript", ".NET"],
    features: [
      "Windows, macOS & Linux support",
      "Native OS integration & system tray",
      "Offline functionality",
      "Auto-updater & code signing",
      "Hardware access (Bluetooth, USB, GPU)",
      "Enterprise licensing & deployment",
    ],
    color: "#22d3ee",
  },
  {
    id: "design",
    slug: "design",
    title: "UI/UX Design",
    shortDesc: "User-centred design that converts",
    description:
      "We research, wireframe, prototype, and test every pixel. Our design process is grounded in user psychology and business goals — beautiful and purposeful.",
    icon: "Palette",
    techStack: ["Figma", "Adobe XD", "Lottie", "Storybook", "Framer"],
    features: [
      "User research & persona mapping",
      "Information architecture",
      "Interactive prototypes",
      "Design systems & component libraries",
      "Usability testing",
      "Handoff-ready Figma files",
    ],
    color: "#f59e0b",
  },
  {
    id: "api",
    slug: "api",
    title: "API & Backend Development",
    shortDesc: "Scalable, secure server-side engineering",
    description:
      "We architect and build reliable backends — REST, GraphQL, gRPC, microservices. From authentication to real-time data pipelines, your backend is in safe hands.",
    icon: "Server",
    techStack: ["Node.js", "Python", "Go", "GraphQL", "PostgreSQL", "Redis"],
    features: [
      "RESTful & GraphQL API design",
      "Authentication (OAuth, JWT, SAML)",
      "Real-time with WebSockets",
      "Database design & optimisation",
      "Caching & performance tuning",
      "API documentation (OpenAPI)",
    ],
    color: "#10b981",
  },
  {
    id: "cloud",
    slug: "cloud",
    title: "Cloud & DevOps",
    shortDesc: "Infrastructure that scales with you",
    description:
      "We set up and manage your cloud infrastructure on AWS, GCP, or Azure. Dockerised apps, Kubernetes orchestration, CI/CD pipelines, monitoring — all handled.",
    icon: "Cloud",
    techStack: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
    features: [
      "Cloud architecture design",
      "Container orchestration (K8s)",
      "CI/CD pipeline setup",
      "Infrastructure as Code (Terraform)",
      "Monitoring & alerting",
      "Cost optimisation & FinOps",
    ],
    color: "#6366f1",
  },
  {
    id: "ai",
    slug: "ai",
    title: "AI Integration",
    shortDesc: "Smart products powered by modern AI",
    description:
      "We integrate LLMs, build RAG pipelines, fine-tune models, and embed computer vision into your products — transforming data into competitive advantage.",
    icon: "Brain",
    techStack: ["OpenAI", "LangChain", "Pinecone", "Python", "Hugging Face"],
    features: [
      "LLM integration (GPT-4, Claude, Gemini)",
      "RAG & knowledge base systems",
      "AI chatbots & virtual assistants",
      "Computer vision & image recognition",
      "ML model training & fine-tuning",
      "Vector database integration",
    ],
    color: "#ec4899",
  },
];

export const STATS: Stat[] = [
  { value: 150, suffix: "+", label: "Projects Delivered", description: "Across 20+ industries" },
  { value: 50, suffix: "+", label: "Happy Clients", description: "From startups to enterprises" },
  { value: 8, suffix: "+", label: "Years Experience", description: "Building digital products" },
  { value: 99, suffix: "%", label: "Client Retention", description: "Long-term partnerships" },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description:
      "We dig deep into your business goals, target audience, and market. Every decision is backed by data and shaped into a clear product roadmap.",
    icon: "Search",
  },
  {
    number: "02",
    title: "UX Research & Wireframing",
    description:
      "User journeys, information architecture, and low-fidelity wireframes — we map out every interaction before a single line of code is written.",
    icon: "FileSearch",
  },
  {
    number: "03",
    title: "Design & Prototyping",
    description:
      "High-fidelity Figma designs with interactive prototypes. You review and approve before we build — no surprises.",
    icon: "Palette",
  },
  {
    number: "04",
    title: "Development & Testing",
    description:
      "Agile sprints, daily stand-ups, and continuous integration. Quality is baked in from the start with automated testing at every stage.",
    icon: "Code2",
  },
  {
    number: "05",
    title: "Deployment & Launch",
    description:
      "Smooth release to production with zero downtime deploys, monitoring dashboards, and rollback safeguards ready from day one.",
    icon: "Rocket",
  },
  {
    number: "06",
    title: "Ongoing Support",
    description:
      "We don't disappear after launch. Retainer plans, SLA-backed support, and continuous improvement keep your product ahead of the curve.",
    icon: "HeartHandshake",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Code Machinist turned our vague idea into a polished mobile app in just 10 weeks. The attention to detail in both engineering and UX was extraordinary.",
    author: "Sarah Chen",
    role: "Founder & CEO",
    company: "NovaMed",
    rating: 5,
    initials: "SC",
  },
  {
    id: "t2",
    quote:
      "Our e-commerce platform went from 2s load time to under 0.8s after their performance overhaul. Revenue increased 34% in the following quarter.",
    author: "Marcus Williams",
    role: "Head of Engineering",
    company: "Drifter Commerce",
    rating: 5,
    initials: "MW",
  },
  {
    id: "t3",
    quote:
      "The AI chatbot they built handles 70% of our customer queries automatically. We've cut support costs in half and customer satisfaction is at an all-time high.",
    author: "Priya Patel",
    role: "VP of Product",
    company: "SupportFlow",
    rating: 5,
    initials: "PP",
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "p1",
    title: "NovaMed Patient App",
    category: "Mobile App",
    description: "HIPAA-compliant React Native app for 50,000+ patients — appointment scheduling, telehealth, and prescription tracking.",
    tags: ["React Native", "Node.js", "AWS", "PostgreSQL"],
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    id: "p2",
    title: "Drifter Commerce",
    category: "Web Platform",
    description: "Multi-vendor e-commerce platform processing $2M+ monthly GMV built with Next.js, Stripe, and a custom inventory engine.",
    tags: ["Next.js", "TypeScript", "Stripe", "Redis"],
    gradient: "from-purple-600 to-pink-500",
  },
  {
    id: "p3",
    title: "SupportFlow AI",
    category: "AI Integration",
    description: "LLM-powered customer support platform with RAG over company docs — reduced resolution time by 65%.",
    tags: ["OpenAI", "LangChain", "Python", "Pinecone"],
    gradient: "from-indigo-600 to-purple-500",
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "tm1",
    name: "Alex Rivera",
    role: "Founder & CTO",
    bio: "10+ years building products at scale. Previously engineering lead at two Y Combinator startups.",
    initials: "AR",
    gradient: "from-blue-500 to-purple-600",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  },
  {
    id: "tm2",
    name: "Jordan Kim",
    role: "Lead Mobile Engineer",
    bio: "React Native and Flutter specialist. Built apps used by millions across healthcare and fintech.",
    initials: "JK",
    gradient: "from-purple-500 to-pink-600",
    socials: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: "tm3",
    name: "Sam Taylor",
    role: "Head of Design",
    bio: "Award-winning product designer. Obsessed with the intersection of usability, beauty, and business impact.",
    initials: "ST",
    gradient: "from-cyan-500 to-blue-600",
    socials: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: "tm4",
    name: "Morgan Lee",
    role: "Senior Full-Stack Engineer",
    bio: "Next.js and Node.js expert. Passionate about developer experience, performance, and clean architecture.",
    initials: "ML",
    gradient: "from-green-500 to-cyan-600",
    socials: {
      linkedin: "#",
      github: "#",
    },
  },
];

export const TECH_STACK_MARQUEE = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "Flutter",
  "Swift", "Kotlin", "PostgreSQL", "MongoDB", "Redis", "AWS",
  "Docker", "Kubernetes", "GraphQL", "Terraform", "Figma", "Framer",
  "React Native", "Go", "OpenAI", "LangChain", "Supabase", "Vercel",
];
