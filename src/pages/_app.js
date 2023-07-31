import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import '../styles/globals.css';
import Navbar from '@/components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className='main'>
        <div className='gradient' />
      </div>
      <Navbar />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
