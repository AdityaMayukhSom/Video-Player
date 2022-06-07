import React, { useState, useEffect } from "react";
import MovieInput from "./MovieInput";
import MovieItem from "./MovieItem";
import NavBar from "./NavBar";

function App() {
    const [itemList, setItemList] = useState();
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
    const POSTER_BASE_URL = "https://image.tmdb.org/t/p/w780";

    function searchMovie(name) {
        let temp = name.trim().toLowerCase().replace(/\s/g, "+");
        getMovieInfo(temp);
    }

    function getMovieInfo(movieName) {
        let requestURL = "".concat(BASE_URL, "configuration?api_key=", API_KEY);
        fetch(requestURL)
            .then((result) => {
                return result.json();
            })
            .then(() => {
                runSearch(movieName);
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
                setItemList(
                    data.results.map((_, index) => {
                        if (data.results[index].runtime) {
                            console.log(data.results[index].runtime);
                        }
                        if (data.results[index].backdrop_path) {
                            return <MovieItem key={index} movieName={data.results[index].original_title} movieTime={100} movieShortDetails={data.results[index].overview} movieImage={"".concat(POSTER_BASE_URL, data.results[index].backdrop_path)} movieWatchTime={50}></MovieItem>;
                        }
                    })
                );
            })
            .catch((err) => {
                console.log(err);
            });
    }
    return (
        <div className="App bg-white dark:bg-[#171717] min-h-screen">
            <NavBar></NavBar>
            <div className="h-auto p-4">
                <MovieInput updateMovieName={updateMovieName}></MovieInput>
                {itemList}
            </div>
        </div>
    );
}

export default App;
