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
    id: 'perpustakaan-digital',
    title: 'Sistem Informasi Perpustakaan Digital',
    subtitle: 'Manajemen sirkulasi buku, katalog digital, dan pelaporan otomatis sekolah',
    category: 'Pendidikan & Sekolah',
    badge: 'Sistem Sekolah',
    banner: '/images/perpus/banner.png',
    clientView: {
      targetAudience: 'Sekolah Menengah (SMK/SMA/SMP), Pesantren, dan Rumah Baca',
      problem: 'Pencatatan manual di buku besar rawan kehilangan aset buku, antrean panjang saat jam istirahat, dan pembuatan laporan akreditasi yang memakan waktu berminggu-minggu.',
      solution: 'Aplikasi berbasis web yang mendigitalkan seluruh siklus perpustakaan: mulai dari pencarian buku online, scan peminjaman cepat, perhitungan denda otomatis, hingga laporan rekap sekali klik.',
      keyBenefits: [
        'Pencarian katalog buku instan oleh siswa via ponsel/laptop',
        'Mengurangi risiko buku hilang dengan pelacakan peminjam yang akurat',
        'Otomatisasi denda keterlambatan dan status ketersediaan buku',
        'Ekspor laporan sirkulasi dan statistik pengunjung siap cetak'
      ]
    },
    techView: {
      stack: ['Laravel', 'MySQL', 'Bootstrap', 'JavaScript'],
      architecture: 'Model-View-Controller (MVC) dengan Role-Based Access Control (Admin, Petugas, Anggota Siswa).',
      technicalHighlights: [
        'Database relationship kompleks untuk sirkulasi buku, denda bertingkat, dan multi-kategori',
        'Form validasi ketat untuk menghindari double-booking dan bentrok data inventaris',
        'Data table pagination dan filtering untuk ribuan judul buku'
      ]
    },
    links: {
      github: 'https://github.com/yodi-dev/perpus-smk'
    },
    screenshots: [
      '/images/perpus/ss1.png',
      '/images/perpus/ss2.png',
      '/images/perpus/ss3.png',
      '/images/perpus/ss4.png'
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
      problem: 'Alur antrean berdesakan, berkas rekam medis kertas yang rawan terselip, dan penghitungan stok obat apotek serta rekap kas harian yang belum sinkron.',
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
  },
  {
    id: 'pos-habiba-store',
    title: 'POS App - Habiba Store (Aplikasi Kasir & Stok)',
    subtitle: 'Solusi kasir modern dan manajemen stok real-time untuk toko ritel & UMKM',
    category: 'Bisnis & UMKM',
    badge: 'Point of Sale',
    banner: '/images/shop/banner.png',
    clientView: {
      targetAudience: 'Toko Kelontong Modern, Toko Fashion, Distributor/Grosir, & UMKM Ritel',
      problem: 'Pemilik toko kesulitan memantau sisa stok barang, rawan kecurangan kasir, dan tidak mengetahui barang mana yang paling laris atau rugi.',
      solution: 'Aplikasi kasir web modern yang responsif, cepat memproses transaksi pelanggan, dan menyajikan dashboard performa omzet harian secara langsung.',
      keyBenefits: [
        'Proses checkout kasir cepat tanpa loading halaman lambat',
        'Peringatan otomatis saat stok barang mulai menipis',
        'Laporan laba kotor harian dan produk terlaris (best-seller)',
        'Dapat dioperasikan melalui tablet kasir maupun laptop toko'
      ]
    },
    techView: {
      stack: ['Laravel', 'Livewire', 'Tailwind CSS', 'Alpine.js'],
      architecture: 'Single-Page Application (SPA) experience memanfaatkan Laravel Livewire untuk reaktivitas tinggi tanpa setup API terpisah.',
      technicalHighlights: [
        'Komponen keranjang belanja interaktif berbasis event-driven Livewire',
        'Kueri kalkulasi total & diskon instan secara realtime di sisi server',
        'Desain antarmuka mobile-first yang nyaman untuk kasir layar sentuh'
      ]
    },
    links: {
      demo: 'https://demo.habiba-store.my.id/'
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
  }
]

