document.addEventListener("DOMContentLoaded", function () {
    const sliders = document.querySelectorAll(".box");

    sliders.forEach((slider) => {
        let currentSlide = 0;
        const slides = slider.querySelectorAll(".slider img");
        const totalSlides = slides.length;

        // Show the first slide initially
        slides[currentSlide].classList.add("active");

        // Function to change the slide
        const changeSlide = (step) => {
            // Remove the active class from the current slide
            slides[currentSlide].classList.remove("active");

            // Calculate the next slide index
            currentSlide = (currentSlide + step + totalSlides) % totalSlides;

            // Add the active class to the next slide
            slides[currentSlide].classList.add("active");
        };

        // Add event listeners for buttons
        const prevButton = slider.querySelector(".prev");
        const nextButton = slider.querySelector(".next");

        prevButton.addEventListener("click", () => changeSlide(-1));
        nextButton.addEventListener("click", () => changeSlide(1));

        //change image every 3 seconds
        setInterval(() => {
            changeSlide(1);
        }, 3000);
    });
});




