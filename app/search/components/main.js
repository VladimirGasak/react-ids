import React from 'react'
import ReactDOM from 'react-dom'
import SearchButton from './SearchButton'
import SearchInput from './SearchInput'
import { Router, Route, Link } from 'react-router'

class Main extends React.Component { //定义组件，继承父类
    constructor() {
        super()
    }
    goSearch(kwd){
        console.log(kwd);
    }
    render(){
        return(
                <div className="search_box">
                    <SearchInput goSearch={this.goSearch.bind(this)}/>
                    <SearchButton/>
                </div>
        )
    }
}


ReactDOM.render(<Main/>,document.getElementById('search'))