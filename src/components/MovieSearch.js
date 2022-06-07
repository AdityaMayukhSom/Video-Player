import React, { useState, useEffect } from "react";
import MovieInput from "./MovieInput";
import MovieCard from "./MovieCard";

function MovieSearch() {
    const [searchResults, setSearchResults] = useState();
    const [movieName, setMovieName] = useState("");

    function updateMovieName(name) {
        setMovieName(name);
    }

    useEffect(() => {
        if (movieName !== "") {
            searchMovie(movieName);
        }
    }, [movieName]);

    const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
    const BASE_URL = "https://api.themoviedb.org/3/";
    const TRENDING_BASE_URL = "".concat("https://api.themoviedb.org/3/trending/movie/day?api_key=", API_KEY);

    function searchMovie(name) {
        let enteredMovieName = name.trim().toLowerCase().replace(/\s/g, "+");
        let requestURL = "".concat(BASE_URL, "configuration?api_key=", API_KEY);
        fetch(requestURL)
            .then((result) => {
                return result.json();
            })
            .then(() => {
                let movieSearchURL = "".concat(BASE_URL, "search/movie?api_key=", API_KEY, "&query=", enteredMovieName);
                fetch(movieSearchURL)
                    .then((result) => {
                        return result.json();
                    })
                    .then((data) => {
                        setSearchResults(
                            data.results.map((_, index) => {
                                if (data.results[index].poster_path) {
                                    return <MovieCard key={data.results[index].id} movieID={data.results[index].id} />;
                                }
                            })
                        );
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function getTrendingMovieInfo() {
        let requestURL = "".concat(BASE_URL, "configuration?api_key=", API_KEY);
        fetch(requestURL)
            .then((result) => {
                return result.json();
            })
            .then(() => {
                fetch(TRENDING_BASE_URL)
                    .then((result) => {
                        return result.json();
                    })
                    .then((data) => {
                        setSearchResults(
                            data.results.map((_, index) => {
                                if (data.results[index].poster_path) {
                                    return <MovieCard key={data.results[index].id} movieID={data.results[index].id} />;
                                }
                            })
                        );
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function runSearch(keyword) {
        let requestURL = "".concat(BASE_URL, "search/movie?api_key=", API_KEY, "&query=", keyword);
        fetch(requestURL)
            .then((result) => {
                return result.json();
            })
            .then((data) => {
                setSearchResults(
                    data.results.map((_, index) => {
                        if (data.results[index].poster_path) {
                            return <MovieCard key={data.results[index].id} movieID={data.results[index].id} />;
                        }
                    })
                );
            })
            .catch((err) => {
                console.log(err);
            });
    }
    useEffect(() => {
        getTrendingMovieInfo();
    }, []);

    return (
        <div className="h-auto p-4 mt-5">
            <MovieInput updateMovieName={updateMovieName} getTrending={getTrendingMovieInfo}></MovieInput>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4">{searchResults}</div>
        </div>
    );
}

export default MovieSearch;
