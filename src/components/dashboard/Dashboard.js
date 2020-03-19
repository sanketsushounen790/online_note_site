import React, {Component} from "react";
import ProjectList from "../projects/ProjectList";
import Notification from "./Notificationd";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase"
import { compose } from "redux"
import { Redirect } from "react-router-dom"

class Dashboard extends Component {
    render(){
        //console.log(this.props)
        const {notes, auth, notifications}=this.props;
        if(!auth.uid) {
            return <Redirect to="/"/>
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 m6 project-list">
                        <ProjectList notes={notes}/>
                    </div>
                    <div className="col s12 m5 offset-m1 notification">
                        <Notification notifications={notifications}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        notes: state.firestore.ordered.notes,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: "notes", orderBy: ["createdAt", "desc"]},
        {collection: "notifications", limit :6, orderBy: ["time", "desc"]}
    ])
)(Dashboard);