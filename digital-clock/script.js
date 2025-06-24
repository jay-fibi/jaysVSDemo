let previousTime = '';
let colorIndex = 0;

// Vibrant color palette
const vibrantColors = [
    'linear-gradient(45deg, #ff006e, #fb5607)',     // Hot Pink to Orange
    'linear-gradient(45deg, #8338ec, #3a86ff)',     // Purple to Blue
    'linear-gradient(45deg, #06ffa5, #00d4aa)',     // Mint to Teal
    'linear-gradient(45deg, #ffbe0b, #fb8500)',     // Yellow to Orange
    'linear-gradient(45deg, #ff4081, #e91e63)',     // Pink to Deep Pink
    'linear-gradient(45deg, #00bcd4, #009688)',     // Cyan to Teal
    'linear-gradient(45deg, #9c27b0, #673ab7)',     // Purple to Deep Purple
    'linear-gradient(45deg, #ff5722, #f44336)',     // Deep Orange to Red
    'linear-gradient(45deg, #4caf50, #8bc34a)',     // Green to Light Green
    'linear-gradient(45deg, #2196f3, #03a9f4)',     // Blue to Light Blue
    'linear-gradient(45deg, #ff9800, #ffc107)',     // Orange to Amber
    'linear-gradient(45deg, #e91e63, #9c27b0)',     // Pink to Purple
];

function updateClock() {
    const now = new Date();
    
    // Format time
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    // Format date
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                   'July', 'August', 'September', 'October', 'November', 'December'];
    
    const dayName = days[now.getDay()];
    const monthName = months[now.getMonth()];
    const day = now.getDate();
    const year = now.getFullYear();
    
    const dateString = `${dayName}, ${monthName} ${day}, ${year}`;
    
    // Update DOM elements with animations
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');
    
    // Add flip animation when time changes
    if (timeString !== previousTime) {
        animateTimeChange(timeElement, timeString);
        previousTime = timeString;
    }
    
    // Change color every second with vibrant colors
    updateVibrantColors(timeElement);
    
    // Update date color with a complementary vibrant color
    updateDateColor(dateElement);
    
    dateElement.textContent = dateString;
}

function animateTimeChange(element, newTime) {
    // Very subtle fade animation instead of flip
    element.style.opacity = '0.7';
    element.style.transition = 'opacity 0.2s ease';
    
    setTimeout(() => {
        element.textContent = newTime;
        element.style.opacity = '1';
    }, 100);
}

function updateVibrantColors(element) {
    // Change color every 5 seconds instead of every second
    const seconds = new Date().getSeconds();
    if (seconds % 5 === 0) {
        const currentColor = vibrantColors[colorIndex];
        
        element.style.background = currentColor;
        element.style.webkitBackgroundClip = 'text';
        element.style.webkitTextFillColor = 'transparent';
        element.style.backgroundClip = 'text';
        element.style.backgroundSize = '100% 100%';
        element.style.transition = 'all 1s ease';
        
        // Very subtle glow effect
        const glowColor = getGlowColorFromGradient(currentColor);
        element.style.textShadow = `0 0 8px ${glowColor}`;
        
        // Move to next color only every 5 seconds
        colorIndex = (colorIndex + 1) % vibrantColors.length;
    }
}

function updateDateColor(element) {
    // Simple static color for date - less distracting
    element.style.color = 'rgba(255, 255, 255, 0.8)';
    element.style.textShadow = '0 0 5px rgba(255, 255, 255, 0.3)';
}

