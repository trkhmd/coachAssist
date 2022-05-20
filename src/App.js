
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


function App() {
  return (
<>
      <Appbar/>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/add" element={<AddPlayer/>} />
                    <Route path="/edit/:id" element={<EditPlayer/>} />
                    <Route exact path="/whiteboard" render={() => {window.location.href="whiteboard.html"}} />
                </Routes>
            </Router>
</>

  );
}

export default App;
