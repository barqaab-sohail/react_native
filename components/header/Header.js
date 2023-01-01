import { View, Text } from "react-native";
import React from "react";

const Header = (navigation) => {
  return {
    header: (props) => <MyCustomHeader {...props} />,
    headerStyle: { backgroundColor: "#fff" },
    headerTintColor: "#000",
  };
};

export default Header;
