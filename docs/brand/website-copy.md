# Website Copywriting Master — Yodi Irawan (Awan)

Dokumen ini berisi draf lengkap seluruh salinan teks (*master copywriting*) untuk website portofolio personal **Yodi Irawan (Awan)** yang telah disetujui, siap diimplementasikan ke dalam komponen Nuxt 3.

---

## 1. Navigasi & Identitas Global

* **Wordmark Header:** `Yodi Irawan` *(subtext mono: `/ web engineer`)*
* **Tautan Menu:**
  * `Solusi` $\rightarrow$ `/#solusi`
  * `Karya` $\rightarrow$ `/#proyek`
  * `Tentang` $\rightarrow$ `/#tentang`
  * `Jurnal` $\rightarrow$ `/blog`
* **Tombol Aksi Cepat (Desktop Header):**
  * Teks: `Konsultasi Proyek` $\rightarrow$ Link WhatsApp: `https://wa.me/6285183310065?text=Halo%20Awan,%20saya%20tertarik%20berkonsultasi%20mengenai%20pembuatan%20sistem%20web.`

---

## 2. Homepage: Hero Section

* **Headline Utama:**
  > *"Membangun sistem web yang fungsional dan ramah pengguna awam."*
* **Subheadline / Bio:**
  > *"Saya **Yodi Irawan (Awan)**, software engineer berlatar belakang **Pendidikan TIK**. Membantu sekolah, institusi daerah, dan UMKM memiliki sistem web yang mandiri, rapi, dan mudah digunakan staf lapangan."*
* **Tombol Aksi (CTAs):**
  * Tombol Primer: `Lihat Karya Terpilih` *(Scroll ke `#proyek`)*
  * Tombol Sekunder: `Konsultasi Alur Kerja` *(Buka WhatsApp)*
* **Panel Metadata Samping (Sidebar Specs):**
  * Peran: `Solo Software Engineer`
  * Pendekatan: `Pendidikan TIK · Human-Centered Web`
  * Pondasi Stack: `Laravel · Vue / Nuxt · MySQL · Tailwind`
  * Status: `● Terbuka untuk Kolaborasi Proyek`

---

## 3. Homepage: Ruang Lingkup Solusi (`#solusi`)

* **Section Header:**
  * Eyebrow: `[ 01 — Ruang Lingkup Solusi ]`
  * Judul: `Sistem yang Dirancang untuk Kebutuhan Nyata Lapangan`
  * Deskripsi: `Fokus memangkas waktu kerja administrasi dan mencegah hilangnya aset tanpa membebani kas operasional institusi.`

### Pilar 01 — Digitalisasi Sekolah & Kejuruan
* **Kategori:** `Sistem Pendidikan`
* **Judul:** `Digitalisasi Sekolah & Kejuruan (SMK/SMA/SMP)`
* **Deskripsi:** 
  > *"Membantu institusi pendidikan beralih dari pencatatan manual yang rawan kehilangan aset menjadi sistem terpadu yang memangkas waktu kerja guru dan staf operasional."*
* **Ruang Lingkup Solusi:**
  * Sistem Inventarisasi Alat & Sirkulasi Peminjaman Bengkel Kejuruan
  * Sistem Presensi Digital Mahasiswa PK/PPL & Guru Tidak Tetap
  * Portal Informasi Perpustakaan & Pelacakan Sirkulasi Buku Otomatis
  * Website Profil Sekolah & Portal Pendaftaran Siswa (PPDB Online)

### Pilar 02 — Sistem Informasi Daerah & Desa Wisata
* **Kategori:** `Layanan Publik`
* **Judul:** `Portal Informasi Desa & Faskes Daerah`
* **Deskripsi:** 
  > *"Membangun sistem informasi terstruktur untuk fasilitas kesehatan pratama dan pemerintah desa yang memerlukan transparansi data dan promosi potensi lokal yang mandiri."*
* **Ruang Lingkup Solusi:**
  * Website Profil Desa & Promosi Potensi Desa Wisata
  * Portal Publikasi Transparansi Informasi & Administrasi Warga
  * SIM Klinik Pratama: Pendaftaran, Rekam Medis & Pembayaran
  * Integrasi Stok Obat Farmasi & Kartu Kendali Pasien

### Pilar 03 — Aplikasi Kasir (POS) & Manajemen Stok UMKM
* **Kategori:** `Bisnis & UMKM`
* **Judul:** `Aplikasi Kasir (POS) & Kontrol Stok Ritel`
* **Deskripsi:** 
  > *"Solusi aplikasi kasir berbasis web yang cepat dan responsif untuk toko ritel lokal. Mengontrol aliran uang kas dan stok menipis secara realtime tanpa potongan biaya langganan bulanan."*
