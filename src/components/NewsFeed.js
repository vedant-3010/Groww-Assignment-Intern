// components/NewsFeed.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomPhotos } from '../redux/newsFeedSlice';
import PhotoCard from './PhotoCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import LoadingSpinner from './LoadingSpinner';
import styles from '../styles/NewsFeed.module.css';

const NewsFeed = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const photos = useSelector((state) => state.newsFeed.photos);
  const hasMore = useSelector((state) => state.newsFeed.hasMore);
  const loading = useSelector((state) => state.newsFeed.loading);
  const error = useSelector((state) => state.newsFeed.error);
  useEffect(() => {
    dispatch(fetchRandomPhotos(page));
  }, [dispatch, page]);

  const fetchMorePhotos = () => {
    setPage(page + 1);
  };

  return (
    <div className={styles.newsFeedContainer}>
      <InfiniteScroll
        dataLength={photos.length}
        next={fetchMorePhotos}
        hasMore={hasMore}
        loader={<LoadingSpinner />} // Use the LoadingSpinner component here
        endMessage={<p>No more photos to load</p>}
      >
        {photos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </InfiniteScroll>

      {error && <p>Error occurred while fetching photos.</p>}
    </div>
  );
};

export default NewsFeed;
