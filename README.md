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

Redux Store
-----------

### NewsFeedSlice

It holds the Random photos fetched from the Unsplash API and cache the data for 3 minutes.

### ProfileSlice

It holds the fetchUserProfile response from the Unsplash API and photos of the selected user.
