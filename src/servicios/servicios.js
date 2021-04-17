import { useContext } from "react";
import AdminContext from "../context/adminContext";
import { URL_BACKEND1, URL_BACKEND2} from "./../environments/environments";
///BACKEND DJANGO
const URL_DJANGO = "http://127.0.0.1:8000"


export const getUsuarios = async() => {

    const peticion = await fetch(`${URL_BACKEND1}/users`);
    const data = await peticion.json();
    return data;
}

export const getCitas = async() => {
    const peticion = await fetch(`${URL_BACKEND1}/citas`);
    const data = await peticion.json();
    return data;
}

export const buscarCitasDelUsuario = async(usuario) => {
    const peticion = await fetch(`${URL_DJANGO}/citass?nombre=${usuario}`);
    const data = await peticion.json();
    return data;
}

export const postComentario = async(objComentario) => {
    const peticion = await fetch(`${URL_DJANGO}/comentarios`, {
        method: "POST",
        body: JSON.stringify(objComentario), 
        headers: {
            "Content-type": "application/json"
        }
    })
    const data = await peticion.json();
    return data
}




/***
 * Echooo
 */

export const getDatosConsultorio = async (token) => {
    const peticion = await fetch(`${URL_DJANGO}/veterinaria`, {
        method: "GET",
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });
    const data = await peticion.json();
    return data; 
}

export const putDatosConsultorio = async (formData, token)  => {
    const peticion = await fetch(`${URL_DJANGO}/veterinaria/1`, {
        method: "PUT", 
        body: formData,
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    const data = await peticion.json();
    return data
}








/**
 * Modificando con Base de Datos todo echo
 */


export const getVeterinarios = async (token) => {
    const peticion = await fetch(`${URL_DJANGO}/veterinario`, {
        method: "GET",
        headers: {
            "Authorization" : `Bearer ${token}`,
    },
    });
    const data = await peticion.json();
    return data;
}

export const postVeterinario = async (formData, token) => {

    const peticion = await fetch(`${URL_DJANGO}/veterinario`,  {
        method: "POST",
        body: formData,
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    const data = await peticion.json();
    return data
}


export const putVeterinario = async(formData, token, id) => {
    const peticion = await fetch(`${URL_DJANGO}/veterinario/${id}`, {
        method: "PUT",
        body: formData,
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    const data = await peticion.json()
    return data
}

export const deleteVeterinario = async(vetId, token) => {
    const peticion = await fetch(`${URL_DJANGO}/veterinario/${vetId}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    const data = await peticion.json()
    return data
}
