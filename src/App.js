import Home from "./pages/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import FilteredMovies from "./pages/FilteredMovies";
import Search from "./components/Search";
import { useState } from "react";
import Movie from "./pages/Movie";
import SearchResults from "./pages/SearchResults";
import Favourites from "./pages/Favourites";
import Cast from "./pages/Cast";

function App() {
  const [searchMode, setSearchMode] = useState(false);
  return (
    <>
      <Router>
        <div className="App">
          {searchMode && <Search></Search>}
          <Routes>
            <Route
              path="/"
              element={
                <Home setSearchMode={setSearchMode} searchMode={searchMode} />
              }
            ></Route>
            <Route
              path="/person/:id"
              element={
                <Cast setSearchMode={setSearchMode} searchMode={searchMode} />
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
              path="/favourites"
              element={
                <Favourites
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
            <Route
              path="/search/:query"
              element={
                <SearchResults
                  setSearchMode={setSearchMode}
                  searchMode={searchMode}
                />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
