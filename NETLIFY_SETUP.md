# Netlify Deployment Setup Guide

## Required Environment Variables

Configure these environment variables in your Netlify dashboard under **Site settings > Environment variables**:

### Required Variables

1. **NEXT_PUBLIC_SUPABASE_URL**
   - Your Supabase project URL
   - Example: `https://your-project.supabase.co`

2. **NEXT_PUBLIC_SUPABASE_ANON_KEY**
   - Your Supabase anonymous/public key
   - Found in Supabase Dashboard > Settings > API

3. **NEXT_PUBLIC_SITE_URL**
   - Your production site URL
   - Example: `https://essentials.mpb.health`

### Optional Variables (Recommended)

4. **NEXT_PUBLIC_GTM_ID**
   - Google Tag Manager container ID
   - Format: `GTM-XXXXXXX`
   - Used for analytics tracking

5. **NEXT_PUBLIC_GOOGLE_VERIFICATION**
   - Google Search Console verification code
   - Used for site verification in metadata

6. **NEXT_PUBLIC_ENROLL_URL**
   - Full enrollment checkout URL
   - Default: `https://www.1enrollment.com/order/checkout.cfm?id=768413&pdid=42463`

7. **VENDOR_CHECKOUT_BASE**
   - Base URL for vendor checkout (used by Netlify Function)
   - Default: `https://www.1enrollment.com/order/checkout.cfm`

## Build Settings

Verify these settings in Netlify:

- **Build command:** `npm run build`
- **Publish directory:** `out`
- **Node version:** 18 (set via NODE_VERSION environment variable or .nvmrc)

## Deployment Checklist

- [ ] All environment variables configured in Netlify
- [ ] Build command set to `npm run build`
- [ ] Publish directory set to `out`
- [ ] Node version set to 18
- [ ] Custom domain configured (if applicable)
- [ ] HTTPS/SSL enabled
- [ ] Deploy previews enabled for pull requests

## Missing Assets Note

The following assets are referenced in the code but not included in the repository. You may want to add them:

- `/public/og-image.jpg` - Open Graph image (1200x630px recommended)
- `/public/favicon-16x16.png` - Small favicon
- `/public/favicon-32x32.png` - Standard favicon
- `/public/apple-touch-icon.png` - Apple touch icon (180x180px)
- `/public/safari-pinned-tab.svg` - Safari pinned tab icon

Without these files, the site will still deploy and function, but these metadata assets will return 404 errors.

## Troubleshooting

If deployment fails:

1. Check the Netlify build logs for specific error messages
2. Verify all environment variables are set correctly
3. Ensure the Node version is 18
4. Clear cache and redeploy: **Deploys > Trigger deploy > Clear cache and deploy site**
5. Check that all image files in `/public` are valid (not placeholder files)

## Netlify Function

The site includes a serverless function at `/netlify/functions/detect-embed.ts` that checks if the vendor checkout page can be embedded. This function:

- Runs at `/.netlify/functions/detect-embed`
- Requires no special configuration
- Uses the VENDOR_CHECKOUT_BASE environment variable
- Returns JSON indicating embed capability
