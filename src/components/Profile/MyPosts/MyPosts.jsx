import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post.jsx';
import {addPostActionCreator} from './../../../redux/state.js';
import {updateNewPostTextActionCreator} from './../../../redux/state.js';

/* let addPostActionCreator = (text) => {
    return {
        type: 'ADD-POST',
        postMessage: text
    }
}

let updateNewPostTextActionCreator = (text) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    }
} */

const MyPosts = (props) => {
    
    {/*Преобразуем массив объектов в массив jsx элементов*/}
    let postsElements = props.postData.map( (post) => {
        return(
            <Post message={post.message} count={post.count} />
        )
    });

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        /* props.addPost(text);
        props.updateNewPostText(''); */
        /* props.dispatch({type: 'ADD-POST', postMessage: text}); */
        props.dispatch(addPostActionCreator(text));
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        /* props.updateNewPostText(text); */
        /* props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text}); */
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        
            <div className={styles["posts-block"]}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                    </div>
                    <div>
                        <button onClick={ addPost }>Add post</button>
                    </div>
                    <div>
                        <button>Remove</button>
                    </div>  
                </div>
                <div className={styles.posts}>
                    
                    {postsElements}

                    {/*<Post message={postData[0].message} count={postData[0].count} />
                    <Post message={postData[1].message} count={postData[1].count} />*/}
                </div>
            </div>
        
    )
}

export default MyPosts;