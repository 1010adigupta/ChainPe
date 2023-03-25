import React from 'react'
import { ScrollView,Image, View, Text, StyleSheet, TextInput , Pressable} from 'react-native'
import { Dimensions } from 'react-native'
import ButtonCustom from '../../components/Button'
import InputFields from '../../components/InputFields'
import LoginCards from '../../components/LoginCards'
const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#222122',
        boxShadow: 'inset -4px -4px 4px rgba(0, 0, 0, 0.25)',
    },
    title: {
        color: 'white',
        fontSize: 32,
        fontWeight: '700',
        marginTop: height*0.1,
        marginLeft: width*0.055,
    },
})

const LoginPage = () => {
  return (
    <>
        <ScrollView style={styles.container}>
            <View style={{
                marginTop: height*0.25,
            }}>
                <Text style={styles.title}>ChainPe Log in</Text>
            </View>

            <View style={{
                alignSelf: 'center',
                marginTop: height*0.03,
            }}>
                <InputFields placeholder="Username" />
                <InputFields placeholder="Password" />
            </View>

            <View style={{
                alignSelf: 'center',
                marginTop: height*0.065,
            }}>
                <ButtonCustom title="Login" />
            </View>

            <View style={{
                alignSelf: 'center',
            }}>
                <Text style={{
                    color: '#ffffff',
                    fontSize: 14,
                    marginTop: height*0.03,
                }}>
                    or continue with
                </Text>
            </View>

            <View style={{
                alignSelf: 'center',
            }}>
                <LoginCards title="Continue with Google" />
                <LoginCards title="Continue with MetaMask" />
            </View>


        </ScrollView>
    </>
  )
}

export default LoginPage