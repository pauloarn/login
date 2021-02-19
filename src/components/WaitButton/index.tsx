import React from 'react'
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native'
import styles from './styles'
import { LinearGradient } from 'expo-linear-gradient'
import { rootState } from "../../store";
import { useSelector } from 'react-redux'
import {
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

interface Props {
  wait: boolean;
  disabled?: boolean;
  onPress(): void;
  label: string;
  elevation?: number;
}

const WaitButton = (props: Props) => {

  const { isBig } = useSelector(
    (state: rootState) => state.users
  )

  return (
    <LinearGradient colors={["#383E71", "#9D25B0"]} start={{ x: 1, y: 1 }} style={{ ...styles.buttonContainer, elevation: props.elevation ? props.elevation : 0 }}>
      <TouchableOpacity
        style={{ ...styles.accessButton, paddingVertical: isBig ? wp('3%') : wp("4%") }}
        onPress={props.onPress}
        disabled={props.wait || props.disabled}
      >
        {props.wait ? (
          <ActivityIndicator color={'white'} />
        ) : (
            <Text style={{ ...styles.accessButtonText, fontSize: isBig ? wp('3%') : wp('4%') }}>
              {props.label}
            </Text>
          )}
      </TouchableOpacity>
    </LinearGradient>
  )
}

export default WaitButton
