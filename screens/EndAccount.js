import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";


const EndAccount = () => {
    const navigation = useNavigation();
  return (
    <View>
       <View style={{justifyContent:"center",alignItems:"center"}}>
    
    <Image 
             style={{width:"30%",height:"30%",marginTop:"60%",}}  
                //source={{uri:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTZB00lQDMBGJRt7oKgdMKwtRtOtuAduEKM9_0M75uWoTAwvuWS"}}
source={require('../assets/images__7_-removebg-preview.png')}

resizeMode="contain"
                />
                <View style={{marginTop:"10%"}}>
                <Text style={{marginleft:"15%",fontWeight:"bold",fontSize:28}}>Successfully create an </Text>
    <Text style={{marginTop:"1%",marginRight:"25%",fontWeight:"bold",fontSize:25}}>account</Text>
    <Text style={{marginTop:"5%",marginRight:"8%",color:"#d3d3d3"}}>After this you can explore any place you</Text>
    <Text style={{marginTop:"1%",marginRight:"59%",color:"#d3d3d3"}}>want enjoy it</Text>
                </View>
   
    
    <TouchableOpacity onPress={()=>navigation.navigate("FavouritePlaces")}>
            <View style={{borderRadius:15,backgroundColor:"orange", paddingVertical: 14, paddingHorizontal: 60,  alignItems: 'center',  justifyContent: 'center',marginTop:"20%"}}>
                <Text style={{color:"black",fontSize: 17, fontWeight:"bold"}}>Let's Explore!</Text>
            </View>
            </TouchableOpacity>
      
    </View>
    </View>
  )
}

export default EndAccount

const styles = StyleSheet.create({})