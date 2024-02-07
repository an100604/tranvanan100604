let slideIndex = 0;
        let slideInterval;

        startCarousel();

        function startCarousel() {
            slideInterval = setInterval(showSlides, 2000);
        }

        function showSlides() {
            let i;
            const slides = document.getElementsByClassName("custom2");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) {
                slideIndex = 1;
            }
            slides[slideIndex - 1].style.display = "block";
        }

        function stopCarousel() {
            clearInterval(slideInterval);
        }

        // Example: Stop the carousel after 10 seconds
        setTimeout(stopCarousel, 10000);