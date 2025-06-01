/* 
    Makes the gallery's work, so a user can scroll through images
    Author: Samuel Herman
    Date: 1 June 2025
*/

// GALLERY SCROLL
document.addEventListener("DOMContentLoaded", function(){
    let images = document.querySelectorAll(".gallery-img");
    let prevBtn = document.querySelector(".prev-btn");
    let nextBtn = document.querySelector(".next-btn");
    let currentIndex = 0;

    // Function to show a specific image
    function showImage(index) {
        // Hide all images
        images.forEach(image => {
            image.classList.remove("active");
        });

        // Show the image at the given index
        images[index].classList.add("active");
    }

    // Event listener ofr the previous button
    prevBtn.addEventListener("click", function() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        }
        showImage(currentIndex);
    });

    nextBtn.addEventListener("click", function() {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        showImage(currentIndex);
    });

    // Initially show the first image
    showImage(currentIndex);
});