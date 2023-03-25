import { HStack, NativeBaseProvider, VStack } from "native-base";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  Pressable,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useHookstate } from "@hookstate/core";
import { chainState } from "../redux/index";
const { height, width } = Dimensions.get("window");
import btc from "../assets/bitcoin.png";

const styles = StyleSheet.create({
  accountCard: {
    marginTop: height * 0.05,
    width: width * 0.9,
    height: height * 0.6,
    backgroundColor: "#6100FF",
    borderRadius: 30,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: height * 0.05,
    paddingBottom: height * 0.05,
  },
  chain: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: width * 0.7,
    alignSelf: "center",
  },
});

const Chain = (props) => {
  return (
    <>
      <Pressable onPress={props.onPress}>
        <View style={styles.chain}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Image source={props.img} />
            <View>
              <Text
                style={{
                  paddingLeft: width * 0.03,
                  color: "#ffffff",
                  fontWeight: "700",
                  fontSize: 20,
                }}
              >
                {props.name}
              </Text>
            </View>
          </View>
        </View>
      </Pressable>
    </>
  );
};

const ChainShow = (props) => {
  const chain = useHookstate(chainState);
  return (
    <>
      <View style={styles.accountCard}>
        <View
          style={{
            paddingTop: height * 0.035,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingRight: width * 0.08,
          }}
        >
          <View>
            <Text
              style={{
                color: "#ffffff",
                fontSize: 22,
                paddingLeft: width * 0.05,
              }}
            >
              {props.username}
            </Text>
          </View>
          <Pressable
            onPress={() => {
              props.setisopen(false);
            }}
          >
            <View>
              <Image source={require("../assets/dropdown.png")} />
            </View>
          </Pressable>
        </View>

        <View>
          <View>
            <Text
              style={{
                color: "#C7C7C7",
                paddingLeft: width * 0.05,
              }}
            >
              Wallet
            </Text>
          </View>

          <View>
            <Text
              style={{
                color: "#ffffff",
                fontSize: 22,
                paddingLeft: width * 0.05,
                paddingBottom: 0,
              }}
            >
              ${props.balance}
            </Text>
          </View>
        </View>

        <View>
          <Pressable
            onPress={() => {
              props.setiscoinopen(1);
            }}
          >
            <Text
              style={{
                color: "#ffffff",
                fontSize: 15,
                paddingLeft: width * 0.05,
              }}
            >
              Current network
            </Text>
            <Text
              style={{
                color: "#ffffff",
                fontSize: 25,
                paddingLeft: width * 0.05,
              }}
            >
              {props.network}
            </Text>
          </Pressable>
        </View>
        {Object.keys(props.chains).map((key) => {
          return (
            <Chain
              name={props.chains[key].chainName}
              img={props.chains[key].image}
              onPress={() => {
                chain.set(key);
              }}
              key={key}
            />
          );
        })}
      </View>
    </>
  );
};

export default ChainShow;
