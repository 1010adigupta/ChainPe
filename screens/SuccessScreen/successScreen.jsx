import { Center, HStack, NativeBaseProvider, VStack } from "native-base";
import React from "react";
import { Image, ScrollView, StyleSheet, View, Text } from "react-native";
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
import ButtonCustom from "../../components/Button";
import { useHookstate } from "@hookstate/core";
import { paymentState } from "../../redux/paymentSlice/index";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#222122",
  },
  success: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
  },
  infoMsg: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 1,
  },
  fixedMsg: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 5,
  },
  proptext: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "400",
  },
  infoBox: {
    marginTop: height * 0.05,
    backgroundColor: "#5b4275",
    opacity: 0.7,
    width: width * 0.8,
    height: 200,
    borderRadius: 20,
    padding: 20,
    borderColor: "#6100FF",
    borderWidth: 2,
  },
  Hboxes: {
    justifyContent: "space-between",
    width: width * 0.69,
    marginTop: 20,
  },
  eachBox: {
    width: width * 0.3,
  },
});

const StatusInfo = (props) => {
  return (
    <>
      <VStack
        style={{
          display: "flex",
        }}
      >
        <View>
          <HStack style={styles.Hboxes}>
            <VStack style={styles.eachBox}>
              <Text style={styles.fixedMsg}>To</Text>
              <Text style={styles.proptext}>{props.reciever}</Text>
            </VStack>
            <VStack style={styles.eachBox}>
              <Text style={styles.fixedMsg}>At</Text>
              <Text style={styles.proptext}>{props.time}</Text>
            </VStack>
          </HStack>
        </View>

        <View>
          <HStack style={styles.Hboxes}>
            <VStack style={styles.eachBox}>
              <Text style={styles.fixedMsg}>Paid With</Text>
              <Text style={styles.proptext}>{props.amount}</Text>
            </VStack>
            <VStack style={styles.eachBox}>
              <Text style={styles.fixedMsg}>Payment Method</Text>
              <Text style={styles.proptext}>{props.method}</Text>
            </VStack>
          </HStack>
        </View>
      </VStack>
    </>
  );
};

const SuccessScreen = (props) => {
  const payment = useHookstate(paymentState);
  const clearPayment = () => {
    payment.set({});
  };
  return (
    <>
      <NativeBaseProvider>
        <ScrollView style={styles.container}>
          <View style={styles.success}>
            <Image source={require("../../assets/success.png")} />
          </View>
          <View style={styles.infoMsg}>
            <Center style={styles.infoBox}>
              <StatusInfo
                reciever={payment.get().name}
                time={new Date().getDate() + " " + new Date().getMonth()}
                amount={payment.get().amount}
                method={"UPI"}
              />
            </Center>
          </View>
          <View style={styles.button}>
            <ButtonCustom
              title="Done"
              route="Dashboard"
              isFunction={true}
              functionName={clearPayment}
            />
          </View>
        </ScrollView>
      </NativeBaseProvider>
    </>
  );
};

export default SuccessScreen;
