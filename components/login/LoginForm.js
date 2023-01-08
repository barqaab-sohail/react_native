import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Api from "../../api/Api";
import { Formik } from "formik";
import React, { useEffect } from "react";
import { user_login } from "../../api/user_api";
import * as yup from "yup";
const ReviewForm = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required(),
});

const dummyData = {
  userName: "Sohail Afzal",
  email: "sohail.afzal@barqaab.com",
  apps: ["HR", "Projects", "Assets"],
};

const LoginForm = ({ navigation }) => {
  const userData = async () => {
    try {
      const token = await AsyncStorage.getItem("AccessToken");
    } catch (e) {
      console.log("Failed to login user.");
    }
  };
  console.log(userData.token);
  // https://github.com/samironbarai/rn-auth
  // useEffect(() => {
  //   if (user) {
  //     navigation.replace("Dashboard");
  //   } else {
  //     navigation.replace("BARQAAB MIS");
  //   }
  // }, []);
  return (
    <View>
      <Formik
        initialValues={{ email: "", password: "" }}
        //validationSchema={ReviewForm}
        onSubmit={(values, actions) => {
          user_login({
            email: values.email.toLocaleLowerCase(),
            password: values.password,
          })
            .then((result) => {
              if (result.data.status == 200) {
                AsyncStorage.setItem("AccessToken", result.data.token);
                AsyncStorage.setItem("userName", result.data.userName);
                AsyncStorage.setItem(
                  "userDesignation",
                  result.data.userDesignation
                );
                AsyncStorage.setItem("userPicture", result.data.pictureUrl);
                navigation.navigate("Dashboard");
              } else {
                Alert.alert("Alert ", result.data.message, [{ text: "OK" }]);
              }
            })
            .catch((err) => {
              console.error(err);
            });
          // const data = {
          //   email: values.email,
          //   password: values.password,
          // };
          // AsyncStorage.setItem("@user_data", dummyData.userName);
          // navigation.navigate("Dashboard", { data: dummyData });
          // Api.post("mis/login", data).then((res) => {
          //   if (res.data.status === 200) {
          //     actions.resetForm();
          //     navigation.navigate("Dashboard", { data: res.data });
          //   } else if (res.data.status === 401) {
          //     actions.setFieldError("email", res.data.message);
          //     //setGetError(res.data.message);
          //   } else if (res.data.status === 402) {
          //     actions.setFieldError("email", res.data.message);
          //     //setGetError(res.data.message);
          //   } else {
          //     actions.setFieldError("email", "some thing is missing");
          //     //setGetError("some thing is missing");
          //   }
          // });
        }}
      >
        {(props) => (
          <View style={styles.container}>
            <Image
              style={styles.image}
              source={require("../../assets/mono.jpg")}
            />
            <View style={styles.inputView}>
              <TextInput
                style={styles.TextInput}
                placeholder="Email"
                placeholderTextColor="#003f5c"
                onChangeText={props.handleChange("email")}
                value={props.values.email}
                onBlur={props.handleBlur("email")}
              />
            </View>
            <Text style={styles.errorText}>
              {props.touched.email && props.errors.email}
            </Text>
            <View style={styles.inputView}>
              <TextInput
                style={styles.TextInput}
                placeholder="Password"
                placeholderTextColor="#003f5c"
                secureTextEntry={true}
                onChangeText={props.handleChange("password")}
                value={props.values.password}
                onBlur={props.handleBlur("password")}
              />
            </View>
            <Text style={styles.errorText}>
              {props.touched.password && props.errors.password}
            </Text>
            <TouchableOpacity
              style={styles.loginBtn}
              onPress={props.handleSubmit}
            >
              <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginTop: 400,
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 10,
    marginTop: 10,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
  errorText: {
    color: "red",
  },
});

export default LoginForm;
