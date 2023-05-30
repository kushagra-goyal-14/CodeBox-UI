import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Editor from "./components/Editor/Editor";
import Navbar from "./components/Navbar/Navbar";

function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/editor" element={<Editor />} />
      </Routes>
    </Router>
  );
}

export default App;
