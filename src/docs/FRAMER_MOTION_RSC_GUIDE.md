# Framer Motion + React Server Components: Complete Guide

## 🚨 Root Cause Analysis

### Why This Error Occurs:
The error `Could not find the module "/home/project/node_modules/framer-motion/dist/es/index.mjs#motion#div"` happens because:

1. **Server vs Client Mismatch**: React Server Components run on the server where browser APIs (DOM, window) don't exist
2. **Framer Motion Dependency**: Framer Motion requires browser APIs for animations, measurements, and event handling
3. **Next.js Bundler Confusion**: The RSC bundler can't resolve client-side modules in server components

## ✅ Step-by-Step Solutions

### Solution 1: Add 'use client' Directive (Primary)

**Best for**: Components that need animations and aren't heavily server-dependent

```tsx
'use client'
import { motion } from 'framer-motion'

export function AnimatedComponent() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      Content
    </motion.div>
  )
}
```

### Solution 2: Motion Wrapper Components (Recommended)

**Best for**: Reusable animated components across your app

```tsx
// Use the MotionWrapper components we created
import { MotionDiv, fadeIn } from '@/components/motion'

export function MyComponent() {
  return (
    <MotionDiv variants={fadeIn} initial="initial" animate="animate">
      Content
    </MotionDiv>
  )
}
```

### Solution 3: Dynamic Import with SSR Disabled

**Best for**: Heavy animation components that should only load on client

```tsx
import dynamic from 'next/dynamic'

const AnimatedComponent = dynamic(
  () => import('./AnimatedComponent'),
  { 
    ssr: false,
    loading: () => <div className="animate-pulse">Loading...</div>
  }
)

export function ParentComponent() {
  return <AnimatedComponent />
}
```

### Solution 4: Conditional Client Rendering

**Best for**: Components that need graceful degradation

```tsx
'use client'
import { motion } from 'framer-motion'
import { useIsClient } from '@/components/motion'

export function ConditionalMotion({ children }) {
  const isClient = useIsClient()
  
  if (!isClient) {
    return <div>{children}</div>
  }
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {children}
    </motion.div>
  )
}
```

## 🛠 Implementation Examples

### Example 1: Hero Section with Animations
```tsx
'use client'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1>Welcome</h1>
    </motion.section>
  )
}
```

### Example 2: Button with Hover Effects
```tsx
'use client'
import { motion } from 'framer-motion'

export function AnimatedButton({ children, ...props }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}
```

### Example 3: Staggered List Animation
```tsx
'use client'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export function StaggeredList({ items }) {
  return (
    <motion.ul variants={container} initial="hidden" animate="show">
      {items.map((item, i) => (
        <motion.li key={i} variants={item}>
          {item.text}
        </motion.li>
      ))}
    </motion.ul>
  )
}
```

## ⚖️ Trade-offs Comparison

| Solution | Pros | Cons | Best For |
|----------|------|------|----------|
| 'use client' | Simple, full features | Increases bundle size | Interactive components |
| Wrapper Components | Reusable, consistent | Slight abstraction | Design systems |
| Dynamic Import | Reduces initial bundle | Loading states needed | Heavy animations |
| Conditional Rendering | SEO friendly | Complex logic | Progressive enhancement |

## 🚫 Prevention Tips

### 1. Component Architecture
```
src/
├── components/
│   ├── server/          # Server components only
│   ├── client/          # Client components with 'use client'
│   └── motion/          # Animation wrappers
```

### 2. Naming Conventions
- `*.server.tsx` - Server components only
- `*.client.tsx` - Client components with animations
- `*.motion.tsx` - Motion-specific components

### 3. ESLint Rules
```json
{
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "@next/next/no-missing-use-client": "error"
  }
}
```

### 4. TypeScript Integration
```tsx
// Create motion component types
type MotionComponentProps = React.ComponentProps<typeof motion.div>

interface AnimatedCardProps extends MotionComponentProps {
  title: string
  description: string
}
```

## 🔧 Advanced Configuration

### Next.js Config Optimizations
```js
// next.config.js
module.exports = {
  experimental: {
    serverComponentsExternalPackages: ['framer-motion'],
  },
  transpilePackages: ['framer-motion'],
}
```

### Bundle Analysis
```bash
# Check bundle size impact
npm run build
npm run analyze
```

## 📦 Package.json Dependencies
```json
{
  "dependencies": {
    "framer-motion": "^11.0.0",
    "next": "14.2.5",
    "react": "18.2.0"
  },
  "devDependencies": {
    "@next/bundle-analyzer": "^14.0.0"
  }
}
```

## 🎯 Best Practices Summary

1. ✅ **Always use 'use client'** for framer-motion components
2. ✅ **Create reusable motion wrappers** for consistency
3. ✅ **Use dynamic imports** for heavy animations
4. ✅ **Implement graceful fallbacks** for server rendering
5. ✅ **Configure Next.js properly** for motion libraries
6. ❌ **Don't use motion in server components** without client directive
7. ❌ **Don't import motion** in server-only files
8. ❌ **Don't forget loading states** for dynamic components

Following this guide ensures smooth framer-motion integration with Next.js RSC! 🚀