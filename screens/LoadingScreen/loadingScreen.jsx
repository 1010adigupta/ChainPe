import React, { useEffect } from "react";
import { ScrollView, Image, StyleSheet, Text, View } from "react-native";
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
import { useNavigation } from "@react-navigation/native";
import { useHookstate } from "@hookstate/core";
import { paymentState } from "../../redux/paymentSlice/index";
import { sendPayment } from "../../utils/auth/ethersRPC";
import { addressState } from "../../redux/addressSlice";
import { chainState } from "../../redux";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#222122",
  },
  commonTextStyle: {
    alignSelf: "center",
    paddingTop: height / 2.1,
    display: "flex",
    flexDirection: "column",
  },
});

const LoadingScreen = () => {
  const navigation = useNavigation();
  const payment = useHookstate(paymentState);
  const address = useHookstate(addressState);
  const chain = useHookstate(chainState);
  useEffect(() => {
    console.log(payment.get());
    sendPayment(
      payment.get().vpa,
      payment.get().name,
      payment.get().amount,
      "81",
      chain.get()
    ).then((res) => {
      navigation.navigate("SuccessScreen");
    });
  }, []);
  //
  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.commonTextStyle}>
          <View>
            <Text
              style={{
                color: "#fff",
                fontSize: 35,
                fontWeight: "bold",
              }}
            >
              Doing Magic
            </Text>
          </View>
          <View
            style={{
              alignSelf: "center",
            }}
          >
            <Text
              style={{
                color: "#b6bab7",
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              Please wait ...
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default LoadingScreen;
