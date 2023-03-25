import React from 'react'
import { ScrollView, StyleSheet, View, Text, Image } from 'react-native';
import ButtonCustom from '../../components/Button';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import { NativeBaseProvider, Center, HStack, VStack } from "native-base";
// import CreatePersonalAccount from '../CreatePersonalAccount/CreatePersonalAccount';
// import { useNavigation } from '@react-navigation/native';

// const navigation = useNavigation();

const styles = StyleSheet.create({
    container: {
        position:'relative',
        backgroundColor: '#222122',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
    },
    header1:{
        marginTop: height*0.4,
        marginLeft:width*0.034,
    },
    header2:{
        marginLeft:width*0.034,
        fontColor: '#ffffff',
    },
    subtext:{
        marginLeft:width*0.034,
    },
    button:{
        marginTop: 20,
    },
    maincard:{
        backgroundColor: '#5b4275',
        opacity: 0.8,
        width: width*0.9,
        height: height*0.1,
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginTop: height*0.03,
    }
});

const Authcard = (props) => {
    return (
        <>
        <View style={styles.maincard}>
            <View style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
                <View>
                    <Image source={props.image} alt="image" />
                </View>
                <View style={{
                    display:'flex',
                    flexDirection:'column',
                }}>
                    <View>
                        <Text style={{
                        color: '#ffffff',
                        fontSize: 20,
                        fontFamily: 'Montserrat',
                        fontWeight: '900',
                    }}>
                        {props.text}
                    </Text>
                    </View>
                    <View>
                        <Text style={{
                            alignSelf:'flex-start',
                            fontSize: 12,
                            color: '#868686',
                        }}>{props.subtext}</Text>
                    </View>
                </View>
            </View>
        </View>
        </>
    );
  }

const AuthPage = () => {
  return (
    <>
        <ScrollView style={styles.container}>

            <View style={styles.header1}>
                <Text style={{
                    color: '#ffffff',
                    fontSize: 32,
                    fontFamily: 'Montserrat',
                    alignSelf: 'flex-start',
                }}>
                    Welcome to
                </Text>
            </View>

            <View style={styles.header2}>
                <Text style={{
                    color: '#ffffff',
                    fontSize: 32,
                    fontFamily: 'Montserrat',
                }}>
                    ChainPe
                </Text>
            </View>

            <View style={styles.subtext}>
                <Text style={{
                    color: '#868686',
                }}>
                    Choose the type of account you want to open in ChainPe
                </Text>
            </View>
            
            <View>
            <Authcard image={require('../../assets/createAcc.png')} text="Create your Personal Account" subtext="Create your personal binance Account" />
            <Authcard image={require('../../assets/userAcc.png')} text="Sign up for an Entity Account" subtext="Open a Binance account for business" />
            </View>

            <View style={styles.button}>
                <ButtonCustom title="Continue" route="CreatePersonalAccount"/>
            </View>

        </ScrollView>
    </>
  );
}

export default AuthPage