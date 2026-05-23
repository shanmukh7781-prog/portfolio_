# 🚀 GitHub Pages Deployment Guide

This guide will help you deploy your portfolio to GitHub Pages step by step.

## 📋 Prerequisites

- GitHub account
- Git installed on your computer
- Node.js installed

## 🔧 Step-by-Step Setup

### Step 1: Create GitHub Repository

1. **Go to GitHub** and create a new repository
2. **Repository name**: `NEWPORT`
3. **Make it public** (required for free GitHub Pages)
4. **Don't initialize** with README (we already have files)

### Step 2: Update Configuration

1. **Configuration is already updated** for your repository:
   ```json
   "build:github": "vite build --base=/NEWPORT/"
   ```


### Step 3: Push to GitHub

Open terminal in your project folder and run:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit files
git commit -m "Initial portfolio commit"

# Add your GitHub repository as origin
git remote add origin https://github.com/shanmukh7781-prog/NEWPORT.git

# Push to GitHub
git branch -M main
git push -u origin main
```


### Step 4: Enable GitHub Pages

1. **Go to your repository** on GitHub
2. **Click "Settings"** tab
3. **Scroll down to "Pages"** in the left sidebar
4. **Under "Source"**, select **"GitHub Actions"**
5. **Save the settings**

### Step 5: Wait for Deployment

1. **Go to "Actions"** tab in your repository
2. **You'll see a workflow running** (building and deploying)
3. **Wait for it to complete** (usually 2-3 minutes)
4. **Green checkmark** means successful deployment

### Step 6: Access Your Site

Your site will be available at:
```
https://shanmukh7781-prog.github.io/NEWPORT/
```


## 🔄 Making Updates

After initial setup, any changes you push will automatically deploy:

```bash
# Make your changes to the code
# Then:
git add .
git commit -m "Update portfolio content"
git push origin main
```

The site will automatically rebuild and deploy!

## 🛠️ Troubleshooting

### Common Issues:

1. **404 Error**: Check if the base path in `package.json` matches your repo name exactly

2. **Build Fails**: Check the Actions tab for error details

3. **Images Not Loading**: Make sure all image URLs are absolute (starting with `https://`)

4. **Styles Not Applied**: Clear browser cache or try incognito mode

### Manual Build (if needed):

```bash
# Build specifically for GitHub Pages
npm run build:github

# Check the dist folder - these are your built files
```

## 📞 Need Help?

If you encounter any issues:

1. **Check Actions tab** for build errors
2. **Verify repository settings** in Pages section
3. **Base path is set to `/NEWPORT/`** - matches your repository name
4. **Try building locally** with `npm run build:github`

## 🎉 Success!

Once deployed, you'll have:
- ✅ Professional portfolio live on GitHub Pages
- ✅ Automatic deployments on every push
- ✅ Free hosting with custom domain option
- ✅ Version control for all changes

Your portfolio will be accessible worldwide at your GitHub Pages URL!