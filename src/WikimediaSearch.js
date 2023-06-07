import React, { useState } from 'react';
import axios from 'axios';

// Search over wikipedia and show the result in a table with thumbnail, if provided.
function WikimediaSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  // For valid data, return a table with thumbnail and extract.
  function SearchResultTable({ data }) {
    if (data == null) {
      return (
        <div className="alert">Can't find entry: {searchTerm}</div>
      )
    } else {
      return (
        <table>
          <tbody>
            <tr key={data.title}>
              <td><Thumbnail thumbnail={data.thumbnail} /></td>
              <td>{data.extract}</td>
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
      const encodedSearchTerm = encodeURIComponent(searchTerm);
      const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodedSearchTerm}`;

      const response = await axios.get(url);
      setResults([response.data]);
    } catch (error) {
      console.error('Error searching Wikimedia:', error);
      setResults([null]);
    }
  }
  return (
    <div>
      <input
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
