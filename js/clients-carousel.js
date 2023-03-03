(() => {

    const slides = [
        '<div><img src="img/client_JessicaDrill.jpg" alt="Jessica Drill"></div>',
        '<div><img src="img/client_JordanPeterson.jpg" alt="Jordan Peterson"></div>',
        '<div><img src="img/client_LisaWilson.jpg" alt="Lisa Wilson"></div>'
    ];

    let currentSlide = 0;
    
    function renderSlides(slides) {
        const slidesContainer = document.querySelector('.clients-carousel__slides');
        slidesContainer.innerHTML = slides[currentSlide];
        if (window.innerWidth > 768) {
            const secondSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
            slidesContainer.innerHTML += slides[secondSlide];
            if (window.innerHTML > 900) {
                const thirdSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
                slidesContainer.innerHTML += slides[thirdSlide];
            }
        } 
    }

    function nextSlide() {
        currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
        renderSlides(slides);
    }

    function prevSlide() {
        currentSlide = currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1;
        renderSlides(slides);
    }

    // setInterval(nextSlide, 3000);
    renderSlides(slides);

    //buttons

    const nextButton = document.querySelector('.clients-carousel__next');
    nextButton.addEventListener('click', nextSlide);

    const prevButton = document.querySelector('.clients-carousel__prev');
    nextButton.addEventListener('click', prevSlide);

})();