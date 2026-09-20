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
  heroImage?: string;
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
    heroImage: '/AI_Neural_Network_Hero_3D-removebg-preview.png',
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
  /** ISO date, YYYY-MM-DD. */
  date: string;
  readingTime: string;
  /** Short original summary shown on the detail page. */
  content: string[];
  /**
   * Path of the original post on the blog, appended to `company.blogUrl`.
   * Verify each one against the live post before publishing.
   */
  externalSlug?: string;
};

export const insights: Insight[] = [
  {
    slug: 'background-workflows-for-ai-apps',
    title: 'Why AI Applications Need Background Workflows',
    description:
      'Long-running AI tasks — large document summarisation, repo indexing, PR review — do not fit inside a request cycle. A look at why background execution is a requirement, not an optimisation.',
    category: 'Engineering',
    date: '2026-09-14',
    readingTime: '16 min',
    externalSlug: 'why-ai-applications-need-background-workflows',
    content: [
      'A user uploads a large PDF and expects a summary. Another connects a repository and expects a generated wiki. Both requests take far longer than an HTTP connection is willing to stay open, and both will fail intermittently for reasons outside your control — a rate limit, a timeout, a model returning malformed output.',
      'The article walks through why these workloads belong in a queue rather than a request handler: durable state, retries with backoff, idempotency, partial progress the user can watch, and the ability to resume rather than restart when a single step fails.',
      'It covers the trade-offs between the common approaches — job queues, workflow engines and event-driven pipelines — and what each one costs you in operational complexity.',
    ],
  },
  {
    slug: 'ai-memory-for-agents',
    title: 'AI Memory: How Can an AI Agent Remember You?',
    description:
      'Why assistants forget between conversations, and the architecture — short-term context, long-term stores, retrieval and forgetting — that lets an agent carry knowledge forward.',
    category: 'AI Agents',
    date: '2026-09-04',
    readingTime: '15 min',
    externalSlug: 'ai-memory-how-can-an-ai-agent-remember-you',
    content: [
      'Tell an assistant something important and it is gone by the next session. That is not a bug in the model — a language model has no state between calls. Memory is something the surrounding system has to provide.',
      'The post breaks the memory lifecycle into four operations: writing new facts, updating them when they change, retrieving the right ones at the right moment, and forgetting what is stale or no longer relevant.',
      'It looks at where each type of memory lives — working context, episodic history, semantic facts — and the practical problems that show up in production: contradictory entries, unbounded growth, and retrieval that surfaces the wrong memory at the wrong time.',
    ],
  },
  {
    slug: 'beyond-vector-databases',
    title: 'Beyond Vector Databases: Understanding Vectorless RAG, PageIndex, and Wiki-Based AI Memory',
    description:
      'Embeddings and a vector store are the default answer for RAG, but not the only one. An examination of retrieval approaches that skip vectors entirely.',
    category: 'AI',
    date: '2026-09-04',
    readingTime: '16 min',
    externalSlug: 'beyond-vector-databases-vectorless-rag-pageindex-wiki-based-ai-memory',
    content: [
      'Retrieval-Augmented Generation has settled into a standard recipe: chunk the documents, embed them, store the vectors, retrieve by similarity. It works, but similarity search has known failure modes — chunks that lose their context, semantically close passages that are factually irrelevant, and no notion of document structure.',
      'This article surveys the alternatives. Vectorless approaches that let the model navigate documents directly. PageIndex-style retrieval that treats a document as a hierarchy rather than a bag of chunks. Wiki-based memory that maintains a curated, structured knowledge layer instead of raw text.',
      'The comparison is practical rather than theoretical: what each approach costs, what it makes easier, and the kinds of corpora where it beats a straightforward vector search.',
    ],
  },
  {
    slug: 'model-context-protocol',
    title: 'Model Context Protocol (MCP): How AI Agents Connect to the Real World',
    description:
      'An introduction to MCP — the open protocol that gives models a standard way to reach tools, data sources and external systems.',
    category: 'AI Agents',
    date: '2026-08-25',
    readingTime: '12 min',
    externalSlug: 'model-context-protocol-mcp-how-ai-agents-connect-to-the-real-world',
    content: [
      'Models reason well and write code well, but on their own they cannot read a file, query a database or call an API. Every integration has historically been bespoke — custom glue between one model and one system, rewritten for the next pairing.',
      'The Model Context Protocol standardises that connection. The post explains the client-server model, how tools and resources are described to the model, and how a single MCP server becomes reusable across any client that speaks the protocol.',
      'It also covers what the protocol deliberately leaves to you: permissions, auditability, and deciding which actions an agent should be allowed to take without a human in the loop.',
    ],
  },
  {
    slug: 'ai-llm-concepts-every-developer-should-know',
    title: 'From Hallucinations to Guardrails: 16 Essential AI & LLM Concepts Every Developer Should Know',
    description:
      'A working vocabulary for anyone building on OpenAI, Claude, Gemini, LangChain or RAG — sixteen terms explained without the hand-waving.',
    category: 'AI',
    date: '2026-07-13',
    readingTime: '8 min',
    externalSlug: 'from-hallucinations-to-guardrails-16-essential-ai-and-llm-concepts',
    content: [
      'The terminology around language models moves faster than the documentation. Hallucination, grounding, temperature, context window, embeddings, fine-tuning, guardrails — most developers half-know them, which is enough to ship something and not enough to debug it.',
      'This piece defines sixteen of the concepts that come up most often when building AI features, each with the practical consequence attached: what it changes about your output, your cost, or your failure modes.',
      'It is written as a reference to come back to rather than a single sitting — useful when a model behaves in a way that is surprising until you know the name for it.',
    ],
  },
  {
    slug: 'retrieval-augmented-generation-explained',
    title: 'Retrieval-Augmented Generation (RAG): What It Is, How It Works, and Why It Sometimes Fails',
    description:
      'Connecting a model to your documents does not automatically make it accurate. A walk through the RAG pipeline and the specific places it breaks.',
    category: 'AI',
    date: '2026-07-12',
    readingTime: '10 min',
    externalSlug: 'retrieval-augmented-generation-rag-what-it-is-how-it-works-and-why-it-fails',
    content: [
      'RAG substantially improves a model\'s ability to answer questions about knowledge it was never trained on. It does not make the model correct, and the gap between those two statements is where most production disappointment lives.',
      'The article follows a query through the full pipeline — chunking, embedding, retrieval, reranking, prompt assembly, generation — and identifies what can go wrong at each stage.',
      'Common culprits get specific attention: chunk boundaries that split an answer in half, retrieval that returns topically related but factually wrong passages, and a model that confidently fills gaps the retrieved context never covered.',
    ],
  },
  {
    slug: 'prompt-engineering-techniques',
    title: 'Prompt Engineering: Zero-Shot, Few-Shot & Chain of Thought Prompting',
    description:
      'Three foundational prompting techniques, when each one earns its extra tokens, and how to tell which your task actually needs.',
    category: 'AI',
    date: '2026-07-05',
    readingTime: '5 min',
    externalSlug: 'prompt-engineering-zero-shot-few-shot-and-chain-of-thought-prompting',
    content: [
      'The same model will give noticeably different answers depending on how a request is framed. Prompt engineering is the practice of framing it deliberately rather than by accident.',
      'The post covers three techniques in order of cost. Zero-shot: describe the task and ask. Few-shot: show worked examples so the model infers the pattern and the output format. Chain of thought: ask for the reasoning steps before the answer, which helps on problems with multiple dependent steps.',
      'Each comes with a note on when it is overkill — chain of thought on a classification task buys latency and nothing else.',
    ],
  },
  {
    slug: 'understanding-large-language-models',
    title: 'Understanding Large Language Models (LLMs)',
    description:
      'A beginner-friendly path from prompt to response — tokenization, transformers, and what is actually happening when a model answers you.',
    category: 'AI',
    date: '2026-06-30',
    readingTime: '8 min',
    externalSlug: 'understanding-large-language-models-llms',
    content: [
      'Most people now use a language model daily — asking for an explanation, drafting an email, getting a code suggestion — without a clear picture of what happens after they hit enter.',
      'This introduction traces that path: text broken into tokens, tokens turned into vectors, attention letting the model weigh which parts of the input matter, and a prediction produced one token at a time.',
      'It assumes no machine learning background and stays with the intuition, which is enough to explain why models are fluent, why they are confidently wrong, and why context length matters.',
    ],
  },
];

export const footerLinks = ['Solutions', 'Services', 'Products', 'About', 'Insights', 'Contact'];
