// pages/index.js
import React from 'react';
import NewsFeed from '../components/NewsFeed';

const HomePage = () => {
  return (
    <div>
      <h1>Unsplash App</h1>
      <NewsFeed />
    </div>
  );
};

export default HomePage;
