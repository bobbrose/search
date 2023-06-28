import './Searchy.css';
import AboutBox from './AboutBox';
import WikimediaSearch from './WikimediaSearch';

// Search app using React, to search wikipedia and show the result.
function App() {
  return (
    <div>
      <table className='searchTable'>
        <tr className='search'>
          <td className='left'></td>
          <td classname='middle'>
            <h1 className='title'>Searchy</h1>
          </td>
          <td>
            <div className='about'>
              <AboutBox />
            </div>
          </td>
        </tr>
        <tr>
          <td className='history'>
            <h3 >History</h3>
          </td>
          <td >
            <div>
              <WikimediaSearch />
            </div>
          </td>
        </tr>
      </table>
    </div>

  );
}

export default App;
