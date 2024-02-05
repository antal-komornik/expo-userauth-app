import {
  FormControl,
  Input,
  Link,
  HStack,
  Box,
  Center,
  Heading,
  Button,
  ScrollView,
  VStack,
  Flex,
  Text,
} from "native-base";
import { useState, useContext, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Form from "../components/Form";

import { AuthContext } from "../context/AuthContext";

const schema = yup
  .object({
    username: yup
      .string()
      .required("Username is required")
      .min(5, "Username must contain at least 5 characters")
      .max(15, "Username must contain at most 15 characters")
      ,
    password: yup
      .string()
      .required("Password is required")
      // .min(5, "Password must contain at least 5 characters")
      ,
  })
  .shape();

const LoginScreen = () => {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });
  const { login, userName } = useContext(AuthContext);

  const onSubmit = (data) => {
    console.log(data);
    login(data);
  };

  useEffect(() => {
    if (userName !== null) {
      navigation.navigate("HomeScreen");
    }
  }, [userName]);

  return (
    <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
        >
          Welcome
        </Heading>
        <Heading
          mt="1"
          _dark={{
            color: "warmGray.200",
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs"
        >
          Sign in to continue!
        </Heading>

        <VStack space={3} mt="5">
          <Form
            label="Username"
            type="text"
            name="username"
            control={control}
          />
          {errors.username && (
            <Text style={{ color: "red" }}>{errors.username.message}</Text>
          )}

          <Form
            label="Password"
            type="password"
            name="password"
            control={control}
          />
          {errors.password && (
            <Text style={{ color: "red" }}>{errors.password.message}</Text>
          )}

          <Button mt="2" colorScheme="indigo" onPress={handleSubmit(onSubmit)}>
            Sign in
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};

export default function Login() {
  return (
    <Box flex="1" safeAreaTop>
      <ScrollView>
        <LoginScreen />
      </ScrollView>
    </Box>
  );
}
