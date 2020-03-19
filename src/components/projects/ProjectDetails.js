import React from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import moment from 'moment'

const ProjectDetails = (props) => {
    console.log(props)
    const {note, auth} = props;
    if(!auth.uid) return <Redirect to="/signin" />

    const handleClick = () => {
        props.history.push("/dashboard")
    }
    
    if (note) {
        return (      
            <div className="container section">
                <div className="card">
                    <div className="card-content">
                        <span className="card-title">{note.title}</span>
                        <p>{note.content}</p>
                    </div>
                    <div className="card-action">
                        <p>Added by <span className="red-text accent-2">{note.authorFirstName} {note.authorLastName}</span></p>
                        <p>{moment(note.createdAt.toDate()).format('LLLL')}</p>
                    </div>
                </div>
                <div className="container left">
                    <button className="btn btn-med purple lighten-3" onClick={handleClick}> <i className="material-icons">arrow_back</i> </button>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="container center">
                <p>Loading note info...</p>
            </div>
        )
    }
}

const mapStateToProps= (state, ownProps) =>{
    const id = ownProps.match.params.id;
    const notes = state.firestore.data.notes;
    const note = notes ? notes[id] : null ;
    return {
        note: note,
        auth: state.firebase.auth
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: "notes"}
    ])
)(ProjectDetails);
