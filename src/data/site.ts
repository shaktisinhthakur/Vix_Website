// Ideavix site data — design system source of truth
export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Products', href: '/products' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/insights' },
];

export const serviceNav = [
  { label: 'AI Development', href: '/services/ai-development' },
  { label: 'Software Development', href: '/services/software-development' },
  { label: 'Web Development', href: '/services/web-development' },
  { label: 'SaaS Development', href: '/services/saas-development' },
  { label: 'UI/UX Design', href: '/services/ui-ux-design' },
  { label: 'Cloud & Infrastructure', href: '/services/cloud-infrastructure' },
];

export const solutionNav = [
  { label: 'AI Agents', href: '/solutions/ai-agents' },
  { label: 'Generative AI', href: '/solutions/generative-ai' },
  { label: 'Intelligent Automation', href: '/solutions/intelligent-automation' },
];

export const introStats = [
  { value: 'AI & Software', detail: 'Applied research shipped as production systems.' },
  { value: 'Digital Products', detail: 'End-to-end design and engineering under one roof.' },
  { value: 'Intelligent Systems', detail: 'Agents, retrieval and automation that compound.' },
  { value: 'Future-Ready Technology', detail: 'Architectures built to outlive the next platform shift.' },
];

export type Service = {
  id: string;
  slug: string;
  title: string;
  copy: string;
  icon: 'brain' | 'code' | 'bot' | 'layers' | 'pen' | 'cloud';
  accent: string;
};

export const services: Service[] = [
  { id: 'ai-ml', slug: 'ai-development', title: 'AI Development', copy: 'Intelligent systems designed to solve complex problems.', icon: 'brain', accent: '#00D9FF' },
  { id: 'web-software', slug: 'software-development', title: 'Software Development', copy: 'Scalable, high-performance digital products built for the modern web.', icon: 'code', accent: '#006BFF' },
  { id: 'web', slug: 'web-development', title: 'Web Development', copy: 'Modern, fast, and resilient web applications your users love.', icon: 'code', accent: '#7B2CFF' },
  { id: 'saas', slug: 'saas-development', title: 'SaaS Development', copy: 'From concept to production-ready SaaS platforms.', icon: 'layers', accent: '#C238FF' },
  { id: 'design', slug: 'ui-ux-design', title: 'UI/UX & Product Design', copy: 'Human-centered experiences designed for clarity and impact.', icon: 'pen', accent: '#FFB800' },
  { id: 'cloud', slug: 'cloud-infrastructure', title: 'Cloud & Infrastructure', copy: 'Reliable infrastructure built to scale.', icon: 'cloud', accent: '#00D9FF' },
];

export type ServiceDetail = {
  slug: string;
  title: string;
  heroTitle: string;
  heroCopy: string;
  overview: string;
  overview2: string;
  whatWeBuild: { title: string; copy: string }[];
  capabilities: string[];
  technologies: string[];
  useCases: string[];
};

