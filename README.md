# GrowwMedia App [Website](https://groww-assignment-intern.vercel.app/):

The GrowwMedia App is a React application that allows users to search for photos using the Unsplash API and display them in a gallery format. Users can also view the details of a selected photo and toggle between light and dark themes.

## Features

- Display photos in a gallery format
- Get small, regular, large image link in the post.
- View Profile page of the selected user
- Toggle between light and dark themes
- Cache the Photos
- Infinite Scroll
- Grid View and List View in Profile page


Usage
-----

To start the development server and run the app:

`npm run dev`

The app will be accessible at `http://localhost:3000`.

ScreenShots
----------

### ProfilePage  

![WhatsApp Image 2023-07-31 at 4 22 42 PM](https://github.com/vedant-3010/Groww-Assignment-Intern/assets/92071471/f82a4845-c4e5-4f22-962a-e79b305177e1)

### HomePage(NewsFeed)  
![WhatsApp Image 2023-07-31 at 4 23 27 PM](https://github.com/vedant-3010/Groww-Assignment-Intern/assets/92071471/87d9fda9-de5d-4bf4-ae91-21114f0653f7)

### DarkMode  

![WhatsApp Image 2023-07-31 at 4 23 11 PM](https://github.com/vedant-3010/Groww-Assignment-Intern/assets/92071471/aa79966a-4e82-4680-9abf-e280eaf366b2)

Redux Store
-----------

### NewsFeedSlice

It holds the Random photos fetched from the Unsplash API and cache the data for 3 minutes.

### ProfileSlice

It holds the fetchUserProfile response from the Unsplash API and photos of the selected user.
