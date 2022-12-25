import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
//import Login from "./pages/login/Login";
import Login from "../pages/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import LoginForm from "../components/login/LoginForm";
const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName="BARQAAB MIS">
        <Stack.Screen name="BARQAAB MIS" component={LoginForm} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Routes;
