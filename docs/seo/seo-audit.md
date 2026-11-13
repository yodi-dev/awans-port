# Baseline SEO Audit & Optimization Plan — Yodi Irawan (Awan)

Dokumen ini merupakan baseline audit SEO menyeluruh yang dilakukan pada repositori `awans-port` sebelum tahap deployment production. Audit ini mengacu pada standar teknis Google Search Central, Lighthouse SEO, WCAG 2.2, dan panduan skill `seo`.

---

## 1. Ringkasan Eksekutif Kondisi SEO Saat Ini

| Kategori Audit | Status Awal | Keterangan Singkat |
| :--- | :---: | :--- |
| **Technical Crawlability** | ⚠️ Cukup | `robots.txt` mengizinkan perayapan, namun `sitemap.xml` statis dan belum menyertakan artikel blog. |
| **Canonical URL** | ❌ Belum Ada | Belum ada implementasi `<link rel="canonical">` di seluruh template halaman. |
| **On-Page Metadata** | ⚠️ Sebagian | `title` dan `description` sudah rapi via `useSeoMeta`, namun belum ada `og:image`, `twitter:card`, dan meta robots eksplisit. |
| **Structured Data (JSON-LD)** | ❌ Belum Ada | Sama sekali belum memiliki Schema.org markup (`Person`, `WebSite`, `BlogPosting`, `BreadcrumbList`). |
| **Struktur Heading & Semantik** | ⚠️ Baik (Minor) | Heading H1 sudah unik di tiap halaman; ada 1 isu loncatan heading (H2 $\rightarrow$ H4) di section About. |
| **Arsitektur Portofolio** | ⚠️ Terbatas | Portofolio dirender via modal di homepage; crawler belum bisa mengindeks halaman detail proyek tersendiri. |
| **Image SEO & Core Web Vitals** | ⚠️ Butuh Optimasi | Aset gambar banner masih berupa PNG berukuran besar (> 1.9 MB) dan tag `<img>` belum memiliki dimensi eksplisit. |
| **Mobile & Usability** | ✅ Sangat Baik | Viewport responsive, ukuran teks terbaca, target sentuh proporsional, dark mode adaptif. |

---

## 2. Rincian Temuan & Klasifikasi Masalah

Setiap temuan diklasifikasikan secara objektif berdasarkan dampaknya terhadap keterindeksan dan visibilitas di mesin pencari.

### 🔴 CRITICAL (Wajib Diselesaikan Sebelum Deployment)

