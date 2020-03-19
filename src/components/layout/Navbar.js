import React from "react";
import { Link } from 'react-router-dom';
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignOutLinks";
import { connect } from "react-redux"


const Navbar = (props) => {
    //style
    const titleOnlineNote={
        fontFamily: "Tangerine,Frosty,Garamond",
        fontSize: "38px",
        textShadow: "4px 4px 4px #aaa",
    }

    const {auth, profile} = props;
    //console.log(auth)
    const links = auth.uid ? <SignedInLinks profile={profile} auth={auth}/> : <SignedOutLinks />
    return (
        <nav className="nav-wrapper purple lighten-3">
            <div className="container">
                <Link to="/" className="brand-logo" id="brand-logo">  
                    <i className="material-icons prefix" style={{"fontSize": "38px"}}>event_note</i>
                    <span style={titleOnlineNote}>OnlineNote</span>
                </Link>
                {auth.isLoaded && 
                    links
                }
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);