/* 
============================================
SCRIPT PRINCIPAL PENTRU SITE-UL NICU PARCHETARU
============================================
Acest fișier conține:
- Logica pentru încărcarea datelor din config.json
- Calculatorul de preț cu conversii între unități
- Validare input
- Navigare smooth scroll
- Meniu mobil responsive
*/

// Variabilă globală pentru stocarea datelor din config.json
let siteConfig = {};

/* 
===========================================
ÎNCĂRCARE CONFIG.JSON
===========================================
Citește datele de configurare din config.json
și populează site-ul cu aceste informații
*/
async function loadConfig() {
    try {
        const response = await fetch('config.json');
        if (!response.ok) {
            throw new Error('Nu s-a putut încărca config.json');
        }
        siteConfig = await response.json();
        populateSite();
    } catch (error) {
        console.error('Error loading config.json:', error);
        // Fallback message if config.json cannot be loaded
        // Note: This error occurs when opening index.html directly in browser (file://)
        // You need to run the site through an HTTP server (see README.md)
        alert('Warning: Could not load configuration data. Please make sure you are running the site through an HTTP server (not opening directly from file://). See README.md for instructions.');
    }
}

/* 
===========================================
POPULARE SITE CU DATE DIN CONFIG
===========================================
Actualizează toate elementele site-ului cu datele din config.json
*/
function populateSite() {
    if (!siteConfig || !siteConfig.site) return;
    
    // Actualizare meta tags
    document.title = siteConfig.site.title || document.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.content = siteConfig.site.description || metaDescription.content;
    }
    
    // Actualizare header
    const masterName = document.getElementById('master-name');
    if (masterName) masterName.textContent = siteConfig.master.name || 'Nicu Parchetaru';
    
    const masterLocation = document.getElementById('master-location');
    if (masterLocation) masterLocation.textContent = siteConfig.master.location || 'Vancouver, Canada';
    
    // Actualizare hero section
    const heroTitle = document.getElementById('hero-title');
    if (heroTitle && siteConfig.sections.hero) {
        heroTitle.textContent = siteConfig.sections.hero.title || heroTitle.textContent;
    }
    
    const heroSubtitle = document.getElementById('hero-subtitle');
    if (heroSubtitle && siteConfig.sections.hero) {
        heroSubtitle.textContent = siteConfig.sections.hero.subtitle || heroSubtitle.textContent;
    }
    
    const heroCta = document.getElementById('hero-cta');
    if (heroCta && siteConfig.sections.hero) {
        heroCta.textContent = siteConfig.sections.hero.cta || heroCta.textContent;
    }
    
    // Actualizare secțiune despre
    const aboutTitle = document.getElementById('about-title');
    if (aboutTitle && siteConfig.sections.about) {
        aboutTitle.textContent = siteConfig.sections.about.title || aboutTitle.textContent;
    }
    
    const aboutDescription = document.getElementById('about-description');
    if (aboutDescription && siteConfig.sections.about) {
        aboutDescription.textContent = siteConfig.sections.about.content || aboutDescription.textContent;
    }
    
    const experienceYears = document.getElementById('experience-years');
    if (experienceYears) {
        experienceYears.textContent = siteConfig.master.experience || '25+';
    }
    
    // Populare valori
    const valuesList = document.getElementById('values-list');
    if (valuesList && siteConfig.master.values) {
        valuesList.innerHTML = '';
        siteConfig.master.values.forEach(value => {
            const valueItem = document.createElement('div');
            valueItem.className = 'value-item';
            valueItem.textContent = value;
            valuesList.appendChild(valueItem);
        });
    }
    
    // Populare servicii
    const servicesGrid = document.getElementById('services-grid');
    if (servicesGrid && siteConfig.services) {
        servicesGrid.innerHTML = '';
        siteConfig.services.forEach(service => {
            const serviceCard = document.createElement('div');
            serviceCard.className = 'service-card';
            serviceCard.innerHTML = `
                <div class="service-icon">${service.icon || '🔨'}</div>
                <h3>${service.title}</h3>
                <p>${service.description}</p>
            `;
            servicesGrid.appendChild(serviceCard);
        });
    }
    
    // Actualizare galerie
    const galleryTitle = document.getElementById('gallery-title');
    if (galleryTitle && siteConfig.sections.gallery) {
        galleryTitle.textContent = siteConfig.sections.gallery.title || galleryTitle.textContent;
    }
    
    const gallerySubtitle = document.getElementById('gallery-subtitle');
    if (gallerySubtitle && siteConfig.sections.gallery) {
        gallerySubtitle.textContent = siteConfig.sections.gallery.subtitle || gallerySubtitle.textContent;
    }
    
    // Actualizare calculator
    const calculatorTitle = document.getElementById('calculator-title');
    if (calculatorTitle && siteConfig.sections.calculator) {
        calculatorTitle.textContent = siteConfig.sections.calculator.title || calculatorTitle.textContent;
    }
    
    const calculatorSubtitle = document.getElementById('calculator-subtitle');
    if (calculatorSubtitle && siteConfig.sections.calculator) {
        calculatorSubtitle.textContent = siteConfig.sections.calculator.subtitle || calculatorSubtitle.textContent;
    }
    
    // Actualizare contact
    const contactPhone = document.getElementById('contact-phone');
    if (contactPhone && siteConfig.contact) {
        const phone = siteConfig.contact.phone || '';
        contactPhone.textContent = phone;
        contactPhone.href = `tel:${phone.replace(/\s/g, '')}`;
    }
    
    const contactEmail = document.getElementById('contact-email');
    if (contactEmail && siteConfig.contact) {
        const email = siteConfig.contact.email || '';
        contactEmail.textContent = email;
        contactEmail.href = `mailto:${email}`;
    }
    
    const contactAddress = document.getElementById('contact-address');
    if (contactAddress && siteConfig.contact) {
        contactAddress.textContent = siteConfig.contact.address || '';
    }
    
    const contactHours = document.getElementById('contact-hours');
    if (contactHours && siteConfig.contact) {
        contactHours.textContent = siteConfig.contact.hours || '';
    }
    
    // Populare linkuri sociale
    const socialLinks = document.getElementById('social-links');
    if (socialLinks && siteConfig.social) {
        socialLinks.innerHTML = '';
        if (siteConfig.social.facebook) {
            const fbLink = document.createElement('a');
            fbLink.href = siteConfig.social.facebook;
            fbLink.className = 'social-link';
            fbLink.textContent = 'Facebook';
            fbLink.target = '_blank';
            fbLink.rel = 'noopener noreferrer';
            socialLinks.appendChild(fbLink);
        }
        if (siteConfig.social.instagram) {
            const igLink = document.createElement('a');
            igLink.href = siteConfig.social.instagram;
            igLink.className = 'social-link';
            igLink.textContent = 'Instagram';
            igLink.target = '_blank';
            igLink.rel = 'noopener noreferrer';
            socialLinks.appendChild(igLink);
        }
    }
    
    // Actualizare footer
    const footerMasterName = document.getElementById('footer-master-name');
    if (footerMasterName) {
        footerMasterName.textContent = siteConfig.master.name || 'Nicu Parchetaru';
    }
    
    const footerMasterDescription = document.getElementById('footer-master-description');
    if (footerMasterDescription) {
        footerMasterDescription.textContent = siteConfig.master.description || '';
    }
    
    const footerPhone = document.getElementById('footer-phone');
    if (footerPhone && siteConfig.contact) {
        footerPhone.textContent = siteConfig.contact.phone || '';
    }
    
    const footerEmail = document.getElementById('footer-email');
    if (footerEmail && siteConfig.contact) {
        footerEmail.textContent = siteConfig.contact.email || '';
    }
    
    const footerAddress = document.getElementById('footer-address');
    if (footerAddress && siteConfig.contact) {
        footerAddress.textContent = siteConfig.contact.address || '';
    }
    
    // Actualizare an curent
    const currentYear = document.getElementById('current-year');
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }
}

