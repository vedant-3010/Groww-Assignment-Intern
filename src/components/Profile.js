// components/Profile.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile } from '../redux/profileSlice';
import UserPhotos from './UserPhotos';

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
    <div>
      <h2>Profile</h2>
      <p>Username: {user.username}</p>
      {/* Add a button to switch between grid and list views */}
      <button onClick={() => setGridView(true)}>Grid View</button>
      <button onClick={() => setGridView(false)}>List View</button>

      {/* Display user photos */}
      <UserPhotos photos={photos} gridView={gridView} />
    </div>
  );
};

export default Profile;
