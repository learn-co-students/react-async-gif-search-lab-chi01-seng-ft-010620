import React, { Component } from "react";

export default class GifSearch extends Component {
    constructor() {
        super()
        this.state = {
            value: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.handleGifSearchSubmit(this.state.value)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='gif-search'>Enter a search term:</label><br></br>
                <input onChange={this.handleChange} id='gif-search' type='text' value={this.state.value}></input><br></br>
                <input type='submit' value='Find Gifs'></input>
            </form>
        )
    }
}