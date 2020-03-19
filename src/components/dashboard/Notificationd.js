import React from "react";
import moment from "moment";

const Notification = (props) => {
    const {notifications} = props;
    return (
        <div className="notification section">
            <div className="card">
                <div className="card-title center">Notifications</div>
                <div className="card-content">
                    <ul className="notifications">
                        {notifications && notifications.map(notification => {
                            return (
                                <li key={notification.id}>
                                    <span className="red-text">{notification.user}</span>
                                    <span> {notification.content}</span>
                                    <div>
                                        {moment(notification.time.toDate()).fromNow()}
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Notification;