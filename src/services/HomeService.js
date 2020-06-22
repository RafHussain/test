import axios from 'axios';
import { baseURL } from '../config';

class HomeService {
  async getBreed(breed) {
    const { data } = await axios.get(
      `${baseURL}api/breed/${breed}/images/random`,
    );
    return data;
  }

  async getRandomBreed() {
    const { data } = await axios.get(
      `${baseURL}api/breeds/image/random`,
    );
    return data;
  }
}

export default HomeService;
