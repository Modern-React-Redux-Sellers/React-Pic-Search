
const SearchBar = ({onSubmit}) => {
    const handleFormSubmit = (event) => {
        event.preventDefault();
        let userInput = document.querySelector('input').value;
        onSubmit(userInput)
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input/>
            </form>
        </div>
    )
}

export default SearchBar;