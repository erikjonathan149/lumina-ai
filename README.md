# Lumina AI — Next.js Landing Page

Website landing page premium untuk Lumina AI, dibangun dengan Next.js 14 App Router, TypeScript, dan CSS Modules.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules + CSS Variables
- **Font**: Instrument Serif + DM Sans (Google Fonts)

## Struktur Project

```
lumina-ai/
├── app/
│   ├── globals.css       # Design system & CSS variables global
│   ├── layout.tsx        # Root layout + metadata SEO
│   └── page.tsx          # Halaman utama (compose semua section)
├── components/
│   ├── Navbar.tsx / .module.css
│   ├── Ticker.tsx / .module.css
│   ├── Hero.tsx / .module.css
│   ├── Stats.tsx / .module.css
│   ├── Features.tsx / .module.css
│   ├── Workflow.tsx / .module.css   ← 'use client' (interactive)
│   ├── Pricing.tsx / .module.css
│   ├── CTA.tsx / .module.css
│   └── Footer.tsx / .module.css
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md
```

## Cara Menjalankan

### 1. Install dependencies

```bash
npm install
```

### 2. Jalankan development server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### 3. Build untuk production

```bash
npm run build
npm start
```

## Deploy ke Vercel

```bash
npm install -g vercel
vercel
```

Atau connect repo ke [vercel.com](https://vercel.com) untuk auto-deploy.

## Kustomisasi

### Ganti warna
Edit CSS variables di `app/globals.css`:
```css
:root {
  --gold: #c8a96e;     /* Warna aksen utama */
  --cream: #f0eadc;    /* Warna teks utama */
  --dark: #040407;     /* Background utama */
}
```

### Ganti konten
- **Hero**: edit `components/Hero.tsx`
- **Fitur**: edit array `features` di `components/Features.tsx`
- **Pricing**: edit array `plans` di `components/Pricing.tsx`
- **Workflow steps**: edit array `steps` di `components/Workflow.tsx`

### Ganti font
Edit import di `app/globals.css` dan update variable `--font-serif` / `--font-sans`.
