// Modal data
const itemDetails = {
    seragam: {
        title: 'Detail Seragam',
        icon: 'fa-tshirt',
        color: 'blue',
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
};

// Open modal function
function openModal(itemType) {
    const modal = document.getElementById('itemModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    
    const data = itemDetails[itemType];
    if (!data) return;
    
    modalTitle.innerHTML = `<i class="fas ${data.icon} mr-2" aria-hidden="true"></i>${data.title}`;
    
    let content = '<div class="space-y-4">';
    
    // Add design preview button for seragam
    if (itemType === 'seragam') {
        content += `
            <div class="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 rounded-lg p-4">
                <button onclick="openImageModal('seragam')" class="w-full flex items-center justify-center gap-3 bg-white hover:bg-green-50 p-4 rounded-lg border-2 border-green-300 transition-all group">
                    <i class="fas fa-images text-green-600 text-2xl group-hover:scale-110 transition-transform" aria-hidden="true"></i>
                    <div class="text-left">
                        <p class="font-bold text-gray-800">Lihat Desain Seragam</p>
                        <p class="text-sm text-gray-600">Klik untuk melihat foto & sketsa desain</p>
                    </div>
                    <i class="fas fa-arrow-right text-green-600 ml-auto" aria-hidden="true"></i>
                </button>
            </div>
        `;
    }
    
    // Table
    content += `
        <div class="overflow-x-auto rounded-lg border-2 border-${data.color}-100">
            <table class="w-full text-sm">
                <thead class="bg-${data.color}-50">
                    <tr>
                        <th class="px-4 py-3 text-left text-xs font-semibold text-gray-700 border-b-2 border-${data.color}-200">Item</th>
                        <th class="px-4 py-3 text-center text-xs font-semibold text-gray-700 border-b-2 border-${data.color}-200">
                            <i class="fas fa-mars text-blue-600" aria-hidden="true"></i> Boarding Putra
                        </th>
                        <th class="px-4 py-3 text-center text-xs font-semibold text-gray-700 border-b-2 border-${data.color}-200">
                            <i class="fas fa-venus text-pink-600" aria-hidden="true"></i> Boarding Putri
                        </th>
                        <th class="px-4 py-3 text-center text-xs font-semibold text-gray-700 border-b-2 border-${data.color}-200">
                            <i class="fas fa-school text-gray-600" aria-hidden="true"></i> Non-Boarding
                        </th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
    `;
    
    data.items.forEach((item, index) => {
        content += `
            <tr class="${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-${data.color}-50 transition-colors">
                <td class="px-4 py-3 text-gray-800 font-medium">${item.name}</td>
                <td class="px-4 py-3 text-center text-gray-700 font-semibold whitespace-nowrap">${item.boarding_putra ? formatRupiah(item.boarding_putra) : '—'}</td>
                <td class="px-4 py-3 text-center text-gray-700 font-semibold whitespace-nowrap">${item.boarding_putri ? formatRupiah(item.boarding_putri) : '—'}</td>
                <td class="px-4 py-3 text-center text-gray-700 font-semibold whitespace-nowrap">${item.non_boarding ? formatRupiah(item.non_boarding) : '—'}</td>
            </tr>
        `;
    });
    
    // Calculate totals
    let totalBoardingPutra = 0;
    let totalBoardingPutri = 0;
    let totalNonBoarding = 0;
    
    data.items.forEach(item => {
        totalBoardingPutra += item.boarding_putra || 0;
        totalBoardingPutri += item.boarding_putri || 0;
        totalNonBoarding += item.non_boarding || 0;
    });
    
    content += `
                <tr class="bg-gradient-to-r from-${data.color}-100 to-${data.color}-200 font-bold">
                    <td class="px-4 py-4 text-gray-900 text-base">TOTAL</td>
                    <td class="px-4 py-4 text-center text-${data.color}-800 text-base whitespace-nowrap">${formatRupiah(totalBoardingPutra)}</td>
                    <td class="px-4 py-4 text-center text-${data.color}-800 text-base whitespace-nowrap">${formatRupiah(totalBoardingPutri)}</td>
                    <td class="px-4 py-4 text-center text-${data.color}-800 text-base whitespace-nowrap">${totalNonBoarding > 0 ? formatRupiah(totalNonBoarding) : '—'}</td>
                </tr>
            </tbody>
        </table>
    </div>
    `;
    
    // Add info note if needed
    if (itemType === 'kitabPondok') {
        content += `
            <div class="bg-amber-50 border-2 border-amber-200 rounded-lg p-4">
                <div class="flex items-start gap-2 text-amber-800">
                    <i class="fas fa-info-circle mt-0.5 flex-shrink-0" aria-hidden="true"></i>
                    <p class="text-sm"><strong>Catatan:</strong> Kitab Pondok hanya disediakan untuk santri program Boarding (Putra & Putri).</p>
                </div>
            </div>
        `;
    }
    
    content += '</div>';
    modalContent.innerHTML = content;
    
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
}

// Image modal data
const uniformImages = {
    seragam: {
        title: 'Desain Seragam',
        images: [
            {
                url: 'https://imgs.search.brave.com/AivwWYVdVJcQyFAuxGUexwdAl70b35TQhc_HZiVVw9o/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Q3L2Nh/LzUwL2Q3Y2E1MGJh/N2JkOTUyYjFlMTg2/ODAxMjZiOTNhY2Yx/LmpwZw',
                caption: 'Seragam Putih Biru',
                description: 'Seragam untuk hari Senin'
            },
            {
                url: 'https://imgs.search.brave.com/UxkRvn3D47ZRQLYWkJUhJIfoKYiUbEC2ArolweemtzQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzljLzQ2/L2ZjLzljNDZmYzVm/ZGVmN2NkNjUyNjYx/YjZmMjQzNTRjMzli/LmpwZw', 
                caption: 'Seragam IPM',
                description: 'Seragam untuk hari Selasa'
            },
            {
                url: './assets/seragam-batik.jpg',
                caption: 'Seragam Batik',
                description: 'Seragam untuk hari Rabu'
            },
            {
                url: './assets/seragam-batik.jpg',
                caption: 'Seragam Almamater',
                description: 'Seragam untuk hari Kamis'
            },
            {
                url: './assets/seragam-batik.jpg',
                caption: 'Seragam Hizbul Wathan',
                description: "Seragam untuk Jum'at"
            },
            {
                url: './assets/seragam-batik.jpg',
                caption: 'Jas Almamater',
                description: 'Seragam yang digunakan untuk hari-hari tertentu'
            },
            {
                url: './assets/seragam-batik.jpg',
                caption: 'Seragam Olahraga',
                description: 'Seragam yang digunakan sesuai dengan jadwal olahraga'
            }
        ]
    }
};

// Open image modal function
function openImageModal(itemType) {
    const modal = document.getElementById('imageModal');
    const modalTitle = document.getElementById('imageModalTitle');
    const modalContent = document.getElementById('imageModalContent');
    
    const data = uniformImages[itemType];
    if (!data) return;
    
    // Update judul modal
    modalTitle.textContent = data.title;
    
    // Update tombol back dengan itemType yang benar
    const backButton = modal.querySelector('button[onclick*="closeImageModalAndBackToDetail"]');
    backButton.setAttribute('onclick', `closeImageModalAndBackToDetail('${itemType}')`);
    
    let content = '<div class="grid grid-cols-1 md:grid-cols-2 gap-4">';
    
    data.images.forEach((img, index) => {
        content += `
            <div class="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
                <div class="aspect-square bg-gray-100 flex items-center justify-center p-2">
                    <img src="${img.url}" 
                         alt="${img.caption}" 
                         class="max-w-full max-h-full object-contain transition-opacity duration-300"
                         loading="lazy"
                         onload="this.style.opacity='1'"
                         onerror="this.src='https://via.placeholder.com/400x400?text=Gambar+Tidak+Tersedia';this.style.opacity='1'"
                         style="opacity:0">
                </div>
                <div class="p-3 bg-white">
                    <h4 class="font-semibold text-gray-800 text-sm mb-1">${img.caption}</h4>
                    <p class="text-xs text-gray-600">${img.description}</p>
                </div>
            </div>
        `;
    });
    
    content += '</div>';
    
    content += `
        <div class="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm">
            <div class="flex items-start gap-2 text-blue-800">
                <i class="fas fa-info-circle mt-0.5 flex-shrink-0" aria-hidden="true"></i>
                <p><strong>Catatan:</strong> Desain seragam dapat berubah sesuai kebijakan sekolah.</p>
            </div>
        </div>
    `;
    
    modalContent.innerHTML = content;
    
    // Tutup modal detail seragam terlebih dahulu untuk mengurangi beban
    closeModal();
    
    // Force layout calculation before showing modal
    modal.offsetHeight;
    
    requestAnimationFrame(() => {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.style.overflow = 'hidden';
    });
}

// Fungsi baru untuk kembali ke modal detail
function closeImageModalAndBackToDetail(itemType) {
    const imageModal = document.getElementById('imageModal');
    
    // Tutup modal gambar dulu
    imageModal.classList.add('hidden');
    imageModal.classList.remove('flex');
    
    // Buka kembali modal detail setelah delay kecil
    setTimeout(() => {
        openModal(itemType);
    }, 50);
}

// Close image modal function
function closeImageModal(event) {
    if (event && event.target.id !== 'imageModal') return;
    
    const modal = document.getElementById('imageModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
}

// Close modal function
function closeModal(event) {
    if (event && event.target.id !== 'itemModal') return;
    
    const modal = document.getElementById('itemModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
}

// Update escape key handler untuk handle kedua modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const imageModal = document.getElementById('imageModal');
        const itemModal = document.getElementById('itemModal');
        
        if (!imageModal.classList.contains('hidden')) {
            closeImageModal();
        } else if (!itemModal.classList.contains('hidden')) {
            closeModal();
        }
    }
});

// Format rupiah helper
function formatRupiah(number) {
    return 'Rp ' + number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Fade in animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            requestAnimationFrame(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            });
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-in, transform 0.6s ease-in';
    observer.observe(el);
});

