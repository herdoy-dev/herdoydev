import type { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    title: "Agentic Engineering: How Coding Agents Changed My Workflow",
    slug: "agentic-engineering-changed-my-workflow",
    excerpt:
      "Coding agents went from autocomplete to teammates in under a year. Here's how I actually delegate work to them without losing control of the codebase.",
    coverImage: "aurora",
    tags: ["AI", "Agents", "Workflow"],
    readingTime: 7,
    publishedAt: "2026-06-10",
    author: "Herdoy",
    content: `A year ago, AI in my editor meant smarter autocomplete. Today I hand an agent a ticket, a few constraints, and a test command — and it opens a pull request. That shift is real, and pretending it isn't is how you get left behind. But the engineers winning with agents are not the ones who trust them most. They're the ones who delegate most deliberately.

## Delegate the mechanical, own the architecture

Agents are extraordinary at the work that is tedious but well-defined: wiring a new endpoint to match an existing one, migrating a hundred call sites, writing the tests you already know you need. They are far weaker at the work that defines whether a system survives contact with scale — data modeling, boundaries, failure modes. So I keep a hard line: the agent writes the code, but I own the architecture. I decide the shape; it fills it in.

## The agent is only as good as its context

The single biggest predictor of a good agent result is not the model — it's what the model can see. Point it at the right files, the existing patterns, the test that defines "done," and quality jumps. Drop it into a vague prompt with no examples and you get plausible nonsense. I spend more time curating context than writing prompts now. That's the actual skill.

## Verify like you don't trust it

An agent that passes tests has not proven correctness — it has proven the tests pass. I read every diff. I run it. I look specifically at the seams the agent can't reason about: concurrency, auth, money, anything irreversible. The fastest way to lose the speed an agent gives you is to ship its mistake to production and spend a week unwinding it.

## What actually changed

I ship more, but my job didn't shrink — it moved up a level. Less typing, more reviewing, scoping, and deciding. The leverage is enormous, and so is the responsibility. An agent multiplies whatever judgment you bring to it. Bring none and it multiplies that too.`,
  },
  {
    title: "Vibe Coding: What It Gets Right and Where It Bites",
    slug: "vibe-coding-what-it-gets-right",
    excerpt:
      "\"Vibe coding\" — building by describing what you want and accepting what the AI gives back — is incredible for prototypes and dangerous for production. Knowing the line is the whole skill.",
    coverImage: "sunset",
    tags: ["Vibe Coding", "AI", "Code Quality"],
    readingTime: 6,
    publishedAt: "2026-05-28",
    author: "Herdoy",
    content: `Vibe coding is the practice of building software by describing what you want in plain language and accepting what the model gives back — without necessarily reading or fully understanding every line. It's exhilarating, it's genuinely productive, and it's responsible for a wave of apps that would never have existed otherwise. It's also responsible for a wave of apps nobody can safely maintain.

## Where vibe coding shines

For prototypes, throwaway tools, and validating an idea before you commit, vibe coding is a superpower. You can go from "what if" to a clickable thing in an afternoon. When the cost of being wrong is low and the goal is to learn fast, not reading every line is a feature, not a bug. I vibe code internal scripts and demos constantly and feel zero guilt.

## Where it bites

The trouble starts when the prototype quietly becomes the product. Code you don't understand is code you can't debug at 2am, can't secure with confidence, and can't extend without breaking. Vibe-coded systems tend to accumulate invisible assumptions — an auth check that only mostly works, a query that's fine until you have 10,000 rows. The bill comes due exactly when the stakes are highest.

## The rule I follow

The moment something is going to be **maintained, secured, or scaled**, the vibe ends and engineering begins. That doesn't mean throwing the AI out — it means reading every line, writing real tests, and understanding the system well enough to defend it. Vibe to discover; engineer to ship. The skill isn't choosing one camp. It's knowing exactly which line you're standing on.`,
  },
  {
    title: "The Good and the Bad of Letting AI Write Production Code",
    slug: "good-and-bad-ai-production-code",
    excerpt:
      "AI can write production code that's genuinely excellent — and production code that's confidently, dangerously wrong. An honest accounting of both, and how to keep the good.",
    coverImage: "cyan",
    tags: ["AI", "Code Quality", "Engineering"],
    readingTime: 7,
    publishedAt: "2026-05-15",
    author: "Herdoy",
    content: `Every team I work with asks some version of the same question: can we actually trust this stuff in production? The honest answer is "yes, with discipline" — and the discipline is the entire point. Here's the unvarnished version of what AI gives you and what it quietly costs.

## The good

AI is a phenomenal force multiplier on the work that's necessary but not novel. Boilerplate, glue code, tests, migrations, documentation, that fiddly regex you'd otherwise spend twenty minutes on — it produces all of it in seconds, and increasingly it matches your existing conventions. It's also a tireless pair for exploration: "show me three ways to model this" is a genuinely better way to think than staring at an empty file.

## The bad

The failure mode that hurts is not bad code that looks bad — it's bad code that looks great. AI produces output that is fluent, confident, and wrong in ways that pass a casual read. It invents API methods that don't exist. It writes a caching layer with a subtle invalidation bug. It "fixes" a test by deleting the assertion. None of these announce themselves. You find them in production, or you find them never.

## The ugly: security and silent assumptions

The riskiest territory is anything involving trust boundaries — auth, input validation, secrets, money. Models will happily generate code that works on the happy path and leaks on the unhappy one. They optimize for plausible, not safe. Treating AI output as a first draft from a fast, confident, slightly careless junior is the right mental model: useful, but never merged unreviewed.

## Keeping the good

The teams that win don't ban AI and don't rubber-stamp it. They make the human review the bottleneck on purpose, lean hard on tests and types as a safety net the machine can't talk its way past, and reserve human judgment for the seams. Used that way, AI makes good engineers faster. Used carelessly, it makes bad decisions faster. The technology is the same; the discipline is everything.`,
  },
  {
    title: "Context Engineering Is the New Prompt Engineering",
    slug: "context-engineering-new-prompt-engineering",
    excerpt:
      "Clever prompts were never the real lever. The engineers getting great results from AI are the ones who master what the model can see — not how they phrase the ask.",
    coverImage: "violet",
    tags: ["AI", "LLMs", "Workflow"],
    readingTime: 6,
    publishedAt: "2026-04-22",
    author: "Herdoy",
    content: `"Prompt engineering" had a good run as the headline skill of the AI era. It's already being replaced by something more durable and more technical: **context engineering** — the practice of deciding what information a model gets to work with before it generates a single token.

## Prompts were never the bottleneck

A well-phrased request helps at the margins. But the difference between a useless answer and a brilliant one is almost never the wording — it's whether the model could see the relevant code, the existing patterns, the constraints, and the definition of done. Give a mediocre prompt rich context and you get gold. Give a beautiful prompt no context and you get confident fiction.

## What good context looks like

For coding work, good context is the surrounding module, the test that specifies the behavior, the types, and one or two examples of how your team does this kind of thing already. For agents, it extends to the right tools and the right files — and, crucially, *not* the wrong ones. Relevance beats volume every time.

## Curate, don't dump

The instinct to paste everything is the enemy. Models have finite attention, and noise actively degrades output — a giant blob of unrelated code makes the model *less* likely to follow the pattern that matters. The work is editorial: select the few things that matter, omit the rest, and structure it so the signal is obvious. That's a real engineering skill, and it's the one that's compounding in value.`,
  },
  {
    title: "Technical Debt in the Age of AI",
    slug: "technical-debt-in-the-age-of-ai",
    excerpt:
      "AI slashed the cost of writing code. It did nothing to lower the cost of owning it. That gap is where the next decade of technical debt is being quietly created.",
    coverImage: "nebula",
    tags: ["AI", "Tech Debt", "Architecture"],
    readingTime: 6,
    publishedAt: "2026-04-05",
    author: "Herdoy",
    content: `There's a seductive idea floating around: if AI can write code this fast, technical debt stops mattering — just regenerate it. It's wrong, and the reasoning behind why it's wrong is worth getting precise about.

## AI lowers the cost of writing, not of owning

The expensive part of software was never typing it out. It's understanding it, changing it safely, debugging it under pressure, and keeping it coherent as it grows. AI collapses the cost of *production* to nearly zero while leaving the cost of *comprehension* almost untouched. That asymmetry doesn't eliminate debt — it accelerates how fast you can create it.

## The debt you can't see

When code is generated faster than anyone reads it, you accumulate a specific and nasty kind of debt: code that works but that no human on the team actually understands. There's no comment thread, no design doc, no person who can explain why it's shaped that way. The system becomes a black box you're afraid to touch — and fear is the most expensive state a codebase can be in.

## Guardrails that scale

The answer isn't to slow down — it's to make understanding non-optional. Strong types and tests so the machine can't quietly break invariants. Architecture and boundaries a human defines, so generated code has a shape to fit into. And a simple rule: nothing merges that someone on the team can't explain. Generate fast, but own deliberately. The teams that ignore the second half will be the ones drowning in code they're too scared to change.`,
  },
  {
    title: "Code Review When the Author Is a Machine",
    slug: "code-review-when-author-is-a-machine",
    excerpt:
      "When AI writes most of the code, review stops being a formality and becomes the most important engineering activity you have. It also needs to change shape.",
    coverImage: "emerald",
    tags: ["AI", "Code Review", "Engineering"],
    readingTime: 6,
    publishedAt: "2026-03-18",
    author: "Herdoy",
    content: `Code review was designed around a human author: someone who understood the change, made deliberate trade-offs, and could answer "why did you do it this way?" When the author is a model, every one of those assumptions breaks — and review has to adapt.

## Review intent, not just syntax

AI-generated code is usually syntactically clean and stylistically consistent, which makes it *look* more trustworthy than it is. The old review reflexes — nitpicking naming, formatting, obvious bugs — matter less because the machine rarely fumbles those. What it fumbles is intent: does this actually solve the problem, handle the edge cases, and respect the constraints that weren't written down? Review has to move up the stack, from "is this correct syntax" to "is this the correct thing."

## The reviewer becomes the bottleneck

If one engineer can now generate five PRs in an afternoon, the team's throughput is no longer bound by writing — it's bound by reviewing. That's not a problem to engineer away; it's the new center of gravity. The highest-leverage person on an AI-accelerated team is whoever can read a diff and tell, quickly and correctly, whether it's safe. Protect that capacity.

## Make the machine review the machine

The scale problem has a partial answer: use AI to triage AI. A model can flag the obvious issues, surface the risky diffs, and let the human spend their limited, expensive attention on the seams that actually matter — security, concurrency, data integrity, irreversibility. The machine handles breadth; the human handles judgment. That division is what makes the whole thing sustainable.`,
  },
  {
    title: "Building AI Agents That Actually Ship",
    slug: "building-ai-agents-that-ship",
    excerpt:
      "Most AI agent demos never make it to production. Here's the architecture I use to build grounded, reliable agents that businesses trust.",
    coverImage: "aurora",
    tags: ["AI", "Agents", "Architecture"],
    readingTime: 8,
    publishedAt: "2025-05-12",
    author: "Herdoy",
    content: `The gap between an impressive AI demo and a production agent is enormous. A demo needs to work once; an agent needs to work ten thousand times, safely, on inputs nobody anticipated.

## Ground everything in retrieval

Hallucination is the number one reason agents fail in production. The fix is not a better prompt — it's grounding. Every claim the agent makes should trace back to a retrieved, citable source. If the retrieval returns nothing relevant, the agent should say it doesn't know and escalate.

## Design for human handoff from day one

The best agents know their limits. Build confidence scoring into every response and route low-confidence cases to a human with full conversation context attached. Users forgive an agent that hands off gracefully; they never forgive one that confidently lies.

## Instrument deflection and CSAT

You cannot improve what you do not measure. Track deflection rate, escalation rate, and customer satisfaction per intent. These numbers tell you exactly where the agent is strong and where it needs more grounding data.

Ship small, ground hard, measure everything — and your agent will earn trust instead of eroding it.`,
  },
  {
    title: "The Performance Budget That Wins Clients",
    slug: "performance-budget-that-wins-clients",
    excerpt:
      "Speed is a feature. Here's how I keep Lighthouse scores in the high 90s without sacrificing rich, animated experiences.",
    coverImage: "violet",
    tags: ["Performance", "Next.js", "Web Vitals"],
    readingTime: 6,
    publishedAt: "2025-04-02",
    author: "Herdoy",
    content: `Clients rarely ask for performance by name — but they always feel it. A fast site feels premium and trustworthy before a single word is read.

## Server components by default

In the Next.js App Router, ship JavaScript only where it earns its place. Keep marketing pages as server components and reserve client components for genuine interactivity — cursors, forms, animations.

## Animate transforms, never layout

Every animation in a high-performance site uses only \`transform\` and \`opacity\`. Animating width, height, or top triggers layout and tanks your frame rate. Respect \`prefers-reduced-motion\` and your site stays smooth for everyone.

## Reserve space for everything

Cumulative Layout Shift is the silent conversion killer. Declare image dimensions, reserve space for async content, and your pages will feel rock-solid as they load.

Performance is not a trade-off against beauty — it's what makes beauty feel effortless.`,
  },
  {
    title: "Why I Build SaaS Multi-Tenant From the Start",
    slug: "multi-tenant-saas-from-the-start",
    excerpt:
      "Retrofitting multi-tenancy is painful. Here's how to model tenants, data isolation, and billing so your SaaS scales cleanly.",
    coverImage: "emerald",
    tags: ["SaaS", "Architecture", "PostgreSQL"],
    readingTime: 7,
    publishedAt: "2025-02-20",
    author: "Herdoy",
    content: `The decisions you make in week one of a SaaS define how painful year two will be. Multi-tenancy is the clearest example.

## Model the tenant as a first-class citizen

Every row that belongs to a customer should carry a tenant identifier, enforced at the database layer with row-level security. This makes data leaks structurally impossible rather than a matter of remembering a \`WHERE\` clause.

## Separate billing from identity

Tie billing to the tenant, not the user. Users come and go; the account persists. This small distinction saves enormous refactoring once teams, seats, and usage-based pricing enter the picture.

## Plan for the noisy neighbor

Shared infrastructure means one heavy tenant can degrade everyone. Rate-limit per tenant and monitor usage early so you can isolate or upsell before it becomes a fire.

Get tenancy right at the start and scaling becomes a pricing decision, not an engineering crisis.`,
  },
];

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export const allTags = Array.from(
  new Set(blogPosts.flatMap((p) => p.tags))
).sort();
