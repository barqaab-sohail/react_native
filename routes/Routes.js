import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Button } from "react-native";
import Dashboardf from "../pages/dashboard/Dashboardf";
import LoginForm from "../components/login/LoginForm";
import EmployeeList from "../pages/hr/EmployeeList";
import EmpList from "../pages/hr/EmpList";
import ProjectHome from "../pages/project/ProjectHome";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();
// const AppNavigator = createStackNavigator(
//   {
//     Launch: {
//       screen: LaunchComponent,
//     },
//   },
//   {
//     initialRouteName: "Launch",
//     defaultNavigationOptions: ({ navigation }) => {
//       return MyHeader(navigation);
//     },
//   }
// );

const Routes = () => {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
        <Stack.Screen
          name="BARQAAB MIS"
          component={LoginForm}
          options={{ title: "BARQAAB MIS Login Page" }}
        />

        <Stack.Screen
          name="Dashboard"
          component={Dashboardf}
          options={{
            title: "Dashboard",
            headerRight: () => (
              <Button
                onPress={() => alert("This is a button!")}
                title="logout"
                color="black"
              />
            ),
          }}
        />
        <Stack.Screen name="Employee List" component={EmpList} />
        <Stack.Screen name="Project List" component={ProjectHome} />
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
