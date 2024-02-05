import {
  Box,
  Center,
  Heading,
  Button,
  ScrollView,
  Text,
  Spinner,
  HStack,
} from "native-base";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

export default function HomeScreen({ navigation }) {
  const { userName, logout } = useContext(AuthContext);
  
  return (
    <Box flex="1" safeAreaTop>
      <Center>
        <ScrollView>
          {userName == null ? (
            <Box>
              <Heading size="md">Hello please log in!</Heading>
              <Button
                onPress={() => navigation.navigate("UserAuthScreen")}
                mx="5"
                my="5"
              >
                Click Here
              </Button>
            </Box>
          ) : (
            <Box>
              <Heading size="md">Helo {userName}</Heading>
              <Button
                onPress={() => {
                  logout();
                }}
                mx="5"
                my="5"
              >
                Logout
              </Button>
            </Box>
          )}
        </ScrollView>
      </Center>
    </Box>
  );
}
