class Menu { 

    constructor(movie) {
        this.menuOptions = null
        this.optionsEpisodes = null
        this.seasonChecked = 1
        this.movie = movie;
        this.init()
    }

    /*
    * add click event to all menu options aside
    */
    addFocusedItemMenu() {      
        this.menuOptions =  document.querySelectorAll('.aside__bottom-area')
        this.menuOptions.forEach((itemMenu) => {
            itemMenu.addEventListener('click', () => {
               this.removeItemFocudesMenu()
               itemMenu.classList.add('focused')
               this.seasonChecked = itemMenu.dataset.season;
               this.renderEpisodeOfSeason()
            })
        })
    }

    openDetailsEpisode() {
        this.optionsEpisodes = document.querySelectorAll('.aside__episode--item')
        this.optionsEpisodes.forEach((episodeItem) => {
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

    renderEpisodeOfSeason() {

        
        const episdoeOfSeason = this.movie._episodes.filter( (item) => item.seasonNumber === Number(this.seasonChecked))

        const elementEpisodes = document.querySelector('.content__aside-episode');


        elementEpisodes.innerHTML = '';

        episdoeOfSeason.forEach((episodeItem, indice)  => {
            elementEpisodes.innerHTML += `
            <div class="aside__episode--item  flex justify-between items-between flex-col">
                <div class="flex justify-between items-center">
                    <h3 class="episode__title">
                        ${episodeItem.episodeNumber} ${episodeItem.title}
                    </h3>
                    <img src="./assets/icons/play-small-player-w.svg" />
                </div>

                <div class="episode__item-details flex flex-col">
                    <div class="episode__item-figure">
                    <img  src="${episodeItem.image}" />
                    <div class="item__area-progress w-full flex justify-center">
                        <div class="episode__progress">
                            <div class="progress"></div>
                        </div>
                    </div>
                    </div>
                    <div class="episode__item-details--paragraph">
                        <p>
                            ${episodeItem.synopsis}
                        </p>
                    </div>
                </div>
            </div>
            `
        })

        this.openDetailsEpisode()

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
        this.renderEpisodeOfSeason()
    }

}

export default Menu