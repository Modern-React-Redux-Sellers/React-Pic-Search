import SearchBar from "./components/SearchBar";

const App = () => {
    const handleSubmit = (term) => {
        console.log(`printing ${term} from App.js`);
    }

    return (
        <div>
            <SearchBar onSubmit={handleSubmit}/>
        </div>
    )
}

export default App;