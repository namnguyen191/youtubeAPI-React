import axios from 'axios';

const KEY = 'AIzaSyAFknEozZqY-R0fif5AdYPCwJI8PX5bOvM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});