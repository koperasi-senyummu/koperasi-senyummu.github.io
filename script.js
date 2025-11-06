// Modal data
const itemDetails = {
    seragam: {
        title: 'Detail Seragam',
        icon: 'fa-tshirt',
        color: 'blue',
        items: [
            { name: 'Seragam Batik', boarding_putra: 75000, boarding_putri: 85000, non_boarding: 75000 },
            { name: 'Seragam Pramuka', boarding_putra: 80000, boarding_putri: 90000, non_boarding: 80000 },
            { name: 'Seragam Olahraga', boarding_putra: 65000, boarding_putri: 70000, non_boarding: 65000 },
            { name: 'Seragam Putih Abu-abu', boarding_putra: 70000, boarding_putri: 75000, non_boarding: 70000 },
            { name: 'Jas Almamater', boarding_putra: 150000, boarding_putri: 165000, non_boarding: 150000 },
            { name: 'Dasi & Atribut', boarding_putra: 45000, boarding_putri: 50000, non_boarding: 45000 },
            { name: 'Kaos Kaki & Ikat Pinggang', boarding_putra: 35000, boarding_putri: 40000, non_boarding: 35000 },
            { name: 'Topi & Name Tag', boarding_putra: 40000, boarding_putri: 45000, non_boarding: 40000 },
            { name: 'Sepatu Hitam', boarding_putra: 175000, boarding_putri: 185000, non_boarding: 175000 },
            { name: 'Sepatu Olahraga', boarding_putra: 150000, boarding_putri: 160000, non_boarding: 150000 },
            { name: 'Sandal Pondok', boarding_putra: 75000, boarding_putri: 150000, non_boarding: 75000 }
        ]
    },
    bukuUmum: {
        title: 'Detail Buku Umum',
        icon: 'fa-book',
        color: 'cyan',
        items: [
            { name: 'Buku Paket Matematika', boarding_putra: 25000, boarding_putri: 25000, non_boarding: 25000 },
            { name: 'Buku Paket Bahasa Indonesia', boarding_putra: 20000, boarding_putri: 20000, non_boarding: 20000 },
            { name: 'Buku Paket Bahasa Inggris', boarding_putra: 20000, boarding_putri: 20000, non_boarding: 20000 },
            { name: 'Buku Paket IPA', boarding_putra: 25000, boarding_putri: 25000, non_boarding: 25000 },
            { name: 'Buku Paket IPS', boarding_putra: 20000, boarding_putri: 20000, non_boarding: 20000 },
            { name: 'LKS (Lembar Kerja Siswa)', boarding_putra: 10000, boarding_putri: 10000, non_boarding: 10000 }
        ]
    },
    bukuIsmubaris: {
        title: 'Detail Buku Ismubaris',
        icon: 'fa-book-open',
        color: 'green',
        items: [
            { name: 'Buku Fiqih', boarding_putra: 30000, boarding_putri: 30000, non_boarding: 62000 },
            { name: 'Buku Akidah Akhlak', boarding_putra: 25000, boarding_putri: 25000, non_boarding: 50000 },
            { name: 'Buku Al-Quran Hadist', boarding_putra: 30000, boarding_putri: 30000, non_boarding: 60000 },
            { name: 'Buku Sejarah Kebudayaan Islam', boarding_putra: 20000, boarding_putri: 20000, non_boarding: 45000 },
            { name: 'Buku Bahasa Arab', boarding_putra: 15000, boarding_putri: 15000, non_boarding: 30000 }
        ]
    },
    kitabPondok: {
        title: 'Detail Kitab Pondok',
        icon: 'fa-book-quran',
        color: 'amber',
        items: [
            { name: 'Kitab Aqidatul Awam', boarding_putra: 25000, boarding_putri: 25000, non_boarding: null },
            { name: 'Kitab Safinatun Najah', boarding_putra: 30000, boarding_putri: 30000, non_boarding: null },
            { name: 'Kitab Sulam Taufiq', boarding_putra: 35000, boarding_putri: 35000, non_boarding: null },
            { name: 'Kitab Jurumiyah', boarding_putra: 40000, boarding_putri: 40000, non_boarding: null },
            { name: 'Kitab Imriti', boarding_putra: 35000, boarding_putri: 35000, non_boarding: null },
            { name: 'Kitab Alfiyah', boarding_putra: 45000, boarding_putri: 45000, non_boarding: null },
            { name: 'Kitab Tafsir Jalalain', boarding_putra: 60000, boarding_putri: 60000, non_boarding: null }
        ]
    }
};

// Format rupiah helper
function formatRupiah(number) {
    return 'Rp ' + number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Open modal function
function openModal(itemType) {
    const modal = document.getElementById('itemModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    
    const data = itemDetails[itemType];
    if (!data) return;
    
    modalTitle.innerHTML = `<i class="fas ${data.icon} mr-2" aria-hidden="true"></i>${data.title}`;
    
    let content = '<div class="space-y-4">';
    
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
                <td class="px-4 py-3 text-center text-gray-700 font-semibold whitespace-nowrap">${formatRupiah(item.boarding_putra)}</td>
                <td class="px-4 py-3 text-center text-gray-700 font-semibold whitespace-nowrap">${formatRupiah(item.boarding_putri)}</td>
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

// Close modal function
function closeModal(event) {
    if (event && event.target.id !== 'itemModal') return;
    
    const modal = document.getElementById('itemModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Fade in animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
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