* **Ruang Lingkup Solusi:**
  * Point of Sale (POS) Kasir Cepat Ramah Tablet Layar Sentuh & PC
  * Pemantauan Stok Masuk/Keluar & Peringatan Otomatis Stok Menipis
  * Dashboard Laba/Rugi Harian & Laporan Produk Paling Laris
  * Arsitektur Mandiri Tanpa Potongan Biaya Transaksi Berulang

---

## 4. Homepage: Karya Unggulan (`#proyek`)

* **Section Header:**
  * Eyebrow: `[ 02 — Studi Kasus & Karya Terpilih ]`
  * Judul: `Bukti Rekayasa yang Telah Diuji di Lapangan`
  * Deskripsi: `Karya nyata yang memecahkan masalah operasional nyata, dari institusi pendidikan kejuruan hingga toko ritel lokal.`

### Proyek 1: Sipensi Skagata (Sistem Presensi & Piket KBM)
* **Kategori:** `Pendidikan · SMKN 3 Yogyakarta`
* **Judul:** `Sipensi Skagata`
* **Subjudul:** `Sistem informasi presensi dan piket KBM untuk mahasiswa PK, PPL, dan Guru Tidak Tetap`
* **Badge:** `Adopsi Menyeluruh Sekolah`
* **Nilai Solusi Klien:**
  > *"Menertibkan presensi mahasiswa PK (S1), PPL (PPG), dan Guru Tidak Tetap (GTT) secara digital dan akurat. Awalnya diuji coba di Jurusan Informatika, kemudahan antarmukanya membuat pihak sekolah memperluas penerapannya ke seluruh jurusan di SMKN 3 Yogyakarta."*
* **Arsitektur & Spesifikasi Teknis:**
  > *"Solo Developer. Arsitektur modular PHP & MySQL dengan role-based access control, rekapitulasi kehadiran otomatis siap cetak, dan validasi jam piket KBM real-time."*
* **Highlight Teknis:**
  * Desain alur antarmuka yang ramah bagi staf piket dan mahasiswa praktikan
  * Filter multi-jurusan dan multi-peran pengguna (Admin, Guru Piket, Praktikan)
  * Fitur ekspor laporan rekapitulasi kehadiran resmi ke format cetak

### Proyek 2: Sibenka Skagata (Sistem Inventaris & Bengkel)
* **Kategori:** `Pendidikan · SMKN 3 Yogyakarta`
* **Judul:** `Sibenka Skagata`
* **Subjudul:** `Pencatatan inventaris digital dan sirkulasi peminjaman alat bengkel kejuruan SMK`
* **Badge:** `Lead Developer`
* **Nilai Solusi Klien:**
  > *"Mencegah hilangnya peralatan praktik di bengkel kejuruan SMK melalui digitalisasi inventaris, pelacakan peminjaman alat antar-bengkel, dan penyusunan laporan kondisi barang berkala."*
* **Arsitektur & Spesifikasi Teknis:**
  > *"Lead Developer & Penghubung Sekolah. Memimpin perancangan skema database inventaris, alur sirkulasi alat bertingkat, serta mengawal pengujian sistem langsung bersama guru kejuruan."*
* **Highlight Teknis:**
  * Database relationship kompleks untuk inventaris multi-bengkel dan multi-kondisi alat
  * Validasi sirkulasi alat ketat guna mencegah sengketa aset laboratorium
  * Alur persetujuan peminjaman cepat yang dapat diakses langsung oleh staf bengkel

### Proyek 3: POS Habiba Store (Aplikasi Kasir & Stok Realtime)
* **Kategori:** `Bisnis & Ritel UMKM`
* **Judul:** `POS App - Habiba Store`
* **Subjudul:** `Aplikasi kasir web modern dan manajemen stok real-time untuk toko ritel`
* **Badge:** `Point of Sale Mandiri`
* **Nilai Solusi Klien:**
  > *"Mempercepat antrean kasir dan mencegah selisih stok toko ritel melalui dashboard penjualan langsung tanpa biaya langganan software tahunan."*
* **Arsitektur & Spesifikasi Teknis:**
  > *"Single Page Application (SPA) berbasis Laravel Livewire & Tailwind CSS. Transaksi reaktif cepat, kalkulasi diskon otomatis di sisi server, dan kompatibel tablet layar sentuh."*
* **Highlight Teknis:**
  * Event-driven keranjang belanja instan tanpa reload halaman
  * Peringatan dini stok minimum produk otomatis
  * Desain antarmuka mobile-first yang nyaman untuk kasir toko

---

## 5. Homepage: Latar Belakang & Filosofi (`#tentang`)

