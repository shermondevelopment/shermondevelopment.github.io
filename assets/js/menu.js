class Menu { 

    constructor() {
        this.menuOptions = document.querySelectorAll('.aside__bottom-area')
        this.init()
    }


    addFocusedItemMenu() {
        this.menuOptions.forEach((itemMenu) => {
            itemMenu.addEventListener('click', () => {
               this.removeItemFocudesMenu()
               itemMenu.classList.add('focused')
            })
        })
    }

    removeItemFocudesMenu() {
        this.menuOptions.forEach((itemMenu) => {
            itemMenu.classList.remove('focused')
        })
    }

    init() {
        this.addFocusedItemMenu()
    }

}

export default Menu