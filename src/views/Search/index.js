import { useState, useEffect } from 'react';
import SearchBox from './components/SearchBox';
import './style.css';
import SearchResults from './components/SearchResults';
import axios from 'axios';

export default function Search() {
    // State vars
    const [isAtTop, setIsAtTop] = useState(false);
    const [userData, setUserData] = useState([]);
    const [results, setResults] = useState([]);

    const handleClose = () => {
        setIsAtTop(false);
        setResults([]);
    };

    // Get data from an API with axios
    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/users");
                setUserData(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        // Call the function
        getUsers().catch(null);
    }, []);

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
