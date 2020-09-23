import React, { Component } from 'react';
import { View, Platform, StyleSheet, Text, ScrollView, Image } from 'react-native';
import Camera from './CameraComponent';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';

class Main extends Component {
    render() {
        state = {
            hasPermission: null,
            type: Camera.Constants.Type.back,
          }
        
          async componentDidMount() {
            const { status } = await Permissions.askAsync(Permissions.CAMERA);
            this.setState({ hasPermission: status === 'granted' });
          }
        return (
            <View>
                <Camera/>
            </View>
        );
    }
}
export default Main;