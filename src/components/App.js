import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import HomePage from "./HomePage";
import TrendingMovies from "./TrendingMovies";
import GenreElement from "./GenreElement";
// import MovieSearch from "./MovieSearch";
function App() {
    return (
        <div className="App bg-white dark:bg-[#171717] min-h-screen h-fit">
            <NavBar />
            <HomePage />
            <TrendingMovies />
            <GenreElement genreName={"Action"} genreID={28} />
            <GenreElement genreName={"Sci-Fi"} genreID={878} />
            <GenreElement genreName={"Comedy"} genreID={35} />
            <GenreElement genreName={"Romance"} genreID={10749} />
            <GenreElement genreName={"Crime"} genreID={80} />
            <GenreElement genreName={"Animation"} genreID={16} />
            <Footer />
            {/* <MovieSearch /> */}
        </div>
    );
}

export default App;

// 0: {id: 28, name: 'Action'}
// 1: {id: 12, name: 'Adventure'}
// 2: {id: 16, name: 'Animation'}
// 3: {id: 35, name: 'Comedy'}
// 4: {id: 80, name: 'Crime'}
// 5: {id: 99, name: 'Documentary'}
// 6: {id: 18, name: 'Drama'}
// 7: {id: 10751, name: 'Family'}
// 8: {id: 14, name: 'Fantasy'}
// 9: {id: 36, name: 'History'}
// 10: {id: 27, name: 'Horror'}
// 11: {id: 10402, name: 'Music'}
// 12: {id: 9648, name: 'Mystery'}
// 13: {id: 10749, name: 'Romance'}
// 14: {id: 878, name: 'Science Fiction'}
// 15: {id: 10770, name: 'TV Movie'}
// 16: {id: 53, name: 'Thriller'}
// 17: {id: 10752, name: 'War'}
// 18: {id: 37, name: 'Western'}
