import Post from './Post/Post';
import style from './MyPosts.module.css';
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";


const MyPosts = React.memo((props) => {

    let postsElements = props.posts.map(post =>
        <Post message={post.message} key={post.id} likesCount={post.likesCount}/>)

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }


    return (
        <div>
            <h3>my posts</h3>
            <NewPostMessageRedux onSubmit={onAddPost}/>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    );
})

const maxLength100 = maxLengthCreator(100);

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    name={'newPostText'}
                    validate={[required, maxLength100]}
                    placeholder={'Post message'}
                />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const NewPostMessageRedux = reduxForm({
    form: 'ProfileAddNewPostForm'
})(AddNewPostForm);

export default MyPosts;