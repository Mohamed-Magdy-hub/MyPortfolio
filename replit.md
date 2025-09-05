# Overview

This is a full-stack portfolio website for Mohamed Magdy Mahmoud, a Multi-Cloud Engineer & DevOps Specialist. The application showcases professional experience, skills, certifications, projects, and includes a contact form for potential employers or clients. Built as a modern web application with a React frontend and Express backend, featuring a clean, responsive design with dark/light theme support.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state and data fetching
- **Theme System**: Custom theme provider supporting light/dark modes with local storage persistence

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API with JSON communication
- **Request Handling**: Express middleware for JSON parsing, URL encoding, and request logging
- **Error Handling**: Centralized error handling middleware with structured error responses
- **Development**: Custom Vite integration for hot module replacement in development

## Data Storage Solutions
- **Primary Database**: PostgreSQL configured through Drizzle ORM
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Development Storage**: In-memory storage implementation for development/testing
- **Data Models**: User management and contact message storage with proper TypeScript typing

## Authentication and Authorization
- **Session Management**: Express sessions with PostgreSQL session store (connect-pg-simple)
- **Storage Interface**: Abstracted storage layer supporting both memory and database implementations
- **User Model**: Basic user schema with username/password authentication structure

## External Dependencies
- **Database**: Neon Database (PostgreSQL serverless) for production data storage
- **UI Framework**: Extensive Radix UI component suite for accessibility and functionality
- **Validation**: Zod for runtime type validation and schema parsing
- **Development Tools**: Replit integration with cartographer plugin and runtime error overlay
- **Fonts**: Google Fonts integration (Inter, JetBrains Mono, and others)
- **Icons**: Lucide React for consistent iconography
- **Form Handling**: React Hook Form with Hookform resolvers for form validation