/* 
===========================================
CALCULATOR PREȚ
===========================================
Logica pentru calculatorul de preț cu conversii între unități
*/

// Funcție pentru conversia între unități
function convertArea(value, fromUnit, toUnit) {
    // Conversie la metri pătrați ca unitate intermediară
    let sqm = 0;
    
    if (fromUnit === 'sqm') {
        sqm = value;
    } else if (fromUnit === 'sqft') {
        sqm = value * 0.092903; // 1 sq ft = 0.092903 m²
    } else if (fromUnit === 'inches') {
        sqm = value * 0.00064516; // 1 sq in = 0.00064516 m²
    }
    
    // Conversie de la metri pătrați la unitatea dorită
    if (toUnit === 'sqm') {
        return sqm;
    } else if (toUnit === 'sqft') {
        return sqm / 0.092903;
    } else if (toUnit === 'inches') {
        return sqm / 0.00064516;
    }
    
    return sqm;
}

// Funcție pentru calcularea suprafaței
function calculateArea(length, width, unit) {
    const area = length * width;
    return {
        value: area,
        unit: unit === 'sqm' ? 'm²' : unit === 'sqft' ? 'sq ft' : 'sq in',
        unitCode: unit
    };
}

// Funcție pentru calcularea costului total
function calculatePrice(area, pricePerUnit, serviceType) {
    // Dacă nu există preț custom, folosește prețul din config
    if (!pricePerUnit || pricePerUnit <= 0) {
        if (serviceType === 'installation' && siteConfig.pricing && siteConfig.pricing.installation) {
            // Determină unitatea și prețul corespunzător
            const unit = document.getElementById('unit').value;
            if (unit === 'sqm') {
                pricePerUnit = siteConfig.pricing.installation.per_sqm;
            } else if (unit === 'sqft') {
                pricePerUnit = siteConfig.pricing.installation.per_sqft;
            } else {
                // Pentru inches, convertim din sqft
                pricePerUnit = siteConfig.pricing.installation.per_sqft / 144; // 1 sq ft = 144 sq in
            }
        } else if (serviceType === 'refinishing' && siteConfig.pricing && siteConfig.pricing.refinishing) {
            const unit = document.getElementById('unit').value;
            if (unit === 'sqm') {
                pricePerUnit = siteConfig.pricing.refinishing.per_sqm;
            } else if (unit === 'sqft') {
                pricePerUnit = siteConfig.pricing.refinishing.per_sqft;
            } else {
                pricePerUnit = siteConfig.pricing.refinishing.per_sqft / 144;
            }
        } else {
            pricePerUnit = 0;
        }
    }
    
    const totalCost = area * pricePerUnit;
    
    // Obține nota din config
    let note = '';
    if (serviceType === 'installation' && siteConfig.pricing && siteConfig.pricing.installation) {
        note = siteConfig.pricing.installation.note || '';
    } else if (serviceType === 'refinishing' && siteConfig.pricing && siteConfig.pricing.refinishing) {
        note = siteConfig.pricing.refinishing.note || '';
    }
    
    return {
        total: totalCost,
        pricePerUnit: pricePerUnit,
        note: note
    };
}

