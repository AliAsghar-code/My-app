import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

const SignInScreen = () => {
  const navigation = useNavigation(); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [checkValidEmail, setCheckValidEmail] = useState(false);

  const handleCheckEmail = (text) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const phoneRegex =
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    setEmail(text);
    if (emailRegex.test(text) || phoneRegex.test(text)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  };

  const handleSignIn = () => {
    if (email && password && !checkValidEmail) {
      alert("Success login");
      navigation.navigate("HomeScreen")
    } else {
      alert("Please check your email or password");
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center",marginTop:"35%" }}>
      <Text style={{ fontWeight: "bold", fontSize: 30 }}>Traver</Text>

      <View style={{ marginTop: "15%", width: "80%" }}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={handleCheckEmail}
        />
        {checkValidEmail && <Text style={styles.errorText}>Wrong email</Text>}
      </View>

      <View style={{ width: "80%" }}>
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
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.rememberMeContainer}>
        <View style={styles.checkbox}></View>
        <Text style={styles.rememberMeText}>Remember me</Text>
        <TouchableOpacity style={{ marginLeft: "5%" }} onPress={()=>navigation.navigate("ForGotPassword")}>
          <Text style={styles.forgotPasswordText}>Forget password</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.createAccountButton}>
        <Text style={styles.createAccountText}>Create Account</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.signInButton}
        onPress={handleSignIn}
        disabled={email === "" || password === "" || checkValidEmail} // Disable if invalid
      >
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: "row",
       
          width:"100%",
          justifyContent: "space-evenly",
          marginTop: "20%",
        }}
      >
        <TouchableOpacity>
          <AntDesign name="instagram" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="google" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="facebook-square" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 45,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  errorText: {
    color: "red",
    marginLeft: "70%",
  },
  rememberMeContainer: {
    flexDirection: "row",
    marginTop: "1%",
  },
  checkbox: {
    borderColor: "gray",
    borderRadius: 5,
    height: 18,
    width: 18,
    borderWidth: 1,
    marginLeft: "10%",
    marginTop: "1%",
  },
  rememberMeText: {
    color: "gray",
    alignSelf: "center",
    marginLeft: "2%",
    marginTop: "1%",
    fontSize: 13,
  },
  forgotPasswordText: {
    color: "gray",
    alignSelf: "center",
    marginTop: "1%",
    marginLeft: "25%",
    fontSize: 13,
  },
  createAccountButton: {
    marginTop: "25%",
    alignSelf: "center",
    height: 45,
    width: "80%",
    borderColor: "lightgray",
    borderWidth: 1,
    marginBottom: 20,
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "center",
  },
  createAccountText: {
    fontWeight: "bold",
    fontSize: 17,
  },
  signInButton: {
    marginTop: "1%",
    alignSelf: "center",
    height: 45,
    backgroundColor: "orange",
    width: "80%",
    borderColor: "gray",
    marginBottom: 20,
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "center",
  },
  signInText: {
    fontWeight: "bold",
    fontSize: 17,
  },
});

export default SignInScreen;
