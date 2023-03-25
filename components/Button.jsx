import React from "react";
import { Button, Pressable, Text } from "react-native";
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
import { useNavigation } from "@react-navigation/native";

const ButtonCustom = (props) => {
  const navigation = useNavigation();
  return (
    <>
      {/* <Button
            title="Continue"
            color='#6100ff'
            style={{
                width: 100,
            }}
        /> */}
      <Pressable
        style={{
          backgroundColor: "#6100ff",
          width: width * 0.9,
          height: 60,
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
        }}
        onPress={() => {
          if (props.isFunction) {
            props.functionName();
            navigation.navigate(props.route);
          } else {
            navigation.navigate(props.route);
          }
        }}
      >
        <Text
          style={{
            color: "#ffffff",
            fontSize: 16,
            fontWeight: "500",
          }}
        >
          {props.title}
        </Text>
      </Pressable>
    </>
  );
};

export default ButtonCustom;
