// React
import React, {Component} from 'react'

// Icons
import ArrowIcon from 'Containers/svg/ArrowIcon.jsx'

// Containers
import Card from 'Containers/middle/tips/cards/card.jsx'

export default class CardExtendedLoaded extends Component {

    constructor(props) {
        super(props)

        this.state = {
            active: false,
            name: props.data.name,
        }
    }

    componentWillReceiveProps(props) {
        if (props.data.name === this.state.name) return;
        this.setState((state, props) => ({
            index: props.index,
            name: props.data.name,
        }))
    }

    setActive() {
        this.setState((state, props) => {
            return {active: !state.active}
        })
    }

    render() {
        const foldClass = this.state.active ? "active" : "";

        return (
            <div className={'card_extended_loaded ' + foldClass}>
                <div className="card_contents" onClick={this.setActive.bind(this)}>
                    <ArrowIcon className={'card_icon'} fill={'white'}/>
                    <div className="label"><span title={this.props.data.name}>{this.props.data.name}</span></div>
                </div>
                <div className="fold">
                    {
                        this.props.data.tracks.map((track, index) =>
                            <Card key={index} index={index} track={track} changeTrack={this.props.changeTrack}/>)
                    }
                </div>
            </div>
        )
    }

}
