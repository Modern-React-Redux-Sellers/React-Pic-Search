import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import searchImages from "./api";
import {useState} from "react";

const App = () => {
    //used to pass results from search as a prop
    const [images, setImages] = useState([]);

    const handleSubmit = async (term) => {
       const results = await searchImages(term); //Returns a Promise, must be async/await
        console.log(results)
        setImages(results) //sets images array to returned array from api search
    }

    //onSubmit prop passed to SearchBar with value of handleSubmit function
    //ImageList is passed an array of images after search submitted
    return (
        <div>
            <SearchBar onSubmit={handleSubmit}/>
            <ImageList images={images}/>
        </div>
    )
}

export default App;