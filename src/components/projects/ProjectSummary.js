import React from "react";
import moment from "moment"

const ProjectSummary = ({note}) => {
    return (
        <div className="card">
            <div className="card-content">
                <span className="card-title">{note.title}</span>
                <p>Added by <span className="red-text accent-3">{note.authorFirstName} {note.authorLastName}</span></p>
                <p>{moment(note.createdAt.toDate()).format('LLLL')}</p>
            </div>
        </div>
    )
}

export default ProjectSummary;