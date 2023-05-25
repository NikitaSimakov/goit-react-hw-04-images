const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '34692070-b05e0f04a1e41f744928729e6';
export const getSearchImages = async (searchQuery, page) => {
  try {
    const response = await fetch(
      `${BASE_URL}/?q=${searchQuery}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12&page=${page}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
