import React from 'react'
import { NativeBaseProvider, ScrollView, View, VStack } from 'native-base';
import { Image } from 'react-native';
import { Pressable, StyleSheet, Text } from 'react-native';
import PaymentOption from '../../components/PaymentOption/PaymentOption';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#121212',
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: '7.5%',
        paddingTop: 20,
    },
    cards: {
        marginTop: 20,
    }
});

const Payment2 = () => {
  return (
    <>
        <NativeBaseProvider>
            <ScrollView style={styles.container}>
                <VStack>

                    <View>
                        <Pressable
                            onPress={() => {
                                console.log('Pressed');
                            }}
                            style={{
                                marginTop: 20,
                            }}
                        >
                            <Image source={require('../../assets/back.png')} />
                        </Pressable>
                    </View>

                    <View>
                        <Text
                            style={{
                                color: '#fff',
                                fontSize: 24,
                                fontWeight: 'bold',
                                marginTop: 20,
                            }}
                        >
                            Select Payment Currency
                        </Text>
                    </View>
                    
                    <View style={styles.cards}>
                    <PaymentOption image={require('../../assets/back.png')} text="Testing" />
                    </View>
                    <View style={styles.cards}>
                    <PaymentOption image={require('../../assets/back.png')} text="Testing" />
                    </View>
                    <View style={styles.cards}>
                    <PaymentOption image={require('../../assets/back.png')} text="Testing" />
                    </View>
                    <View style={styles.cards}>
                    <PaymentOption image={require('../../assets/back.png')} text="Testing" />
                    </View>


                </VStack>
            </ScrollView>
        </NativeBaseProvider>
    </>
  )
}

export default Payment2