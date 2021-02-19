import React from 'react';
import Login from './src/screens/Login'
import { Provider } from 'react-redux'
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
} from '@expo-google-fonts/montserrat'
import store from './src/store'

export default function App() {
  function isLoaded(): boolean {
    const [fonts] = useFonts({
      Montserrat_400Regular,
      Montserrat_600SemiBold
    })
    return fonts
  }
  return isLoaded() ? (
    <Provider store={store}>
      <Login />
    </Provider>
  ) : (<></>)
}