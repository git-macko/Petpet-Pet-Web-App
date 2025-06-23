function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    
    if(navLinks.classList.contains('show')) {
        //start closing animation
        navLinks.classList.remove('show');
    } else {
        // OPEN menu
        navLinks.classList.add('show');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('imageSlider');
    let scrollAmount = 0;
    const scrollIncrement = slider.offsetWidth; //Scroll by the width of the slider

    setInterval(() => {
        scrollAmount += scrollIncrement;
        if (scrollAmount >= slider.scrollWidth) {
            scrollAmount = 0; //Reset to the start if at the end
        }
        slider.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }, 3000); //Auto-slide every 3 seconds
});


