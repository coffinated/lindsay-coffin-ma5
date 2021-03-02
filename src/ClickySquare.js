import React from 'react';

export default class ClickySquare extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: "white"
        };
    }

    changeColor = () => {
        if (this.state.backgroundColor === "white") {
            this.setState({
                backgroundColor: "black"
            });
            this.props.clickFunc("up");
        } else {
            this.setState({
                backgroundColor: "white"
            });
            this.props.clickFunc("down");
        }
    }

    render() {
        return (
            <div class="square" style={{backgroundColor: this.state.backgroundColor}} 
                onClick={this.changeColor} id={this.props.id}></div> 
        );
    }

}