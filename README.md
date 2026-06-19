# AI & Robotics Summer Workshop Landing Page

## Project Overview

This repository contains a **full‑stack, production‑ready** landing page for the **AI & Robotics Summer Workshop** (ages 8‑14). It includes:

- **Frontend** – React + TypeScript, Tailwind CSS, dark‑mode toggle, reusable components, React Hook Form with validation, accessible markup, responsive design.
- **Backend** – Express + TypeScript API (`POST /api/enquiry`) with basic validation and placeholder MongoDB integration.
- **Dev Experience** – Workspace set up with two packages (`frontend` and `backend`) managed via npm workspaces.
- **Logo** – Custom playful logo generated for the workshop (see `logo_preview.md`).

## Repository Structure

```
ai-robotics-workshop-landing/
├─ frontend/                # React app
│   ├─ src/
│   │   ├─ components/     # UI components (Header, Hero, Card, FAQ, Form, Footer)
│   │   ├─ App.tsx
│   │   └─ index.tsx
│   ├─ public/
│   │   └─ index.html
│   ├─ tailwind.config.js
│   ├─ tsconfig.json
│   └─ package.json
├─ backend/                 # Express API
│   ├─ src/
│   │   └─ index.ts
│   ├─ tsconfig.json
│   └─ package.json
├─ .gitignore
├─ README.md                # (this file)
└─ logo_preview.md          # Markdown showing the generated logo image
```

## Prerequisites

- **Node.js** (v18 or newer)
- **npm** (v9 or newer)
- Optional: **MongoDB** instance (provide connection string in `.env`)

## Setup & Development

```bash
# Clone (or copy) the project folder
cd c:\Users\ojhaa\Downloads\ai-robotics-workshop-landing

# Install dependencies for both packages
npm install

# Create a .env file for the backend (optional MongoDB)
cp backend/.env.example backend/.env
# Edit backend/.env and set MONGODB_URI if you have a DB
```

### Run Development Servers

```bash
# Frontend (http://localhost:5173)
npm --workspace=frontend run dev

# Backend (http://localhost:5000)
npm --workspace=backend run dev
```

The frontend proxies API requests to `http://localhost:5000` (configured in `vite.config.ts`).

## Build for Production

```bash
# Build frontend static assets
npm --workspace=frontend run build

# Build backend (tsc) and start
npm --workspace=backend run build && npm --workspace=backend start
```

Serve the generated `frontend/dist` folder with any static server (e.g., **serve**, **nginx**, **Vercel**). The API can be deployed to platforms like **Railway**, **Render**, or **Heroku**.

## Environment Variables

- `PORT` – Port for the Express server (default 5000).
- `MONGODB_URI` – MongoDB connection string (optional). If not set, the API will run in **in‑memory** mode and simply return the received data.

## License

MIT – Feel free to use, modify, and share.
