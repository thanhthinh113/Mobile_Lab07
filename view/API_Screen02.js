import React, { useState,useCallback} from "react";
import { useFocusEffect } from "@react-navigation/native";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";


export default function API_Screen02({navigation}) {
  const [user, setUser] = useState([]);

  useFocusEffect(
    useCallback(() => {
      axios
        .get("https://67055f04031fd46a830fb4fb.mockapi.io/users")
        .then((response) => setUser(response.data))
        .catch((err) => console.log(err));
    }, [])
  );

  const displayContent = ({ item }) => {
    return (
      <View style={styles.card}>
        <Text style={styles.cardContent}>{item.content}</Text>
        <AntDesign style={styles.ant} name="edit"></AntDesign>
      </View>
    );
  };
  

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <AntDesign style={styles.ant} name="arrowleft"></AntDesign>
          <View style={styles.infor}>
            <Image
              style={styles.imgHeader}
              source={require("../image/icon.png")}
            />
            <View style={styles.status}>
              <Text style={styles.name}>HI Twinkle</Text>
              <Text style={styles.textContent}>Have a great day ahead</Text>
            </View>
          </View>
        </View>
        <View style={styles.search}>
          <TextInput style={styles.input} placeholder="Search" />
        </View>
        <View style={styles.display}>
          <FlatList
            data={user}
            keyExtractor={(item) => item.id.toString()}
            renderItem={displayContent}
          />
        </View>
        <View style={styles.add}>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => navigation.navigate("API_Screen03")}
          >
            <AntDesign style={styles.plus} name="plus"></AntDesign>
          </TouchableOpacity>
        </View>
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ant: {
    fontSize: 24,
  },
  infor: {
    flexDirection: "row",
  },
  status: {
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom: 3,
  },
  search: {
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
    borderColor: "gray",
  },
  display: {
    flex: 4,
  },
  add: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  button1: {
    backgroundColor: "#00BDD6",
    padding: 15,
    borderRadius: 50,
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  plus: {
    color: "white",
    fontSize: 24,
  },

  card:{
    backgroundColor: 'grey',
    padding: 18,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius:30,
    flexDirection:"row",
    justifyContent:"space-between"
  },
  cardContent:{
    fontWeight:"bold",
    fontSize:18
  },
});
