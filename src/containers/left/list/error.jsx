// React
import React, { Component } from 'react';

class Error extends Component {
 	render() {
    return(
      <div className="error">
        <div className="description">
          <span>The queue is totally empty</span>
        </div>
      </div>
    )
  }
  
}


export default Error;