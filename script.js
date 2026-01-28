/**
 * Koperasi Senyummu - Premium Website Script
 * Features: Navbar scroll, Mobile menu, FAQ accordion, Modals, Animations
 */

// ========================================
// INITIALIZATION
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initMobileMenu();
    initScrollAnimations();
    initSmoothScroll();
    checkMotionPreference();
    initThemeToggle();
    initScrollToTop();

    // Skeleton Loading Handling
    setTimeout(() => {
        const skeleton = document.getElementById('skeleton-loader');
        if (skeleton) {
            skeleton.style.opacity = '0';
            setTimeout(() => {
                skeleton.remove();
            }, 500);
        }
    }, 600); // Fast load for better UX
});

// ========================================
// NAVBAR FUNCTIONS
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
                // Add/remove scrolled class based on scroll position
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

function initMobileMenu() {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navbarLinks');

    if (!menuBtn || !navLinks) return;

    // Toggle menu
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = menuBtn.querySelector('i');

        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('.navbar-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = menuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
            navLinks.classList.remove('active');
            const icon = menuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
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

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);

            if (target) {
                const navbarHeight = document.getElementById('navbar').offsetHeight;
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
// FAQ INTERACTION
// ========================================
function toggleFAQ(button) {
    const faqItem = button.closest('.faq-item');

    // Close all other active items
    document.querySelectorAll('.faq-item.active').forEach(item => {
        if (item !== faqItem) {
            item.classList.remove('active');
        }
    });

    // Toggle current item
    faqItem.classList.toggle('active');
}

// ========================================
// MODAL & DATA HANDLING
// ========================================

// Data is now loaded from window.DATA in data.js
// This makes script.js cleaner and focused on logic only

function formatRupiah(number) {
    return 'Rp ' + number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function openModal(itemType) {
    const modal = document.getElementById('itemModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');

    const data = window.DATA && window.DATA.itemDetails ? window.DATA.itemDetails[itemType] : null;
    if (!data) return;

    modalTitle.innerHTML = `<i class="fas ${data.icon}"></i><span>${data.title}</span>`;

    let content = '';

    // Add Seragam Design Link if it's 'seragam'
    if (itemType === 'seragam') {
        content += `
            <div style="background: var(--primary-50); border: 1px solid var(--primary-200); border-radius: 16px; padding: 1rem; margin-bottom: 1.5rem;">
                <button onclick="openImageModal('seragam')" style="width: 100%; display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: white; border: 1px solid var(--primary-100); border-radius: 12px; cursor: pointer; transition: all 0.2s ease; box-shadow: 0 2px 4px rgba(0,0,0,0.05);" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 2px 4px rgba(0,0,0,0.05)'">
                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                        <div style="width: 40px; height: 40px; border-radius: 8px; background: var(--primary-100); display: flex; align-items: center; justify-content: center;">
                            <i class="fas fa-images" style="font-size: 1.25rem; color: var(--primary-600);"></i>
                        </div>
                        <div style="text-align: left;">
                            <p style="font-weight: 600; color: var(--primary-900); margin: 0;">Lihat Desain Seragam</p>
                            <p style="font-size: 0.75rem; color: var(--primary-600); margin: 0;">Klik untuk melihat foto & sketsa desain</p>
                        </div>
                    </div>
                    <i class="fas fa-arrow-right" style="color: var(--primary-500);"></i>
                </button>
            </div>
        `;
    }

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

    let totalBoardingPutra = 0;
    let totalBoardingPutri = 0;
    let totalNonBoarding = 0;

    data.items.forEach((item, index) => {
        const bgColor = index % 2 === 0 ? 'transparent' : 'rgba(255, 255, 255, 0.02)';
        totalBoardingPutra += item.boarding_putra || 0;
        totalBoardingPutri += item.boarding_putri || 0;
        totalNonBoarding += item.non_boarding || 0;

        content += `
            <tr style="background: ${bgColor}; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">
                <td style="padding: 0.75rem; color: var(--text-primary);">${item.name}</td>
                <td style="padding: 0.75rem; text-align: center; color: var(--primary-300); font-weight: 500;">
                    ${item.boarding_putra ? formatRupiah(item.boarding_putra) : '—'}
                </td>
                <td style="padding: 0.75rem; text-align: center; color: var(--primary-300); font-weight: 500;">
                    ${item.boarding_putri ? formatRupiah(item.boarding_putri) : '—'}
                </td>
                <td style="padding: 0.75rem; text-align: center; color: var(--primary-300); font-weight: 500;">
                    ${item.non_boarding ? formatRupiah(item.non_boarding) : '—'}
                </td>
            </tr>
        `;
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

    // Note for Kitab Pondok
    if (itemType === 'kitabPondok') {
        content += `
            <div style="background: rgba(245, 158, 11, 0.15); border: 1px solid rgba(245, 158, 11, 0.3); border-radius: 12px; padding: 1rem; margin-top: 1rem; display: flex; align-items: flex-start; gap: 0.75rem;">
                <i class="fas fa-info-circle" style="color: var(--accent-600); margin-top: 2px;"></i>
                <p style="font-size: 0.875rem; color: var(--accent-700); margin: 0;"><strong>Catatan:</strong> Kitab Pondok hanya disediakan untuk santri program Boarding (Putra & Putri).</p>
            </div>
        `;
    }

    modalContent.innerHTML = content;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('itemModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});

// ========================================
// IMAGE MODAL FUNCTIONS
// ========================================
function openImageModal(itemType) {
    const modal = document.getElementById('imageModal');
    const modalTitle = document.getElementById('imageModalTitle');
    const modalContent = document.getElementById('imageModalContent');

    const data = window.DATA && window.DATA.uniformImages ? window.DATA.uniformImages[itemType] : null;
    if (!data) return;

    modalTitle.innerHTML = `<i class="fas fa-images"></i><span>${data.title}</span>`;

    // Updated Card Design - Cleaner & Lighter
    const imagesHtml = data.images.map(img => `
        <div style="
            background: var(--bg-card); 
            border: 1px solid var(--primary-200); 
            border-radius: 12px; 
            overflow: hidden;
            display: flex;
            flex-direction: column;
            transition: transform 0.2s ease;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        " class="uniform-card">
            <div style="
                aspect-ratio: 1; 
                background: white; 
                display: flex; 
                align-items: center; 
                justify-content: center; 
                padding: 1rem;
                border-bottom: 1px solid var(--primary-100);
            ">
                <img src="${img.url}" 
                        alt="${img.caption}" 
                        style="max-width: 100%; max-height: 100%; object-fit: contain; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1));"
                        loading="lazy"
                        onerror="this.src='https://via.placeholder.com/400x400/f1f5f9/334155?text=Gambar+Tidak+Tersedia'">
            </div>
            <div style="padding: 1rem;">
                <h4 style="font-size: 1rem; font-weight: 600; color: var(--primary-600); margin: 0 0 0.5rem 0;">${img.caption}</h4>
                <p style="font-size: 0.85rem; color: var(--text-secondary); margin: 0; line-height: 1.5;">${img.description}</p>
            </div>
        </div>
    `).join('');

    modalContent.innerHTML = `
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem;">
            ${imagesHtml}
        </div>
        <div style="background: var(--primary-50); border: 1px solid var(--primary-200); border-radius: 12px; padding: 1rem; margin-top: 2rem; display: flex; align-items: center; gap: 0.75rem;">
            <i class="fas fa-info-circle" style="color: var(--primary-500); font-size: 1.25rem;"></i>
            <p style="font-size: 0.9rem; color: var(--primary-800); margin: 0;"><strong>Catatan:</strong> Desain seragam dapat berubah sesuai kebijakan sekolah.</p>
        </div>
    `;

    closeModal(); // Close detail modal
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

// Close on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const imageModal = document.getElementById('imageModal');
        const itemModal = document.getElementById('itemModal');
        if (imageModal.classList.contains('active')) closeImageModal();
        else if (itemModal.classList.contains('active')) closeModal();
    }
});

// Misc Utility
function checkMotionPreference() {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
        // Disable JS animations if necessary, though CSS handles most of it
    }
}

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

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    }

    toggleBtn.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        setTheme(currentTheme === 'light' ? 'dark' : 'light');
    });
}

function initScrollToTop() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (!scrollToTopBtn) return;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}