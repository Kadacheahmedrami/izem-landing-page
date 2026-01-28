# GiGi Energy Drink - Product Page

## Project Overview

This is a modern, interactive product landing page for GiGi Energy Drink, a premium energy drink brand targeting Gen Z consumers. The project is built with Next.js 16 and features a striking dark theme with electric lime accents, smooth scrolling, and sophisticated animations throughout.

The website showcases an energy drink brand with zero sugar, 75mg caffeine, and natural flavors. It features advanced UI/UX elements including Lenis smooth scrolling, Framer Motion animations, interactive effects, and responsive design.

### Key Technologies
- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4 with custom theme configuration
- Framer Motion for animations
- Lenis for smooth scrolling
- shadcn/ui components
- Lucide React icons

### Design Features
- Dark charcoal background (#121212) with electric lime (#AFFF00) accents
- Premium energy drink brand hierarchy and UX patterns
- Custom animations including floating, pulsing, and marquee effects
- Glassmorphism navigation with blur backdrop
- Noise overlay for texture
- OKLCH color space for accessible color definitions

## Building and Running

### Prerequisites
- Node.js (version compatible with React 19)
- pnpm (as indicated by pnpm-lock.yaml)

### Setup and Development

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Run the development server:**
   ```bash
   pnpm dev
   ```
   The application will be available at http://localhost:3000

3. **Production build:**
   ```bash
   pnpm build
   ```

4. **Start production server:**
   ```bash
   pnpm start
   ```

5. **Lint the code:**
   ```bash
   pnpm lint
   ```

### Project Structure

```
product-page/
├── app/                    # Next.js App Router pages
│   ├── globals.css         # Global styles and custom animations
│   ├── layout.tsx          # Root layout with providers
│   └── page.tsx            # Main home page
├── components/             # Reusable React components
│   ├── ui/                 # shadcn/ui components
│   ├── hero-section.tsx    # Hero section with animations
│   ├── flavor-carousel.tsx # Interactive flavor showcase
│   ├── bento-grid.tsx      # 3D grid with animations
│   ├── navigation.tsx      # Glassmorphism navigation
│   └── ...                 # Other sections
├── lib/                    # Utility functions
├── hooks/                  # Custom React hooks
├── public/                 # Static assets
└── styles/                 # Additional style files
```

## Development Conventions

### Styling
- Uses Tailwind CSS v4 with custom theme configuration in globals.css
- OKLCH color space for accessible colors
- Custom CSS variables for theme management
- Component-specific styling with shadcn/ui patterns

### Animations
- Framer Motion for complex animations and micro-interactions
- Custom CSS animations for background effects
- Parallax scrolling effects using scroll transforms
- Spring physics for natural movement

### Components
- Built with shadcn/ui component library
- Reusable, modular components
- TypeScript interfaces for props
- Client-side components where interactivity is needed

### Accessibility
- Semantic HTML structure
- Proper contrast ratios using OKLCH colors
- Keyboard navigable components
- Screen reader friendly markup

### Performance
- Image optimization with Next.js Image component
- Efficient animation implementations
- Lazy loading where appropriate
- Optimized bundle sizes

## Key Features

1. **Lenis Smooth Scrolling** - Buttery smooth scroll experience with customized settings
2. **Framer Motion Animations** - Spring-based parallax, staggered reveals, 3D tilt cards, and magnetic hover effects
3. **Click Spark Effect** - Interactive spark burst animation on every click
4. **Glassmorphism Navigation** - Sticky header with blur backdrop that transforms on scroll
5. **Interactive Flavor Carousel** - Smooth product showcase with background color transitions
6. **3D Bento Grid** - Mouse-tracking tilt cards with animated borders
7. **Mobile-First Responsive** - Fully optimized for all screen sizes

## Custom Configuration

### Tailwind CSS
- Custom theme with OKLCH color definitions
- Font configuration for Inter (sans) and JetBrains Mono (mono)
- Custom animations and utilities
- Dark mode support

### Next.js
- TypeScript compilation with strict mode
- Image optimization settings
- Path aliasing (@/* maps to project root)

### Color System
The project uses OKLCH color space for accessible color definitions:
- `--lime: oklch(0.92 0.2 128)` (#AFFF00 - brand accent)
- `--charcoal: oklch(0.145 0 0)` (#121212 - dark background)
- `--pineapple: oklch(0.9 0.15 90)`
- `--coconut: oklch(0.95 0.03 90)`

## Component Architecture

The application follows a modular component architecture:
- Layout components in the app directory
- Feature-specific sections in the components directory
- Shared UI components using shadcn/ui
- Custom hooks for complex logic
- Utility functions for common operations

## Brand Identity

The GiGi Energy Drink brand focuses on:
- Zero sugar content
- 75mg natural caffeine
- Natural flavors
- Vitamin B richness
- Premium positioning for ambitious consumers
- Gen Z targeted marketing
- Clean, sustainable energy

The tagline "Dream Big, Drink GiGi" reflects the aspirational nature of the brand.