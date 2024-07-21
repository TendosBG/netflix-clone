import { useState, useEffect } from "react";
import axios from "axios";

interface RowProps {
  title: string;
  fetchURL: string;
}

interface Movie {
  poster_path: string;
  name: string;
}

const Row: React.FC<RowProps> = ({ title, fetchURL }) => {
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchURL]);

    console.log(movies);

    return (
        <div className={"row"}>
            <h2>{title}</h2>
            <div className={"row__posters"}>
                {movies?.map((movie) => (
                    <img src={movie.poster_path} alt={movie.name} />
                ))}
            </div>
        </div>
    );
}

export default Row;