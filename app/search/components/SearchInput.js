/**
 * Created by dingjunyi on 2017/3/29.
 */
import React from 'react'

class SearchInput extends React.Component{
    constructor() {
        super();
        this.state ={
            keyword:""
        }
    }

    handlerKeyUp(e) {
        if(e.keyCode == 13) {
            window.location = `/rs?wd=${this.state.keyword}`;
        }
    }
    handlerClick(e){
        window.location = `/rs?wd=${this.state.keyword}`;
    }
    updateInputValue(e) {
    this.setState({
        keyword: e.target.value
    });
}
    render(){
        return(
            <div>
                <div className="search_box_left">
                    <input type="text" className="inputValue" value={this.state.keyword} onChange={this.updateInputValue.bind(this)} onKeyUp={this.handlerKeyUp.bind(this)} required/>
                    <label>Keywords</label>
                </div>
                <div className="search_box_right">
                    <input type="button" className="searchButton" onClick={this.handlerClick.bind(this)} value="SEARCH"/>
                </div>
            </div>
        )
    }
}

export default SearchInput