import MyPosts from './MyPosts/MyPosts.jsx';
import styles from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';


const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            
            <MyPosts postData={props.postData}/>      
      </div>
    )
}

export default Profile;