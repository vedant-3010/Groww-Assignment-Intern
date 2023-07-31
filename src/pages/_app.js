import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import '../styles/globals.css';
import Navbar from '@/components/Navbar';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  // Initial theme is light
  const [theme, setTheme] = useState('light');


  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Provider store={store}>
      <div className={`main ${theme === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <div className='gradient' />
      </div>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Component {...pageProps} />

    </Provider>
  );
}

export default MyApp;
