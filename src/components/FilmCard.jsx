import React from 'react';

const Card = props => {
    return (
        <article className="col-md-6">
            <div className="card p-1 m-4">
                <div className="card-body">
                    <h1 className="card-title">{props.film.title}</h1>
                    <p className="card-text">{props.film.description}</p>
                </div>
            </div>
        </article>
    )
}

export default Card;