* **Section Header:**
  * Eyebrow: `[ 03 — Latar Belakang & Filosofi ]`
  * Judul: `Teknologi yang Memanusiakan Pengguna`
  * Subjudul: `Pendidikan TIK sebagai jembatan empati antara kode dan pengguna awam.`
* **Teks Narasi:**
  > *"Menyelesaikan studi di bidang **Pendidikan Teknologi Informasi & Komunikasi (Pendidikan TIK)** dan berakar di Sumatera serta beraktivitas di Yogyakarta, saya melihat bahwa kegagalan adopsi sistem digital di sekolah atau daerah jarang disebabkan oleh keterbatasan teknologi.*
  >
  > *Masalah utamanya hampir selalu sama: sistem yang dirancang terlalu rumit bagi staf lapangan, proses pelatihan yang minim, dan pengembang yang sulit diajak berkomunikasi menggunakan bahasa sehari-hari.*
  >
  > *Sebagai solo software engineer, saya memegang tiga prinsip: **menghilangkan friksi bagi pengguna awam**, **menjaga arsitektur kode tetap bersih dan mandiri**, serta **memberikan pendampingan langsung hingga sistem benar-benar berjalan alami dalam keseharian operasional.**"*
* **Spesifikasi Keahlian Teknis:**
  * *Backend & Sistem:* Laravel, PHP, MySQL, REST API, Eloquent ORM, Database Architecture
  * *Frontend & Reaktivitas:* Vue 3, Nuxt 3, Tailwind CSS, Livewire, TypeScript / JS
  * *Infrastruktur & Delivery:* Cloudflare Pages, Git & GitHub, Linux VPS / Server, Postman
* **Lokasi & Ketersediaan:**
  * Wilayah: Sarolangun, Jambi & D.I. Yogyakarta — Indonesia
  * Metode: Daring (Remote) / Kunjungan Lapangan Berdasarkan Kesepakatan

---

## 6. Homepage: Kontak & Kolaborasi (`#kontak`)

* **Section Header:**
  * Eyebrow: `[ 04 — Kontak & Kolaborasi ]`
  * Judul: `Punya alur kerja yang ingin dipermudah di sekolah, desa, atau usaha Anda?`
  * Deskripsi: `Anda tidak perlu menyusun dokumen teknis yang rumit. Cukup ceritakan bagaimana alur kerja Anda berjalan hari ini, dan mari kita petakan solusinya bersama secara bertahap.`
* **Kanal Kontak:**
  * **WhatsApp Langsung:** `+62 851-8331-0065`
    * *Deskripsi:* Respon cepat untuk pertanyaan awal, jadwal diskusi, atau konsultasi kebutuhan.
  * **Surat Elektronik:** `irawanyodi10@gmail.com`
    * *Deskripsi:* Untuk pengiriman kerangka acuan kerja (TOR), proposal resmi, atau dokumen proyek.
  * **LinkedIn:** `linkedin.com/in/yodi-irawan`
    * *Deskripsi:* Jejaring profesional dan rekam jejak kolaborasi.
  * **GitHub:** `github.com/yodi-dev`
    * *Deskripsi:* Repositori kode sumber terbuka dan arsitektur proyek.

---

## 7. Halaman Blog / Jurnal (`/blog`)

* **Judul Halaman:** `Catatan Lapangan & Rekayasa Web`
* **Subjudul:** `Tulisan seputar digitalisasi sekolah, tata kelola sistem daerah, dan panduan teknis yang dipelajari selama proses berkarya.`
* **Daftar Rencana Artikel SEO Organik:**
  1. *Tantangan Menata Alat Bengkel SMK: Mengapa Buku Peminjaman Manual Selalu Bocor?*
  2. *Efisiensi Presensi Mahasiswa PK & Guru Tidak Tetap di Sekolah Menggunakan Web App Mandiri.*
  3. *Aplikasi Kasir Web vs Software Berlangganan: Mana yang Lebih Hemat untuk Toko Ritel Lokal?*
  4. *Langkah Praktis Membangun Website Desa Wisata yang Mandiri dan Menarik Wisatawan.*
  5. *Mengapa Sekolah Modern Membutuhkan Sistem Perpustakaan Digital?* (Sudah terbit)

---

## 8. Colophon Footer

* **Identitas:** `Yodi Irawan (Awan)`
* **Pernyataan:** `Rekayasa web terpadu dan pendampingan digitalisasi untuk institusi pendidikan, pelayanan daerah, dan wirausaha lokal.`
* **Hak Cipta:** `© 2026 Yodi Irawan. Sarolangun, Jambi & Yogyakarta — Indonesia.`
