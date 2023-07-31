import React from 'react';
import PhotoCard from './PhotoCard';
import styles from '../styles/UserPhotos.module.css';
import PhotoCardGrid from './PhotoCardGrid';

const UserPhotos = ({ photos, gridView }) => {

  return (
    <div className={styles.userPhotos}>
      {gridView ? (
        <div className={styles.gridContainer}>
          {photos.map((photo) => (
            <PhotoCardGrid key={photo.id} photo={photo} />
          ))}
        </div>
      ) : (
        <ul className={styles.listContainer}>
          {photos.map((photo) => (
            <PhotoCard key={photo.id} photo={photo} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserPhotos;
