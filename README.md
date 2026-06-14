# GTP Guard — Website Profil Perusahaan

Website statis multi-halaman untuk **PT Gada Tunggal Perkasa (GTP Guard)**.

**Stack:** HTML + Tailwind CSS (via CDN) + Tabler Icons + JavaScript vanilla. Tanpa build step.

**Desain:** base netral (putih/abu/charcoal #1A1A1A), merah #C8102E sebagai aksen (CTA & ikon). Font: Poppins (heading), Inter (body), Playfair Display (aksen heading section).

## Struktur

```
gtp-guard-website/
├── index.html          # Beranda (hero, stats, layanan, klien, CTA)
├── tentang.html        # Sambutan, sejarah (timeline), struktur organisasi, legalitas
├── layanan.html        # 6 kategori + sub-profesi
├── portfolio.html      # Logo + daftar klien lengkap
├── kontak.html         # Info kontak, form penawaran, peta
└── assets/
    ├── css/style.css   # Utility custom (reveal, hover, dotgrid)
    ├── js/main.js      # Nav mobile, scroll reveal, form handler
    └── img/            # (kosong) — taruh logo & foto asli di sini
```

## Lihat lokal

Buka `index.html` langsung di browser, atau:

```bash
cd gtp-guard-website
python3 -m http.server 8000   # buka http://localhost:8000
```

## Hosting (gratis)

- **Netlify**: drag & drop folder ke app.netlify.com/drop
- **Vercel**: `vercel` di dalam folder
- **GitHub Pages**: sudah aktif → https://duniagelap134.github.io/gtp-guard-website/

## Yang masih placeholder / perlu diganti

- **Logo**: pakai ikon shield + teks "GTP Guard". Taruh logo asli di `assets/img/`.
- **Foto**: hero pakai dark + glow merah, belum ada foto satpam/tim asli.
- **Logo klien**: ditampilkan sebagai teks (Mandiri, BCA, dst). Bisa diganti gambar logo.
- **Form kontak**: pakai `mailto`. Untuk lead langsung masuk inbox, sambungkan Formspree / Netlify Forms.
- **Link sosmed & peta**: ikon sosmed di footer masih `#`. Peta pakai query "Labuapi, Lombok Barat" — bisa diganti koordinat persis kantor.

## Catatan teknis

Tailwind dipakai via Play CDN (zero-build). Untuk produksi skala besar, bisa di-compile pakai Tailwind CLI agar CSS-nya statis & tanpa warning CDN. Untuk landing page profiling ini, CDN sudah cukup.

Semua konten diambil dari Company Profile GTP Guard 2025.
