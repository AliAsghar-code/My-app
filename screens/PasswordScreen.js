import { StyleSheet, Text, View,TouchableOpacity ,TextInput, Alert } from 'react-native'
import AntDesign from "@expo/vector-icons/AntDesign";
import { useState } from 'react';
import Entypo from "@expo/vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

const PasswordScreen = () => {
    const navigation = useNavigation();
    const [password, setPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(true);
    const handleSave=() =>{
        if (password ){
          Alert.alert("Success, change your password");
          navigation.navigate("Verification")
        } else{
          alert("please enter your password")
        }
      }
  return (
    <View>
     <View style={{marginTop:"10%",marginLeft:"6%"}}>
      <TouchableOpacity onPress={()=>navigation.navigate("Email")}
     ><AntDesign name="arrowleft" size={26} color="black" /></TouchableOpacity>
     </View>
     <View style={{marginTop:"14%",marginLeft:"6%"}}>
        <Text style={{color:"gray",fontSize:17}}>Create your account</Text>
     </View>
     <View style={{marginTop:"5%",marginLeft:"6%"}}>
        <Text style={{fontSize:28,fontWeight:"bold",}}>Create a password</Text>
     </View>
     <View style={{ width: "84%",marginTop:"13%",marginLeft:"8%"  }}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          secureTextEntry={passwordVisible}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity
          style={{ position: "absolute", right: 15, top: 15 }} // Positioning the icon
          onPress={() => setPasswordVisible(!passwordVisible)}
        >
          <Entypo
            name={passwordVisible ? "eye-with-line" : "eye"}
            size={22}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <View>
      <Text style={{fontSize:12,marginLeft:"9%",marginTop:"2%",color:"#d3d3d3"}}>Your password must include at least one symbol and be 8</Text>
      <Text style={{fontSize:12,marginLeft:"9%",marginTop:"1%",color:"#d3d3d3"}}>or more character long</Text>
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
            borderRadius: 14,}} onPress={handleSave}>
           
            <Text style={{marginTop:"4%",fontWeight:"bold",fontSize:17}}>Verification</Text>
            </TouchableOpacity>
       
      </View>
    </View>
  )
}

export default PasswordScreen

const styles = StyleSheet.create({ input: {
    height: 45,
    borderColor: "#d3d3d3",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 19,
    borderRadius: 15,padding:4
  },})