import React from "react";
import { NavLink } from "react-router-dom";
import {connect} from "react-redux";
import {signOut} from "../../store/actions/authAction";
import {Modal} from "react-materialize";
import {SideNav} from "react-materialize";

const SignedInLinks = (props) => {
    return (
        <div>
            <ul className="right hide-on-med-and-down">
                <li><NavLink to="/create-note">Create New Note</NavLink></li>
                <li><a onClick={props.signOut}>Log Out</a></li>
                <li id="account-info-modal">
                    <Modal className="center" header="Account Info" trigger={<a to="/" className="btn btn-floating">{props.profile.initials}</a>}>
                            <h5>LOGGED IN AT <span className="red-text accent-2">{props.profile.firstName} {props.profile.lastName}</span></h5>
                            <h5 className="red-text accent-2">{props.auth.email}</h5>
                    </Modal>
                </li> 
            </ul>
            <SideNav  trigger={<a href="#"><i className="material-icons hide-on-large-only">menu</i></a>} options={{ closeOnClick: true }}>
                <ul>
                    <li><NavLink to="/create-note">Create New Note</NavLink></li>
                    <li><a onClick={props.signOut}>Log Out</a></li>
                    <li id="account-info-modal">
                        <Modal className="center" header="Account Info" trigger={<a to="/" className="btn btn-floating">{props.profile.initials}</a>}>
                            <h5>LOGGED IN AT <span className="red-text accent-2">{props.profile.firstName} {props.profile.lastName}</span></h5>
                            <h5 className="red-text accent-2">{props.auth.email}</h5>
                        </Modal>
                    </li> 
                </ul>
            </SideNav>
        </div>
    );   
}

const mapDispatchToProps = (dispatch) =>{
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);