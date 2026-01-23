/**
 * Koperasi Senyummu - Premium Website Script
 * Features: Navbar scroll, Mobile menu, FAQ accordion, Modals, Animations
 * Mobile Optimized: efficient DOM updates, passive listeners, reduced layout thrashing
 */

// ========================================
// INITIALIZATION
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Render Content First
    renderPricingTable();
    renderInstallments();
    renderComparisons();
    renderFAQ();

    // Initialize UI Interactions
    initNavbar();
    initMobileMenu();
    initScrollAnimations();
    initSmoothScroll();
    initScrollToTop();
    initFAQSearch();
    initThemeToggle();

    // Check for reduced motion preference
    checkMotionPreference();
});

// ========================================
// DYNAMIC RENDERING FUNCTIONS
// ========================================

/**
 * Render Main Pricing Table
 * Uses batched HTML string construction for performance
 */
function renderPricingTable() {
    const tbody = document.getElementById('pricingTableBody');
    if (!tbody) return;

    let html = '';
    let totalBoardingPutra = 0;
    let totalBoardingPutri = 0;
    let totalNonBoarding = 0;

    DATA.items.forEach((item, index) => {
        // Calculate totals
        totalBoardingPutra += item.prices.boardingPutra || 0;
        totalBoardingPutri += item.prices.boardingPutri || 0;
        totalNonBoarding += item.prices.nonBoarding || 0;

        html += `
            <tr>
                <td>${index + 1}</td>
                <td>
                    <div class="item-name">
                        <div class="item-icon" style="color: ${item.iconColor}">
                            <i class="fas ${item.icon}"></i>
                        </div>
                        <span>${item.name}</span>
                        ${item.hasModal ? `
                        <button onclick="openModal('${item.modalKey}')" class="item-info-btn" title="Lihat detail" aria-label="Lihat detail ${item.name}">
                            <i class="fas fa-info-circle"></i>
                        </button>` : ''}
                    </div>
                </td>
                <td class="price">${formatRupiah(item.prices.boardingPutra)}</td>
                <td class="price">${formatRupiah(item.prices.boardingPutri)}</td>
                <td class="price" ${!item.prices.nonBoarding ? 'style="color: var(--text-muted)"' : ''}>
                    ${item.prices.nonBoarding ? formatRupiah(item.prices.nonBoarding) : '—'}
                </td>
            </tr>
        `;
    });

    // Total Row
    html += `
        <tr class="total-row">
            <td colspan="2">
                <div class="item-name" style="justify-content: center;">
                    <i class="fas fa-wallet" style="color: var(--primary-400)"></i>
                    <strong>TOTAL BIAYA</strong>
                </div>
            </td>
            <td class="price">${formatRupiah(totalBoardingPutra)}</td>
            <td class="price">${formatRupiah(totalBoardingPutri)}</td>
            <td class="price">${formatRupiah(totalNonBoarding)}</td>
        </tr>
    `;

    tbody.innerHTML = html;

    // Store calculated totals globally for other functions to use
    window.calculatedTotals = {
        boardingPutra: totalBoardingPutra,
        boardingPutri: totalBoardingPutri,
        nonBoarding: totalNonBoarding
    };
}

/**
 * Render Installment Cards
 * Calculates monthly payments dynamically
 */
function renderInstallments() {
    const grid = document.getElementById('installmentGrid');
    if (!grid || !window.calculatedTotals) return;

    const { boardingPutra, boardingPutri, nonBoarding } = window.calculatedTotals;
    const months = DATA.installments.length;

    // Calculate monthly installment (rounding up is usually safer, but standard division here)
    const monthlyPutra = Math.ceil(boardingPutra / months);
    const monthlyPutri = Math.ceil(boardingPutri / months);
    const monthlyNonBoarding = Math.ceil(nonBoarding / months);

    let html = '';

    DATA.installments.forEach((inst, index) => {
        html += `
            <div class="installment-card fade-up stagger-${index + 1}">
                <div class="installment-header">
                    <div style="display: flex; align-items: center; gap: 1rem;">
                        <div class="installment-number ${inst.colorClass}">${inst.month}</div>
                        <div class="installment-info">
                            <h3>${inst.name}</h3>
                            <p>${DATA.config.installmentPeriod}</p>
                        </div>
                    </div>
                    <i class="fas ${inst.icon} installment-icon"></i>
                </div>
                <div class="installment-body">
                    <div class="installment-item">
                        <span class="installment-item-label">
                            <i class="fas fa-mars" style="color: #3b82f6"></i>
                            Boarding Putra
                        </span>
                        <span class="installment-item-value">${formatRupiah(monthlyPutra)}</span>
                    </div>
                    <div class="installment-item">
                        <span class="installment-item-label">
                            <i class="fas fa-venus" style="color: #ec4899"></i>
                            Boarding Putri
                        </span>
                        <span class="installment-item-value">${formatRupiah(monthlyPutri)}</span>
                    </div>
                    <div class="installment-item">
                        <span class="installment-item-label">
                            <i class="fas fa-school" style="color: #06b6d4"></i>
                            Non-Boarding
                        </span>
                        <span class="installment-item-value">${formatRupiah(monthlyNonBoarding)}</span>
                    </div>
                </div>
            </div>
        `;
    });

    grid.innerHTML = html;
}

