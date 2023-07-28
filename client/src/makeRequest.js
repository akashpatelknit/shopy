import axios from 'axios';
export const makeRequest = axios.create({
  baseURL: `http://localhost:1337/api`,
  headers: {
    Authorization:
      'bearer' +
      '32dbe4f85471dbb4eb5487507bd2315913f60530c2007cc5087d1cdf99f690049e8debba5bfa931add5e2290ad8a79e5c2232ab2ec0b5da2f556f5969c639b55af0bd2858916665c3821e0dd938b9579cfbdd2d6644bc967e8a9112789c05faeedd5645b9e8939019f4e72811dce5532de652387c9a3e51e2b66dc5e641e946e',
  },
});
