import React, {Component} from 'react';
import './App.css';
import {Card, CardAdd} from './components'

class App extends Component {

    constructor() {

        super();

        this.state = {
            items: [
                {
                    title: 'Inna',
                    color: 'red',
                    rate: 4
                },
                {
                    title: 'Selena Gomez',
                    color: 'yellow',
                    rate: 3
                },
                {
                    title: 'Jennifer Lopez',
                    color: 'blue',
                    rate: 1
                }
            ]
        }
    }

    add(value) {

        const items = this.state.items || [];

        items.push(value);

        this.setState({
            items
        })
    }

    change(index, value) {

        const items = this.state.items || [];

        items.splice(index, 1, value);

        this.setState({
            items
        })
    }

    remove(index) {

        if (!window.confirm('Are you sure to delete?')) return;

        const items = this.state.items || [];

        items.splice(index, 1);

        this.setState({
            items
        })
    }

    render() {
        return (
            <div>
                <div style={{textAlign: 'center', padding: '15px'}}>
                    <CardAdd onAdd={(value) => this.add(value)}/>
                </div>
                <div>
                    {
                        this.state.items.map((item, index) => {

                            return (
                                <Card key={index}
                                      value={item}
                                      onChange={(value) => this.change(index, value)}
                                      onRemove={() => this.remove(index)}/>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default App;
