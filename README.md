# Omra — Mehdi Abu AbdiLleh

Site de pèlerinage Omra avec animation hublot d'avion au scroll.

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
4. Clique "Deploy" — c'est tout

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
│   ├── layout.js      # Root layout + fonts
│   ├── page.js        # Page principale
│   └── globals.css    # Tailwind + custom styles
├── components/
│   ├── Hero.js        # Animation hublot GSAP ScrollTrigger
│   ├── Navbar.js      # Nav (apparaît après le zoom)
│   ├── Stats.js       # Compteurs animés
│   ├── Includes.js    # 8 cartes services
│   ├── Mehdi.js       # Section encadrant
│   ├── Programme.js   # Timeline 10 jours
│   ├── Prix.js        # Carte tarif
│   ├── Reservation.js # Formulaire 3 étapes
│   ├── Reveal.js      # Wrapper animation scroll
│   └── Footer.js      # FAQ + Footer + Sticky bar
└── lib/
    └── data.js        # Images sacrées + layers hublot
```

## Personnaliser
- **Images** : Remplace les URLs Unsplash dans `src/lib/data.js`
- **Prix** : Modifie dans `Prix.js` et `Reservation.js`
- **Dates** : Modifie le tableau `DATES` dans `Reservation.js`
- **Couleurs** : Modifie les variables CSS dans `globals.css` et `tailwind.config.js`
