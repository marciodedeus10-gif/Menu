import { Text, View, StyleSheet, Image, ScrollView, Button} from 'react-native';

function TelaInicio() {
    return (
        <View style={{ flex: 1 }}>
            <View style={estilos.cabecalho}>
                <Image
                    source={ require('../assets/fotos/marcyo.jpg')}
                    style={estilos.fotos}
                />
            </View>

            <ScrollView>
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
            </ScrollView>  
            <Button title="Sair" onPress={() => {}} />
        </View>
        
    );
}

    const estilos = StyleSheet.create({
        cabecalho: {
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            width: '100%',
            marginTop: 30,
        },

        fotos: {
            width: 100,
            height: 150,
            alignItems: 'center',
        },
        nome: {
            alignItems: 'left',
        
        },
        negrit: {
            fontWeight: 'bold',
            fontSize: 30,
            textAlign: 'center',
        },
        font:{
            fontSize: 20,
            textAlign:'center',
        },

        centro: {
            marginLeft: 20,
        },


    })



export default TelaInicio;