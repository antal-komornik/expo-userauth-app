import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [userName, setUserName] = useState(null);

  const register = (data) => {
    setIsLoading(true);
    axios
      .post("http://192.168.0.213:8000/api/register/", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then(function (response) {
        if (response.status == "200") {
          setUserToken(response.data.token);
          setUserName(response.data.user.username);
          AsyncStorage.setItem("userToken", response.data.token);
          AsyncStorage.setItem("userName", response.data.user.username);
        } else {
          return console.log(response);
        }
      })
      .catch(function (error) {
        console.error(error.message);
      });
    setIsLoading(false);
  };

  const login = (data) => {
    setIsLoading(true);
    axios
      .post("http://192.168.0.213:8000/api/login/", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then(function (response) {
        if (response.status == "200") {
          setUserToken(response.data.token);
          setUserName(response.data.user.username);
          AsyncStorage.setItem("userToken", response.data.token);
          AsyncStorage.setItem("userName", response.data.user.username);
        } else {
          return console.log(response);
        }
      })
      .catch(function (error) {
        console.error(error.message);
      });
    setIsLoading(false);
  };

  const logout = () => {
    console.log("logout");
    setIsLoading(true);
    setUserToken(null);
    setUserName(null);
    AsyncStorage.removeItem("userToken");
    AsyncStorage.removeItem("userName");
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      var userToken = await AsyncStorage.getItem("userToken");
      var userName = await AsyncStorage.getItem("userName");
      setUserToken(userToken);
      setUserName(userName);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{ register, login, logout, isLoading, userToken, userName }}
    >
      {children}
    </AuthContext.Provider>
  );
};
