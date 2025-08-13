// <!-- Initialize AOS -->
AOS.init({
    duration: 800,
    once: true,
});


// Preloader Logic
document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.getElementById('preloader');
    let minDisplayTime = 2000; // Minimum 2 seconds
    let startTime = Date.now();
    
    // Function to hide preloader
    function hidePreloader() {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, minDisplayTime - elapsedTime);
        
        setTimeout(() => {
            preloader.classList.add('preloader-fade-out');
            // Remove preloader from DOM after animation completes
            setTimeout(() => {
                preloader.remove();
            }, 500);
        }, remainingTime);
    }
    
    // Wait for all content to load
    if (document.readyState === 'complete') {
        hidePreloader();
    } else {
        window.addEventListener('load', hidePreloader);
    }
    
    // Fallback: Force hide after 5 seconds maximum
    setTimeout(() => {
        if (preloader && !preloader.classList.contains('preloader-fade-out')) {
            hidePreloader();
        }
    }, 5000);
});