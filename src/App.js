import Home from "./pages/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";


function App() {
  return (
    <div className="App">
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
           
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;
 


