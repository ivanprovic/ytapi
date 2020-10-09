import axios from 'axios';
//caps letters because it's a constant
//value which should not be changed
const KEY = 'AIzaSyDuQ1DOzWjNfDxnM_XYud8GPj7ZHQ0ag6w';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY, 
    }
});