/**
 * Render Comparison Cards
 */
function renderComparisons() {
    const grid = document.getElementById('comparisonGrid');
    if (!grid || !window.calculatedTotals) return;

    const { boardingPutra, boardingPutri, nonBoarding } = window.calculatedTotals;
    const months = DATA.installments.length;

    // Helper to generate feature list based on data
    // Ideally this could be more dynamic, but for now we map manually for layout control
    const features = [
        { name: 'Seragam lengkap', pricePutra: 960000, pricePutri: 1115000, priceNon: 960000 },
        { name: 'Buku Umum', price: 120000 },
        { name: 'Buku Ismubaris', price: 120000, priceNon: 247000 },
        { name: 'Kitab Pondok', price: 270000, priceNon: null }
    ];

    const cards = [
        {
            title: "Boarding Putra",
            total: boardingPutra,
            monthly: Math.ceil(boardingPutra / months),
            icon: "fa-mars",
            colorClass: "blue",
            items: features.map(f => ({
                text: `${f.name} (${formatRupiah(f.pricePutra || f.price)})`,
                active: true
            }))
        },
        {
            title: "Boarding Putri",
            total: boardingPutri,
            monthly: Math.ceil(boardingPutri / months),
            icon: "fa-venus",
            colorClass: "pink",
            items: features.map(f => ({
                text: `${f.name} (${formatRupiah(f.pricePutri || f.price)})`,
                active: true
            }))
        },
        {
            title: "Non-Boarding",
            total: nonBoarding,
            monthly: Math.ceil(nonBoarding / months),
            icon: "fa-school",
            colorClass: "cyan",
            items: features.map(f => {
                const price = f.priceNon !== undefined ? f.priceNon : f.price;
                if (price === null) {
                    return { text: `${f.name} (Tidak termasuk)`, active: false };
                }
                return { text: `${f.name} (${formatRupiah(price)})`, active: true };
            })
        }
    ];

    let html = '';
    cards.forEach((card, index) => {
        html += `
            <div class="comparison-card fade-up stagger-${index + 1}">
                <div class="comparison-header">
                    <div class="comparison-icon ${card.colorClass}">
                        <i class="fas ${card.icon}"></i>
                    </div>
                    <h3 class="comparison-name">${card.title}</h3>
                    <p class="comparison-price">${formatRupiah(card.total)}</p>
                    <p class="comparison-period">Total Biaya</p>
                </div>
                <div class="comparison-body">
                    <ul class="comparison-features">
                        ${card.items.map(item => `
                            <li class="${!item.active ? 'disabled' : ''}">
                                <i class="fas ${item.active ? 'fa-check-circle' : 'fa-times-circle'}"></i>
                                <span>${item.text}</span>
                            </li>
                        `).join('')}
                    </ul>
                    <div class="comparison-installment">
                        <p class="comparison-installment-label">Cicilan per bulan:</p>
                        <p class="comparison-installment-value">${formatRupiah(card.monthly)}</p>
                    </div>
                </div>
            </div>
        `;
    });

    grid.innerHTML = html;
}

/**
 * Render FAQ List
 */
