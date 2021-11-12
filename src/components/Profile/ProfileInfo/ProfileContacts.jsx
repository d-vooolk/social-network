import profileInfoStyle from "./ProfileInfo.module.css";
import React from "react";

const Contacts = ({contactTitle, contactValue}) => {
    return <div>
        <b className={profileInfoStyle.contacts}>{contactTitle} : {contactValue}</b>
    </div>
}

export default Contacts;