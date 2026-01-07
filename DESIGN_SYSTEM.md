# Design System Documentation

This document outlines the clean, modern design system used throughout this portfolio website. Use this as a reference when building similar projects.

## Table of Contents
1. [Design Principles](#design-principles)
2. [Color Palette](#color-palette)
3. [Typography](#typography)
4. [Spacing & Layout](#spacing--layout)
5. [Components](#components)
6. [Animations](#animations)
7. [Dark Mode](#dark-mode)
8. [Code Snippets](#code-snippets)

---

## Design Principles

### Core Values
- **Minimalist & Clean**: Focused content with generous whitespace
- **Consistent**: Unified design language across all pages
- **Accessible**: High contrast ratios, clear hierarchy
- **Smooth**: Subtle animations and transitions
- **Responsive**: Mobile-first, adapts beautifully to all screen sizes

### Visual Style
- Soft gradients for backgrounds
- Rounded corners (rounded-xl, rounded-2xl)
- Subtle borders and shadows
- Gentle hover effects
- Floating animations for visual interest

---

## Color Palette

### Primary Colors
```javascript
// Blue (Primary Actions & Main Navigation)
{
  light: {
    bg: "bg-blue-100/70",
    text: "text-blue-700",
    border: "border-blue-200/50",
    hover: "hover:text-blue-700"
  },
  dark: {
    bg: "bg-blue-600/20",
    text: "text-blue-400",
    border: "border-blue-600/30",
    hover: "hover:text-blue-200"
  }
}

// Purple (Culture & Heritage Section)
{
  light: {
    bg: "bg-purple-100/70",
    text: "text-purple-700",
    border: "border-purple-200/50",
    hover: "hover:text-purple-700"
  },
  dark: {
    bg: "bg-purple-600/20",
    text: "text-purple-400",
    border: "border-purple-600/30",
    hover: "hover:text-purple-300"
  }
}

// Green (Nature & Geography)
{
  light: {
    bg: "bg-green-100/70",
    text: "text-green-700",
    border: "border-green-200/50"
  },
  dark: {
    bg: "bg-green-600/20",
    text: "text-green-400",
    border: "border-green-600/30"
  }
}
```

### Neutral Colors (Slate)
```javascript
{
  // Background Gradients
  light: "bg-gradient-to-b from-slate-50 via-slate-100/80 to-white",
  dark: "bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950",

  // Text Hierarchy
  heading: {
    light: "text-slate-900",
    dark: "text-slate-100"
  },
  subheading: {
    light: "text-slate-700",
    dark: "text-slate-300"
  },
  body: {
    light: "text-slate-600",
    dark: "text-slate-400"
  },

  // Component Backgrounds
  card: {
    light: "bg-white/80 border-slate-200",
    dark: "bg-slate-800/50 border-slate-700/50"
  },
  cardNested: {
    light: "bg-slate-50 border-slate-200/50",
    dark: "bg-slate-900/50 border-slate-700/30"
  }
}
```

---

## Typography

### Font Family
```css
font-sans /* Used globally - clean, modern sans-serif */
```

### Type Scale
```javascript
{
  // Headings
  h1: "text-4xl sm:text-5xl lg:text-6xl font-bold",
  h2: "text-2xl font-bold",
  h3: "text-lg font-semibold",

  // Subtitle/Hero
  subtitle: "text-xl sm:text-2xl font-semibold",

  // Body Text
  body: "text-lg leading-relaxed",
  bodySmall: "text-sm",

  // Labels & Tags
  label: "text-xs font-semibold uppercase tracking-wider",
  tag: "text-sm font-medium"
}
```

### Text Treatment
```javascript
{
  // Gradient Text (for brand/logo)
  gradientText: "bg-gradient-to-r from-blue-600 to-blue-500 dark:from-slate-200 dark:to-slate-300 bg-clip-text text-transparent",

  // Line Height
  tight: "leading-tight",
  snug: "leading-snug",
  relaxed: "leading-relaxed"
}
```

---

## Spacing & Layout

### Container Widths
```javascript
{
  maxWidth: "max-w-4xl mx-auto", // Content pages
  wideMaxWidth: "max-w-6xl mx-auto", // Home/landing
  fullWidth: "container mx-auto px-4"
}
```

### Padding/Margins
```javascript
{
  // Section Padding
  sectionY: "pt-24 pb-16", // Top accounts for fixed header

  // Horizontal Padding (responsive)
  sectionX: "px-4 sm:px-6 lg:px-8",

  // Component Spacing
  cardPadding: "p-8",
  cardInnerPadding: "p-6",

  // Gaps
  sectionGap: "space-y-12",
  contentGap: "space-y-6",
  smallGap: "space-y-4"
}
```

### Grid Layouts
```javascript
{
  twoColumn: "grid md:grid-cols-2 gap-6",
  twoColumnLarge: "grid md:grid-cols-2 gap-16"
}
```

---

## Components

### 1. Page Header Pattern
```tsx
{/* Standard page header - centered, icon + title + description */}
<div className="text-center mb-16">
  <div className="flex justify-center mb-6">
    <div className={`p-4 rounded-2xl ${
      darkMode
        ? "bg-blue-600/20 border border-blue-600/30"
        : "bg-blue-100/70 border border-blue-200/50"
    }`}>
      <IconComponent className={`w-12 h-12 ${
        darkMode ? "text-blue-400" : "text-blue-700"
      }`} />
    </div>
  </div>
  <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 transition-colors duration-300
    ${darkMode ? "text-slate-100" : "text-slate-900"}`}>
    Page Title
  </h1>
  <p className={`text-xl sm:text-2xl font-semibold mb-4 transition-colors duration-300
    ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
    Subtitle goes here
  </p>
  <p className={`text-lg leading-relaxed transition-colors duration-300
    ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
    Description text
  </p>
</div>
```

### 2. Content Section Card
```tsx
{/* Standard content section with icon header */}
<section className={`p-8 rounded-2xl transition-all duration-300 ${
  darkMode
    ? "bg-slate-800/50 border border-slate-700/50"
    : "bg-white/80 border border-slate-200"
}`}>
  <div className="flex items-center gap-3 mb-6">
    <IconComponent className={`w-6 h-6 ${
      darkMode ? "text-blue-400" : "text-blue-700"
    }`} />
    <h2 className={`text-2xl font-bold ${
      darkMode ? "text-slate-100" : "text-slate-900"
    }`}>
      Section Title
    </h2>
  </div>
  <div className={`space-y-4 text-lg leading-relaxed ${
    darkMode ? "text-slate-300" : "text-slate-700"
  }`}>
    {/* Content */}
  </div>
</section>
```

### 3. Feature Grid Cards
```tsx
{/* Grid of feature/highlight cards */}
<div className="grid md:grid-cols-2 gap-6">
  {features.map((feature, index) => (
    <div key={index} className={`p-6 rounded-xl transition-all duration-300 ${
      darkMode
        ? "bg-slate-900/50 border border-slate-700/30"
        : "bg-slate-50 border border-slate-200/50"
    }`}>
      <h3 className={`font-semibold text-lg mb-2 ${
        darkMode ? "text-slate-200" : "text-slate-800"
      }`}>
        {feature.title}
      </h3>
      <p className={`${
        darkMode ? "text-slate-400" : "text-slate-600"
      }`}>
        {feature.description}
      </p>
    </div>
  ))}
</div>
```

### 4. Floating Tag/Badge
```tsx
{/* Used for skills, categories, etc. */}
<span className={`group relative px-4 py-2 rounded-full text-sm font-medium overflow-hidden animate-tag-float hover:scale-105 transition-transform duration-300 border
  ${darkMode
    ? "bg-slate-800/80 text-slate-200 hover:text-slate-100 border-slate-700/50"
    : "bg-white/80 text-slate-700 hover:text-slate-900 border-slate-200"
  }`}>
  <div className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500
    ${darkMode ? "bg-slate-700/30" : "bg-slate-100/50"}`} />
  <span className="relative z-10">Tag Text</span>
</span>
```

### 5. Button Pattern
```tsx
{/* Primary CTA button */}
<button className={`group relative px-8 py-3 rounded-lg overflow-hidden transition-all duration-500 animate-subtle-pulse hover:scale-105 border-2 font-medium text-sm
  ${darkMode
    ? "bg-blue-600 text-white border-blue-500"
    : "bg-blue-600 text-white border-blue-500"
  }`}>
  <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-slate-600" />
  <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
    Button Text
  </span>
</button>
```

### 6. Navigation Link Pattern
```tsx
{/* Interactive nav link with background scale effect */}
<button className={`px-3 py-2 rounded-lg relative group transition-colors duration-200 flex items-center gap-1 z-20
  ${isActive(item.href)
    ? "text-blue-700 dark:text-blue-200"
    : "text-slate-600 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-200"
  }`}>
  <span className="relative z-30">{item.name}</span>
  <span className={`absolute inset-0 rounded-lg transition-all duration-200 z-10
    ${isActive(item.href)
      ? "bg-blue-50 dark:bg-blue-900/50 scale-100"
      : "bg-slate-100 dark:bg-slate-800/50 scale-0 group-hover:scale-100"
    }`} />
</button>
```

---

## Animations

### Keyframe Animations
```css
/* Floating effect for images/cards */
@keyframes faster-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}
.animate-faster-float {
  animation: faster-float 4s ease-in-out infinite;
}

/* Tag floating effect */
@keyframes tag-float {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-3px) scale(1.02); }
}
.animate-tag-float {
  animation: tag-float 3s ease-in-out infinite;
}

/* Gentle bounce for hero image */
.animate-gentle-bounce {
  animation: gentle-bounce 6s ease-in-out infinite;
}

/* Subtle pulse for CTAs */
.animate-subtle-pulse {
  animation: subtle-pulse 3s ease-in-out infinite;
}
```

### Transition Classes
```javascript
{
  // Standard transitions
  standard: "transition-all duration-300",
  slow: "transition-all duration-500",

  // Color transitions
  colors: "transition-colors duration-300",

  // Transform transitions
  transform: "transition-transform duration-300",

  // Hover scale effects
  scaleSmall: "hover:scale-[1.02]",
  scaleMedium: "hover:scale-105",
  scaleLarge: "hover:scale-110"
}
```

### Staggered Animation Delays
```tsx
{/* For sequential reveal effects */}
<element
  className="animate-slide-up"
  style={{ animationDelay: "200ms" }}
/>
```

---

## Dark Mode

### Theme Context Pattern
```tsx
// Import and use
import { useTheme } from "../context/ThemeContext";

const MyComponent = () => {
  const { darkMode } = useTheme();

  return (
    <div className={`${darkMode ? "dark-classes" : "light-classes"}`}>
      {/* Content */}
    </div>
  );
};
```

### Conditional Styling Pattern
```javascript
{
  // Simple toggle
  simple: `${darkMode ? "text-slate-100" : "text-slate-900"}`,

  // Multi-property
  complex: `${
    darkMode
      ? "bg-slate-800/50 text-slate-200 border-slate-700/50"
      : "bg-white/80 text-slate-700 border-slate-200"
  }`,

  // Ternary within className string
  inline: `bg-blue-600 ${darkMode ? "text-white" : "text-slate-100"}`
}
```

### Background Pattern Overlay
```tsx
{/* Subtle grid pattern background */}
<div className={`absolute inset-0 bg-[url('/grid.svg')] bg-center animate-subtle-float
  ${darkMode
    ? "bg-grid-slate-700/25 [mask-image:linear-gradient(0deg,black,transparent)]"
    : "bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,transparent)]"
  }`} />
```

---

## Code Snippets

### Complete Page Template
```tsx
"use client";

import React from "react";
import { useTheme } from "../context/ThemeContext";
import { IconName } from "lucide-react";

const PageName: React.FC = () => {
  const { darkMode } = useTheme();

  return (
    <div className={`min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 transition-all duration-300 font-sans
      ${darkMode
        ? "bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
        : "bg-gradient-to-b from-slate-50 via-slate-100/80 to-white"
      }`}>
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className={`p-4 rounded-2xl ${
              darkMode
                ? "bg-blue-600/20 border border-blue-600/30"
                : "bg-blue-100/70 border border-blue-200/50"
            }`}>
              <IconName className={`w-12 h-12 ${
                darkMode ? "text-blue-400" : "text-blue-700"
              }`} />
            </div>
          </div>
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 transition-colors duration-300
            ${darkMode ? "text-slate-100" : "text-slate-900"}`}>
            Page Title
          </h1>
          <p className={`text-xl sm:text-2xl font-semibold mb-4 transition-colors duration-300
            ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
            Subtitle
          </p>
          <p className={`text-lg leading-relaxed transition-colors duration-300
            ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
            Description
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Content sections go here */}
        </div>
      </div>
    </div>
  );
};

export default PageName;
```

### Reusable Section Component
```tsx
interface SectionProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  darkMode: boolean;
  colorScheme?: "blue" | "purple" | "green";
}

const ContentSection: React.FC<SectionProps> = ({
  icon,
  title,
  children,
  darkMode,
  colorScheme = "blue"
}) => {
  const iconColors = {
    blue: darkMode ? "text-blue-400" : "text-blue-700",
    purple: darkMode ? "text-purple-400" : "text-purple-700",
    green: darkMode ? "text-green-400" : "text-green-700"
  };

  return (
    <section className={`p-8 rounded-2xl transition-all duration-300 ${
      darkMode
        ? "bg-slate-800/50 border border-slate-700/50"
        : "bg-white/80 border border-slate-200"
    }`}>
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-6 h-6 ${iconColors[colorScheme]}`}>
          {icon}
        </div>
        <h2 className={`text-2xl font-bold ${
          darkMode ? "text-slate-100" : "text-slate-900"
        }`}>
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
};
```

---

## Best Practices

### 1. Consistency
- Use the same spacing scale throughout (4, 6, 8, 12, 16)
- Stick to the defined color palette
- Maintain consistent border radius (rounded-lg, rounded-xl, rounded-2xl)

### 2. Accessibility
- Ensure sufficient contrast ratios
- Use semantic HTML elements
- Include aria-labels for icon buttons
- Maintain focus states on interactive elements

### 3. Performance
- Use opacity and transform for animations (GPU accelerated)
- Lazy load images with Next.js Image component
- Use `transition-colors` for color changes only

### 4. Responsiveness
- Mobile-first approach
- Test at breakpoints: sm (640px), md (768px), lg (1024px)
- Use responsive typography classes

### 5. Dark Mode
- Always define both light and dark variants
- Test all components in both modes
- Use semi-transparent backgrounds for layering

---

## File Structure
```
app/
├── components/
│   ├── Header.tsx          # Navigation with culture links
│   ├── HeroSection.tsx     # Homepage hero with animations
│   ├── Footer.tsx
│   └── ...
├── context/
│   └── ThemeContext.tsx    # Dark mode state management
├── [page-name]/
│   └── page.tsx            # Individual pages following template
└── globals.css             # Global styles and animations
```

---

## Quick Reference Checklist

When creating a new page:
- [ ] Import `useTheme` from context
- [ ] Wrap in main container with gradient background
- [ ] Add page header with icon, title, subtitle
- [ ] Use `space-y-12` for section spacing
- [ ] Wrap sections in card components
- [ ] Include both light and dark mode classes
- [ ] Add smooth transitions (`transition-all duration-300`)
- [ ] Test responsiveness at all breakpoints
- [ ] Verify accessibility (contrast, focus states)

---

## Color Scheme Quick Reference

| Purpose | Light Mode | Dark Mode |
|---------|-----------|-----------|
| **Page Background** | `from-slate-50 via-slate-100/80 to-white` | `from-slate-950 via-slate-900 to-slate-950` |
| **Card Background** | `bg-white/80 border-slate-200` | `bg-slate-800/50 border-slate-700/50` |
| **Heading Text** | `text-slate-900` | `text-slate-100` |
| **Body Text** | `text-slate-700` | `text-slate-300` |
| **Muted Text** | `text-slate-600` | `text-slate-400` |
| **Primary Accent** | `text-blue-700` | `text-blue-400` |
| **Culture Accent** | `text-purple-700` | `text-purple-300` |

---

*Last Updated: January 2026*
*Version: 1.0*
