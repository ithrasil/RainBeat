// React
import React, {Component} from "react";

export default class PauseIcon extends Component {
    render() {
        return (
            <svg className={this.props.className} version="1.1" x="0px" y="0px" width="124px" height="124px" viewBox="0 0 124 124"
                 style={{enableBackground: "new 0 0 124 124"}}>
                <path fill={this.props.fill} d="M112,6H12C5.4,6,0,11.4,0,18s5.4,12,12,12h100c6.6,0,12-5.4,12-12S118.6,6,112,6z"></path>
                <path fill={this.props.fill}
                      d="M112,50H12C5.4,50,0,55.4,0,62c0,6.6,5.4,12,12,12h100c6.6,0,12-5.4,12-12C124,55.4,118.6,50,112,50z"></path>
                <path fill={this.props.fill}
                      d="M112,94H12c-6.6,0-12,5.4-12,12s5.4,12,12,12h100c6.6,0,12-5.4,12-12S118.6,94,112,94z"></path>
            </svg>
        )
    }
}

