
# Frontend

Next.js App Router frontend. The project uses TypeScript, Tailwind CSS, and the
`@/*` import alias for `src/*`.

## Getting Started

Install dependencies and start the development server:

```bash
pnpm install
pnpm dev
```

Open <http://localhost:3000> in your browser.

Available scripts:

| Script | Purpose |
| --- | --- |
| `pnpm dev` | Start the development server |
| `pnpm lint` | Run ESLint |
| `pnpm build` | Create a production build |
| `pnpm start` | Start the production server |

## Project Structure

```text
src/
├── app/                 # Routes, layouts, loading/error states, metadata
├── components/
│   ├── layout/          # App shell, navigation, headers, footers
│   └── ui/              # Reusable, domain-agnostic UI primitives
├── config/              # Runtime-safe application configuration
├── constants/           # Shared constant values and labels
├── features/            # Domain modules; keep feature-specific code together
├── hooks/               # Reusable client-side React hooks
├── lib/                 # Small shared utilities and pure helpers
├── providers/           # React context and client-side providers
├── services/            # API clients and external service integrations
├── store/               # Global client state, when genuinely needed
└── types/               # Shared TypeScript types

public/
├── icons/               # Static icons
└── images/              # Static images
```

## Conventions

- Keep route composition inside `src/app`; move reusable UI into `src/components`.
- When a feature has more than one related file, create a folder under `src/features`, such as `src/features/auth` or `src/features/dashboard`.
- Keep feature-only components, schemas, queries, and types inside that feature folder.
- Use `@/` imports for code under `src`, for example `@/components/ui/button`.
- Prefer server components by default. Add `"use client"` only at the smallest client boundary that needs browser state or event handlers.
- Keep `src/lib` small and dependency-light. It is for shared primitives, not a dumping ground for feature code.
- Add a new top-level folder only when its ownership boundary is clear.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
