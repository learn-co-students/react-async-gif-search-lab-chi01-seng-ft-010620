import React, { Component } from "react";

export default class GifList extends Component {

    renderGifs = () => {
        if (this.props.gifs !== null) {
            return this.props.gifs.map(gif => {
                return <img src={gif} alt='gifs for everyone'/>
            })
        }
    }

    render() {
        return (
            <div>
                {this.renderGifs()}
            </div>
        )
    }
}