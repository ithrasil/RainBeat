import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { changeCard } from '../actions/card.jsx';
import { updateStream } from '../actions/stream.jsx';

import Search from './search.jsx';

import Card from './player/card.jsx';
import Controls from './player/controls.jsx';

class Player extends React.Component {
  
  handleClick(value) { 
    const id = value;
    const songs = this.props.songs.songs;
    this.props.changeCard(id);
    this.props.updateStream([songs[id].stream_url, this.props.config.clientId]);
  }

  render() {
    let cards = [];
    const length = this.props.songs.songs.length;
    
    for (var i = 0; i < length; i++) {
      const song = this.props.songs.songs[i];
      let isActive = (i == this.props.cardId);
      
      cards.push(
        <Card 
          key={ i }
          id={ i }
          song={ song } 
          onClick={ this.handleClick.bind(this) }
          isActive={ isActive }  
        />);
    }
    
    return(
      
      <div className="player_component">
        <Search  />
        <div className="cards" data-simplebar>
          { cards }
          <div className="scrollbar">
            <div className="thumb"></div>
          </div>
        </div>
        <Controls activeSong={ this.props.activeSong } stream={ this.props.stream }/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cardId: state.card.id,
    songs: state.songs,
    stream: state.stream.stream,
    activeSong: state.songs.songs[state.card.id],
    config: state.config
  }
}

function matchDispatchToProps(dispatch) {
  let functions = { 
    changeCard: changeCard,
    updateStream: updateStream
  };
  
  return bindActionCreators(functions, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Player);