class Menu { 

    constructor(identifyElement) {
        this.menuOptions = document.querySelectorAll(identifyElement)
        this.optionsEpisodes = document.querySelectorAll('.aside__episode--item')
        this.seasonCehcked = '1'
        this.init()
    }

    /*
    * add click event to all menu options aside
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

    openDetailsEpisode() {
        this.optionsEpisodes.forEach((episodeItem, indice) => {
            episodeItem.addEventListener('click', () => {
                this.removeFocusEpisodeItem()
                episodeItem.classList.toggle('opened')
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
     * remove episode screen details
    */

    removeFocusEpisodeItem() {
        this.optionsEpisodes.forEach((itemEpisode) => {
            itemEpisode.classList.remove('opened')
        })
    }

    /*
    * init menu
    */
    init() {
        this.addFocusedItemMenu()
        this.openDetailsEpisode()
    }

}

export default Menu