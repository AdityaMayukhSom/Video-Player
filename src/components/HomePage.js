import HomePageImage from "./HomePageImage";
import { useState } from "react";

function HomePage() {
    const CAROUSEL_IMAGE_NUMBER = 6;
    const [carouselMargin, setCarouselMargin] = useState({ marginLeft: `0vw` });

    const [imageNumber, setImageNumber] = useState(0);
    function handleCarousel(decide) {
        let requestedImageNumber;
        switch (decide) {
            case "+":
                requestedImageNumber = imageNumber + 1;
                if (requestedImageNumber < CAROUSEL_IMAGE_NUMBER) {
                    setCarouselMargin({ marginLeft: `-${requestedImageNumber * 100}vw` });
                    setImageNumber(imageNumber + 1);
                    break;
                } else {
                    break;
                }
            case "-":
                requestedImageNumber = imageNumber - 1;
                if (requestedImageNumber > -1) {
                    setCarouselMargin({ marginLeft: `-${requestedImageNumber * 100}vw` });
                    setImageNumber(imageNumber - 1);
                    break;
                } else {
                    break;
                }

            default:
                break;
        }
    }

    return (
        <div className="w-full relative group">
            {imageNumber > 0 && (
                <div className="absolute top-0 left-0 w-20 bg-gradient-to-r from-[#000000ad] to-transparent h-full z-30 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500" onClick={() => handleCarousel("-")}>
                    <svg className="h-8 w-8 cursor-pointer" viewBox="0 0 24 24">
                        <path fill="#fff" d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
                    </svg>
                </div>
            )}
            <div className="grid grid-flow-col overflow-x-hidden no-scrollbar transition-all duration-700" style={carouselMargin}>
                {/* 
                Spider-Man: No Way Home 634649 
                Doctor Strange in the Multiverse of Madness 453395 
                Eternals 524434
                Shang-Chi and the Legend of the Ten Rings 566525 
                Venom: Let There Be Carnage 580489 
                Avengers: Endgame 299534
                Captain Marvel 299537
                Captain America: Civil War 271110
                Transformers: Revenge of the Fallen 8373
                Transformers: Dark of the Moon 38356
                Thor 10195
                Thor: Love and Thunder 616037
                Thor: Ragnarok 284053
                Thor: The Dark World 76338
            */}
                <HomePageImage movieID={524434} />
                <HomePageImage movieID={634649} />
                <HomePageImage movieID={299534} />
                <HomePageImage movieID={38356} />
                <HomePageImage movieID={284053} />
                <HomePageImage movieID={580489} />
            </div>
            {imageNumber < CAROUSEL_IMAGE_NUMBER - 1 && (
                <div className="absolute top-0 right-0 w-24 bg-gradient-to-l from-[#000000ad] to-transparent h-full z-30 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500" onClick={() => handleCarousel("+")}>
                    <svg className="h-8 w-8 cursor-pointer" viewBox="0 0 24 24">
                        <path fill="#fff" d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
                    </svg>
                </div>
            )}
        </div>
    );
}

export default HomePage;
