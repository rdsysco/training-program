import React, { Component } from 'react';


export default class Form extends Component {
  render() {
    return (
      <div>
        <form onSubmit={
          event => {
            event.preventDefault();
            const note = {
              id: Date.now(),
              title: this.refs.title.value,
              details: this.refs.details.value
            }
            this.refs.title.value = '';
            this.refs.details.value = '';
            this.props.addNewNote(note);
          }
        }>
          <div>
            <div>
              <input 
                id="title"
                name="currentTitle"
                type="text"
                ref="title"/>
            </div>

            <div>
              <input
                id="details"
                name="currentDetails"
                type="text" 
                ref="details"/>
            </div>

            <div>
                <button type="submit" name="action">
                  Add note
                </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
