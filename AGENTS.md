<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

## Quickstart

| Command                  | Purpose                  |
| ------------------------ | ------------------------ |
| `npm run dev`            | Dev server (Turbopack)   |
| `npm run build`          | Production build         |
| `npm run start`          | Production server        |
| `npm run lint`           | ESLint v9 flat config    |
| `npx tsc --noEmit`       | Type-check (no script)   |
| `npx prisma generate`    | Regenerate Prisma client |
| `npx prisma migrate dev` | Run migrations           |

No test runner, no formatter configured.

## Architecture

- **Next.js 16.2.7** with `cacheComponents: true` → uses the Cache Components model (`use cache` directive, `cacheLife`, not the legacy model). Read `node_modules/next/dist/docs/01-app/01-getting-started/08-caching.md`.
- **Two route groups** with separate root layouts: `src/app/(auth)/` and `src/app/(front)/`. No single root layout at `src/app/layout.tsx`.
- **Thai-language e-commerce starter**: Thai UI labels (`lang="th"`), THB currency, Prompt Thai font.
- **Database**: MariaDB via Prisma v7 driver adapter (`@prisma/adapter-mariadb`). Prisma client generated to `../generated/prisma/client` (outside `src/`). Use `connection()` from `next/server` in server components to signal dynamic rendering for DB queries.
- **Auth**: Better-Auth 1.6.11 with Prisma adapter (`provider: "mysql"`). API handler at `src/app/api/auth/[...all]/route.ts`.
- **Cart**: Zustand client-side state, persisted to localStorage under key `skill-cart`.
- **Styling**: Tailwind CSS v4 (no `tailwind.config.js` — uses `@import "tailwindcss"` in CSS), shadcn/ui "radix-luma" style with Remixicon icons.
- **UI components**: Radix UI via meta-package (`import { Slot } from "radix-ui"`), not per-package `@radix-ui/*` imports.
- **Validation**: Zod v4 (import as `* as z from "zod"`).

## Conventions

- `@/*` maps to `./src/*`.
- Server components by default; mark `"use client"` explicitly.
- Route handlers use Better-Auth's `auth.handler()` from `better-auth/next-js`.
- Auth login page links to `signup` (route is `/signup`, not `/register`).
- No CI, no tests.

## Development Guides

- For TypeScript coding standards and patterns, refer to `docs/typescript-guidelines.md`.