// Funcție pentru formatarea numerelor
function formatNumber(num, decimals = 2) {
    return num.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Funcție pentru formatarea monedei
function formatCurrency(amount) {
    const currency = siteConfig.pricing && siteConfig.pricing.installation 
        ? siteConfig.pricing.installation.currency || 'CAD' 
        : 'CAD';
    return `${formatNumber(amount)} ${currency}`;
}

// Event listener pentru formularul calculatorului
function setupCalculator() {
    const calculatorForm = document.getElementById('calculator-form');
    if (!calculatorForm) return;
    
    calculatorForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obține valorile din formular
        const length = parseFloat(document.getElementById('length').value);
        const width = parseFloat(document.getElementById('width').value);
        const unit = document.getElementById('unit').value;
        const serviceType = document.getElementById('service-type').value;
        const customPrice = parseFloat(document.getElementById('custom-price').value) || 0;
        
        // Input validation
        if (isNaN(length) || length <= 0) {
            alert('Please enter a valid length.');
            return;
        }
        
        if (isNaN(width) || width <= 0) {
            alert('Please enter a valid width.');
            return;
        }
        
        // Calculează suprafața
        const areaResult = calculateArea(length, width, unit);
        
        // Calculează prețul
        const priceResult = calculatePrice(areaResult.value, customPrice, serviceType);
        
        // Afișează rezultatele
        displayResults(areaResult, priceResult, unit);
    });
}

// Funcție pentru afișarea rezultatelor
function displayResults(areaResult, priceResult, unit) {
    const resultDiv = document.getElementById('calculator-result');
    const resultArea = document.getElementById('result-area');
    const resultPricePerUnit = document.getElementById('result-price-per-unit');
    const resultTotal = document.getElementById('result-total');
    const resultNote = document.getElementById('result-note');
    
    if (!resultDiv) return;
    
    // Formatarea unității pentru afișare
    const unitDisplay = unit === 'sqm' ? 'm²' : unit === 'sqft' ? 'sq ft' : 'sq in';
    const priceUnitDisplay = unit === 'sqm' ? 'm²' : unit === 'sqft' ? 'sq ft' : 'sq in';
    
    // Actualizare rezultate
    if (resultArea) {
        resultArea.textContent = `${formatNumber(areaResult.value, 2)} ${unitDisplay}`;
    }
    
    if (resultPricePerUnit) {
        const currency = siteConfig.pricing && siteConfig.pricing.installation 
            ? siteConfig.pricing.installation.currency || 'CAD' 
            : 'CAD';
        resultPricePerUnit.textContent = `${formatNumber(priceResult.pricePerUnit, 2)} ${currency}/${priceUnitDisplay}`;
    }
    
    if (resultTotal) {
        resultTotal.textContent = formatCurrency(priceResult.total);
    }
    
    if (resultNote) {
        resultNote.textContent = priceResult.note || '';
    }
    
    // Afișează secțiunea de rezultate
    resultDiv.style.display = 'block';
    
    // Scroll la rezultate
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

/* 
===========================================
MENIU MOBIL
===========================================
Toggle pentru meniul mobil
*/
function setupMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const nav = document.getElementById('main-nav');
    
    if (!mobileMenuToggle || !nav) return;
    
    mobileMenuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
    
    // Închide meniul când se face click pe un link
    const navLinks = nav.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        });
    });
}

/* 
===========================================
CONTACT FORM REMOVED
===========================================
Contact form has been removed as requested.
Only contact information is displayed.
*/

/* 
===========================================
SMOOTH SCROLL PENTRU LINKURI ANCHOR
===========================================
Asigură scroll smooth pentru linkurile interne
*/
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '#header') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* 
===========================================
INITIALIZARE
===========================================
Inițializează toate funcționalitățile când se încarcă pagina
*/
document.addEventListener('DOMContentLoaded', function() {
    // Încarcă configurația
    loadConfig();
    
    // Setup calculator
    setupCalculator();
    
    // Setup mobile menu
    setupMobileMenu();
    
    // Setup smooth scroll
    setupSmoothScroll();
    
    // Adaugă efect de fade-in pentru elemente la scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observă elementele pentru animații
    document.querySelectorAll('.service-card, .gallery-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
