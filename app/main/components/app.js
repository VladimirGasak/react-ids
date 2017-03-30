/**
 * Created by dingjunyi on 2017/3/30.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import Card from './Card'
class Main extends React.Component {
    constructor() {
        super();
    }


    render(){
        return(
            <div className="app-wrapper">
                <Card/>
            </div>
        )
    }
}


ReactDOM.render(<Main/>,document.getElementById('main'));