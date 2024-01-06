
const SearchBar = ({onSubmit}) => {
const handleClick = () => {
    let userText = document.querySelector("input").value;
    onSubmit(userText)
}


    return (
        <div>
            <input type="text"/>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default SearchBar;