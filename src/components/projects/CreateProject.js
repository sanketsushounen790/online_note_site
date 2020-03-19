import React, { Component } from 'react'
import { connect } from "react-redux"
import { createProject } from "../../store/actions/projectActions"
import { Redirect } from "react-router-dom"

class CreateProject extends Component  {
    state = {
        "title": "",
        "content": ""
    }
    handleChange= (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit= (e) => {
        e.preventDefault();
        //console.log(this.state)
        this.props.createProject(this.state)
        this.props.history.push("/dashboard")
    }
    render() {
        const {auth}=this.props;
        if(!auth.uid) {
            return <Redirect to="/signin" />
        }
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h4>Create New Note</h4>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange} autoComplete="on"/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Content</label>
                        <textarea name="content" id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field center-align">
                        <button className="btn purple lighten-3">
                            <i className="material-icons">create</i>
                            Add Note 
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (note) => dispatch(createProject(note))
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(CreateProject)
