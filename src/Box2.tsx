import React from 'react'
import { StyleSheet, View } from 'react-native';

export const Box2 = () => {
<View style={styles.container}>
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
    
      </View>
  
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#40A23',
   flex:1, 
        
  },
  
  
  box1: {
    //flex:3, // 3+2+5=10
      borderWidth: 10,
    // justifyContent:'flex-end',
    borderColor: 'black',
    width:100,
    height:100,
    // alignItems:'center',
    textAlign:'center',
    left:310,
  alignItems:'flex-end',
    marginTop:200,

    color: 'white',
    //alignSelf:'center',

  },
  box2: {
    //flex:2,
    borderWidth: 10,
    left:0,
    width:100,
    height:100,
    borderColor: 'black',
    fontSize: 30,
    textAlign:'center',
    color: 'white',
    // alignItems:'center',
    //alignSelf:'flex-start',
  },
  box3: {
    //flex:1,
    left:150,
    // alignItems:'center',
    textAlign:'center',
    width:100,
    height:100,
    borderWidth: 10,
    borderColor: 'black',
      color: 'white',
  //  alignSelf:'flex-end',
  },
});
