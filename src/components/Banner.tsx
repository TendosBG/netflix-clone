import {useEffect, useState} from "react";
import axios from "../scripts/axios";
import requests from "../scripts/request";
import "../styles/Banner.css";

interface Movie {
    id: number;
    poster_path: string;
    backdrop_path: string;
    name: string;
    title: string;
    original_name: string;
    overview: string;
}

function Banner() {
    const [movie, setMovie] = useState<Movie | null>(null);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
            return request;
        }
        fetchData();
    }, []);

    function truncate(str: string | undefined, n: number) {
        if (str === undefined) {
            return "";
        }
        return str.length > n ? str.substring(0, n - 1) + "..." : str;
    }

    return (
        <header
            className={"banner"}
            style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`
            }}
        >
            <div className={"banner__contents"}>
                <h1 className={"banner__title"}>{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className={"banner__buttons"}>
                    <button className={"banner__button"}>Lire</button>
                    <button className={"banner__button"}>Ma liste</button>
                </div>
                <h1 className={"banner__description"}>{truncate(movie?.overview, 150)}</h1>
            </div>
            <div className={"banner--fadeBottom"} />
        </header>
     );
}

export default Banner;