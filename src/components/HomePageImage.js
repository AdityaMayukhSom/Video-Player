import timeConvert from "./TimeConvert";
import { useState, useEffect } from "react";

const HomePageImage = (props) => {
    const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
    const BASE_URL = "https://api.themoviedb.org/3/";
    const BACKDROP_BASE_URL = "https://image.tmdb.org/t/p/original";

    const [movieName, setMovieName] = useState("");
    const [movieRunTime, setMovieRunTime] = useState(0);
    const [movieReleaseDate, setMovieReleaseDate] = useState("");
    const [movieOverView, setMovieOverView] = useState("");
    const [moviePosterURL, setMoviePosterURL] = useState("");
    const [movieRating, setMovieRating] = useState(0);

    function getMovieDetails(movieID) {
        const detailRequestURL = "".concat(BASE_URL, "movie/", movieID, "?api_key=", API_KEY, "&language=en-US");
        fetch(detailRequestURL)
            .then((result) => {
                return result.json();
            })
            .then((data) => {
                setMovieName(data.original_title);
                setMovieRunTime(data.runtime);
                setMovieReleaseDate(data.release_date);
                setMovieOverView(data.overview);
                setMovieRating(data.vote_average);
                setMoviePosterURL("".concat(BACKDROP_BASE_URL, data.backdrop_path));
            }).catch((err) => {
                console.log("Error Occured");
                console.log(err);
            });
    }

    useEffect(() => {
        getMovieDetails(props.movieID);
    }, []);

    return (
        <div className="h-[85vh] items-center flex w-screen relative overflow-hidden text-white select-none">
            <img className="absolute left-[15%] top-1/2 -translate-y-1/2 fade-to-black w-full" src={moviePosterURL} alt="Catalogue-pana.svg" />
            <div className="w-screen z-10 h-[85vh]">
                <div className="w-[60vw] h-[85vh] bg-gradient-to-r from-[#000] via-[#000] to-transparent pl-20 flex items-center">
                    <div className="w-3/4">
                        <h1 className="pb-2 text-6xl font-semibold text-white uppercase my-text-shadow">{movieName}</h1>
                        <div>
                            <div className="flex flex-row items-center my-2 font-semibold gap-x-4">
                                {movieRating !== 0 && (
                                    <span className="flex flex-row items-center">
                                        <svg width="33" height="16" className="mr-2">
                                            <title>Logo Imdb Outline</title>
                                            <path
                                                fill="currentColor"
                                                fillRule="evenodd"
                                                d="M29.652719 1.0977341c.772758 0 1.396822.618987 1.396822 1.3842208V13.518051c0 .765681-.624064 1.384221-1.396822 1.384221H3.3468573c-.7721217 0-1.3965678-.61854-1.3965678-1.384221V2.4819549c0-.7652338.6244461-1.3842208 1.3965678-1.3842208zm0-.2977341H3.3468573C2.4112479.8 1.65 1.5544797 1.65 2.4819549V13.518051C1.65 14.44553 2.4112479 15.2 3.3468573 15.2H29.652719c.935822 0 1.697281-.75447 1.697281-1.681949V2.4819549C31.35 1.5544797 30.588541.8 29.652719.8"
                                            />
                                            <path
                                                fill="currentColor"
                                                fillRule="evenodd"
                                                d="M5.9317148 3.8610473v8.3986877h2.1976434V3.8610473H5.9317148m6.8886832 0-.509286 3.9246344-.312287-2.1332276c-.094387-.6837788-.180593-1.2824555-.266926-1.7914068H8.8811102v8.3986877h1.9266258l.0083-5.5445848.809278 5.5445848h1.37198l.772121-5.6666451.0042 5.6666451h1.92209V3.8610473h-2.875228m6.293065 8.3986877c.525819 0 .92022-.02858 1.183331-.08554.258321-.05682.480586-.154532.657089-.301228.176503-.14276.304105-.34196.373904-.594322.07376-.252529.114737-.756987.114737-1.5103496V6.820831c0-.7939403-.03292-1.3269684-.07786-1.5997796-.049309-.2687531-.172528-.517211-.369803-.7365515-.193015-.2203229-.480587-.3789146-.854491-.4763373-.373905-.0978426-.99002-.1471153-2.053784-.1471153h-1.639203v8.3986877zm.02077-6.884012c.08593.048988.143712.1263976.168596.2361392.02444.1058216.03688.3499397.03688.7287133v3.252332c0 .5621415-.03688.9041015-.111069 1.0304995-.07391.125978-.266799.186867-.583326.186867V5.2985972c.238248 0 .402308.024214.488917.077124m3.056013-1.5146587v8.3986745h1.980062l.139641-.533456c.17644.215833.373693.374428.591317.484593.218069.105683.538367.158594.788549.158594.345353 0 .649055-.08944.899702-.272683.254866-.178879.415344-.394866.481095-.639265.06982-.248166.102696-.622608.102696-1.123561V7.9773197c0-.5088167-.0085-.8388767-.03288-.9934102-.020971-.1546716-.090788-.3136849-.201475-.4767616-.115055-.1625009-.275067-.2886238-.489066-.3784902-.217771-.089447-.467931-.134372-.76006-.134372-.250182 0-.574868.049407-.792619.1511671-.213554.097434-.410807.2480424-.587246.4476398V3.8610643Zm2.863486 6.3632735c0 .402993-.02099.663486-.06198.769169-.04087.106244-.217772.158596-.353345.158596-.131184 0-.217771-.04843-.262708-.154113-.04084-.101899-.06575-.338048-.06575-.708568V8.0708145c0-.3829736.02035-.6191066.05761-.7168021.04103-.09351.127285-.1423599.254399-.1423599.135742 0 .316081.057235.36195.1629234.04494.109746.06982.3419696.06982.6962386v2.1535215"
                                            />
                                        </svg>
                                        {Number.isInteger(movieRating) ? `${movieRating}.0` : `${movieRating}`}
                                    </span>
                                )}
                                <span>{timeConvert(movieRunTime)}</span>
                                <span className="text-lg">{movieReleaseDate.substring(0, 4)}</span>
                            </div>
                        </div>

                        <p className="py-2 font-semibold text-justify text-gray-100 my-text-shadow">{movieOverView}</p>

                        <div className="flex py-2 mt-auto gap-x-5">
                            <button className="flex items-center justify-center px-6 py-2 font-semibold text-black transition-all bg-gray-200 rounded button play hover:bg-gray-300">
                                <span className="mr-3 text-lg">&#9654;</span>PLAY NOW
                            </button>
                            <button className="flex items-center justify-center px-6 py-2 font-semibold text-white transition-all bg-gray-700 rounded button add hover:bg-gray-800 bg-opacity-80 hover:bg-opacity-80">
                                <span className="mr-3 text-4xl">&#43;</span>WATCHLIST
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HomePageImage;
