let slideIndices = {};


function plusSlides(n, no) {
    showSlides(slideIndices[no] += n, no);
}

function showSlides(n, no) {
    let i;
    const slides = document.querySelectorAll(`.slideshow${no}`);
    if (n > slides.length) { slideIndices[no] = 1 }    
    if (n < 1) { slideIndices[no] = slides.length }
    slides.forEach(slide => slide.style.display = "none");
    slides[slideIndices[no] - 1].style.display = "block";
}

document.querySelectorAll('[data-slideshow]').forEach(slideshow => {
    const no = slideshow.getAttribute('data-slideshow');
    slideIndices[no] = 1;
    showSlides(1, no);
});