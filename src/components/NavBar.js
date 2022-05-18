import "../css/NavBar.css";

const NavBar = () => {
    return (
        <nav className="container bg-[#000] px-6 py-2 flex md:flex-row md:justify-between">
            <div className="flex items-center">
                <a className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300 uppercase " href="#">
                    Cinecode
                </a>
            </div>

            <div className="items-center flex flex-row">
                <a className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 mx-4" href="#">
                    Home
                </a>
                <a className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 mx-4" href="#">
                    Shop
                </a>
                <a className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 mx-4" href="#">
                    Contact
                </a>
                <a className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 mx-4" href="#">
                    About
                </a>
            </div>
        </nav>
    );
};

export default NavBar;
