import React from 'react'
import { ScrollView,Image, View, Text, StyleSheet, TextInput , Pressable} from 'react-native'
import { Dimensions } from 'react-native'
import ButtonCustom from '../../components/Button'
import InputFields from '../../components/InputFields'
const { width, height } = Dimensions.get('window')
import LoginCards from '../../components/LoginCards'
import { Web3AuthLogin } from '../../utils/auth/web3auth'


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#222122',
    },
    signup: {
        marginTop: 20,
        alignSelf: 'center',
    },
    inputs: {
        alignSelf: 'center',
    },
})

const CreatePersonalAccount = () => {
  return (
    <>
        <ScrollView style={styles.container}>
            <View>
                <Image source={require('../../assets/createAccount.svg')} />
            </View>

            <View style={{
                marginLeft: width*0.08,
            }}>
                <Text style={{
                    color: '#ffffff',
                    fontWeight: 'bold',
                    fontSize: 32,
                    marginTop: height*0.23,
                }}>
                    Create Personal
                </Text>
                <Text style={{
                    color: '#ffffff',
                    fontWeight: 'bold',
                    fontSize: 32,
                    marginBottom: height*0.03,
                }}>
                    Account
                </Text>
            </View>

            <View style={styles.inputs}>
                <InputFields placeholder="Username" imageUri="user.png" />
                <InputFields placeholder="Email Id" imageUri="email.png"/>
                <InputFields placeholder="Password" imageUri="password.png"/>
            </View>

            <View style={styles.signup}> 
                <ButtonCustom title="Sign Up" />
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
                <LoginCards title="Continue with Google" isFunction={true} functionName={Web3AuthLogin} route="Dashboard"/>
                <LoginCards title="Continue with MetaMask" />
            </View>

            <View style={{
                alignSelf: 'center',
            }}>
                <Text style={{
                    color: '#9D9D9D',
                    fontSize: 14,
                    marginTop: height*0.03,
                }}>
                    Already have an account? Log in
                </Text>
            </View>

        </ScrollView>
    </>
  )
}

export default CreatePersonalAccount