function getGlowColorFromGradient(gradient) {
    // Extract first color from gradient for glow effect
    const colorMatch = gradient.match(/#[a-fA-F0-9]{6}/);
    return colorMatch ? colorMatch[0] + '80' : '#ffffff80'; // Add alpha
}

function addDigitSlideAnimation() {
    const timeElement = document.getElementById('time');
    
    // Create individual digit spans for more control
    const digits = timeElement.textContent.split('');
    timeElement.innerHTML = digits.map((digit, index) => 
        `<span class="digit" style="animation-delay: ${index * 0.1}s">${digit}</span>`
    ).join('');
}

function addRandomGlitchEffect() {
    const timeElement = document.getElementById('time');
    
    // Random glitch effect (rarely)
    if (Math.random() < 0.05) { // 5% chance
        const originalText = timeElement.textContent;
        const glitchChars = '!@#$%^&*()123456789';
        
        // Create glitch text
        let glitchText = '';
        for (let i = 0; i < originalText.length; i++) {
            if (originalText[i] === ':') {
                glitchText += ':';
            } else {
                glitchText += Math.random() < 0.3 ? 
                    glitchChars[Math.floor(Math.random() * glitchChars.length)] : 
                    originalText[i];
            }
        }
        
        timeElement.textContent = glitchText;
        timeElement.style.color = '#ff0000';
        
        setTimeout(() => {
            timeElement.textContent = originalText;
            timeElement.style.color = '';
        }, 100);
    }
}

// Update clock immediately and then every second
updateClock();
setInterval(() => {
    updateClock();
    // Removed glitch effect - was too distracting
}, 1000);

// Authentication functionality
function initAuth() {
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');
    const loginClose = document.getElementById('loginClose');
    const signupClose = document.getElementById('signupClose');
    const switchToSignup = document.getElementById('switchToSignup');
    const switchToLogin = document.getElementById('switchToLogin');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    // Open modals
    loginBtn.addEventListener('click', () => {
        loginModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    signupBtn.addEventListener('click', () => {
        signupModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    // Close modals
    function closeModal(modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    loginClose.addEventListener('click', () => closeModal(loginModal));
    signupClose.addEventListener('click', () => closeModal(signupModal));

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === loginModal) closeModal(loginModal);
        if (e.target === signupModal) closeModal(signupModal);
    });

    // Switch between forms
    switchToSignup.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal(loginModal);
        signupModal.style.display = 'block';
    });

    switchToLogin.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal(signupModal);
        loginModal.style.display = 'block';
    });

    // Handle form submissions
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('loginUsername').value;
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        const rememberMe = document.getElementById('rememberMe').checked;
        
        // Enhanced validation
        if (!username || !email || !password) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        if (username.length < 3) {
            showNotification('Username must be at least 3 characters', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        if (password.length < 6) {
            showNotification('Password must be at least 6 characters', 'error');
            return;
        }
        
        // Store remember me preference
        if (rememberMe) {
            localStorage.setItem('rememberLogin', 'true');
            localStorage.setItem('savedUsername', username);
        }
        
        showNotification('Login successful!', 'success');
        closeModal(loginModal);
        loginForm.reset();
    });

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        // Validation
        if (!name || !email || !password || !confirmPassword) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        if (password !== confirmPassword) {
            showNotification('Passwords do not match', 'error');
            return;
        }
        
        if (password.length < 6) {
            showNotification('Password must be at least 6 characters', 'error');
            return;
        }
        
        showNotification('Account created successfully!', 'success');
        closeModal(signupModal);
        signupForm.reset();
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (loginModal.style.display === 'block') closeModal(loginModal);
            if (signupModal.style.display === 'block') closeModal(signupModal);
        }
    });
    
    // Load saved username if "Remember me" was checked
    loadSavedCredentials();
    
    // Add forgot password functionality
    initForgotPassword();
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Load saved credentials
function loadSavedCredentials() {
    const rememberLogin = localStorage.getItem('rememberLogin');
    const savedUsername = localStorage.getItem('savedUsername');
    
    if (rememberLogin === 'true' && savedUsername) {
        const usernameField = document.getElementById('loginUsername');
        const rememberCheckbox = document.getElementById('rememberMe');
        
        if (usernameField && rememberCheckbox) {
            usernameField.value = savedUsername;
            rememberCheckbox.checked = true;
        }
    }
}

