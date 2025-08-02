// Enhanced Main JavaScript for Nirja Creative Corner
document.addEventListener('DOMContentLoaded', () => {
    console.log("Nirja Creative Corner - Enhanced script loaded.");
    
    // Initialize all features
    initializeAnimations();
    initializeProductFilters();
    initializeTestimonialSlider();
    initializeScrollEffects();
    initializePopups();
});

// Product filtering functionality
function initializeProductFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter products
            productCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeInUp 0.5s ease-out';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Enhanced animations
function initializeAnimations() {
    // Stagger animation for product cards
    const cards = document.querySelectorAll('.product-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Parallax effect for header
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const header = document.querySelector('header');
        if (header) {
            header.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
}

// Testimonial slider
function initializeTestimonialSlider() {
    const testimonials = document.querySelectorAll('.testimonial');
    let currentTestimonial = 0;
    
    if (testimonials.length > 0) {
        setInterval(() => {
            testimonials[currentTestimonial].classList.remove('active');
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            testimonials[currentTestimonial].classList.add('active');
        }, 5000);
    }
}

// Scroll effects
function initializeScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section, .product-card, .contact-item').forEach(el => {
        observer.observe(el);
    });
}

// Popup functionality
function initializePopups() {
    // Create popup for product details
    const popup = document.createElement('div');
    popup.className = 'product-popup';
    popup.innerHTML = `
        <div class="popup-content">
            <span class="close-popup">&times;</span>
            <div class="popup-body"></div>
        </div>
    `;
    document.body.appendChild(popup);
    
    // Close popup functionality
    popup.querySelector('.close-popup').addEventListener('click', () => {
        popup.classList.remove('active');
    });
    
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.classList.remove('active');
        }
    });
}

// Enhanced WhatsApp functions
function openWhatsAppWithDetails(productName, price) {
    const phoneNumber = '918898323336';
    const message = encodeURIComponent(
        `🌟 Hi Nirja Creative Corner!\n\n` +
        `I'm interested in: ${productName}\n` +
        `Price Range: ${price}\n\n` +
        `Could you please share:\n` +
        `• More photos\n` +
        `• Available sizes/variations\n` +
        `• Delivery timeline\n\n` +
        `Thank you! 🙏`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
}

// Bulk order inquiry
function openBulkOrderInquiry() {
    const phoneNumber = '918898323336';
    const message = encodeURIComponent(
        `🛍️ Hi Nirja Creative Corner!\n\n` +
        `I'm interested in placing a bulk order.\n\n` +
        `Please share details about:\n` +
        `• Bulk pricing\n` +
        `• Minimum order quantities\n` +
        `• Customization options\n` +
        `• Delivery timeline\n\n` +
        `Thank you! 🙏`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
}

// Custom order inquiry
function openCustomOrderInquiry() {
    const phoneNumber = '918898323336';
    const message = encodeURIComponent(
        `✨ Hi Nirja Creative Corner!\n\n` +
        `I would like to create a custom piece.\n\n` +
        `Please help me with:\n` +
        `• Design consultation\n` +
        `• Material options\n` +
        `• Pricing for custom work\n` +
        `• Timeline for completion\n\n` +
        `Thank you! 🙏`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
}

// Newsletter subscription (mock)
function subscribeNewsletter(email) {
    if (email && email.includes('@')) {
        // In a real implementation, this would send to a backend
        alert('Thank you for subscribing! You\'ll receive updates about our latest collections.');
        document.querySelector('#newsletter-email').value = '';
    } else {
        alert('Please enter a valid email address.');
    }
}

// Add to favorites (localStorage)
function toggleFavorite(productId) {
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const index = favorites.indexOf(productId);
    
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(productId);
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoriteButtons();
}

// Update favorite button states
function updateFavoriteButtons() {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    document.querySelectorAll('.favorite-btn').forEach(btn => {
        const productId = btn.dataset.productId;
        if (favorites.includes(productId)) {
            btn.classList.add('favorited');
            btn.innerHTML = '<i class="fas fa-heart"></i>';
        } else {
            btn.classList.remove('favorited');
            btn.innerHTML = '<i class="far fa-heart"></i>';
        }
    });
}

// Search functionality
function searchProducts(query) {
    const products = document.querySelectorAll('.product-card');
    const searchTerm = query.toLowerCase();
    
    products.forEach(product => {
        const title = product.querySelector('h3').textContent.toLowerCase();
        const description = product.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// Smooth reveal animations
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// Initialize on load
window.addEventListener('load', () => {
    updateFavoriteButtons();
    revealOnScroll();
});
 
