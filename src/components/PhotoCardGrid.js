// components/PhotoCardGrid.js
import React from 'react';
import styles from '../styles/PhotoCardGrid.module.css'; // Import the CSS module for styling

const PhotoCardGrid = ({ photo }) => {
    const { urls, alt_description } = photo;

    return (
        <div className={styles.photoCard}>
            <img src={urls.regular} alt={alt_description} className={styles.postImage} />

            <p className={styles.imageDescription}>{alt_description}</p>
        </div>
    );
};

export default PhotoCardGrid;
