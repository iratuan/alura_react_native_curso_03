import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import estilos from './estilos';
import { salvarRepositorio, deletarRepositorio } from '../../servicos/requisicoes/respositorios';

export default function InfoRepositorio({ route, navigation }) {
    const [nome, setNome] = useState(route.params.item.name);
    const [data, setData] = useState(route.params.item.data);

    const salvar = async () => {
        const resultado = await salvarRepositorio(
            route.params.item.postId,
            nome,
            data, 
            route.params.item.id
        );

        if(resultado === 'Sucesso'){
           Alert.alert("Repositório atualizado")
           navigation.goBack()
        }else{
            Alert.alert("Erro ao atualizar o repositório")
        }
    }

    const deletar =  async() => {
        const resultado = await deletarRepositorio(route.params.item.id);

        if(resultado === 'Sucesso'){
           Alert.alert("Repositório deletado com sucesso")
           navigation.goBack()
        }else{
            Alert.alert("Erro ao deletar o repositório")
        }
    }

    return (
        <View style={estilos.container}>
            <TextInput
                placeholder="Nome do repositório"
                autoCapitalize="none"
                style={estilos.entrada}
                value={nome}
                onChangeText={setNome}
            />
            <TextInput
                placeholder="Data de criação"
                autoCapitalize="none"
                style={estilos.entrada}
                value={data}
                onChangeText={setData}
            />
            <TouchableOpacity
                style={estilos.botao}
                onPress={salvar}
            >
                <Text style={estilos.textoBotao}>
                    Salvar
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[estilos.botao, { backgroundColor: '#DD2B2B', marginTop: 10 }]} 
                onPress={deletar}               
            >
                <Text style={estilos.textoBotao}>
                    Deletar
                </Text>
            </TouchableOpacity>
        </View>
    );
}
