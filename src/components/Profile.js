import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile } from '../redux/profileSlice';
import UserPhotos from './UserPhotos';
import styles from '../styles/Profile.module.css'; // Import the CSS module for styling

const Profile = ({ username }) => {
  const dispatch = useDispatch();
  const [gridView, setGridView] = useState(true);

  const user = useSelector((state) => state.profile.user);
  const photos = useSelector((state) => state.profile.photos);

  useEffect(() => {
    dispatch(fetchUserProfile(username));
  }, [dispatch, username]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.profile}>
      <div className={styles.userInfo}>
        <img
          src={user.profile_image.large} // Assuming you have the URL for large profile image
          alt={user.name}
          className={styles.avatar}
        />
        <div className={styles.userDetails}>
          <h2>{user.name}</h2>
          <div className={styles.stats}>
            <div className={styles.userTab}>
              <b>{user.total_photos}</b><span>Photos</span>
            </div>
            <div className={styles.userTab}>
              <b>{user.followers_count}</b><span>Followers</span>
            </div>
            <div className={styles.userTab}>
              <b>{user.following_count}</b><span>Following</span>
            </div>
          </div>
          <p className={styles.username}>{user.username}</p>
          <p className={styles.bio}>{user.bio}</p>
          <p className={styles.location}>{user.location}</p>

        </div>
      </div>
      <div className={styles.buttons}>
        <button
          className={`${styles.gridButton} ${gridView ? styles.activeButton : ''
            }`}
          onClick={() => setGridView(true)}
        >
          <span className={styles.instagramIcon} />
          Grid View
        </button>
        <button
          className={`${styles.listButton} ${!gridView ? styles.activeButton : ''
            }`}
          onClick={() => setGridView(false)}
        >
          <span className={styles.instagramIcon} />
          List View
        </button>
      </div>

      {/* Display user photos */}
      <UserPhotos photos={photos} gridView={gridView} />
    </div>
  );
};

export default Profile;
