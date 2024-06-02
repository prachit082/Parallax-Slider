/**
 * Represents the options for the carousel.
 * @typedef {Object} CarouselOptions
 * @property {boolean} accessibility - Indicates whether the carousel is accessible.
 * @property {boolean} prevNextButtons - Indicates whether the previous and next buttons are enabled.
 * @property {boolean} pageDots - Indicates whether the page dots are enabled.
 * @property {boolean} setGallerySize - Indicates whether the gallery size is set.
 * @property {Object} arrowShape - Specifies the shape of the arrow.
 * @property {number} arrowShape.x0 - The x-coordinate of the first point of the arrow shape.
 * @property {number} arrowShape.x1 - The x-coordinate of the second point of the arrow shape.
 * @property {number} arrowShape.y1 - The y-coordinate of the second point of the arrow shape.
 * @property {number} arrowShape.x2 - The x-coordinate of the third point of the arrow shape.
 * @property {number} arrowShape.y2 - The y-coordinate of the third point of the arrow shape.
 * @property {number} arrowShape.x3 - The x-coordinate of the fourth point of the arrow shape.
 */
const options = {
    accessibility: true,
    prevNextButtons: true,
    pageDots: true,
    setGallerySize: false,
    arrowShape: {
        x0: 1,
        x1: 58,
        y1: 62,
        x2: 55,
        y2: 48,
        x3: 18
    }
};

/**
 * Sets the background position of a slide element based on the slide target and Flickity's x position.
 * @param {Object} slide - The slide object.
 * @param {number} index - The index of the slide.
 */
function setBgPosition(slide, index) {
    const x = -(slide.target + flkty.x) / 3;
    slides[index].style.backgroundPosition = `${x}px`;
}

// Slides initialization
const carousel = document.querySelector('[carousel]');
/**
 * Represents an array of carousel slides.
 * @type {Array<HTMLElement>}
 */
const slides = Array.from(document.getElementsByClassName('carousel-cell'));
const flkty = new Flickity(carousel, options);

// Event listener using bg position
flkty.on('scroll', () => {
    flkty.slides.forEach(setBgPosition);
});
