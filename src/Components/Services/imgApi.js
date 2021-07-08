import axios from 'axios';

const fetchImgWithQuery = (searchQuery, page) => {
    return axios
        .get(`https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=22355356-a5efa6707afd0b81919f5aa7a&image_type=photo&orientation=horizontal&per_page=12`)
        .then(response => response.data.hits);
}

export default {
    fetchImgWithQuery,  
}