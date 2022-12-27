import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
//import Login from "./pages/login/Login";
import Login from "../pages/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import LoginForm from "../components/login/LoginForm";
import HrHome from "../pages/hr/HrHome";
import ProjectHome from "../pages/project/ProjectHome";
const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator
        initialRouteName="BARQAAB MIS"
        screenOptions={{ headerTitleAlign: "center" }}
      >
        <Stack.Screen
          name="BARQAAB MIS"
          component={LoginForm}
          options={{ title: "BARQAAB MIS Login Page" }}
        />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Hr Home" component={HrHome} />
        <Stack.Screen name="Project Home" component={ProjectHome} />
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
