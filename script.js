/**
 * Koperasi Senyummu - Premium Website Script
 * Features: Navbar scroll, Mobile menu, FAQ accordion, Modals, Animations
 */

// ========================================
// MODAL DATA
// ========================================
const itemDetails = {
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
};

const uniformImages = {
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
};

// ========================================
// INITIALIZATION
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initMobileMenu();
    initScrollAnimations();
    initSmoothScroll();
});

// ========================================
// NAVBAR SCROLL EFFECT
// ========================================
function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    let lastScroll = 0;
    const scrollThreshold = 50;
    let ticking = false;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (!ticking) {
            window.requestAnimationFrame(() => {
                if (currentScroll > scrollThreshold) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
                lastScroll = currentScroll;
                ticking = false;
            });

            ticking = true;
        }
    }, { passive: true });
}

// ========================================
// MOBILE MENU
// ========================================
function initMobileMenu() {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navbarLinks');

    if (!menuBtn || !navLinks) return;

    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = menuBtn.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('.navbar-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = menuBtn.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
            navLinks.classList.remove('active');
            const icon = menuBtn.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        }
    });
}

// ========================================
// SCROLL ANIMATIONS
// ========================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-up').forEach(el => {
        observer.observe(el);
    });
}

// ========================================
// SMOOTH SCROLL
// ========================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);

            if (target) {
                const navbarHeight = document.getElementById('navbar')?.offsetHeight || 0;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========================================
// FAQ ACCORDION
// ========================================
function toggleFAQ(button) {
    const faqItem = button.closest('.faq-item');
    const isActive = faqItem.classList.contains('active');

    // Close all other FAQs
    document.querySelectorAll('.faq-item.active').forEach(item => {
        if (item !== faqItem) {
            item.classList.remove('active');
        }
    });

    // Toggle current FAQ
    faqItem.classList.toggle('active');
}

// ========================================
// MODAL FUNCTIONS
// ========================================
function openModal(itemType) {
    const modal = document.getElementById('itemModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');

    const data = itemDetails[itemType];
    if (!data) return;

    // Update title
    modalTitle.innerHTML = `<i class="fas ${data.icon}"></i><span>${data.title}</span>`;

    // Build content
    let content = '';

    // Add design preview button for seragam
    if (itemType === 'seragam') {
        content += `
            <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1)); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 16px; padding: 1rem; margin-bottom: 1.5rem;">
                <button onclick="openImageModal('seragam')" style="width: 100%; display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 12px; cursor: pointer; transition: all 0.2s ease;" onmouseover="this.style.background='var(--bg-card-hover)'" onmouseout="this.style.background='var(--glass-bg)'">
                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                        <i class="fas fa-images" style="font-size: 1.5rem; color: var(--primary-400);"></i>
                        <div style="text-align: left;">
                            <p style="font-weight: 600; color: var(--text-primary); margin: 0;">Lihat Desain Seragam</p>
                            <p style="font-size: 0.75rem; color: var(--text-muted); margin: 0;">Klik untuk melihat foto & sketsa desain</p>
                        </div>
                    </div>
                    <i class="fas fa-arrow-right" style="color: var(--primary-400);"></i>
                </button>
            </div>
        `;
    }

    // Table
    content += `
        <div style="overflow-x: auto; border-radius: 12px; border: 1px solid var(--glass-border);">
            <table style="width: 100%; border-collapse: collapse; font-size: 0.875rem;">
                <thead style="background: rgba(16, 185, 129, 0.1);">
                    <tr>
                        <th style="padding: 0.875rem; text-align: left; font-weight: 600; color: var(--text-secondary); border-bottom: 1px solid var(--glass-border);">Item</th>
                        <th style="padding: 0.875rem; text-align: center; font-weight: 600; color: var(--text-secondary); border-bottom: 1px solid var(--glass-border);">
                            <i class="fas fa-mars" style="color: #3b82f6;"></i> Boarding Putra
                        </th>
                        <th style="padding: 0.875rem; text-align: center; font-weight: 600; color: var(--text-secondary); border-bottom: 1px solid var(--glass-border);">
                            <i class="fas fa-venus" style="color: #ec4899;"></i> Boarding Putri
                        </th>
                        <th style="padding: 0.875rem; text-align: center; font-weight: 600; color: var(--text-secondary); border-bottom: 1px solid var(--glass-border);">
                            <i class="fas fa-school" style="color: #06b6d4;"></i> Non-Boarding
                        </th>
                    </tr>
                </thead>
                <tbody>
    `;

    data.items.forEach((item, index) => {
        const bgColor = index % 2 === 0 ? 'transparent' : 'rgba(255, 255, 255, 0.02)';
        content += `
            <tr style="background: ${bgColor}; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">
                <td style="padding: 0.75rem; color: var(--text-primary);">${item.name}</td>
                <td style="padding: 0.75rem; text-align: center; color: var(--primary-300); font-weight: 500;">${item.boarding_putra ? formatRupiah(item.boarding_putra) : '—'}</td>
                <td style="padding: 0.75rem; text-align: center; color: var(--primary-300); font-weight: 500;">${item.boarding_putri ? formatRupiah(item.boarding_putri) : '—'}</td>
                <td style="padding: 0.75rem; text-align: center; color: var(--primary-300); font-weight: 500;">${item.non_boarding ? formatRupiah(item.non_boarding) : '—'}</td>
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
                <tr style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(245, 158, 11, 0.1));">
                    <td style="padding: 1rem; font-weight: 700; color: var(--text-primary);">TOTAL</td>
                    <td style="padding: 1rem; text-align: center; font-weight: 700; color: var(--primary-300);">${formatRupiah(totalBoardingPutra)}</td>
                    <td style="padding: 1rem; text-align: center; font-weight: 700; color: var(--primary-300);">${formatRupiah(totalBoardingPutri)}</td>
                    <td style="padding: 1rem; text-align: center; font-weight: 700; color: var(--primary-300);">${totalNonBoarding > 0 ? formatRupiah(totalNonBoarding) : '—'}</td>
                </tr>
            </tbody>
        </table>
    </div>
    `;

    // Add info note if needed
    if (itemType === 'kitabPondok') {
        content += `
            <div style="background: rgba(245, 158, 11, 0.1); border: 1px solid rgba(245, 158, 11, 0.2); border-radius: 12px; padding: 1rem; margin-top: 1rem; display: flex; align-items: flex-start; gap: 0.75rem;">
                <i class="fas fa-info-circle" style="color: var(--accent-400); margin-top: 2px;"></i>
                <p style="font-size: 0.875rem; color: var(--accent-300); margin: 0;"><strong>Catatan:</strong> Kitab Pondok hanya disediakan untuk santri program Boarding (Putra & Putri).</p>
            </div>
        `;
    }

    modalContent.innerHTML = content;

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('itemModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ========================================
// IMAGE MODAL FUNCTIONS
// ========================================
function openImageModal(itemType) {
    const modal = document.getElementById('imageModal');
    const modalTitle = document.getElementById('imageModalTitle');
    const modalContent = document.getElementById('imageModalContent');

    const data = uniformImages[itemType];
    if (!data) return;

    modalTitle.innerHTML = `<i class="fas fa-images"></i><span>${data.title}</span>`;

    let content = '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">';

    data.images.forEach((img) => {
        content += `
            <div style="background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 16px; overflow: hidden;">
                <div style="aspect-ratio: 1; background: rgba(255, 255, 255, 0.02); display: flex; align-items: center; justify-content: center; padding: 0.5rem;">
                    <img src="${img.url}" 
                         alt="${img.caption}" 
                         style="max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 8px;"
                         loading="lazy"
                         onerror="this.src='https://via.placeholder.com/400x400/1e293b/64748b?text=Gambar+Tidak+Tersedia'">
                </div>
                <div style="padding: 1rem; border-top: 1px solid var(--glass-border);">
                    <h4 style="font-size: 0.875rem; font-weight: 600; color: var(--text-primary); margin: 0 0 0.25rem 0;">${img.caption}</h4>
                    <p style="font-size: 0.75rem; color: var(--text-muted); margin: 0;">${img.description}</p>
                </div>
            </div>
        `;
    });

    content += '</div>';

    content += `
        <div style="background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.2); border-radius: 12px; padding: 1rem; margin-top: 1rem; display: flex; align-items: flex-start; gap: 0.75rem;">
            <i class="fas fa-info-circle" style="color: #60a5fa; margin-top: 2px;"></i>
            <p style="font-size: 0.875rem; color: #93c5fd; margin: 0;"><strong>Catatan:</strong> Desain seragam dapat berubah sesuai kebijakan sekolah.</p>
        </div>
    `;

    modalContent.innerHTML = content;

    // Close item modal first
    closeModal();

    // Show image modal
    setTimeout(() => {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }, 100);
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function closeImageModalAndBackToDetail(itemType) {
    closeImageModal();
    setTimeout(() => {
        openModal(itemType);
    }, 100);
}

// Close modals with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const imageModal = document.getElementById('imageModal');
        const itemModal = document.getElementById('itemModal');

        if (imageModal.classList.contains('active')) {
            closeImageModal();
        } else if (itemModal.classList.contains('active')) {
            closeModal();
        }
    }
});

// Close modals when clicking overlay
document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});

// ========================================
// HELPER FUNCTIONS
// ========================================
function formatRupiah(number) {
    return 'Rp ' + number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// ========================================
// PDF DOWNLOAD
// ========================================
function downloadPDF() {
    showToast('Menyiapkan PDF...', 'info');

    setTimeout(() => {
        window.print();
        showToast('Gunakan opsi "Save as PDF" di dialog print', 'success');
    }, 500);
}

// ========================================
// TOAST NOTIFICATIONS
// ========================================
function showToast(message, type = 'info') {
    // Remove existing toast
    const existingToast = document.querySelector('.toast-notification');
    if (existingToast) {
        existingToast.remove();
    }

    const colors = {
        success: '#10b981',
        error: '#ef4444',
        info: '#3b82f6',
        warning: '#f59e0b'
    };

    const icons = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        info: 'fa-info-circle',
        warning: 'fa-exclamation-triangle'
    };

    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.style.cssText = `
        position: fixed;
        bottom: 1.5rem;
        right: 1.5rem;
        background: ${colors[type]};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        z-index: 3000;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        animation: slideUp 0.3s ease;
    `;

    toast.innerHTML = `
        <i class="fas ${icons[type]}" style="font-size: 1.25rem;"></i>
        <span style="font-weight: 500;">${message}</span>
    `;

    // Add animation keyframes if not exists
    if (!document.getElementById('toast-styles')) {
        const style = document.createElement('style');
        style.id = 'toast-styles';
        style.textContent = `
            @keyframes slideUp {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(toast);

    // Auto remove after 3 seconds
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(20px)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ========================================
// THEME TOGGLE
// ========================================
function initThemeToggle() {
    const toggleBtn = document.getElementById('themeToggle');
    if (!toggleBtn) return;

    const html = document.documentElement;
    const icon = toggleBtn.querySelector('i');

    function setTheme(theme) {
        if (theme === 'light') {
            html.setAttribute('data-theme', 'light');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            localStorage.setItem('theme', 'light');
        } else {
            html.removeAttribute('data-theme');
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            localStorage.setItem('theme', 'dark');
        }
    }

    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    }

    toggleBtn.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        setTheme(currentTheme === 'light' ? 'dark' : 'light');
    });
}

// Initialize all functions
document.addEventListener('DOMContentLoaded', () => {
    if (typeof initNavbar === 'function') initNavbar();
    if (typeof initMobileMenu === 'function') initMobileMenu();
    if (typeof initScrollAnimations === 'function') initScrollAnimations();
    if (typeof initSmoothScroll === 'function') initSmoothScroll();
    initThemeToggle();
});