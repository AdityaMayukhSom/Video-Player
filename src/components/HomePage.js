// A component in react is just a javascript function which returns ome special jsx code

import "../css/HomePage.css";
import svg1 from "../svg1.svg";

function ExpenseItem() {
    return (
        <div className="container px-6 py-16 items-center lg:flex">
            <div className="flex items-center justify-center w-full  lg:mt-0 lg:w-1/2">
                <img className="mb-5 max-w-[400px] max-h-full lg:max-w-2xl" src={svg1} alt="Catalogue-pana.svg" />
            </div>
            <div className="w-full lg:w-1/2 lg:max-w-lg">
                <h1 className="text-2xl font-semibold text-gray-800 uppercase dark:text-white lg:text-3xl">Best Place To Choose Your Clothes</h1>
                <p className="mt-2 text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio.</p>

                <button href="#" className="inline-flex items-center justify-center w-full px-6 py-3 my-3 text-lg text-white bg-green-500 rounded-md hover:bg-green-400 sm:w-auto sm:mb-0" data-primary="green-400" data-rounded="rounded-2xl" data-primary-reset="{}">
                    Shop Now
                    <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default HomePage;
