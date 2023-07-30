// lib/unsplash.js
const UNSPLASH_API_KEY = 'QnAJ_PJE0cJQPm7z1eLB0Is9kOp_rIOI4jXnnnh_THs';

export async function getRandomPhotos(page = 1, perPage = 10) {
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?page=${page}&per_page=${perPage}&client_id=${UNSPLASH_API_KEY}`
    );

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json(); // Extract JSON data from the response
    return data;
  } catch (error) {
    console.error('Error fetching random photos:', error);
    throw error;
  }
}

// Rest of the code remains the same...
