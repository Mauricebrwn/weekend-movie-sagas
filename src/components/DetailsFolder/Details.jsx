import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

function DetailList() {

    const dispatch = useDispatch();
    const details = useSelector(store => store.details);
    const params = useParams();
    const history = useHistory();

    const backToHomePage = (event) => {
        event.preventDefault();
        history.push('/')
    }

    useEffect(() => {
        const movieId = params.id
        dispatch({ 
            type: 'FETCH_DETAILS',
            payload: movieId
         });
    }, [params.id]);

    return (
        <div>
            <h1>Movie Details:</h1>
            <ul>
                {details.map((detail) =>{
                    return (
                        <li key={detail.id}>
                        <img 
                            src={detail.poster}></img>
                        {detail.title}
                        {detail.description}
                        {detail.genre}
                    </li>
                    );
                })}
            </ul>

        <button onClick={backToHomePage}>Back to home page</button>

        </div>

    )
}

export default DetailList;