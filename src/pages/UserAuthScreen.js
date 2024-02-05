import { useEffect, useState, useContext } from "react";
import { StyleSheet } from "react-native";
import {
  Box,
  Center,
  Heading,
  Button,
  ScrollView,
  VStack,
  Flex,
} from "native-base";
import { AuthContext } from "../context/AuthContext";

export default function UserAuth({ navigation }) {
  const { userName, logout } = useContext(AuthContext);

  // const [authType, setauthType] = useState('');

  // useEffect(() => {
  //   if (authType == 'LoginScreen'){
  //     return (navigation.navigate('LoginScreen') || setauthType(""));
  //   }
  //   else if (authType == 'SignupScreen'){
  //     return (navigation.navigate('SignupScreen') || setauthType(""));
  //   }
  // }),[authType];
  // <Button onPress={() => setauthType('SignupScreen')} mx="5" my="5">
  //               Signup
  //             </Button>

  return (
    <Box flex="1" safeAreaTop>
      <ScrollView>
        <VStack space={2.5} w="100%" px="3">
          <Center>
            <Flex direction="row" mb="2.5" mt="1.5">
              {userName == null ? (
                <Box >
                  <Button
                    onPress={() => navigation.navigate("LoginScreen")}
                    mx="5"
                    my="5"
                  >
                    Login
                  </Button>
                  <Button
                    onPress={() => navigation.navigate("SignupScreen")}
                    mx="5"
                    my="5"
                  >
                    Signup
                  </Button>
                </Box>
              ) : (
                <Button onPress={() => {logout()}} mx="5" my="5">
                  Logout
                </Button>
              )}
            </Flex>
          </Center>
        </VStack>
      </ScrollView>
    </Box>
  );
}
