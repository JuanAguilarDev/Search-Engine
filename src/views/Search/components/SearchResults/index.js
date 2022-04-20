import {useState} from 'react'
import SearchResultsItem from './SearchResultsItem';
import './style.css';

export default function SearchResults({results, isSearching}) {
  return (
    <div id="container">
        <h2>Resultados de la busqueda</h2>
        {!results?.length && isSearching && <p>No existen resultados</p>}
        {results?.map((value) => <SearchResultsItem key={value.id} {...value}/> )}
    </div>
  )
}