export const serviceDetails: Record<string, ServiceDetail> = {
  'ai-development': {
    slug: 'ai-development',
    title: 'AI Development',
    heroTitle: 'Intelligence Engineered for Production.',
    heroCopy: 'We design, train and ship AI systems that work in the real world — grounded, observable, and governed from day one.',
    overview: 'AI only creates leverage when it survives contact with production data, users and edge cases. We work across the full lifecycle — from data architecture and model selection to evaluation, deployment and monitoring.',
    overview2: 'Our teams pair applied research with product engineering, so the models you ship are not demos with a script but systems your business can run on.',
    whatWeBuild: [
      { title: 'AI Applications', copy: 'End-to-end applications where generation, ranking or classification is the core interaction.' },
      { title: 'LLM Integration', copy: 'Model orchestration with tool calling, structured outputs and explicit guardrails.' },
      { title: 'RAG & Knowledge Systems', copy: 'Hybrid retrieval over your own content, evaluated for factual grounding.' },
      { title: 'AI Agents', copy: 'Tool-using agents with memory, permissions and human checkpoints.' },
      { title: 'Machine Learning', copy: 'Custom models trained, versioned and monitored as first-class production assets.' },
      { title: 'Computer Vision', copy: 'Imaging and video pipelines where accuracy and auditability matter.' },
    ],
    capabilities: ['LLM orchestration', 'RAG & vector search', 'AI agents & tool calling', 'Model training & fine-tuning', 'Evaluation & guardrails', 'MLOps & observability'],
    technologies: ['Python', 'OpenAI', 'Vector Databases', 'PyTorch', 'LangChain', 'PostgreSQL'],
    useCases: ['Knowledge assistants grounded in your docs', 'Operations agents that act across internal tools', 'Classification and ranking at scale', 'Intelligent triage and recommendation'],
  },
  'software-development': {
    slug: 'software-development',
    title: 'Software Development',
    heroTitle: 'Custom Software That Lasts.',
    heroCopy: 'Typed, tested and observable systems — designed to evolve with your business, not against it.',
    overview: 'We build backend systems and platforms where reliability is non-negotiable. Every service is designed for the team that will own it next year — documented, instrumented and boring where boring is a virtue.',
    overview2: 'From APIs to event-driven architectures, we focus on the seams: contracts, data models and operational clarity that make scale survivable.',
    whatWeBuild: [
      { title: 'Custom Software', copy: 'Business-critical systems crafted around your domain, not a template.' },
      { title: 'APIs & Backend Systems', copy: 'Contract-first APIs with auth, versioning and observability built in.' },
      { title: 'Scalable Architectures', copy: 'Services that scale horizontally without heroic ops.' },
      { title: 'Integrations', copy: 'Reliable bridges between the tools you already run on.' },
      { title: 'Platform Modernisation', copy: 'Refactoring the system you have into the platform you need.' },
      { title: 'Internal Tooling', copy: 'Admin, ops and data tools that compound team productivity.' },
    ],
    capabilities: ['API design & governance', 'Event-driven systems', 'Domain modelling', 'Auth & permissions', 'Testing & CI/CD', 'Observability'],
    technologies: ['TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'Redis', 'Cloud Infrastructure'],
    useCases: ['Platform APIs with explicit contracts', 'Event-driven processing pipelines', 'Multi-team service ecosystems', 'Data-heavy operational systems'],
  },
  'web-development': {
    slug: 'web-development',
    title: 'Web Development',
    heroTitle: 'Web Applications Built to Perform.',
    heroCopy: 'Modern web architecture with the polish of a product — fast, accessible and delightful to use.',
    overview: 'We build the web layer as a product surface, not a landing page. Performance, accessibility and interaction quality are treated as features — measured, budgeted and shipped.',
    overview2: 'React, Next.js and TypeScript end to end, with design systems that keep velocity high long after launch.',
    whatWeBuild: [
      { title: 'Modern Web Apps', copy: 'SPA and SSR applications that feel native.' },
      { title: 'Design Systems', copy: 'Token-driven component libraries that scale with your team.' },
      { title: 'Performance Engineering', copy: 'Core Web Vitals as a budget, not an afterthought.' },
      { title: 'Responsive UX', copy: 'Experiences crafted for every surface, input and viewport.' },
      { title: 'E-commerce & Portals', copy: 'High-traffic surfaces with reliable data and checkout.' },
      { title: 'Accessibility', copy: 'WCAG-minded interfaces that work for everyone.' },
    ],
    capabilities: ['React & Next.js', 'TypeScript', 'Design systems', 'Performance & a11y', 'State & data fetching', 'SSR / SSG / ISR'],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    useCases: ['Customer-facing web platforms', 'Design system rollouts', 'Commerce and booking surfaces', 'Dashboards and portals'],
  },
  'saas-development': {
    slug: 'saas-development',
    title: 'SaaS Development',
    heroTitle: 'SaaS Platforms Ready for Scale.',
    heroCopy: 'Multi-tenant, metered and observable from the first commit — so growth never needs a rewrite.',
    overview: 'Building SaaS is not just building software with billing. It is tenancy, entitlements, event volumes and support at scale — designed up front so you never pay the rewrite tax.',
    overview2: 'We ship the foundations that let you price, ship and support with confidence: auth, billing, workspaces, audit and usage.',
    whatWeBuild: [
      { title: 'Multi-tenant Architecture', copy: 'Isolation models, row-level security and tenant-aware APIs.' },
      { title: 'Auth & Workspaces', copy: 'SSO, roles, invitations and workspace governance.' },
      { title: 'Billing & Entitlements', copy: 'Plans, metering, trials and lifecycle — correctly modelled.' },
      { title: 'Dashboards', copy: 'Analytics and operational surfaces your customers live in.' },
      { title: 'API Platforms', copy: 'Public, versioned APIs your customers build on.' },
      { title: 'Growth Infrastructure', copy: 'Onboarding, feature flags and experimentation baked in.' },
    ],
    capabilities: ['Multi-tenancy', 'Billing & metering', 'Roles & permissions', 'Usage analytics', 'Audit & compliance', 'Public APIs'],
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Cloud Infrastructure', 'Vector Databases'],
    useCases: ['B2B SaaS from zero to scale', 'Usage-metered platforms', 'Workspace-based products', 'API-first businesses'],
  },
  'ui-ux-design': {
    slug: 'ui-ux-design',
    title: 'UI/UX & Product Design',
    heroTitle: 'Product Design That Earns Trust.',
    heroCopy: 'Clarity over novelty. We design interfaces people understand, remember and return to.',
    overview: 'Great product design removes decisions, not just decorates them. We pair research, prototyping and systems thinking so every screen earns its place in the flow.',
    overview2: 'From discovery to design system handoff, we stay close to engineering — so what gets designed is what ships.',
    whatWeBuild: [
      { title: 'Product Design', copy: 'Flows and interfaces validated against real behaviour.' },
      { title: 'Design Systems', copy: 'Tokens, components and documentation your team can scale.' },
      { title: 'Prototyping', copy: 'High-fidelity prototypes that answer risk before code.' },
      { title: 'Interaction Design', copy: 'Motion and micro-interaction with purpose.' },
      { title: 'Research & Discovery', copy: 'Workshops and usability studies that sharpen the problem.' },
      { title: 'Brand & Interface', copy: 'Visual language that is premium, durable and coherent.' },
    ],
    capabilities: ['User research', 'Flow & information design', 'Design systems', 'Prototyping', 'Interaction & motion', 'Usability testing'],
    technologies: ['Figma', 'Framer Motion', 'React', 'Tailwind CSS', 'Next.js', 'TypeScript'],
    useCases: ['New product formation', 'Design system establishment', 'Complex workflow simplification', 'Experience debt repayment'],
  },
  'cloud-infrastructure': {
    slug: 'cloud-infrastructure',
    title: 'Cloud & Infrastructure',
    heroTitle: 'Infrastructure That Disappears.',
    heroCopy: 'The best infrastructure is the one your team never has to think about — secure, cost-aware and resilient by default.',
    overview: 'We treat infrastructure as product. Declarative, tiered and paved with golden paths so every team deploys the same safe way.',
    overview2: 'From cloud architecture to CI/CD and observability, we build platforms that make shipping boring — in the best sense.',
    whatWeBuild: [
      { title: 'Cloud Architecture', copy: 'Landing zones, networking and tenancy modelled correctly.' },
      { title: 'Deployment & CI/CD', copy: 'Pipeline determinism, preview environments and safe rollouts.' },
      { title: 'Observability', copy: 'Metrics, traces and logs that actually answer the question.' },
      { title: 'Scaling & Resilience', copy: 'Autoscaling, failover and chaos assumptions tested.' },
      { title: 'Security & Compliance', copy: 'Least privilege, secrets and posture by default.' },
      { title: 'Cost Engineering', copy: 'Spend that is visible, allocated and governed.' },
    ],
    capabilities: ['Cloud architecture (AWS/GCP/Azure)', 'Kubernetes & serverless', 'CI/CD & GitOps', 'Observability', 'Security hardening', 'Cost & FinOps'],
    technologies: ['Cloud Infrastructure', 'Node.js', 'PostgreSQL', 'Redis', 'Vector Databases', 'Python'],
    useCases: ['Greenfield landing zones', 'Platform migrations', 'Production readiness programmes', 'Cost and reliability improvements'],
  },
};

export type SolutionDetail = {
  slug: string;
  title: string;
  heroTitle: string;
  heroCopy: string;
  sections: { title: string; copy: string }[];
};

export const solutionDetails: Record<string, SolutionDetail> = {
  'ai-agents': {
    slug: 'ai-agents',
    title: 'AI Agents',
    heroTitle: 'AI Agents That Go Beyond the Prompt.',
    heroCopy: 'Tool-using agents with explicit permissions, traces and human checkpoints — orchestrated as systems, not chat widgets.',
    sections: [
      { title: 'Tool Calling', copy: 'Agents invoke the tools your team already trusts — with typed inputs, scoped permissions and auditable traces.' },
      { title: 'Memory', copy: 'Working, episodic and semantic memory so agents stay coherent across a task, not just a turn.' },
      { title: 'Multi-Agent Systems', copy: 'Specialised agents that collaborate — researcher, planner, executor — through explicit contracts.' },
      { title: 'Autonomous Workflows', copy: 'Work that starts with an objective and ends with an outcome, without hand-holding each step.' },
      { title: 'Human-in-the-Loop', copy: 'Checkpoints, approvals and overrides exactly where judgement matters.' },
      { title: 'Evaluation', copy: 'Continuous evaluation against golden sets — so progress is measured, not guessed.' },
    ],
  },
  'generative-ai': {
    slug: 'generative-ai',
    title: 'Generative AI',
    heroTitle: 'Generative AI Grounded in Your Reality.',
    heroCopy: 'LLM applications, RAG systems and semantic search that stay tethered to your data and truthful under pressure.',
    sections: [
      { title: 'LLM Applications', copy: 'Product surfaces where generation is useful because it is constrained, guarded and genuinely helpful.' },
      { title: 'RAG Systems', copy: 'Hybrid retrieval — dense, sparse and reranked — with citation and confidence surfaced to the user.' },
      { title: 'AI Assistants', copy: 'In-context assistants that act on your knowledge, not the open web.' },
      { title: 'Semantic Search', copy: 'Intent-aware search over structured and unstructured content, evaluated for relevance continuously.' },
      { title: 'Multimodal AI', copy: 'Text, image and structured data combined where the problem demands it.' },
      { title: 'Enterprise Readiness', copy: 'Tenancy, data boundaries, PII handling and audit — designed in, not bolted on.' },
    ],
  },
  'intelligent-automation': {
    slug: 'intelligent-automation',
    title: 'Intelligent Automation',
    heroTitle: 'Automation That Compounds.',
    heroCopy: 'AI workflows, background jobs and orchestrated systems that remove operational drag instead of adding another dashboard.',
    sections: [
      { title: 'AI Workflows', copy: 'Chains of retrieval, reasoning and action that resolve a goal, not just a ticket.' },
      { title: 'Background Jobs', copy: 'Reliable queues, retries and idempotency so scale never means fragility.' },
      { title: 'Event-Driven Systems', copy: 'Systems that react to the business — webhooks, streams and schedules with durable state.' },
      { title: 'API Integrations', copy: 'Typed bridges between the tools you already run on — with backpressure and observability.' },
      { title: 'Workflow Orchestration', copy: 'Explicit state machines your team can reason about, extend and debug.' },
      { title: 'Business Automation', copy: 'Removing the manual middle steps so your team does higher-leverage work.' },
    ],
  },
};

export const solutionsOverview = [
  { slug: 'ai-agents', title: 'AI Agents', copy: 'Autonomous, tool-using agents with memory and human checkpoints.', accent: '#00D9FF' },
  { slug: 'generative-ai', title: 'Generative AI', copy: 'Grounded generation over your knowledge — with citations and guardrails.', accent: '#7B2CFF' },
  { slug: 'intelligent-automation', title: 'Intelligent Automation', copy: 'Event-driven workflows that remove operational drag.', accent: '#006BFF' },
];

export const processSteps = [
  { number: '01', title: 'Discover', copy: 'Understand the problem, users and opportunity.', detail: 'Workshops, technical discovery and a sharp problem statement before a single line of code.' },
  { number: '02', title: 'Design', copy: 'Transform ideas into intuitive product experiences.', detail: 'Flows, systems and interface architecture validated against real user behaviour.' },
  { number: '03', title: 'Build', copy: 'Engineer scalable and reliable technology.', detail: 'Typed, tested and observable systems delivered in continuous increments.' },
  { number: '04', title: 'Launch', copy: 'Deploy, measure and continuously improve.', detail: 'Instrumented releases, experimentation and a feedback loop that never closes.' },
  { number: '05', title: 'Scale', copy: 'Turn successful products into long-term platforms.', detail: 'Platform thinking, cost engineering and roadmaps that survive growth.' },
];

export const caseStudies = [
  { id: 'atlas', name: 'Atlas Risk', category: 'AI', copy: 'A real-time credit intelligence platform that scores exposure across millions of portfolios and explains every decision it makes.', image: "/f712dc32-aec8-40dd-a2e6-1eb879231031.jpg", stack: ['Python', 'Next.js', 'PostgreSQL'] },
  { id: 'orbit', name: 'Orbit Agents', category: 'AI', copy: 'An autonomous operations layer where teams compose agents that research, decide and execute across their internal tooling.', image: "/b8022686-765a-4558-b649-f9f676a07f53.jpg", stack: ['OpenAI', 'Node.js', 'Redis'] },
  { id: 'northwind', name: 'Northwind Cloud', category: 'SaaS', copy: 'A multi-tenant analytics suite rebuilt from the ground up — one design system, one API surface, four product lines.', image: "/c300e0ab-af25-49a6-b7cc-aec890639f4b.jpg", stack: ['React', 'TypeScript', 'Cloud'] },
  { id: 'lumen', name: 'Lumen Health', category: 'AI', copy: 'Clinical imaging triage that surfaces the cases that matter first, with auditable model confidence for every read.', image: "/ca221576-a666-4a96-90c4-be455ffa68b9.jpg", stack: ['PyTorch', 'Vector DB', 'Python'] },
];

export const products = [
  { slug: 'vantage', name: 'Vantage', description: 'An internal template for production-grade web platforms — auth, billing, and observability from day one.', category: 'Platform', tech: 'Next.js · TypeScript · PostgreSQL', status: 'In development' },
  { slug: 'signal', name: 'Signal', description: 'A retrieval and evaluation harness for RAG systems — measure grounding before you ship.', category: 'AI Tooling', tech: 'Python · Vector DB · OpenAI', status: 'Early access' },
  { slug: 'atlas-lite', name: 'Atlas Lite', description: 'A reference architecture for risk-aware AI systems with explainability and audit at its core.', category: 'Reference Architecture', tech: 'Python · Next.js', status: 'Template' },
  { slug: 'orbit-core', name: 'Orbit Core', description: 'An agent orchestration primitive — tool calling, memory, and human-in-the-loop checkpoints.', category: 'AI Agents', tech: 'Node.js · OpenAI · Redis', status: 'In development' },
];

export const aiCapabilities = [
  { title: 'Generative AI', copy: 'Product surfaces where generation is grounded, guarded and genuinely useful.' },
  { title: 'AI Agents', copy: 'Tool-using agents with explicit permissions, traces and human checkpoints.' },
  { title: 'RAG & Retrieval', copy: 'Hybrid retrieval over your own knowledge, evaluated continuously for accuracy.' },
  { title: 'Intelligent Automation', copy: 'Workflows that remove operational drag instead of adding another dashboard.' },
  { title: 'Machine Learning', copy: 'Models trained, versioned and monitored as first-class production assets.' },
  { title: 'Data-Driven Systems', copy: 'Pipelines and semantics that make data trustworthy enough to act on.' },
];

export const technologies = [
  { name: 'Next.js', group: 'Frontend' },
  { name: 'React', group: 'Frontend' },
  { name: 'TypeScript', group: 'Language' },
  { name: 'Node.js', group: 'Backend' },
  { name: 'Python', group: 'Language' },
  { name: 'PostgreSQL', group: 'Data' },
  { name: 'MongoDB', group: 'Data' },
  { name: 'Redis', group: 'Data' },
  { name: 'OpenAI', group: 'AI' },
  { name: 'Vector Databases', group: 'AI' },
  { name: 'Cloud Infrastructure', group: 'Platform' },
];

export type Insight = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readingTime: string;
  content: string[];
};

