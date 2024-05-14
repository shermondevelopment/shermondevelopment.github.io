class AnimationSlide {

    constructor(images) {
        this.index = 0
        this.images = images
        this.element = document.querySelector('.movie__content')
        this.init()
    }

    changeImages() {
        this.element.style.backgroundImage = `url(${this.images[this.index]})`;
        this.index = (this.index + 1) % this.images.length; 
    }

    startAnimation() {
        this.element.style.backgroundImage = `url(${this.images[this.index]})`
        setInterval(this.changeImages.bind(this), 15000)
    }

    init() {
        this.startAnimation()
    }

}

export default AnimationSlide