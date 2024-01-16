// Profile.js
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const Profile = ({ route }) => {
  const { userId } = route.params;
  const [user, setUser] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    // Fetch the user details based on the user ID when the component mounts
    fetchUserDetails();
  }, []);

  const fetchUserDetails = async () => {
    try {
      const userResponse = await fetch(`https://reqres.in/api/users/${userId}`);
      const userData = await userResponse.json();

      // Set the user details in the state
      setUser(userData.data);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const goToAllUsers = () => {
    navigation.navigate("AllUsers");
  };

  if (!user) {
    return (
      <LinearGradient style={styles.container} colors={["#39B68D", "#007260"]}>
        <View style={styles.innerContainer}>
          <Text style={styles.header}>Loading...</Text>
        </View>
      </LinearGradient>
    );
  }

  return (
    <LinearGradient style={styles.container} colors={["#39B68D", "#007260"]}>
      <View style={styles.innerContainer}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
        
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>First Name:</Text>
          <Text style={styles.sectionValue}>{user.first_name}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Last Name:</Text>
          <Text style={styles.sectionValue}>{user.last_name}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Email:</Text>
          <Text style={styles.sectionValue}>{user.email}</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={goToAllUsers}>
          <Text style={styles.buttonText}>Go to All Users</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  section: {
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "center",
  },
  sectionLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    marginRight: 10,
  },
  sectionValue: {
    fontSize: 16,
    color: "black",
  },
  button: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 80,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#007260",
    textAlign: "center",
  },
});

export default Profile;
