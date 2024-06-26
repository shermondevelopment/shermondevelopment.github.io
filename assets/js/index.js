import Movie from './movie.js'
import Service from './service.js'
import Menu from './menu.js'
import Footer from './footer.js';
import AnimationSlide from './animation.js'


const getMovieAndEpisodes = async () => {
    const service = new Service()
    const moviesFetch = await service.getMovie('movie')
    const episodesFetch = await service.getEpisodes('episodes')
    return new Movie(
        moviesFetch.cast, 
        moviesFetch.genres, 
        moviesFetch.images, 
        moviesFetch.synopsis, 
        moviesFetch.title,
        moviesFetch.year, 
        episodesFetch,
        moviesFetch.seasons
    )
}

(async () => {
    const movie = await getMovieAndEpisodes()
    new Menu(movie)
    new AnimationSlide(movie._images)
    new Footer(movie._synopsis, movie._cast)

    /* loading screen */
    const loadingElement = document.querySelector('.loading__movie')
    loadingElement.style.display = 'none'
})()

