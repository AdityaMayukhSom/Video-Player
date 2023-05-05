import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3/";

async function getGenreMovies(genreID) {
    const ACTION_URL = "".concat(BASE_URL, "discover/movie?api_key=", API_KEY, "&with_genres=", genreID);
    try {
        const resp = await fetch(ACTION_URL)
        const data = await resp.json()
        const genreMoviesList = data.results
        return genreMoviesList
    } catch (err) {
        console.log(err);
    };
}

function GenreElement(props) {
    const [genreMovies, setGenreMovies] = useState([]);
    useEffect(() => {
        (async function () {
            const genreMoviesList = await getGenreMovies(props.genreID);
            setGenreMovies(genreMoviesList)
        })();
    }, [props.genreID]);

    return (
        <section className='px-4'>
            <h2 className="flex mx-2 text-2xl font-semibold text-white select-none">
                {props.genreName}
            </h2>
            <div className="pt-4 pb-[72px] w-full overflow-x-scroll no-scrollbar">
                <div className="grid grid-flow-col">
                    {genreMovies.map((genreMovie) => {
                        return (genreMovie.poster_path) ?
                            <MovieCard
                                key={genreMovie.id}
                                movieID={genreMovie.id} /> :
                            <></>
                    })}

                </div>
            </div>
        </section>
    );
}

export default GenreElement;
