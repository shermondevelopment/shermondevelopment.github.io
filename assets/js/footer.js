class Footer {

    constructor(sinopse) {
        this.options = document.querySelector('.footer__content--tabitem')
        this.sinopseMovie = sinopse
        this.optionsMenu = document.querySelectorAll('.footer__content--tabitem')
        this.init()
    }


    defineSinopseMovie() {
        document.querySelector('.footer__sinopse-paragraph').innerText = this.sinopseMovie;
    }

    addFocusedItemMenu() {      
        this.optionsMenu.forEach((itemMenu) => {
            itemMenu.addEventListener('click', () => {
                this.removeFocus()
               itemMenu.classList.add('focused')
            })
        })
    }

    removeFocus() {
        this.optionsMenu.forEach((itemMenu) => {
            itemMenu.classList.remove('focused')
        })
    }

    init() {
        this.defineSinopseMovie()
        this.addFocusedItemMenu()
    }

}

export default Footer