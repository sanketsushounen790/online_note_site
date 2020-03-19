import React from "react";
import { NavLink } from "react-router-dom";
import {SideNav} from "react-materialize";


const SignedOutLinks = () => {
    const titleStyle={
        fontSize: "20px",
    }
    return (
        <div>
            <ul className="right hide-on-med-and-down">
                <li><NavLink to="/signin"><span style={titleStyle}>Log In</span></NavLink></li>
                <li><NavLink to="/signup"><span style={titleStyle}>Sign Up</span></NavLink></li>
            </ul>
            
            <SideNav  trigger={<a href="#"><i className="material-icons hide-on-large-only">menu</i></a>} options={{ closeOnClick: true }}>
                <ul>
                    <li><NavLink to="/signin"><span style={titleStyle}>Log In</span></NavLink></li>
                    <li><NavLink to="/signup"><span style={titleStyle}>Sign Up</span></NavLink></li>
                </ul>
            </SideNav>
        </div>
        
        
    );   
}

export default SignedOutLinks;