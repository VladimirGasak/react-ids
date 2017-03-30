/**
 * Created by dingjunyi on 2017/3/30.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import SearchInput from './SearchInput'

class Main extends React.Component {
    constructor() {
        super();
    }


    render(){
        return(
            <div className="search_box">
                <SearchInput/>
            </div>
        )
    }
}


ReactDOM.render(<Main/>,document.getElementById('search'));