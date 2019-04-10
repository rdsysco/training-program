import React, { Component } from 'react';
import HiddenMessage from './show-hide-message';

class HiddenMessages extends Component {

    constructor(props) {
        super(props)
        this.state = {
            messages: [
                "Hi",
                "Here is every one sleepy",
                "The crow crows after midnight",
                "Bring a watch and dark clothes to the spot",
                "Jericho Jericho Go"
            ],
            showing: -1
        }
    }

    componentWillMount() {
        this.interval = setInterval(() => {
            let { showing, messages } = this.state;
            showing = (++showing >= messages.length) ?
                0 : 
                showing
            this.setState({showing});
        }, 2500)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { messages, showing } = this.state;
        return (
            <div className="hidden-messages">
                {messages.map((messages, i) =>
                    <HiddenMessage key={i} hide={(i!==showing)}>
                        {messages}
                    </HiddenMessage>    
                )}
            </div>
        )
    }
}

export default HiddenMessages;