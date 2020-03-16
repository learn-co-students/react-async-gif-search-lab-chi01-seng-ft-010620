import React,{Component} from 'react'

export default class GifList extends Component{

    renderGifs=()=>{
        return this.props.gifs.map(gif=>{
        return <li><img src={gif.images.original.url} ></img></li>
        })
    }

    render(){
        return(
            <div>
                <ul>
                    {this.renderGifs()}
                </ul>
            </div>
        )
    }
}