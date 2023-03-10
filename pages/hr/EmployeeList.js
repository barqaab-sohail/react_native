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

const EmployeeList = () => {
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
      <View style={styles.container}>
        <FlatList
          data={data.data}
          horizontal={false}
          numColumns={2}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={({ item }) => {
            return (
              <View>
                <TouchableOpacity
                  style={styles.card}
                  onPress={() => {
                    clickEventListener(item);
                  }}
                >
                  <Image
                    style={styles.cardImage}
                    source={{ uri: item.picture }}
                  />
                </TouchableOpacity>

                <View style={styles.cardHeader}>
                  <View
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <Text style={styles.title}>{item.full_name}</Text>
                    <Text style={styles.title}>{item.designation}</Text>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
      {/* {data?.data.map((item, key) => {
        return (
          <View key={key}>
            <Text>{item.full_name}</Text>
          </View>
        );
      })} */}
    </View>
  );
};

export default EmployeeList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: "#f6f6f6",
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor: "#f6f6f6",
  },
  listContainer: {
    alignItems: "center",
  },
  /******** card **************/
  card: {
    shadowColor: "#474747",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    marginVertical: 20,
    marginHorizontal: 40,
    backgroundColor: "#e2e2e2",
    //flexBasis: '42%',
    width: 120,
    height: 120,
    // borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage: {
    borderRadius: "50%",
    alignSelf: "center",
  },
  title: {
    fontSize: 18,
    flex: 1,
    alignSelf: "center",
    color: "#696969",
  },
});
