# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

An interactive birthday card application built with React, TypeScript, and Vite. The app presents an animated envelope that opens to reveal a slide-based message system with navigation controls.

## Development Commands

```bash
# Start development server
pnpm dev

# Build for production (runs TypeScript compiler first, then Vite build)
pnpm build

# Preview production build
pnpm preview
```

## Architecture

### Component Hierarchy

The application follows a three-layer component structure:

1. **App.tsx**: Root component managing envelope open/closed state
2. **Envelope.tsx**: Handles envelope animation states (`new`, `open`, `hide`) and contains the Letter component
3. **Letter.tsx**: Manages slide navigation using the `useSlide` hook and renders SlideContent
4. **SlideContent.tsx**: Renders individual slide data (title, icon, content, footer)

### State Management Flow

- App manages `isOpen` state (envelope opened/closed)
- Envelope manages `isHidden` state (envelope visibility after letter interaction)
- Letter manages `currentSlide` index via `useSlide` hook
- Letter triggers `onComplete` callback when user finishes the last slide, which hides the envelope

### Data Structure

Slides are defined in `src/data/slides.ts`:

```typescript
interface Slide {
  title: string
  icon?: string      // Can be emoji text or image URL (http://, https://, /, ./, ../)
  content: string
  footer?: string
}
```

### Styling Architecture

All styles are in `src/index.css` using vanilla CSS with:
- CSS animations for envelope opening/closing (`new`, `open`, `hide` states)
- 3D transforms for envelope flipping effects
- Allan font family from Google Fonts
- Pink/rose color scheme (#ff969f, mistyrose background)

### Custom Hook

`useSlide` hook (in `src/hooks/useSlide.ts`) provides:
- `currentSlide`: current slide index
- `currentSlideData`: current slide object
- `goToNext()`, `goToPrev()`: navigation functions
- `isFirst`, `isLast`: boundary checks
- `totalSlides`: total count

## Key Implementation Details

- Icon rendering in SlideContent detects URLs vs emoji text by checking for `http://`, `https://`, `/`, `./`, `../` prefixes
- Letter component handles "next" button differently on last slide: hides itself and triggers `onComplete()` instead of navigating
- Envelope uses CSS class combinations for animation states, managed via array filtering in `envelopeClasses`
- TypeScript strict mode enabled with unused locals/parameters checks

## Technology Stack

- React 18.2
- TypeScript 5.2 (strict mode)
- Vite 5.0 (build tool)
- pnpm package manager
