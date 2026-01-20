// Smooth scrolling for navigation links
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

// Cart functionality
let cartCount = 0;
const cartCountElement = document.querySelector('.cart-count');

// Add to cart simulation
document.querySelectorAll('.btn-secondary').forEach(button => {
    button.addEventListener('click', function(e) {
        if (this.textContent.includes('Buy')) {
            e.preventDefault();
            cartCount++;
            cartCountElement.textContent = cartCount;
            
            // Show feedback
            const originalText = this.textContent;
            this.textContent = 'Added to cart!';
            this.style.backgroundColor = '#27ae60';
            
            setTimeout(() => {
                this.textContent = originalText;
                this.style.backgroundColor = '';
            }, 2000);
        }
    });
});

// Animate elements on scroll
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

// Observe publication cards
document.querySelectorAll('.publication-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Observe partner logos
document.querySelectorAll('.partner-logo').forEach((logo, index) => {
    logo.style.opacity = '0';
    logo.style.transform = 'translateY(30px)';
    logo.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(logo);
});

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.padding = '10px 0';
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.15)';
    } else {
        header.style.padding = '15px 0';
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
    
    lastScroll = currentScroll;
});

// Form submission handler (for survey button)
document.querySelectorAll('.btn-primary').forEach(button => {
    if (button.textContent.includes('opinion')) {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Thank you for your interest! Survey form would open here.');
        });
    }
});

// Mobile menu toggle (if needed in future)
const createMobileMenu = () => {
    const nav = document.querySelector('.main-nav');
    const menuButton = document.createElement('button');
    menuButton.classList.add('mobile-menu-toggle');
    menuButton.innerHTML = '☰';
    menuButton.style.display = 'none';
    
    if (window.innerWidth <= 768) {
        menuButton.style.display = 'block';
        nav.style.display = 'none';
    }
    
    menuButton.addEventListener('click', () => {
        nav.style.display = nav.style.display === 'none' ? 'block' : 'none';
    });
    
    document.querySelector('.header-content').prepend(menuButton);
};

// Initialize on load
window.addEventListener('load', () => {
    // Add loading animation complete
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Handle window resize
window.addEventListener('resize', () => {
    // Reset animations on resize if needed
    if (window.innerWidth > 768) {
        document.querySelector('.main-nav').style.display = 'flex';
    }
});

console.log('Nations Emergentes website loaded successfully!');
