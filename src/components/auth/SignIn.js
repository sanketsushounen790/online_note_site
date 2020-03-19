import React, { Component } from 'react'
import { connect } from "react-redux"
import { signIn } from "../../store/actions/authAction"
import { Redirect } from "react-router-dom"


class SignIn extends Component  {
    state = {
        "email": "",
        "password": ""
    }
    handleChange= (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit= (e) => {
        e.preventDefault();
        this.props.signIn(this.state)
    }
    render() {
        const {authError, auth}=this.props;
        if(auth.uid) {return <Redirect to="/dashboard" />}
        else {
            return (
                <div className="container form-container">
                    <form className="white z-depth-5" onSubmit={this.handleSubmit}>
                        <h4>Log In</h4>
                        <div className="input-field">
                            <i className="material-icons prefix">email</i>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" onChange={this.handleChange} autoComplete="on"/>
                        </div>
                        <div className="input-field">
                            <i className="material-icons prefix">lock</i>
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" onChange={this.handleChange} autoComplete="on"/>                         
                        </div>
                        <div className="input-field center-align">
                            <button className="btn purple lighten-3 waves-effect waves-light">Login
                                <i className="material-icons">pets</i>
                            </button>
                        </div>
                        <div className="container red-text accent-2 center">
                            {authError ? <p>{authError}</p>:null}
                        </div>
                    </form>
                </div>
            )
        }
    }
}
const mapStateToProps = (state) =>{
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
} 
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
