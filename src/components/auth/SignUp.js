import React, { Component } from 'react'
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { signUp } from "../../store/actions/authAction"

class SignUp extends Component  {
    state = {
        "email": "",
        "password": "",
        "firstName": "",
        "lastName": "",
    }
    handleChange= (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit= (e) => {
        e.preventDefault();
        this.props.signUp(this.state);
    }
    render() {
        const {auth, authError}=this.props;
        if(auth.uid) {return <Redirect to="/dashboard" />}
        else {
            return (
                <div className="container form-container">
                    <form className="white z-depth-5" onSubmit={this.handleSubmit}>
                        <h4>Sign Up</h4>
                        <div className="input-field">
                            <i class="material-icons prefix">account_circle</i>
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" id="firstName" onChange={this.handleChange} autoComplete="on"/>
                        </div>
                        <div className="input-field">
                            <i className="material-icons prefix">supervised_user_circle</i>
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" id="lastName" onChange={this.handleChange} autoComplete="on"/>
                        </div>
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
                            <button className="btn purple lighten-3 waves-effect waves-light">Sign Up
                                <i className="material-icons">touch_app</i>
                            </button>
                        </div>
                        <div className="container center red-text accent-2">
                            {authError ? <p>{authError}</p> : null}
                        </div>
                    </form>
                </div>
            )
        } 
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}
const mapDispatchToProps =(dispatch) => {
    return {
        signUp : (newUser) => dispatch(signUp(newUser))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
