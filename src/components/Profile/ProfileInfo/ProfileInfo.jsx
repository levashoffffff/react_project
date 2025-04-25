import Preloader from '../../common/Preloader/Preloader';
import styles from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWidthHook';


const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    }
    return (
        <div>

            {/* <div className={styles.content}>
                <img src="https://www.trn-news.ru/Ru/Upload/Image/hong-kong-skyline-view.jpg" />
            </div> */}
            <div className={styles["description-block"]}>
                <img src={props.profile.photos.large} />
                {/* <ProfileStatus status={props.status} updateStatus={props.updateStatus}/> */}
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
                 
        </div>
    )
}

export default ProfileInfo;