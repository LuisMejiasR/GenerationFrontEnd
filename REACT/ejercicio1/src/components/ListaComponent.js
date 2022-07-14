import React from "react";
import AnimeComponent from "./AnimeComponent";

const animes = [
    {
        nombre: 'Horimiya',
        genero: 'shonen',
        capitulos: 24
    },
    {
        nombre: 'Shokugeki no soma',
        genero: 'shonen',
        capitulos: 58
    },
    {
        nombre: 'Full metal alchemist',
        genero: 'shonen',
        capitulos: 32
    }
]

const ListaMiaComponent = () => {
    return (<>
    <h2>Lista de animes por ver:</h2>
    <ol>
    {
        animes.map(anime => <AnimeComponent anime={anime}/>)
    }
    </ol>
    </>);
}

export default ListaMiaComponent;