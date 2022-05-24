
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import {Home} from "./components/Home";
import AddPlayer from "./components/AddPlayer";
import EditPlayer from "./components/EditPlayer";
import Appbar from './components/Appbar';
import ListingTeam from './components/ListingTeam';
import AddTeam from './components/AddTeam';
import ListingPlayers from "./components/ListingPlayers";


function App() {
  return (
<>
      <Appbar/>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/player/add" element={<AddPlayer/>} />
                    <Route path="/edit/:playerid" element={<EditPlayer/>} />
                    <Route exact path="/whiteboard" render={() => {window.location.href="whiteboard.html"}} />
                    <Route path="/teams" element={<ListingTeam/>} />
                    <Route path="/team/:teamid" element={<ListingPlayers/>} />
                    <Route path="/team/add" element={<AddTeam/>} />
                </Routes>
            </Router>
</>

  );
}

export default App;
