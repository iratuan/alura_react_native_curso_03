import api from "../api";

export async function buscarUsuario(nomeUsuario) {
    try {
        const resultado = await api.get(`/users/${nomeUsuario}`)
        console.log(resultado)
        return resultado.data
    } catch (error) {
        console.log(error)
        return {}
    }
}