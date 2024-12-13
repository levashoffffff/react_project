import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post.jsx';

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

    onAddPost = () => {
        this.text = this.newPostElement.current.value;
        this.props.addPost(this.text);
    }

    onPostChange = () => {
        this.text = this.newPostElement.current.value;
        this.props.updateNewPostText(this.text);
    }

    render() {
        return (
            <div className={styles["posts-block"]}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea onChange={this.onPostChange} ref={this.newPostElement} value={this.props.newPostText} />
                    </div>
                    <div>
                        <button onClick={this.onAddPost}>Add post</button>
                    </div>
                    <div>
                        <button>Remove</button>
                    </div>
                </div>
                <div className={styles.posts}>

                    {this.postsElements()}

                </div>
            </div>
        )
    }
}

export default MyPosts;