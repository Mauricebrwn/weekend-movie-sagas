import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

function DetailList() {

    const dispatch = useDispatch();
    const details = useSelector(store => store.details);
    const history = useHistory();

    const backToHomePage = (event) => {
        event.preventDefault();
        history.push('/')
    }

    useEffect(() => {
        dispatch({ type: 'SAGA/FETCH_DETAILS' });
    }, []);

    return (
        <div>
            <h3>Movie Details:</h3>
            <ul>
                {Array.from(details).map((detail) =>{
                    return <li key={detail.id}>
                        {detail.id}
                        {detail.title}
                        {detail.description}
                        <img 
                            src={movie.poster}></img>
                        {detail.name}
                    </li>
                })}
            </ul>

        <button onClick={backToHomePage}>Back to home page</button>

        </div>

    )
}

export default DetailList;