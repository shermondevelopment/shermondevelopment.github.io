class Episodes {
    constructor(duration, episodeNumber, id, image, seasonNumber, synopsis, title) {
        this._duration = duration
        this._episodeNumber = episodeNumber
        this._id = id
        this._image = image
        this._seasonNumber = seasonNumber
        this._synopsis = synopsis
        this._title = title
    }

    get duration() {
        return this._duration
    }

    get episodeNumber() {
        return this.episodeNumber
    }
    
    get id() {
        return this,this._id
    }

    get image() {
        return this._image
    }

    get seasonNumber() {
        return this.seasonNumber
    }

    get synopsis() {
        return this.synopsis
    }

    get title() {
        return this.title
    }
}

export default Episodes