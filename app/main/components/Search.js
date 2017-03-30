/**
 * Created by dingjunyi on 2017/3/30.
 */
import React from 'react'

class Search extends React.Component {
    constructor() {
        super();
    }
    render(){
        return(
            <div className="search-wrapper">
                <div className="search-input-box">
                    <input type="text" className="search-input" />
                    <input type="button" className="search-button" />
                </div>
                <div className="search-select-box">
                    <div className="search-select-ref"></div>
                    <div className="search-select-cit"></div>
                </div>
            </div>
        )
    }
}

export default Search