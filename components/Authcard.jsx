import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native';

const styles = StyleSheet.create({
    container: {
        position:'relative',
        backgroundColor: '#5b42754d',
    },
})

const Authcard = (props) => {
  return (
    <>
        <View>
            <View> // horizontal
                <View>
                    {/* <Image source={{uri: 'assets/createAccount.svg'}} /> */}
                </View>
                <View> // vertical
                    <View>
                        <Text>
                            {props.title}
                        </Text>
                    </View>
                    <View>
                        <Text>
                            {props.subtext}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    </>
  )
}

export default Authcard