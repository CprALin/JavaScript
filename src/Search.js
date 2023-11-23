import Logo from "./Logo";

const Search = ({search , setSearch}) => {
    return (
        <form className="SearchBar" onSubmit={(e) => e.preventDefault()}>  
            <input id="search" type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} className="search-box" />
            <Logo />
        </form>    
    )
}

export default Search