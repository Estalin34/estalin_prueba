// import React from 'react'
// import { StyleSheet } from 'react-native'

// export const Styles = () => {
//   return (
//     <div>Styles</div>
//   )
// }




// const styles = StyleSheet.create({
  
// })
// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Button } from 'react-native';

// const App = () => {
//   const [numeros, setNumeros] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
//   const [pares, setPares] = useState<number[]>([]);
//   const [impares, setImpares] = useState<number[]>([]);

//   const clasificarNumeros = () => {
//     const paresTemp: number[] = [];
//     const imparesTemp: number[] = [];

//     numeros.forEach((numero) => {
//       if (numero % 2 === 0) {
//         paresTemp.push(numero);
//       } else {
//         imparesTemp.push(numero);
//       }
//     });

//     setPares(paresTemp);
//     setImpares(imparesTemp);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.titulo}>Clasificador de Números</Text>
//       <Text style={styles.subtitulo}>Números:</Text>
//       <Text style={styles.numeros}>{numeros.join(', ')}</Text>
//       <Button title="Clasificar" onPress={clasificarNumeros} />
//       <Text style={styles.subtitulo}>Pares:</Text>
//       <Text style={styles.numeros}>{pares.join(', ')}</Text>
//       <Text style={styles.subtitulo}>Impares:</Text>
//       <Text style={styles.numeros}>{impares.join(', ')}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 20,
//   },
//   titulo: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   subtitulo: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 20,
//   },
//   numeros: {
//     fontSize: 16,
//     marginTop: 10,
//   },
// });

// export default App;