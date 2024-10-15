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
          navigation.navigate("CreateNewPassword")
        } else {
          Alert.alert("Error", "Please enter your email");
        }
      };
  return (
    <View>
      <View style={{marginTop:"10%",marginLeft:"6%"}}>
      <TouchableOpacity 
      onPress={()=>navigation.navigate("SignInScreen")}><AntDesign name="arrowleft" size={26} color="black" /></TouchableOpacity>
     </View>
     <View style={{marginTop:"14%",marginLeft:"6%"}}>
        <Text style={{color:"gray",fontSize:17}}>Input Your Email</Text>
     </View>
     <View style={{marginTop:"5%",marginLeft:"6%"}}>
        <Text style={{fontSize:28,fontWeight:"bold"}}>Forgot Your Password?</Text>
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
            borderRadius: 10,}}  onPress={handleSubmit}>
      
            <Text style={{marginTop:"4%",fontWeight:"bold",fontSize:17}}>Submit</Text>
            
       
     
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default ForGotPassword

const styles = StyleSheet.create({})