// components/PhotoCard.js
import React from 'react';
import Link from 'next/link';

const PhotoCard = ({ photo }) => {
  const { id, urls, user, likes } = photo;

  return (
    <div>
      <img src={urls.small} alt={user.name} />
      <p>
        {/* Wrap the anchor tag within the Link component */}
        <Link legacyBehavior href={`/user/${user.username}`} passHref>
          <a>{user.name}</a>
        </Link>
      </p>
      <p>Likes: {likes}</p>
      
    </div>
  );
};

export default PhotoCard;
