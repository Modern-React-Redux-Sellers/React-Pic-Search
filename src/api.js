import axios from "axios";
import keys from "./keys";

const searchImages = async () => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers:{
            Authorization: `Client-ID ${keys.unsplashKey}`
        },
        params:{
            query:'cars'
        }
    });
    console.log(response)
    return response;
};

export default searchImages;