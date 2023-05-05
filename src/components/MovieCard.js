import timeConvert from "./TimeConvert";
import { useEffect, useRef, useState, useContext } from "react";
import { DetailedMovieContext } from './context/DetailedMovieContext';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3/";
const POSTER_BASE_URL = "https://image.tmdb.org/t/p/w780";

const blankMovie = {
    id: -1,
    title: "",
    tagline: "",
    runtime: 0,
    releaseDate: "",
    overview: "",
    posterURL: ""
}

async function getMovieDetails(movieID) {
    try {
        const detailRequestURL = "".concat(
            BASE_URL, "movie/", movieID,
            "?api_key=", API_KEY, "&language=en-US"
        );
        const resp = await fetch(detailRequestURL)
        const details = await resp.json()
        return details
    } catch (err) {
        console.log("error occured while fetching movie card data");
        console.log(err);
        return blankMovie
    };
}

const MovieCard = (props) => {
    const [movie, setMovie] = useState(blankMovie)
    const [, setMovieIdIsShow] = useContext(DetailedMovieContext)

    const movieContainer = useRef();
    const movieDetailsContainer = useRef();

    function handleHoverIn() {
        movieDetailsContainer.current.classList.remove("hidden");
    }

    function handleHoverOut() {
        movieDetailsContainer.current.classList.add("hidden");
    }

    useEffect(() => {
        (async function () {
            const details = await getMovieDetails(props.movieID);
            setMovie({
                id: props.movieID,
                title: details.original_title,
                tagline: details.tagline,
                runtime: details.runtime,
                releaseDate: details.release_date,
                overview: details.overview,
                posterURL: "".concat(POSTER_BASE_URL, details.poster_path)
            })
        })()
    }, [props.movieID]);

    return (
        <div
            // hover:w-[240px]
            className="flex w-56 h-80 relative shadow-md pt-12 mx-2 my-3 hover:scale-[1.15] hover:z-30 rounded-lg transition-all cursor-pointer"
            ref={movieContainer}
            onMouseEnter={handleHoverIn}
            onMouseLeave={handleHoverOut}
            onPointerMove={handleHoverIn}
            onClick={() => {
                setMovieIdIsShow({
                    movieId: parseInt(movie.id),
                    isShow: true
                })
            }}
        >
            <img className="absolute inset-0 w-full rounded-lg" src={movie.posterURL} alt={`${movie.title} movie poster`} />
            <div className="absolute hidden w-full h-full text-white rounded-b-lg" ref={movieDetailsContainer}>
                <div className="absolute z-10 transition inset-0 duration-200 ease-in-out bg-gradient-to-t from-black via-[#191919] to-transparent rounded-b-lg"></div>
                <div className="absolute bottom-0 z-20 flex flex-col items-center justify-center w-full px-4 py-3 rounded-b-lg">
                    <div className="flex flex-col w-full">
                        <h3 className="text-[20px] leading-none font-bold tracking-wide drop-shadow-md text-white">{movie.title}</h3>
                        <div className="mb-0 text-xs font-semibold text-gray-200">{movie.tagline}</div>
                    </div>
                    <div className="w-full my-1 text-xs">
                        <p className="text-gray-100 w-full no-scrollbar overflow-y-auto h-[50px] text-justify text-[10px]">{movie.overview}</p>
                    </div>
                    <div className="flex flex-row justify-between w-full mb-2">
                        <div className="flex flex-col text-center text-[10px]">
                            <div className="text-gray-400 ">Release Date</div>
                            <div className="">
                                {movie.releaseDate !== "" ? movie.releaseDate : "N/A"}
                            </div>
                        </div>
                        <div className="flex flex-col text-center text-[10px]">
                            <div className="text-gray-400 ">Movie Runtime</div>
                            <div className="">{movie.runtime ? timeConvert(movie.runtime) : "N/A"}</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 py-2 gap-x-2">
                        <button
                            className="flex justify-center items-center bg-gray-200 hover:bg-gray-400 transition-all px-2 py-1 rounded font-semibold text-black text-[10px] w-full"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                            }}
                        >
                            <span className="mr-1 text-md">&#9654;</span>
                            <span className="text-[9px] whitespace-nowrap font-semibold">PLAY NOW</span>
                        </button>
                        <button
                            className="flex items-center justify-center w-full px-2 py-1 text-xs font-semibold text-white transition-all bg-gray-700 rounded hover:bg-gray-800 bg-opacity-80 hover:bg-opacity-80"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                            }}
                        >
                            <span className="mr-1 text-lg">&#43;</span>
                            <span className="text-[9px] font-semibold">WATCHLIST</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
