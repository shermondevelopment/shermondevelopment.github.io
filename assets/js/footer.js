class Footer {

    constructor(sinopse, cast) {
        this.options = document.querySelector('.footer__content--tabitem')
        this.sinopseMovie = sinopse
        this.sectionFocused = 0
        this.cast = cast;
        this.optionsMenu = document.querySelectorAll('.footer__content--tabitem')
        this.init()
    }


    defineSinopseMovie() {
        document.querySelector('.footer__sinopse-paragraph').innerText = this.sinopseMovie;
    }

    addFocusedItemMenu() {      
        this.optionsMenu.forEach((itemMenu, indice) => {
            itemMenu.addEventListener('click', () => {
                this.sectionFocused = indice
                this.removeFocus()
                itemMenu.classList.add('focused')
                this.hiddenContentByFocusedSectionFooter()
                this.showContentFooterBySection(indice)
            })
        })
    }

    hiddenContentByFocusedSectionFooter(content_to_show) {
        const contentModal = document.querySelectorAll('.item__content-focused')

        contentModal.forEach((itemFooter) => {
            itemFooter.style.display = 'none'
        })
    }

    showContentFooterBySection(content_to_show) {
        switch(content_to_show) {
            case 0:
                document.querySelector('.content__general').style.display = 'flex';
            break;
            case 1:
                let contentElenco = document.querySelector('.content__cast')
                contentElenco.style.display = 'flex';
                this.renderElenco(contentElenco)
            break;
            case 2:
                document.querySelector('.content__prem').style.display = 'flex';
            break;
        }
    }

    renderElenco(element) {
        element.innerHTML = '';
        this.cast.forEach((itemElenco) => {
            element.innerHTML += `
            <div class="content__cast-card flex items-center justify-center flex-col">
                <h3 class="elenco__firstname">${itemElenco.name}</h3>
            </div>
            `
        })
    }

    removeFocus() {
        this.optionsMenu.forEach((itemMenu) => {
            itemMenu.classList.remove('focused')
        })
    }

    init() {
        if(this.sectionFocused === 0) {
            this.defineSinopseMovie()
        }
        this.addFocusedItemMenu()
    }

}

export default Footer