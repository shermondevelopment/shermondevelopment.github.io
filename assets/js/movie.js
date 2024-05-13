class Movie {
    constructor(cast, genres, images, synopsis, title, year, episodes, seasons) {
        this._cast = cast
        this._genres = genres
        this._images = images
        this._synopsis = synopsis
        this._title = title
        this._year = year
        this._episodes = episodes
        this.seasons = seasons
    }

    get cast() {
        return this._cast
    }

    get genres() {
        return this.genres
    }

    get synopsis() {
        return this._synopsis
    }

    get title() {
        return this._title
    }

    get year() {
        return this._year
    }

    get episodes() {
        this._episodes
    }

    get cover() {
        return this._cover
    }
}

export default Movie