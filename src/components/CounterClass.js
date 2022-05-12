import React from "react";

class CounterClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    render() {
        return (
            <>
                <p>You have clicked {this.state.count} times.</p>
                <button onClick={() => this.setState({ count: this.state.count + 1})}>
                    Click me
                </button>
            </>
        )
    }
}

export default CounterClassComponent;