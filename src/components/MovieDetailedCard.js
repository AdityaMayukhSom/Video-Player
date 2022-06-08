import timeConvert from "./TimeConvert";
import { useState, useEffect } from "react";

const MovieDetailedCard = (props) => {
    let movieID;

    const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
    const BASE_URL = "https://api.themoviedb.org/3/";
    const POSTER_BASE_URL = "https://image.tmdb.org/t/p/w780";
    const NO_OF_CAST_TO_PRINT = 8;

    const [movieName, setMovieName] = useState("");
    const [movieRunTime, setMovieRunTime] = useState(0);
    const [movieReleaseDate, setMovieReleaseDate] = useState("");
    const [movieOverView, setMovieOverView] = useState("");
    const [movieVoteCount, setMovieVoteCount] = useState(0);
    const [moviePosterURL, setMoviePosterURL] = useState("");
    const [movieCastList, setMovieCastList] = useState([]);
    const [myGenreList, setMyGenreList] = useState([]);

    useEffect(() => {
        movieID = props.movieID;
        props.getMovieDetailsForDetailedCard.current = getMovieDetailsForDetailedCard;
    }, []);

    function getMovieDetailsForDetailedCard() {
        const detailRequestURL = "".concat(BASE_URL, "movie/", movieID, "?api_key=", API_KEY, "&language=en-US");
        const castRequestURL = "".concat(BASE_URL, `movie/`, movieID, `/credits?api_key=`, API_KEY, "&language=en-US");
        fetch(detailRequestURL)
            .then((result) => {
                return result.json();
            })
            .then((data) => {
                setMovieName(data.original_title);
                setMovieRunTime(data.runtime);
                setMovieReleaseDate(data.release_date);
                setMovieOverView(data.overview);
                setMovieVoteCount(data.vote_count);
                setMoviePosterURL("".concat(POSTER_BASE_URL, data.poster_path));
                setMyGenreList(data.genres);
            })
            .catch((err) => {
                console.log(err);
                console.log("Error Occured");
            });

        fetch(castRequestURL)
            .then((result) => {
                return result.json();
            })
            .then((data) => {
                setMovieCastList(data.cast);
            })
            .catch((error) => {
                console.log("Error Occured");
                console.log(error);
            });
    }

    return (
        <div>
            {props.isShow && (
                <div
                    className="flex flex-wrap justify-center items-center fixed z-50 inset-0 bg-[#191919] bg-opacity-80"
                    onClick={() => {
                        props.handleShow(false);
                    }}
                >
                    <article
                        className="grid grid-flow-row md:grid-flow-col justify-center items-center w-[90%] h-[90%] shadow-2xl bg-black"
                        onClick={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                        }}
                    >
                        <div className="h-full block min-w-max overflow-hidden relative">
                            <img className="max-w-full h-full bg-cover bg-center" src={moviePosterURL} alt="Cover Image" />
                        </div>

                        <div className=" tracking-widest bg-black p-12 text-white flex flex-col  w-full h-full">
                            <h2 className="text-5xl font-semibold uppercase">{movieName}</h2>
                            <div className="flex flex-row items-center gap-x-3 my-2">
                                <span className="text-lg">{movieReleaseDate.substring(0, 4)}</span>
                                <p className="rating">
                                    <span className="mr-2">
                                        <label className="text-[#ffd700] text-lg">&#9733;</label>
                                        <label className="text-[#ffd700] text-lg">&#9733;</label>
                                        <label className="text-[#ffd700] text-lg">&#9733;</label>
                                        <label className="text-[#ffd700] text-lg">&#9733;</label>
                                        <label className="text-[#ffd700] text-lg">&#9733;</label>
                                    </span>
                                    <span>({movieVoteCount})</span>
                                </p>
                                <span>{timeConvert(movieRunTime)}</span>
                            </div>
                            <p className="my-2 text-lg text-justify">{movieOverView}</p>
                            <div className="gap-y-2 text-lg">
                                <p className="">
                                    <span className="text-red-500 font-semibold mr-1">Starring:</span>
                                    <span className="tracking-wide">
                                        {movieCastList.map((element, index) => {
                                            if (index <= NO_OF_CAST_TO_PRINT - 1) {
                                                if (index === movieCastList.length - 1) {
                                                    return (
                                                        <span className="mx-1" key={index}>
                                                            {element.name}.
                                                        </span>
                                                    );
                                                }
                                                if (index === NO_OF_CAST_TO_PRINT - 1) {
                                                    return (
                                                        <span className="mx-1" key={index}>
                                                            {element.name}.
                                                        </span>
                                                    );
                                                }
                                                return (
                                                    <span className="mx-1" key={index}>
                                                        {element.name},
                                                    </span>
                                                );
                                            } else {
                                                return;
                                            }
                                        })}
                                    </span>
                                </p>
                                <p className="">
                                    <span className="text-red-500 font-semibold mr-1">Genre:</span>
                                    <span className="tracking-wide">
                                        {myGenreList.map((element, index) => {
                                            if (index === myGenreList.length - 1) {
                                                return (
                                                    <span className="mx-1" key={index}>
                                                        {element.name}.
                                                    </span>
                                                );
                                            }
                                            return (
                                                <span className="mx-1" key={index}>
                                                    {element.name},
                                                </span>
                                            );
                                        })}
                                    </span>
                                </p>
                                <p className="">
                                    <span className="text-red-500 font-semibold mr-1">Directed by:</span>
                                    <span className="tracking-wide">The Duffer Brothers</span>
                                </p>
                            </div>
                            <div className="py-2 flex mt-auto gap-x-5">
                                <button className="button play flex justify-center items-center bg-gray-200 hover:bg-gray-400 bg-opacity-20 hover:bg-opacity-40 transition-all px-6 py-2 rounded">
                                    <span className="text-lg mr-3">&#9654;</span> PLAY NOW
                                </button>
                                <button className="button add flex justify-center items-center bg-gray-200 hover:bg-gray-400 bg-opacity-20 hover:bg-opacity-40 transition-all px-6 py-2 rounded">
                                    <span className="text-4xl mr-3">&#43;</span>ADD TO WATCHLIST
                                </button>
                            </div>
                        </div>
                    </article>
                </div>
            )}
        </div>
    );
};
export default MovieDetailedCard;
