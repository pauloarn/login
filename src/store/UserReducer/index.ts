import api from '../../services/api'
import {IUserData, IUserLogin} from '../../models/userModel'
import { AppThunk, AppDispatch } from "../index";
import Toast from 'react-native-toast-message';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
    isLoginIn: boolean;
    isBig: boolean
}

const initialState : IInitialState = {
    isLoginIn: false,
    isBig: false
}

const usersSlice = createSlice({
    name: 'usersSlice',
    initialState,
    reducers:{
        setIsLoginIn: (state, {payload}:PayloadAction<boolean>) =>{
            state.isLoginIn = payload;
        },
        setIsBig:(state, {payload}:PayloadAction<boolean>)=>{
            state.isBig = payload;
        }
    }
})

export const logIn =({ 
    email,
    password
}:{
    email: string;
    password: string
}): AppThunk=> async (dispatch: AppDispatch, getState)=>{

    const{setIsLoginIn}= usersSlice.actions
    const user = email.split('_')
    dispatch(setIsLoginIn(true))
    try{
        await api.get(`/sessionuser/${user[1].substr(0,1)}`)
        dispatch(setIsLoginIn(false))
        Toast.show({
            position: 'top',
            type:'success',
            text1: "Login Efetuado com Sucesso",
            autoHide: true,
            visibilityTime: 1000
        })
    }catch(error){
        dispatch(setIsLoginIn(false))        
        Toast.show({
            position: 'top',
            type:'error',
            text1: 'Falha no Login',
            text2: 'Verifique suas Credenciais',
            autoHide: true,
            visibilityTime: 1000
        })
    }

}

export const {
    setIsBig
} = usersSlice.actions

export default usersSlice.reducer
