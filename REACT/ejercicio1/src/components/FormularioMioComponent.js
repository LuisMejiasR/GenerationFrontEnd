import React from "react";

const FormularioMioComponent = () => {
    return (<form>
    <div className="form-group">
        <label>Nombre:</label>
        <input 
        type="text"
        className="form-control"
        id="nombre"
        placeholder="Nombre del anime"/>
        <br/>
    </div>
    <div className="form-group">
        <label>Numero de episodios</label>
        <input 
        type="text"
        className="form-control"
        id="episodios"
        placeholder="Ingresa un número"/>
        <br/>
    </div>
    <div className="form-group">
        <label>Genero</label>
        <input 
        type="text"
        className="form-control"
        id="genero"
        placeholder="Ingresa el genero"/>
        <br/>
    </div>
    <div className="form-group">
        <label>Contraseña</label>
        <input 
        className="form-control"
        type="text"
        id="password"
        placeholder="password"/>
        <br/>
    </div>
    <button type="submit" className="btn btn-primary">Crear usuario</button>
    </form>);
}

export default FormularioMioComponent;