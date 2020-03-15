import React, { Component } from "react";
import GifSearch from '../components/GifSearch'
import GifList from "../components/GifList";

export default class GifListContainer extends Component {
    constructor() {
        super()
        this.state = {
            searchResults: null
        }
    }

    handleGifSearchSubmit = (search) => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`
        const firstThree = []
        fetch(url)
        .then(resp => resp.json())
        .then(results => {
            for (let index = 0; index < 3; index++) {
                const picture = results.data[index].images.original.url;
                firstThree.push(picture)
            }
            this.setState({
                searchResults: firstThree
            })
        })
    }

    render() {
        return (
            <div>
                <GifList gifs={this.state.searchResults}/>
                <GifSearch handleGifSearchSubmit={this.handleGifSearchSubmit} />
            </div>
        )
    }
}