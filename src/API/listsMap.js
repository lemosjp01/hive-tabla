import axios from 'axios';

const LISTS_API_URL = 'https://jsonplaceholder.typicode.com/todos';

const listMap = {
  getList: () => {
    const requestURL = `${LISTS_API_URL}`;

    return axios
      .get(requestURL)
      .then(res => res)
      .catch((err) => {
        console.log(err);
      });
  },
};

export default listMap;
