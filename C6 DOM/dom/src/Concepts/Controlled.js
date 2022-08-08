import React, { Component } from "react";

class Controlled extends Component {
    constructor(props) {
        super(props)

        this.input = React.createRef()

        this.state = {
            value : ""
        }
    }

     handleSubmit = (e) => {
        e.preventDefault();
        console.log("Input is being controlled by react", this.input.current.value);


    }

    handleChange = (e) => {
        this.setState({value: e.target.value})
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
            <label>Name
                <input type="text" 
                ref={this.input}
                value={this.state.value}
                onChange = {this.handleChange}
                />
            </label>
            <input type="submit" value="Submit" />
        </form>
        )
    }
}

export default Controlled;