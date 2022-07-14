import React from "react";
import FormularioMioComponent from "./FormularioMioComponent";
import ListaMiaComponent from "./ListaComponent";

const UsuarioComponent = () => {
    return(<>
        <div className="container mt-4">
            <div className="row">
                <div className="col-8">
                    <ListaMiaComponent/>
                </div>
                <div className="col">
                    <h1>Anime:</h1>
                    <FormularioMioComponent/>
                </div>

            </div>
        </div>
        </>);
}

export default UsuarioComponent;