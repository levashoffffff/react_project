import React from 'react';
import MyPosts from './MyPosts.jsx'
import { addPostActionCreator, updateNewPostTextActionCreator } from './../../../redux/profile-reducer.js';

const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let addPost = (text) => {
        let action = addPostActionCreator(text);
        /* let text = newPostElement.current.value; */
        props.store.dispatch(action);
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }

    return (

        <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            posts={state.profilePage.postData}
            newPostText={state.profilePage.newPostText} />

    )
}

export default MyPostsContainer;