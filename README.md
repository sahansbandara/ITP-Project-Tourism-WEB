# 🌴 Yatara Ceylon — TOMS

> **Tour Operations Management System**
> Sri Lanka's first futuristic, modern, elite tourism website powered by the **Liquid Glass Design System**.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=nextdotjs)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?logo=tailwindcss)](https://tailwindcss.com)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?logo=mongodb)](https://mongodb.com)

---

## ✨ Highlights

- 🔮 **Liquid Glass Design System** — Premium glassmorphic UI with frosted surfaces, golden accents, and liquid glass animations
- 🗺️ **Interactive Tour Builder** — Drag-and-drop bespoke itinerary planner with GeoJSON Sri Lanka map
- 💱 **Dual Currency Engine** — Real-time LKR ↔ USD conversion across all pages
- 🎞️ **Cinematic Hero** — Full-viewport video background with rotating text carousel
- 👤 **Multi-Role Dashboard** — Admin, Staff, Vehicle Owner, Hotel Owner portals
- 📊 **Finance Module** — Revenue tracking, invoicing, PayHere payment integration
- 📱 **Fully Responsive** — Mobile-first design with glass-styled mobile navigation

---

## 🚀 Quick Start

```bash
git clone https://github.com/YourOrg/Yatara-Ceylon.git
cd Yatara-Ceylon
npm install
cp .env.example .env.local   # Configure your environment
npm run dev                   # http://localhost:3000
```

> See [docs/SETUP.md](./docs/SETUP.md) for detailed setup instructions.

---

## 📚 Documentation

All documentation is in the [`docs/`](./docs/) folder:

| Document | Description |
|----------|-------------|
| [📖 Architecture](./docs/ARCHITECTURE.md) | System architecture, diagrams, database schema |
| [🚀 Setup Guide](./docs/SETUP.md) | Local development, environment variables, deployment |
| [🔌 API Reference](./docs/API.md) | REST endpoints, auth, request/response schemas |
| [🎨 Design System](./docs/DESIGN-SYSTEM.md) | Liquid Glass CSS classes, colors, typography |
| [📋 Features](./docs/FEATURES.md) | Complete feature breakdown with user flows |

---

## 🏗️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + Liquid Glass System |
| Database | MongoDB Atlas (Mongoose) |
| Auth | JWT + bcrypt + role middleware |
| Payments | PayHere |
| Maps | Leaflet + GeoJSON |
| UI | Radix UI + custom glass components |
| Fonts | Playfair Display · Cormorant Garamond · Montserrat |

---

## 🎨 Design System — Liquid Glass

The UI uses a custom **Liquid Glass Design System** featuring:

- `liquid-glass` — Standard frosted glass panel
- `liquid-glass-dark` — Deep emerald glass (dark sections)
- `liquid-glass-gold` — Gold-accented glass (highlights)
- `liquid-glass-card` — Hoverable glass cards with gold halos
- `liquid-glass-stat` — Dashboard KPI stat cards
- `navbar-transparent` / `navbar-scrolled` — Dynamic navbar states

> Full class reference: [docs/DESIGN-SYSTEM.md](./docs/DESIGN-SYSTEM.md)

---

## 📂 Project Structure

```
src/
├── app/
│   ├── (public)/       # Public pages (Homepage, Packages, etc.)
│   ├── dashboard/      # Admin dashboard
│   ├── api/            # REST API routes
│   ├── auth/           # Login/register
│   └── globals.css     # Liquid Glass CSS
├── components/
│   ├── layout/         # Navbar, Footer, DashboardSidebar
│   ├── public/         # Homepage sections, cards
│   ├── dashboard/      # Dashboard tables, forms
│   └── ui/             # Radix UI primitives
├── lib/                # Utilities (DB, auth, currency)
├── models/             # Mongoose schemas
└── middleware.ts       # Auth guards
```

---

## 📜 License

Proprietary. All rights reserved.

---

<p align="center">
  <strong>Built with ❤️ for Sri Lanka 🇱🇰</strong>
</p>
