import { StyleSheet, Text, TouchableOpacity, View,TextInput,Alert } from 'react-native'
import React, { useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";

const ForGotPassword = () => {
    const navigation = useNavigation();
    const [email , setEmail] = useState(false);
    const handleSubmit = () => {
        if (email) {
          
          Alert.alert("Success", "Password reset email sent to " + email  );
          navigation.navigate("PasswordScreen")
        } else {
          Alert.alert("Error", "Please enter your email");
        }
      };
  return (
    <View>
      <View style={{marginTop:"10%",marginLeft:"6%"}}>
      <TouchableOpacity 
      onPress={()=>navigation.navigate("CreateAccount")}><AntDesign name="arrowleft" size={26} color="black" /></TouchableOpacity>
     </View>
     <View style={{marginTop:"14%",marginLeft:"6%"}}>
        <Text style={{color:"gray",fontSize:17}}>create Your account</Text>
     </View>
     <View style={{marginTop:"5%",marginLeft:"6%"}}>
        <Text style={{fontSize:28,fontWeight:"bold"}}>And,Your Email</Text>
     </View>
     <View>
        <TextInput
          style={{
            marginTop: "15%",
            alignSelf: "center",
            height: 45,
            width: "85%",
            borderColor: "orange",
            borderWidth: 1,
            marginBottom: 16,
            paddingHorizontal: 15,
            borderRadius: 12,
          }}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View>
      <Text style={{fontSize:12,marginLeft:"9%",marginTop:"2%",color:"#d3d3d3"}}>Id like to received marketing and policy</Text>
      <Text style={{fontSize:12,marginLeft:"9%",marginTop:"1%",color:"#d3d3d3"}}>communication from traver and its partner</Text>
      </View>
      
      <View >
            <TouchableOpacity style={{ marginTop: "35%",
            alignSelf: "center",
            height: 45,
            backgroundColor:"orange",
            width: "80%",
            borderColor: "gray",
            // borderWidth: 1,
            marginBottom: 20,
           alignItems:"center",
            borderRadius: 10,}} onPress={handleSubmit}>
            
            <Text style={{marginTop:"4%",fontWeight:"bold",fontSize:17}}>Create Password</Text>
            
            </TouchableOpacity>
      </View>
      
    </View>
  )
}

export default ForGotPassword

const styles = StyleSheet.create({})