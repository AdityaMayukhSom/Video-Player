import React, { useState } from "react";

import NavBar from "./NavBar";
import Footer from "./Footer";
import HomePage from "./HomePage";
import GenreElement from "./GenreElement";
import TrendingMovies from "./TrendingMovies";
import MovieDetailedCard from "./MovieDetailedCard";
import { DetailedMovieContext } from './context/DetailedMovieContext';
// import MovieSearch from "./MovieSearch";

const genreNameIdList = [
    { id: 28, name: 'Action' },
    { id: 878, name: 'Science Fiction' },
    { id: 35, name: 'Comedy' },
    { id: 10749, name: 'Romance' },
    { id: 80, name: 'Crime' },
    { id: 16, name: 'Animation' },
    { id: 10752, name: 'War' }
]


function App() {
    const [movieIdIsShow, setMovieIdIsShow] = useState({ movieId: -1, isShow: false })
    return (
        <DetailedMovieContext.Provider value={[movieIdIsShow, setMovieIdIsShow]}>
            <div className="App bg-white dark:bg-[#171717] min-h-screen h-fit">
                <NavBar />
                <HomePage />
                <TrendingMovies />
                {genreNameIdList.map((genre) => {
                    return <GenreElement
                        key={genre.id}
                        genreID={genre.id}
                        genreName={genre.name} />
                })}
                <MovieDetailedCard />
                <Footer />
                {/* <MovieSearch /> */}
            </div>
        </DetailedMovieContext.Provider>
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
