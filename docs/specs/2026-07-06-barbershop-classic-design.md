# Design Spec: Barbershop Classic

## Stack
- **Framework:** Next.js 16 (App Router)
- **CSS:** Tailwind v4
- **UI Components:** 21st.dev (shadcn/ui based)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Oswald (display), Inter (body), JetBrains Mono (prices/tags)
- **Deploy:** Vercel

## Target
Pria 18-30 tahun, mahasiswa/pekerja awal. Mencari tempat potong rambut yang gaul, harga terjangkau, hasil rapih.

## Design Tokens
```css
--color-bg:        #0f0f0f;  /* Charcoal solid */
--color-surface:   #1a1a1a;  /* Card background */
--color-surface-hover: #242424;
--color-text:      #f5f5f5;  /* Primary text */
--color-text-muted:#a3a3a3;  /* Secondary */
--color-accent:    #f59e0b;  /* Amber */
--color-accent-hover: #d97706;
--color-border:    rgba(255,255,255,0.06);
--font-display:    "Oswald", sans-serif;
--font-sans:       "Inter", system-ui, sans-serif;
--font-mono:       "JetBrains Mono", monospace;
```

## Sections (7)

### 1. Navbar
Fixed top. Transparent di hero, solid di scroll. Logo "CLASSIC" bold. Links: Layanan, Harga, Lokasi, WA button.

### 2. Hero
Fullscreen bg foto barber. Overlay gradien kiri. Headline "Barbershop Classic" di font Oswald bold besar. Tagline "Bukan cuma cukur, ini gaya." Satu CTA: Booking. Tombol WA sekunder. No scroll indicator.

### 3. Layanan
Grid 4 card: Cukur Rambut (25k), Shave (35k), Kids (20k), Komplit (50k). Tiap card: nama, harga, estimasi waktu. Ikon lucide di atas card. Hover lift.

### 4. Galeri
Masonry layout 4-6 foto potongan rambut. Hover zoom. Label gaya rambut di overlay.

### 5. Testimoni
3 card review. Avatar circle + nama + rating bintang + review text. Scroll horizontal di mobile.

### 6. Lokasi
2-col: kiri (alamat, jam buka, WA), kanan (maps placeholder). Jam: Sen-Sab 09-21, Min 10-18.

### 7. CTA + Footer
CTA card dengan bg surface + amber border. "Pesan Antrian Sekarang" + WA button. Footer: logo, nav, copyright.

## Anti-Slop Rules
- No emojis di UI
- No purple/cyan/neon accent. Amber only
- No pure black (#000000). Charcoal #0f0f0f
- No "Elevate", "Seamless", "Next-gen", "Amazing"
- No gradient text di header
- No circular spinners — skeleton aja
- No centered hero — kiri text, kanan foto
- Single CTA utama per section, max 2
- Touch targets 44px min
- Mobile single column collapse
