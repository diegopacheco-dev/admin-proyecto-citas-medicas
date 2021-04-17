import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { getDatosConsultorio, getVeterinarios } from '../servicios/servicios';
import AdminContext from './adminContext'


const AdminState = ({children}) => {
    const history2 = useHistory()
    
    const [datosLogin, setDatosLogin] = useState({
        idUsuario : 0,
        nombre : null,
        apellido : null,
        token: null,
        autenticado : false,
        cargando: true
    })

    const cerrarSesion = ()=>{
        // console.log(history2)
        localStorage.removeItem("token")
        // history2.replace("/")
        setDatosLogin({
            autenticado: false,
            nombre: null,
            apellido: null,
            token: null,
            idUsuario: 0
        })
    }



    //TRAERVETERINARIA
    const [datosConsultorio, setDatosConsultorio] = useState([""]);

    const obtenerVeterinaria = () => {
        getDatosConsultorio(datosLogin.token).then((data)=> {
            console.log(data)
            setDatosConsultorio(data);
        })
    }
    useEffect(()=> {
        obtenerVeterinaria()
    },[]);


 

    const InicioSesion = token => {
        const payload = token.split(".")[1]
        console.log(payload)
        const desencriptar = window.atob(payload)
        console.log(desencriptar)
        const convertirJson = JSON.parse(desencriptar)
        console.log(convertirJson)
        if (convertirJson.usuarioTipo === 1){
            localStorage.setItem("token", token)
            setDatosLogin({
                autenticado: true,
                token: token,
                idUsuario: convertirJson.usuarioTipo,
                nombre: convertirJson.usuarioNombre,
                apellido: convertirJson.usuarioApellido,
                cargando: false
            })
        }
        else{
            alert("usted no es administrador")
        }
    }


    const sesionLocalStorage = ()=>{ 
        if (localStorage.getItem("token")){
            InicioSesion(localStorage.getItem("token"))
        }
    }

    useEffect(()=>{
        sesionLocalStorage()
    }, [])

    return (
        <AdminContext.Provider value={{
            nombre: datosLogin.nombre,
            apellido: datosLogin.apellido,
            token: datosLogin.token,
            autenticado : datosLogin.token,
            idUsuario: datosLogin.idUsuario,
            InicioSesion: InicioSesion,
            cerrarSesion: cerrarSesion,
            datosConsultorio: datosConsultorio,
            obtenerVeterinaria: obtenerVeterinaria,
            cargando: datosLogin.cargando
        }}>
            {
                children
            }
        </AdminContext.Provider>
    )
}

export default AdminState
