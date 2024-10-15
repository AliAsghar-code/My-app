import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
const data = [
    {
      id: 1,
      title: "Beach",
      imageUrl: "https://images.unsplash.com/photo-1532517891316-72a08e5c03a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Mountain",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTm-SMYqOqShDbw8J31ySGE_TpqoIdkj7UVg&s",
    },
    {
      id: 3,
      title: "Forest",
      imageUrl: "https://media.istockphoto.com/id/157316288/photo/mighty-oak-tree-on-clearing-in-deciduous-forest.jpg?s=612x612&w=0&k=20&c=VVP4X0zHPENFlW9OPBsJi06z7nq0QLEzNX4xqdSLLj0=",
    },
    {
      id: 4,
      title: "Ocean",
      imageUrl: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2NlYW58ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 5,
      title: "Camping",
      imageUrl: "https://static.toiimg.com/photo/100182318.cms",
    },
    {
      id: 6,
      title: "Fishing",
      imageUrl: "https://media.istockphoto.com/id/1198489926/photo/largemouth-bass.jpg?s=612x612&w=0&k=20&c=9XFEtj-491bqsiPjsEJJFxtQe_eNIxV_2eIL6XN4wmc=",
    },
  ];

const FavouritePlace = () => {
    const navigation = useNavigation();
    const [selectedId, setSelectedId] = useState(null);
  return (
    <View>
     <View style={styles.exploreTextContainer}>
        <Text style={styles.exploreTextBold}>What is your favorite </Text>
        <Text style={styles.exploreTextBold2}>place to explore?</Text>
      </View>
      
      <View style={{ margin: "3%", marginLeft: "13%" }}>
      {data.reduce((acc, item, index) => {
        if (index % 2 === 0) {
          acc.push(
            <View key={`row-${index}`} style={{ flexDirection: "row", marginBottom: 14 }}>
              <TouchableOpacity
                onPress={() => setSelectedId(item.id)}
                style={{
                  borderWidth: 2,
                  width: "38%",
                  height: 120,
                  borderRadius: 12,
                  borderColor: selectedId === item.id ? 'green' : 'rgba(211, 211, 211, 0.2)', // Change border color on click
                }}
              >
                <View style={{ backgroundColor: "rgba(211, 211, 211, 0.2)", marginTop: "15%", width: "45%", height: 50, justifyContent: "center", alignSelf: "center", borderRadius: 15 }}>
                  <Image
                    source={{ uri: item.imageUrl }}
                    style={{ width: 30, height: 35, justifyContent: "center", alignSelf: "center", marginTop: "2%", borderRadius: 12 }}
                  />
                </View>
                <Text style={{ margin: "10%", fontWeight: "bold", marginLeft: "30%" }}>{item.title}</Text>
              </TouchableOpacity>

              {index + 1 < data.length && (
                <TouchableOpacity
                  onPress={() => setSelectedId(data[index + 1].id)}
                  style={{
                    borderWidth: 2,
                    width: "40%",
                    height: 120,
                    borderRadius: 12,
                    borderColor: selectedId === data[index + 1].id ? 'green' : 'rgba(211, 211, 211, 0.2)', // Change border color on click
                    marginLeft: "15%",
                  }}
                >
                  <View style={{ backgroundColor: "rgba(211, 211, 211, 0.2)", marginTop: "15%", width: "45%", height: 50, justifyContent: "center", alignSelf: "center", borderRadius: 15 }}>
                    <Image
                      source={{ uri: data[index + 1].imageUrl }}
                      style={{ width: 30, height: 35, justifyContent: "center", alignSelf: "center", marginTop: "2%", backgroundColor: "red", borderRadius: 12 }}
                    />
                  </View>
                  <Text style={{ margin: "10%", fontWeight: "bold", marginLeft: "30%" }}>{data[index + 1].title}</Text>
                </TouchableOpacity>
              )}
            </View>
          );
        }
        return acc;
      }, [])}
    </View>
    <TouchableOpacity onPress={()=>navigation.navigate("HomeScreen")}>
            <View style={{borderRadius:15,backgroundColor:"orange", paddingVertical: 14, paddingHorizontal: 30,  alignItems: 'center',  justifyContent: 'center',margin:"10%"}}>
                <Text style={{color:"black",fontSize: 17, fontWeight:"bold"}}>Next</Text>
            </View>
            </TouchableOpacity>
        </View>
        
    
    
  )
}

export default FavouritePlace

const styles = StyleSheet.create({
    exploreTextContainer: {
        marginLeft: "9%",
        marginBottom: "8%",
        marginTop:"17%"
      },
      exploreTextBold: {
        fontWeight: "bold",
        fontSize: 25,
      },
      exploreTextBold2: {
        fontWeight: "bold",
        fontSize: 25,
        marginTop: "3%",
      },
})