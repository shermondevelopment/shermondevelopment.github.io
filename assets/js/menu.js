class Menu { 

    constructor() {
        this.menuOptions = document.querySelectorAll('.aside__bottom-area')
        this.seasonCehcked = '1'
        this.init()
    }

    /*
    * add click event to all menu options
    */
    addFocusedItemMenu() {
        this.menuOptions.forEach((itemMenu) => {
            itemMenu.addEventListener('click', () => {
               this.removeItemFocudesMenu()
               itemMenu.classList.add('focused')
               this.seasonCehcked = itemMenu.dataset.season;
            })
        })
    }

    /*
    * add click event to all menu options
    */
    removeItemFocudesMenu() {
        this.menuOptions.forEach((itemMenu) => {
            itemMenu.classList.remove('focused')
        })
    }

    /*
    * init menu
    */
    init() {
        this.addFocusedItemMenu()
    }

}

export default Menu