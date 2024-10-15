import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Fontisto from "@expo/vector-icons/Fontisto";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const TripScreen = () => {
  const navigation = useNavigation();
  const cityData = [
    {
      cityImg: {
        uri: "https://media.istockphoto.com/id/1059344876/photo/holidays-tourist-relaxing-in-luxury-beach-hotel-near-luxurious-swimming-pool.jpg?s=2048x2048&w=is&k=20&c=H5bOdFmhigLoSd6bOWCuENStpEQwFRqQX81F5ZGpFvA=",
      },
      destinationName: "Kuta beach",
      price: "745.00",
      rating:4
    },
    {
      cityImg: {
        uri: "https://media.istockphoto.com/id/1594228594/photo/close-up-image-of-a-young-creative-artists-hands-smeared-with-watercolors-holding-a-spatula.webp?a=1&b=1&s=612x612&w=0&k=20&c=xa5TCz_W8_o8PWhseGHgk6pzQ8xpcCO1yuOXFDTBZU8=",
      },
      destinationName: "Painting",
      price: "805.00",
      rating:4
    },
    {
      cityImg: {
        uri: "https://media.istockphoto.com/id/1319453433/photo/modern-luxury-house-with-private-infinity-pool-in-dusk.jpg?s=2048x2048&w=is&k=20&c=NqVfhjJfyy6E9mTc9ytvFz-SQUClL-OuIUymRrpTWys=",
      },
      destinationName: "Hotel",
      price: "995.00",
      rating:4
    },
    {
      cityImg: {
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR13yeF2JgXOFr433EylkdtuK6Gh3ZBZHkNGQ&s",
      },
      destinationName: "Mandalika Resort",
      price: "745.00",
      rating:4
    },
    {
      cityImg: {
        uri: "https://media.istockphoto.com/id/468861698/photo/life-in-rural-india.jpg?s=612x612&w=0&k=20&c=tL_-l5aiDO8Liwke7xoRP_tUGUaPlKtzajAJJi4Dxww=",
      },
      destinationName: "Jimbaran Resort",
      price: "805.00",
      rating:4
    },
    {
      cityImg: {
        uri: "https://t4.ftcdn.net/jpg/03/71/14/65/360_F_371146519_OWEake9cQRtOlxmvfk7stLAFaDRUnB62.jpg",
      },
      destinationName: "Bali Beach",
      price: "995.00",
      rating:4
    },
  ];
  const renderRating = (rating) => {
    let stars = '';
    for (let i = 0; i < rating; i++) {
      stars += '★ ';
    }
    return stars.trim();
  };

  return (
    <ScrollView>
      <View
        style={{
          flexDirection: "row",
          marginTop: "20%",
          margin: "10%",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("SearchScreen")}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ fontWeight: "bold", marginTop: 3, fontSize: 17 }}>
          Search
        </Text>
        <MaterialCommunityIcons name="tune" size={24} color="black" />
      </View>
      <View
        style={{
          width: "85%",
          marginLeft: "5%",
        }}
      >
        <TextInput
          style={{
            height: 45,
            borderColor: "gray",
            marginBottom: 16,
            paddingHorizontal: 15,
            borderRadius: 18,
            marginLeft: "5%",
            backgroundColor: "#d3d3d3",
          }}
          placeholder="Search destination"
        />
        <TouchableOpacity
          style={{
            position: "absolute",
            right: 15,
            top: 10,
          }}
        >
          <AntDesign name="search1" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <Text
        style={{
          marginTop: "5%",
          fontWeight: "bold",
          fontSize: 18,
          marginLeft: "10%",
        }}
      >
        We found 4 trip in "Bali"
      </Text>
      <View style={{ flex: 1, marginTop: "7%" }}>
        {cityData.map((item, index) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("CategoryScreen")}
            key={index}
            style={styles.packageContainer}
          >
            <Image source={item.cityImg} style={styles.packageImage} />
            <View style={styles.packageDetails}>
              <Text style={styles.packageTitleText}>
                {item.destinationName}
              </Text>
              <Text style={styles.packagePrice}>${item.price}</Text>
              <Text style={styles.packageRating}>{renderRating(item.rating)}</Text>
              <Text style={styles.packageDescription}>
                A resort is a place used for
              </Text>
              <Text style={styles.packageDescription}>
                vacation relaxation or as a day
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default TripScreen;

const styles = StyleSheet.create({
  packageContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "rgba(211, 211, 211, 0.5)",
    borderRadius: 12,
    marginHorizontal: "7%",
    marginVertical: "2%",
    overflow: "hidden",
    height: 155,
    paddingHorizontal: "5%",
  },
  packageImage: {
    height: "100%",
    width: "50%",
    borderRadius: 10,
  },
  packageDetails: {
    flex: 1,
    padding: "2%",
    justifyContent: "space-between",
  },
  packageTitleText: {
    fontWeight: "bold",
    fontSize: 17,
  },
  packagePrice: {
    color: "orange",
    fontWeight: "bold",
  },
  packageRating: {
    color: "orange",
    fontSize: 19,
    fontWeight: "bold",
  },
  packageDescription: {
    fontSize: 11,
    color: "gray",
  },
});
