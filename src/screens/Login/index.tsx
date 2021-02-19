import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import TextInputCustom from '../../components/TextInputCustom'
import { rootState } from "../../store";
import stylesPhone from './stylesPhone'
import stylesTablet from './stylesTablet'
import WaitButton from '../../components/WaitButton';
import { useDispatch, useSelector } from 'react-redux'
import { logIn, setIsBig } from '../../store/UserReducer'
import Toast from 'react-native-toast-message';
import Background from './components/Background'
import { IStyle } from '../../models/stylesModels'


const Login = () => {
    const dispatch = useDispatch()
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [isValidated, setIsValidated] = useState(false)
    const [isEmailValid, setIsEmailValid] = useState(false)
    const [styles, setStyles] = useState<IStyle>(stylesPhone)
    const { isLoginIn, isBig } = useSelector(
        (state: rootState) => state.users
    )

    useEffect(() => {
        if (Dimensions.get('screen').width > 600) {
            dispatch(setIsBig(true))
        } else {
            dispatch(setIsBig(false))
        }
    }, [])

    useEffect(() => {
        if (isBig) {
            setStyles(stylesTablet)
        } else {
            setStyles(stylesPhone)
        }
    }, [isBig])

    const doLogin = () => {
        if (validateEmail(userEmail)) {
            dispatch(logIn({ email: userEmail, password: userPassword }))
            setIsEmailValid(false)
        } else {
            setIsEmailValid(true)
        }
    }

    function validateEmail(email: string): boolean {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    useEffect(() => {
        if (userEmail.length > 0 && userPassword.length > 0) {
            setIsValidated(true)
        }
    }, [userEmail, userPassword])

    return (
        <View>
            <Background />
            <View style={styles.container}>
                <Text style={styles.hello} >Olá, seja bem-vindo</Text>
                <Text style={styles.descText}>Para acessar a plataforma, faça seu login</Text>
                <View style={styles.inputComponent}>
                    <Text style={styles.txtLabel}>E-MAIL</Text>
                    <TextInputCustom
                        placeholder="use.name@email.com"
                        value={userEmail}
                        onChange={(email) => setUserEmail(email)}
                        isWrong={isEmailValid}
                    />
                    {isEmailValid ? (
                        <Text style={styles.emailError}>Digite um e-mail válido</Text>
                    ) : (
                            <></>
                        )}
                    <Text style={{ ...styles.txtLabel, marginTop: 20 }}>SENHA</Text>
                    <TextInputCustom
                        placeholder="********"
                        value={userPassword}
                        onChange={(password) => setUserPassword(password)}
                        isSecurity={true}
                    />
                </View>
            </View>
            <View style={isBig ? styles.bottomContainer : (null)}>
                <View style={styles.butonContainer}>
                    <WaitButton
                        disabled={!isValidated}
                        wait={isLoginIn}
                        onPress={() => doLogin()}
                        label="ENTRAR"
                    />
                </View>
                <View style={isBig ? styles.bottomTextContainer : styles.bottomContainer}>
                    <Text style={styles.bottomText}>Esqueceu seu login ou senha?</Text>
                    <TouchableOpacity style={styles.bottomClickContainer}>
                        <Text style={styles.bottomText}>Clique aqui</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Toast ref={(ref) => Toast.setRef(ref)} />
        </View>
    )
}

export default Login