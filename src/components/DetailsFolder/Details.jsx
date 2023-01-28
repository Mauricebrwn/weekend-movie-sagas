import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function DetailList() {

    const dispatch = useDispatch();
    const details = useSelector(store => store.details);

    useEffect(() => {
        dispatch({ type: 'SET_DETAILS' });
    }, []);

    return (
        <main>
            <h1>DetailList</h1>
            <section className="details">
                {details.map(detail => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default DetailList;