// React
import React, { Component } from 'react';

// Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Actions
import { changeState } from 'Actions/searchResult.jsx';

class Info extends Component {
	
	constructor(props) {
		super(props);
		
		this.state = {
			filters: 0
		}
	}
	
	switchFilters(event) {
		
	}
	
 	render() {
			
		const filtersStatus = this.state.filters ? "active" : "";
			
    return(
      <div className="info">
       	<div className="close_search label" onClick={ ()=> { this.props.changeState(false)} }>
       		<img src="/images/icons/left-arrow.svg" alt=""/>
       		<span>Close search</span>
       	</div>
       	
       	<div className="filters_switch label" onClick={ ()=> { this.setState({ filters: !this.state.filters }) } }>
       		<img src="/images/icons/filter.svg" alt=""/>
       		<span>Filters</span>
       	</div>
				<div className={ "filters " + filtersStatus } >
					<div className="apis icons">
						<div className="api icon active" title="SoundCloud">
							<img src="https://lh3.googleusercontent.com/ZwkhZQkwDp8zN6s3HqIYjRMBio3hQhSZczBga6XGnp_DseFgBF6R4XCco49MpdFTdUVz=w300" alt=""
							/>
						</div>
						<div className="api icon" title="Last.fm">
							<img src="https://secure.last.fm/static/images/lastfm_avatar_twitter.66cd2c48ce03.png" alt=""
							/>
						</div>
						<div className="api icon" title="Napster">
							<img src="https://lh3.googleusercontent.com/inSwjR5i5BiIaEWxGc0PgOeyIbWHc38Vk28CVzAUxA-tfJGBJdADP9XnaKpGxFZU6-k=w300" alt=""
							/>
						</div>
						<div className="api icon" title="Tidal">
							<img src="//lh3.googleusercontent.com/a1hvfV9omWwfjNvUIgQLs65J3F7ozPrUPtPz7Bz3UhBtIcqXuPuR8Ftjljy9Vhylamk=w300" alt=""
							/>
						</div>
					</div>
					<div className="types icons">
						<div className="type icon active" title="Songs">
							<img src="/images/filters/music-player.svg" alt=""
							/>
						</div>
						<div className="type icon" title="Artists">
							<img src="/images/filters/electric-guitar.svg" alt=""
							/>
						</div>
						<div className="type icon"  title="Albums">
							<img src="/images/filters/music-album.svg" alt=""
							/>
						</div>
						<div className="type icon" title="Playlists">
							<img src="/images/filters/playlist.svg" alt=""
							/>
						</div>
					</div>
				 </div>
				 <div className="results label">
       		<img src="/images/icons/list.svg" alt=""/>
       		<span>Results</span>
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