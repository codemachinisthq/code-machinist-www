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
    description: "A customer-facing app for iOS and Android",
    icon: "Smartphone",
    href: "/services#mobile",
  },
  {
    id: "web",
    title: "Web Development",
    description: "A website or web app that brings in customers",
    icon: "Monitor",
    href: "/services#web",
  },
  {
    id: "desktop",
    title: "Desktop Apps",
    description: "Custom software to run your daily operations",
    icon: "AppWindow",
    href: "/services#desktop",
  },
  {
    id: "design",
    title: "UI/UX Design",
    description: "Designs that make customers trust your business",
    icon: "Palette",
    href: "/services#design",
  },
  {
    id: "api",
    title: "API & Backend",
    description: "The reliable backend behind your app or site",
    icon: "Server",
    href: "/services#api",
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    description: "Hosting and IT that just works, at a business-friendly cost",
    icon: "Cloud",
    href: "/services#cloud",
  },
  {
    id: "ai",
    title: "AI Integration",
    description: "Automate repetitive tasks and customer questions",
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
    shortDesc: "A customer app for iOS and Android",
    description:
      "Want a booking app, a loyalty app, or a simple tool your customers use every day? We build iOS and Android apps sized for a business budget — using React Native and Flutter so one codebase covers both platforms.",
    icon: "Smartphone",
    techStack: ["React Native", "Flutter", "Swift", "Kotlin", "Expo"],
    features: [
      "Native iOS & Android development",
      "Cross-platform with React Native & Flutter (one build, both stores)",
      "Works offline when the connection doesn't",
      "Push notifications to bring customers back",
      "App Store & Play Store submission handled for you",
      "Ongoing maintenance & updates after launch",
    ],
    color: "#3b82f6",
  },
  {
    id: "web",
    slug: "web",
    title: "Web Development",
    shortDesc: "A website or web app that brings in customers",
    description:
      "From a simple business website to an online store or booking system, we build fast, accessible, SEO-friendly sites with Next.js and React — built to show up in search and turn visitors into customers.",
    icon: "Monitor",
    techStack: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL"],
    features: [
      "Fast-loading pages that rank in Google search",
      "Progressive Web Apps (PWA) — works like an app, no app store needed",
      "Online store & payment integration",
      "SEO optimisation & Core Web Vitals",
      "Accessible, easy-to-use design for every visitor",
      "Easy content updates (no developer needed for text changes)",
    ],
    color: "#a855f7",
  },
  {
    id: "desktop",
    slug: "desktop",
    title: "Desktop App Development",
    shortDesc: "Custom software to run your daily operations",
    description:
      "Point-of-sale tools, inventory trackers, or an internal system to replace your spreadsheets — we build desktop software for Windows, macOS, and Linux that fits how your business actually works.",
    icon: "AppWindow",
    techStack: ["Electron", "Tauri", "React", "TypeScript", ".NET"],
    features: [
      "Windows, macOS & Linux support",
      "Native OS integration & system tray",
      "Works without an internet connection",
      "Automatic updates, so you're never stuck on an old version",
      "Hardware access (barcode scanners, receipt printers, USB devices)",
      "Simple licensing & deployment across your team's computers",
    ],
    color: "#22d3ee",
  },
  {
    id: "design",
    slug: "design",
    title: "UI/UX Design",
    shortDesc: "Designs that make customers trust your business",
    description:
      "We research your customers, sketch the experience, and test it before writing code — so your website or app looks professional and is genuinely easy for customers to use.",
    icon: "Palette",
    techStack: ["Figma", "Adobe XD", "Lottie", "Storybook", "Framer"],
    features: [
      "Customer research, not guesswork",
      "Simple site maps so customers find what they need",
      "Clickable prototypes you can review before we build",
      "A consistent look across your site, app, and marketing",
      "Real-user testing to catch confusing steps early",
      "Handoff-ready Figma files you own",
    ],
    color: "#f59e0b",
  },
  {
    id: "api",
    slug: "api",
    title: "API & Backend Development",
    shortDesc: "The reliable backend behind your app or site",
    description:
      "The part customers never see but always feel — we build the backend that stores your data, powers your app or website, and keeps working reliably as your business grows.",
    icon: "Server",
    techStack: ["Node.js", "Python", "Go", "GraphQL", "PostgreSQL", "Redis"],
    features: [
      "REST & GraphQL API design",
      "Secure logins & customer accounts (OAuth, JWT)",
      "Real-time features like live order status",
      "Database design that stays fast as your data grows",
      "Caching & performance tuning",
      "Clear documentation so you're never locked to one developer",
    ],
    color: "#10b981",
  },
  {
    id: "cloud",
    slug: "cloud",
    title: "Cloud & DevOps",
    shortDesc: "Hosting and IT that just works",
    description:
      "We set up hosting on AWS, Google Cloud, or Azure and manage it so your site or app stays online — with a cost-conscious setup instead of enterprise-scale infrastructure you'll never need.",
    icon: "Cloud",
    techStack: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
    features: [
      "Right-sized cloud setup — no paying for capacity you don't need",
      "Containerized deployments that are easy to move or scale later",
      "Automatic deploys when we ship updates",
      "Infrastructure documented as code, not tribal knowledge",
      "Uptime monitoring & alerting",
      "Ongoing cost review to keep your hosting bill predictable",
    ],
    color: "#6366f1",
  },
  {
    id: "ai",
    slug: "ai",
    title: "AI Integration",
    shortDesc: "Automate the busywork, one task at a time",
    description:
      "AI chatbots that answer customer questions, tools that summarize reviews or emails, automations that do your data entry — we add practical AI to your existing website or workflow so you get time back.",
    icon: "Brain",
    techStack: ["OpenAI", "LangChain", "Pinecone", "Python", "Hugging Face"],
    features: [
      "AI chatbots that answer FAQs and take basic requests",
      "LLM integration (GPT-4, Claude, Gemini)",
      "Automations for repetitive tasks (scheduling, data entry, follow-ups)",
      "Search that understands your product catalog or documents",
      "Image recognition for inventory or quality checks",
      "Built to a monthly cost you can actually predict",
    ],
    color: "#ec4899",
  },
];

