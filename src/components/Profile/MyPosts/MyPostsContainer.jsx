import MyPosts from './MyPosts.jsx'
import { addPostActionCreator, updateNewPostTextActionCreator } from './../../../redux/profile-reducer.js';
import {connect} from 'react-redux';


/* const MyPostsContainer = (props) => {

    //let state = props.store.getState();

    let addPost = (text) => {
        let action = addPostActionCreator(text);
        /* let text = newPostElement.current.value; 
        props.store.dispatch(action);
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }

    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();
                return (
                    <MyPosts
                        updateNewPostText={onPostChange}
                        addPost={addPost}
                        posts={state.profilePage.postData}
                        newPostText={state.profilePage.newPostText} />
                )
            }
            }
        </StoreContext.Consumer>
        /* <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            posts={state.profilePage.postData}
            newPostText={state.profilePage.newPostText} /> 

    )
} */

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        /* updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        }, */
        addPost: (newPostText) => {
            let action = addPostActionCreator(newPostText);
            dispatch(action);
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;