import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
//mammals components
import Manatee from './components/Manatee/Manatee.js';
import Narwhal from './components/Narwhal/Narwhal.js';
import Whale from './components/Whale/Whale.js';

function App() {
  return (
    <div className='wrapper'>
      <h1>Marine Mammals</h1>
{/* search parameters */}
{/*       <BrowserRouter>
        <nav>
          <ul>
            <li><Link to='/manatee'>Manatee</Link></li>
            <li><Link to='/narwhal'>Narwhal</Link></li>
            <li><Link to='/whale'>Whale</Link></li>
            <li><Link to='/whale?type=beluga'>beluga</Link></li>
            <li><Link to='/whale?type=blue'>blue</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path='/manatee' element={<Manatee/>}/>
          <Route path='/narwhal' element={<Narwhal/>}/>
          <Route path='/whale' element={<Whale/>}/>
        </Routes>
      </BrowserRouter> */}
  {/* url parameters */}    
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to='/manatee'>Manatee</Link></li>
            <li><Link to='/narwhal'>Narwhal</Link></li>
            <li><Link to='/whale'>Whale</Link></li>
            <li><Link to='/whale/beluga'>beluga</Link></li>
            <li><Link to='/whale/blue'>blue</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path='/manatee' element={<Manatee/>}/>
          <Route path='/narwhal' element={<Narwhal/>}/>
          <Route path='/whale/*' element={<Whale/>}/>
{/*           <Route path='whale/:type' element={<Whale/>}/> */}
        </Routes>
      </BrowserRouter>       
    </div>
  );
};

export default App;
