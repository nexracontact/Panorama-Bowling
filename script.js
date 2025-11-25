// Set current year in footer
document.addEventListener('DOMContentLoaded', function() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Navigation hamburger menu toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link (mobile)
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside (mobile)
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Form validation and submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
        
        // Add real-time validation
        const formInputs = contactForm.querySelectorAll('input[required], select[required]');
        formInputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(input);
            });
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 70; // Account for fixed navbar (70px height)
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Fade in animations on scroll
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

    // Observe sections for fade-in effect
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });

    // Lightbox functionality for gallery
    initLightbox();
});

// Lightbox functionality
function initLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const aboutImages = document.querySelectorAll('.about-image');
    const modal = document.getElementById('lightbox-modal');
    const modalImage = document.getElementById('lightbox-image');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.getElementById('lightbox-prev');
    const nextBtn = document.getElementById('lightbox-next');
    
    let currentImageIndex = 0;
    
    // Combine gallery and about images
    const allImages = [];
    
    // Add about images
    Array.from(aboutImages).forEach(item => {
        const img = item.querySelector('img');
        if (img && img.src) {
            allImages.push({
                src: img.src,
                alt: img.alt || 'Image'
            });
        }
    });
    
    // Add gallery images
    Array.from(galleryItems).forEach(item => {
        const img = item.querySelector('img');
        if (img && img.src) {
            allImages.push({
                src: img.src,
                alt: img.alt || 'Gallery image'
            });
        }
    });
    
    const images = allImages;

    // Open lightbox when clicking on gallery item
    galleryItems.forEach((item) => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            if (img && img.src) {
                // Find index in images array
                currentImageIndex = images.findIndex(imgData => imgData.src === img.src);
                if (currentImageIndex === -1) {
                    currentImageIndex = 0;
                }
                openLightbox(img.src);
            }
        });
    });

    // Open lightbox when clicking on about image
    aboutImages.forEach((item) => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            if (img && img.src) {
                // Find index in images array
                currentImageIndex = images.findIndex(imgData => imgData.src === img.src);
                if (currentImageIndex === -1) {
                    currentImageIndex = 0;
                }
                openLightbox(img.src);
            }
        });
    });

    function openLightbox(imageSrc) {
        modalImage.src = imageSrc;
        modalImage.alt = images[currentImageIndex].alt;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
        updateNavigationButtons();
    }

    function closeLightbox() {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }

    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        modalImage.src = images[currentImageIndex].src;
        modalImage.alt = images[currentImageIndex].alt;
        updateNavigationButtons();
    }

    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        modalImage.src = images[currentImageIndex].src;
        modalImage.alt = images[currentImageIndex].alt;
        updateNavigationButtons();
    }

    function updateNavigationButtons() {
        // Show/hide navigation buttons based on number of images
        if (images.length <= 1) {
            prevBtn.style.display = 'none';
            nextBtn.style.display = 'none';
        } else {
            prevBtn.style.display = 'block';
            nextBtn.style.display = 'block';
        }
    }

    // Close lightbox
    if (closeBtn) {
        closeBtn.addEventListener('click', closeLightbox);
    }

    // Close on background click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeLightbox();
        }
    });

    // Navigation buttons
    if (nextBtn) {
        nextBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            showNextImage();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            showPrevImage();
        });
    }

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (modal.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowRight') {
                showNextImage();
            } else if (e.key === 'ArrowLeft') {
                showPrevImage();
            }
        }
    });
}

// Form validation functions
function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    let isValid = true;
    
    // Validate all required fields
    const requiredFields = form.querySelectorAll('[required]');
    requiredFields.forEach(field => {
        if (!validateField(field)) {
            isValid = false;
        }
    });
    
    // Validate email format
    const emailField = form.querySelector('#email');
    if (emailField && emailField.value) {
        if (!validateEmail(emailField.value)) {
            showError(emailField, 'Vennligst oppgi en gyldig e-postadresse');
            isValid = false;
        }
    }
    
    // Validate phone format (Norwegian format)
    const phoneField = form.querySelector('#phone');
    if (phoneField && phoneField.value) {
        if (!validatePhone(phoneField.value)) {
            showError(phoneField, 'Vennligst oppgi et gyldig telefonnummer');
            isValid = false;
        }
    }
    
    // Validate date is in the future
    const dateField = form.querySelector('#datetime');
    if (dateField && dateField.value) {
        const selectedDate = new Date(dateField.value);
        const now = new Date();
        if (selectedDate <= now) {
            showError(dateField, 'Vennligst velg en fremtidig dato og tid');
            isValid = false;
        }
    }
    
    if (isValid) {
        // Show success message
        showSuccessMessage(form);
        
        // Reset form
        form.reset();
        
        // Clear all error messages
        const errorMessages = form.querySelectorAll('.error-message');
        errorMessages.forEach(msg => {
            msg.textContent = '';
        });
        
        // Scroll to success message
        const successMessage = form.querySelector('#form-success');
        if (successMessage) {
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    } else {
        // Scroll to first error
        const firstError = form.querySelector('.error-message:not(:empty)');
        if (firstError) {
            const field = firstError.previousElementSibling;
            if (field) {
                field.scrollIntoView({ behavior: 'smooth', block: 'center' });
                field.focus();
            }
        }
    }
}

function validateField(field) {
    const errorId = field.id + '-error';
    const errorElement = document.getElementById(errorId);
    
    // Clear previous error
    if (errorElement) {
        errorElement.textContent = '';
    }
    field.style.borderColor = '';
    
    // Check if field is required and empty
    if (field.hasAttribute('required') && !field.value.trim()) {
        showError(field, 'Dette feltet er påkrevd');
        return false;
    }
    
    // Special validation for email
    if (field.type === 'email' && field.value) {
        if (!validateEmail(field.value)) {
            showError(field, 'Vennligst oppgi en gyldig e-postadresse');
            return false;
        }
    }
    
    // Special validation for phone
    if (field.type === 'tel' && field.value) {
        if (!validatePhone(field.value)) {
            showError(field, 'Vennligst oppgi et gyldig telefonnummer');
            return false;
        }
    }
    
    // Special validation for number fields
    if (field.type === 'number' && field.value) {
        const num = parseInt(field.value);
        if (isNaN(num) || num < 1) {
            showError(field, 'Vennligst oppgi et gyldig antall (minst 1)');
            return false;
        }
    }
    
    return true;
}

function showError(field, message) {
    const errorId = field.id + '-error';
    const errorElement = document.getElementById(errorId);
    
    if (errorElement) {
        errorElement.textContent = message;
    }
    
    field.style.borderColor = '#d32f2f';
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    // Norwegian phone number format: accepts +47, spaces, hyphens
    const phoneRegex = /^(\+47)?[\s-]?[2-9]\d{7}$/;
    const cleanPhone = phone.replace(/\s/g, '').replace(/-/g, '');
    return phoneRegex.test(cleanPhone) || cleanPhone.length >= 8;
}

function showSuccessMessage(form) {
    const successMessage = form.querySelector('#form-success');
    if (successMessage) {
        successMessage.style.display = 'block';
        successMessage.style.animation = 'fadeInUp 0.5s ease-out';
        
        // Hide success message after 10 seconds (optional)
        setTimeout(() => {
            successMessage.style.opacity = '0';
            setTimeout(() => {
                successMessage.style.display = 'none';
                successMessage.style.opacity = '1';
            }, 500);
        }, 10000);
    }
}

// Add CSS animation for success message
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

