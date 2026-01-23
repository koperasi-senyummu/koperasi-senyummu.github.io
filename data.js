/**
 * Koperasi Senyummu - Data Configuration
 * Centralized data for prices, items, and schedules
 */

const DATA = {
    // Configuration
    config: {
        academicYear: "2026/2027",
        installmentPeriod: "Apr - Jul 2026",
    },

    // Price Items
    items: [
        {
            id: 1,
            name: "Seragam",
            icon: "fa-tshirt",
            iconColor: "#3b82f6", // blue-500
            prices: {
                boardingPutra: 960000,
                boardingPutri: 1115000,
                nonBoarding: 960000
            },
            hasModal: true,
            modalKey: "seragam"
        },
        {
            id: 2,
            name: "Buku Umum",
            icon: "fa-book",
            iconColor: "#06b6d4", // cyan-500
            prices: {
                boardingPutra: 120000,
                boardingPutri: 120000,
                nonBoarding: 120000
            },
            hasModal: true,
            modalKey: "bukuUmum"
        },
        {
            id: 3,
            name: "Buku Ismubaris",
            icon: "fa-book-open",
            iconColor: "#10b981", // emerald-500
            prices: {
                boardingPutra: 120000,
                boardingPutri: 120000,
                nonBoarding: 247000
            },
            hasModal: true,
            modalKey: "bukuIsmubaris"
        },
        {
            id: 4,
            name: "Kitab Pondok",
            icon: "fa-book-quran",
            iconColor: "#f59e0b", // amber-500
            prices: {
                boardingPutra: 270000,
                boardingPutri: 270000,
                nonBoarding: null // Not available
            },
            hasModal: true,
            modalKey: "kitabPondok"
        }
    ],

    // Installment Schedule
    installments: [
        {
            month: 1,
            name: "April 2026",
            icon: "fa-calendar-check",
            colorClass: "month-1"
        },
        {
            month: 2,
            name: "Mei 2026",
            icon: "fa-calendar-check",
            colorClass: "month-2"
        },
        {
            month: 3,
            name: "Juni 2026",
            icon: "fa-calendar-check",
            colorClass: "month-3"
        },
        {
            month: 4,
            name: "Juli 2026",
            icon: "fa-calendar-check",
            colorClass: "month-4"
        }
    ],

    // FAQ Items
    faqs: [
        {
            question: "Apakah pembayaran harus dicicil?",
            answer: "Pembayaran dapat dilakukan secara cicilan (4x) atau lunas di awal. Sistem cicilan berlangsung mulai periode April - Juli 2026.",
            icon: "fa-credit-card"
        },
        {
            question: "Bagaimana jika terlambat membayar angsuran?",
            answer: "Untuk informasi detail mengenai keterlambatan pembayaran, silakan hubungi bagian keuangan melalui kontak yang tersedia di bawah.",
            icon: "fa-calendar-alt"
        },
        {
            question: "Apakah bisa mengubah dari Non-Boarding ke Boarding?",
            answer: "Perubahan program dapat dilakukan dengan menghubungi bagian administrasi. Penyesuaian biaya akan dihitung berdasarkan selisih program yang dipilih.",
            icon: "fa-exchange-alt"
        },
        {
            question: "Kapan perlengkapan akan diterima?",
            answer: "Perlengkapan akan disiapkan setelah pembayaran angsuran pertama lunas dan akan diserahkan sesuai jadwal yang ditentukan oleh pihak sekolah.",
            icon: "fa-shipping-fast"
        },
        {
            question: "Metode pembayaran apa saja yang tersedia?",
            answer: "Pembayaran dapat dilakukan melalui: Tunai atau Transfer Bank Mandiri. Pastikan menyertakan nomor referensi atau nama santri saat transfer.",
            icon: "fa-money-check-alt"
        }
    ],

    // Modal Details (Moved from script.js)
    itemDetails: {
        seragam: {
            title: 'Detail Seragam',
            icon: 'fa-tshirt',
            color: 'emerald',
            items: [
                { name: 'Kain Seragam Putih Biru', boarding_putra: 125000, boarding_putri: 150000, non_boarding: 125000 },
                { name: 'Kain Seragam IPM', boarding_putra: 125000, boarding_putri: 150000, non_boarding: 125000 },
                { name: 'Kain Seragam Batik', boarding_putra: 135000, boarding_putri: 160000, non_boarding: 135000 },
                { name: '1 Setel Koko Hijau Almamater', boarding_putra: 210000, boarding_putri: 230000, non_boarding: 210000 },
                { name: 'Kain Seragam HW', boarding_putra: 105000, boarding_putri: 130000, non_boarding: 105000 },
                { name: 'Jas Almamater Hijau', boarding_putra: 165000, boarding_putri: 165000, non_boarding: 165000 },
                { name: '1 Setel Kaos Olahraga', boarding_putra: 95000, boarding_putri: 130000, non_boarding: 95000 },
            ]
        },
        bukuUmum: {
            title: 'Detail Buku Umum',
            icon: 'fa-book',
            color: 'cyan',
            items: [
                { name: 'Bahasa Indonesia', boarding_putra: 10000, boarding_putri: 10000, non_boarding: 10000 },
                { name: 'Matematika', boarding_putra: 10000, boarding_putri: 10000, non_boarding: 10000 },
                { name: 'Bahasa Inggris', boarding_putra: 10000, boarding_putri: 10000, non_boarding: 10000 },
                { name: 'IPA', boarding_putra: 20000, boarding_putri: 20000, non_boarding: 20000 },
                { name: 'IPS', boarding_putra: 20000, boarding_putri: 20000, non_boarding: 20000 },
                { name: 'PKN', boarding_putra: 10000, boarding_putri: 10000, non_boarding: 10000 },
                { name: 'PJOK', boarding_putra: 10000, boarding_putri: 10000, non_boarding: 10000 },
                { name: 'TIK', boarding_putra: 10000, boarding_putri: 10000, non_boarding: 10000 },
                { name: 'Seni Rupa/SBK', boarding_putra: 10000, boarding_putri: 10000, non_boarding: 10000 },
                { name: 'Bahasa Jawa', boarding_putra: 10000, boarding_putri: 10000, non_boarding: 10000 }
            ]
        },
        bukuIsmubaris: {
            title: 'Detail Buku Ismubaris',
            icon: 'fa-book-open',
            color: 'green',
            items: [
                { name: 'Buku Kemuhammadiyahan', boarding_putra: 30000, boarding_putri: 30000, non_boarding: 30000 },
                { name: 'Buku Bahasa Arab', boarding_putra: 27000, boarding_putri: 27000, non_boarding: 0 },
                { name: 'Al-Quran metode Wafa (TTG)', boarding_putra: 43000, boarding_putri: 43000, non_boarding: 43000 },
                { name: 'Al-Quran metode Wafa (Menulis)', boarding_putra: 20000, boarding_putri: 20000, non_boarding: 20000 },
                { name: 'Buku Al Islam', boarding_putra: 0, boarding_putri: 0, non_boarding: 60000 },
                { name: 'Buku Al Ashri', boarding_putra: 0, boarding_putri: 0, non_boarding: 54000 },
                { name: 'Buku Tahfidz', boarding_putra: 0, boarding_putri: 0, non_boarding: 20000 },
                { name: 'Buku Dzikir Pagi Petang', boarding_putra: 0, boarding_putri: 0, non_boarding: 7500 },
                { name: 'Buku Prestasi', boarding_putra: 0, boarding_putri: 0, non_boarding: 12500 }
            ]
        },
        kitabPondok: {
            title: 'Detail Kitab Pondok',
            icon: 'fa-book-quran',
            color: 'amber',
            items: [
                { name: 'Aqidah', boarding_putra: 40000, boarding_putri: 40000, non_boarding: null },
                { name: 'Akhlak', boarding_putra: 40000, boarding_putri: 40000, non_boarding: null },
                { name: 'Fiqih', boarding_putra: 37000, boarding_putri: 37000, non_boarding: null },
                { name: 'SKI', boarding_putra: 40000, boarding_putri: 40000, non_boarding: null },
                { name: 'Tuhfah', boarding_putra: 35000, boarding_putri: 35000, non_boarding: null },
                { name: 'Hadist', boarding_putra: 38000, boarding_putri: 38000, non_boarding: null },
                { name: 'Buku Tahfidz', boarding_putra: 20000, boarding_putri: 20000, non_boarding: null },
                { name: 'Buku Dzikir Pagi Petang', boarding_putra: 7500, boarding_putri: 7500, non_boarding: null },
                { name: 'Buku Prestasi', boarding_putra: 12500, boarding_putri: 12500, non_boarding: null }
            ]
        }
    },

    // Uniform Images
    uniformImages: {
        seragam: {
            title: 'Desain Seragam',
            images: [
                {
                    url: './assets/images/seragam-putih-biru.svg',
                    caption: 'Seragam Putih Biru',
                    description: 'Seragam untuk hari Senin'
                },
                {
                    url: './assets/images/seragam-ipm.svg',
                    caption: 'Seragam IPM',
                    description: 'Seragam untuk hari Selasa'
                },
                {
                    url: './assets/images/seragam-batik.svg',
                    caption: 'Seragam Batik',
                    description: 'Seragam untuk hari Rabu'
                },
                {
                    url: './assets/images/seragam-almamater.svg',
                    caption: 'Seragam Almamater',
                    description: 'Seragam untuk hari Kamis'
                },
                {
                    url: './assets/images/seragam-hw.svg',
                    caption: 'Seragam Hizbul Wathan',
                    description: "Seragam untuk hari Jum'at"
                },
                {
                    url: './assets/images/jas-almamater.svg',
                    caption: 'Jas Almamater',
                    description: 'Seragam yang digunakan untuk hari-hari tertentu'
                },
                {
                    url: './assets/images/seragam-olahraga.svg',
                    caption: 'Seragam Olahraga',
                    description: 'Seragam yang digunakan sesuai dengan jadwal olahraga'
                }
            ]
        }
    }
};
