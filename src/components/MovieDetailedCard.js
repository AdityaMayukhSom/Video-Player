import timeConvert from "./TimeConvert";
import { useState, useEffect, useContext } from "react";
import { DetailedMovieContext } from './context/DetailedMovieContext';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3/";
const POSTER_BASE_URL = "https://image.tmdb.org/t/p/w780";
const NO_OF_CAST_TO_PRINT = 8;

const blankMovieDetails = {
    id: -1,
    title: "",
    runtime: 0,
    overview: "",
    voteCount: 0,
    posterURL: "",
    castList: [],
    crewList: [],
    directorList: [],
    releaseDate: "",
    genreList: []
}
function getDirectorList(crewList) {
    const directorList = crewList.filter(crew => crew.department === "Directing")
    return directorList
}


async function getMovieDetails(movieID) {
    const details = []
    const detailRequestURL = "".concat(BASE_URL, "movie/", movieID, "?api_key=", API_KEY, "&language=en-US");
    const castRequestURL = "".concat(BASE_URL, `movie/`, movieID, `/credits?api_key=`, API_KEY, "&language=en-US");

    try {
        details.push(async function () {
            const movieResp = await fetch(detailRequestURL)
            const movieResult = await movieResp.json()
            return movieResult
        }())
        details.push(async function () {
            const crewResp = await fetch(castRequestURL)
            const crewResult = await crewResp.json()
            return crewResult
        }())
        const results = await Promise.all(details)
        return results
    } catch (err) {
        console.log(err);
        console.log("Error Occured");
        return [[], { cast: [], crew: [] }]
    };
}

const MovieDetailedCard = (props) => {
    const [movieIdIsShow, setMovieIdIsShow] = useContext(DetailedMovieContext)
    const [movie, setMovie] = useState(blankMovieDetails)

    useEffect(() => {
        if (parseInt(movieIdIsShow.movieId) !== -1) {
            (async function () {
                //console.log(movieIdIsShow.movieId, typeof movieIdIsShow.movieId)
                const [data, team] = await getMovieDetails(movieIdIsShow.movieId)
                setMovie({
                    id: parseInt(movieIdIsShow.movieId),
                    title: data.original_title,
                    runtime: parseInt(data.runtime),
                    overview: data.overview,
                    voteCount: parseInt(data.vote_count),
                    posterURL: "".concat(POSTER_BASE_URL, data.poster_path),
                    releaseDate: data.release_date,
                    genreList: data.genres,
                    castList: team.cast,
                    directorList: getDirectorList(team.crew)
                })
            })()
        }
    }, [movieIdIsShow.movieId]);

    return (
        <>
            {movieIdIsShow.isShow && <div
                className="flex flex-wrap justify-center items-center fixed z-50 inset-0 bg-[#191919] bg-opacity-80 shadow-xl"
                onClick={() => {
                    setMovieIdIsShow({
                        movieId: -1,
                        isShow: false
                    })
                }}
            >
                <article
                    className="grid grid-flow-row md:grid-flow-col justify-center items-center w-[90%] h-[90%] shadow-2xl bg-black"
                    onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                    }}
                >
                    <div className="relative block h-full overflow-hidden min-w-max">
                        <img className="h-full max-w-full bg-center bg-cover" src={movie.posterURL} alt="detailed movie poster" />
                    </div>

                    <div className="flex flex-col w-full h-full p-12 tracking-widest text-white bg-black ">
                        <h2 className="text-[48px] leading-none font-semibold uppercase">{movie.title}</h2>
                        <div className="flex flex-row items-center my-2 gap-x-3">
                            <span className="text-lg">{movie.releaseDate.substring(0, 4)}</span>
                            <p className="rating">
                                <span className="mr-2">
                                    <label className="text-[#ffd700] text-lg">&#9733;</label>
                                    <label className="text-[#ffd700] text-lg">&#9733;</label>
                                    <label className="text-[#ffd700] text-lg">&#9733;</label>
                                    <label className="text-[#ffd700] text-lg">&#9733;</label>
                                    <label className="text-[#ffd700] text-lg">&#9733;</label>
                                </span>
                                <span>({movie.voteCount})</span>
                            </p>
                            <span>{timeConvert(movie.runtime)}</span>
                        </div>
                        <p className="my-2 text-lg text-justify">{movie.overview}</p>
                        <div className="text-lg gap-y-2">
                            <p className="">
                                <span className="mr-1 font-semibold text-red-500">Genre:</span>
                                <span className="tracking-wide">
                                    {movie.genreList.map((element, index) => {
                                        if (index === movie.genreList.length - 1) {
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
                                <span className="mr-1 font-semibold text-red-500">Starring:</span>
                                <span className="tracking-wide">
                                    {movie.castList.map((element, index) => {
                                        if (index <= NO_OF_CAST_TO_PRINT - 1) {
                                            if (index === movie.castList.length - 1) {
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
                                            return null;
                                        }
                                    })}
                                </span>
                            </p>

                            <p className="">
                                <span className="mr-1 font-semibold text-red-500">Directed by:</span>
                                <span className="tracking-wide">
                                    {movie.directorList.map((element, index) => {
                                        if (index === movie.directorList.length - 1) {
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
                        </div>
                        <div className="flex py-2 mt-auto gap-x-5">
                            <button className="flex items-center justify-center px-6 py-2 transition-all bg-gray-200 rounded button play hover:bg-gray-400 bg-opacity-20 hover:bg-opacity-40">
                                <span className="mr-3 text-lg">&#9654;</span> PLAY NOW
                            </button>
                            <button className="flex items-center justify-center px-6 py-2 transition-all bg-gray-200 rounded button add hover:bg-gray-400 bg-opacity-20 hover:bg-opacity-40">
                                <span className="mr-3 text-4xl">&#43;</span>ADD TO WATCHLIST
                            </button>
                        </div>
                    </div>
                </article>
            </div>}
        </>
    );
};
export default MovieDetailedCard;
