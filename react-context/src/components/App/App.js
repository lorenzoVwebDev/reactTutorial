import './App.css';
import Navigation from '../Navigation/Navigation.js';
import SaladMaker from '../SaladMaker/SaladMaker.js';
import UserContext from '../User/User.js';

const user = {
  name: 'Lorenzo',
  favourites: [
    'avocado',
    'carrot'
  ]
}

function App() {
  return (
    <UserContext.Provider value={user}>
      <Navigation/>
      <SaladMaker/>
      </UserContext.Provider>
  );
}

export default App;
