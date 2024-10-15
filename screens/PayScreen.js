import { StyleSheet, Text, View,TouchableOpacity,Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";


const PayScreen = () => {
    const navigation = useNavigation(); 
    const [cardNumber,setCardNumber]=useState("")
const [cV,setCv]=useState("")
const handleBooking = () => {
if(cardNumber && cV ) {
        navigation.navigate("SuccessScreen")       
} else  { alert("PUT YOUR DATA");

}
}
  return (
    <View style={{flex:1}}>
      <View style={{flexDirection:"row", marginTop:"15%", justifyContent:"space-between", margin:"10%"}}>
                <TouchableOpacity onPress={()=>navigation.navigate("PaymentScreen")}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                </TouchableOpacity>
                <Text style={{fontWeight:"bold", marginRight:"40%", alignSelf:"center"}}>Payment</Text>
            </View>
            
            <Image 
             style={{width:"90%",height:"30%",margin:"2%",marginLeft:"6%"}}  
                //source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQZ4NgOZHYvTZFvdjbbp0a1ETavMdQAmE5VQ&s"}}
                source={require('../assets/bmo-ascend-world-elite-mastercard-removebg-preview.png')}
                />
            
            <View style={{ marginTop: "7%", width: "85%",marginLeft:"10%"}}>
                <TextInput
                    placeholder='Card Number'
                    style={styles.input}
                    value={cardNumber}
                    onChangeText={setCardNumber}
                />
            </View>
            <View style={{ marginTop: "4%", width: "85%",marginLeft:"10%"}}>
                <TextInput
                    placeholder='CVV'
                    style={styles.input}
                    value={cV}
                    onChangeText={setCv}
                    secureTextEntry={true}
                />
            </View>
            <View style={{margin:"10%",flexDirection:"row",justifyContent:"center",alignSelf:"center",marginTop:"45%"}}>
            <Text style={{fontWeight:"bold",color:"gray",fontSize:15,marginTop:"6%",marginLeft:"20%"}}>Total</Text>
            <Text style={{fontWeight:"bold",color:"orange",fontSize:19,marginTop:"5%"}}> $1490.00</Text>
            <TouchableOpacity onPress={handleBooking} >
            <View style={{marginLeft:"11%",borderRadius:10,backgroundColor:"orange", paddingVertical: 12, paddingHorizontal: 25,  alignItems: 'center',  justifyContent: 'center',}}>
                <Text style={{color:"black",fontSize: 17, fontWeight:"bold"}}> Process Payment</Text>
            </View>
            </TouchableOpacity>
           
        </View>
           
    </View>
  )
}

export default PayScreen

const styles = StyleSheet.create({
    input: {
        height: 45,
        borderColor: "#d3d3d3",
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 15,
        borderRadius: 13,
       
      },
})