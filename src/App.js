import './App.css';
import Navbar from './Navbar.jsx'
import HeaderImage from './HeaderImage.jsx';
import MoviesList from './MoviesList.jsx';
import AgainList from './AgainList.jsx';
import BottomNavbar  from './BottomNavbar.jsx';
import Last from './Last.jsx';


function App() {
  return (
    <div>
      <Navbar/>
      <HeaderImage/>
      <MoviesList/>
      <AgainList/>
      <BottomNavbar/>
      <Last/>

    </div>
  );
}

export default App;
