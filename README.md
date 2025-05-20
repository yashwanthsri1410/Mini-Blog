# 📝 Mini Blog Platform

A simple blog platform built with **Next.js**, **TypeScript**, and **TailwindCSS** as part of an interview assignment. It demonstrates key features like SSG, SSR, dynamic routing, API routes, and clean component structure.

## 🚀 Features

- ✅ Static blog list homepage (`getStaticProps`)
- ✅ Dynamic blog detail pages with fallback (`getStaticPaths`)
- ✅ Admin dashboard using server-side rendering (`getServerSideProps`)
- ✅ Create post form with mock API call (`/api/posts`)
- ✅ Edit/Delete post simulation (with state)
- ✅ TailwindCSS styling and basic SEO with `next/head`
- ✅ Type-safe with TypeScript

## 📦 Tech Stack

- Next.js
- TypeScript
- TailwindCSS
- JSONPlaceholder (Mock API)

## 📂 Project Structure

/pages
├── index.tsx # Homepage
├── blog/[id].tsx # Blog detail page
└── admin/ # Dashboard and Create page

/pages/api
└── posts.ts # Mock post creation API

/components # Reusable UI components
/types # TypeScript interfaces

## 🛠️ Setup Instructions

```bash
# Clone the repository
git clone https://github.com/yashwanthsri1410/Mini-Blog.git

# Navigate into the project
cd Mini-Blog

# Install dependencies
npm install

# Start the development server
npm run dev
```
