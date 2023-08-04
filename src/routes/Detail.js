import {useParams} from "react-router-dom";
import {useEffect, useState, useCallback} from "react";

//https://yts.mx/api/v2/movies_details.json?movie_id=year
function Detail(callback, deps) {
    const {id} = useParams();
    const getMovie = useCallback(async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json()
        console.log(json);
    },[id]);
    useEffect(() => {
        getMovie();
    }, []);
    return (
        <div>
            <h1>Detail</h1>
        </div>
    )
}

export default Detail;