import React, { useState, useEffect } from "react";
import { Alert } from 'react-native';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";

export default function API_Screen04({ navigation,route }) {
  const { id } = route.params; 
  const [user, setUser] = useState(""); 

  useEffect(() => {
    if (id) {
      axios
        .get(`https://67055f04031fd46a830fb4fb.mockapi.io/users/${id}`)
        .then((res) => {
          setUser(res.data.content); 
        })
        .catch((err) => console.log(err));
    }
  }, [id]); 

  const updateUser = () => {
    axios
      .put(`https://67055f04031fd46a830fb4fb.mockapi.io/users/${id}`, {
        content: user,
      })
      .then(() => {
        Alert.alert(
          "Success",
          "User updated successfully!",
          [
            {
              text: "OK",
              onPress: () => navigation.goBack(),
            },
          ],
          { cancelable: false }
        );
      })
      .catch((error) => {
        console.error("Error updating user:", error);
        Alert.alert("Error", "Something went wrong!");
      });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
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
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign style={styles.ant} name="arrowleft" />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentText}>EDIT USER</Text>
        </View>
        <View style={styles.inputAdd}>
          <TextInput
            style={styles.input}
            placeholder="Edit user content"
            value={user}
            onChangeText={(text) => setUser(text)}
          />
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.button1}
            onPress={updateUser}
          >
            <Text style={styles.buttonText1}>UPDATE</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Image style={styles.imgHeader} source={require("../image/note.png")} />
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
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentText: {
    fontWeight: "bold",
    fontSize: 30,
  },
  inputAdd: {
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
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button1: {
    backgroundColor: "#00BDD6",
    padding: 15,
    borderRadius: 10,
    width: "50%",
  },
  buttonText1: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  footer: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
});
