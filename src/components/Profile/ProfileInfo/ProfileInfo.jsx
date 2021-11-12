import profileInfoStyle from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWIthHooks";
import React, {useState} from 'react';
import userPhoto from '../../../img/header-image.svg';
import ProfileData from "./ProfileData";
import ProfileDataForm from "./ProfileDataForm";

function ProfileInfo({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
         saveProfile(formData).then(() => {
             setEditMode(false);
         })
    }

    return (
        <div>
            <img src={profile.photos.large || userPhoto} className={profileInfoStyle.avatar}/>
            {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}

            {editMode
                ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => {
                    setEditMode(true)
                }}/>
            }

            <div className={profileInfoStyle.descriptionBlock}>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}


export default ProfileInfo;