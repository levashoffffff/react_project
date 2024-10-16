import styles from './MyPosts.module.css'
import Post from './Post/Post.jsx';

const MyPosts = () => {

    let postData = [
        {id: 1, message: 'Hi, how are you', count: 15},
        {id: 2, message: 'It s my first post', count: 20}
    ];

    let postsElements = postData.map( (post) => {
        return(
            <Post message={post.message} count={post.count} />
        )
    });

    return (
        
            <div className={styles["posts-block"]}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Add post</button>
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