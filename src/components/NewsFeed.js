import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PhotoCard from './PhotoCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import LoadingSpinner from './LoadingSpinner';
import styles from '../styles/NewsFeed.module.css';
import { fetchRandomPhotos } from '../redux/newsFeedSlice';

const NewsFeed = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const photos = useSelector((state) => state.newsFeed.photos);
  const hasMore = useSelector((state) => state.newsFeed.hasMore);
  const loading = useSelector((state) => state.newsFeed.loading);
  const error = useSelector((state) => state.newsFeed.error);

  const fetchMorePhotos = () => {
    // Fetch more photos only if there are more to load (hasMore is true) and not loading
    if (!loading && hasMore) {
      dispatch(fetchRandomPhotos(page));
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    // Initial fetch
    dispatch(fetchRandomPhotos(page));
  }, [dispatch]);

  return (
    <div className={styles.newsFeedContainer}>
      <InfiniteScroll
        dataLength={photos.length}
        next={fetchMorePhotos}
        hasMore={hasMore}
        loader={<LoadingSpinner />}
        endMessage={<p>No more photos to load</p>}
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
