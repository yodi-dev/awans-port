export interface Project {
  id: string
  title: string
  subtitle: string
  category: 'Pendidikan & Sekolah' | 'Layanan & Institusi Daerah' | 'Bisnis & UMKM'
  badge: string
  banner: string
  clientView: {
    targetAudience: string
    problem: string
    solution: string
    keyBenefits: string[]
  }
  techView: {
    stack: string[]
    architecture: string
    technicalHighlights: string[]
  }
  links: {
    demo?: string
    github?: string
  }
  screenshots: string[]
}

export const projects: Project[] = [
  {
    id: 'sipensi-skagata',
    title: 'Sipensi Skagata',
    subtitle: 'Sistem informasi presensi dan piket KBM untuk mahasiswa PK, PPL, dan Guru Tidak Tetap',
    category: 'Pendidikan & Sekolah',
    badge: 'Adopsi Menyeluruh Sekolah',
    banner: '/images/perpus/banner.png',
    clientView: {
      targetAudience: 'SMK Negeri 3 Yogyakarta, Mahasiswa Praktikan (PK & PPG), dan Guru Tidak Tetap',
      problem: 'Pencatatan presensi manual praktikan dan guru pembimbing KBM sering tercecer, rawan manipulasi jam hadir, dan menyulitkan pihak sekolah saat menyusun laporan kedinasan bulanan.',
      solution: 'Sistem presensi digital berbasis geofencing GPS real-time dan dokumentasi piket KBM otomatis. Awalnya diuji coba di Jurusan Informatika, pihak sekolah kemudian memperluas penggunaannya ke seluruh jurusan di SMKN 3 Yogyakarta.',
      keyBenefits: [
        'Penegakan radius presensi GPS Geofencing (Formula Haversine) di area sekolah',
        'Dokumentasi piket KBM otomatis dengan kompresi gambar sisi klien & watermark kedinasan',
        'Laporan bulanan siap cetak berkop resmi dinas SMKN 3 Yogyakarta dan ekspor Excel',
        'Adopsi organik sukses dari satu jurusan meluas ke seluruh jurusan sekolah'
      ]
    },
    techView: {
      stack: ['CodeIgniter 4', 'PHP 8.2', 'MySQL', 'Leaflet.js', 'HTML5 Canvas'],
      architecture: 'Solo Developer. Modular MVC Architecture dengan Geofencing Engine, Dynamic School Schedule Sync, dan 44 Automated Integration Tests (100% Pass).',
      technicalHighlights: [
        '44 automated tests mencakup proteksi peran, sanitasi XSS/SQL Injection, dan toleransi darurat',
        'Peta Leaflet.js interaktif untuk kalibrasi radius geofence (10m - 1000m) admin',
        'Kompresi kamera sisi klien via HTML5 Canvas menghemat kuota dan memori server'
      ]
    },
    links: {
      github: 'https://github.com/yodi-dev/sipensi-skagata'
    },
    screenshots: [
      '/images/perpus/banner.png',
      '/images/perpus/ss1.png',
      '/images/perpus/ss2.png'
    ]
  },
  {
    id: 'sibenka-skagata',
    title: 'Sibenka Skagata',
    subtitle: 'Pencatatan inventaris digital dan sirkulasi peminjaman alat bengkel kejuruan SMK',
    category: 'Pendidikan & Sekolah',
    badge: 'Lead Developer',
    banner: '/images/sibenka/pinjam.jpg',
    clientView: {
      targetAudience: 'SMK Negeri 3 Yogyakarta (Seluruh Bengkel & Laboratorium Kejuruan)',
      problem: 'Peralatan praktik kejuruan sering tertukar atau hilang, sirkulasi peminjaman alat antar-bengkel tidak terdokumentasi rapi, dan pelaporan kondisi alat rusak memakan waktu lama.',
      solution: 'Sistem inventarisasi aset digital dan manajemen sirkulasi alat praktik bertingkat dengan alur persetujuan toolman dan rekap kartu stok otomatis.',
      keyBenefits: [
        'Pelacakan lokasi dan status ketersediaan alat di setiap bengkel secara akurat',
        'Alur peminjaman & pengembalian tertib dengan bukti tanda terima sistem',
        'Laporan mutasi alat, inventaris rusak, dan kartu barang siap ekspor berkala',
        'Meminimalisir kerugian anggaran sekolah akibat alat praktik yang hilang'
      ]
    },
    techView: {
      stack: ['Laravel', 'MySQL', 'Tailwind CSS', 'Blade'],
      architecture: 'Lead Developer & Client Liaison. Perancangan skema database inventaris multi-bengkel, alur sirkulasi alat bertingkat, dan pengujian keandalan bersama guru kejuruan.',
      technicalHighlights: [
        'Relasi database kompleks untuk tracking mutasi aset antar-bengkel kejuruan',
        'Validasi sirkulasi ketat guna mencegah bentrok data antar-laboratorium',
        'Hak akses multi-peran: Superadmin, Toolman/Kepala Bengkel, dan Siswa Peminjam'
      ]
    },
    links: {
      github: 'https://github.com/yodi-dev/sibenka-skagata'
    },
    screenshots: [
      '/images/sibenka/pinjam.jpg',
      '/images/sibenka/kembali.jpg'
    ]
  },
  {
    id: 'pos-habiba-store',
    title: 'POS App - Habiba Store',
    subtitle: 'Solusi kasir modern dan manajemen stok real-time untuk toko ritel & UMKM',
    category: 'Bisnis & UMKM',
    badge: 'Point of Sale Mandiri',
    banner: '/images/shop/banner.png',
    clientView: {
      targetAudience: 'Toko Kelontong Modern, Toko Fashion, Distributor/Grosir, & UMKM Ritel',
      problem: 'Pemilik toko kesulitan memantau sisa stok barang, antrean kasir lambat, dan terbebani biaya langganan software kasir bulanan yang memotong margin usaha.',
      solution: 'Aplikasi kasir web modern yang responsif dan cepat memproses transaksi pelanggan tanpa perlu membayar biaya sewa software atau potongan komisi transaksi.',
      keyBenefits: [
        'Proses checkout kasir cepat tanpa loading halaman lambat',
        'Peringatan otomatis saat stok barang mulai menipis di gudang',
        'Laporan laba kotor harian dan produk terlaris (best-seller) transparan',
        'Dapat dioperasikan melalui tablet kasir maupun laptop toko'
      ]
    },
    techView: {
      stack: ['Laravel', 'Livewire', 'Tailwind CSS', 'Alpine.js'],
      architecture: 'Single-Page Application (SPA) experience memanfaatkan Laravel Livewire untuk reaktivitas instan tanpa setup API terpisah.',
      technicalHighlights: [
        'Komponen keranjang belanja interaktif berbasis event-driven Livewire',
        'Kueri kalkulasi total & diskon instan secara realtime di sisi server',
        'Desain antarmuka mobile-first yang nyaman untuk kasir layar sentuh'
      ]
    },
    links: {
      demo: 'https://demo.habiba-store.my.id/',
      github: 'https://github.com/yodi-dev/pos-app'
    },
    screenshots: [
      '/images/shop/ss1.png',
      '/images/shop/ss2.png',
      '/images/shop/ss3.png',
      '/images/shop/ss4.png',
      '/images/shop/ss5.png',
      '/images/shop/ss6.png',
      '/images/shop/ss7.png'
    ]
  },
  {
    id: 'sim-klinik',
    title: 'SIM Pelayanan Faskes & Klinik Pratama',
    subtitle: 'Sistem manajemen terintegrasi untuk klinik pratama & fasilitas kesehatan daerah',
    category: 'Layanan & Institusi Daerah',
    badge: 'Kesehatan Daerah',
    banner: '/images/kam/banner.png',
    clientView: {
      targetAudience: 'Klinik Pratama, Puskesmas Pembantu, Praktek Bersama Nakes',
      problem: 'Alur antrean berdesakan, berkas rekam medis kertas rawan terselip, dan penghitungan stok obat apotek serta rekap kas harian belum sinkron.',
      solution: 'Sistem informasi manajemen klinik terpadu dari loket pendaftaran, ruang periksa dokter (rekam medis), apotek/farmasi, hingga kasir pembayaran.',
      keyBenefits: [
        'Alur pendaftaran pasien tertib dan riwayat kunjungan tersimpan rapi',
        'Rekam medis digital cepat diakses oleh dokter yang bertugas',
        'Integrasi stok obat otomatis berkurang saat resep ditebus di apotek',
        'Rekapitulasi pendapatan harian klinik yang akurat dan transparan'
      ]
    },
    techView: {
      stack: ['Laravel', 'MySQL', 'Bootstrap', 'Blade'],
      architecture: 'Modular Multi-Unit Flow: Pendaftaran -> Poliklinik/Dokter -> Apotek -> Kasir/Keuangan.',
      technicalHighlights: [
        'Workflow transaksi berantai dengan perlindungan integritas data (Database Transactions)',
        'Pencatatan batch expired date obat dan kartu stok otomatis',
        'Pengaturan hak akses ketat sesuai profesi (Resepsionis, Dokter, Apoteker, Kasir)'
      ]
    },
    links: {
      github: 'https://github.com/yodi-dev/sipdkam-now'
    },
    screenshots: [
      '/images/kam/ss1.png',
      '/images/kam/ss2.png',
      '/images/kam/ss3.png',
      '/images/kam/ss4.png',
      '/images/kam/ss5.png',
      '/images/kam/ss6.png',
      '/images/kam/ss7.png',
      '/images/kam/ss8.png'
    ]
  }
]
