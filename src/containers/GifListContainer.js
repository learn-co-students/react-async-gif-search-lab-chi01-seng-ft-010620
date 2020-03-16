import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component{
state={
    gifs: []
}

componentDidMount(){
    this.fetchGifs()
}
  fetchGifs=(query)=>{
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
        .then(resp=>resp.json())
        .then(({data})=>{
            console.log(data)
            this.setState({
                gifs: data
            })
        })
    }
    submitHandler=(searchValue)=>{
        console.log("searched word",searchValue)
        this.fetchGifs(searchValue)
        

    }
    render(){
        return(
            <div className="searchForm"> 
                <GifSearch submitHandler={this.submitHandler}/>
                <GifList gifs={this.state.gifs}/>
               
            </div>
        )
    }
}