import React from "react";

const AnimeComponent = ({anime, animeDelete}) => {
    return (<div className="card">
    <div className="card-body ms-5">
        <li>
            <h5 className="card-title">{anime.nombre}</h5>
            <hr/>
            <p>Número de episodios: {anime.capitulos}</p>
            <p>Genero: {anime.genero}</p>
            <div className="d-flex justify-content-end">
                <button className="btn btn-sm btn-outline-primary me-2">Editar</button>
                <button className="btn btn-sm btn-outline-danger" onClick={() => animeDelete(anime.key)}>Eliminar</button>
            </div>
        </li>
        
        
    </div>
</div>)
}

export default AnimeComponent;