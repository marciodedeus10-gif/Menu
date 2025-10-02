import { Text, View, StyleSheet, Image } from 'react-native';

function TelaInicio() {
    return (
        <View style={{ flex: 1, }}>
            <View style={estilos.cabecalho}>
                <View style={estilos.centro}> 
                    <Image
                    source={ require('../assets/fotos/marcyo.jpg')}
                    style={estilos.fotos}
                    />
                </View>

            </View>

                <View style={estilos.centro}>
                    <Text style={estilos.negrit}>Nome:</Text>
                    <Text style={estilos.font}>Márcio Pereira de Deus</Text>
                </View>
                    <View style={estilos.centro}>
                    <Text style={estilos.negrit}>Hobbies:</Text>
                    <Text style={estilos.font}>Amo atividade ao ar livre pesca, campismo, caminhada, corrida, natação</Text>
                </View>
            <View style={estilos.centro}>
                <Text style={estilos.negrit}>Sonho:</Text>
                <Text style={estilos.font}>Ter uma empresa de prestação de serviço</Text>
            </View>

        </View>
        
    );
}

    const estilos = StyleSheet.create({
        cabecalho: {
            display: 'flex', 
            flexDirection: 'row',
            justifyContent: 'space-round', 
            alignItems: 'left',
            width: '100%',
        },

        fotos: {
            width: 150,
            height: 200,
            alignItems: 'center',
        },
        centro: {
            alignItems: 'center',
            marginRight: 5,
            marginLeft: 20,
            marginTop: 15,
        },
        nome: {
        alignItems: 'left',
        
        },
        negrit: {
            fontWeight: 'bold',
            fontSize: 30,
        },
        font:{
            fontSize: 20,
        },

    })



export default TelaInicio;
