import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, SafeAreaView, TouchableOpacity, Alert, ScrollView, } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const { navigate } = useNavigation();

    const [user, setUser] = useState<String>('');
    const [password, setPassword] = useState<String>('');

    const Login = () => {
        navigate("Home");
    };

    const forgetMyPassword = () => {
        Alert.alert('Atenção', 'Cliquei em esqueci minha senha');
    };

    const loginFacebook = () => {
        Alert.alert('Atenção', 'Cliquei em login Facebook');
    };

    const createAccount = () => {
        Alert.alert('Atenção', 'Cliquei em Criar Conta');
    };

    return (
        <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
            <SafeAreaView />
            <Text style={styles.title}>Login</Text>
            <View style={styles.containerInputs}>
                <TextInput
                    style={styles.textInput}
                    placeholder="E-mail"
                    keyboardType="email-address"
                    maxLength={50}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Senha"
                    maxLength={10}
                    secureTextEntry
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={Login}
                    activeOpacity={0.8}
                >
                    <Text style={styles.label}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, styles.whiteBackground]}
                    onPress={forgetMyPassword}>
                    <Text style={[styles.label, styles.blackLabel]}>Esqueceu a sua senha?</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.divisor}>------------------------ ou ------------------------</Text>
            <View style={styles.containerFooter}>
                <TouchableOpacity
                    style={[styles.button, styles.socialButton]}
                    onPress={loginFacebook}
                >
                    <Text style={[styles.label, styles.socialLabel]}>
                        Login com o Facebook
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, styles.whiteBackground]}
                    onPress={createAccount}
                >
                    <Text style={[styles.label, styles.blackLabel]}>
                        Não possui uma conta?{' '}
                        <Text style={styles.boldWeight}>
                            Crie agora mesmo
                        </Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 26,
        marginTop: 24,
        fontWeight: 'bold',
    },
    containerInputs: {
        flex: 2,
        justifyContent: 'center',
    },
    textInput: {
        height: 40,
        borderWidth: 0.3,
        borderColor: 'grey',
        marginTop: 8,
        borderRadius: 5,
        padding: 5,
    },
    button: {
        height: 45,
        backgroundColor: '#000',
        justifyContent: 'center',
        marginTop: 16,
        borderRadius: 5,
    },
    label: {
        color: '#fff',
        textAlign: 'center',
    },
    whiteBackground: {
        backgroundColor: '#fff',
    },
    blackLabel: {
        color: '#000'
    },
    containerFooter: {
        flex: 1,
        justifyContent: 'center',
    },
    socialButton: {
        borderColor: 'blue',
        borderWidth: 0.3,
        backgroundColor: '#fff',
    },
    socialLabel: {
        color: 'blue',
    },
    boldWeight: {
        fontWeight: 'bold',
    },
    divisor: {
        textAlign: 'center',
        color: 'grey',
    },
});