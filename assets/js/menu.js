class Menu { 

    constructor(movie) {
        this.menuOptions = null
        this.optionsEpisodes = document.querySelectorAll('.aside__episode--item')
        this.seasonCehcked = '1'
        this.movie = movie;
        this.init()
    }

    /*
    * add click event to all menu options aside
    */
    addFocusedItemMenu() {      
        this.menuOptions =  document.querySelectorAll('.aside__bottom-area')
        console.log(this.menuOptions)
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

    renderSeasonInScreen() {
        const elementRenderItemsSeason = document.querySelector('.content__aside-season-area')
        for(let i = 0; i < this.movie?.seasons; i++) {
            elementRenderItemsSeason.innerHTML += `
                <div class="aside__bottom-area ${i === 0 && 'focused'}" data-season=${i + 1}>
                  <span class="aside__bottom_season-number">T${i + 1}</span>
                </div>
            `
        }
        this.addFocusedItemMenu()
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
        this.renderSeasonInScreen()
        this.openDetailsEpisode()
    }

}

export default Menu