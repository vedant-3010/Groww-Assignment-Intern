// lib/unsplash.js
const UNSPLASH_API_KEY = process.env.NEXT_PUBLIC_UNSPLASH_API_KEY;

export async function getRandomPhotos(page = 1, perPage = 10) {
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?page=${page}&per_page=${perPage}&client_id=${UNSPLASH_API_KEY}`
    );

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching random photos:', error);
    throw error;
  }
}

