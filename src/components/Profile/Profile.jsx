import MyPosts from './MyPosts/MyPosts.jsx';
import styles from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';


const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            
            <MyPosts
             postData={props.state.postData} 
             newPostText={props.state.newPostText}
             addPost={props.addPost}
             updateNewPostText={props.updateNewPostText} />      
      </div>
    )
}

export default Profile;