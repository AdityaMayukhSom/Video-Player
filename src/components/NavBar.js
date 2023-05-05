const NavBar = () => {
    return (
        <nav className=" bg-[#111111] px-4 md:px-10 py-5 flex md:flex-row md:justify-between w-full">
            <div className="flex items-center">
                <img src="./TMDb.svg" alt="The Movie DB Logo" className="h-8 w-8 mr-3" />
                <div className="flex items-center text-lg md:text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300 ">Movie DB</div>
            </div>

            <ul className="items-center md:flex flex-row gap-x-6 mr-4 hidden">
                <li className="text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400  cursor-pointer">Home</li>
                <li className="text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer">About</li>
                <li className="text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer">Contact</li>
            </ul>
        </nav>
    );
};

export default NavBar;
