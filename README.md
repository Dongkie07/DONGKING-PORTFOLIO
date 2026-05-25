# Dongking Signature Portfolio

A future-ready React + Vite portfolio for a technology professional. The design is built to stay clean even when more projects, certificates, seminars, competitions, awards, and gallery items are added later.

## Run locally

```bash
npm install
npm run dev
```

## Build for deployment

```bash
npm run build
```

## Edit content

- Profile, name, role, email: `src/config/siteConfig.js`
- Projects/systems: `src/data/projects.js`
- Achievements: `src/data/achievements.js`
- Trainings/seminars: `src/data/trainings.js`
- Certificates/photos/gallery items: `src/data/galleryItems.js`
- Main visual style: `src/styles/`

## Add more projects

Add a new object inside `src/data/projects.js`. The section automatically updates with filtering, balanced spacing, and responsive cards.

## Add more certificates or gallery items

Place images in `public/images/`, then add entries in `src/data/galleryItems.js`.

Example:

```js
{
  title: 'Certificate Title',
  category: 'Certificate',
  date: '2026',
  image: '/images/my-certificate.jpg',
  description: 'Short description of the certificate.'
}
```
