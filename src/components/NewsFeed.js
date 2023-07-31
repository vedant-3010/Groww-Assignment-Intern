import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PhotoCard from './PhotoCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import LoadingSpinner from './LoadingSpinner';
import styles from '../styles/NewsFeed.module.css';
import { fetchRandomPhotos, selectIsDataCached } from '../redux/newsFeedSlice';
const NewsFeed = () => {
  const dispatch = useDispatch();
  const { photos, loading, error, nextPage } = useSelector((state) => state.newsFeed);

  useEffect(() => {
    dispatch(fetchRandomPhotos(nextPage));
  }, [dispatch, nextPage]);

  const fetchMorePhotos = () => {
    dispatch(fetchRandomPhotos(nextPage));
  };

  return (
    <div className={styles.newsFeedContainer}>

      <div>
        {photos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>

      <InfiniteScroll
        dataLength={photos.length}
        next={fetchMorePhotos}
        hasMore={!loading && !error}
        loader={<LoadingSpinner />}
      >
        {photos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </InfiniteScroll>


      {loading && <LoadingSpinner />}

      {error && (
        <p>
          {error.response?.status === 403
            ? 'API rate limit reached. Please try again later.'
            : 'Error occurred while fetching photos.'}
        </p>
      )}
    </div>
  );
};

export default NewsFeed;
