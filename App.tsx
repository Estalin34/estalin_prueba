import React from 'react'
import { SafeAreaView } from 'react-native'
import { Desarrollo } from './src/screens/Desarrollo';


export const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      {/* <Styles/> */}
      <Desarrollo/>
    </SafeAreaView>
  )
}
export default App;