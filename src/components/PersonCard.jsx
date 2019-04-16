import React from 'react';

const PersonCard = props => {
    return (
        <article className="col-md-6">
            <div className="card shadow p-1 m-4">
                <div className="card-body">
                    <h1 className="card-title">Name: {props.person.name}</h1>
                    <p className="card-text">Age: {props.person.age}</p>
                    <p className="card-text">Gender: {props.person.gender}</p>
                    <p>
                        <a href={props.person.url}>Additional info</a>
                    </p>
                </div>
            </div>
        </article>
    )
}

export default PersonCard;