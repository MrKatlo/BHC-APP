import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Image, Text, TextInput, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
function Pay(props) {
    return (
        <SafeAreaView>
              <StatusBar style='auto' />
        <View>
            <Text>Payments</Text>
        </View>
       </SafeAreaView>
    );
}

export default Pay;