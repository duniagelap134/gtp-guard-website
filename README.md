# GTP Guard — Website Profil Perusahaan

Website statis multi-halaman untuk **PT Gada Tunggal Perkasa (GTP Guard)**.
Stack: HTML + CSS + JavaScript vanilla. Tanpa framework, tanpa build step.

## Struktur

```
gtp-guard-website/
├── index.html          # Beranda
├── tentang.html        # Tentang (sejarah, visi, struktur organisasi, legalitas)
├── layanan.html        # 6 kategori layanan
├── portfolio.html      # Klien & mitra
├── kontak.html         # Info kontak + form penawaran
└── assets/
    ├── css/style.css   # Semua styling
    ├── js/main.js      # Nav mobile, scroll reveal, form handler
    └── img/            # (kosong) — taruh logo & foto asli di sini
```

## Cara melihat lokal

Buka `index.html` langsung di browser, atau jalankan server lokal:

```bash
cd gtp-guard-website
python3 -m http.server 8000
# buka http://localhost:8000
```

## Cara hosting (gratis)

- **Netlify**: drag & drop folder ini ke app.netlify.com/drop
- **Vercel**: `vercel` di dalam folder, atau import via dashboard
- **GitHub Pages**: push ke repo, aktifkan Pages dari branch `main`

## Yang masih placeholder / perlu diganti

- **Logo**: saat ini pakai teks "GTP" + warna brand. Taruh file logo asli di `assets/img/` dan ganti elemen `.brand__mark`.
- **Foto**: hero & section pakai gradient warna brand. Bisa tambah foto satpam/tim asli.
- **Form kontak**: saat ini buka aplikasi email (mailto). Kalau mau form yang langsung masuk inbox tanpa buka email client, sambungkan ke Formspree / Netlify Forms (gratis).
- **Logo klien**: ditampilkan sebagai teks. Bisa diganti gambar logo asli.
- **Domain & social link**: link sosmed di footer masih `#`, isi dengan URL asli.

## Catatan data

Semua konten (sejarah, layanan, struktur organisasi, daftar klien, legalitas, kontak)
diambil dari Company Profile GTP Guard 2025.
