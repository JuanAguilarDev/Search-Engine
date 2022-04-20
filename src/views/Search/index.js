import { useState } from 'react';
import SearchBox from './components/SearchBox';
import data from '../../data/users.json';
import './style.css';
import SearchResults from './components/SearchResults';

export default function Search() {
    // State vars
    const [isAtTop, setIsAtTop] = useState(false);
    const [userData, setUserData] = useState(data);
    const [results, setResults] = useState([]);

    const handleClose = () => {
        setIsAtTop(false);
        setResults([]);
    };

    const handleSearchClick = (searchText) => {
        setIsAtTop(true);
        // Validates if the property exists
        if(userData?.length){
            const searchTextLowerCase = searchText.toLowerCase();
            const filteredData = userData.filter((value) => {
                return (
                    value.name.toLowerCase().includes(searchTextLowerCase) || 
                    value.email.toLowerCase().includes(searchTextLowerCase) ||
                    value.username.toLowerCase().includes(searchTextLowerCase) ||
                    value.phone.toLowerCase().includes(searchTextLowerCase)
                );
            });

            setResults(filteredData);
        }
    };

    return (
        <div className={`search ${isAtTop ? "search--top" : "search--center"}`}>
            <SearchBox onSearch={handleSearchClick} onClose={handleClose} isSearching={isAtTop}/>
            <SearchResults results={results} isSearching={isAtTop}/>
        </div>
    );
}
