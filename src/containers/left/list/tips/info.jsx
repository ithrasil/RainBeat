// React
import React, { Component } from 'react';

// Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Actions
import { changeState } from 'Actions/searchResult.jsx';

class Info extends Component {
 	render() {
    return(
      <div className="error">
        <div className="description">
          <img src="/images/icons/exit.svg" onClick={ ()=> { this.props.changeState(false)} }></img>
        </div>
      </div>
    )
  }
  
}

function mapStateToProps(state) {
  return {}
}

function matchDispatchToProps(dispatch) {
  let functions = { 
    changeState: changeState,
  };
  
  return bindActionCreators(functions, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Info);