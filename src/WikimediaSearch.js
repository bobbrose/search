import React, { useState } from 'react';
import axios from 'axios';
import "./WikimediaSearch.css"

// Search over wikipedia and show the result in a table with thumbnail, if provided.
function WikimediaSearch({ inputRef, setSearchHistory, searchTerm, setSearchTerm }) {
  const [results, setResults] = useState([]);

  // For valid data, return a table with thumbnail and extract.
  function SearchResultTable({ data }) {
    if (data == null) {
      return (
        <div className="alert">Can't find entry: {searchTerm}</div>
      )
    } else {
      return (
        <table className='searchResult'>
          <tbody>
            <tr key={data.title}>
              <td key='1' className='resultThumb'><Thumbnail thumbnail={data.thumbnail} /></td>
              <td key='2' className='resultDescriptions'>{data.extract}</td>
            </tr>
          </tbody>
        </table>
      )
    }
  }

  // Return an image with the thumbnail, if provided.
  function Thumbnail({ thumbnail }) {
    if (thumbnail == null) {
      return "";
    }
    return (
      // Note that since the thumbnail does not add any value in accisibility mode, we will hide it from being spoken.
      <img src={thumbnail.source} width={thumbnail.width} height={thumbnail.height} alt='' aria-hidden='true' />
    )
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setSearchTerm(event.target.value);
      searchWikimedia();
    }
  }

  // Search wikimedia and put the result in the 'results'
  async function searchWikimedia() {
    try {
      const encodedSearchTerm = encodeURIComponent(inputRef.current.value);
      const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodedSearchTerm}`;
      const response = await axios.get(url);
      setResults([response.data]);
    } catch (error) {
      console.error('Error searching Wikimedia:', error);
      setResults([null]);
    }
    setSearchHistory(searchTerm);
    setSearchTerm('');
  }
  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={searchTerm}
        onKeyDown={handleKeyDown}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={searchWikimedia}>Search Wikipedia</button>
      {results.map((result) => (<SearchResultTable data={result} />))}
    </div>
  );
}
export default WikimediaSearch;
