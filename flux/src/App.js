import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import Grid from './components/Grid';
import Form from './components/Form';
import { getInitialNotes, addNewNote, removeNote } from './store/actions';

class App extends Component {
  render() {
    return (
      <div>
        <Header name={this.props.name}/>
        <Form addNewNote={this.props.addNewNote1}/>
        <Grid notes={this.props.notes} removeNote={this.props.removeNote1}/>
      </div>
    );
  }
}

const mapDispatchProps = (dispatch, ownProps) => {
  return {
    getInitialNotes1: () => {
      dispatch(getInitialNotes())
    },
    addNewNote1: (note) => {
      dispatch(addNewNote(note))
    },
    removeNote1: (id) => {
      dispatch(removeNote(id))
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    notes: state.notes,
    name: state.name
  }
}



export default connect(mapStateToProps, mapDispatchProps)(App);
