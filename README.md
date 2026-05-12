# My Portfolio

Simple, beginner-friendly portfolio website built with React and Vite.

## Features

- Responsive single-page layout
- Editable content in `src/data`
- Reusable project cards
- Dark mode toggle
- Typing effect in the hero section
- Smooth scrolling and subtle hover effects

## Folder Structure

- `src/App.jsx` - main page composition
- `src/components/` - reusable UI sections
- `src/data/profile.js` - personal info, skills, education, and contact links
- `src/data/projects.js` - project cards and placeholder images
- `src/styles/global.css` - all styling

## Install Dependencies

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

Open the local Vite URL shown in the terminal.

## Build For Production

```bash
npm run build
```

## Deploy To Vercel

1. Push the project to GitHub.
2. Open Vercel and import the repository.
3. Use these settings:
	- Build command: `npm run build`
	- Output directory: `dist`
4. Click Deploy.

## Edit Content

Update the placeholder text in these files:

- `src/data/profile.js`
- `src/data/projects.js`

Replace the sample links, skills, and project details with your own information.