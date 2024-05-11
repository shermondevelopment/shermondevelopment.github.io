class Service {

    constructor() {
        this.url = 'https://ap-cine.onrender.com/'
    }

    async getMovie(pathMovie) {
        const movie = await this.get(pathMovie)
        return movie.json()
    }

    async getEpisodes(pathEpisodes) {
        const movie = await this.get(pathEpisodes)
        return movie.json()
    }

    async get(path) {
        return await fetch(this.url + path)
    }
}

export default Service