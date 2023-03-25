import React from 'react'
import { Center, HStack } from 'native-base'
import { Image, Text, StyleSheet, View, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#5b4275',
        opacity: 0.7,
    },
    containerPressed: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#5b4275',
        opacity: 0.3,
        borderColor: '#0313fc',
        borderWidth: 2,
    },
    text: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    hstack: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: 0,
    },
})


const PaymentOption = (props) => {
    const navigation = useNavigation();
    var [ isPress, setIsPress ] = React.useState(false);
  return (
    <>
        <Pressable style={styles.hstack} onPress={() => {
                navigation.navigate('PaymentFirst');
                setIsPress(true)
            }}>
            <Center w="90%" h="20" ml="0" rounded="19" shadow={3} style={!isPress? styles.container : styles.containerPressed}>
                    <Image source={props.image} />
                    <Text style={styles.text}>{props.text}</Text>
            </Center>
        </Pressable>
    </>
  )
}

export default PaymentOption