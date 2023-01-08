import { Button } from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Logout = () => {
  const pressHandler = async () => {
    await AsyncStorage.removeItem("AccessToken");
    console.log(await AsyncStorage.getItem("AccessToken"));
  };
  return <Button onPress={pressHandler} title="logout" color="black" />;
};

export default Logout;
