import { Text, Platform, SafeAreaView } from "react-native";
import React from "react";

const Home = () => {
  return (
    <>
      {Platform.OS == "ios" && (
        <SafeAreaView style={{ flex: 0, backgroundColor: "#fff" }} />
      )}
      <Text>Home</Text>
    </>
  );
};

export default Home;
