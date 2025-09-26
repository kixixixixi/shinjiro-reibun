# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 application using React 19 with TypeScript. The project uses the App Router architecture and is configured for Japanese locale (`lang="ja"`).

## Development Commands

**Package Manager**: Use `pnpm` (specified in package.json)

**Essential Commands:**
- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm lint` - Run ESLint to check code quality
- `pnpm format` - Format code with Prettier
- `pnpm typecheck` - Run TypeScript type checking

**Code Quality Workflow:**
Always run these commands before committing changes:
1. `pnpm lint` - Check for linting errors
2. `pnpm typecheck` - Verify TypeScript types
3. `pnpm format` - Format code consistently

## Architecture

**Directory Structure:**
- `app/` - Next.js App Router pages and layouts
  - `layout.tsx` - Root layout with Japanese locale
  - `page.tsx` - Home page component
- Uses TypeScript with relaxed strict mode (`strict: false`)

**Technology Stack:**
- Next.js 15.5.4 (App Router)
- React 19.1.1
- TypeScript 5.9.2
- ESLint with accessibility rules (jsx-a11y)
- Prettier for formatting

**Code Style:**
- ESLint configuration includes React, TypeScript, and accessibility rules
- Prettier is configured for consistent formatting
- Components use TypeScript with React.FC pattern

## Key Configuration

- **Node Version**: 24.1.0 (specified in .node-version)
- **Package Manager**: pnpm 10.17.1
- **Locale**: Japanese (`ja`) configured in root layout
- **TypeScript**: Non-strict mode for flexibility