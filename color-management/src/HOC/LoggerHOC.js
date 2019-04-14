import React, { Component } from 'react'

const LoaderHOC = (WrappedComponent) => {
    return class LoaderHOC extends Component{
        componentWillReceiveProps(nextProps) {
            console.log('Current props: ', this.props);
            console.log('Next props: ', nextProps);
        }
        render(){
            return (<WrappedComponent {...this.props}/>)
        }
    }
}

export default LoaderHOC;

export {
    LoaderHOC
}