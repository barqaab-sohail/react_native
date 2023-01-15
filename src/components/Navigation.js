import React, { useContext } from "react";
import { Text, View, Button } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import EmployeeListScreen from "../screens/hr/EmployeeListScreen";
import ProjectHome from "../../pages/project/ProjectHome";
import DashboardScreen from "../screens/DashboardScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import { AuthContext } from "../context/AuthContext";
import SplashScreen from "../screens/SplashScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const { userInfo, splashLoading, isLoading, logout } =
    useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {splashLoading ? (
          <Stack.Screen
            name="Splash Screen"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
        ) : userInfo.token ? (
          <>
            <Stack.Screen
              name="Home"
              component={DashboardScreen}
              options={{
                title: "Dashboard",
                headerRight: () => (
                  <Button title="Logout" color="red" onPress={logout} />
                ),
              }}
            />
            <Stack.Screen name="Employee List" component={EmployeeListScreen} />
            <Stack.Screen name="Project List" component={ProjectHome} />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            {/* <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{ headerShown: false }}
            /> */}
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
