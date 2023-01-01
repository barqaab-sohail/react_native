import {
  View,
  Text,
  Alert,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import Api from "../../api/Api";
const END_POINT = "/employees";
import { useQuery } from "@tanstack/react-query";

const EmpList = () => {
  const { isLoading, error, data } = useQuery(
    ["employees"],
    () => {
      return Api.get(END_POINT);
    },
    {
      staleTime: 30000, //refresh on swich screen
      refetchInterval: 60000, //refresh on some time
    }
  );
  if (isLoading) {
    return (
      <View>
        <Text>Loading.....</Text>
      </View>
    );
  }
  function clickEventListener(item) {
    console.log(item);
  }

  //   Api.get("employees").then((res) => {
  //     if (res.status === 200) {
  //     } else {
  //       Alert.alert("Alert", "Network Error", [{ text: "OK" }]);
  //     }
  //   });
  return (
    <View>
      <Text>Employee List</Text>
      {data?.data.map((item, key) => {
        return (
          <View key={key}>
            <Text>{item.full_name}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default EmpList;