export const insights: Insight[] = [
  {
    slug: 'grounded-generation',
    title: 'Building Grounded Generation: Why Citations Beat Confidence',
    description: 'How we design RAG systems that stay tethered to truth — with evaluation, reranking and explicit uncertainty.',
    category: 'AI',
    date: '2026-03-12',
    readingTime: '7 min',
    content: [
      'Generative interfaces are only as trustworthy as their grounding. When we build RAG for production, we treat retrieval as product work — not plumbing.',
      'Our pipeline pairs dense and sparse retrieval, reranks with a cross-encoder, and surfaces citations inline. The model is instructed to say what it does not know — and that instruction is itself evaluated.',
      'We maintain golden question sets per tenant, run nightly evals, and track hallucination rate alongside latency. Grounding becomes a metric the team owns, not a hope the demo sustains.',
      'The result is a system that earns trust one cited answer at a time — and degrades gracefully when it cannot answer at all.',
    ],
  },
  {
    slug: 'agent-orchestration',
    title: 'From Prompt to Platform: Orchestrating Tool-Using Agents',
    description: 'Memory, tool contracts and approval gates — the unglamorous work that makes agents reliable.',
    category: 'AI Agents',
    date: '2026-02-28',
    readingTime: '8 min',
    content: [
      'The prompt is the easy part. The system around it — permissions, state, observation — is what determines whether an agent is a toy or a tool.',
      'We model tool calls as typed contracts with explicit scopes. Every invocation is logged, replayable and attributable. Agents carry working memory within a task and episodic memory across tasks, both bounded and auditable.',
      'Human-in-the-loop is not a fallback; it is a designed checkpoint. Approvals, diffs and dry runs let a person stay accountable without staying busy.',
      'Shipped this way, agents stop being demos and start being teammates — with the traces to prove it.',
    ],
  },
  {
    slug: 'saas-tenancy',
    title: 'Multi-Tenancy Done Once, Done Right',
    description: 'The data, auth and billing decisions that decide whether your SaaS survives its own growth.',
    category: 'SaaS',
    date: '2026-02-10',
    readingTime: '6 min',
    content: [
      'Tenancy is a domain decision before it is a database decision. Isolation model, row-level policy, and workspace semantics ripple into every query you will ever write.',
      'We favour patterns that are boring at scale: tenant-scoped schemas or RLS, entitlement checks at the edge, and metering as a first-class event stream. Billing mirrors the domain model so plans and limits never drift from code.',
      'Build it once, well — and growth becomes a pricing conversation, not a migration.',
    ],
  },
  {
    slug: 'design-systems-velocity',
    title: 'Design Systems as Velocity Multipliers',
    description: 'Why token discipline and component contracts beat pixel-perfect one-offs.',
    category: 'Product',
    date: '2026-01-22',
    readingTime: '5 min',
    content: [
      'Every interface you ship is a promise about every interface you will ship next. Design systems keep that promise consistent — and keep engineering fast.',
      'We build with tokens, constraints and explicit component contracts. The system encodes taste so the team can move without revisiting every decision.',
      'The payoff is not visual consistency. It is cycle time: fewer handoffs, fewer regressions, and a codebase that stays pleasant to work in.',
    ],
  },
  {
    slug: 'event-driven-reliability',
    title: 'Event-Driven Without the Headaches',
    description: 'Queues, idempotency and observability — the reliability primitives behind calm systems.',
    category: 'Engineering',
    date: '2026-01-08',
    readingTime: '7 min',
    content: [
      'Events are the nervous system of modern platforms. Without discipline, they are also the source of the strangest bugs.',
      'We treat every consumer as idempotent, every message as retriable, and every workflow as a state machine you can inspect. Dead letters, backpressure and poison-pill handling are built in, not hoped for.',
      'Reliability is not the absence of failure — it is graceful handling of every failure you can anticipate.',
    ],
  },
  {
    slug: 'future-ready-architecture',
    title: 'Future-Ready Is a Design Choice',
    description: 'How we pick stacks for longevity, not novelty — and keep platforms pleasant a year in.',
    category: 'Innovation',
    date: '2025-12-18',
    readingTime: '6 min',
    content: [
      'Technology choices compound. A year in, you live with the abstractions you chose on week two.',
      'We optimise for typed contracts, observable boundaries and boring infrastructure. Novelty is isolated, not systemic — so the team can adopt new capability without rewriting the platform to do it.',
      'Future-ready is not prediction. It is leaving the system in a state where the next good idea is easy to say yes to.',
    ],
  },
];

export const footerLinks = ['Solutions', 'Services', 'Products', 'About', 'Insights', 'Contact'];
