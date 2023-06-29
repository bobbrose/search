import './Searchy.css';
import AboutBox from './AboutBox';
import History from './History';
import WikimediaSearch from './WikimediaSearch';
import React, { useState } from 'react';
import { useRef } from 'react';

// Search app using React, to search wikipedia and show the result.
function App() {
  const [searchHistory, setSearchHistory] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef(null);

  return (
    <div>
      <table className='searchTable'>
        <tbody>
          <tr className='search'>
            <td className='left'></td>
            <td className='middle'>
              <h1 className='title'>Searchy</h1>
            </td>
            <td>
              <div className='about'>
                <AboutBox />
              </div>
            </td>
          </tr>
          <tr>
            <td className='left'>
              <History searchHistory={searchHistory} inputRef={inputRef} setSearchTerm={setSearchTerm}/>
            </td>
            <td >
              <div>
                <WikimediaSearch inputRef={inputRef} 
                  searchHistory={searchHistory} setSearchHistory={setSearchHistory}
                  searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
