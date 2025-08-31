
# Trace-Net

Trace-Net is a modern, robust, and visually rich security dashboard built with Next.js, TypeScript, and Tailwind CSS. It features dynamic and static data visualizations, user authentication, exportable reports, and a beautiful dark/light theme toggle.

## Features

- **Dashboard Overview:** See recent cases, system health, and quick filters at a glance.
- **Graph View:** Interactive and static network graphs for threat and case relationships.
- **Timeline & Heatmap:** Visualize events over time and activity by hour/day.
- **Reports & Export:** Export case metadata as PDF, CSV, or JSON with a single click.
- **Search & Analytics:** Powerful search and analytics with static/demo data fallback.
- **Settings:** Admin controls, parser catalog, retention, and audit logs.
- **Authentication:** Supabase-powered login/logout and protected routes.
- **Theming:** Seamless dark/light mode with next-themes and Tailwind CSS.
- **Notifications:** Toast notifications for user feedback.

## Live Demo

**[View Trace-Net on Vercel](https://vercel.com/garv-pankajs-projects/v0-futuristic-dashboard)**

## Getting Started

1. **Clone the repository:**
	```sh
	git clone https://github.com/garv-pankajs-projects/trace-net.git
	cd trace-net
	```
2. **Install dependencies:**
	```sh
	pnpm install
	# or
	npm install
	```
3. **Set up environment variables:**
	- Copy `.env.example` to `.env.local` and fill in your Supabase credentials and any other required secrets.
4. **Run the development server:**
	```sh
	pnpm dev
	# or
	npm run dev
	```
5. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

## Project Structure

- `app/` — Next.js app directory (pages, layouts, API routes)
- `components/` — Reusable UI and feature components
- `hooks/` — Custom React hooks
- `lib/` — Utilities and Supabase client
- `public/` — Static assets
- `styles/` — Global and Tailwind CSS

## Tech Stack

- Next.js 15 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Supabase (auth & data)
- next-themes (theming)
- Vercel (deployment)

## Credits

- Built by Garv Pankaj and contributors


---

For questions or support, open an issue or contact the maintainer.
