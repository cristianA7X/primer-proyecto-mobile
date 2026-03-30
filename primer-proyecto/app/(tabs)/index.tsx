import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    /* El contenedor padre ocupa toda la pantalla */
    <View style={{flex: 1, backgroundColor: '#fff',}}>
      
      {/* Banda 1: Azul */}
      <View style={{flex: 1, backgroundColor: '#0000ff', justifyContent: 'center',}}>
        <Text style={{color: '#fff', textTransform: 'uppercase',  textDecorationLine: 'underline',  fontWeight: 'bold', textAlign: 'center', fontSize: 25}}>
          bienvenidos a desarrollo de aplicativos móviles!!!
        </Text>
      </View>

      {/* Banda 2: Amarilla */}
      <View style={{flex: 1, backgroundColor: '#FFFF00', justifyContent: 'center'}}>
        <Text style={{color: '#000', textTransform: 'lowercase', textDecorationLine: 'line-through', textAlign:'left', fontSize: 25}}>
          bienvenidos a desarrollo de aplicativos móviles!!!
        </Text>
      </View>

      {/* Banda 3: Verde */}
      <View style={{flex: 1, backgroundColor: '#008800', justifyContent: 'center'}}>
        <Text style={{color: '#ffff00', textTransform: 'lowercase', textDecorationLine: 'line-through', textAlign:'right', fontSize: 25}}>
          bienvenidos a desarrollo de aplicativos móviles!!!
        </Text>
      </View>

      {/* Banda 4: Roja */}
      <View style={{flex: 1, backgroundColor: '#ff0000', justifyContent: 'center'}}>
        <Text style={{color: '#fff', textTransform: 'capitalize', textAlign: 'center', fontSize: 25 }}>
          bienvenidos a desarrollo de aplicativos móviles!!!
        </Text>
      </View>

    </View>   
  );
}

const styles = StyleSheet.create({
});