import styles from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>

            <div className={styles.content}>
                <img src="https://www.trn-news.ru/Ru/Upload/Image/hong-kong-skyline-view.jpg" />
            </div>
            <div className={styles["description-block"]}>
                ava + desc
            </div>
                 
        </div>
    )
}

export default ProfileInfo;