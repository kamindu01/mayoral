import { useState } from "react";

const SearchBar = ({handleSearch}) => {

    const [searchInputVal , updateSearchField] = useState('Search')

    const searchInput = (e)=>{
        e.preventDefault();
        updateSearchField(e.target.value);
        handleSearch(e.target.value)
    }

    return ( 
        <div className="searchbar-cont">
            <form>
                <input type="text" value={searchInputVal} onChange={(searchInput)}/>
            </form>
        </div>
     );
}
 
export default SearchBar;