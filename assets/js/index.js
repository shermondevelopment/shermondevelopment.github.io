import Movie from './movie.js'
import Service from './service.js'
import Menu from './menu.js'


const getMovieAndEpisodes = async () => {
    const service = new Service()
    const moviesFetch = await service.getMovie('movie')
    const episodesFetch = await service.getEpisodes('episodes')
    return new Movie(moviesFetch.cast, moviesFetch.genres, moviesFetch.images, moviesFetch.synopsis, moviesFetch.title, moviesFetch.year, episodesFetch)
}

class BackgroundAnimation {
    

    constructor(images) {
        this.index = 1
        this.images = images
        this.element = document.querySelector('.movie__content')
        this.init()
    }

    changeImages() {
        this.element.style.backgroundImage = `url(${this.images[this.index]})`;
        this.index = (this.index + 1) % this.images.length; 
    }

    startAnimation() {
        this.element.style.backgroundImage = `url(${this.images[0]})`
        setInterval(this.changeImages.bind(this), 15000)
    }

    init() {
        this.startAnimation()
    }

}


(async () => {
    const movie = await getMovieAndEpisodes()
    const menu = new Menu()
//  console.log(movie._images)
 new BackgroundAnimation(movie._images)
})()

