import React,{useState} from "react";
import FormularioMioComponent from "./FormularioMioComponent";
import AnimeComponent from "./AnimeComponent";

const initialAnimes = [
    {
        key: 1,
        nombre: 'Horimiya',
        genero: 'shonen',
        capitulos: '24'
    },
    {
        key: 2,
        nombre: 'Shokugeki no soma',
        genero: 'shonen',
        capitulos: '58'
    },
    {
        key: 3,
        nombre: 'Full metal alchemist',
        genero: 'shonen',
        capitulos: '32'
    }
]

const UsuarioComponent = () => {

    const [animes, setAnimes] = useState(initialAnimes);

    const animeDelete = (animeEliminar) => {
        const changeAnimes = animes.filter(a => a.key !== animeEliminar)
        setAnimes(changeAnimes)
    }
    const animeAdd =(anime)=>{
        const addAnime = [
            ...animes,
            anime
        ]
        setAnimes(addAnime)
    }
    return(<>
        <div className="container mt-4">
            <div className="row">
                <div className="col-8">
                    <h2>Lista de animes por ver:</h2>
                        <ol>
                        {
                            animes.map(anime => <AnimeComponent
                                                anime={anime}
                                                animeDelete ={animeDelete}
                                                />)
                        }
                        </ol>
                </div>
                <div className="col">
                    <h1>Anime:</h1>
                    <FormularioMioComponent animeAdd={animeAdd}/>
                </div>

            </div>
        </div>
        </>);
}

export default UsuarioComponent;