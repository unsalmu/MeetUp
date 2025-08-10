import { View, Text , SafeAreaView, Pressable} from 'react-native'
import React,{useEffect} from 'react'

const SplashScreen = (props) => {

    function giris(){
        const user = 'Mami'

        if(user == 'Anil'){
          props.navigation.navigate('Menus')
        }else{
          props.navigation.navigate('SignIn')
        }
  
    }

    useEffect(() => {
     giris();
    }, [])
    



  return (
    <SafeAreaView style={{flex:1, backgroundColor:'gray',alignItems:'center',justifyContent:'center'}}>
      <Pressable onPress={() => props.navigation.navigate('SignIn')}>
      <Text 
      style={{color:'white',fontSize:35, textAlign:'center', marginBottom: 10}}>Welcome to MeetUp</Text>
      <Text style={{color:'white',fontSize:35, textAlign:'center'}}>
        Plan yourself and enjoy with Events</Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default SplashScreen