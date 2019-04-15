import React, { Component } from 'react'; 
import Loading from '../loading';

const DataComponent = (ComposedComponent) => 
    class DataComponent extends Component {
        constructor(props) {
            super(props);
            this.state = {
                data: [],
                loading: false,
                loaded: false
            }
            const { url } = props;
            this.url = url;
        }

        componentWillMount() {
            this.setState({loading: true});
            fetch(this.url)
                .then(response => response.json())
                .then(data => this.setState({
                    loaded: true,
                    loading: false,
                    data
                }))
                .catch(err => console.log(err));
        }

        render() {
            return (
                <div className="data-component">
                    {(this.state.loading) ?
                        <Loading/> :
                        <ComposedComponent {...this.state} {...this.props}/>
                    }
                </div>
            )
        }
    }

export default DataComponent;