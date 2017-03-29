/**
 * Created by dingjunyi on 2017/3/29.
 */
import React from 'react'

class SearchInput extends React.Component{
    handlerKeyUp(e) {
        alert("TEST");
        if(e.keyCode == 13) {
            let value = e.target.value;
            if(!value) return false;
            let keyWordInput = {
                text: value,
                isDone: false
            };
            e.target.value = '';
            this.props.goSearch(keyWordInput)
        }
    }
    render(){
        return(
            <div className="search_box_left">
                <input type="text" className="inputValue" onKeyUp={this.handlerKeyUp.bind(this)} required/>
                <label>Keywords</label>
            </div>
        )
    }
}

export default SearchInput