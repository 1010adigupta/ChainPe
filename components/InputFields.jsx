import React from 'react'
import { ScrollView,Image, View, Text, StyleSheet, TextInput , Pressable} from 'react-native'
import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    userinput: {
        marginTop: height*0.01,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
})

const InputFields = (props) => {
    return (
        <>
            <View style={styles.userinput}>
            {/* <Image source={{uri: props.imageUri }} /> */}
                <Image source={require('../assets/user.png')} />
                <View style={{
                    alignSelf: 'center',
                    borderBottomWidth: 1,
                    borderBottimColor: '#9a3ef7',
                }}>
                    <TextInput 
                    style={{
                        paddingLeft: 10,
                        width: 0.8*width,
                        color: '#ffffff',
                    }}
                    placeholder={props.placeholder}
                    placeholderTextColor="#BABABA"
                    secureTextEntry={props.placeholder === "Password" ? true : false}
                    />
                </View>
            </View>
        </>
    );
}

export default InputFields