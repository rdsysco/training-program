import React, { Component } from 'react';
import Header from './components/Header';
import Grid from './components/Grid';
import Form from './components/Form';
import { connect } from 'react-redux';
import { getInitialNotes, addNewNote, removeNote } from './store/actions';

class App extends Component {
  render() {
    return (
      <div>
        <Header name={this.props.name}/>
        <Form addNewNote={this.props.addNewNote}/>
        <Grid notes={this.props.notes} removeNote={this.props.removeNote}/>
      </div>
    );
  }
}

const mapDispatchProps = (dispatch, ownProps) => {
  return {
    getInitialNotes: () => {
      dispatch(getInitialNotes())
    },
    addNewNote: () => {
      dispatch(addNewNote())
    },
    removeNote: (id) => {
      dispatch(removeNote(id))
    }
  }
}

const maoStateToProps = (state, ownProps) => {
  return {
    notes: state.notes,
    name: state.name
  }
}



export default connect(mapDispatchProps, maoStateToProps)(App);
