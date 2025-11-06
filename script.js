// Modal data dengan PDF
const itemDetails = {
    seragam: {
        title: 'Detail Seragam',
        icon: 'fa-tshirt',
        color: 'blue',
        type: 'pdf', // Tandai sebagai PDF
        pdfUrl: 'pdf/seragam-detail.pdf' // Path ke PDF
    },
    bukuUmum: {
        title: 'Detail Buku Umum',
        icon: 'fa-book',
        color: 'cyan',
        type: 'pdf',
        pdfUrl: 'pdf/buku-umum-detail.pdf'
    },
    bukuIsmubaris: {
        title: 'Detail Buku Ismubaris',
        icon: 'fa-book-open',
        color: 'green',
        type: 'pdf',
        pdfUrl: 'pdf/buku-ismubaris-detail.pdf'
    },
    kitabPondok: {
        title: 'Detail Kitab Pondok',
        icon: 'fa-book-quran',
        color: 'amber',
        type: 'pdf',
        pdfUrl: 'pdf/kitab-pondok-detail.pdf'
    }
};

// Format rupiah helper
function formatRupiah(number) {
    return 'Rp ' + number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Open modal function dengan PDF support
function openModal(itemType) {
    const modal = document.getElementById('itemModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    
    const data = itemDetails[itemType];
    if (!data) return;
    
    modalTitle.innerHTML = `<i class="fas ${data.icon} mr-2" aria-hidden="true"></i>${data.title}`;
    
    let content = '';
    
    if (data.type === 'pdf') {
        // Tampilkan PDF embed
        content = `
            <div class="space-y-4">
                <div class="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
                    <div class="flex items-start gap-2 text-blue-800">
                        <i class="fas fa-file-pdf mt-0.5 flex-shrink-0" aria-hidden="true"></i>
                        <div>
                            <p class="text-sm font-semibold">Detail lengkap tersedia dalam format PDF</p>
                            <p class="text-xs mt-1">Scroll untuk melihat detail item dan harga</p>
                        </div>
                    </div>
                </div>
                
                <div class="bg-white rounded-lg border-2 border-gray-200 overflow-hidden">
                    <embed 
                        src="${data.pdfUrl}" 
                        type="application/pdf" 
                        width="100%" 
                        height="600"
                        class="w-full"
                    >
                </div>
                
                <div class="flex flex-col sm:flex-row gap-3 justify-between items-center">
                    <a href="${data.pdfUrl}" 
                       download 
                       class="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors">
                        <i class="fas fa-download" aria-hidden="true"></i>
                        Download PDF
                    </a>
                    
                    <a href="${data.pdfUrl}" 
                       target="_blank" 
                       class="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
                        <i class="fas fa-external-link-alt" aria-hidden="true"></i>
                        Buka di Tab Baru
                    </a>
                </div>
            </div>
        `;
    } else {
        // Fallback ke tabel (seperti sebelumnya)
        content = `
            <div class="space-y-4">
                <div class="overflow-x-auto rounded-lg border-2 border-${data.color}-100">
                    <!-- Tabel fallback -->
                    <p class="text-center p-4 text-gray-600">Data sedang dimuat...</p>
                </div>
            </div>
        `;
    }
    
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