#### Temuan 1: Ketiadaan Canonical URL di Seluruh Halaman
* **Lokasi File:** [nuxt.config.ts](file:///c:/Users/asus/Herd/awans-port/nuxt.config.ts), [pages/index.vue](file:///c:/Users/asus/Herd/awans-port/pages/index.vue), [pages/blog/index.vue](file:///c:/Users/asus/Herd/awans-port/pages/blog/index.vue), [pages/blog/[...slug].vue](file:///c:/Users/asus/Herd/awans-port/pages/blog/[...slug].vue)
* **Bukti Source Code:** Tidak ditemukan atribut `<link rel="canonical">` pada konfigurasi `app.head` maupun panggilan `useSeoMeta()`.
* **Dampak SEO Teknis:** Mesin pencari dapat membagi kekuatan peringkat (*link equity*) jika halaman diakses melalui varian domain (`http://` vs `https://`, dengan atau tanpa `www`), trailing slash (`/blog/` vs `/blog`), atau saat URL dibagikan dengan parameter pelacak (`?utm_source=...`, `?ref=...`).
* **Rekomendasi:** Terapkan *self-referencing canonical URL* dinamis berbasis rute pada setiap halaman menggunakan domain definitif (misal: `https://awanbeo.my.id`).
* **Jadwal Eksekusi:** Wajib diperbaiki sebelum deploy.

#### Temuan 2: Sitemap XML Statis dan Tidak Lengkap
* **Lokasi File:** [public/sitemap.xml](file:///c:/Users/asus/Herd/awans-port/public/sitemap.xml)
* **Bukti Source Code:** File `public/sitemap.xml` hanya mendaftarkan 2 URL:
  ```xml
  <loc>https://awanbeo.my.id/</loc>
  <loc>https://awanbeo.my.id/blog</loc>
  ```
  Artikel yang ada di `content/blog/mengapa-sekolah-butuh-perpustakaan-digital.md` sama sekali tidak terdaftar.
* **Dampak SEO Teknis:** Mesin pencari tidak menerima sinyal perayapan (*crawl discovery*) otomatis untuk konten artikel baru, memperlambat proses indeksasi tulisan blog.
* **Rekomendasi:** Daftarkan semua URL publik ke sitemap dan jadwalkan pembaruan otomatis setiap kali ada artikel baru.
* **Jadwal Eksekusi:** Wajib diperbaiki sebelum deploy.

---

### 🟠 HIGH (Prioritas Tinggi untuk Visibilitas, CTR, & Pengalaman Halaman)

#### Temuan 3: Absennya Open Graph Image (`og:image`) & Twitter Card Metadata
* **Lokasi File:** [nuxt.config.ts](file:///c:/Users/asus/Herd/awans-port/nuxt.config.ts), [pages/index.vue](file:///c:/Users/asus/Herd/awans-port/pages/index.vue), [pages/blog/[...slug].vue](file:///c:/Users/asus/Herd/awans-port/pages/blog/[...slug].vue)
* **Bukti Source Code:** Properti `og:image`, `og:image:width`, `og:image:height`, `og:url`, serta `twitter:card: 'summary_large_image'` belum didefinisikan.
* **Dampak SEO:** Ketika tautan website atau tulisan blog dibagikan ke WhatsApp, LinkedIn, atau Twitter/X, kartu pratinjau media tidak akan memuat gambar thumbnail. Hal ini menurunkan rasio klik (CTR) organik secara signifikan saat URL disebarkan ke calon klien.
* **Rekomendasi:** Siapkan aset gambar Open Graph (1200 $\times$ 630 px) dan deklarasikan di konfigurasi global dan template artikel.
* **Jadwal Eksekusi:** Perbaiki sebelum deploy.

#### Temuan 4: Belum Memiliki Structured Data (JSON-LD Schema.org)
* **Lokasi File:** Seluruh halaman ([pages/index.vue](file:///c:/Users/asus/Herd/awans-port/pages/index.vue), [pages/blog/[...slug].vue](file:///c:/Users/asus/Herd/awans-port/pages/blog/[...slug].vue))
* **Bukti Source Code:** Tidak ada skrip `type="application/ld+json"` di dalam repositori.
* **Dampak SEO:** Crawler Google tidak mendapatkan deskripsi entitas mesin yang tegas mengenai pemilik website (`Person`), jenis website (`WebSite`), dan metadata artikel (`BlogPosting` lengkap dengan tanggal terbit, pengarang, dan ringkasan).
* **Rekomendasi:**
  - Tambahkan Schema `Person` & `WebSite` pada homepage.
  - Tambahkan Schema `BlogPosting` dan `BreadcrumbList` pada halaman artikel blog.
* **Jadwal Eksekusi:** Perbaiki sebelum deploy.

#### Temuan 5: Aset Gambar Berukuran Berat Tanpa Dimensi Eksplisit (Core Web Vitals)
* **Lokasi File:** [public/images/kam/banner.png](file:///c:/Users/asus/Herd/awans-port/public/images/kam/banner.png) (1.91 MB), [public/images/sibenka/kembali.jpg](file:///c:/Users/asus/Herd/awans-port/public/images/sibenka/kembali.jpg) (560 KB), [public/images/sibenka/pinjam.jpg](file:///c:/Users/asus/Herd/awans-port/public/images/sibenka/pinjam.jpg) (478 KB), serta tag `<img>` di [HeroSection.vue](file:///c:/Users/asus/Herd/awans-port/components/home/HeroSection.vue) dan [ProjectsSection.vue](file:///c:/Users/asus/Herd/awans-port/components/home/ProjectsSection.vue).
* **Bukti Source Code:** Banner PNG 1.91 MB dan tag `<img>` yang tidak menyertakan atribut `width` dan `height` eksplisit.
* **Dampak SEO:** Berisiko memperlambat metrik *Largest Contentful Paint* (LCP) terutama bagi calon klien yang mengakses menggunakan ponsel dengan jaringan seluler daerah. Ketiadaan dimensi eksplisit juga berisiko memicu pergeseran tata letak (*Cumulative Layout Shift* / CLS).
* **Rekomendasi:** Kompresi seluruh aset gambar ke format modern `.webp` (target ukuran < 150 KB) dan pastikan tag gambar memiliki atribut rasio dimensi yang jelas.
* **Jadwal Eksekusi:** Perbaiki sebelum deploy.

---

### 🟡 MEDIUM (Struktur Semantik & Jalur Perayapan Internal)

#### Temuan 6: Heading Level Terlewati (*Heading Skip*) di Section About
* **Lokasi File:** [components/home/AboutSection.vue](file:///c:/Users/asus/Herd/awans-port/components/home/AboutSection.vue) (Baris 73)
* **Bukti Source Code:**
  ```html
  <h2 ...>Teknologi yang Memanusiakan Pengguna</h2>
  <!-- tidak ada <h3> di bawahnya, langsung melompat ke <h4> -->
  <h4 ...>{{ cat.name }}</h4>
  ```
* **Dampak SEO:** Menimbulkan peringatan hierarki heading pada audit aksesibilitas dan perayap semantik web, karena melompati tingkat heading dari H2 langsung ke H4.
* **Rekomendasi:** Ubah tag `<h4>` menjadi `<h3>` (dengan tetap mempertahankan styling visual yang sama via Tailwind).
* **Jadwal Eksekusi:** Perbaiki sebelum deploy.

#### Temuan 7: Ketiadaan Tautan Internal (*Internal Linking*) dari Artikel Blog ke Layanan/Portofolio
* **Lokasi File:** [content/blog/mengapa-sekolah-butuh-perpustakaan-digital.md](file:///c:/Users/asus/Herd/awans-port/content/blog/mengapa-sekolah-butuh-perpustakaan-digital.md)
* **Bukti Source Code:** Di dalam isi artikel, tidak ada satu pun tautan internal yang merujuk kembali ke section `#solusi` atau `#proyek` di homepage.
* **Dampak SEO:** Mengurangi efektivitas distribusi otoritas halaman internal (*internal link equity*) dan melewatkan peluang mengarahkan pembaca yang tertarik untuk melihat bukti karya nyata terkait.
* **Rekomendasi:** Tambahkan 1–2 tautan kontekstual alami di dalam artikel (misal tautan ke sistem inventaris/perpustakaan di homepage).
* **Jadwal Eksekusi:** Perbaiki sekarang.

#### Temuan 8: Arsitektur Proyek Menggunakan Modal (Ketiadaan URL Halaman Tunggal)
* **Lokasi File:** [components/home/ProjectsSection.vue](file:///c:/Users/asus/Herd/awans-port/components/home/ProjectsSection.vue) & [components/home/ProjectModal.vue](file:///c:/Users/asus/Herd/awans-port/components/home/ProjectModal.vue)
* **Bukti Source Code:** Detail proyek dibuka menggunakan dialog modal JavaScript tanpa memiliki URL permanen tersendiri (seperti `/karya/sibenka-skagata`).
* **Dampak SEO:** Mesin pencari tidak dapat mengindeks studi kasus proyek sebagai halaman individual di hasil pencarian terpisah.
* **Rekomendasi:** Untuk fase saat ini sebelum peluncuran, pertahankan modal (karena UI/UX sudah disetujui), namun pastikan cuplikan teks di homepage cukup kaya kata kunci natural. Ke depan, buat rute dinamis `/karya/[slug]` untuk menampung studi kasus lengkap setiap proyek.
* **Jadwal Eksekusi:** Ditunda sebagai rencana pengembangan Fase 2 (pasca-peluncuran).

---

### 🟢 LOW & OPTIONAL (Penyempurnaan Tambahan)

#### Temuan 9: Konfigurasi robots.txt Masih Sangat Minimal
* **Lokasi File:** [public/robots.txt](file:///c:/Users/asus/Herd/awans-port/public/robots.txt)
* **Bukti Source Code:**
  ```text
  User-agent: *
  Allow: /

  Sitemap: https://awanbeo.my.id/sitemap.xml
  ```
* **Dampak SEO:** Sudah memenuhi syarat dasar, namun belum mencakup aturan snippet seperti `max-image-preview:large` di tingkat meta robots.
* **Rekomendasi:** Perjelas direktif robots dan tambahkan meta tag robots di template Nuxt.
* **Jadwal Eksekusi:** Perbaiki sebelum deploy.

#### Temuan 10: Format Favicon & Touch Icon
* **Lokasi File:** [nuxt.config.ts](file:///c:/Users/asus/Herd/awans-port/nuxt.config.ts) (Baris 49)
* **Bukti Source Code:** Hanya mendefinisikan icon format SVG. Belum menyertakan `apple-touch-icon`.
* **Dampak SEO:** Berpengaruh pada tampilan ikon di hasil pencarian Google mobile dan bookmark browser Apple.
* **Rekomendasi:** Siapkan `apple-touch-icon.png` (180 $\times$ 180 px) dan favicon PNG fallback.
* **Jadwal Eksekusi:** Opsional / Sebelum deploy.

---

## 3. Hal-Hal yang Sudah Benar & Solid (Kekuatan SEO Saat Ini)

1. **Tag Judul (`<title>`) dan Meta Description:** Setiap halaman ([index.vue](file:///c:/Users/asus/Herd/awans-port/pages/index.vue), [blog/index.vue](file:///c:/Users/asus/Herd/awans-port/pages/blog/index.vue), [blog/[...slug].vue](file:///c:/Users/asus/Herd/awans-port/pages/blog/[...slug].vue)) sudah memiliki judul dan deskripsi yang unik, relevan, tidak duplikat, dan menggunakan `useSeoMeta` reaktif.
2. **Atribut Bahasa Dokumen:** Tag `html` sudah mendeklarasikan atribut `lang="id"` secara eksplisit di `nuxt.config.ts`.
3. **Satu H1 Per Halaman:** Setiap rute hanya memiliki tepat 1 tag `<h1>` yang deskriptif dan mencerminkan topik utama halaman.
4. **Desain Mobile-First & Responsif:** Konfigurasi viewport `width=device-width, initial-scale=1` sudah benar, dan tata letak tidak mengalami overflow horizontal pada berbagai ukuran layar.
5. **Aksesibilitas & Semantik Dasar:** Elemen interaktif menggunakan semantik tombol/tautan yang tepat, memiliki *focus indicator* yang lolos kriteria WCAG 2.2 AA, dan teks kontras tinggi (> 10:1).
6. **Prerendering Static (SSG):** Pengaturan Nitro preset `cloudflare-pages` dengan `crawlLinks: true` memastikan seluruh HTML terkompilasi secara statis sehingga crawler mesin pencari dapat membaca konten secara instan tanpa ketergantungan JavaScript di sisi klien.

---

## 4. Hal yang Membutuhkan Validasi Pasca-Production (Live)

Poin-poin berikut **tidak dapat diverifikasi 100% di server lokal** dan harus divalidasi setelah website aktif di domain publik:

1. **Google Search Console (GSC) Verification:** Pendaftaran properti domain, pengiriman sitemap resmi, dan pemantauan perayapan (*Crawl Stats*).
2. **Pengujian Rich Results:** Memvalidasi URL aktif di [Google Rich Results Test](https://search.google.com/test/rich-results) untuk memastikan tidak ada peringatan pada schema `Person` dan `BlogPosting`.
3. **Social Card Debugger:** Menguji tautan di Facebook Sharing Debugger, Twitter Card Validator, dan pratinjau tautan WhatsApp untuk memastikan gambar OG muncul sempurna.
4. **Kecepatan di Jaringan Nyata (Core Web Vitals):** Menjalankan audit Google PageSpeed Insights pada URL publik untuk memverifikasi skor LCP, INP, dan CLS di lingkungan server Cloudflare Pages.
5. **Inspeksi Header Keamanan:** Memverifikasi header keamanan (`Strict-Transport-Security`, `X-Content-Type-Options`) yang di-serve oleh Cloudflare Pages.

---

## 5. Checklist Tindakan Sebelum Deployment

- [ ] **1. Canonical Tag:** Menambahkan meta canonical mandiri di `nuxt.config.ts`, `pages/index.vue`, `pages/blog/index.vue`, dan `pages/blog/[...slug].vue`.
- [ ] **2. Open Graph & Twitter Cards:** Menyediakan file `og-image.jpg` (1200x630) dan mendaftarkannya di metadata SEO.
- [ ] **3. Structured Data (JSON-LD):** Menyematkan schema `Person` & `WebSite` pada homepage, serta `BlogPosting` & `BreadcrumbList` pada halaman artikel.
- [ ] **4. Pembaruan Sitemap:** Mendaftarkan seluruh rute publik termasuk artikel blog ke dalam sitemap XML.
- [ ] **5. Hierarki Heading:** Mengubah `<h4>` menjadi `<h3>` pada daftar keahlian di `AboutSection.vue`.
- [ ] **6. Optimasi Gambar:** Mengonversi gambar berukuran besar (terutama banner KAM dan Sibenka) ke format WebP dan menambahkan atribut dimensi.
- [ ] **7. Tautan Internal Blog:** Menambahkan tautan kontekstual dari artikel perpustakaan ke layanan sekolah di homepage.
- [ ] **8. Uji Build Produksi:** Menjalankan `npm run build` untuk memastikan tidak ada kesalahan kompilasi.
