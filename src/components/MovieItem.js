import { useState } from "react";
import "../css/MovieItem.css";
import timeConvert from "./TimeConvert";

const MovieItem = (props) => {
    const imageLink = `./images/${props.movieImage}`;
    const [movieDetails, setMovieDetails] = useState(props.movieShortDetails);
    const changeDetailsHandler = () => {
        if (movieDetails === props.movieDetails) {
            setMovieDetails(props.movieShortDetails);
        } else {
            setMovieDetails(props.movieDetails);
        }
    };

    const progressBarWidth = (props.movieWatchTime * 100) / props.movieTime;
    //Don't Know Why Can Not Dinamically Assign Width To Progress Bar
    const progrssBarClass = `h-full w-[40%] rounded-full bg-[#02a915] w-[${progressBarWidth}%]`;

    return (
        <div className="flex h-full w-full justify-center">
            <div className="cursor-pointer liked-video glasomorphism h-52 w-full lg:max-w-[75%] rounded-lg grid grid-cols-[2fr_3fr] grid-rows-1 my-2 gap-x-4 p-3 mx-6">
                {/* Images Should Be With Respect To index.html File */}
                <div className="h-full w-full ">
                    <img className="w-full h-full object-cover rounded-md" src={imageLink} alt=""></img>
                </div>
                <div className="pr-2">
                    <div className="text-white font-semibold text-2xl">{props.movieName}</div>
                    <div className="text-md text-[#ffffffc7]">{timeConvert(props.movieTime)}</div>
                    <div onClick={changeDetailsHandler} className="no-scrollbar overflow-y-auto h-[92px] my-1 text-white text-md text-justify">
                        {movieDetails}
                    </div>
                    <div className="mt-4">
                        <div className="w-full rounded-full h-1.5 progress-container overflow-y-hidden bg-[#8686865a]">
                            <div className={progrssBarClass}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieItem;
