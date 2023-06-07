import './Searchy.css';
import AboutBox from './AboutBox';
import WikimediaSearch from './WikimediaSearch';

// Search app using React, to search wikipedia and show the result.
function App() {
  return (
    <div>
      <h1 className='title'>Searchy</h1>
      <div className='about'>
        <AboutBox />
      </div>
      <div className='search'>
        <WikimediaSearch />
      </div>
    </div>
  );
}

export default App;
