class Movie {
    constructor(cast, genres, cover, synopsis, title, year, episodes) {
        this._cast = cast
        this._genres = genres
        this._synopsis = synopsis
        this._title = title
        this._year = year
        this._episodes = episodes
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
}

export default Movie