import {useState} from "react";

const SearchBar = ({onSubmit}) => {
    const [input, setInput] = useState('');

    const handleInputChange = (e) => {
        setInput(e.target.value);
        //changes value of input to value pulled from event in searchbar
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(input)
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input onChange={handleInputChange} value={input}/>
            {/*Passes value of input from state to value*/}
            </form>
        </div>
    )
}

export default SearchBar;