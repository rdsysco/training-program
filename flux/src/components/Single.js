import React from 'react';
import { connect } from 'react-redux';

const Single = (props) => {
  return (
    <li className="col s4">
      <div className="card teal darken-1">
        <div className="card-content white-text">
          <span className="card-title">{props.note.title}</span>
          <p>{props.note.details}</p>
        </div>
        <div className="card-action">
          <button onClick={() => props.removeNote(props.note)}>Delete</button>
        </div>
      </div>
    </li>

  );
}

const mapDispatchProps = (dispatch, ownProps) => {
  return {}
}

const mapStateToProps = (state, ownProps) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchProps)(Single);
