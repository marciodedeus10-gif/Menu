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
                    <Text>Márcio Pereira de Deus</Text>
                </View>
                    <View style={estilos.centro}>
                        <Text style={estilos.negrit}>Biografia: </Text>
                        <Text>Meu Nome é Marcio quando tinha 17 anos faleu para meu pai que gostaria de servir <br></br>nas forças armadas,
                            porém como bom pai que é orientou-me a esquecer tal coisa, isso encinou-me uma <br></br>lição muito importante 
                            busque seus sonhos independente toque os outro pençam ou falam.
                        </Text>
                    </View>
                <View style={estilos.centro}>
                    <Text style={estilos.negrit}>Hobbies:</Text>
                    <Text>Amo atividade ao ar livre pesca, campismo, caminhada, corrida, natação</Text>
                </View>
            <View style={estilos.centro}>
                <Text style={estilos.negrit}>Sonho:</Text>
                <Text>Ter uma empresa de prestação de serviço</Text>
            </View>

        </View>
        
    );
}

    const estilos = StyleSheet.create({
        cabecalho: {
            display: 'flex', 
            flexDirection: 'row',
            justifyContent: 'space-round', 
            alignItems: 'right',
            width: '100%',
        },

        fotos: {
            width: 100,
            height: 150,
        },
        centro: {
            alignItems: 'right',
            marginRight: 5,
            marginLeft: 20,
            marginTop: 15,
        },
        nome: {
        alignItems: 'left',
        
        },
        negrit: {
            fontWeight: 'bold',
            fontSize: 20,
        },

    })



export default TelaInicio;