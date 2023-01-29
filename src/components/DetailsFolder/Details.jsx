import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import './Details.css'

function DetailList() {
//necessary const used for dispatch,reducers,params, and history
    const dispatch = useDispatch();
    const details = useSelector(store => store.details);
    const params = useParams();
    const history = useHistory();
//function to run to be brought home on button click
    const backToHomePage = (event) => {
        event.preventDefault();
        history.push('/')
    }
//
    useEffect(() => {
        const movieId = params.id
        dispatch({ 
            type: 'FETCH_DETAILS',
            payload: movieId
         });
    }, [params.id]);

    return (
        <div>
            <h1>Movie Details</h1>
            
                {details.map((detail, index) =>{
                    return (
                        <section key={ index }>
                        <img 
                            src={detail.poster}></img>
                        <p className='titleHeader'>Title:</p>
                        <p className='title'>{detail.title}</p>
                        <p className='descriptionHeader'>Description:</p>
                        <p className='description'>{detail.description}</p>
                        <p className='genres'>Genre: {detail.genres}</p>
                    </section>
                    );
                })}
            

        <button className='button' onClick={backToHomePage}>Back to home page</button>

        </div>

    )
}

export default DetailList;