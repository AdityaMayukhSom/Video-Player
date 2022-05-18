import "../css/MovieInput.css";
import FileInput from "./FileInput";
import TextInput from "./TextInput";
import { useState } from "react";

const MovieInput = () => {
    const [data, setData] = useState({
        movieName: "",
        movieTime: 0,
        movieShortDetails: "",
        movieDetails: ``,
        movieImage: ``,
    });

    function handle(e) {
        const newData = { ...data };
        newData[e.target.id] = e.target.inputValue;
        setData(newData);
        console.log(newData);
    }

    function submit(e) {
        e.preventDefault();
        const movieName = e.target[0].value;
        const movieTime = e.target[1].value;
        const movieShortDetails = e.target[2].value;
        const movieDetails = e.target[3].value;
    }

    return (
        <div className="flex justify-center w-full mb-5">
            <form className="w-full lg:max-w-[75%]" onSubmit={(e) => submit(e)}>
                <TextInput inputType="name" inputID="movie-name" labelText="Movie Name"></TextInput>
                <TextInput inputType="number" inputID="movie-time" labelText="Movie Length"></TextInput>
                <TextInput inputType="text" inputID="movie-description-short" labelText="Movie Description (Short)"></TextInput>
                <TextInput inputType="text" inputID="movie-description-long" labelText="Movie Description (Long)"></TextInput>
                <FileInput></FileInput>
                <div className="w-full flex justify-center">
                    <button onSubmit={handle} type="submit" className="text-lg text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded w-60 h-12 px-5 text-center focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default MovieInput;
