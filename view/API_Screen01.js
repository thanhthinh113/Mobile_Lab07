import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function API_Screen01() {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.imgHeader}
            source={require("../image/note.png")}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.contentText}>MANAGE YOUR{"\n"}TASK</Text>
        </View>
        <View style={styles.mail}>
          <TextInput style={styles.input} placeholder="Enter your name" />
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => navigation.navigate("API_Screen02")}
          >
            <Text style={styles.buttonText1}>GET STARTED</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  contentText: {
    color: "#8353E2",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: "grey",
  },
  mail: {
    flex: 2,
    marginLeft: 10,
    marginRight: 10,
  },
  button: {
    flex: 2,
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
});
