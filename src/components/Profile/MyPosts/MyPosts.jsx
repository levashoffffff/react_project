import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post.jsx';
import { reduxForm, Field } from 'redux-form';
import { requiredField, maxLengthCreator } from '../../../utils/validators/validators.js';
import { Textarea } from '../../common/FormsControls/FormsControls.js';

const maxLength10 = maxLengthCreator(10);

class MyPosts extends React.Component {

    constructor(props) {
        super(props);
        this.newPostElement = React.createRef();
    }

    /*Преобразуем массив объектов в массив jsx элементов*/
    postsElements = () => {
        return (
            this.props.posts.map((post) => {
                return (
                    <Post message={post.message} count={post.count} />
                )
            })
        )
    }

    onAddPost = (values) => {
        /* this.text = this.newPostElement.current.value;
        this.props.addPost(this.text); */
        this.props.addPost(values.newPostText);
    }

    /* onPostChange = () => {
        this.text = this.newPostElement.current.value;
        this.props.updateNewPostText(this.text);
    } */

    render() {

        return (
            <div className={styles["posts-block"]}>
                <h3>My posts</h3>
                <AddNewPostFormRedux onSubmit={this.onAddPost}/>
                {/* <form>
                    <div>
                        <textarea onChange={this.onPostChange} ref={this.newPostElement} value={this.props.newPostText} />
                    </div>
                    <div>
                        <button onClick={this.onAddPost}>Add post</button>
                    </div>
                    <div>
                        <button>Remove</button>
                    </div>
                </form> */}
                <div className={styles.posts}>

                    {this.postsElements()}

                </div>
            </div>
        )
    }
}

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="newPostText" validate={[requiredField, maxLength10]} placeholder="Post message"/>
                {/* <Field component="textarea" name="newPostText" validate={[requiredField, maxLength10]} /> */}
                {/* <textarea onChange={this.onPostChange} ref={this.newPostElement} value={this.props.newPostText} /> */}
            </div>
            <div>
                {/* <button onClick={this.onAddPost}>Add post</button> */}
                <button>Add post</button>
            </div>
        </form>
    )
}

let AddNewPostFormRedux = reduxForm({
    form: "ProfileAddNewPostForm"
})(AddNewPostForm)

export default MyPosts;