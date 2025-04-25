import MyPosts from './MyPosts/MyPosts.jsx';
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx';
import styles from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';


const Profile = (props) => {

    return (
        <div>
            <ProfileInfo 
            profile={props.profile} 
            status={props.status}
            updateStatus={props.updateStatus}
            />

            {/* <MyPosts
             postData={props.state.postData} 
             newPostText={props.state.newPostText}
             addPost={props.addPost}
             updateNewPostText={props.updateNewPostText} /> */}
            {/* <MyPosts
             postData={props.state.postData} 
             newPostText={props.state.newPostText}
             dispatch={props.dispatch} /> */}
            <MyPostsContainer
                store={props.store} />
        </div>
    )
}

export default Profile;