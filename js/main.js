window.onload = function() {
    const comingSoonText = document.getElementById('soon');

    // Additional animation (optional)
    setInterval(() => {
        comingSoonText.style.transform = 
            comingSoonText.style.transform === 'scale(1.1)' ? 'scale(1)' : 'scale(1.1)';
    }, 1000);
};