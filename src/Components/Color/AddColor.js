import React from 'react';

class AddColor extends React.Component {

    constructor() {
        super();

        this.state = {
            name: "",
            color: "#000000"
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {

        let name = e.target.name;
        let value = e.target.value;

        this.setState({
            [name]: value
        });

    }

    handleSubmit(e) {


        let addHandler = this.props.addHandler;
        addHandler(this.state.name, this.state.color);


        this.setState({
            name: "",
        });

        e.preventDefault();

    }

    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                    <input type="color" name="color" value={this.state.color} onChange={this.handleChange}/>
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}

export default AddColor