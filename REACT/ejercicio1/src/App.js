import React from "react";

//formato de funcion basica en REACT
const App = () => {
    return(
        <>
        <div className="container mt-4">
            <div className="row">
                <div className="col-8">
                    <h1>Lista de animes por ver:</h1>
                    <ol>
                        <li>Horimiya</li>
                        <li>Nagatoro</li>
                        <li>Your Eternity</li>
                        <li>Odd Taxi</li>
                        <li>Shield Hero</li>
                        <li>Link Click</li>
                    </ol>
                </div>
                <div className="col">
                    <h1>Formulario</h1>
                    <form>
                        <label>Nombre
                        <input type="text" id="apellido" placeholder="Ingresa tu Nombre"></input>
                        </label>
                        <label>Apellido
                        <input type="text" id="apellido" name="apellido" placeholder="Ingresa tu apellido"></input>
                        </label>
                        <label>Edad
                        <input type="number" id="apellido" name="apellido" placeholder="Ingresa tu edad"></input>
                        </label>
                        
                        <button>Enviar</button>
                    </form>
                </div>

            </div>
        </div>
        </>
    ); 
};

//recordamos exportar sino no lo reconoce
export default App;