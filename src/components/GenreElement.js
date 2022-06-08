import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

function GenreElement(props) {
    const [searchResults, setSearchResults] = useState();

    const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
    const BASE_URL = "https://api.themoviedb.org/3/";
    const ACTION_URL = "".concat("https://api.themoviedb.org/3/discover/movie?api_key=", API_KEY, "&with_genres=", props.genreID);

    function getActionMovies() {
        let requestURL = "".concat(BASE_URL, "configuration?api_key=", API_KEY);
        fetch(requestURL)
            .then((result) => {
                return result.json();
            })
            .then(() => {
                fetch(ACTION_URL)
                    .then((result) => {
                        return result.json();
                    })
                    .then((data) => {
                        setSearchResults(
                            data.results.map((_, index) => {
                                if (data.results[index].poster_path) {
                                    // console.log(data.results[index].original_title, data.results[index].id);
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

    useEffect(() => {
        getActionMovies();
    }, []);

    return (
        <div>
            <div className="px-8 flex text-2xl text-white font-semibold select-none">{props.genreName}</div>
            <div className="px-6 pt-4 pb-[72px] w-full overflow-x-scroll no-scrollbar ">
                <div className="grid grid-flow-col ">
                    {searchResults} <div className="h-full w-6"></div>
                </div>
            </div>
        </div>
    );
}

export default GenreElement;
