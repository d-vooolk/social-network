import postStyle from './Post.module.css';
import React from 'react';

const Post = (props) => {
    return (
        <div className={postStyle.post}>
            <div> {props.message} </div>
            <div> {'likes: ' + props.likesCount} </div>
        </div>
    );
}

export default Post;