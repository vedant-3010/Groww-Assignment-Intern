// components/UserPhotos.js
import React, { useState } from 'react';
import PhotoCard from './PhotoCard';

const UserPhotos = ({ photos, gridView }) => {
  return (
    <div>
      {gridView ? (
        <div>
          {photos.map((photo) => (
            <PhotoCard key={photo.id} photo={photo} />
          ))}
        </div>
      ) : (
        <ul>
          {photos.map((photo) => (
            <li key={photo.id}>{photo.description}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserPhotos;
