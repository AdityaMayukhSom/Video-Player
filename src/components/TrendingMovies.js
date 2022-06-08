import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

function TrendingMovies() {
    const [searchResults, setSearchResults] = useState();

    const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
    const BASE_URL = "https://api.themoviedb.org/3/";
    const TRENDING_BASE_URL = "".concat("https://api.themoviedb.org/3/trending/movie/day?api_key=", API_KEY);

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

    useEffect(() => {
        getTrendingMovieInfo();
    }, []);

    return (
        <div>
            <div className="px-8 flex text-2xl text-white font-semibold pt-4 select-none">Trending</div>
            <div className="px-6 pt-4 pb-[72px] w-full overflow-x-scroll no-scrollbar ">
                <div className="grid grid-flow-col">
                    {searchResults}
                    <div className="h-full w-6"></div>
                </div>
            </div>
        </div>
    );
}

export default TrendingMovies;
