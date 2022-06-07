import React from "react";
import NavBar from "./NavBar";
import MovieSearch from "./MovieSearch";
import Footer from "./Footer";
// import MovieCard from "./MovieCard";

function App() {
    return (
        <div className="App bg-white dark:bg-[#171717] min-h-screen">
            <NavBar />
            {/* <MovieCard /> */}
            <MovieSearch />
            <Footer />
        </div>
    );
}

export default App;
