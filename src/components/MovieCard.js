import { useState } from "react";
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
    function getMovieDetails(movieID) {
        let requestURL = "".concat(BASE_URL, "movie/", movieID, "?api_key=", API_KEY, "&language=en-US");
        fetch(requestURL)
            .then((result) => {
                return result.json();
            })
            .then((data) => {
                // console.log(data);
                setMovieName(data.original_title);
                setMovieTagLine(data.tagline);
                setMovieRunTime(data.runtime);
                setMovieReleaseDate(data.release_date);
                setMovieOverView(data.overview);
                setMoviePosterURL("".concat(POSTER_BASE_URL, data.poster_path));
            })
            .catch((err) => {
                console.log(err);
            });
    }

    getMovieDetails(props.movieID);

    return (
        <div className="flex w-[340px] bg-black shadow-md rounded-lg overflow-hidden mx-auto mt-5 hover:-translate-y-3 transition">
            <div className="overflow-hidden rounded-lg relative transform w-full shadow-lg text-white pb-96 pt-16">
                <img className="absolute inset-0 w-full -translate-y-5" src={moviePosterURL} />
                <div className="absolute inset-0 z-10 transition duration-300 ease-in-out bg-gradient-to-t from-black via-gray-900 to-transparent"></div>
                <div className="relative cursor-pointer group z-10 px-6 pt-10 space-y-6 w-full">
                    <div className="h-36"></div>
                    <div className="space-y-2 detail_info"></div>
                </div>
                <div className="absolute bottom-6 z-40 w-full flex justify-center items-center py-2 flex-col px-6">
                    <div className="flex flex-col w-full">
                        <h3 className="text-4xl font-bold tracking-wide text-white">{movieName}</h3>
                        <div className="mb-0 text-sm text-gray-400">{movieTagLine}</div>
                    </div>
                    <div className="flex flex-col mt-3">
                        <p className="text-xs text-gray-100 mb-6 no-scrollbar overflow-y-auto h-[140px] text-justify">{movieOverView}</p>
                    </div>
                    <div className="flex flex-row justify-between w-full mb-6">
                        <div className="flex flex-col text-center">
                            <div className="text-sm text-gray-400">Release Date</div>
                            <div className="">{movieReleaseDate}</div>
                        </div>
                        <div className="flex flex-col text-center">
                            <div className="text-sm text-gray-400 w-full">Movie Runtime</div>
                            <div className="">{timeConvert(movieRunTime)}</div>
                        </div>
                    </div>
                    <a className="flex items-center whitespace-nowrap px-4 py-2 text-center text-white bg-[#238636] rounded group-hover:bg-[#2EA043]  cursor-pointer">
                        <svg className="h-6 w-6 mr-2 invert" viewBox="0 0 24 24">
                            <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z" />
                        </svg>
                        <span className="font-bold">Play Trailer</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
