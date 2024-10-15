import { StyleSheet, Text, View, Image, TouchableOpacity ,Button ,Alert} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useState } from "react";
const Profile = () => {
  const navigation = useNavigation();
  const [hasNotification, setHasNotification] = useState(true);
  const profileImg = {
    uri: "https://miro.medium.com/v2/resize:fit:1400/0*dQNfn2yEsyGCsGRW.jpg",
  };
  const [isLogout, setIsLogout] = useState(false);

  const confirmLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to log out of Pristia Candra's account?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Logout canceled"),
          style: "cancel"
        },
        { text: "Logout", onPress: () => handleLogout() }
      ]
    );
  };

  const handleLogout = () => {
    // Your logout logic here
    console.log("User logged out");
    setIsLogout(true);
  }
  return (
    <View>
      <View
        style={{
          justifyContent: "center",
          marginTop: "15%",
          marginLeft: "10%",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 28 }}>Your Profile</Text>
      </View>
      <View style={styles.profileContainer}>
        <Image source={profileImg} style={styles.profileImage} />
        <Text style={styles.helloText}>Hello, Pristia!</Text>
      </View>
      <Text
        style={{
          marginLeft: "26%",
          color: "gray",
          fontSize: 13,
          marginTop: "-5%",
        }}
      >
        Semarang, Indonesia
      </Text>
      <View
        style={{
          borderWidth: 1,
          borderRadius: 16,
          width: "85%",
          height: 50,
          justifyContent: "center",
          alignSelf: "center",
          marginTop: "10%",
          borderColor: "rgba(211, 211, 211, 0.5)",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            margin: "4%",
          }}
        >
          <Text
            style={{
              justifyContent: "center",
              marginLeft: "5%",
              fontSize: 13,
              fontWeight: 500,
            }}
          >
            Personal Information
          </Text>
          <FontAwesome6 name="circle-user" size={20} color="black" />
        </View>
      </View>
      <View
        style={{
          borderWidth: 1,
          borderRadius: 16,
          width: "85%",
          height: 50,
          justifyContent: "center",
          alignSelf: "center",
          marginTop: "10%",
          borderColor: "rgba(211, 211, 211, 0.5)",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            margin: "4%",
          }}
        >
          <Text
            style={{
              justifyContent: "center",
              marginLeft: "5%",
              fontSize: 13,
              fontWeight: 500,
            }}
          >
            Notification
          </Text>
          <TouchableOpacity  onPress={() => setHasNotification(false) || navigation.navigate("NotificationScreen") }>
          <Ionicons name="notifications-outline" size={20} color="black" />
          {hasNotification &&  <View style={styles.notificationDot} />  }
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          borderWidth: 1,
          borderRadius: 16,
          width: "85%",
          height: 50,
          justifyContent: "center",
          alignSelf: "center",
          marginTop: "10%",
          borderColor: "rgba(211, 211, 211, 0.5)",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            margin: "4%",
          }}
        >
          <Text
            style={{
              justifyContent: "center",
              marginLeft: "5%",
              fontSize: 13,
              fontWeight: 500,
            }}
          >
            FAQ
          </Text>
          <AntDesign name="message1" size={20} color="black" />
        </View>
      </View>
      <View
        style={{
          borderWidth: 1,
          borderRadius: 16,
          width: "85%",
          height: 50,
          justifyContent: "center",
          alignSelf: "center",
          marginTop: "10%",
          borderColor: "rgba(211, 211, 211, 0.5)",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            margin: "4%",
          }}
        >
          <Text
            style={{
              justifyContent: "center",
              marginLeft: "5%",
              fontSize: 13,
              fontWeight: 500,
            }}
          >
            Dark Mode
          </Text>
        </View>
      </View>
      <View
        style={{
          borderWidth: 1,
          borderRadius: 16,
          width: "85%",
          height: 50,
          justifyContent: "center",
          alignSelf: "center",
          marginTop: "10%",
          borderColor: "rgba(211, 211, 211, 0.5)",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            margin: "4%",
          }}
        >
          <Text
            style={{
              justifyContent: "center",
              marginLeft: "5%",
              fontSize: 13,
              fontWeight: 500,
            }}
          >
            Language
          </Text>
          <MaterialIcons name="language" size={20} color="black" />
        </View>
      </View>
     <TouchableOpacity>
     <View
        style={{
          borderWidth: 1,
          borderRadius: 16,
          width: "85%",
          height: 50,
          justifyContent: "center",
          alignSelf: "center",
          marginTop: "10%",
          borderColor: "rgba(211, 211, 211, 0.5)",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            margin: "4%",
          }}
        >
          <Text
            style={{
              justifyContent: "center",
              marginLeft: "5%",
              fontSize: 13,
              fontWeight: 500,
            }}
          >
           <Text  onPress={confirmLogout}>{isLogout ? "You have logged out" : "Logout"}</Text>
      {!isLogout && (
      <Text></Text>
      )}
          </Text>
        </View>
      </View>  
     </TouchableOpacity>
      <View style={styles.bottomNavigation}>
        <TouchableOpacity>
          <AntDesign name="home" style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity    >
          <FontAwesome name="location-arrow"   style={styles.navIcon} />
          
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("WishList")}>
          <AntDesign name="hearto" style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity  style={{flexDirection:"row",borderWidth:1,borderRadius:17,padding:7,backgroundColor:"black"}}>
          <AntDesign name="user" style={ {
    fontSize: 24,
    color: "white",
  }} />
  <Text style={{marginLeft:4,fontWeight:"bold",color:"white",marginTop:3}}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profileContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "7%",
  },
  profileImage: {
    height: 40,
    width: 40,
    borderRadius: 50,
    marginLeft: "10%",
  },
  helloText: {
    fontWeight: "bold",
    marginRight: "42%",
    fontSize: 19,
    marginTop: -19,
  },
  notificationIcon: {
    fontSize: 24,
    color: "black",
  },
  notificationDot: {
    position: 'absolute',
    top: 0,
    right: -1,
    height: 8,
    width: 8,
    backgroundColor: 'red',
    borderRadius: 5,
  },
  bottomNavigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "8%",
    marginTop:"9%"
  },
  navIcon: {
    fontSize: 24,
    color: "black",
    marginTop:10
  },
});
