import React, {useState} from "react";
import styled from "styled-components/native"
import Text from '../components/Text';
import { StatusBar } from 'react-native'


export default SignInScreen = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [loading, setLoading] = useState(false);
    return (
            <Container>
                <Main>
                    <Text title semi center>
                        Welcome back.
                    </Text>
                </Main>
                <Auth>
                    <AuthContainer>
                        <AuthTitle>Email Address</AuthTitle>
                        <AuthField autoCapitalize="none" autoCompleteType="email"
                        autoCorrect={false}
                        keyboardAppearance='dark' 
                        keyboardType={'email-address'} 
                        autoFocus={true}
                        onChangeText={email => setEmail(email.trim())}
                        value={email}
                        />
                    </AuthContainer>

                    <AuthContainer>
                        <AuthTitle>Password</AuthTitle>
                        <AuthField autoCapitalize="none" autoCompleteType="password"
                        autoCorrect={false}
                        secureTextEntry={true}
                        autoFocus={true}
                        onChangeText={password => setPassword(password.trim())}
                        value={password}
                        />
                    </AuthContainer>
                </Auth>

                <SignInContainer disabled={loading}>
                    {loading ? (
                        <Loading />
                    ) :(
                        <Text bold center color="#ffffff">Sign In</Text>
                    )}
                    
                </SignInContainer>
                
                <SignUp onPress={() => navigation.navigate("SignUp")}>
                    <Text small center>New to Pair Play?
                        <Text bold color="#8022d9">Sign Up</Text>
                    </Text>
                </SignUp>

                <HeaderGraphic>
                    <RightCircle />
                    <LeftCircle/>
                </HeaderGraphic>
                <StatusBar barStyle='light-content' />
            </Container>
        )
    }


const Container = styled.View`
    flex:1;
`

const Main =styled.View`
    margin-top: 192px;

`;

const Auth = styled.View`
    margin: 64px 32px 32px;
`;

const AuthContainer =styled.View`
    margin-bottom: 32px;

`;

const AuthTitle = styled(Text)`
    color: #8e93a1;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 300;
`;

const AuthField = styled.TextInput`
    border-bottom-color: #8293a1;
    border-bottom-width: 0.5px;
    height: 48px;
`;

const SignInContainer = styled.TouchableOpacity`
    margin: 0 32px;
    height: 48px;
    align-items: center;
    justify-content: center;
    background-color: #8022d9;
    border-radius: 6px;
`;

const Loading =styled.ActivityIndicator.attrs(props => ({
    color: "#ffffff",
    size: "small",
}))``;

const SignUp = styled.TouchableOpacity`
    margin-top: 16px;

`;

const HeaderGraphic = styled.View`
    position: absolute;
    width: 100%;
    top: -50px;
    z-index: -100;
`;

const RightCircle = styled.View`
     background-color: #8022d9;
    position: absolute;
    width: 400px;
    height: 400px;
    border-radius: 200px;
    right: -100px;
    top: -200px;
`;

const LeftCircle = styled.View`
    background-color: #23A6D5;
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 100px;
    left: -50px;
    top: -50px;
`;


