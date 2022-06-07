import { useState } from "react";

const MovieInput = (props) => {
    function handleSubmit(e) {
        e.preventDefault();
        props.updateMovieName(e.target[0].value);
    }

    return (
        <div className="flex justify-center w-full mb-5">
            <form className="w-full lg:max-w-[75%]" id="nameInputForm" onSubmit={(e) => handleSubmit(e)}>
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        type="text"
                        name="movieName"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        autoComplete="off"
                        required
                    />
                    <label
                        htmlFor="movieName"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Enter Movie Name To Search
                    </label>
                </div>
                <div className="w-full flex justify-end">
                    <button
                        type="submit"
                        htmlFor="nameInputForm"
                        className="text-md flex justify-center items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded w-32 h-8 px-4 py-5 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default MovieInput;
