import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    Alert,
  } from "react-native";
  import React, { useState } from "react";
  import { SafeAreaView } from "react-native-safe-area-context";
  import { LinearGradient } from "expo-linear-gradient";
  import CheckBox from "expo-checkbox";
  
  const Signup = ({ navigation }) => {
    const [isChecked, setIsChecked] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSignup = async () => {
      try {
        const response = await fetch("https://reqres.in/api/register", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        });
  
        const result = await response.json();
  
        if (response.ok) {
          // Successful signup
          Alert.alert("Signup Successful");
          // Navigate to the login screen or perform further actions
          navigation.navigate("Login");
        } else {
          // Failed signup
          Alert.alert("Signup Failed", result.error);
        }
      } catch (error) {
        console.error("Error during signup:", error);
        Alert.alert("An error occurred during signup");
      }
    };
  
    return (
      <LinearGradient style={styles.container} colors={["#39B68D", "#007260"]}>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ marginHorizontal: 22, justifyContent: "center" }}>
            <Text
              style={{
                fontSize: 22,
                fontWeight: "bold",
                color: "black",
                textAlign: "center",
                marginTop: 180,
              }}
            >
              Create your profile
            </Text>
  
            <View style={{ marginBottom: 12, marginTop: 20 }}>
              <Text style={{ fontSize: 16, fontWeight: 400, marginVertical: 12 }}>
                Email Address
              </Text>
              <View
                style={{
                  width: "100%",
                  height: 48,
                  borderColor: "black",
                  borderWidth: 1,
                  borderRadius: 8,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingLeft: 22,
                }}
              >
                <TextInput
                  placeholder="Enter your email address"
                  placeholderTextColor={"black"}
                  keyboardType="email-address"
                  style={{ width: "100%" }}
                  onChangeText={(text) => setEmail(text)}
                />
              </View>
              <View style={{ marginBottom: 12 }}>
                <Text
                  style={{ fontSize: 16, fontWeight: 400, marginVertical: 12 }}
                >
                  Password
                </Text>
                <View
                  style={{
                    width: "100%",
                    height: 48,
                    borderColor: "black",
                    borderWidth: 1,
                    borderRadius: 8,
                    alignItems: "center",
                    justifyContent: "center",
                    paddingLeft: 22,
                  }}
                >
                  <TextInput
                    placeholder="Enter your password"
                    placeholderTextColor={"black"}
                    secureTextEntry
                    style={{ width: "100%" }}
                    onChangeText={(text) => setPassword(text)}
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginTop: 20,
                alignItems: "center",
              }}
            >
              <CheckBox
                value={isChecked}
                onValueChange={() => setIsChecked(!isChecked)}
                color={isChecked ? "blue" : "white"}
              />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 400,
                  paddingLeft: 15,
                  color: isChecked ? "blue" : "white",
                }}
              >
                I agree to terms and conditions
              </Text>
            </View>
  
            {/* Signup Button */}
            <TouchableOpacity
              style={[
                styles.signupButton,
                {
                  backgroundColor: isChecked
                    ? "white"
                    : "rgba(255, 255, 255, 0.5)",
                },
              ]}
              onPress={handleSignup}
              disabled={!isChecked}
            >
              <Text style={styles.buttonText}>Signup</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </LinearGradient>
    );
  };
  
  export default Signup;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    signupButton: {
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginTop: 20,
      alignSelf: "center",
      width: "100%",
    },
    buttonText: {
      fontSize: 16,
      fontWeight: "bold",
      color: "#007260",
      textAlign: "center",
    },
  });
  