import { useState, useEffect } from "react";
import axios from "../scripts/axios";
import "../styles/Row.css";
import YouTube from "react-youtube";
// @ts-expect-error Cannot find module 'movie-trailer'.
import movieTrailer from "movie-trailer";

interface RowProps {
    title: string;
    fetchURL: string;
    isLargeRow?: boolean;
}

interface Movie {
    id: number;
    poster_path: string;
    backdrop_path: string;
    name: string;
}

const base_url = "https://image.tmdb.org/t/p/original";

const Row: React.FC<RowProps> = ({ title, fetchURL, isLargeRow }) => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [trailerUrl, setTrailerUrl] = useState<string | null>("");

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchURL]);

    const handleClick =  (movie: Movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
        } else {

            movieTrailer(null ,{ tmdbId: movie.id })
                .then((url: string | URL)=>{
                    console.log("url is "+url);
                    const urlParams=new URLSearchParams(new URL(url).search);
                    console.log("urlParamsn"+urlParams);
                    setTrailerUrl(urlParams.get("v"));
                })
                .catch((error: never)=> console.log(error));
        }
    }

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        <div className={"row"}>
            <h2>{title}</h2>
            <div className={"row__posters"}>
                <div className={"left_side"}>
                    <div className={"left_arrow"}></div>
                </div>
                {movies?.map((movie) => (
                    ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path))?
                        <img
                            key={movie.id}
                            onClick={() => handleClick(movie)}
                            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                            alt={movie.name}
                        />
                        : null



                ))}
                <div className={"right_arrow"}></div>
            </div>
            {trailerUrl ? <YouTube videoId={trailerUrl} opts={opts}/> : null}
        </div>
    );
}

export default Row;