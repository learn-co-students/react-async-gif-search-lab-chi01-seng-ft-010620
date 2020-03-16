import React, {Component} from 'react'

export default class GifSearch extends Component{
    state={
        searchValue: ""
    }
    handleChange=(event)=>{
        this.setState({
            searchValue: event.target.value
        })
        console.log("search",this.state.searchValue)
    }
    render(){
        return(
            <div>
                <form>
                    <input type="text" name="gifSearch" value={this.state.searchValue}
                    onChange={(event)=>{this.handleChange(event)}}/>
                    <input type="button" value="Search!" onClick={()=>{this.props.submitHandler(this.state.searchValue)}}/>
                </form>

            </div>
        )
    }
}