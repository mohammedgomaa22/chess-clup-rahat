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


// Video Play Button Functionality (Future)
document.addEventListener('DOMContentLoaded', function () {
    const playBtn = document.querySelector('.video-play-btn');

    if (playBtn) {
        playBtn.addEventListener('click', function () {
            // Future: Replace with actual video player
            console.log('Video will be implemented here');

            // Placeholder action - could show a modal or redirect
            alert('الفيديو سيتم إضافته قريباً!');
        });
    }
});
