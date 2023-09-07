import React from "react"
import {createStackNavigator} from '@react-navigation/stack'
import SignUpScreen from "../screens/SignUpScreen"
import SignInScreen from "../screens/SigninScreen"

export default AuthStackScreens = () => {
    const AuthStack = createStackNavigator()
    return (
        <AuthStack.Navigator screenOptions={{ headerShown: false,}}>
            <AuthStack.Screen name="SignIn" component={SignInScreen} />
            <AuthStack.Screen name="SignUp" component={SignUpScreen}/>
            
        </AuthStack.Navigator>
    )
}