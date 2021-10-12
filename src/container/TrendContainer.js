import React, { useEffect } from "react";
import { fetchTrending, deleteTrending } from "../store/actions/fetchTrending";
import { useDispatch, useSelector } from "react-redux";

const TrendContainer = () => {
    const dispatch = useDispatch();

    useEffect(() => {fetchTrending(dispatch)} );

    const TrendData = useSelector((state) => state.trending.movies) ||
        {results: []};

    return (
        <div>
            <h1>Trending</h1>
            {TrendData.results.map((movie) => (
                <div key={movie.id}>
                    <img
                        style={{ width: "90%" }}
                        alt="movie poster"
                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                        key={movie.id}
                    />
                    <h3>{movie.name || movie.title}</h3>
                    <button onClick={() => deleteTrending(dispatch, movie.id)}>
                        영화 삭제
                    </button>
                    <p>{movie.overview}</p>
                </div>
            ))}
        </div>
    );
};

export default TrendContainer;