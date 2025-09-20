# Mauli Online Center - Multi-Services Business Website

## Overview

This is a React-based business website for Mauli Online Center, a multi-services provider in Sambhajinagar (Maharashtra) offering xerox, printing, online form filling, admission assistance, and food licensing services. The application features a professional single-page design with sections for services, branch locations, customer reviews, and contact functionality. Built with modern web technologies including React, TypeScript, Tailwind CSS, and shadcn/ui components, the site emphasizes accessibility and user experience for diverse customers seeking government and administrative services.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Styling**: Tailwind CSS with custom design system following Material Design principles
- **Component Library**: shadcn/ui components providing consistent, accessible UI elements
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query (TanStack Query) for server state management and API caching
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing

### Backend Architecture
- **Server**: Express.js with TypeScript serving both API endpoints and static assets
- **API Design**: RESTful endpoints with centralized error handling and request logging
- **Data Storage**: In-memory storage implementation with interface for future database integration
- **Development**: Vite for fast development builds with hot module replacement

### Database Schema
The application uses Drizzle ORM with PostgreSQL support for:
- **Users Table**: Basic user authentication with username/password
- **Contact Inquiries Table**: Customer inquiry form submissions with timestamps
- **Schema Validation**: Zod schemas for type-safe database operations and API validation

### UI/UX Design System
- **Color Palette**: Professional blue tones (220 80% 25% primary) with neutral grays and subtle green accents
- **Typography**: System fonts with clear hierarchy using consistent font weights
- **Component Structure**: Card-based layouts with consistent spacing using Tailwind's design tokens
- **Responsive Design**: Mobile-first approach with responsive breakpoints and touch-friendly interactions

## External Dependencies

### Core Technologies
- **Neon Database**: PostgreSQL serverless database for production data storage
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL dialect support
- **Radix UI**: Headless component primitives for accessible UI building blocks

### Development Tools
- **Vite**: Fast build tool with plugin support for React and development features
- **TypeScript**: Static type checking across client, server, and shared code
- **ESBuild**: Fast JavaScript bundler for production builds

### Third-party Services
- **Google Fonts**: Web fonts including Inter, DM Sans, Architects Daughter, and Geist Mono
- **OpenStreetMap**: Embedded maps for branch location display (fallback from Google Maps)
- **Replit Integration**: Development environment plugins and deployment support

### UI Component Library
- **shadcn/ui**: Modern React components built on Radix UI primitives
- **Lucide Icons**: Comprehensive icon library for consistent visual language
- **Class Variance Authority**: Type-safe component variant management