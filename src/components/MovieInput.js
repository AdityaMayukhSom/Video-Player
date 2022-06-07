const MovieInput = (props) => {
    function handleSubmit(e) {
        e.preventDefault();
        props.updateMovieName(e.target[0].value);
    }

    return (
        <div className="flex justify-center w-full mb-5 items-center ">
            <form className="w-full lg:max-w-[75%]" id="nameInputForm" onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">
                    Search
                </label>
                <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input
                        type="search"
                        id="movieName"
                        name="movieName"
                        className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg focus:ring-0 focus:border-blue-500 dark:bg-[#232323]  dark:placeholder-gray-400 dark:text-white "
                        placeholder="Search With Movie Name"
                        autoComplete="off"
                        required
                    />
                    <button type="submit" htmlFor="nameInputForm" className="text-white absolute right-2.5 bottom-2.5 bg-[#238636] hover:bg-[#2EA043] focus:outline-none focus:ring-0 font-medium rounded-md text-sm px-4 py-2 ">
                        Search
                    </button>
                </div>
            </form>
            <button onClick={props.getTrending} className="text-white  bg-[#238636] hover:bg-[#2EA043] focus:outline-none focus:ring-0 font-medium rounded text-sm px-4 h-10 ml-8 whitespace-nowrap">
                Get Trending
            </button>
        </div>
    );
};

export default MovieInput;
