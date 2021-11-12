import React from 'react';
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import styles from './ProfileInfo.module.css';

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {
                error && <div>
                    {error}
                </div>
            }
            <div>
                <button>save</button>
            </div>
            <div>
                <b>Full name: </b> {createField('Full name', 'fullName', Input, [])}
            </div>
            <div>
                <b>Looking for a job:</b> {createField('', 'lookingForAJob', Input, [], {type: 'checkbox'})}
            </div>
            <div>
                <b>My professionals skills:</b> {createField('My professionals skills', 'lookingForAJobDescription', Textarea, [])}
            </div>
            <div>
                <b>About me: </b> {createField('About me', 'aboutMe', Textarea, [])}
            </div>
            <div>
                <b>Contacts: </b> {Object.keys(profile.contacts).map(key => {
                return <div key={key} className={styles.contacts}>
                    <b>{key}: {createField(key, 'contacts.' + key, Input, [])}</b>
                </div>
            })}
            </div>
        </form>
    )
}

const ProfileDataReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataReduxForm;