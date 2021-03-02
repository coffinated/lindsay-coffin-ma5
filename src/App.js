import React from 'react';
import ClickySquare from './ClickySquare'

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
        };
    }

    countClick = (direction) => {
        if (direction === "up") {
            this.setState({
                counter: this.state.counter + 1
            })
        } else if (direction === "down") {
            this.setState({
                counter: this.state.counter - 1
            })
        }
    }

    render() {

        return (
            <div id="container">
                <div id="counter">Count: {this.state.counter}</div>
                <ClickySquare clickFunc={this.countClick} id="topL" />
                <ClickySquare clickFunc={this.countClick} id="topR" />
                <ClickySquare clickFunc={this.countClick} id="bottomL"/>
                <ClickySquare clickFunc={this.countClick} id="bottomR" />
            </div>
        );
    }
}