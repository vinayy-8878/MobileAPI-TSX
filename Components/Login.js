import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await fetch("https://reqres.in/api/login", {
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
        // Successful login
        Alert.alert("Login Successful");
        // Navigate to the next screen or perform further actions
        navigation.navigate("AllUsers");
      } else {
        // Failed login
        Alert.alert("Login Failed", result.error);
      }
    } catch (error) {
      console.error("Error during login:", error);
      Alert.alert("An error occurred during login");
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
              color: "black", // This should be "white" as per your request
              textAlign: "center",
              marginTop: 180,
            }}
          >
            Login to your account
          </Text>

          <View style={{ marginBottom: 12, marginTop: 20 }}>
            <Text style={{ fontSize: 16, fontWeight: 400, marginVertical: 12, color: 'black' }}>
              Email Address
            </Text>
            <View
              style={{
                width: "100%",
                height: 48,
                borderColor: "black",
                borderWidth: 1,
                borderRadius: 8,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 22,
              }}
            >
              <TextInput
                placeholder="Enter your email address"
                placeholderTextColor={"black"}
                keyboardType="email-address"
                style={{ flex: 1, color: 'black', fontSize: 16 }}
                onChangeText={(text) => setEmail(text)}
              />
            </View>
          </View>
          <View style={{ marginBottom: 12 }}>
            <Text style={{ fontSize: 16, fontWeight: 400, marginVertical: 12, color: 'black' }}>
              Password
            </Text>
            <View
              style={{
                width: "100%",
                height: 48,
                borderColor: "black",
                borderWidth: 1,
                borderRadius: 8,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 22,
              }}
            >
              <TextInput
                placeholder="Enter your password"
                placeholderTextColor={"black"}
                secureTextEntry={!showPassword}
                style={{ flex: 1, color: 'black', fontSize: 16 }}
                onChangeText={(text) => setPassword(text)}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Text style={{ color: 'white', fontSize: 16, marginLeft: 10 }}>{showPassword ? 'Hide' : 'Show'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Login Button */}
        <TouchableOpacity
          style={[
            styles.loginButton,
            {
              backgroundColor: "white",
            },
          ]}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        {/* Signup Option */}
        <TouchableOpacity
          style={styles.signupOption}
          onPress={() => {
            navigation.navigate("Signup");
          }}
        >
          <Text style={styles.signupText}>New user? Signup here</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginButton: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 40,
    alignSelf: "center",
    width: "90%",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#007260",
    textAlign: "center",
  },
  signupOption: {
    marginTop: 20,
    alignSelf: "center",
  },
  signupText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    textDecorationLine: "underline",
  },
});

export default Login;
