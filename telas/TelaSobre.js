import { Text, View, StyleSheet, Image, ScrollView, Button } from 'react-native';

function TelaInicio() {
    return (
        <View style={{ flex: 1, }}>
            <View style={estilos.cabecalho}>
                <View style={estilos.centro}> 
                    <Text style={estilos.negrit}> Sobre, Cursos e Habilidades</Text>
                </View>

            </View>
                <ScrollView></ScrollView>
                    <View style={estilos.centro}>
                        <Text style={estilos.negrit}>Biografia: </Text>
                        <Text style={estilos.font}>Meu Nome, é Marcio tenho 45 anos, trabalho com vendas de items de limpeza, também 
                            vendo e reformo cadeiras de área de modelo váriados, também faço reforma de jogo de mesa de jantar, durante este período 
                            apredi que dinheiro não é tudo, hoje para mim o mais importante é ver os olhos brilharem ao ver seu imtem reformado.
                            
                        </Text>
                    </View>

                    <View style={estilos.centro}>
                        <Text style={estilos.negrit}>Cursos:</Text>
                        <Text style={estilos.font}>Desenvolvimento de sistemas {"\n"}
                            Segurança {"\n"}
                            Fluxo de caixa {"\n"}
                            Cuidador de idoso.
                        </Text>    
                        <Text style={estilos.negrit}>Cursando:</Text>
                        <Text style={estilos.font}>Excel + Dashboards {"\n"}
                            Pyhton3.
                        </Text>
                    </View>
                        <View style={estilos.centro}>
                            <Text style={estilos.negrit}>Habilidades: </Text>
                            <Text style={estilos.font}>Vendedor {"\n"}
                            Soldador {"\n"}
                            Segurança particular {"\n"}
                            Fiscal de prevenção de perdas {"\n"}
                            Promotor de marca
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
                </ScrollView>

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
            width: 150,
            height: 200,
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
            fontSize: 30, 
            textAlign: 'center',
        },
        font: {
            fontSize: 20,
            textAlign: 'center',
        },

    })



export default TelaInicio;