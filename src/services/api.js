import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '30563823-6c3f13d072854be17d7816287';
const IMAGES_PER_PAGE = 12;
axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: IMAGES_PER_PAGE,
};

export const getImages = async (query, page) => {
  const config = {
    params: {
      q: query,
      page: page,
    },
  };
  const response = await axios.get('', config);

  return response.data;
};