// Smooth scroll for better UX
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// FAQ Toggle Function
function toggleFAQ(index) {
    const faqItems = document.querySelectorAll('.faq-item');
    const currentItem = faqItems[index];
    const content = currentItem.querySelector('.faq-content');
    const icon = currentItem.querySelector('.faq-icon');
    
    // Toggle current FAQ
    const isHidden = content.classList.contains('hidden');
    
    if (isHidden) {
        content.classList.remove('hidden');
        icon.style.transform = 'rotate(180deg)';
        // Smooth height animation
        content.style.maxHeight = content.scrollHeight + 'px';
    } else {
        content.style.maxHeight = '0';
        setTimeout(() => {
            content.classList.add('hidden');
        }, 300);
        icon.style.transform = 'rotate(0deg)';
    }
}

// Download PDF Function
function downloadPDF() {
    // Show loading toast
    showToast('Menyiapkan PDF...', 'info');
    
    // Simple print to PDF approach
    setTimeout(() => {
        window.print();
        showToast('Gunakan opsi "Save as PDF" di dialog print', 'success');
    }, 500);
}

// Toast Notification Function
function showToast(message, type = 'info') {
    // Remove existing toast if any
    const existingToast = document.querySelector('.toast-notification');
    if (existingToast) {
        existingToast.remove();
    }
    
    const colors = {
        success: 'bg-green-500',
        error: 'bg-red-500',
        info: 'bg-blue-500',
        warning: 'bg-yellow-500'
    };
    
    const icons = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        info: 'fa-info-circle',
        warning: 'fa-exclamation-triangle'
    };
    
    const toast = document.createElement('div');
    toast.className = `toast-notification fixed bottom-6 right-6 ${colors[type]} text-white px-6 py-4 rounded-lg shadow-2xl z-50 flex items-center gap-3 animate-slide-up`;
    toast.innerHTML = `
        <i class="fas ${icons[type]} text-xl" aria-hidden="true"></i>
        <span class="font-medium">${message}</span>
    `;
    
    document.body.appendChild(toast);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(20px)';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}