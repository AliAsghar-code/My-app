import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import React, { useState, useEffect } from 'react';
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Fontisto from "@expo/vector-icons/Fontisto";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import MapView from 'react-native-maps';
import * as Location from 'expo-location';


const KutaBeachScreen = () => {
    const navigation = useNavigation(); 
  const profileImg = {
    uri: "https://www.shutterstock.com/image-vector/village-farm-house-old-indian-260nw-2130772079.jpg",
  };
  const beachImg = {
    uri: "https://plus.unsplash.com/premium_photo-1681223399348-406a58033eee?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };
  const mountainImg = {
    uri: "https://media.istockphoto.com/id/1341288649/photo/75mpix-panorama-of-beautiful-mount-ama-dablam-in-himalayas-nepal.jpg?s=612x612&w=0&k=20&c=0xb_bb-NBIxjiJL_kqY-o3dCjv2PmKFZfRjHcVEijDc=",
  };
  const treeImg = {
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUImHCTRxHl5dJ4IUd9KPw3XmJHka-Ia3iQw&s",
  };
  const image2 = {
    uri: " https://t3.ftcdn.net/jpg/05/59/23/60/360_F_559236027_rKHsb3Wpt2HdFA4o5n8FivSxZEXo0U0p.jpg",
  };
  const image3 = {
    uri: "https://media.istockphoto.com/id/468861698/photo/life-in-rural-india.jpg?s=612x612&w=0&k=20&c=tL_-l5aiDO8Liwke7xoRP_tUGUaPlKtzajAJJi4Dxww=",
  };
  const image4 = {
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR13yeF2JgXOFr433EylkdtuK6Gh3ZBZHkNGQ&s",
  };
  const image5 = {
   
    uri: "https://www.stylecraze.com/wp-content/uploads/2013/06/Different-Beautiful-American-Girls.jpg",

  };
  const image6 = {
   
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv5zAlHft-7cJMZr-SRuJiNONwvBNUEGf04Q&s",

  };
  const image7 = {
   
    uri: "https://www.shutterstock.com/image-photo/portrait-mature-man-smiling-camera-260nw-1029370459.jpg",

  };
  
  return (
    <View style={{flex:1,marginTop:"5%"}}>
      <ScrollView nestedScrollEnabled={true}>
        {/*header*/}
        <View
          style={{
            flexDirection: "row",
            marginTop: "10%",
            margin: "10%",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity onPress={()=> navigation.navigate("BookingScreen")}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <Text style={{ fontWeight: "bold" }}>Kuta Beach</Text>
          <TouchableOpacity>
            <AntDesign name="heart" size={24} color="red" />
          </TouchableOpacity>
        </View>
        {/*card*/}

        <View
          style={{
            height: 200,
            width: 300,
            borderRadius: 12,
            overflow: "hidden",
            marginTop: 1,
            margin: "5%",
            justifyContent:"center",
            alignSelf:"center"
          }}
        >
          <ImageBackground
            source={{
              uri: "https://media.istockphoto.com/id/1059344876/photo/holidays-tourist-relaxing-in-luxury-beach-hotel-near-luxurious-swimming-pool.jpg?s=2048x2048&w=is&k=20&c=H5bOdFmhigLoSd6bOWCuENStpEQwFRqQX81F5ZGpFvA=",
            }}
            style={{ width: "100%", height: "100%" }}
          >
            <View style={{ marginLeft: "10%" }}>
              <Text
                style={{
                  marginTop: "30%",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 19,
                  marginLeft: 5,
                }}
              >
                Kuta Beach
              </Text>
              <View style={{ flexDirection: "row", marginTop: "2%" }}>
                <EvilIcons name="location" size={26} color="white" />
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  Bali 's Indonesia
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text
                  style={{
                    color: "white",
                    marginTop: "1%",
                    fontWeight: "bold",
                  }}
                >
                  100+ people have explore
                </Text>
                <View
                  style={{
                    height: 20,
                    width: 20,
                    borderRadius: 10,
                    overflow: "hidden",
                    marginTop: 3,
                    marginLeft: 6,
                  }}
                >
                  <Image
                    source={{
                      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq26NGyIcDVZPc4w-GSmOI4R907rAafHWDHw&s",
                    }}
                    style={{ width: "100%", height: "100%" }}
                  />
                </View>
                <View
                  style={{
                    height: 20,
                    backgroundColor: "green",
                    width: 20,
                    borderRadius: 10,
                    overflow: "hidden",
                    marginTop: 3,
                  }}
                >
                  <Image
                    source={{
                      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuU5ZJrh8n1sfUd1Gge_vSDT7pJnbalgNSKQ&s",
                    }}
                    style={{ width: "100%", height: "100%" }}
                  />
                </View>
                <View
                  style={{
                    height: 20,
                    width: 20,
                    borderRadius: 10,
                    overflow: "hidden",
                    marginTop: 3,
                  }}
                >
                  <Image
                    source={{
                      uri: "https://media.istockphoto.com/id/1935590814/photo/summer-beach-bag-and-accessories-on-sandy-beach-and-sea.webp?a=1&b=1&s=612x612&w=0&k=20&c=wgRmhvnqR8xN4_Vfkxnusf1ie220ERr32QQOoSu1ZrE=",
                    }}
                    style={{ width: "100%", height: "100%" }}
                  />
                </View>
                <View
                  style={{
                    height: 20,
                    width: 20,
                    borderRadius: 10,
                    overflow: "hidden",
                    marginTop: 3,
                  }}
                >
                  <Image
                    source={{
                      uri: "https://media.istockphoto.com/id/1935590814/photo/summer-beach-bag-and-accessories-on-sandy-beach-and-sea.webp?a=1&b=1&s=612x612&w=0&k=20&c=wgRmhvnqR8xN4_Vfkxnusf1ie220ERr32QQOoSu1ZrE=",
                    }}
                    style={{ width: "100%", height: "100%" }}
                  />
                </View>
              </View>
            </View>
            <View style={{flexDirection:"row", marginLeft:"10%",marginTop:5}}>
            <AntDesign name="star" size={13} color="orange" />
            <AntDesign name="star" size={13} color="orange" />
            <AntDesign name="star" size={13} color="orange" />
            <AntDesign name="star" size={13} color="orange" />
            <AntDesign name="star" size={13} color="#d3d3d3" />
            </View>
            
          </ImageBackground>
        </View>
        {/*What's Include? text */}

        <Text style={{ marginLeft: 27, fontWeight: "bold", fontSize: 20 }}>
          What's Included?
        </Text>
        {/*HorizontaL scroll */}

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          nestedScrollEnabled={true}
          contentContainerStyle={{ paddingEnd: 0 }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
              marginTop: "3%",
              marginLeft:5
            }}
          >
            <View
              style={{
                flexDirection: "row",
                borderWidth: 1,
                borderRadius: 12,
                padding: 10,
                borderColor: "#f5f5f5",
                backgroundColor: "#f5f5f5",
                marginStart: 10,
              }}
            >
              <MaterialIcons name="flight" size={24} color="orange" />
              <Text style={{ fontWeight: "bold", marginLeft: 2, marginTop: 2 }}>
                Flight
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                borderWidth: 1,
                borderRadius: 12,
                padding: 10,
                borderColor: "#f5f5f5",
                backgroundColor: "#f5f5f5",
                marginStart: 10,
              }}
            >
              <FontAwesome5 name="hotel" size={24} color="orange" />
              <Text style={{ fontWeight: "bold", marginLeft: 2, marginTop: 2 }}>
                Hotel
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                borderWidth: 1,
                borderRadius: 12,
                padding: 10,
                borderColor: "#f5f5f5",
                backgroundColor: "#f5f5f5",
                marginStart: 10,
              }}
            >
              <Fontisto name="ticket" size={24} color="orange" />
              <Text style={{ fontWeight: "bold", marginLeft: 2, marginTop: 2 }}>
                Ticket
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                borderWidth: 1,
                borderRadius: 12,
                padding: 10,
                borderColor: "#f5f5f5",
                backgroundColor: "#f5f5f5",
                marginStart: 10,
              }}
            >
              <MaterialCommunityIcons
                name="seat-passenger"
                size={24}
                color="orange"
              />
              <Text style={{ fontWeight: "bold", marginLeft: 2, marginTop: 2 }}>
                Passenger
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                borderWidth: 1,
                borderRadius: 12,
                padding: 10,
                borderColor: "#f5f5f5",
                backgroundColor: "#f5f5f5",
                marginStart: 10,
              }}
            >
              <FontAwesome name="money" size={24} color="orange" />
              <Text style={{ fontWeight: "bold", marginLeft: 2, marginTop: 2 }}>
                Money
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                borderWidth: 1,
                borderRadius: 12,
                padding: 10,
                borderColor: "#f5f5f5",
                backgroundColor: "#f5f5f5",
                marginStart: 10,
              }}
            >
              <FontAwesome name="bus" size={24} color="orange" />
              <Text style={{ fontWeight: "bold", marginLeft: 2, marginTop: 2 }}>
                Bus
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                borderWidth: 1,
                borderRadius: 12,
                padding: 10,
                borderColor: "#f5f5f5",
                backgroundColor: "#f5f5f5",
                marginStart: 10,
              }}
            >
              <FontAwesome5 name="people-arrows" size={24} color="orange" />
              <Text style={{ fontWeight: "bold", marginLeft: 2, marginTop: 2 }}>
                People
              </Text>
            </View>
          </View>
        </ScrollView>
        <Text style={{ fontWeight: "bold", fontSize: 17 ,marginLeft:26,marginTop:18}}>
          About Trip
        </Text>
        <View style={{ marginLeft: 25,marginTop:"6%" }}>
          <Text style={{ color: "gray", fontSize: 13 }}>
            Bali is an island in indonesia known for its verdant
          </Text>
          <Text style={{ color: "gray", fontSize: 13, marginTop: 4 }}>
            volcanoes unique rice terraces beaches and beautiful
          </Text>
          <Text style={{ color: "gray", fontSize: 13, marginTop: 4 }}>
            coral reefs before coming a tourist attraction, kuta
          </Text>
          <Text style={{ color: "gray", fontSize: 13, marginTop: 4 }}>
            {" "}
            was a trading port where local product were traded to
          </Text>
          <Text style={{ color: "gray", fontSize: 13, marginTop: 4 }}>
            buyer for outside Bail.
          </Text>
        </View>
        <View style={{ marginLeft: 25, marginTop: 20 }}>
          <Text style={{ color: "gray", fontSize: 13 }}>
            See beautiful bali and help us keep it that way by joining
          </Text>
          <Text style={{ color: "gray", fontSize: 13, marginTop: 4 }}>
            this EcoTour of a Bali village. All proceed from the
          </Text>
          <Text style={{ color: "gray", fontSize: 13, marginTop: 4 }}>
            EcoTour are donated to the Tangkas Village Recycling
          </Text>
          <Text style={{ color: "gray", fontSize: 13, marginTop: 4 }}>
            Center expert Friendly service
          </Text>
        </View>
        <View style={{ marginTop: "10%", marginLeft: "7%" }}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            Gallery Photo
          </Text>
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          nestedScrollEnabled={true}
          contentContainerStyle={{ paddingEnd: 70 }}
        >
          <View style={{ flexDirection: "row", marginTop: "4%" }}>
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 18,
                overflow: "hidden",
                marginLeft: "3%",
              }}
            >
              <Image
                source={profileImg}
                style={{ width: "100%", height: "100%" }}
              />
            </View>
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 18,
                overflow: "hidden",
                marginLeft: "3%",
              }}
            >
              <Image
                source={beachImg}
                style={{ width: "100%", height: "100%" }}
              />
            </View>
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 18,
                overflow: "hidden",
                marginLeft: "3%",
              }}
            >
              <Image
                source={mountainImg}
                style={{ width: "100%", height: "100%" }}
              />
            </View>
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 18,
                overflow: "hidden",
                marginLeft: "3%",
              }}
            >
              <Image
                source={treeImg}
                style={{ width: "100%", height: "100%" }}
              />
            </View>
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 18,
                overflow: "hidden",
                marginLeft: "3%",
              }}
            >
              <Image
                source={image4}
                style={{ width: "100%", height: "100%" }}
              />
            </View>
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 18,
                overflow: "hidden",
                marginLeft: "3%",
              }}
            >
              <Image
                source={image3}
                style={{ width: "100%", height: "100%" }}
              />
            </View>
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 18,
                overflow: "hidden",
                marginLeft: "3%",
              }}
            >
              <Image
                source={image4}
                style={{ width: "100%", height: "100%" }}
              />
            </View>
          </View>
        </ScrollView>
        <View style={{marginLeft:"7%",marginTop:"6%"}}>
            <Text style={{fontWeight:"bold",fontSize:20}}>
                Location 
            </Text>
        </View>
        <View style={styles.container}>
        <View style={styles.mapContainer}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
       </View>
    </View>
            <View style={{flexDirection:"row",justifyContent:"space-between",margin:"5%"}}>
                <Text style={{fontWeight:"bold",fontSize:17,marginLeft:"3%"}}>
                    Review (99)
                </Text>
                <Text style={{fontWeight:"bold",fontSize:17}}><AntDesign name="star" size={17} color="orange" /> 4,8</Text>
            </View>
            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",margin:"3%"}}>
            <View
              style={{
                height: 40,
                width: 40,
                borderRadius: 20,
                overflow: "hidden",
                marginLeft: "7%",
              }}
            >
              <Image
                source={image5}
                style={{ width: "100%", height: "100%" }}
              />
            </View>
            <Text style={{marginRight:"35%",fontSize:15,fontWeight:"bold"}}>Yelena Belova </Text>
            <Text style={{fontWeight:"bold",color:"gray"}}>Today</Text>
            
            </View>
            <View style={{flexDirection:"row",marginLeft:"25%",marginTop:-15}}>
            <AntDesign name="star" size={17} color="orange" />
            <AntDesign name="star" size={17} color="orange" />
            <AntDesign name="star" size={17} color="orange" />
            <AntDesign name="star" size={17} color="orange" />
            </View>
           
            <View style={{marginLeft:"20%", marginTop:10}}>
                <Text style={{fontSize:13,color:"gray"}}>
                    Preety nice.The entrance is quite far form the
                </Text>
                <Text style={{fontSize:13,color:"gray"}}>parking lot but wouldnt be much of a problem</Text>
                <Text style={{fontSize:13,color:"gray"}}>if it wasnt raining. Love the interior :  </Text>
            </View>
            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",margin:"3%"}}>
            <View
              style={{
                height: 40,
                width: 40,
                borderRadius: 20,
                overflow: "hidden",
                marginLeft: "7%",
              }}
            >
              <Image
                source={image6}
                style={{ width: "100%", height: "100%" }}
              />
            </View>
            <Text style={{marginRight:"35%",fontSize:15,fontWeight:"bold"}}>Mark Travor </Text>
            <Text style={{fontWeight:"bold",color:"gray"}}>Today</Text>
            </View>
            <View style={{flexDirection:"row",marginLeft:"25%",marginTop:-15}}>
            <AntDesign name="star" size={17} color="orange" />
            <AntDesign name="star" size={17} color="orange" />
            <AntDesign name="star" size={17} color="orange" />
            <AntDesign name="star" size={17} color="orange" />
            </View>
            <View style={{marginLeft:"20%",marginTop:10}}>
                <Text style={{fontSize:13,color:"gray"}}>
                  A really great place and amazing work place. I
                </Text>
                <Text style={{fontSize:13,color:"gray"}}>really love staying there! Will definitely come</Text>
                <Text style={{fontSize:13,color:"gray"}}>back!</Text>
            </View>
            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",margin:"3%"}}>
            <View
              style={{
                height: 40,
                width: 40,
                borderRadius: 20,
                overflow: "hidden",
                marginLeft: "7%",
              }}
            >
              <Image
                source={image7}
                style={{ width: "100%", height: "100%" }}
              />
            </View>
            <Text style={{marginRight:"35%",fontSize:15,fontWeight:"bold"}}>James Munler </Text>
            <Text style={{fontWeight:"bold", color:"gray"}}>Today</Text>
            </View>
            <View style={{flexDirection:"row",marginLeft:"25%",marginTop:-15}}>
            <AntDesign name="star" size={17} color="orange" />
            <AntDesign name="star" size={17} color="orange" />
            <AntDesign name="star" size={17} color="orange" />
            <AntDesign name="star" size={17} color="orange" />
            </View>
            <View style={{marginLeft:"20%",marginTop:10}}>
                <Text style={{fontSize:13,color:"gray"}}>
                 Kekut offering supports to almost every cases
                </Text>
                <Text style={{fontSize:13,color:"gray"}}>always reachable and was really helpFul</Text>
                <Text style={{fontSize:13,color:"gray"}}> definitely value of money stay!</Text>
            </View>
            <View style={{margin:"5%",flexDirection:"row",marginLeft:"9%"}}>
            <View style={{flexDirection:"row"}}>
            <Text style={{fontWeight:"bold",color:"orange",fontSize:18,marginTop:"5%"}}>$745.00 </Text>
            <Text style={{marginTop:"7%",color:"#d3d3d3"}} > /person</Text>
            </View>
            
            <TouchableOpacity onPress={()=>
            navigation.navigate("SearchScreen")}>
            <View style={{marginLeft:"20%",borderRadius:10,backgroundColor:"orange", paddingVertical: 12, paddingHorizontal: 25,  alignItems: 'center',  justifyContent: 'center',}}>
                <Text style={{color:"black",fontSize: 17, fontWeight:"bold"}}>Booking</Text>
            </View>
            </TouchableOpacity>
           
        </View>
            
      </ScrollView>
    </View>
  );
};

export default KutaBeachScreen;

const styles = StyleSheet.create({
    container: {
    flex: 1,
    width:300,
    height:200,
    margin:"7%",
    justifyContent:"center",
    alignSelf:"center",
    
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  mapContainer: {
    flex: 1,
    borderRadius: 20, 
    overflow: 'hidden',
    margin: 5,
  },
});
