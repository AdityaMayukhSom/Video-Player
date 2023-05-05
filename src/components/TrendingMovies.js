import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const TRENDING_BASE_URL = "".concat(BASE_URL, "trending/movie/day?api_key=", API_KEY);

async function getTrendingMovie() {
    try {
        const res = await fetch(TRENDING_BASE_URL)
        const data = await res.json()
        const trendingMoviesResult = data.results
        return trendingMoviesResult
    } catch (err) {
        console.log(err);
        return []
    };
}
function TrendingMovies() {
    const [trendingMovies, setTrendingMovies] = useState([]);

    useEffect(() => {
        (async function () {
            const trendingMoviesResult = await getTrendingMovie();
            setTrendingMovies(trendingMoviesResult)
        })();
    }, []);

    return (
        <section className='px-4'>
            <div className="flex pt-4 mx-2 text-2xl font-semibold text-white select-none">Trending</div>
            <div className="pt-4 pb-[72px] w-full overflow-x-scroll no-scrollbar ">
                <div className="grid grid-flow-col">
                    {trendingMovies.map((trendingMovie) => {
                        return (trendingMovie.poster_path) ?
                            <MovieCard key={trendingMovie.id} movieID={trendingMovie.id} /> :
                            <></>
                    })}
                </div>
                <div className="w-6 h-full" ></div>
            </div>
        </section>
    );
}

export default TrendingMovies;
