import Home from "./pages/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import FilteredMovies from "./pages/FilteredMovies";
import Search from "./components/Search";
import { useState } from "react";
import Movie from "./pages/Movie"

function App() {
  const [searchMode, setSearchMode] = useState(false);
  return (
    <div className="App">
      {searchMode && <Search></Search>}
      <>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Home setSearchMode={setSearchMode} searchMode={searchMode} />
              }
            ></Route>
            <Route
              path="/:criteria"
              element={
                <FilteredMovies
                  setSearchMode={setSearchMode}
                  searchMode={searchMode}
                />
              }
            ></Route>
            <Route
              path="/movie/:id"
              element={
                <Movie setSearchMode={setSearchMode} searchMode={searchMode} />
              }
            ></Route>
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;
