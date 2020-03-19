import React, { Component } from 'react'
import { connect } from "react-redux"
import { Redirect } from 'react-router-dom';
import onlineNoteLogo from "../../images/online-note-logo.png"

class FrontPage extends Component {
    render() {
        //styles
        const titleStyle={
            margin: "28vh auto 0 auto",
            fontFamily: "Courier,Cursive,Charcoal,sans-serif",
        }
        const titleOnlineNote={
            fontFamily: "Tangerine,Frosty,Garamond",
            fontSize: "78px",
            textShadow: "4px 4px 4px #aaa",
        }
        const footerStyle={
            marginTop: "auto",
            position: "fixed"
        }

        const {auth} = this.props;
        if(auth.uid) return <Redirect to="/dashboard" />
        return (
            <div style={titleStyle} className="container center">
                <div className="row">
                    <h2 className="col m12 s12">Welcome To <span style={titleOnlineNote}>OnlineNote</span></h2>
                </div>
                
                <div className="container center-align" style={footerStyle}>&copy; Made By Yuhiaht 2020</div>
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(FrontPage)
