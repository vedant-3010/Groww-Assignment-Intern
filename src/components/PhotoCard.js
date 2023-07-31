import React from 'react';
import Link from 'next/link';
import styles from '../styles/PhotoCard.module.css';
const PhotoCard = ({ photo }) => {
  const { id, urls, user, likes, downloads, location, alt_description } = photo;

  return (
    <div className={styles.photocard}>
      <div className={styles.userinfo}>
        <img
          src={user.profile_image.small}
          alt={user.name}
          className={styles.avatar}
        />
        <div className={styles.usernamelocation}>
          <p className={styles.username}>
            <Link legacyBehavior href={`/user/${user.username}`} passHref>
              <a>{user.name}</a>
            </Link>
          </p>
          <p className={styles.location}>
            {location ? location.name : 'Unknown'}
          </p>
        </div>
      </div>
        <img src={urls.regular} alt={alt_description} className={styles.postimage} />
      <div className={styles.urls}>
        <p>Other sizes: </p>
        <a href={urls.small} target="_blank" rel="noopener noreferrer">
          Small Image
        </a>
        <a href={urls.regular} target="_blank" rel="noopener noreferrer">
          Regular Image
        </a>
        <p>
          <a href={urls.full} target="_blank" rel="noopener noreferrer">
            Full Image
          </a>
        </p>
      </div>
      <div className={styles.photoinfo}>
        <div className={styles.likes}>
          <span className={styles.hearticon}>&#x2764;</span>
          <span>{likes}</span>
        </div>
        <div className={styles.downloads}>
          <span className={styles.downloadicon}>&#x2B07;</span>
          <span>{downloads}</span>
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
