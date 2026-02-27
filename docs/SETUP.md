# 🚀 Local Development Setup Guide

## Prerequisites

Before you begin, ensure you have the following installed:

| Tool | Version | Download |
|------|---------|----------|
| Node.js | v18+ (LTS recommended) | [nodejs.org](https://nodejs.org/) |
| npm | v9+ (comes with Node) | — |
| Git | Latest | [git-scm.com](https://git-scm.com/) |
| MongoDB Atlas | Free tier or higher | [mongodb.com/atlas](https://www.mongodb.com/atlas) |

---

## Step 1: Clone the Repository

```bash
git clone https://github.com/YourOrg/Yatara-Ceylon.git
cd Yatara-Ceylon
```

## Step 2: Install Dependencies

```bash
npm install
```

This installs ~1,200 packages including Next.js, React, Tailwind CSS, Mongoose, and Radix UI.

## Step 3: Configure Environment Variables

Create a `.env.local` file in the project root:

```bash
cp .env.example .env.local
```

Fill in the following variables:

```env
# ─── Database ────────────────────────────────────────────
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>?retryWrites=true&w=majority

# ─── Authentication ──────────────────────────────────────
JWT_SECRET=your-super-secret-jwt-key-at-least-32-chars
NEXTAUTH_SECRET=your-nextauth-secret-key

# ─── Application ─────────────────────────────────────────
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3000/api

# ─── PayHere Payment Gateway (Optional) ─────────────────
PAYHERE_MERCHANT_ID=your-merchant-id
PAYHERE_MERCHANT_SECRET=your-merchant-secret
PAYHERE_RETURN_URL=http://localhost:3000/payment/return
PAYHERE_CANCEL_URL=http://localhost:3000/payment/cancel
PAYHERE_NOTIFY_URL=http://localhost:3000/api/payhere/notify
```

### Getting a MongoDB Atlas URI

1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas) and create a free account
2. Create a new cluster (M0 Free Tier is fine)
3. In **Database Access**, create a user with read/write permissions
4. In **Network Access**, add your IP (or `0.0.0.0/0` for development)
5. Click **Connect** → **Connect your application** → Copy the URI
6. Replace `<username>`, `<password>`, and `<dbname>` in the URI

## Step 4: Run the Development Server

```bash
npm run dev
```

The application will start at **http://localhost:3000**.

> **Hot reload** is enabled — any code changes will instantly appear in the browser.

## Step 5: Seed Sample Data (Optional)

To populate the database with sample packages, destinations, and vehicles:

```bash
npm run seed
```

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (hot reload) |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint checks |
| `npm run test` | Run Jest test suite |
| `npm run seed` | Seed database with sample data |

---

## Project Structure Quick Reference

```
src/
├── app/           # Pages and API routes (Next.js App Router)
├── components/    # Reusable UI components
├── lib/           # Utility functions (DB, auth, currency)
├── models/        # Mongoose database schemas
└── middleware.ts  # Authentication middleware
```

---

## Troubleshooting

### "MongooseServerSelectionError"
- Check your `MONGODB_URI` in `.env.local`
- Ensure your IP is whitelisted in MongoDB Atlas Network Access
- Verify the database user credentials

### "Module not found" errors
```bash
rm -rf node_modules .next
npm install
npm run dev
```

### Port 3000 already in use
```bash
npx kill-port 3000
npm run dev
```

### Tailwind styles not applying
```bash
rm -rf .next
npm run dev
```

---

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import repository in [Vercel Dashboard](https://vercel.com)
3. Add all environment variables from `.env.local`
4. Deploy — Vercel auto-detects Next.js

### Manual Build

```bash
npm run build
npm run start
```

The production server runs on port 3000 by default.
