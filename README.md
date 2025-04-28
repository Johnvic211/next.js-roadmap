# Next.js Full Learning Checklist

Welcome to my **Next.js Full Learning Journey!** 🚀

This project is a compilation of all the phases and mini-projects I've worked on while learning **React** and **Next.js**. It follows a structured roadmap from basic concepts to deploying a full-stack app. Below is the full checklist that I follow to ensure I’m progressing with strong foundational knowledge and hands-on practice.

### Technologies & Tools I’m Using:
- **React** – The core library for building user interfaces.
- **TypeScript** – A superset of JavaScript that adds static typing, providing better tooling and more robust code.
- **Next.js** – For building server-rendered and static web applications with React.
- **Typescri.js** – For building server-rendered and static web applications with React.
- **Tailwind CSS** – Utility-first CSS framework for fast UI development.
- **shadcn** – A UI component library built with Radix UI, designed for a great developer experience.
- **MySQL** – Relational database management system to store and manage data.
- **Prisma** – ORM for easy interaction with databases in Node.js and TypeScript.
- **Vercel** – Deployment platform for Next.js apps.
- **JWT (JSON Web Tokens)** – For user authentication and session management.
- **next-auth** – Authentication library for Next.js to simplify handling user sign-in and session.
---

## Phase 1: Foundation (React Basics)
Before diving into Next.js, make sure you’re confident with these React fundamentals:

- **JSX Syntax**
  - Understanding how HTML is written in JavaScript
  - Example: `<h1>Hello, World</h1>`
- **Components**
  - Functional Components (`const MyComponent = () => {}`)
  - Props (passing data to components)
  - Example: `<MyComponent name="Jack" />`
- **useState and useEffect Hooks**
  - `useState()` for managing state
  - `useEffect()` for side effects like data fetching
  - Example: `<input onChange={e => setState(e.target.value)} />`
- **Conditional Rendering**
  - Rendering different components based on state or props
  - Example: `isLoggedIn ? <Profile /> : <Login />`
- **Handling Forms and Inputs**
  - Controlled components (inputs with state)
  - Form submission handling

## Phase 2: Setting Up and Understanding Next.js
- Install Next.js: `npx create-next-app@latest`
- Understanding project structure:
  - `pages/`, `public/`, `styles/`
- **Pages and Routing**
  - Automatic routing (e.g., `pages/about.js`)
  - Dynamic routing (`[slug].js`) and `next/dynamic`
  - Linking between pages (`next/link`)
- **Styling in Next.js**
  - Global styles (`styles/global.css`)
  - CSS Modules (`styles/Home.module.css`)
  - Tailwind CSS setup (`npm install tailwindcss`)
- **Static vs Dynamic Pages**
  - `getStaticProps` for static pages
  - `getServerSideProps` for server-rendered pages
  - Client-side rendering with `useEffect`

## Phase 3: App Router (Next.js 13+)
- Understanding the App Router: `app/` vs `pages/`
- Basic page setup in `app/page.tsx`
- **Layouts and Nested Routing**
  - Layouts (`app/layout.tsx`)
  - Nested routes (`app/dashboard/page.tsx`)
- **Loading and Error States**
  - `loading.tsx` and `error.tsx`

## Phase 4: Data Fetching in Next.js
- `getStaticProps` – Static Site Generation
- `getServerSideProps` – Server-Side Rendering
- **Client-Side Fetching with `useEffect`**
- **Using SWR or React Query**

## Phase 5: Backend with API Routes
- **Understanding API Routes**
  - Creating routes in `pages/api/`
- **Handling HTTP Methods** (GET, POST, PUT, DELETE)
- **Connecting to a Database** (e.g., Prisma + PostgreSQL/MySQL)
- **Authentication and Authorization**
  - Form-based login
  - JWT or `next-auth`

## Phase 6: Forms and Authentication
- **Controlled Components for Forms**
- **Form Validation** (with `yup` or `react-hook-form`)
- **Login with JWT / NextAuth.js**

## Phase 7: Advanced Features in Next.js
- **Image Optimization** with `<Image>`
- **Dynamic Imports** with `next/dynamic`
- **API Caching and Edge Functions**
- **Internationalization (i18n)**

## Phase 8: State Management and Optimization
- **Context API**
- **Redux (optional)**
- **Performance Optimization**
  - Code splitting, `next/head`, image/font optimization

## Phase 9: Deployment and Production
- **Vercel Deployment**
- **Environment Variables**
- **Optimizing for Production**
- **Error Logging (e.g., Sentry)**

## Phase 10: Final Project (Capstone)
- Full-stack CRUD app (e.g., blog or e-commerce)
- Includes:
  - Authentication
  - API routes
  - Database integration
- Deployed on Vercel or DigitalOcean

---

> **Note:** This checklist serves as a guide and documentation for everything I've learned and built using React and Next.js. Each phase includes its own mini-projects or feature implementations inside this repo.