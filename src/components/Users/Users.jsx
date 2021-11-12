import styles from "./Users.module.css";
import userPhoto from "../../assets/images/header-avatar.svg";
import React from "react";
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({
                 currentPage, onPageChanged, totalUsersCount, pageSize, users, followingInProgress,
                 unfollow, follow, ...props
             }) => {

    return (
        <div>

            <Paginator
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
            />

            <div>
            {
            users.map(user => <User
            key={user.id}
            user={user}
            followingInProgress={followingInProgress}
            unfollow={unfollow}
            follow={follow}
            />)
            }
            </div>

        </div>
    )
}

export default Users;