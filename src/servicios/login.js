const URL_BACK = "http://127.0.0.1:8000"

export const login = async (objdatos) => {
    const peticion = await fetch(`${URL_BACK}/login_custom`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(objdatos)
    })
    let data = await peticion.json()
    return data
}