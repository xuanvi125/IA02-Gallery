const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;
export async function getPhotos(page = 1) {
  const response = await fetch(
    `${API_URL}/photos?client_id=${API_KEY}&page=${page}&per_page=9`
  );
  return await response.json();
}

export async function getPhoto(id) {
  const response = await fetch(`${API_URL}/photos/${id}?client_id=${API_KEY}`);
  return await response.json();
}
