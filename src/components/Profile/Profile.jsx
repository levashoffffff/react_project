import MyPosts from './MyPosts/MyPosts.jsx';
import styles from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';


const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            
            <MyPosts/>      
      </div>
    )
}

export default Profile;