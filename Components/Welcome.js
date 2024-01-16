import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const Welcome = ({ navigation }) => {
  return (
    <LinearGradient style={styles.container} colors={["#39B68D", "#007260"]}>
      <View style={{ flex: 1 }}>
        <View>
          <Image
            style={styles.FirstImage}
            source={require("../Images/hero1.jpg")}
          />
          <Image
            style={styles.SecondImage}
            source={require("../Images/hero3.jpg")}
          />
          <Image
            style={styles.ThirdImage}
            source={require("../Images/hero3.jpg")}
          />
          <Image
            style={styles.FourthImage}
            source={require("../Images/hero2.jpg")}
          />
        </View>
        <View
          style={{
            paddingHorizontal: 22,
            position: "absolute",
            top: 400,
            width: "100%",
          }}
        >
          <Text style={styles.letsText}>Let's get</Text>
          <Text style={styles.startedText}>Started</Text>
        </View>
        <TouchableOpacity
          style={styles.signupButton}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text style={styles.signupButtonText}>Signup</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.loginButtonText}>
            Already have an account? Login
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  FirstImage: {
    height: 100,
    width: 100,
    borderRadius: 20,
    position: "absolute",
    top: 10,
    transform: [{ translateX: 20 }, { translateY: 50 }, { rotate: "-15deg" }],
  },
  SecondImage: {
    height: 100,
    width: 100,
    borderRadius: 20,
    position: "absolute",
    top: -30,
    left: 100,
    transform: [{ translateX: 50 }, { translateY: 50 }, { rotate: "-5deg" }],
  },
  ThirdImage: {
    height: 100,
    width: 100,
    borderRadius: 20,
    position: "absolute",
    top: 130,
    left: -50,
    transform: [{ translateX: 50 }, { translateY: 50 }, { rotate: "15deg" }],
  },
  FourthImage: {
    height: 200,
    width: 200,
    borderRadius: 20,
    position: "absolute",
    top: 110,
    left: 100,
    transform: [{ translateX: 50 }, { translateY: 50 }, { rotate: "-15deg" }],
  },
  letsText: {
    fontSize: 50,
    fontWeight: 800,
    color: "white",
  },
  startedText: {
    fontSize: 46,
    fontWeight: 800,
    color: "#FFFFFF",
  },

  signupButton: {
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 20,
    alignSelf: "center",
    position: "absolute",
    bottom: 90,
    width: "90%",
  },
  signupButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#007260",
    textAlign: "center",
  },

  loginButton: {
    position: "absolute",
    bottom: 50,
    width: "90%",
    alignSelf: "center",
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#FFFFFF",
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: "center",
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
  },
});

export default Welcome;
