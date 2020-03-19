import React from "react";
import ProjectSummary from "./ProjectSummary";
import { Link } from "react-router-dom";


const ProjectList = ({notes}) => {
    //console.log(notes);
    return (
        <div className="project-list section">
            {notes && notes.map(note => {
                return(
                    <Link to={"/project/"+note.id} key={note.id}>
                        <ProjectSummary note={note} />
                    </Link>
                ) 
            })}
        </div>
    )
}

export default ProjectList;