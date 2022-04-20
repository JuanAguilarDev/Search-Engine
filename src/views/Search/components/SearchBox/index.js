import { useState } from "react";
import './style.css';

export default function SearchBox({onSearch, onClose, isSearching}) {
    const [search, setSearch] = useState("");

    const handleSearchClick = () => {
        setSearch("");
        onClose();
    }
    
    return (
        <div className="search-box">
            <h1 className="search-box-title">Buscador de personal</h1>
            <div className="search-box-bottons">
                <label>
                    <input className="search-box-input" type="text" value={search} onChange={({target : {value}}) => setSearch(value)}/>
                </label>
                {/* Send the input text to the father */}
                <button onClick={() => onSearch(search)} disabled={!search.length}>Buscar</button>
                {isSearching && <button onClick={handleSearchClick} disabled={!search.length}>Cerrar</button>}
            </div>
        </div>
    )
}
