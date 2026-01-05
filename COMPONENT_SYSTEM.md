# Reusable Component System

This document describes the reusable component system for maintaining consistent styling across the entire application.

## Typography Components

Located in: `app/components/ui/Typography.tsx`

All typography components automatically handle dark/light mode theming through the `useTheme()` hook.

### Available Components

#### Headings

```tsx
import { H1, H2, H3, H4 } from "./components/ui/Typography";

// Main page title (4xl on mobile, 5xl on desktop)
<H1>Page Title</H1>
<H1 className="mb-6">Title with margin</H1>

// Section heading (3xl)
<H2>Section Title</H2>
<H2 className="mb-6">Section with margin</H2>

// Subsection heading (2xl)
<H3>Subsection Title</H3>
<H3 className="mb-4">Subsection with margin</H3>

// Card/item heading (xl)
<H4>Item Title</H4>
<H4 className="mb-2">Item with margin</H4>
```

#### Body Text

```tsx
import { BodyText, BodyTextLarge, SmallText, MutedText } from "./components/ui/Typography";

// Standard body text (text-base, leading-relaxed)
<BodyText>
  This is the standard paragraph text used throughout the site.
</BodyText>

// Large body text for emphasis (text-xl)
<BodyTextLarge>
  This is larger body text for introductory paragraphs.
</BodyTextLarge>

// Small text for metadata (text-sm)
<SmallText>Published on Jan 1, 2024</SmallText>

// Muted text for subtle information (text-sm, muted colors)
<MutedText>Location: Remote</MutedText>
```

### Color Scheme

All typography components use consistent colors:
- **Dark mode**:
  - Headings: `text-slate-100`
  - Body: `text-slate-300`
  - Small: `text-slate-400`
  - Muted: `text-slate-500`
- **Light mode**:
  - Headings: `text-slate-900`
  - Body: `text-slate-700`
  - Small: `text-slate-600`
  - Muted: `text-slate-500`

## Card Components

Located in: `app/components/ui/Card.tsx`

### Available Components

```tsx
import { Card, SmallCard } from "./components/ui/Card";

// Large card with heavy padding (p-10 md:p-12)
// Used for main content sections
<Card>
  <H2>Card Title</H2>
  <BodyText>Card content goes here...</BodyText>
</Card>

// Card with hover effect
<Card hover>
  Content with hover animation
</Card>

// Small card with light padding (p-5)
// Used for list items, experience entries, etc.
<SmallCard>
  <H4>Item Title</H4>
  <BodyText>Item description</BodyText>
</SmallCard>

// Small card without hover (static)
<SmallCard hover={false}>
  Static content
</SmallCard>
```

### Card Styling

- **Large Card**:
  - Padding: `p-10 md:p-12`
  - Background: `bg-slate-800/30` (dark) / `bg-white/30` (light)
  - Border: `border-slate-700/50` (dark) / `border-slate-200` (light)
  - Optional hover: `-translate-y-1 shadow-lg`

- **Small Card**:
  - Padding: `p-5`
  - Background: `bg-slate-700/30` (dark) / `bg-slate-50/50` (light)
  - Hover background: `bg-slate-700/50` (dark) / `bg-slate-100/70` (light)
  - Hover animation: `-translate-y-0.5`

## Benefits of This System

1. **Consistency**: All text uses the same sizes and colors
2. **Maintainability**: Change once, apply everywhere
3. **Type Safety**: TypeScript ensures proper usage
4. **Theme Integration**: Automatic dark/light mode support
5. **Reduced Code**: No need to repeat lengthy className strings

## Migration Example

### Before (Old Way)
```tsx
<h2 className={`text-3xl font-bold mb-6 ${darkMode ? "text-slate-100" : "text-slate-900"}`}>
  Section Title
</h2>
<p className={`text-base leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
  This is body text.
</p>
```

### After (New Way)
```tsx
<H2 className="mb-6">Section Title</H2>
<BodyText>This is body text.</BodyText>
```

## Where It's Already Implemented

- ✅ AboutMeNew.tsx (Story tab)
- ✅ AboutMeNew.tsx (Mission tab)

## Next Steps for Migration

Consider updating these components to use the new system:
- PersonalBrand.tsx
- CredibilitySignals.tsx
- FeaturedCompanies.tsx
- LatestBlogPosts.tsx
- Header.tsx (for consistent font usage)
- All other components with repeated styling patterns

## Adding Custom Styling

All components accept a `className` prop for additional customization:

```tsx
<H2 className="mb-8 text-center">Centered heading with more margin</H2>
<BodyText className="italic">Italic body text</BodyText>
<Card className="max-w-4xl mx-auto">Centered card with max width</Card>
```

The custom className is appended to the base classes, allowing you to override or extend the default styling.
