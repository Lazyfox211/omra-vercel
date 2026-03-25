# Omra — Mehdi Abu AbdiLleh

Site de pèlerinage Omra avec animation hublot d'avion au scroll. Thème clair blanc/vert islamique.

## Stack
- **Next.js 14** (App Router)
- **Tailwind CSS 3.4**
- **GSAP** (ScrollTrigger pour l'animation du hublot)
- **Framer Motion** (animations des sections)

## Déployer sur Vercel

### Option 1 : CLI
```bash
npm install
npx vercel
```

### Option 2 : GitHub
1. Push ce dossier sur un repo GitHub
2. Va sur [vercel.com/new](https://vercel.com/new)
3. Importe le repo
4. Clique "Deploy"

### Option 3 : Local
```bash
npm install
npm run dev
```
→ Ouvre http://localhost:3000

## Structure
```
src/
├── app/
│   ├── layout.js
│   ├── page.js
│   └── globals.css
├── components/
│   ├── Hero.js
│   ├── Navbar.js
│   ├── Stats.js
│   ├── Includes.js
│   ├── Mehdi.js
│   ├── Programme.js
│   ├── Prix.js
│   ├── Reservation.js
│   ├── Reveal.js
│   └── Footer.js
└── lib/
    └── data.js
```
