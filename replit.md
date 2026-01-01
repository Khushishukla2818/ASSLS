# ASSLS Community Services Website

## Overview

This is a community-driven nonprofit organization website for ASSLS (Adukondamu S/ST Labor Society), built to showcase their services in agriculture, women empowerment, youth development, healthcare, education, and environmental protection. The application is a React-based single-page application with a modern UI component library, designed to present organizational information, services, team members, testimonials, and contact functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **State Management**: TanStack React Query for server state and caching
- **Animations**: Framer Motion for smooth transitions

### Project Structure
```
client/
├── src/
│   ├── components/ui/    # Reusable shadcn/ui components
│   ├── pages/            # Page components (Home, AboutUs, Services)
│   │   └── sections/     # Page section components
│   ├── hooks/            # Custom React hooks
│   └── lib/              # Utility functions and query client
shared/
└── schema.ts             # Drizzle ORM schema definitions
```

### Design Patterns
- **Component-based architecture**: Pages are composed of reusable section components
- **Path aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`
- **CSS-in-JS alternative**: Tailwind with class-variance-authority for component variants
- **Font system**: Poppins as primary font, loaded via Google Fonts

### Database Schema
- Uses Drizzle ORM with PostgreSQL schema definitions
- Currently defines a basic `users` table with id, username, and password
- Schema validation uses Zod via drizzle-zod integration

### Static Assets
- Figma-exported assets stored in `client/public/figmaAssets/`
- Design reference files in `attached_assets/`

## External Dependencies

### UI Framework
- **Radix UI**: Complete primitive component library (dialogs, dropdowns, accordions, etc.)
- **shadcn/ui**: Pre-styled component wrappers using Tailwind CSS
- **Lucide React**: Icon library

### Data & Forms
- **TanStack React Query**: Async data fetching and caching
- **React Hook Form**: Form state management
- **Zod**: Schema validation
- **date-fns**: Date utility library

### Styling & Animation
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **class-variance-authority**: Component variant management
- **Embla Carousel**: Carousel/slider functionality

### Database (Prepared for future use)
- **Drizzle ORM**: TypeScript-first ORM
- **PostgreSQL**: Relational database (schema ready, connection pending)

### Development Tools
- **Vite**: Build tool with React plugin
- **TypeScript**: Static type checking
- **Replit plugins**: Runtime error overlay, cartographer, dev banner