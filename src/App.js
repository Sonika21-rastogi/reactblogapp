import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import NoteState from "./context/notes/NoteState";
import Alert from './Component/Alert';

function App() {
  return (
    <NoteState>
      <Router>
        <Navbar />
        <Alert message="This is a INotebook"/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        </div>
      </Router>
    </NoteState>
  );
}

export default App;
