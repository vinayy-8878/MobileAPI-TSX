import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native";

const AllUsers = ({navigation}) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch the list of users when the component mounts
    fetchAllUsers();
  }, []);

  const fetchAllUsers = async () => {
    try {
      const usersResponse = await fetch("https://reqres.in/api/users");
      const usersData = await usersResponse.json();

      // Set the list of users in the state
      setUsers(usersData.data);
    } catch (error) {
      console.error("Error fetching all users:", error);
    }
  };

  const renderUserItem = ({ item }) => (
    <TouchableOpacity
      style={styles.userItem}
      onPress={() => navigation.navigate("Profile", { userId: item.id })}
    >
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <Text style={styles.userName}>{`${item.first_name} ${item.last_name}`}</Text>
    </TouchableOpacity>
  );
  return (
    <LinearGradient style={styles.container} colors={["#39B68D", "#007260"]}>
      <View style={styles.innerContainer}>
        <Text style={styles.header}>All Users</Text>
        <FlatList
          data={users}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderUserItem}
        />
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
    marginHorizontal: 22,
    justifyContent: "center",
    marginTop:0,
    
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    marginBottom: 20,
  },
  
  userItem: {
    marginBottom: 16,
    backgroundColor: "white",
    borderRadius: 8,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    height:60
    // justifyContent:'center'
  },
  userBox: {
    // flexDirection: "row",
    // alignItems: "center",
    padding: 16,
    marginBottom: 16,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
    marginLeft: 12,
  },
  userInfo: {
    flex: 1,
    // flexDirection: "row",
    // alignItems: "center",
    marginLeft: 12, // Add this line to properly separate the avatar and the name
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    marginLeft: 150,
  },
});

export default AllUsers;
