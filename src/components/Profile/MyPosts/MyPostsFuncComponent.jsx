import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post.jsx';


const MyPosts = (props) => {
    
    {/*Преобразуем массив объектов в массив jsx элементов*/}
    let postsElements = props.posts.map( (post) => {
        return(
            <Post message={post.message} count={post.count} />
        )
    });

    let newPostElement = React.createRef();

    let onAddPost = () => {
        let text = newPostElement.current.value;
/*         props.addPost(text);
        props.updateNewPostText('');
        props.dispatch({type: 'ADD-POST', postMessage: text}); */
        props.addPost(text);
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        /* props.updateNewPostText(text); */
        /* props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text}); */
        //Прокинули функцию из MyPostsContainer.jsx
        props.updateNewPostText(text);
    }

    return (
        
            <div className={styles["posts-block"]}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                    </div>
                    <div>
                        <button onClick={ onAddPost }>Add post</button>
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