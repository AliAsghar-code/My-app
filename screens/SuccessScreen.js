import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'

const SuccessScreen = () => {
  return (
    <View style={{flex:1,justifyContent:"center",backgroundColor:"white",alignItems:"center"}}>
    
    <Image 
             style={{width:"70%",height:"30%",marginTop:"45%"}}  
                //source={{uri:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTZB00lQDMBGJRt7oKgdMKwtRtOtuAduEKM9_0M75uWoTAwvuWS"}}
source={require('../assets/images-removebg-preview (2).png')}
resizeMode="contain"
                />
                <View style={{marginTop:"10%"}}>
                <Text style={{marginRight:"40%",fontWeight:"bold",fontSize:33}}>Booking</Text>
    <Text style={{marginTop:"1%",marginRight:"25%",fontWeight:"bold",fontSize:33}}>Successfully</Text>
    <Text style={{marginTop:"5%",marginRight:"8%",color:"#d3d3d3"}}>Get everything ready until it's time to go</Text>
    <Text style={{marginTop:"1%",marginRight:"59%",color:"#d3d3d3"}}>on a trip!</Text>
                </View>
   
    
    <TouchableOpacity>
            <View style={{borderRadius:15,backgroundColor:"orange", paddingVertical: 14, paddingHorizontal: 60,  alignItems: 'center',  justifyContent: 'center',marginTop:"20%"}}>
                <Text style={{color:"black",fontSize: 17, fontWeight:"bold"}}>Explore Other Places</Text>
            </View>
            </TouchableOpacity>
      
    </View>
  )
}

export default SuccessScreen

const styles = StyleSheet.create({})