# cto-tanstack-convex

## Production Deployment (Vercel + Convex)

This app is configured as a TanStack Start full-stack app using Nitro output.

### 1. Build locally

```bash
npm install
npm run build
```

Expected output includes `.output/public` and `.output/server`.

### 2. Deploy Convex to production

```bash
npx convex login
npx convex deploy
```

After deploy, copy the production Convex URL.

### 3. Set Vercel environment variable

In Vercel project settings, add this Production env var:

- `VITE_CONVEX_URL=<your-convex-production-url>`

### 4. Redeploy on Vercel

Push to your connected branch (or trigger a redeploy in Vercel).

### Notes

- `vercel.json` is intentionally minimal to avoid forcing static SPA behavior.
- Do not set `outputDirectory` to `dist/client` for this app.
