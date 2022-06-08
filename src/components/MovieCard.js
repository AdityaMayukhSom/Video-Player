import { useEffect, useRef, useState } from "react";
import MovieDetailedCard from "./MovieDetailedCard";
import timeConvert from "./TimeConvert";

const MovieCard = (props) => {
    const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
    const BASE_URL = "https://api.themoviedb.org/3/";
    const POSTER_BASE_URL = "https://image.tmdb.org/t/p/w780";

    const [movieName, setMovieName] = useState("");
    const [movieTagLine, setMovieTagLine] = useState("");
    const [movieRunTime, setMovieRunTime] = useState(0);
    const [movieReleaseDate, setMovieReleaseDate] = useState("");
    const [movieOverView, setMovieOverView] = useState("");
    const [moviePosterURL, setMoviePosterURL] = useState("");
    const [showMovieDetailedCard, setShowMovieDetailedCard] = useState(false);

    const getMovieDetailsForDetailedCard = useRef(null);

    function getMovieDetails(movieID) {
        const detailRequestURL = "".concat(BASE_URL, "movie/", movieID, "?api_key=", API_KEY, "&language=en-US");
        fetch(detailRequestURL)
            .then((result) => {
                return result.json();
            })
            .then((data) => {
                setMovieName(data.original_title);
                setMovieTagLine(data.tagline);
                setMovieRunTime(data.runtime);
                setMovieReleaseDate(data.release_date);
                setMovieOverView(data.overview);
                setMoviePosterURL("".concat(POSTER_BASE_URL, data.poster_path));
            })
            .catch((err) => {
                console.log("Error Occured");
                console.log(err);
            });
    }

    let movieContainer = useRef();
    let movieDetailsContainer = useRef();

    function handleHoverIn() {
        movieDetailsContainer.current.classList.remove("hidden");
    }
    function handleHoverOut() {
        movieDetailsContainer.current.classList.add("hidden");
    }

    useEffect(() => {
        getMovieDetails(props.movieID);
    }, []);

    return (
        <div className="">
            <div
                // hover:w-[240px]
                className="flex w-[200px] min-h-[300px] hover:w-[220px] relative shadow-md pt-12 mx-1.5 my-3 hover:scale-[1.15] hover:z-30 rounded-lg transition-all cursor-pointer"
                ref={movieContainer}
                onMouseEnter={() => {
                    handleHoverIn();
                }}
                onMouseLeave={() => {
                    handleHoverOut();
                }}
                onPointerMove={() => {
                    handleHoverIn();
                }}
                onClick={() => {
                    setShowMovieDetailedCard(true);
                    getMovieDetailsForDetailedCard.current();
                }}
            >
                <img className="absolute inset-0 w-full rounded-lg" src={moviePosterURL} />
                <div className="hidden absolute w-full h-full text-white rounded-b-lg" ref={movieDetailsContainer}>
                    <div className="absolute z-10 transition inset-0 duration-200 ease-in-out bg-gradient-to-t from-black via-[#191919] to-transparent rounded-b-lg"></div>
                    <div className="absolute bottom-0 z-20 w-full flex justify-center items-center py-3 flex-col px-4 rounded-b-lg">
                        <div className="flex flex-col w-full">
                            <h3 className="text-lg font-bold tracking-wide drop-shadow-md text-white">{movieName}</h3>
                            <div className="mb-0 text-xs font-semibold text-gray-200">{movieTagLine}</div>
                        </div>
                        <div className="my-1 w-full text-xs">
                            <p className="text-gray-100 w-full no-scrollbar overflow-y-auto h-[50px] text-justify text-[10px]">{movieOverView}</p>
                        </div>
                        <div className="flex flex-row justify-between w-full mb-2">
                            <div className="flex flex-col text-center text-[10px]">
                                <div className=" text-gray-400">Release Date</div>
                                <div className="">{movieReleaseDate ? movieReleaseDate : "N/A"}</div>
                            </div>
                            <div className="flex flex-col text-center text-[10px]">
                                <div className=" text-gray-400">Movie Runtime</div>
                                <div className="">{movieRunTime ? timeConvert(movieRunTime) : "N/A"}</div>
                            </div>
                        </div>
                        {/* <button
                            className="flex items-center whitespace-nowrap px-2 py-2 text-center text-white bg-[#238636] rounded group-hover:bg-[#2EA043]  cursor-pointer"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                            }}
                        >
                            <svg className="h-4 w-4 mr-2 invert" viewBox="0 0 24 24">
                                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z" />
                            </svg>
                            <span className="font-bold text-xs">Play Trailer</span>
                        </button> */}
                        <div className="grid grid-cols-2 py-2 gap-x-2">
                            <button
                                className="flex justify-center items-center bg-gray-200 hover:bg-gray-300 transition-all px-2 py-1 rounded font-semibold text-black text-[10px] w-full"
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                }}
                            >
                                <span className="text-md mr-2">&#9654;</span>
                                <span className="text-[9px] whitespace-nowrap">PLAY NOW</span>
                            </button>
                            <button
                                className="flex justify-center items-center bg-gray-700 hover:bg-gray-800 bg-opacity-80 hover:bg-opacity-80 transition-all px-2 py-1 rounded font-semibold text-xs text-white w-full"
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                }}
                            >
                                <span className="text-lg mr-2">&#43;</span>
                                <span className="text-[9px]">WATCHLIST</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <MovieDetailedCard isShow={showMovieDetailedCard} handleShow={setShowMovieDetailedCard} movieID={props.movieID} getMovieDetailsForDetailedCard={getMovieDetailsForDetailedCard} />
        </div>
    );
};

export default MovieCard;
