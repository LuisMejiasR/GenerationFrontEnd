import React,{useState} from "react";

const initialValues = [
    {
        key: '',
        nombre: '',
        genero: '',
        capitulos: ''
    }
]

const FormularioMioComponent = ({animeAdd}) => {
    //usando useState para crear una copia de initialValues
    const [values, setValues] = useState(initialValues);
    //seteando los atributos que vamos a agregar a values
    const {key, nombre, genero, capitulos} = values;

    const handleInputChange=(e)=>{

        const changedFormValue = {
            ...values,
            [e.target.name]:e.target.value
        }
        setValues(changedFormValue)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        animeAdd(values);
    }



    return (<form onSubmit={handleSubmit}>
    <div className="form-group">
        <label>id:</label>
        <input 
        type="text"
        className="form-control"
        id="key"
        placeholder="key"
        value={key}
        name='key'
        onChange={handleInputChange}
        />
        <br/>
    </div>
    <div className="form-group">
        <label>Nombre:</label>
        <input 
        type="text"
        className="form-control"
        id="nombre"
        placeholder="Nombre del anime"
        value={nombre}
        name='nombre'
        onChange={handleInputChange}/>
        <br/>
    </div>
    <div className="form-group">
        <label>Numero de episodios</label>
        <input 
        type="text"
        className="form-control"
        id="episodios"
        placeholder="Ingresa un número"
        value={capitulos}
        name='capitulos'
        onChange={handleInputChange}/>
        <br/>
    </div>
    <div className="form-group">
        <label>Genero</label>
        <input 
        type="text"
        className="form-control"
        id="genero"
        placeholder="Ingresa el genero"
        value={genero}
        name='genero'
        onChange={handleInputChange}/>
        <br/>
    </div>
    <button type="submit" className="btn btn-primary">Crear usuario</button>
    </form>);
}

export default FormularioMioComponent;