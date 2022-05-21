import React from "react";
import MovieInput from "./MovieInput";
import MovieItem from "./MovieItem";
import NavBar from "./NavBar";

function App() {
    const movieList = [
        {
            movieName: "The Baby Driver",
            movieTime: 115,
            movieShortDetails: "After being coerced into working for a crime boss, a young getaway driver finds himself taking part in a heist doomed to fail.",
            movieDetails: `Baby is a getaway driver in Atlanta. As a child he survived a car crash, which killed his parents and left him with tinnitus, and he finds catharsis in music. Baby typically uses one of his many iPods to soothe his tinnitus with music. Baby ferries crews of robbers assembled by criminal mastermind Doc as recompense for the theft of a car containing Doc's stolen goods.Between jobs, he remixes snippets of conversations he records and cares for his deaf foster father Joseph. At Bo's Diner, he meets a waitress named Debora, and they start dating.`,
            movieImage: `TheBabyDriver.jpg`,
            movieWatchTime: 85,
        },
        {
            movieName: "Doctor Strange",
            movieTime: 118,
            movieShortDetails: "While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts.",
            movieDetails: `Dr. Stephen Strange's life changes after a car accident robs him of the use of his hands. When traditional medicine fails him, he looks for healing, and hope, in a mysterious enclave. He quickly learns that the enclave is at the front line of a battle against unseen dark forces bent on destroying reality. Before long, Strange is forced to choose between his life of fortune and status or leave it all behind to defend the world as the most powerful sorcerer in existence.`,
            movieImage: `DoctorStrange.jpg`,
            movieWatchTime: 60,
        },
        {
            movieName: "The Amazing Spider-Man 2",
            movieTime: 141,
            movieShortDetails: "When New York is put under siege by Oscorp, it is up to Spider-Man to save the city he swore to protect as well as his loved ones.",
            movieDetails: `Confident in his powers as Spider-Man, Peter Parker embraces his new role as a hero and spends time with Gwen Stacy in between protecting New York from criminals. However, his greatest battle yet is about to begin. With the emergence of Electro, Peter must confront an enemy far more powerful than he is. And when his old friend Harry Osborn returns, Peter comes to realize that all his enemies have one thing in common: Oscorp. `,
            movieImage: `TheAmazingSpiderMan2.jpg`,
            movieWatchTime: 20,
        },
        {
            movieName: "Star Trek Beyond",
            movieTime: 122,
            movieShortDetails: "The crew of the USS Enterprise explores the furthest reaches of uncharted space, where they encounter a new ruthless enemy, who puts them, and everything the Federation stands for, to the test.",
            movieDetails: `A surprise attack in outer space forces the Enterprise to crash-land on a mysterious world. The assault came from Krall, a lizard-like dictator who derives his energy by sucking the life out of his victims. Krall needs an ancient and valuable artifact that's aboard the badly damaged starship. Left stranded in a rugged wilderness, Kirk, Spock and the rest of the crew must now battle a deadly alien race while trying to find a way off their hostile planet. `,
            movieImage: `StarTrekBeyond.jpg`,
            movieWatchTime: 32,
        },
    ];

    return (
        <div className="App bg-white dark:bg-[#171717] min-h-screen font-mono">
            <NavBar></NavBar>
            <div className="h-auto p-4">
                <MovieInput></MovieInput>
                <MovieItem movieName={movieList[0].movieName} movieTime={movieList[0].movieTime} movieShortDetails={movieList[0].movieShortDetails} movieDetails={movieList[0].movieDetails} movieImage={movieList[0].movieImage} movieWatchTime={movieList[0].movieWatchTime}></MovieItem>
                <MovieItem movieName={movieList[1].movieName} movieTime={movieList[1].movieTime} movieShortDetails={movieList[1].movieShortDetails} movieDetails={movieList[1].movieDetails} movieImage={movieList[1].movieImage} movieWatchTime={movieList[1].movieWatchTime}></MovieItem>
                <MovieItem movieName={movieList[2].movieName} movieTime={movieList[2].movieTime} movieShortDetails={movieList[2].movieShortDetails} movieDetails={movieList[2].movieDetails} movieImage={movieList[2].movieImage} movieWatchTime={movieList[2].movieWatchTime}></MovieItem>
                <MovieItem movieName={movieList[3].movieName} movieTime={movieList[3].movieTime} movieShortDetails={movieList[3].movieShortDetails} movieDetails={movieList[3].movieDetails} movieImage={movieList[3].movieImage} movieWatchTime={movieList[3].movieWatchTime}></MovieItem>
            </div>
        </div>
    );
}

export default App;
