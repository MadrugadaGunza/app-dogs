import React from 'react'

const Card = ({ data }) => {
    return (
        <div className='card'>
            <p className='username'>{data.author}</p>
            <img src={data.src} alt={data.title} />
            <h1 className='title'>{data.title}</h1>
            <p className='description'>{data.description}</p>
        </div>
    )
}

export default Card
