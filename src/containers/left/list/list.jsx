// React
import React, { Component } from 'react';

// Containers
import Queue from 'Containers/left/list/queue/queue.jsx';
import Tips from 'Containers/left/list/tips/tips.jsx';

class List extends Component {
	
	render() {
    
    return(
      <div className="list">
        <Queue />
        <Tips />
      </div>
    )
		
  }
}

export default List;