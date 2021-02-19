import React from 'react'
import {
  TextInput, TextInputProps
} from 'react-native'
import useStyles from './styles'

interface Props {
  placeholder: string;
  value: string;
  onChange(text: string): void;
  isSecurity?: boolean;
  keyboardType?: TextInputProps['keyboardType'];
  isWrong?: boolean;
}

const TextInputCustom = ({ placeholder, value, isSecurity = false, onChange, keyboardType = 'default', isWrong = false }: Props) => {
  const classes = useStyles()

  return (
    <TextInput
      style={{
        ...classes.textInput,
        borderColor: isWrong ? "#FF377F" : "#989FDB"
      }}
      keyboardType={keyboardType}
      value={value}
      onChangeText={text => onChange(text)}
      secureTextEntry={isSecurity}
      placeholder={placeholder}
      placeholderTextColor="#383E71"
    />
  )
}

export default TextInputCustom
