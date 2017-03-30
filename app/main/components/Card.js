/**
 * Created by dingjunyi on 2017/3/30.
 */
import React from 'react'
import Search from './Search'
import Display from './Display'

class Card extends React.Component {
    constructor() {
        super();
    }
    render(){
        return(
          <div className="card-wrapper">
              <Search />
              <Display />
          </div>
        )
    }
}

export default Card