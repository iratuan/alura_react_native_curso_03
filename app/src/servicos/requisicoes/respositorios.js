import api from "../api";


export async function buscarRepositorios(id) {
    try {
        const resultado = await api.get("repos?postId=" + id)
        return resultado.data
    } catch (error) {
        console.log(error)
        return []
    }
}

export async function salvarRepositorio(postId, name, data, id) {
    try {
        await api.put(`repos/${id}`, {
            name, 
            postId, 
            id, 
            data
        })
        return 'Sucesso'
    } catch (error) {
        console.log(error)
        return 'Erro'
    }
}

export async function criarRepositorio(postId, name, data) {
    try {
        await api.post(`repos`, {
            name, 
            postId, 
            data
        })
        return 'Sucesso'
    } catch (error) {
        console.log(error)
        return 'Erro'
    }
}

export async function deletarRepositorio(id) {
    try {
        await api.delete(`repos/${id}`)
        return 'Sucesso'
    } catch (error) {
        console.log(error)
        return 'Erro'
    }
}