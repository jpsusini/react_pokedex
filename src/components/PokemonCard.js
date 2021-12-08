import React from 'react'

const PokemonCard  = ({id,name,img,type,base_experience}) => {
    const style = `card-container ${type}`
    
    return(
        <div className={style}>
            <div className="number">
                <small>#0{id}</small>
            </div>
                <img src={img} alt={name} />
            <div className="detail-wrapper">
                <h3>{name}</h3>
                <medium>type: {type}</medium>
                <small>base_experience: {base_experience}</small>
            </div>
        </div>
    )
}

export default PokemonCard 