export const STATS: Stat[] = [
  { value: 150, suffix: "+", label: "Projects Delivered", description: "Across 20+ industries" },
  { value: 50, suffix: "+", label: "Happy Clients", description: "Local shops to growing businesses" },
  { value: 8, suffix: "+", label: "Years Experience", description: "Building software for business" },
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
      "Code Machinist turned our booking mess into a simple app our clients actually use, in just 10 weeks. No agency jargon — just clear updates and a product that works.",
    author: "Sarah Chen",
    role: "Owner",
    company: "Chen Family Dental",
    rating: 5,
    initials: "SC",
  },
  {
    id: "t2",
    quote:
      "Our online store went from a 2-second load time to under 0.8 seconds after their rebuild. Online sales were up 34% the following quarter, and we finally rank on Google for our own products.",
    author: "Marcus Williams",
    role: "Owner",
    company: "Drifter Outdoor Co.",
    rating: 5,
    initials: "MW",
  },
  {
    id: "t3",
    quote:
      "The AI chatbot they built answers 70% of our customer questions automatically. As a five-person team, that's given us our evenings back — and customers still get answers instantly.",
    author: "Priya Patel",
    role: "Founder",
    company: "SupportFlow Studio",
    rating: 5,
    initials: "PP",
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "cap-telegram-bot",
    title: "Telegram Bots & Chat Consoles",
    category: "Bots & Automation",
    description: "We build Telegram bots that run real operations from a chat thread — guided inline-keyboard wizards, calendar and multi-select pickers, per-group permissions, live status and remote start/stop. No admin panel to host, no extra login to hand out.",
    tags: ["Python", "Telegram Bot API", "Google Sheets API", "systemd"],
    gradient: "from-blue-600 to-cyan-500",
    previewImage: "/artwork/console.svg",
  },
  {
    id: "cap-browser-extension",
    title: "Browser Extensions",
    category: "Browser Extension",
    description: "Cross-browser extensions built with WXT, TypeScript and React — popup UIs, background workers, content scripts, saved profiles and form automation, packaged for both Chrome and Firefox from one codebase.",
    tags: ["WXT", "TypeScript", "React", "Chrome / Firefox"],
    gradient: "from-emerald-600 to-teal-500",
    previewImage: "/artwork/extension.svg",
  },
  {
    id: "cap-desktop-agent",
    title: "Desktop Agents & Tools",
    category: "Desktop App",
    description: "Packaged Electron apps for people who will never open a terminal — one-button operation, system tray, start-with-Windows, background job queues that never repeat work, and a proper Windows installer.",
    tags: ["Electron", "Windows", "Vite", "NSIS"],
    gradient: "from-amber-600 to-orange-500",
    previewImage: "/artwork/desktop.svg",
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "tm1",
    name: "Alex Rivera",
    role: "Founder & CTO",
    bio: "10+ years building products at scale, now focused on bringing that same engineering quality to business budgets.",
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
    bio: "React Native and Flutter specialist who's shipped apps for clinics, retailers, and local service businesses alike.",
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
    bio: "Award-winning product designer, obsessed with making business software feel simple, trustworthy, and easy to use.",
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
    bio: "Next.js and Node.js expert who cares about building things small teams can maintain, not just ship.",
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
