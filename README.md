# Full-Stack Developer Portfolio

A production-style full-stack portfolio built with React, Node.js, and MongoDB.
Includes authentication, role-based access control, admin dashboard, and analytics.

## Tech Stack
Frontend: React, Vite, Tailwind CSS  
Backend: Node.js, Express  
Database: MongoDB Atlas  
Auth: JWT + RBAC  
Deployment: Vercel + Render  
Extras: Docker, GitHub Actions, Analytics

## Features

### Public
- Developer portfolio with VS Code–style UI
- Projects, skills, experience, resume
- Dynamic content from backend APIs

### Admin
- Secure login
- Create / edit / delete projects
- Create / edit blog posts
- Upload images via URLs
- Analytics on project clicks

## API Routes (Planned)

### Auth
- POST /api/auth/register
- POST /api/auth/login
- GET /api/auth/me

### Projects
- GET /api/projects
- GET /api/projects/:id
- POST /api/projects (admin)
- PUT /api/projects/:id (admin)
- DELETE /api/projects/:id (admin)

### Posts
- GET /api/posts
- GET /api/posts/:slug
- POST /api/posts (admin)

## Architecture
Client (React) → REST API (Express) → Database (MongoDB)