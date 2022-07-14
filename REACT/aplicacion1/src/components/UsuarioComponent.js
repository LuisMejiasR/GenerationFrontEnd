import React,{useState} from "react";
import TarjetaComponent from "./TarjetaComponent";
import FormularioComponent from "./FormularioComponent";

/**const usuario1 ={
    nombre: 'Joseph',
    apellido: 'JoeStar',
    edad: '18'
}
const usuario2 ={
    nombre: 'Josuske',
    apellido:'Higashikata',
    edad: '16'
}*/

const initialUsuarios = [
    {
        key: 0,
        nombre: 'Joseph',
        apellido: 'JoeStar',
        edad: '18'
    },
    {
        key: 1,
        nombre: 'Josuske',
        apellido:'Higashikata',
        edad: '16'
    },
    {
        key: 2,
        nombre: 'Luis',
        apellido:'Mejías',
        edad: '28'
    }
]

const UsuarioComponent = () => {
    //los hooks se utilizan dentro del componente
    const [usuarios, setUsuarios] = useState(initialUsuarios);
    /*state[0] = initialUsuarios
    state[1] =funcion que nos permite hacer cambios*/

    const tarjetaDelete = (usuarioKey) => {
        const changeUsuarios = usuarios.filter(u => u.key !== usuarioKey);
        setUsuarios(changeUsuarios);
    }

    return (<div className="container mt-4">
    <div className="row">
        <div className="col-8">
            <h1>Lista</h1>
            {
                usuarios.map(usuario => 
                <TarjetaComponent 
                key={usuario.key}
                usuario={usuario}
                tarjetaDelete={tarjetaDelete}/>)
            }

        </div>
        <div className="col">
            <h1>Formulario</h1>
            <FormularioComponent/>
        </div>

    </div>
</div>);
}

export default UsuarioComponent;