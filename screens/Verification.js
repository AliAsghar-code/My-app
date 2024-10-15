import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import React, { useState, useRef } from 'react';
import AntDesign from "@expo/vector-icons/AntDesign";

const Verification = ({ navigation }) => {
    const [otp, setOtp] = useState(["", "", "", ""]);
    const inputs = useRef([]);

    const handleChange = (text, index) => {
        let otpArray = [...otp];
        otpArray[index] = text;

        // Move to the next input when a digit is entered
        if (text.length === 1 && index < otp.length - 1) {
            inputs.current[index + 1].focus();
        }

        setOtp(otpArray);
    };

    const handleBackspace = (text, index) => {
        if (text === "" && index > 0) {
            inputs.current[index - 1].focus();
        }
    };
    const verification =()=>{
        if (otp){
            alert("success your OTP");
            navigation.navigate("EndAccount")
        } else {
          alert("put your otp")
        }
    }

    return (
        <View>
            {/* Back Arrow */}
            <View style={{ marginTop: "10%", marginLeft: "6%" }}>
                <TouchableOpacity onPress={() => navigation.navigate("PasswordScreen")}>
                    <AntDesign name="arrowleft" size={26} color="black" />
                </TouchableOpacity>
            </View>

            {/* Heading */}
            <View style={{ marginTop: "14%", marginLeft: "6%" }}>
                <Text style={{ color: "gray", fontSize: 17 }}>Create your account</Text>
            </View>

            <View style={{ marginTop: "5%", marginLeft: "6%" }}>
                <Text style={{ fontSize: 28, fontWeight: "bold" }}>OTP Verification</Text>
            </View>

            {/* OTP Input */}
            <View style={styles.otpContainer}>
                {otp.map((digit, index) => (
                    <TextInput
                        key={index}
                        value={digit}
                        onChangeText={(text) => handleChange(text, index)}
                        onKeyPress={({ nativeEvent }) => {
                            if (nativeEvent.key === 'Backspace') {
                                handleBackspace(otp[index], index);
                            }
                        }}
                        style={styles.otpInput}
                        maxLength={1}
                        keyboardType="numeric"
                        ref={(input) => inputs.current[index] = input}
                    />
                ))}
            </View>
            <View style={{marginTop:"10%",flexDirection:"row",justifyContent:"space-between",margin:"5%"}}>
                <Text style={{color:"#d3d3d3",fontSize:13}}>Send code reload in</Text>
                <Text style={{color:"#d3d3d3",fontSize:13}}>03:23</Text>
            </View>
            
      <View >
           <TouchableOpacity  style={{ marginTop: "35%",
            alignSelf: "center",
            height: 45,
            backgroundColor:"orange",
            width: "80%",
            borderColor: "gray",
            // borderWidth: 1,
            marginBottom: 20,
           alignItems:"center",
            borderRadius: 14,}}onPress={verification}>
            <Text style={{marginTop:"4%",fontWeight:"bold",fontSize:17}}>Submit</Text>
            
            </TouchableOpacity>
      </View>
            
        </View>
    );
};

export default Verification;

const styles = StyleSheet.create({
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 40,
    },
    otpInput: {
        borderBottomWidth: 2,
        borderColor: 'black',
        fontSize: 24,
        textAlign: 'center',
        padding: 10,
        width: 40, // Width for each input box
    },
});