function renderFAQ() {
    const container = document.getElementById('faqList');
    if (!container) return;

    let html = '';
    DATA.faqs.forEach((faq, index) => {
        html += `
            <div class="faq-item fade-up stagger-${(index % 4) + 1}" data-content="${faq.question.toLowerCase()} ${faq.answer.toLowerCase()}">
                <button class="faq-button" onclick="toggleFAQ(this)" aria-expanded="false">
                    <span class="faq-question">
                        <i class="fas ${faq.icon}"></i>
                        <span class="faq-text-highlight">${faq.question}</span>
                    </span>
                    <i class="fas fa-chevron-down faq-icon"></i>
                </button>
                <div class="faq-content">
                    <p class="faq-answer">${faq.answer}</p>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

// ========================================
// UI INTERACTION FUNCTIONS
// ========================================

// Navbar Scroll Effect
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

// Scroll To Top
function initScrollToTop() {
    const btn = document.getElementById('scrollToTopBtn');
    if (!btn) return;

    // Show/Hide logic
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    }, { passive: true });

    // Click logic
    btn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// FAQ Search
function initFAQSearch() {
    const input = document.getElementById('faqSearch');
    if (!input) return;

    input.addEventListener('input', debounce((e) => {
        const term = e.target.value.toLowerCase();
        const items = document.querySelectorAll('.faq-item');

        items.forEach(item => {
            const content = item.getAttribute('data-content');
            if (content.includes(term)) {
                item.style.display = 'block';
                // Reset animation
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            } else {
                item.style.display = 'none';
            }
        });
    }, 300));
}

// Mobile Menu
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

// Scroll Animations (Intersection Observer)
function initScrollAnimations() {
    // Only use IntersectionObserver if supported (it is in all modern browsers)
    if (!('IntersectionObserver' in window)) return;

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

// Smooth Scroll for Anchors
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

// FAQ Accordion
function toggleFAQ(button) {
    const faqItem = button.closest('.faq-item');
    const isExpanded = button.getAttribute('aria-expanded') === 'true';

    // Close all others
    document.querySelectorAll('.faq-item.active').forEach(item => {
        if (item !== faqItem) {
            item.classList.remove('active');
            item.querySelector('.faq-button').setAttribute('aria-expanded', 'false');
        }
    });

    // Toggle current
    faqItem.classList.toggle('active');
    button.setAttribute('aria-expanded', !isExpanded);
}

// Theme Toggle
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

// ========================================
// MODAL FUNCTIONS
// ========================================
function openModal(itemType) {
    const modal = document.getElementById('itemModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');

    const data = DATA.itemDetails[itemType];
    if (!data) return;

    modalTitle.innerHTML = `<i class="fas ${data.icon}"></i><span>${data.title}</span>`;

    let content = '';

    // Seragam Design Link
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

    // Modal Table Construction
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
            <div style="background: rgba(245, 158, 11, 0.1); border: 1px solid rgba(245, 158, 11, 0.2); border-radius: 12px; padding: 1rem; margin-top: 1rem; display: flex; align-items: flex-start; gap: 0.75rem;">
                <i class="fas fa-info-circle" style="color: var(--accent-400); margin-top: 2px;"></i>
                <p style="font-size: 0.875rem; color: var(--accent-300); margin: 0;"><strong>Catatan:</strong> Kitab Pondok hanya disediakan untuk santri program Boarding (Putra & Putri).</p>
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

// ========================================
// IMAGE MODAL FUNCTIONS
// ========================================
function openImageModal(itemType) {
    const modal = document.getElementById('imageModal');
    const modalTitle = document.getElementById('imageModalTitle');
    const modalContent = document.getElementById('imageModalContent');

    const data = DATA.uniformImages[itemType];
    if (!data) return;

    modalTitle.innerHTML = `<i class="fas fa-images"></i><span>${data.title}</span>`;

    // Using map to build string is cleaner
    const imagesHtml = data.images.map(img => `
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
    `).join('');

    modalContent.innerHTML = `
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
            ${imagesHtml}
        </div>
        <div style="background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.2); border-radius: 12px; padding: 1rem; margin-top: 1rem; display: flex; align-items: flex-start; gap: 0.75rem;">
            <i class="fas fa-info-circle" style="color: #60a5fa; margin-top: 2px;"></i>
            <p style="font-size: 0.875rem; color: #93c5fd; margin: 0;"><strong>Catatan:</strong> Desain seragam dapat berubah sesuai kebijakan sekolah.</p>
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

// ========================================
// UTILITIES
// ========================================

function formatRupiah(number) {
    return 'Rp ' + number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

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

// Close modals listeners
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const imageModal = document.getElementById('imageModal');
        const itemModal = document.getElementById('itemModal');
        if (imageModal.classList.contains('active')) closeImageModal();
        else if (itemModal.classList.contains('active')) closeModal();
    }
});

document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});

function checkMotionPreference() {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
        // Disable JS animations if necessary, though CSS handles most of it
    }
}