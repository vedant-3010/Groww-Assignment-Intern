import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PhotoCard from './PhotoCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import LoadingSpinner from './LoadingSpinner';
import styles from '../styles/NewsFeed.module.css';
import { fetchRandomPhotos, selectIsDataCached } from '../redux/newsFeedSlice';
const NewsFeed = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const photos = useSelector((state) => state.newsFeed.photos);
  const hasMore = useSelector((state) => state.newsFeed.hasMore);
  const loading = useSelector((state) => state.newsFeed.loading);
  const error = useSelector((state) => state.newsFeed.error);

  // Check if data is cached
  const isDataCached = useSelector(selectIsDataCached);

  useEffect(() => {
    // Fetch data only if not cached
    if (!isDataCached) {
      dispatch(fetchRandomPhotos(page));
    }
  }, [dispatch, page, isDataCached]);

  const fetchMorePhotos = () => {
    setPage(page + 1);
  };

  return (
    <div className={styles.newsFeedContainer}>
      {isDataCached ? (
        // Render photos from the Redux state if data is cached
        <div>
          {photos.map((photo) => (
            <PhotoCard key={photo.id} photo={photo} />
          ))}
        </div>
      ) : (
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

      )}

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
