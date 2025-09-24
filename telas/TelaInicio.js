import { Text, View, StyleSheet, Image } from 'react-native';

function TelaInicio() {
    return (
        <View style={{ flex: 1, }}>
            <View style={estilos.cabecalho}>
                <Text>Currículo</Text>

            </View>

            <View style={estilos.image}>
                <Image
                    source={ require('../assets/fotos/marcio.jpg')}
                />
            </View>
        </View>
        
    );
}

    const estilos = StyleSheet.create({
        cabecalho: {
            display: 'flex', 
            flexDirrection: 'row',
            justifyContent: 'space-round', 
            alignItems: 'center',
            width: '100%',
        },
        image: {
            width: 100,
            right: 150,
            

        }
    })



export default TelaInicio;