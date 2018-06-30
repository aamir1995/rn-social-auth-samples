import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const FBSDK = require('react-native-fbsdk');
const {
    LoginManager
} = FBSDK;

/**
 * COMPONENTS
 */
import { Button } from '@components';

export default FacebookLogin = (props) => {

    loginWithFb = function () {
        LoginManager.logInWithReadPermissions(['public_profile']).then((result) => {
            if (result.isCancelled) {
                alert('Login cancelled');
            } else {
                alert('Login success with permissions: ' + result.grantedPermissions.toString());
            }
        }, (error) => {
            alert('Login fail with error: ' + error);
        })
    }

    return (
        <Button icon="logo-facebook" btnText="Login With Facebook" background="#3b5998" onBtnPress={loginWithFb} />
    );

}
