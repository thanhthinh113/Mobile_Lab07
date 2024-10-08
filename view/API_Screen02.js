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
export default function API_Screen01() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
<Text>
    name
</Text>

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
})