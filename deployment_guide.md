# Deployment Guide for cryptobyfer.xyz

This guide will help you deploy your application to Vercel and configure your custom domain.

## 1. Push Code to GitHub
I will handle the initial push for you. For future updates, simply run:
```bash
git add .
git commit -m "Description of changes"
git push
```

## 2. Deploy to Vercel
1.  Log in to [Vercel](https://vercel.com/).
2.  Click **"Add New..."** -> **"Project"**.
3.  Select **"Continue with GitHub"**.
4.  Find the repository `cryptoxyz` and click **"Import"**.
5.  **Configure Project:**
    *   **Framework Preset:** Vite (should be detected automatically).
    *   **Root Directory:** `./` (default).
    *   **Build Command:** `npm run build` (default).
    *   **Output Directory:** `dist` (default).
    *   **Install Command:** `npm install` (default).
6.  Click **"Deploy"**.

## 3. Configure Custom Domain (cryptobyfer.xyz)
1.  Once deployed, go to your project **Settings** in Vercel.
2.  Select **"Domains"** from the left sidebar.
3.  Enter `cryptobyfer.xyz` in the input field and click **"Add"**.
4.  **DNS Configuration:**
    Vercel will provide you with DNS records to add to your domain registrar (where you bought the domain, e.g., GoDaddy, Namecheap).
    *   **A Record:** `@` points to `76.76.21.21`
    *   **CNAME Record:** `www` points to `cname.vercel-dns.com`
    *   *Note: Follow the specific instructions shown in your Vercel dashboard.*

## 4. Verify Deployment
Visit [https://cryptobyfer.xyz](https://cryptobyfer.xyz) after the DNS changes propagate (this can take up to 24-48 hours, but is often much faster).
