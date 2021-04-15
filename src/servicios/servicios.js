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

export const getComentarios = async() => {
    const peticion = await fetch(`${URL_BACKEND1}/comentarios`);
    const data = await peticion.json();
    return data;
}

export const postComentario = async(objComentario) => {
    const peticion = await fetch(`${URL_BACKEND1}/comentarios`, {
        method: "POST",
        body: JSON.stringify(objComentario), 
        headers: {
            "Content-type": "application/json"
        }
    })
    const data = await peticion.json();
    return data
}



export const getVeterinarios = async () => {
    const peticion = await fetch(`${URL_DJANGO}/veterinario`, {
        method: "GET",
        headers: {
            "Authorization" : "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjE4Mjk3ODIyLCJqdGkiOiJhYzAwYzdiNjhhZDM0NThiYjMwMTIxOWI4YTBkZGFhOCIsInVzZXJfaWQiOjMsInVzdWFyaW9UaXBvIjoxLCJ1c3VhcmlvTm9tYnJlIjoiSmVzdXMiLCJ1c3VhcmlvQXBlbGxpZG8iOiJDdWV2YSJ9.6UcipIAPoTI09Q9uta9zL2TogMPPmneTn2cXU_i9jHE",
    },
    });
    const data = await peticion.json();
    return data;
}

export const postVeterinario = async (objVeterinario) => {
    const peticion = await fetch(`${URL_DJANGO}/veterinario`, {
        method: "POST",
        body: JSON.stringify(objVeterinario),
        headers: {
            "Content-type": "application/json",
            "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjE4Mjk3ODIyLCJqdGkiOiJhYzAwYzdiNjhhZDM0NThiYjMwMTIxOWI4YTBkZGFhOCIsInVzZXJfaWQiOjMsInVzdWFyaW9UaXBvIjoxLCJ1c3VhcmlvTm9tYnJlIjoiSmVzdXMiLCJ1c3VhcmlvQXBlbGxpZG8iOiJDdWV2YSJ9.6UcipIAPoTI09Q9uta9zL2TogMPPmneTn2cXU_i9jHE"
        }
    })
    const data = await peticion.json();
    return data
}

export const putVeterinario = async(objVeterinario) => {
    const peticion = await fetch(`${URL_BACKEND1}/veterinarios/${objVeterinario.id}`, {
        method: "PUT",
        body: JSON.stringify(objVeterinario),
        headers: {
            "content-type": "application/json"
        }
    })
    const data = await peticion.json()
    return data
}

export const deleteVeterinario = async(vetId) => {
    const peticion = await fetch(`${URL_BACKEND1}/veterinarios/${vetId}`, {
        method: "DELETE"
    })
    const data = await peticion.json()
    return data
}

export const getDatosConsultorio = async () => {
    const peticion = await fetch(`${URL_BACKEND2}/Consultorio`);
    const data = await peticion.json();
    return data; 
}

export const putDatosConsultorio = async (objDatosConsultorio)  => {
    const peticion = await fetch(`${URL_BACKEND2}/Consultorio/${objDatosConsultorio.id}`, {
        method: "PUT", 
        body: JSON.stringify(objDatosConsultorio),
        headers: {
            "Content-type": "application/json"
        }
    })
    const data = await peticion.json();
    return data
}