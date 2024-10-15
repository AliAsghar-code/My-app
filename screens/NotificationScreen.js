import { StyleSheet, Text, View,TouchableOpacity, Alert, } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useNavigation } from "@react-navigation/native";


const NotificationScreen = () => {
    const navigation = useNavigation();
  return (
    <View>
     <View style={{flexDirection:"row", marginTop:"15%", justifyContent:"space-between", margin:"10%"}}>
                <TouchableOpacity onPress={()=>navigation.navigate("Profile")}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                </TouchableOpacity>
                <Text style={{fontWeight:"bold", marginRight:"35%", alignSelf:"center"}}>Notification</Text>
            </View>
            <Text style={{marginLeft:"10%",fontWeight:"bold",fontSize:22,marginTop:"2%"}}>Today</Text>
            <View style={{marginTop:"12%",marginLeft:"5%",flexDirection:"row"}}>
                <View style={{width:60,height:60,     borderRadius: 30,backgroundColor:"#ffcbd1",}}>
                <MaterialCommunityIcons name="ticket-confirmation-outline" size={34} color="orange"  style={{justifyContent:"center",alignSelf:"center",margin:"20%"}}/>
                </View>
                <View style={{flexDirection:"column",marginLeft:"4%",marginTop:"1%"}}>
                <Text style={{fontWeight:"bold",fontSize:18}}>Your ticket is ready</Text>
                <TouchableOpacity onPress={()=> Alert.alert("Your ticket is ready please check your ticket")} style={styles.notificationDot}></TouchableOpacity>
                <Text style={{color:"gray",marginTop:"2%",fontWeight:"bold"}}>Your ticket is ready .check</Text>
                </View>
              
            </View>
            <View style={{marginTop:"12%",marginLeft:"5%",flexDirection:"row"}}>
                <View style={{width:60,height:60,     borderRadius: 30,backgroundColor:"#ffcbd1",}}>
                <MaterialCommunityIcons name="alert-decagram-outline" size={34} color="orange" style={{justifyContent:"center",alignSelf:"center",margin:"20%"}}/>
                </View>
                <View style={{flexDirection:"column",marginLeft:"4%",marginTop:"1%"}}>
                <Text style={{fontWeight:"bold",fontSize:18}}>Promo Traver</Text>
                <Text style={{color:"gray",marginTop:"2%",fontWeight:"bold"}}>Get summer special promo...</Text>
                </View>
              
            </View>
            <View style={{marginTop:"12%",marginLeft:"5%",flexDirection:"row"}}>
                <View style={{width:60,height:60,     borderRadius: 30,backgroundColor:"#ffcbd1",}}>
                <FontAwesome5 name="envelope-open-text" size={34} color="orange"   style={{justifyContent:"center",alignSelf:"center",margin:"20%"}}/>
                </View>
                <View style={{flexDirection:"column",marginLeft:"4%",marginTop:"1%"}}>
                <Text style={{fontWeight:"bold",fontSize:18}}>Your Booking Success</Text>
                <Text style={{color:"gray",marginTop:"2%",fontWeight:"bold"}}>You have been successfully book..</Text>
                </View>
              
            </View>
    </View>
  )
}

export default NotificationScreen

const styles = StyleSheet.create({
    notificationDot: {
        position: 'absolute',
        top: "20%",
       left:"120%",
        height:10,
        width:10,
        backgroundColor: 'red',
        borderRadius: 5,
       
      },
})