// Forgot password functionality
function initForgotPassword() {
    const forgotPasswordLink = document.querySelector('.forgot-password');
    
    forgotPasswordLink.addEventListener('click', (e) => {
        e.preventDefault();
        
        const email = prompt('Please enter your email address to reset your password:');
        
        if (email && isValidEmail(email)) {
            showNotification('Password reset link sent to your email!', 'info');
        } else if (email) {
            showNotification('Please enter a valid email address', 'error');
        }
    });
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Define color schemes for different notification types
    let backgroundColor, borderColor, shadowColor;
    
    switch(type) {
        case 'success':
            backgroundColor = 'linear-gradient(45deg, rgba(76, 175, 80, 0.9), rgba(104, 159, 56, 0.9))';
            borderColor = 'rgba(76, 175, 80, 0.6)';
            shadowColor = 'rgba(76, 175, 80, 0.3)';
            break;
        case 'error':
            backgroundColor = 'linear-gradient(45deg, rgba(244, 67, 54, 0.9), rgba(229, 57, 53, 0.9))';
            borderColor = 'rgba(244, 67, 54, 0.6)';
            shadowColor = 'rgba(244, 67, 54, 0.3)';
            break;
        case 'warning':
            backgroundColor = 'linear-gradient(45deg, rgba(255, 152, 0, 0.9), rgba(245, 124, 0, 0.9))';
            borderColor = 'rgba(255, 152, 0, 0.6)';
            shadowColor = 'rgba(255, 152, 0, 0.3)';
            break;
        case 'info':
            backgroundColor = 'linear-gradient(45deg, rgba(33, 150, 243, 0.9), rgba(30, 136, 229, 0.9))';
            borderColor = 'rgba(33, 150, 243, 0.6)';
            shadowColor = 'rgba(33, 150, 243, 0.3)';
            break;
        default:
            backgroundColor = 'linear-gradient(45deg, rgba(96, 125, 139, 0.9), rgba(84, 110, 122, 0.9))';
            borderColor = 'rgba(96, 125, 139, 0.6)';
            shadowColor = 'rgba(96, 125, 139, 0.3)';
    }
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background: ${backgroundColor};
        color: white;
        border-radius: 12px;
        z-index: 3000;
        backdrop-filter: blur(15px);
        border: 2px solid ${borderColor};
        box-shadow: 0 8px 25px ${shadowColor}, 0 4px 15px rgba(0, 0, 0, 0.2);
        animation: slideInNotification 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        font-weight: 500;
        min-width: 200px;
        text-align: center;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutNotification 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Add notification animations to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInNotification {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutNotification {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add some interactive effects
document.addEventListener('DOMContentLoaded', function() {
    const clockWrapper = document.querySelector('.clock-wrapper');
    
    // Add click effect
    clockWrapper.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
    
    // Add smooth transition
    clockWrapper.style.transition = 'transform 0.15s ease';
    
    // Initialize authentication
    initAuth();
    
    // Initialize navigation
    initNavigation();
    
    // Initialize footer
    initFooter();
});

// Navigation functionality
function initNavigation() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar')) {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// Footer functionality
function initFooter() {
    const newsletterForm = document.getElementById('newsletterForm');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = e.target.querySelector('.newsletter-input');
            const email = emailInput.value;
            
            if (email && isValidEmail(email)) {
                showNotification('Thank you for subscribing! You will receive updates soon.', 'success');
                emailInput.value = '';
            } else {
                showNotification('Please enter a valid email address', 'error');
            }
        });
    }
    
    // Add hover animations to social links
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateY(-3px) scale(1.1) rotate(5deg)';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateY(0) scale(1) rotate(0deg)';
        });
    });
    
    // Add scroll animation for footer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideUp 0.8s ease-out forwards';
            }
        });
    }, observerOptions);
    
    const footerSections = document.querySelectorAll('.footer-section');
    footerSections.forEach(section => {
        observer.observe(section);
    });
}
