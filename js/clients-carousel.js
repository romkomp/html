(() => {

    const slides = [
        '<div><img src="img/client_JessicaDrill.jpg" alt="Jessica Drill"></div>',
        '<div><img src="img/client_JordanPeterson.jpg" alt="Jordan Peterson"></div>',
        '<div><img src="img/client_LisaWilson.jpg" alt="Lisa Wilson"></div>'
    ];

    function renderSlides(slides) {
        const slidesContainer = document.querySelector('.clients-carousel__slides');
        slidesContainer.innerHTML = '';

        for(let slide of slides) {
            slidesContainer.innerHTML += slide;
        }

    }

}) ();