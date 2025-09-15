# GitHub Pages Deployment Guide

## Prerequisites
- GitHub account
- Git installed on your computer
- Node.js and npm installed

## Step 1: Prepare Your Repository

1. **Create a new GitHub repository:**
   - Go to GitHub.com
   - Click "New repository"
   - Name it something like `portfolio` or `my-portfolio`
   - Make it public
   - Don't initialize with README (you'll push existing code)

## Step 2: Configure Your Project

1. **Update package.json:**
   
   Add these scripts to your "scripts" section:
   ```json
   "build-frontend": "vite build && cp dist/public/index.html dist/public/404.html",
   "build-frontend:win": "vite build && copy dist\\public\\index.html dist\\public\\404.html",
   "predeploy": "npm run build-frontend",
   "deploy": "gh-pages -d dist/public"
   ```
   
   **Note:** Use `build-frontend:win` on Windows, `build-frontend` on Mac/Linux.

2. **Update vite.config.ts:**
   
   Add the base path to your vite.config.ts:
   
   **For project pages (username.github.io/repository-name):**
   ```typescript
   export default defineConfig({
     base: '/YOUR-REPOSITORY-NAME/',
     // ... rest of your existing config
   });
   ```
   
   **For user/organization pages (username.github.io):**
   ```typescript
   export default defineConfig({
     base: '/',
     // ... rest of your existing config
   });
   ```

## Step 3: Deploy to GitHub

1. **Initialize Git and push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
   git push -u origin main
   ```

2. **Deploy to GitHub Pages:**
   ```bash
   npm run deploy
   ```

   This will:
   - Build your React app for production
   - Create a `gh-pages` branch
   - Deploy your built files to GitHub Pages

## Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Select "gh-pages" branch
6. Click "Save"

Your site will be available at: `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY`

## Step 5: Update and Redeploy

Whenever you make changes:
1. Commit your changes: `git add . && git commit -m "Update portfolio"`
2. Push to main: `git push`
3. Redeploy: `npm run deploy`

## Important Notes

- The first deployment may take 5-10 minutes to go live
- Any attached assets (like your CV) will be included in the build
- Your site will be fully static (no backend functionality)
- **The contact form won't work** - you'll need to:
  - Remove it, OR
  - Replace it with a service like [Formspree](https://formspree.io/), [Netlify Forms](https://www.netlify.com/products/forms/), or [EmailJS](https://www.emailjs.com/)
- The 404.html file ensures your routing works when users refresh pages or visit direct links

## Alternative: Using GitHub Actions (Advanced)

You can also set up automatic deployment using GitHub Actions by creating `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout
      uses: actions/checkout@v3

    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'

    - name: Install dependencies
      run: npm install

    - name: Build
      run: |
        npm run build-frontend
        cp dist/public/index.html dist/public/404.html

    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist/public
```

This will automatically deploy whenever you push to main branch.

## Handling the Contact Form

Since GitHub Pages only serves static files, your contact form won't work as-is. Here are your options:

### Option 1: Replace with External Service (Recommended)

**Using Formspree (Free tier available):**

1. Sign up at [formspree.io](https://formspree.io/)
2. Create a new form and get your form endpoint
3. Update your contact form to:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
     <input type="text" name="name" required>
     <input type="email" name="email" required>
     <input type="text" name="subject" required>
     <textarea name="message" required></textarea>
     <button type="submit">Send Message</button>
   </form>
   ```

**Using EmailJS:**

1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Set up email service and template
3. Replace form submission with EmailJS API calls

### Option 2: Remove Contact Form

If you prefer to keep it simple, you can remove the contact form and just display your contact information (email, phone, LinkedIn).

### Option 3: Use Netlify Instead

Consider deploying to [Netlify](https://netlify.com) instead of GitHub Pages - it supports form handling out of the box with their Forms feature.