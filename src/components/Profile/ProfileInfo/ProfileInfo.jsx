import profileInfoStyle from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

function ProfileInfo(props) {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <img src={props.profile.photos.large}/>
            <div className={profileInfoStyle.descriptionBlock}>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;