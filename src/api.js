import axios from "axios";
import keys from "./keys";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers:{
            Authorization: `Client-ID ${keys.unsplashKey}`
        },
        params:{
            query: term
        }
    });
    console.log(response.data.results)
    return response.data.results;
};

export default searchImages;